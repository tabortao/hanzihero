
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, RefreshCw, Star, CheckCircle, Trophy, Volume2, Plus } from 'lucide-react';
import { Character } from '../types';
import { generateMatchGameData } from '../services/geminiService';
import { speakText } from './SharedComponents';
import { 
    addStars, 
    addKnownCharacter, 
    addUnknownCharacter, 
    recordLearning, 
    getCrushLevelData, 
    saveCrushLevelData,
    getCrushMaxLevel,
    setCrushMaxLevel,
    getKnownCharacters,
    getUnknownCharacters
} from '../services/storage';
import { getOfflineDict, findCharacterPinyin } from '../data/dictionary';
import confetti from 'canvas-confetti';

interface CrushGameProps {
  characters: Character[];
  onExit: () => void;
}

interface MatchPair {
  id: string;
  word: string;
  pinyin: string;
  hint?: string;
}

interface GameItem {
  uid: string;
  pairId: string;
  content: string;
  isPinyin: boolean;
  fullPinyin?: string;
  matched: boolean;
  relatedHint?: string;
}

const PRAISE_WORDS = ["Amazing", "Excellent", "Great", "Good Job", "Wonderful", "Super", "Awesome"];

export const CrushGame: React.FC<CrushGameProps> = ({ characters, onExit }) => {
  // Views: MENU (Level Select) | PLAYING
  const [view, setView] = useState<'MENU' | 'PLAYING'>('MENU');
  
  // Game State
  const [level, setLevel] = useState(1);
  const [maxReached, setMaxReached] = useState(0);
  const [loading, setLoading] = useState(false);
  const [gridItems, setGridItems] = useState<GameItem[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<{char: string, pinyin: string, hint?: string} | null>(null);
  const [errorShake, setErrorShake] = useState<string[]>([]);
  
  // Refs
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Initialize Progress
  useEffect(() => {
      setMaxReached(getCrushMaxLevel());
  }, [view]);

  // Helper to speak English encouragement
  const speakEnglish = (text: string) => {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; 
    u.rate = 1.2;
    window.speechSynthesis.speak(u);
  };

  // --- Logic: Start a Level ---
  const startLevel = async (targetLevel: number) => {
    setLevel(targetLevel);
    setView('PLAYING');
    setLoading(true);
    setMatchedIds([]);
    setSelectedIds([]);
    
    // 1. Try to load specific level data from storage first
    const cached = getCrushLevelData(targetLevel);
    if (cached && cached.pairs && cached.pairs.length === 10) {
        setupGrid(cached.pairs);
        setLoading(false);
        return;
    }

    // 2. Determine source characters for AI
    // Strategy: Combine Known + Unknown + Current Context, shuffle and pick a subset.
    // This ensures variety for "New Level" generation.
    const knownChars = getKnownCharacters();
    const unknownChars = getUnknownCharacters();
    
    // Mix current context with global history
    let pool = [...characters, ...unknownChars, ...knownChars];
    
    // Deduplicate based on char
    const uniquePool = Array.from(new Map(pool.map(item => [item.char, item])).values());
    
    // If pool is too small, fallback/pad with default hardcoded chars if needed (handled by fallback generator)
    let sourceChars = uniquePool;
    
    // Randomize and slice to get a batch for the AI to choose words from
    // We send more than 10 to give AI flexibility
    if (sourceChars.length > 15) {
        sourceChars = sourceChars.sort(() => 0.5 - Math.random()).slice(0, 15);
    } else if (sourceChars.length < 5) {
        // Absolute fallback for brand new users
        sourceChars = [
            {char:'天', pinyin:'tiān'}, {char:'地', pinyin:'dì'}, {char:'人', pinyin:'rén'}, 
            {char:'你', pinyin:'nǐ'}, {char:'我', pinyin:'wǒ'}, {char:'他', pinyin:'tā'},
            {char:'上', pinyin:'shàng'}, {char:'下', pinyin:'xià'}
        ];
    }

    // 3. Generate
    try {
        const aiPromise = generateMatchGameData(sourceChars);
        const timeoutPromise = new Promise<null>((resolve) => setTimeout(() => resolve(null), 4000));
        
        let data = await Promise.race([aiPromise, timeoutPromise]);

        if (!data || !data.pairs || data.pairs.length < 10) {
             console.log("AI slow or failed, using dictionary fallback");
             data = generateFallbackPairs(sourceChars);
        }
        
        if (data && data.pairs) {
            saveCrushLevelData(targetLevel, data.pairs);
            setupGrid(data.pairs);
        }
    } catch (e) {
        console.error("Game Init Error", e);
        const fallbackData = generateFallbackPairs(sourceChars.slice(0,10));
        setupGrid(fallbackData.pairs);
    } finally {
        setLoading(false);
    }
  };

  const generateFallbackPairs = (chars: Character[]) => {
      const dict = getOfflineDict();
      const pairs: MatchPair[] = [];
      const usedChars = new Set<string>();
      
      // Shuffle chars to ensure fallback isn't always same order
      const shuffledChars = [...chars].sort(() => 0.5 - Math.random());

      for (const char of shuffledChars) {
          if (pairs.length >= 10) break;
          if (usedChars.has(char.char)) continue;

          const entry = dict[char.char];
          if (entry && entry.words && entry.words.length > 0) {
              const w = entry.words[0];
              pairs.push({
                  id: Date.now() + Math.random().toString(),
                  word: w.word,
                  pinyin: w.pinyin,
                  hint: entry.memoryTip
              });
              usedChars.add(char.char);
          } else {
              pairs.push({
                  id: Date.now() + Math.random().toString(),
                  word: char.char,
                  pinyin: char.pinyin || findCharacterPinyin(char.char),
                  hint: "生字"
              });
              usedChars.add(char.char);
          }
      }
      
      // Fill if needed with random dict words
      let attempts = 0;
      const allDictKeys = Object.keys(dict);
      while (pairs.length < 10 && attempts < 50) {
          const randomChar = allDictKeys[Math.floor(Math.random() * allDictKeys.length)];
          if (usedChars.has(randomChar)) {
             attempts++;
             continue;
          }
          const entry = dict[randomChar];
           if (entry && entry.words && entry.words.length > 0) {
              pairs.push({
                  id: Date.now() + Math.random().toString(),
                  word: entry.words[0].word,
                  pinyin: entry.words[0].pinyin,
                  hint: "补充词汇"
              });
              usedChars.add(randomChar);
          }
          attempts++;
      }
      return { pairs: pairs.slice(0, 10) };
  };

  const setupGrid = (pairs: MatchPair[]) => {
      const newItems: GameItem[] = [];
      const validPairs = pairs.slice(0, 10);
      
      validPairs.forEach((pair) => {
          newItems.push({
              uid: `${pair.id}-word`,
              pairId: pair.id,
              content: pair.word,
              isPinyin: false,
              fullPinyin: pair.pinyin,
              matched: false,
              relatedHint: pair.hint
          });
          newItems.push({
              uid: `${pair.id}-pinyin`,
              pairId: pair.id,
              content: pair.pinyin,
              isPinyin: true,
              fullPinyin: pair.pinyin,
              matched: false,
              relatedHint: pair.hint
          });
      });
      setGridItems(newItems.sort(() => 0.5 - Math.random()));
  }

  // --- Game Interaction ---

  const handleCardClick = (item: GameItem) => {
      if (loading || item.matched || selectedIds.includes(item.uid)) return;
      if (selectedIds.length === 2 && errorShake.length > 0) return;

      const newSelected = [...selectedIds, item.uid];
      setSelectedIds(newSelected);
      
      if (!item.isPinyin) speakText(item.content);

      if (newSelected.length === 2) {
          checkMatch(newSelected[0], newSelected[1]);
      }
  };

  const checkMatch = (id1: string, id2: string) => {
      const item1 = gridItems.find(i => i.uid === id1);
      const item2 = gridItems.find(i => i.uid === id2);

      if (item1 && item2 && item1.pairId === item2.pairId) {
          // MATCH
          timeoutRef.current = setTimeout(() => {
              setMatchedIds(prev => [...prev, id1, id2]);
              setSelectedIds([]);
              setScore(prev => prev + 10);
              
              const praise = PRAISE_WORDS[Math.floor(Math.random() * PRAISE_WORDS.length)];
              speakEnglish(praise);

              const textItem = item1.isPinyin ? item2 : item1;
              
              // Record Learning
              const chars = textItem.content.split('');
              chars.forEach(c => {
                 if(c.match(/[\u4e00-\u9fa5]/)) {
                    addKnownCharacter({ char: c, pinyin: '' });
                 }
              });
              recordLearning(chars.map(c => ({char: c, pinyin: ''})));

              setModalContent({
                  char: textItem.content,
                  pinyin: textItem.fullPinyin || '',
                  hint: textItem.relatedHint
              });
              setShowModal(true);

              if (matchedIds.length + 2 === gridItems.length) {
                   confetti({ particleCount: 150, spread: 60 });
                   // Level Complete - Update Progress
                   if (level > maxReached) {
                       setCrushMaxLevel(level);
                       setMaxReached(level);
                   }
              }
          }, 300);
      } else {
          // NO MATCH - ERROR
          setErrorShake([id1, id2]);
          
          // Record Error: Add to global Unknown List immediately
          if (item1 && !item1.isPinyin) recordErrorToUnknown(item1);
          if (item2 && !item2.isPinyin) recordErrorToUnknown(item2);
          
          timeoutRef.current = setTimeout(() => {
              setSelectedIds([]);
              setErrorShake([]);
          }, 800);
      }
  };

  const recordErrorToUnknown = (item: GameItem) => {
       const chars = item.content.split('');
       chars.forEach(c => {
           if(c.match(/[\u4e00-\u9fa5]/)) {
               // Directly add to main vocabulary unknown list
               addUnknownCharacter({ char: c, pinyin: findCharacterPinyin(c) });
           }
       });
  };

  const handleNextLevel = () => {
      startLevel(level + 1);
      setShowModal(false); 
  };

  const handleBackToMenu = () => {
      setView('MENU');
  };

  // --- RENDERERS ---

  if (view === 'MENU') {
      return (
        <div className="min-h-screen bg-[#fdfbf7] flex flex-col relative overflow-hidden font-serif">
            <div className="bg-white/80 backdrop-blur-md p-4 shadow-sm border-b border-gray-100 flex justify-between items-center z-10">
                <button onClick={onExit} className="flex items-center gap-2 text-gray-600 font-bold"><ArrowLeft /> 退出游戏</button>
                <div className="bg-yellow-100 text-yellow-700 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star size={14}/> {score} 分
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                    
                    {/* 1. Generate New Level Button (First) */}
                    <button 
                        onClick={() => startLevel(maxReached + 1)}
                        className="aspect-square rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-green-400 text-green-600 hover:bg-green-50 hover:border-green-500 transition-all bg-white/60 shadow-sm group"
                    >
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                             <Plus size={24} />
                        </div>
                        <span className="text-xs font-bold">挑战新关卡</span>
                    </button>

                    {/* 2. Render Completed Levels (Reverse Order) */}
                    {Array.from({ length: maxReached }).map((_, i) => {
                        // Logic: If maxReached is 3, we want levels 3, 2, 1
                        const lvl = maxReached - i;
                        
                        return (
                            <button 
                                key={lvl}
                                onClick={() => startLevel(lvl)}
                                className="aspect-square rounded-2xl flex flex-col items-center justify-center shadow-sm border-2 transition-all relative overflow-hidden bg-gray-100 border-gray-200 text-gray-400 hover:bg-white hover:border-gray-300 hover:text-gray-600"
                            >
                                <span className="text-sm font-bold mb-1">关卡</span>
                                <span className="text-3xl font-fun">{lvl}</span>
                                <div className="absolute bottom-1 right-1 text-green-500"><CheckCircle size={16}/></div>
                            </button>
                        )
                    })}
                    
                </div>
            </div>
            
            <div className="text-center p-4 text-gray-400 text-xs">
                新的关卡在最前面，已通关的卡片为灰色。
            </div>
        </div>
      );
  }

  // --- PLAYING VIEW ---

  if (matchedIds.length > 0 && matchedIds.length === gridItems.length) {
      return (
          <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 p-4 font-serif">
              <div className="bg-white p-8 rounded-[2rem] shadow-2xl border-4 border-yellow-200 text-center max-w-sm w-full animate-bounce-in">
                  <Trophy size={64} className="text-yellow-500 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">关卡 {level} 完成!</h2>
                  <p className="text-gray-500 mb-6">太棒了！</p>
                  <div className="flex justify-center gap-2 mb-8">
                      <Star size={32} className="text-yellow-400 fill-yellow-400 animate-pulse" />
                      <Star size={32} className="text-yellow-400 fill-yellow-400 animate-pulse delay-100" />
                      <Star size={32} className="text-yellow-400 fill-yellow-400 animate-pulse delay-200" />
                  </div>
                  <button 
                      onClick={handleNextLevel}
                      className="w-full py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg mb-3"
                  >
                      挑战下一关
                  </button>
                  <button onClick={handleBackToMenu} className="w-full py-3 border-2 border-gray-200 text-gray-600 rounded-xl font-bold hover:bg-gray-50">
                      返回关卡列表
                  </button>
              </div>
          </div>
      );
  }

  const gridCols = 4;

  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col relative overflow-hidden font-serif">
      <div className="absolute top-[-50px] left-[-50px] w-48 h-48 bg-pink-200 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

      {/* Header */}
      <div className="flex justify-between items-center p-4 relative z-10">
        <div className="flex items-center gap-3">
            <button onClick={handleBackToMenu} className="p-2 bg-white/80 rounded-full hover:bg-white border border-gray-100 shadow-sm transition-all">
                <ArrowLeft className="text-gray-600" />
            </button>
            <div className="bg-white/80 px-4 py-1.5 rounded-full border border-gray-100 shadow-sm">
                <span className="text-gray-500 text-xs font-bold mr-1">关卡</span>
                <span className="text-gray-800 font-bold text-lg">{level}</span>
            </div>
        </div>
        <div className="bg-white/80 px-4 py-1.5 rounded-full border border-gray-100 shadow-sm flex items-center gap-2">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span className="font-bold text-gray-800">{score}</span>
        </div>
      </div>

      {/* Game Grid */}
      <div className="flex-1 overflow-y-auto p-4 flex items-center justify-center relative z-10">
          {loading ? (
              <div className="flex flex-col items-center gap-3 text-gray-400">
                  <RefreshCw className="animate-spin" size={32} />
                  <p>AI 正在出题...</p>
              </div>
          ) : (
              <div 
                className="grid gap-3 w-full max-w-md mx-auto"
                style={{ gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))` }}
              >
                  {gridItems.map((item) => {
                      const isMatched = matchedIds.includes(item.uid);
                      const isSelected = selectedIds.includes(item.uid);
                      const isError = errorShake.includes(item.uid);
                      
                      let baseClass = "";
                      if (item.isPinyin) {
                          baseClass = "bg-pink-200 border-pink-300 text-pink-700";
                      } else {
                          baseClass = "bg-sky-200 border-sky-300 text-sky-700";
                      }
                      
                      if (isMatched) {
                          return (
                              <div key={item.uid} className="aspect-[3/3] rounded-xl border-2 border-dashed border-gray-200 bg-white/20 flex items-center justify-center transition-all duration-500">
                                   <span className="font-bold text-gray-300 text-xs">✔</span>
                              </div>
                          )
                      }

                      return (
                          <button
                              key={item.uid}
                              onClick={() => handleCardClick(item)}
                              className={`
                                  relative aspect-[3/3] rounded-xl flex flex-col items-center justify-center shadow-sm transition-all duration-200 border-b-4 active:border-b-0 active:translate-y-1 p-1
                                  ${isSelected 
                                      ? 'ring-4 ring-yellow-300 scale-105 z-20 ' + baseClass
                                      : baseClass
                                  }
                                  ${isError ? 'animate-shake bg-red-400 border-red-600 text-white' : ''}
                              `}
                          >
                              <span className={`font-bold leading-tight break-all text-center
                                  ${item.content.length > 4 ? 'text-xs' : item.content.length > 2 ? 'text-sm' : 'text-xl md:text-2xl'} 
                                  ${!item.isPinyin ? 'font-fun' : 'font-sans'}
                              `}>
                                  {item.content}
                              </span>
                          </button>
                      );
                  })}
              </div>
          )}
      </div>

      {/* Success Modal (Brief) */}
      {showModal && modalContent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setShowModal(false)}>
              <div 
                  className="bg-white w-full max-w-sm rounded-[2rem] shadow-2xl p-6 relative animate-bounce-in border-4 border-yellow-100"
                  onClick={e => e.stopPropagation()}
              >
                  <div className="text-center mb-6">
                      <div className="flex items-center justify-center gap-2 mb-2">
                           <CheckCircle className="text-green-500" size={24} />
                           <span className="text-xl font-bold text-gray-800">配对成功!</span>
                      </div>
                      
                      {modalContent.hint && (
                          <div className="bg-yellow-50 text-yellow-800 px-4 py-2 rounded-xl text-sm mb-4 inline-block font-medium border border-yellow-200">
                             💡 {modalContent.hint}
                          </div>
                      )}
                      
                      <div className="bg-sky-50 p-6 rounded-2xl border-2 border-sky-100 my-4">
                          <span className="text-4xl font-fun text-sky-800 break-words">{modalContent.char}</span>
                      </div>
                      
                      <div className="flex items-center justify-center gap-3 bg-gray-50 p-3 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => speakText(modalContent.char)}>
                          <span className="text-xl font-bold text-gray-600">{modalContent.pinyin}</span>
                          <Volume2 className="text-gray-500" size={20} />
                      </div>
                  </div>
                  
                  <button 
                      onClick={() => setShowModal(false)}
                      className="w-full py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl font-bold hover:scale-105 transition-transform shadow-lg"
                  >
                      继续挑战
                  </button>
              </div>
          </div>
      )}
      
      <style>{`
         @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
         }
         .animate-shake {
            animation: shake 0.3s ease-in-out;
         }
      `}</style>
    </div>
  );
};
