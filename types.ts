
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

// New: Ebbinghaus Learning Record
export interface LearningRecord {
  char: string;
  pinyin: string;
  firstLearned: number;       // Timestamp when first encountered
  lastReviewed: number;       // Timestamp of last review
  nextReview: number;         // Calculated timestamp for next review
  reviewCount: number;        // Total reviews
  intervalIndex: number;      // Current index in the interval array (0-7)
  memoryStrength: number;     // 0.0 - 1.0 (Visualization of mastery)
  difficulty: number;         // 0.0 - 1.0 (Adaptive difficulty)
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

export interface ProviderConfig {
    apiKey: string;
    apiBaseUrl: string;
    model: string;
    // Vision specifics per provider
    visionApiKey?: string;
    visionApiBaseUrl?: string;
    visionModel?: string;
}

export interface AppSettings {
  apiBaseUrl: string;
  apiKey: string;
  model: string;
  // Store specific configs for each provider key (e.g., 'GOOGLE', 'DEEPSEEK')
  savedProviderConfigs?: Record<string, ProviderConfig>;

  // Vision Model Specifics (Current active)
  visionApiBaseUrl?: string;
  visionApiKey?: string;
  visionModel?: string;
  
  ttsRate: number; 
  ttsVoice: string; 
  dailyNewLimit: number; // Changed from dailyLimit to control New Words specifically
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

export interface VisionPrompt {
    id: string;
    alias: string;
    text: string;
}
