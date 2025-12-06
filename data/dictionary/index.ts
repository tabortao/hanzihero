import { AIExplanation } from "../../types";
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

// Aggregate all chunks into a single lookup function or object
// Using a function is better for memory if we implement lazy loading later, 
// but for now, we merge them for O(1) access.

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
};

export const getOfflineDict = (): Record<string, AIExplanation> => {
    return MASTER_DICT;
};

export const getOfflineCharacter = (char: string): AIExplanation | undefined => {
    return MASTER_DICT[char];
};
