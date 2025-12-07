
export interface Character {
  char: string;
  pinyin: string;
  learnedAt?: number; // Timestamp for 3-1-3 method
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

export type ViewState = 'TAB_HOME' | 'TAB_STORY' | 'TAB_STATS' | 'TAB_PROFILE' | 'GAME' | 'REVIEW' | 'BANK';

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
  pinyin?: string; // New: Returns the pinyin of the character itself
  structure: string; 
  composition: string; // e.g. "日 + 月"
  compositionParts?: CharPair[]; // New: Structured parts for grid display
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
  storyLength: number; // New: Target length for stories
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
  content: CharPair[]; // The story content parsed into chars
  createdAt: number;
  isArchived: boolean;
  readCount: number; 
  keywords?: string;
  tags?: string[]; // For grading/categorization e.g. "Level 1", "Fable"
  source?: 'AI' | 'MANUAL' | 'OCR'; // How it was created
}
