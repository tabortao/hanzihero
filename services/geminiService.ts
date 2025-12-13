
import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import { AIExplanation, AppSettings, Character, Story } from "../types";
import { getSettings, getCharacterCache, saveCharacterCache } from "./storage";
import { getOfflineCharacter } from "../data/dictionary";

// Helper for simple ID
const generateId = () => Date.now().toString(36) + Math.random().toString(36).substring(2);

// Retry Helper
async function withRetry<T>(fn: () => Promise<T>, retries = 2, delay = 1000): Promise<T> {
    try {
        return await fn();
    } catch (err) {
        if (retries > 0) {
            console.warn(`API Call failed, retrying... (${retries} left)`);
            await new Promise(res => setTimeout(res, delay));
            return withRetry(fn, retries - 1, delay * 1.5);
        }
        throw err;
    }
}

/**
 * GENERIC OPENAI-COMPATIBLE FETCH
 */
async function callOpenAICompatible(
    settings: AppSettings, 
    systemPrompt: string, 
    userPrompt: string,
    schemaDescription: string
): Promise<any> {
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

/**
 * Generic OpenAI Vision Call
 */
async function callOpenAIVision(
    baseUrl: string,
    apiKey: string,
    model: string,
    prompt: string,
    base64Image: string
): Promise<any> {
    const payload = {
        model: model,
        messages: [
            {
                role: "user",
                content: [
                    { type: "text", text: prompt },
                    { type: "image_url", image_url: { url: `data:image/jpeg;base64,${base64Image}` } }
                ]
            }
        ],
        max_tokens: 4000 // Increased for full text extraction
    };

    let url = baseUrl.replace(/\/+$/, '');
    if (!url.endsWith('/v1') && !url.includes('google')) {
         if (!url.includes('/chat/completions')) url = `${url}/chat/completions`;
    } else if (url.endsWith('/v1')) {
         url = `${url}/chat/completions`;
    }

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Vision API Error (${response.status}): ${errText}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;
    if (!content) throw new Error("Empty response from Vision AI");
    
    // Check if response mimics JSON (some models do this automatically)
    const match = content.match(/\{[\s\S]*\}/);
    if (match) {
        try {
            return JSON.parse(match[0]);
        } catch(e) {
            // ignore
        }
    }
    
    // Return raw text structure if not JSON
    return { title: "识别结果", content: content };
}


export const explainCharacter = async (char: string, forceAI: boolean = false): Promise<AIExplanation> => {
  // 1. Check Offline Dictionary first (unless forced)
  if (!forceAI) {
      const offlineData = getOfflineCharacter(char);
      if (offlineData) {
          return JSON.parse(JSON.stringify(offlineData));
      }
  }

  // 2. Check Local Storage Cache (unless forced)
  if (!forceAI) {
      const cached = getCharacterCache(char);
      if (cached) {
          return cached;
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
    let result: AIExplanation;
    if (settings.apiBaseUrl && settings.apiBaseUrl.trim() !== '') {
        const data = await withRetry(() => callOpenAICompatible(settings, systemPrompt, userPrompt, schemaDescription));
        result = data as AIExplanation;
    } else {
        const ai = new GoogleGenAI({ apiKey: effectiveKey });
        const response = await withRetry(() => ai.models.generateContent({
            model: settings.model.includes('gemini') ? settings.model : "gemini-2.5-flash",
            contents: userPrompt,
            config: {
                systemInstruction: systemPrompt,
                responseMimeType: "application/json",
                responseSchema: googleSchema
            }
        })) as GenerateContentResponse;
        if (response.text) {
             result = JSON.parse(response.text) as AIExplanation;
        } else {
             throw new Error("No data returned");
        }
    }
    
    // Save to cache after successful fetch
    saveCharacterCache(char, result);
    return result;

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
            const text = (chunk as GenerateContentResponse).text;
            if (text) onChunk(text);
        }
    }
  } catch (error) {
    console.error("Generate Story Error:", error);
    throw error;
  }
};

/**
 * Recognize text from an image (OCR + Storytelling)
 * Updated to use robust Text parsing instead of strict JSON
 */
