
import { AIExplanation } from "../../types";
import { APP_DATA } from "../../appData";
import { DICT_CHUNK_01 } from "./chunk01";
import { DICT_CHUNK_02 } from "./chunk02";
import { DICT_CHUNK_03 } from "./chunk03";


const MASTER_DICT: Record<string, AIExplanation> = {
  ...DICT_CHUNK_01,
  ...DICT_CHUNK_02,
  ...DICT_CHUNK_03,
};

export const getOfflineDict = (): Record<string, AIExplanation> => {
    return MASTER_DICT;
};

export const getOfflineCharacter = (char: string): AIExplanation | undefined => {
    return MASTER_DICT[char];
};

export const getAllDictionaryChars = (): string[] => {
    return Object.keys(MASTER_DICT);
};

// Global Helper to find Pinyin for any character
export const findCharacterPinyin = (char: string): string => {
  // 0. Handle Arabic Numerals
  if (/[0-9]/.test(char)) {
      const numMap: Record<string, string> = {
          '0': 'líng', '1': 'yī', '2': 'èr', '3': 'sān', '4': 'sì',
          '5': 'wǔ', '6': 'liù', '7': 'qī', '8': 'bā', '9': 'jiǔ'
      };
      return numMap[char] || '';
  }

  // 1. Check Curriculum Data (Textbooks) - Most accurate for grade level
  for (const curriculum of APP_DATA) {
    for (const grade of curriculum.grades) {
      for (const unit of grade.units) {
        const found = unit.characters.find(c => c.char === char);
        if (found && found.pinyin) return found.pinyin;
      }
    }
  }

  // 2. Check Dictionary Data (AI Explanations)
  const dictEntry = MASTER_DICT[char];
  if (dictEntry) {
      // Try to find self in sentenceData
      const inSentence = dictEntry.sentenceData?.find(c => c.char === char);
      if (inSentence && inSentence.pinyin) return inSentence.pinyin;
      
      // Try to find self in compositionParts
      if (dictEntry.compositionParts) {
         const inParts = dictEntry.compositionParts.find(c => c.char === char);
         if (inParts && inParts.pinyin) return inParts.pinyin;
      }

      // Fallback: Try to extract from 'words'
      // Example: char='棍', word='木棍', pinyin='mù gùn'. Index is 1.
      if (dictEntry.words && dictEntry.words.length > 0) {
          for (const w of dictEntry.words) {
              const charIndex = w.word.indexOf(char);
              if (charIndex !== -1) {
                  const pinyinParts = w.pinyin.split(' ');
                  if (pinyinParts[charIndex]) {
                      return pinyinParts[charIndex];
                  }
              }
          }
      }
  }

  return '';
};
