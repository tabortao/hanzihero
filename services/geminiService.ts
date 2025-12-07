import { GoogleGenAI, Type } from "@google/genai";
import { AIExplanation, AppSettings, Character, Story } from "../types";
import { getSettings } from "./storage";
import { getOfflineCharacter } from "../data/dictionary";

// Helper for simple ID
const generateId = () => Date.now().toString(36) + Math.random().toString(36).substring(2);

/**
 * GENERIC OPENAI-COMPATIBLE FETCH
 */
async function callOpenAICompatible(
    settings: AppSettings, 
    systemPrompt: string, 
    userPrompt: string,
    schemaDescription: string
): Promise<any> {
    // ... existing OpenAI logic for single call ...
    // Note: This is kept for backward compatibility or non-streaming tasks like explainCharacter
    const finalSystemPrompt = `${systemPrompt}\n\n请务必只返回纯 JSON 格式数据，不要包含 Markdown 标记（如 \`\`\`json）。JSON 结构必须严格遵守以下定义：\n${schemaDescription}`;

    const payload = {
        model: settings.model,
        messages: [
            { role: "system", content: finalSystemPrompt },
            { role: "user", content: userPrompt }
        ],
        response_format: { type: "json_object" }, 
        temperature: 0.7,
        max_tokens: 2000
    };

    let url = settings.apiBaseUrl.replace(/\/+$/, '');
    if (!url.endsWith('/v1') && !url.includes('google')) {
       if (!url.includes('/chat/completions')) {
           url = `${url}/chat/completions`;
       }
    } else if (url.endsWith('/v1')) {
        url = `${url}/chat/completions`;
    }

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${settings.apiKey}`
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        const errText = await response.text();
        throw new Error(`API Error (${response.status}): ${errText}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;
    
    if (!content) throw new Error("Empty response from AI provider");
    const jsonStr = content.replace(/^```json\s*/, '').replace(/\s*```$/, '');
    return JSON.parse(jsonStr);
}


export const explainCharacter = async (char: string, forceAI: boolean = false): Promise<AIExplanation> => {
  // 1. Check Offline Dictionary first (unless forced)
  if (!forceAI) {
      const offlineData = getOfflineCharacter(char);
      if (offlineData) {
          return JSON.parse(JSON.stringify(offlineData));
      }
  }

  const settings = getSettings();
  const systemPrompt = "你是一位专业的小学语文老师，请用生动有趣的中文为小学生讲解汉字。";
  const userPrompt = `
  请分析汉字 "${char}"，供小学生识字学习使用。
  请严格按照JSON格式返回以下内容：
  1. pinyin: 该汉字的拼音 (例如: "hǎo")。
  2. structure: 字形结构 (如：左右结构、上下结构、独体字)。
  3. composition: 部件拆解 (如："日 + 月")。请务必使用 "+" 号连接部件。
  4. compositionParts: 拆解后的部件数组，如果部件是汉字则提供拼音，否则拼音为空。
  5. memoryTip: 一个非常简短、有趣好记的顺口溜或一句话故事（20字以内），方便朗读给孩子听。
  6. words: 两个常见组词，每个组词包含 word (词语) 和 pinyin (拼音)。
  7. sentenceData: 一个包含该字的简单例句。注意：必须将句子严格拆解为单个汉字对象的数组。例如“爸爸”必须拆分为 [{"char":"爸","pinyin":"bà"}, {"char":"爸","pinyin":"ba"}]，绝对不允许将多个字合并在一个对象中。
  `;

  // Schema definition for Google SDK
  const googleSchema = {
    type: Type.OBJECT,
    properties: {
      pinyin: { type: Type.STRING },
      structure: { type: Type.STRING },
      composition: { type: Type.STRING },
      compositionParts: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { char: { type: Type.STRING }, pinyin: { type: Type.STRING } } } },
      memoryTip: { type: Type.STRING },
      words: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { word: { type: Type.STRING }, pinyin: { type: Type.STRING } } } },
      sentenceData: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { char: { type: Type.STRING }, pinyin: { type: Type.STRING } } } }
    },
    required: ["pinyin", "structure", "composition", "memoryTip", "words", "sentenceData"]
  };

  const schemaDescription = `{"pinyin": "string", "structure": "string", "composition": "string", "compositionParts": [{"char": "string", "pinyin": "string"}], "memoryTip": "string", "words": [{"word": "string", "pinyin": "string"}], "sentenceData": [{"char": "string", "pinyin": "string"}]}`;

  const envKey = process.env.API_KEY || '';
  const effectiveKey = settings.apiKey || envKey;

  if (!effectiveKey) return getErrorState();

  try {
    if (settings.apiBaseUrl && settings.apiBaseUrl.trim() !== '') {
        const data = await callOpenAICompatible(settings, systemPrompt, userPrompt, schemaDescription);
        return data as AIExplanation;
    } else {
        const ai = new GoogleGenAI({ apiKey: effectiveKey });
        const response = await ai.models.generateContent({
            model: settings.model.includes('gemini') ? settings.model : "gemini-2.5-flash",
            contents: userPrompt,
            config: {
                systemInstruction: systemPrompt,
                responseMimeType: "application/json",
                responseSchema: googleSchema
            }
        });
        if (response.text) return JSON.parse(response.text) as AIExplanation;
    }
    throw new Error("No data returned");
  } catch (error) {
    console.error("AI Service Error:", error);
    return getErrorState();
  }
};