export const recognizeTextFromImage = async (base64Image: string, customInstruction?: string): Promise<{title: string, content: string}> => {
    const settings = getSettings();
    const envKey = process.env.API_KEY || '';
    
    // --- Intelligent Model Fallback Logic ---
    let visionKey = settings.visionApiKey || settings.apiKey || envKey;
    let visionHost = settings.visionApiBaseUrl || settings.apiBaseUrl;
    let visionModel = settings.visionModel;

    // If no specific vision model configured, check if main model is likely text-only
    if (!visionModel) {
        const mainModel = settings.model || '';
        const isTextOnly = mainModel.includes('deepseek') || mainModel.includes('glm');
        
        if (isTextOnly) {
             // Fallback to Gemini Flash
             visionModel = "gemini-2.5-flash";
             
             // CRITICAL FIX: If user is using a custom host (like OneAPI/NewAPI) for DeepSeek, 
             // that host MIGHT also support Gemini or other vision models. 
             // Don't blindy force Google Direct unless the host is explicitly DeepSeek's official one.
             if (settings.apiBaseUrl && !settings.apiBaseUrl.includes('deepseek.com')) {
                 // Keep the custom host/key, just switch model
                 visionHost = settings.apiBaseUrl;
                 visionKey = settings.apiKey;
             } else {
                 // DeepSeek Official or unknown text-only: Fallback to Google Direct
                 // Requires valid Google API Key in env or settings
                 visionKey = envKey; 
                 visionHost = ''; // Reset host to default Google
             }
        } else {
             // Assume main model might support vision (e.g., gpt-4o, gemini-pro)
             visionModel = mainModel || "gemini-2.5-flash";
        }
    }

    if (!visionKey) throw new Error("缺少视觉模型配置。如果您使用 DeepSeek，请在设置中单独配置 Vision API (如 Google Gemini 或支持视觉的中转服务)。");

    // Optimized instruction for robust text extraction
    let userPrompt = customInstruction;
    if (!userPrompt) {
         userPrompt = `
         任务：OCR 图片文字识别。
         请仔细提取图片中所有可见的汉字和标点符号。
         
         1. 如果图片是绘本或文章，请提取正文内容。
         2. 如果图片中没有文字，请简要描述图片内容。
         `;
    }

    // Relaxed format requirement
    userPrompt += `
    
    请按以下格式返回结果（如果无法区分标题，可只返回内容）：
    TITLE: [标题]
    CONTENT:
    [内容]
    `;

    try {
        let rawText = '';

        if (visionHost && visionHost.trim() !== '' && !visionHost.includes('google')) {
             const result = await withRetry(() => callOpenAIVision(visionHost, visionKey, visionModel, userPrompt, base64Image.split(',')[1]));
             // If OpenAI wrapper returns an object (from JSON parse), use it
             if (typeof result === 'object' && result.content && result.content !== '') {
                 // Check if it's the fallback object or parsed JSON
                 if (result.title === "识别结果") {
                      // It's the raw text fallback, so use content as raw text
                      rawText = result.content;
                 } else {
                      // It's a valid JSON object
                      return { title: result.title, content: result.content };
                 }
             } else {
                 rawText = String(result);
             }
        } else {
            // Default to Google GenAI
            const ai = new GoogleGenAI({ apiKey: visionKey });
            const base64Data = base64Image.split(',')[1]; 
            
            const response = await withRetry(() => ai.models.generateContent({
                model: visionModel.includes('gemini') ? visionModel : "gemini-2.5-flash",
                contents: [
                    {
                        role: 'user',
                        parts: [
                            { text: userPrompt },
                            { inlineData: { mimeType: 'image/jpeg', data: base64Data } }
                        ]
                    }
                ]
            })) as GenerateContentResponse;

            rawText = response.text || '';
        }

        // --- Post-Processing / Parsing Logic ---
        // Clean up common artifact from some vision models
        rawText = rawText.replace(/<lend_of_boxl>/g, '').replace(/<box_2d>/g, '');
        // Remove markdown block if present
        let cleanText = rawText.replace(/^```(json|text)?/i, '').replace(/```$/, '').trim();

        if (!cleanText) {
             throw new Error("AI 未返回任何有效内容，请重试或检查图片清晰度。");
        }

        let title = "扫描内容";
        let content = "";

        // Regex Parse for strict format
        const titleMatch = cleanText.match(/TITLE:\s*(.*)/i);
        const contentMatch = cleanText.match(/CONTENT:\s*([\s\S]*)/i);

        if (titleMatch && titleMatch[1]) {
            title = titleMatch[1].trim();
        }
        
        if (contentMatch && contentMatch[1]) {
            content = contentMatch[1].trim();
        }

        // Fallback: If strict parsing failed to get content
        if (!content) {
             // Try to remove the markers to get raw content
             let tempText = cleanText.replace(/TITLE:\s*.*(\n|$)/i, '').replace(/CONTENT:\s*/i, '').trim();
             
             // If replacing resulted in empty string (e.g. only had title line), revert to full text
             if (!tempText) tempText = cleanText;

             const lines = tempText.split('\n').map(l => l.trim()).filter(l => l);
             
             // Heuristic: If first line is short and followed by more text, treat as title
             if (lines.length > 1 && lines[0].length < 20) {
                 if (title === "扫描内容") title = lines[0]; // Update title only if default
                 content = lines.slice(1).join('\n');
             } else {
                 content = tempText;
             }
        }
        
        // Final Safety
        if (!content && title !== "扫描内容") {
            // If we captured a title but no content body, the text might be short enough to be just content
            content = title; 
        }
        
        if (!content) {
             // Use everything we have
             content = cleanText;
        }
        
        return { title, content };

    } catch (error: any) {
        console.error("Vision API Error:", error);
        throw new Error(error.message || "图片识别失败，请检查网络或配置");
    }
};

