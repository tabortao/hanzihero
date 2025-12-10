
import { Character, AppSettings, LearningStats, UserProgress, Story, AIExplanation, Curriculum, Grade, Unit } from '../types';

const STORAGE_KEY_UNKNOWN = 'hanzi_hero_unknown';
const STORAGE_KEY_KNOWN = 'hanzi_hero_known';
const STORAGE_KEY_STARS = 'hanzi_hero_stars';
const STORAGE_KEY_SETTINGS = 'hanzi_hero_settings';
const STORAGE_KEY_STATS = 'hanzi_hero_stats';
const STORAGE_KEY_STORIES = 'hanzi_hero_stories';
const STORAGE_KEY_CACHE = 'hanzi_hero_ai_cache';
const STORAGE_KEY_CUSTOM_CURRICULA = 'hanzi_hero_custom_curricula';
const STORAGE_KEY_CRUSH_LEVELS = 'hanzi_hero_crush_levels';
const STORAGE_KEY_CRUSH_PROGRESS = 'hanzi_hero_crush_progress'; // Max level reached
const STORAGE_KEY_CRUSH_ERRORS = 'hanzi_hero_crush_errors'; // Wrong characters list

// --- Helper: Safe JSON Parse to prevent crashes ---
const safeParse = <T>(key: string, fallback: T): T => {
  try {
    const item = localStorage.getItem(key);
    if (!item) return fallback;
    const parsed = JSON.parse(item);
    if (parsed === null && fallback !== null) return fallback;
    return parsed;
  } catch (e) {
    console.warn(`HanziHero: Failed to parse ${key}, using fallback.`, e);
    return fallback;
  }
};

// Helper: Safe Array Parse with Item Validation
const safeParseArray = <T>(key: string, validator: (item: any) => boolean): T[] => {
    const list = safeParse<any[]>(key, []);
    if (!Array.isArray(list)) return [];
    return list.filter(validator);
};

const isValidChar = (c: any): boolean => c && typeof c === 'object' && typeof c.char === 'string';

// --- Character Management ---

export const getUnknownCharacters = (): Character[] => {
  return safeParseArray<Character>(STORAGE_KEY_UNKNOWN, isValidChar);
};

export const getKnownCharacters = (): Character[] => {
  return safeParseArray<Character>(STORAGE_KEY_KNOWN, isValidChar);
};

export const isCharacterKnown = (charStr: string): boolean => {
  const known = getKnownCharacters();
  return known.some(c => c.char === charStr);
};

export const addUnknownCharacter = (char: Character): void => {
  const currentUnknown = getUnknownCharacters();
  // When adding to unknown (or moving back to unknown), we typically reset learning stats
  // or keep them to show "struggle". Let's reset learnedAt to force immediate review.
  const newChar = { ...char, learnedAt: undefined };
  
  if (!currentUnknown.some(c => c.char === char.char)) {
    localStorage.setItem(STORAGE_KEY_UNKNOWN, JSON.stringify([...currentUnknown, newChar]));
  }
  
  const currentKnown = getKnownCharacters();
  if (currentKnown.some(c => c.char === char.char)) {
    const updatedKnown = currentKnown.filter(c => c.char !== char.char);
    localStorage.setItem(STORAGE_KEY_KNOWN, JSON.stringify(updatedKnown));
  }
};

export const addKnownCharacter = (char: Character): void => {
  const currentKnown = getKnownCharacters();
  const now = Date.now();
  
  const existingIndex = currentKnown.findIndex(c => c.char === char.char);
  
  if (existingIndex >= 0) {
      // Update existing: Update timestamp and increment review count
      const existing = currentKnown[existingIndex];
      const newCount = (existing.reviewCount || 0) + 1;
      
      currentKnown[existingIndex] = { 
          ...existing, 
          learnedAt: now,
          reviewCount: newCount
      };
      localStorage.setItem(STORAGE_KEY_KNOWN, JSON.stringify(currentKnown));
  } else {
      // Add new: Set timestamp and count = 1
      const newChar = { 
          ...char, 
          learnedAt: now,
          reviewCount: 1
      };
      localStorage.setItem(STORAGE_KEY_KNOWN, JSON.stringify([...currentKnown, newChar]));
  }

  const currentUnknown = getUnknownCharacters();
  if (currentUnknown.some(c => c.char === char.char)) {
    const updatedUnknown = currentUnknown.filter(c => c.char !== char.char);
    localStorage.setItem(STORAGE_KEY_UNKNOWN, JSON.stringify(updatedUnknown));
  }
};

