import { GoogleGenAI, Type } from "@google/genai";
import { AIExplanation, AppSettings } from "../types";
import { getSettings } from "./storage";

export const explainCharacter = async (char: string): Promise<AIExplanation> => {
  const settings = getSettings();

  // Prompt designed for Chinese output
  const systemPrompt = "你是一位专业的小学语文老师，请用生动有趣的中文为小学生讲解汉字。";
  const userPrompt = `
  请分析汉字 "${char}"，供小学生识字学习使用。
  请严格按照JSON格式返回以下内容：
  1. structure: 字形结构 (如：左右结构、上下结构、独体字)。
  2. composition: 简单的部件拆解 (如："日" 加 "月")。
  3. memoryTip: 一个非常简短、有趣好记的顺口溜或一句话故事（20字以内），方便朗读给孩子听。
  4. words: 两个常见组词，每个组词包含 word (词语) 和 pinyin (拼音)。
  5. sentenceData: 一个包含该字的简单例句，拆解为字符数组，每个对象包含 char (汉字) 和 pinyin (该字的拼音)。

  注意：
  - 所有解释内容必须使用简体中文。
  - sentenceData 中的标点符号也需要作为一个对象，pinyin为空字符串。
  `;

  // 1. Check if using Custom OpenAI Compatible API
  if (settings.apiBaseUrl && settings.apiKey) {
    try {
      const response = await fetch(`${settings.apiBaseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${settings.apiKey}`
        },
        body: JSON.stringify({
          model: settings.model || 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt }
          ],
          response_format: { type: "json_object" }
        })
      });

      if (!response.ok) {
        throw new Error(`Custom API Error: ${response.statusText}`);
      }

      const data = await response.json();
      const content = data.choices[0].message.content;
      return JSON.parse(content) as AIExplanation;
    } catch (error) {
      console.error("Custom API Error:", error);
      // Fallback or return error state
      return getErrorState();
    }
  }

  // 2. Default to Google GenAI SDK (Gemini)
  const envKey = process.env.API_KEY || '';
  const effectiveKey = settings.apiKey || envKey;

  if (!effectiveKey) {
    console.warn("No API Key found");
    return getErrorState();
  }

  try {
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
            structure: { type: Type.STRING },
            composition: { type: Type.STRING },
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
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as AIExplanation;
    }
    throw new Error("No data returned");
  } catch (error) {
    console.error("Gemini API Error:", error);
    return getErrorState();
  }
};

const getErrorState = (): AIExplanation => ({
  structure: "未知结构",
  composition: "暂无拆解",
  memoryTip: "AI老师暂时无法连接，请检查设置。",
  words: [],
  sentenceData: []
});

export const testConnection = async (settings: AppSettings): Promise<boolean> => {
  const prompt = "Hello";

  // 1. Check if using Custom OpenAI Compatible API
  if (settings.apiBaseUrl && settings.apiKey) {
    try {
      const response = await fetch(`${settings.apiBaseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${settings.apiKey}`
        },
        body: JSON.stringify({
          model: settings.model || 'gpt-3.5-turbo',
          messages: [
            { role: 'user', content: prompt }
          ],
          max_tokens: 5
        })
      });
      return response.ok;
    } catch (error) {
      console.error("Custom API Test Error:", error);
      return false;
    }
  }

  // 2. Default to Google GenAI SDK (Gemini)
  const envKey = process.env.API_KEY || '';
  const effectiveKey = settings.apiKey || envKey;

  if (!effectiveKey) return false;

  try {
    const ai = new GoogleGenAI({ apiKey: effectiveKey });
    const modelToUse = settings.model || "gemini-2.5-flash";
    await ai.models.generateContent({
      model: modelToUse,
      contents: prompt,
    });
    return true;
  } catch (error) {
    console.error("Gemini API Test Error:", error);
    return false;
  }
};