/**
 * Generate matching game data (Pairs for Hanzi Crush)
 */
export const generateMatchGameData = async (chars: Character[]): Promise<{
    pairs: {
        id: string;
        word: string;
        pinyin: string;
        hint?: string;
    }[]
}> => {
    const settings = getSettings();
    const envKey = process.env.API_KEY || '';
    const effectiveKey = settings.apiKey || envKey;

    if (!effectiveKey) throw new Error("Missing API Key");

    const charList = chars.map(c => c.char).join('、');
    const systemPrompt = "你是一位精通汉字教学的老师。";
    const userPrompt = `
    请基于以下汉字列表，设计“汉字消消乐”游戏的关卡数据。
    汉字列表：${charList}

    请生成 10 个词语（可以是双字词、成语或短语）。
    要求：
    1. 尽量使用列表中的汉字，如果不够，可以搭配简单的常见字。
    2. 必须生成 10 个。
    3. 每个词语提供对应的拼音。
    
    JSON格式要求：
    {
        "pairs": [
            { "id": "1", "word": "爸爸", "pinyin": "bà ba", "hint": "称呼" },
            { "id": "2", "word": "快乐", "pinyin": "kuài lè", "hint": "心情" }
        ]
    }
    `;

    const schemaDescription = `{"pairs": [{"id": "string", "word": "string", "pinyin": "string", "hint": "string"}]}`;
    const googleSchema = {
        type: Type.OBJECT,
        properties: {
            pairs: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        id: { type: Type.STRING },
                        word: { type: Type.STRING },
                        pinyin: { type: Type.STRING },
                        hint: { type: Type.STRING }
                    },
                    required: ["id", "word", "pinyin"]
                }
            }
        }
    };

    try {
        let result: any;
        if (settings.apiBaseUrl && settings.apiBaseUrl.trim() !== '') {
             const data = await withRetry(() => callOpenAICompatible(settings, systemPrompt, userPrompt, schemaDescription));
             result = data;
        } else {
            const ai = new GoogleGenAI({ apiKey: effectiveKey });
            const response = await withRetry(() => ai.models.generateContent({
                model: settings.model.includes('gemini') ? settings.model : "gemini-2.5-flash",
                contents: userPrompt,
                config: {
                    systemInstruction: systemPrompt,
                    responseMimeType: "application/json",
                    responseSchema: googleSchema
                }
            })) as GenerateContentResponse;
            if (response.text) result = JSON.parse(response.text);
            else throw new Error("No data");
        }
        return result;
    } catch (e) {
        console.error("Match Game AI Error", e);
        throw e;
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
             await withRetry(() => callOpenAICompatible(settings, "You are a helper.", "Say hi", "{}"), 1);
             return true;
        } else {
            const ai = new GoogleGenAI({ apiKey: effectiveKey });
            await withRetry(() => ai.models.generateContent({ model: settings.model || "gemini-2.5-flash", contents: "Hi" }), 1);
            return true;
        }
    } catch (e) { 
        console.error("Connection Test Failed:", e);
        return false; 
    }
};

export const testVisionConnection = async (settings: AppSettings): Promise<boolean> => {
    const envKey = process.env.API_KEY || '';
    // Use specific vision key if present, else fallback
    const key = settings.visionApiKey || settings.apiKey || envKey;
    const host = settings.visionApiBaseUrl || settings.apiBaseUrl;
    const model = settings.visionModel || settings.model || "gemini-2.5-flash";

    if (!key) return false;

    // Small 1x1 white pixel base64 for testing
    const testImage = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";

    try {
         if (host && host.trim() !== '' && !host.includes('google')) {
             await withRetry(() => callOpenAIVision(host, key, model, "What color is this?", testImage), 1);
             return true;
         } else {
             const ai = new GoogleGenAI({ apiKey: key });
             await withRetry(() => ai.models.generateContent({
                 model: model,
                 contents: [
                     {
                         role: 'user',
                         parts: [
                             { text: "What is this?" },
                             { inlineData: { mimeType: 'image/jpeg', data: testImage } }
                         ]
                     }
                 ]
             }), 1);
             return true;
         }
    } catch (e) {
        console.error("Vision Connection Test Failed:", e);
        return false;
    }
};
