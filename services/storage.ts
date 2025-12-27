
import { AppSettings, Character, Unit, Curriculum, LearningRecord, Story, VisionPrompt, LearningStats } from '../types';
import { APP_DATA } from '../appData';

// --- Constants ---
export const STORAGE_KEY_SETTINGS = 'hanzi_hero_settings';
export const STORAGE_KEY_KNOWN = 'hanzi_hero_known';
export const STORAGE_KEY_UNKNOWN = 'hanzi_hero_unknown';
export const STORAGE_KEY_STARS = 'hanzi_hero_stars';
export const STORAGE_KEY_ACTIVITY = 'hanzi_hero_activity';
export const STORAGE_KEY_STORIES = 'hanzi_hero_stories';
export const STORAGE_KEY_CUSTOM_CURRICULUM = 'hanzi_hero_custom_curriculum';
export const STORAGE_KEY_COINS = 'hanzi_hero_coins';
export const STORAGE_KEY_VISION_PROMPTS = 'hanzi_hero_vision_prompts';
export const STORAGE_KEY_LEARNING_RECORDS = 'hanzi_hero_learning_records';

// --- Helper: Safe Parse ---
export function safeParse<T>(key: string, fallback: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    console.error(`Error parsing ${key} from localStorage`, e);
    return fallback;
  }
}

// --- Settings ---
const DEFAULT_SETTINGS: AppSettings = {
  apiBaseUrl: '',
  apiKey: '',
  model: 'gemini-2.5-flash',
  savedProviderConfigs: {},
  visionApiBaseUrl: '',
  visionApiKey: '',
  visionModel: 'gemini-2.5-flash',
  ttsRate: 1.0,
  ttsVoice: '',
  activeTTSProfileId: 'SYSTEM',
  customTTSProfiles: [],
  dailyNewLimit: 5,
  storyLength: 100,
  selectedCurriculumId: 'renjiaoban_2024', // Default to 人教版(RJB-2024) for first-time users
  selectedGradeId: 'g1-1'
};

export const getSettings = (): AppSettings => {
  const saved = safeParse<AppSettings>(STORAGE_KEY_SETTINGS, DEFAULT_SETTINGS);
  
  // Migration checks
  if ((saved as any).dailyLimit && !saved.dailyNewLimit) {
      saved.dailyNewLimit = 5;
  }
  if (!saved.customTTSProfiles) saved.customTTSProfiles = [];
  if (!saved.activeTTSProfileId) saved.activeTTSProfileId = 'SYSTEM';

  return { ...DEFAULT_SETTINGS, ...saved };
};

export const saveSettings = (settings: AppSettings): void => {
  localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(settings));
};

// --- Stars & Coins ---
export const getStars = (): number => {
  return safeParse<number>(STORAGE_KEY_STARS, 0);
};

export const addStars = (count: number): number => {
  const current = getStars();
  const newVal = current + count;
  localStorage.setItem(STORAGE_KEY_STARS, newVal.toString());
  return newVal;
};

export const getReadingCoins = (): number => {
  return safeParse<number>(STORAGE_KEY_COINS, 0);
};

export const addReadingCoins = (count: number): number => {
  const current = getReadingCoins();
  const newVal = current + count;
  localStorage.setItem(STORAGE_KEY_COINS, newVal.toString());
  return newVal;
};

// --- Characters (Known/Unknown) ---
export const getKnownCharacters = (): Character[] => {
  return safeParse<Character[]>(STORAGE_KEY_KNOWN, []);
};

export const getUnknownCharacters = (): Character[] => {
  return safeParse<Character[]>(STORAGE_KEY_UNKNOWN, []);
};

export const isCharacterKnown = (charStr: string): boolean => {
  const known = getKnownCharacters();
  return known.some(c => c.char === charStr);
};

export const addKnownCharacter = (char: Character): void => {
  const known = getKnownCharacters();
  if (!known.some(c => c.char === char.char)) {
    // Remove from unknown if present
    removeUnknownCharacter(char.char);
    
    known.push({ ...char, learnedAt: Date.now() });
    localStorage.setItem(STORAGE_KEY_KNOWN, JSON.stringify(known));
    
    // Also record learning activity
    recordLearning(1);
    
    // Update Ebbinghaus record
    updateLearningRecord(char.char, true);
  }
};

export const addUnknownCharacter = (char: Character): void => {
  const unknown = getUnknownCharacters();
  if (!unknown.some(c => c.char === char.char)) {
    unknown.push({ ...char, learnedAt: Date.now() });
    localStorage.setItem(STORAGE_KEY_UNKNOWN, JSON.stringify(unknown));
    
    // Update Ebbinghaus record (as failure/learning)
    updateLearningRecord(char.char, false);
  }
};

export const removeUnknownCharacter = (charStr: string): void => {
  const unknown = getUnknownCharacters();
  const filtered = unknown.filter(c => c.char !== charStr);
  localStorage.setItem(STORAGE_KEY_UNKNOWN, JSON.stringify(filtered));
};

