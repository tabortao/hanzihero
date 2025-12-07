import { Character, AppSettings, LearningStats, UserProgress, Story, AIExplanation } from '../types';

const STORAGE_KEY_UNKNOWN = 'hanzi_hero_unknown';
const STORAGE_KEY_KNOWN = 'hanzi_hero_known';
const STORAGE_KEY_STARS = 'hanzi_hero_stars';
const STORAGE_KEY_SETTINGS = 'hanzi_hero_settings';
const STORAGE_KEY_STATS = 'hanzi_hero_stats';
const STORAGE_KEY_STORIES = 'hanzi_hero_stories';
const STORAGE_KEY_CACHE = 'hanzi_hero_ai_cache';

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
// This prevents the app from crashing if an array contains null/undefined items
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
  if (!currentUnknown.some(c => c.char === char.char)) {
    // Reset learnedAt when moving back to unknown
    const { learnedAt, ...cleanChar } = char;
    localStorage.setItem(STORAGE_KEY_UNKNOWN, JSON.stringify([...currentUnknown, cleanChar]));
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
      currentKnown[existingIndex] = { ...currentKnown[existingIndex], learnedAt: now };
      localStorage.setItem(STORAGE_KEY_KNOWN, JSON.stringify(currentKnown));
  } else {
      localStorage.setItem(STORAGE_KEY_KNOWN, JSON.stringify([...currentKnown, { ...char, learnedAt: now }]));
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
  // Ensure we merge defaults to avoid missing keys from old versions
  return { ...DEFAULT_SETTINGS, ...saved };
};

export const saveSettings = (settings: AppSettings): void => {
  localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(settings));
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
  // Validate stories have at least an ID and Title
  return safeParseArray<Story>(STORAGE_KEY_STORIES, (s) => s && typeof s.id === 'string' && typeof s.title === 'string');
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

// --- Import / Export ---

export const exportUserData = (): string => {
  const data = {
    settings: getSettings(),
    stars: getStars(),
    unknown: getUnknownCharacters(),
    known: getKnownCharacters(),
    stats: getStats(),
    stories: getStories(),
  };
  return JSON.stringify(data, null, 2);
};

export const importUserData = (jsonStr: string): boolean => {
  try {
    const data = JSON.parse(jsonStr);
    
    if (typeof data !== 'object' || data === null) throw new Error("Invalid JSON structure");

    // 1. Settings
    if (data.settings && typeof data.settings === 'object') {
        // Sanitize settings to ensure no missing keys causing crashes
        const mergedSettings = { ...DEFAULT_SETTINGS, ...data.settings };
        localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(mergedSettings));
    }

    // 2. Stars
    if (data.stars !== undefined) {
        localStorage.setItem(STORAGE_KEY_STARS, String(data.stars));
    }
    
    // 3. Characters (Strict Sanitization)
    // We map to a clean object to remove any 'null' or weird prototypes that might exist
    const sanitizeCharList = (list: any[]) => {
        if (!Array.isArray(list)) return [];
        return list
            .filter(c => c && typeof c.char === 'string')
            .map(c => ({
                char: c.char,
                pinyin: c.pinyin || '',
                // Ensure learnedAt is a number if it exists, otherwise undefined
                learnedAt: typeof c.learnedAt === 'number' ? c.learnedAt : undefined
            }));
    };

    if (Array.isArray(data.unknown)) {
        localStorage.setItem(STORAGE_KEY_UNKNOWN, JSON.stringify(sanitizeCharList(data.unknown)));
    }
    if (Array.isArray(data.known)) {
        localStorage.setItem(STORAGE_KEY_KNOWN, JSON.stringify(sanitizeCharList(data.known)));
    }

    // 4. Stories
    if (Array.isArray(data.stories)) {
        // Basic check for stories
        const cleanStories = data.stories.filter((s: any) => s && s.id && s.title && Array.isArray(s.content));
        localStorage.setItem(STORAGE_KEY_STORIES, JSON.stringify(cleanStories));
    }
    
    // 5. Stats
    if (data.stats && typeof data.stats === 'object') {
        // Ensure dailyActivity exists
        const cleanStats = {
            characterCounts: data.stats.characterCounts || {},
            dailyActivity: data.stats.dailyActivity || {}
        };
        localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify(cleanStats));
    }
    
    return true;
  } catch (e) {
    console.error("Import failed", e);
    throw new Error("Data file is corrupted or invalid.");
  }
};