export const removeUnknownCharacter = (charStr: string): void => {
  const current = getUnknownCharacters();
  const updated = current.filter(c => c.char !== charStr);
  localStorage.setItem(STORAGE_KEY_UNKNOWN, JSON.stringify(updated));
};

// --- Stars ---

export const getStars = (): number => {
  const data = localStorage.getItem(STORAGE_KEY_STARS);
  const val = data ? parseInt(data, 10) : 0;
  return isNaN(val) ? 0 : val;
};

export const addStars = (amount: number): number => {
  const current = getStars();
  const newTotal = current + amount;
  localStorage.setItem(STORAGE_KEY_STARS, newTotal.toString());
  return newTotal;
};

// --- Settings ---

const DEFAULT_SETTINGS: AppSettings = {
  apiBaseUrl: '',
  apiKey: '',
  model: 'gemini-2.5-flash',
  ttsRate: 1.0,
  ttsVoice: '',
  dailyLimit: 10,
  storyLength: 50,
  selectedCurriculumId: 'renjiaoban',
  selectedGradeId: 'g1-1'
};

export const getSettings = (): AppSettings => {
  const saved = safeParse<AppSettings>(STORAGE_KEY_SETTINGS, DEFAULT_SETTINGS);
  return { ...DEFAULT_SETTINGS, ...saved };
};

export const saveSettings = (settings: AppSettings): void => {
  localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(settings));
};

// --- Custom Curricula ---

export const getCustomCurricula = (): Curriculum[] => {
    return safeParseArray<Curriculum>(STORAGE_KEY_CUSTOM_CURRICULA, (c) => 
        c && typeof c.id === 'string' && Array.isArray(c.grades)
    );
};

export const saveCustomUnit = (currName: string, gradeName: string, unitName: string, chars: Character[]): { curriculumId: string, gradeId: string } => {
    const customs = getCustomCurricula();
    let curr = customs.find(c => c.name === currName);
    if (!curr) {
        curr = { id: `custom-c-${Date.now()}`, name: currName, grades: [] };
        customs.push(curr);
    }
    let grade = curr.grades.find(g => g.name === gradeName);
    if (!grade) {
        grade = { id: `custom-g-${Date.now()}-${Math.random()}`, name: gradeName, units: [] };
        curr.grades.push(grade);
    }
    const newUnit: Unit = {
        id: `custom-u-${Date.now()}-${Math.random()}`,
        name: unitName,
        characters: chars
    };
    grade.units.push(newUnit);
    localStorage.setItem(STORAGE_KEY_CUSTOM_CURRICULA, JSON.stringify(customs));
    return { curriculumId: curr.id, gradeId: grade.id };
};

// --- Stats ---

const getStats = (): LearningStats => {
  return safeParse<LearningStats>(STORAGE_KEY_STATS, { characterCounts: {}, dailyActivity: {} });
};

export const recordLearning = (chars: Character[]): void => {
  const stats = getStats();
  const today = new Date().toISOString().split('T')[0];

  if (!stats.dailyActivity) stats.dailyActivity = {};
  if (!stats.characterCounts) stats.characterCounts = {};

  stats.dailyActivity[today] = (stats.dailyActivity[today] || 0) + chars.length;

  chars.forEach(c => {
    stats.characterCounts[c.char] = (stats.characterCounts[c.char] || 0) + 1;
  });

  localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify(stats));
};

export const getCharacterLearnCount = (charStr: string): number => {
  const stats = getStats();
  return stats.characterCounts?.[charStr] || 0;
};

export const getDailyActivity = (): Record<string, number> => {
  return getStats().dailyActivity || {};
};

// --- Stories ---

export const getStories = (): Story[] => {
  return safeParseArray<Story>(STORAGE_KEY_STORIES, (s) => 
      s && typeof s.id === 'string' && typeof s.title === 'string' && Array.isArray(s.content)
  );
};

export const saveStory = (story: Story): void => {
  const stories = getStories();
  const index = stories.findIndex(s => s.id === story.id);
  if (index >= 0) {
      stories[index] = story;
      localStorage.setItem(STORAGE_KEY_STORIES, JSON.stringify(stories));
  } else {
      localStorage.setItem(STORAGE_KEY_STORIES, JSON.stringify([story, ...stories]));
  }
};

