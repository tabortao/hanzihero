export interface Character {
  char: string;
  pinyin: string;
  // definition field removed
}

export interface Unit {
  id: string;
  name: string;
  characters: Character[];
}

export interface Grade {
  id: string;
  name: string;
  units: Unit[];
}

export interface Curriculum {
  id: string;
  name: string;
  grades: Grade[];
}

export interface UserProgress {
  unknownCharacters: Character[]; // List of characters the user missed
  knownCharacters: Character[]; // List of characters the user knows
  stars: number; // Gamification currency
}

export type ViewState = 'SELECTION' | 'GAME' | 'REVIEW' | 'BANK';

export interface GameConfig {
  mode: 'UNIT' | 'REVIEW' | 'CHALLENGE';
  title: string;
  characters: Character[];
  curriculumId?: string;
  gradeId?: string;
  unitId?: string;
}

export interface WordEntry {
  word: string;
  pinyin: string;
}

export interface CharPair {
  char: string;
  pinyin: string;
}

export interface AIExplanation {
  structure: string; // e.g. "Left-Right"
  composition: string; // e.g. "Sun (日) + Moon (月)"
  memoryTip: string; // The mnemonic story
  words: WordEntry[];
  sentenceData: CharPair[]; // Structured data for grid display
}

export interface AppSettings {
  apiBaseUrl: string;
  apiKey: string;
  model: string;
  ttsRate: number; // 0.5 to 2.0
  ttsVoice: string; // Voice URI or Name
  selectedCurriculumId?: string;
  selectedGradeId?: string;
}

export interface LearningStats {
  characterCounts: Record<string, number>; // char -> count
  dailyActivity: Record<string, number>; // YYYY-MM-DD -> count
}