
export interface Character {
  char: string;
  pinyin: string;
  learnedAt?: number; // Timestamp for 3-1-3 method & Ebbinghaus
  reviewCount?: number; // Number of times successfully reviewed
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
  unknownCharacters: Character[]; 
  knownCharacters: Character[]; 
  stars: number; 
}

export type ViewState = 'TAB_HOME' | 'TAB_STORY' | 'TAB_STATS' | 'TAB_PROFILE' | 'GAME' | 'REVIEW' | 'BANK' | 'DAILY_MENU' | 'GAME_LISTEN' | 'GAME_LOOK' | 'GAME_CRUSH';

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
  pinyin?: string; 
  structure: string; 
  composition: string; 
  compositionParts?: CharPair[]; 
  memoryTip: string; 
  words: WordEntry[];
  sentenceData: CharPair[]; 
}

export interface AppSettings {
  apiBaseUrl: string;
  apiKey: string;
  model: string;
  ttsRate: number; 
  ttsVoice: string; 
  dailyLimit: number;
  storyLength: number;
  selectedCurriculumId?: string;
  selectedGradeId?: string;
}

export interface LearningStats {
  characterCounts: Record<string, number>; 
  dailyActivity: Record<string, number>; 
}

export interface Story {
  id: string;
  title: string;
  content: CharPair[]; 
  createdAt: number;
  isArchived: boolean;
  readCount: number; 
  keywords?: string;
  tags?: string[]; 
  source?: 'AI' | 'MANUAL' | 'OCR'; 
}