const getErrorState = (): AIExplanation => ({
  structure: "未知结构",
  composition: "暂无拆解",
  compositionParts: [],
  memoryTip: "AI老师连接失败，请检查设置中的API配置。",
  words: [],
  sentenceData: []
});

// --- Streamed Story Generation ---

export const generateStoryStream = async (
    availableChars: Character[], 
    keywords: string | undefined,
    onChunk: (text: string) => void
): Promise<void> => {
  const settings = getSettings();
  const envKey = process.env.API_KEY || '';
  const effectiveKey = settings.apiKey || envKey;

  if (!effectiveKey) throw new Error("Missing API Key");

  const charList = availableChars.map(c => c.char).sort(() => 0.5 - Math.random()).slice(0, 50).join('，');
  const targetLength = settings.storyLength || 50;
  
  const systemPrompt = "你是一位儿童文学作家，擅长用有限的汉字编写有趣的小故事。";
  let userPrompt = `
  请使用以下汉字列表中的字（可以适量添加其他简单汉字，但尽量复用列表中的字），编写一个生动有趣、逻辑通顺的短篇故事。
  
  要求：
  1. 故事长度大约 ${targetLength} 字。
  2. 可用汉字列表：${charList || "（无特定限制，请使用一年级简单汉字）"}。
  `;

  if (keywords && keywords.trim().length > 0) {
      userPrompt += `3. 故事主题或关键词请包含：${keywords}。\n`;
  } else {
      userPrompt += `3. 故事主题随机，但请确保每次生成的故事都尽量独特，不要重复。\n`;
  }

  // Important: We request plain text format for better streaming stability, then parse on client.
  userPrompt += `
  格式要求：
  第一行：故事标题
  第二行：(空行)
  第三行及以后：故事正文内容

  请直接开始生成，不要包含 Markdown 标记或其他多余解释。
  `;

  try {
    if (settings.apiBaseUrl && settings.apiBaseUrl.trim() !== '') {
        // OpenAI / Custom Streaming
        let url = settings.apiBaseUrl.replace(/\/+$/, '');
        if (!url.endsWith('/v1') && !url.includes('google')) {
           if (!url.includes('/chat/completions')) url = `${url}/chat/completions`;
        } else if (url.endsWith('/v1')) {
            url = `${url}/chat/completions`;
        }

        const payload = {
            model: settings.model,
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt }
            ],
            stream: true,
            temperature: 0.7,
            max_tokens: 2000
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${settings.apiKey}` },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
             const txt = await response.text();
             throw new Error(`Stream Error: ${response.status} ${txt}`);
        }

        const reader = response.body?.getReader();
        const decoder = new TextDecoder();
        if(!reader) throw new Error("No reader");

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            const chunk = decoder.decode(value);
            // Parse SSE format: "data: {...}"
            const lines = chunk.split('\n');
            for (const line of lines) {
                if (line.startsWith('data: ')) {
                    const dataStr = line.slice(6);
                    if (dataStr === '[DONE]') break;
                    try {
                        const json = JSON.parse(dataStr);
                        const content = json.choices?.[0]?.delta?.content;
                        if (content) onChunk(content);
                    } catch (e) {
                        // ignore partial json
                    }
                }
            }
        }

    } else {
        // Google GenAI Streaming
        const ai = new GoogleGenAI({ apiKey: effectiveKey });
        const result = await ai.models.generateContentStream({
            model: settings.model.includes('gemini') ? settings.model : "gemini-2.5-flash",
            contents: userPrompt,
            config: {
                systemInstruction: systemPrompt,
            }
        });

        for await (const chunk of result) {
            const text = chunk.text;
            if (text) onChunk(text);
        }
    }
  } catch (error) {
    console.error("Generate Story Error:", error);
    throw error;
  }
};

/**
 * Recognize text from an image (OCR) for story generation
 */
export const recognizeTextFromImage = async (base64Image: string): Promise<{title: string, content: string}> => {
    const settings = getSettings();
    const envKey = process.env.API_KEY || '';
    const effectiveKey = settings.apiKey || envKey;

    if (!effectiveKey) throw new Error("Missing API Key");

    const systemPrompt = "你是一个智能OCR助手，请提取图片中的故事内容。";
    const userPrompt = "请识别这张图片中的文字内容。如果包含标题，请提取标题。请以JSON格式返回：{title: '标题(如果没有则自己起一个)', content: '故事正文'}。只返回JSON，不要其他内容。";

    // Only support Gemini for multimodal for now due to complexity of custom endpoints with images
    // Fallback to text if using custom endpoint (or throw error)
    if (settings.apiBaseUrl && settings.apiBaseUrl.trim() !== '' && !settings.apiBaseUrl.includes('google')) {
       // Simple warning, complex to implement generic multimodal fetch in one go
       throw new Error("图片识别目前仅支持 Google Gemini 模型"); 
    }

    try {
        const ai = new GoogleGenAI({ apiKey: effectiveKey });
        // Gemini expects base64 without the header prefix for inlineData
        const base64Data = base64Image.split(',')[1]; 
        
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash", // Use flash for speed/cost
            contents: [
                {
                    role: 'user',
                    parts: [
                        { text: userPrompt },
                        { inlineData: { mimeType: 'image/jpeg', data: base64Data } }
                    ]
                }
            ],
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        title: { type: Type.STRING },
                        content: { type: Type.STRING }
                    }
                }
            }
        });

        if (response.text) {
             return JSON.parse(response.text);
        }
        throw new Error("Recognition failed");
    } catch (error) {
        console.error("OCR Error:", error);
        throw error;
    }
};

export const testConnection = async (settings: AppSettings): Promise<boolean> => {
    // ... existing test code ...
    const envKey = process.env.API_KEY || '';
    const effectiveKey = settings.apiKey || envKey;
    if (!effectiveKey) return false;
    try {
        if (settings.apiBaseUrl && settings.apiBaseUrl.trim() !== '') {
             // Simple test call
             await callOpenAICompatible(settings, "You are a helper.", "Say hi", "{}");
             return true;
        } else {
            const ai = new GoogleGenAI({ apiKey: effectiveKey });
            await ai.models.generateContent({ model: settings.model || "gemini-2.5-flash", contents: "Hi" });
            return true;
        }
    } catch (e) { 
        console.error("Connection Test Failed:", e);
        return false; 
    }
};