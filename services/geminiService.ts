import { GoogleGenAI, Type } from "@google/genai";
import { AIExplanation, AppSettings, Character, Story } from "../types";
import { getSettings } from "./storage";

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
    const start = Date.now();
    try {
        // Append schema instructions for generic models
        const finalSystemPrompt = `${systemPrompt}\n\n请务必只返回纯 JSON 格式数据，不要包含 Markdown 标记（如 \`\`\`json）。JSON 结构必须严格遵守以下定义：\n${schemaDescription}`;

        const payload = {
            model: settings.model,
            messages: [
                { role: "system", content: finalSystemPrompt },
                { role: "user", content: userPrompt }
            ],
            // DeepSeek and others often support json_object mode, but 'text' is safer for broad compatibility with strong prompting
            response_format: { type: "json_object" }, 
            temperature: 0.7,
            max_tokens: 2000
        };

        // If using SiliconFlow or others, url might need /chat/completions appended if user didn't provide it
        // But usually we ask user to provide full base URL or handle standard suffixes.
        // Standard convention: Base URL is `https://api.deepseek.com`, endpoint is `/chat/completions`
        // We will assume settings.apiBaseUrl is the *base* and append /chat/completions
        let url = settings.apiBaseUrl.replace(/\/+$/, ''); // remove trailing slash
        if (!url.endsWith('/v1') && !url.includes('google')) {
           // Heuristic: most conform to /v1/chat/completions. 
           // If user put 'https://api.deepseek.com', we might need 'https://api.deepseek.com/chat/completions'
           // A common pattern in settings is just the host. Let's try to be smart.
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

        // Clean Markdown if present
        const jsonStr = content.replace(/^```json\s*/, '').replace(/\s*```$/, '');
        return JSON.parse(jsonStr);

    } catch (error) {
        console.error("OpenAI Compatible API Error:", error);
        throw error;
    }
}


export const explainCharacter = async (char: string): Promise<AIExplanation> => {
  const settings = getSettings();

  const systemPrompt = "你是一位专业的小学语文老师，请用生动有趣的中文为小学生讲解汉字。";
  const userPrompt = `
  请分析汉字 "${char}"，供小学生识字学习使用。
  请严格按照JSON格式返回以下内容：
  1. structure: 字形结构 (如：左右结构、上下结构、独体字)。
  2. composition: 部件拆解 (如："日 + 月")。请务必使用 "+" 号连接部件。
  3. compositionParts: 拆解后的部件数组，如果部件是汉字则提供拼音，否则拼音为空。
  4. memoryTip: 一个非常简短、有趣好记的顺口溜或一句话故事（20字以内），方便朗读给孩子听。
  5. words: 两个常见组词，每个组词包含 word (词语) 和 pinyin (拼音)。
  6. sentenceData: 一个包含该字的简单例句。注意：必须将句子严格拆解为单个汉字对象的数组。例如“爸爸”必须拆分为 [{"char":"爸","pinyin":"bà"}, {"char":"爸","pinyin":"ba"}]，绝对不允许将多个字合并在一个对象中。

  注意：
  - 所有解释内容必须使用简体中文。
  `;

  // Schema definition for Google SDK
  const googleSchema = {
    type: Type.OBJECT,
    properties: {
      structure: { type: Type.STRING },
      composition: { type: Type.STRING },
      compositionParts: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            char: { type: Type.STRING },
            pinyin: { type: Type.STRING }
          }
        }
      },
      memoryTip: { type: Type.STRING },
      words: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            word: { type: Type.STRING },
            pinyin: { type: Type.STRING }
          }
        }
      },
      sentenceData: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            char: { type: Type.STRING },
            pinyin: { type: Type.STRING }
          }
        }
      }
    },
    required: ["structure", "composition", "memoryTip", "words", "sentenceData"]
  };

  // String Schema for OpenAI-compatible prompts
  const schemaDescription = `
  {
    "structure": "string",
    "composition": "string",
    "compositionParts": [{"char": "string", "pinyin": "string"}],
    "memoryTip": "string",
    "words": [{"word": "string", "pinyin": "string"}],
    "sentenceData": [{"char": "string", "pinyin": "string"}]
  }
  `;

  const envKey = process.env.API_KEY || '';
  const effectiveKey = settings.apiKey || envKey;

  if (!effectiveKey) return getErrorState();

  try {
    // SWITCH: If apiBaseUrl is set and NOT empty, use Generic Provider. Otherwise Google.
    if (settings.apiBaseUrl && settings.apiBaseUrl.trim() !== '') {
        const data = await callOpenAICompatible(settings, systemPrompt, userPrompt, schemaDescription);
        return data as AIExplanation;
    } else {
        // GOOGLE NATIVE SDK
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

        if (response.text) {
            return JSON.parse(response.text) as AIExplanation;
        }
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

// --- Story Generation ---

export const generateStory = async (availableChars: Character[], keywords?: string): Promise<Story | null> => {
  const settings = getSettings();
  const envKey = process.env.API_KEY || '';
  const effectiveKey = settings.apiKey || envKey;

  if (!effectiveKey) return null;

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
      userPrompt += `
  3. 故事主题或关键词请包含：${keywords}。
      `;
  } else {
      userPrompt += `
  3. 故事主题随机，但请确保每次生成的故事都尽量独特，不要重复。
      `;
  }

  userPrompt += `
  请严格按照JSON格式返回。
  JSON 格式示例：
  {
    "title": "小猫钓鱼",
    "content": [{"char": "小", "pinyin": "xiǎo"}, {"char": "猫", "pinyin": "māo"}, {"char": "，", "pinyin": ""}]
  }
  `;

  const schemaDescription = `
  {
      "title": "string",
      "content": [{"char": "string", "pinyin": "string"}]
  }
  `;

  try {
    if (settings.apiBaseUrl && settings.apiBaseUrl.trim() !== '') {
        const data = await callOpenAICompatible(settings, systemPrompt, userPrompt, schemaDescription);
        return {
            id: generateId(),
            title: data.title,
            content: data.content,
            createdAt: Date.now(),
            isArchived: false,
            readCount: 0,
            keywords: keywords
        };
    } else {
        const ai = new GoogleGenAI({ apiKey: effectiveKey });
        const response = await ai.models.generateContent({
            model: settings.model.includes('gemini') ? settings.model : "gemini-2.5-flash",
            contents: userPrompt,
            config: {
                systemInstruction: systemPrompt,
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        title: { type: Type.STRING },
                        content: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    char: { type: Type.STRING },
                                    pinyin: { type: Type.STRING }
                                }
                            }
                        }
                    },
                    required: ["title", "content"]
                }
            }
        });

        if (response.text) {
            const data = JSON.parse(response.text);
            return {
                id: generateId(),
                title: data.title,
                content: data.content,
                createdAt: Date.now(),
                isArchived: false,
                readCount: 0,
                keywords: keywords
            };
        }
    }
    return null;

  } catch (error) {
    console.error("Generate Story Error:", error);
    return null;
  }
};

export const testConnection = async (settings: AppSettings): Promise<boolean> => {
    const envKey = process.env.API_KEY || '';
    const effectiveKey = settings.apiKey || envKey;
    if (!effectiveKey) return false;
    
    try {
        if (settings.apiBaseUrl && settings.apiBaseUrl.trim() !== '') {
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