export const getCharacterLearnCount = (charStr: string): number => {
   const records = safeParse<Record<string, LearningRecord>>(STORAGE_KEY_LEARNING_RECORDS, {});
   return records[charStr]?.reviewCount || 0;
};

// --- Learning Records (Ebbinghaus) ---
const EBBINGHAUS_INTERVALS = [1, 2, 4, 7, 15, 30, 60, 180]; // Days

function updateLearningRecord(charStr: string, isSuccess: boolean) {
    const records = safeParse<Record<string, LearningRecord>>(STORAGE_KEY_LEARNING_RECORDS, {});
    const now = Date.now();
    
    let record = records[charStr];
    if (!record) {
        record = {
            char: charStr,
            pinyin: '',
            firstLearned: now,
            lastReviewed: now,
            nextReview: now + (1 * 24 * 60 * 60 * 1000),
            reviewCount: 0,
            intervalIndex: 0,
            memoryStrength: 0,
            difficulty: 0.5
        };
    }

    record.lastReviewed = now;
    record.reviewCount += 1;

    if (isSuccess) {
        // Increase interval
        record.intervalIndex = Math.min(record.intervalIndex + 1, EBBINGHAUS_INTERVALS.length - 1);
        const days = EBBINGHAUS_INTERVALS[record.intervalIndex];
        record.nextReview = now + (days * 24 * 60 * 60 * 1000);
        record.memoryStrength = Math.min(1, record.memoryStrength + 0.1);
    } else {
        // Reset interval on failure
        record.intervalIndex = 0;
        record.nextReview = now + (1 * 24 * 60 * 60 * 1000); // Review tomorrow
        record.memoryStrength = Math.max(0, record.memoryStrength - 0.2);
    }

    records[charStr] = record;
    localStorage.setItem(STORAGE_KEY_LEARNING_RECORDS, JSON.stringify(records));
}

export const getLearningProgress = (): Record<string, LearningRecord> => {
    return safeParse<Record<string, LearningRecord>>(STORAGE_KEY_LEARNING_RECORDS, {});
};

export const getDailyPlan = (): { review: Character[], newChars: Character[] } => {
    const settings = getSettings();
    const records = getLearningProgress();
    const now = Date.now();
    const review: Character[] = [];
    
    // 1. Find items due for review
    Object.values(records).forEach(rec => {
        if (rec.nextReview <= now) {
            review.push({ char: rec.char, pinyin: rec.pinyin });
        }
    });

    // 2. Find new items from current curriculum
    // This requires traversing the curriculum to find what is NOT in records
    // Simplified logic: Just return empty new chars here, the Game logic usually pulls from unit
    // But for "Daily Challenge" button we might want to suggest some.
    // For now, we return empty newChars, rely on Unit selection for new learning.
    // Or we can pick from Unknown list.
    
    const unknown = getUnknownCharacters();
    const newChars = unknown.slice(0, settings.dailyNewLimit);

    return { review, newChars };
};

// --- Activity Stats ---
export const getDailyActivity = (): Record<string, number> => {
  return safeParse<Record<string, number>>(STORAGE_KEY_ACTIVITY, {});
};

export const recordLearning = (count: number): void => {
  const activity = getDailyActivity();
  const today = new Date().toISOString().split('T')[0];
  activity[today] = (activity[today] || 0) + count;
  localStorage.setItem(STORAGE_KEY_ACTIVITY, JSON.stringify(activity));
};

export const updateCharacterProgress = (char: Character, correct: boolean) => {
    // Wrapper to handle both simple list and detailed stats
    if (correct) {
        addKnownCharacter(char);
    } else {
        addUnknownCharacter(char);
    }
};

// --- Stories ---
export const getStories = (): Story[] => {
  return safeParse<Story[]>(STORAGE_KEY_STORIES, []);
};

export const saveStory = (story: Story): void => {
  const stories = getStories();
  const index = stories.findIndex(s => s.id === story.id);
  if (index >= 0) {
    stories[index] = story;
  } else {
    stories.unshift(story);
  }
  localStorage.setItem(STORAGE_KEY_STORIES, JSON.stringify(stories));
};

export const deleteStory = (id: string): void => {
  const stories = getStories();
  const filtered = stories.filter(s => s.id !== id);
  localStorage.setItem(STORAGE_KEY_STORIES, JSON.stringify(filtered));
};

// --- Custom Curriculum ---
export const getCustomCurricula = (): Curriculum[] => {
  return safeParse<Curriculum[]>(STORAGE_KEY_CUSTOM_CURRICULUM, []);
};

export const saveCustomUnit = (currName: string, gradeName: string, unitName: string, chars: Character[]) => {
  const custom = getCustomCurricula();
  let curr = custom.find(c => c.name === currName);
  
  if (!curr) {
      curr = { id: `cust-c-${Date.now()}`, name: currName, grades: [] };
      custom.push(curr);
  }
  
  let grade = curr.grades.find(g => g.name === gradeName);
  if (!grade) {
      grade = { id: `cust-g-${Date.now()}`, name: gradeName, units: [] };
      curr.grades.push(grade);
  }
  
  const newUnit: Unit = {
      id: `cust-u-${Date.now()}`,
      name: unitName,
      characters: chars
  };
  
  grade.units.push(newUnit);
  localStorage.setItem(STORAGE_KEY_CUSTOM_CURRICULUM, JSON.stringify(custom));
  
  return { curriculumId: curr.id, gradeId: grade.id, unitId: newUnit.id };
};

