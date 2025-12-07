import { AIExplanation } from "../../types";
import { APP_DATA } from "../../data";
import { DICT_CHUNK_1 } from "./chunk1";
import { DICT_CHUNK_2 } from "./chunk2";
import { DICT_CHUNK_3 } from "./chunk3";
import { DICT_CHUNK_4 } from "./chunk4";
import { DICT_CHUNK_5 } from "./chunk5";
import { DICT_CHUNK_6 } from "./chunk6";
import { DICT_CHUNK_7 } from "./chunk7";
import { DICT_CHUNK_8 } from "./chunk8";
import { DICT_CHUNK_9 } from "./chunk9";
import { DICT_CHUNK_10 } from "./chunk10";
import { DICT_CHUNK_11 } from "./chunk11";
import { DICT_CHUNK_12 } from "./chunk12";
import { DICT_CHUNK_13 } from "./chunk13";
import { DICT_CHUNK_14 } from "./chunk14";
import { DICT_CHUNK_15 } from "./chunk15";
import { DICT_CHUNK_16 } from "./chunk16";
import { DICT_CHUNK_17 } from "./chunk17";
import { DICT_CHUNK_18 } from "./chunk18";
import { DICT_CHUNK_19 } from "./chunk19";
import { DICT_CHUNK_20 } from "./chunk20";
import { DICT_CHUNK_21 } from "./chunk21";
import { DICT_CHUNK_22 } from "./chunk22";
import { DICT_CHUNK_23 } from "./chunk23";
import { DICT_CHUNK_24 } from "./chunk24";
import { DICT_CHUNK_25 } from "./chunk25";
import { DICT_CHUNK_26 } from "./chunk26";
import { DICT_CHUNK_27 } from "./chunk27";
import { DICT_CHUNK_28 } from "./chunk28";
import { DICT_CHUNK_29 } from "./chunk29";
import { DICT_CHUNK_30 } from "./chunk30";
import { DICT_CHUNK_31 } from "./chunk31";
import { DICT_CHUNK_32 } from "./chunk32";
import { DICT_CHUNK_33 } from "./chunk33";

const MASTER_DICT: Record<string, AIExplanation> = {
  ...DICT_CHUNK_1,
  ...DICT_CHUNK_2,
  ...DICT_CHUNK_3,
  ...DICT_CHUNK_4,
  ...DICT_CHUNK_5,
  ...DICT_CHUNK_6,
  ...DICT_CHUNK_7,
  ...DICT_CHUNK_8,
  ...DICT_CHUNK_9,
  ...DICT_CHUNK_10,
  ...DICT_CHUNK_11,
  ...DICT_CHUNK_12,
  ...DICT_CHUNK_13,
  ...DICT_CHUNK_14,
  ...DICT_CHUNK_15,
  ...DICT_CHUNK_16,
  ...DICT_CHUNK_17,
  ...DICT_CHUNK_18,
  ...DICT_CHUNK_19,
  ...DICT_CHUNK_20,
  ...DICT_CHUNK_21,
  ...DICT_CHUNK_22,
  ...DICT_CHUNK_23,
  ...DICT_CHUNK_24,
  ...DICT_CHUNK_25,
  ...DICT_CHUNK_26,
  ...DICT_CHUNK_27,
  ...DICT_CHUNK_28,
  ...DICT_CHUNK_29,
  ...DICT_CHUNK_30,
  ...DICT_CHUNK_31,
  ...DICT_CHUNK_32,
  ...DICT_CHUNK_33,
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