export const deleteStory = (id: string): void => {
  const stories = getStories();
  localStorage.setItem(STORAGE_KEY_STORIES, JSON.stringify(stories.filter(s => s.id !== id)));
};

// --- AI Cache ---

export const getCharacterCache = (char: string): AIExplanation | null => {
    const cache = safeParse<Record<string, AIExplanation>>(STORAGE_KEY_CACHE, {});
    return cache[char] || null;
};

export const saveCharacterCache = (char: string, data: AIExplanation): void => {
    const cache = safeParse<Record<string, AIExplanation>>(STORAGE_KEY_CACHE, {});
    cache[char] = data;
    localStorage.setItem(STORAGE_KEY_CACHE, JSON.stringify(cache));
};

// --- Crush Game Levels ---

export interface CrushLevelData {
    level: number;
    pairs: any[]; 
}

export const getCrushLevelData = (level: number): CrushLevelData | null => {
    const levels = safeParse<Record<string, CrushLevelData>>(STORAGE_KEY_CRUSH_LEVELS, {});
    return levels[level.toString()] || null;
};

export const saveCrushLevelData = (level: number, pairs: any[]): void => {
    const levels = safeParse<Record<string, CrushLevelData>>(STORAGE_KEY_CRUSH_LEVELS, {});
    levels[level.toString()] = { level, pairs };
    localStorage.setItem(STORAGE_KEY_CRUSH_LEVELS, JSON.stringify(levels));
};

// --- Crush Game Progress & Errors ---

export const getCrushMaxLevel = (): number => {
    const val = localStorage.getItem(STORAGE_KEY_CRUSH_PROGRESS);
    return val ? parseInt(val, 10) : 0;
};

export const setCrushMaxLevel = (level: number): void => {
    const current = getCrushMaxLevel();
    if (level > current) {
        localStorage.setItem(STORAGE_KEY_CRUSH_PROGRESS, level.toString());
    }
};

export const getCrushErrors = (): Character[] => {
    return safeParseArray<Character>(STORAGE_KEY_CRUSH_ERRORS, isValidChar);
};

export const addCrushError = (char: Character): void => {
    const errors = getCrushErrors();
    const filtered = errors.filter(c => c.char !== char.char);
    const newErrors = [char, ...filtered];
    if (newErrors.length > 50) newErrors.length = 50;
    localStorage.setItem(STORAGE_KEY_CRUSH_ERRORS, JSON.stringify(newErrors));
};

export const removeCrushError = (charStr: string): void => {
    const errors = getCrushErrors();
    const updated = errors.filter(c => c.char !== charStr);
    localStorage.setItem(STORAGE_KEY_CRUSH_ERRORS, JSON.stringify(updated));
};


// --- Import / Export ---

export const exportUserData = (): string => {
  const data = {
    settings: getSettings(),
    stars: getStars(),
    unknown: getUnknownCharacters(),
    known: getKnownCharacters(),
    stats: getStats(),
    stories: getStories(),
    customs: getCustomCurricula(),
  };
  return JSON.stringify(data, null, 2);
};

export const importUserData = (jsonStr: string): boolean => {
  try {
    const data = JSON.parse(jsonStr);
    if (typeof data !== 'object' || data === null) throw new Error("Invalid JSON structure");

    if (data.settings) localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify({ ...DEFAULT_SETTINGS, ...data.settings }));
    if (data.stars !== undefined) localStorage.setItem(STORAGE_KEY_STARS, String(data.stars));
    
    const sanitize = (l: any[]) => Array.isArray(l) ? l.filter(c => c && typeof c.char === 'string') : [];
    if (data.unknown) localStorage.setItem(STORAGE_KEY_UNKNOWN, JSON.stringify(sanitize(data.unknown)));
    if (data.known) localStorage.setItem(STORAGE_KEY_KNOWN, JSON.stringify(sanitize(data.known)));
    if (data.stories) localStorage.setItem(STORAGE_KEY_STORIES, JSON.stringify(data.stories));
    if (data.stats) localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify(data.stats));
    if (data.customs) localStorage.setItem(STORAGE_KEY_CUSTOM_CURRICULA, JSON.stringify(data.customs));
    
    return true;
  } catch (e) {
    console.error("Import failed", e);
    throw new Error("Data file is corrupted or invalid.");
  }
};