export const updateCustomUnit = (currId: string, gradeId: string, unitId: string, name: string, chars: Character[]) => {
    const custom = getCustomCurricula();
    const curr = custom.find(c => c.id === currId);
    if (!curr) return;
    const grade = curr.grades.find(g => g.id === gradeId);
    if (!grade) return;
    const unit = grade.units.find(u => u.id === unitId);
    if (!unit) return;
    
    unit.name = name;
    unit.characters = chars;
    
    localStorage.setItem(STORAGE_KEY_CUSTOM_CURRICULUM, JSON.stringify(custom));
};

// --- Cache ---
export const getCharacterCache = (char: string): any => {
    return safeParse(`cache_char_${char}`, null);
};

export const saveCharacterCache = (char: string, data: any): void => {
    try {
        localStorage.setItem(`cache_char_${char}`, JSON.stringify(data));
    } catch (e) {
        // Handle quota exceeded
        console.warn("Cache full");
    }
};

// --- Vision Prompts ---
// VisionPrompt interface is imported from types.ts

export const getVisionPrompts = (): VisionPrompt[] => {
    return safeParse<VisionPrompt[]>(STORAGE_KEY_VISION_PROMPTS, [
        { id: 'vp_1', alias: '默认OCR', text: '任务：提取文字。请将图片中所有的汉字、标点符号完整的提取出来。保持原文的换行和格式。' },
        { id: 'vp_2', alias: '看图写话', text: '任务：看图写话。请仔细观察这张图片，发挥想象力，用生动有趣、适合小学生阅读的语言（一年级水平），根据画面内容编写一个小故事。' }
    ]);
};

export const saveVisionPrompt = (prompt: VisionPrompt) => {
    const prompts = getVisionPrompts();
    const idx = prompts.findIndex(p => p.id === prompt.id);
    if (idx >= 0) prompts[idx] = prompt;
    else prompts.push(prompt);
    localStorage.setItem(STORAGE_KEY_VISION_PROMPTS, JSON.stringify(prompts));
};

export const deleteVisionPrompt = (id: string) => {
    const prompts = getVisionPrompts();
    const filtered = prompts.filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEY_VISION_PROMPTS, JSON.stringify(filtered));
};

// --- Game Level Data Cache ---
// To avoid regenerating AI content every time we revisit a level
export const getLevelData = (gameType: string, level: number): any => {
    return safeParse(`level_${gameType}_${level}`, null);
};

export const saveLevelData = (gameType: string, level: number, data: any) => {
    try {
        localStorage.setItem(`level_${gameType}_${level}`, JSON.stringify(data));
    } catch(e) {}
};

// --- Game Stats (Simple Max Level tracking) ---
export const getGameStats = (gameType: string) => {
    return safeParse(`stats_${gameType}`, { maxLevel: 1, totalScore: 0 });
};

export const saveGameStats = (gameType: string, stats: { maxLevel: number, totalScore: number }) => {
    localStorage.setItem(`stats_${gameType}`, JSON.stringify(stats));
};

export const getCrushLevelData = (level: number): any => getLevelData('crush', level);
export const saveCrushLevelData = (level: number, data: any) => saveLevelData('crush', level, data);

// --- Import/Export ---
export const exportUserData = (): string => {
    const data = {
        settings: getSettings(),
        known: getKnownCharacters(),
        unknown: getUnknownCharacters(),
        stars: getStars(),
        activity: getDailyActivity(),
        stories: getStories(),
        customCurriculum: getCustomCurricula(),
        records: getLearningProgress()
    };
    return JSON.stringify(data);
};

export const importUserData = (jsonStr: string): boolean => {
    try {
        const data = JSON.parse(jsonStr);
        if (data.settings) saveSettings(data.settings);
        if (data.known) localStorage.setItem(STORAGE_KEY_KNOWN, JSON.stringify(data.known));
        if (data.unknown) localStorage.setItem(STORAGE_KEY_UNKNOWN, JSON.stringify(data.unknown));
        if (data.stars) localStorage.setItem(STORAGE_KEY_STARS, JSON.stringify(data.stars));
        if (data.activity) localStorage.setItem(STORAGE_KEY_ACTIVITY, JSON.stringify(data.activity));
        if (data.stories) localStorage.setItem(STORAGE_KEY_STORIES, JSON.stringify(data.stories));
        if (data.customCurriculum) localStorage.setItem(STORAGE_KEY_CUSTOM_CURRICULUM, JSON.stringify(data.customCurriculum));
        if (data.records) localStorage.setItem(STORAGE_KEY_LEARNING_RECORDS, JSON.stringify(data.records));
        return true;
    } catch (e) {
        console.error("Import failed", e);
        return false;
    }
};
