import { Character, AppSettings, LearningStats, UserProgress } from '../types';

const STORAGE_KEY_UNKNOWN = 'hanzi_hero_unknown';
const STORAGE_KEY_KNOWN = 'hanzi_hero_known';
const STORAGE_KEY_STARS = 'hanzi_hero_stars';
const STORAGE_KEY_SETTINGS = 'hanzi_hero_settings';
const STORAGE_KEY_STATS = 'hanzi_hero_stats';

// --- Character Management ---

export const getUnknownCharacters = (): Character[] => {
  const data = localStorage.getItem(STORAGE_KEY_UNKNOWN);
  return data ? JSON.parse(data) : [];
};

export const getKnownCharacters = (): Character[] => {
  const data = localStorage.getItem(STORAGE_KEY_KNOWN);
  return data ? JSON.parse(data) : [];
};

export const isCharacterKnown = (charStr: string): boolean => {
  const known = getKnownCharacters();
  return known.some(c => c.char === charStr);
};

export const addUnknownCharacter = (char: Character): void => {
  const currentUnknown = getUnknownCharacters();
  // Add to unknown if not present
  if (!currentUnknown.some(c => c.char === char.char)) {
    localStorage.setItem(STORAGE_KEY_UNKNOWN, JSON.stringify([...currentUnknown, char]));
  }
  
  // Remove from known if it was there (since user now doesn't know it)
  const currentKnown = getKnownCharacters();
  if (currentKnown.some(c => c.char === char.char)) {
    const updatedKnown = currentKnown.filter(c => c.char !== char.char);
    localStorage.setItem(STORAGE_KEY_KNOWN, JSON.stringify(updatedKnown));
  }
};

export const addKnownCharacter = (char: Character): void => {
  const currentKnown = getKnownCharacters();
  // Add to known
  if (!currentKnown.some(c => c.char === char.char)) {
    localStorage.setItem(STORAGE_KEY_KNOWN, JSON.stringify([...currentKnown, char]));
  }

  // Remove from unknown
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
  return data ? parseInt(data, 10) : 0;
};

export const addStars = (amount: number): number => {
  const current = getStars();
  const newTotal = current + amount;
  localStorage.setItem(STORAGE_KEY_STARS, newTotal.toString());
  return newTotal;
};

// --- Settings ---

const DEFAULT_SETTINGS: AppSettings = {
  apiBaseUrl: '', // Empty means use default Gemini
  apiKey: '',
  model: 'gemini-2.5-flash',
  ttsRate: 1.0,
  ttsVoice: '',
  selectedCurriculumId: 'renjiaoban',
  selectedGradeId: 'g1-1'
};

export const getSettings = (): AppSettings => {
  const data = localStorage.getItem(STORAGE_KEY_SETTINGS);
  return data ? { ...DEFAULT_SETTINGS, ...JSON.parse(data) } : DEFAULT_SETTINGS;
};

export const saveSettings = (settings: AppSettings): void => {
  localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(settings));
};

// --- Stats (Heatmap & Counts) ---

const getStats = (): LearningStats => {
  const data = localStorage.getItem(STORAGE_KEY_STATS);
  return data ? JSON.parse(data) : { characterCounts: {}, dailyActivity: {} };
};

export const recordLearning = (chars: Character[]): void => {
  const stats = getStats();
  const today = new Date().toISOString().split('T')[0];

  // Update Daily Activity
  stats.dailyActivity[today] = (stats.dailyActivity[today] || 0) + chars.length;

  // Update Character Counts
  chars.forEach(c => {
    stats.characterCounts[c.char] = (stats.characterCounts[c.char] || 0) + 1;
  });

  localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify(stats));
};

export const getCharacterLearnCount = (charStr: string): number => {
  const stats = getStats();
  return stats.characterCounts[charStr] || 0;
};

export const getDailyActivity = (): Record<string, number> => {
  return getStats().dailyActivity;
};

// --- Import / Export ---

export const exportUserData = (): string => {
  const data = {
    settings: getSettings(),
    stars: getStars(),
    unknown: getUnknownCharacters(),
    known: getKnownCharacters(),
    stats: getStats()
  };
  return JSON.stringify(data, null, 2);
};

export const importUserData = (jsonStr: string): boolean => {
  try {
    const data = JSON.parse(jsonStr);
    if (data.settings) localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(data.settings));
    if (data.stars !== undefined) localStorage.setItem(STORAGE_KEY_STARS, data.stars.toString());
    if (data.unknown) localStorage.setItem(STORAGE_KEY_UNKNOWN, JSON.stringify(data.unknown));
    if (data.known) localStorage.setItem(STORAGE_KEY_KNOWN, JSON.stringify(data.known));
    if (data.stats) localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify(data.stats));
    return true;
  } catch (e) {
    console.error("Import failed", e);
    return false;
  }
};
