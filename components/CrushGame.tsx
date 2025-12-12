
import React, { useState, useEffect } from 'react';
import { ArrowLeft, LayoutGrid, Star, Plus, CheckCircle, Trophy, RefreshCw } from 'lucide-react';
import { Character } from '../types';
import { getKnownCharacters, getUnknownCharacters, getGameStats, saveGameStats, getCrushLevelData, saveCrushLevelData } from '../services/storage';
import { generateMatchGameData } from '../services/geminiService';
import { speakText } from './SharedComponents';

interface CrushGameProps {
  characters: Character[];
  onExit: () => void;
}

interface GridItem {
    id: string; // Unique for pair (e.g., "1")
    uid: string; // Unique for grid cell (e.g., "1-pinyin")
    content: string;
    isPinyin: boolean;
    hint?: string;
    pairId: string;
    fullChar?: string;
    fullPinyin?: string;
}

export const CrushGame: React.FC<CrushGameProps> = ({ characters, onExit }) => {
  const [view, setView] = useState<'MENU' | 'PLAYING'>('MENU');
  const [level, setLevel] = useState(1);
  const [maxReached, setMaxReached] = useState(1);
  const [totalGameScore, setTotalGameScore] = useState(0);
  
  const [gridItems, setGridItems] = useState<GridItem[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [errorShake, setErrorShake] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  
  const [showDailyComplete, setShowDailyComplete] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<{char: string, pinyin: string, hint?: string} | null>(null);

  useEffect(() => {
    const stats = getGameStats('crush');
    setMaxReached(stats.maxLevel);
    setTotalGameScore(stats.totalScore);
  }, []);

  const generateFallbackPairs = (chars: Character[]) => {
      const pairs = chars.slice(0, 10).map((c, i) => ({
          id: `fallback-${i}`,
          word: c.char,
          pinyin: c.pinyin,
          hint: "基础练习"
      }));
      return { pairs };
  };

  const startLevel = async (targetLevel: number) => {
    const CHARS_PER_LEVEL_ESTIMATE = 10;
    const maxDailyLevels = Math.ceil(characters.length / CHARS_PER_LEVEL_ESTIMATE);

    if (characters.length > 0 && targetLevel > maxDailyLevels) {
        setShowDailyComplete(true);
        setView('PLAYING');
        return;
    }
    setShowDailyComplete(false);

    setLevel(targetLevel);
    setView('PLAYING');
    setLoading(true);
    setMatchedIds([]);
    setSelectedIds([]);
    setCurrentScore(0); 
    
    const cached = getCrushLevelData(targetLevel);
    if (cached && cached.pairs && cached.pairs.length === 10) {
        setupGrid(cached.pairs);
        setLoading(false);
        return;
    }

    const knownChars = getKnownCharacters();
    const unknownChars = getUnknownCharacters();
    
    let pool = [...characters, ...unknownChars, ...knownChars];
    const uniquePool = Array.from(new Map(pool.map(item => [item.char, item])).values());
    
    let sourceChars = uniquePool;
    
    if (sourceChars.length > 15) {
        sourceChars = sourceChars.sort(() => 0.5 - Math.random()).slice(0, 15);
    } else if (sourceChars.length < 5) {
        sourceChars = [
            {char:'天', pinyin:'tiān'}, {char:'地', pinyin:'dì'}, {char:'人', pinyin:'rén'}, 
            {char:'你', pinyin:'nǐ'}, {char:'我', pinyin:'wǒ'}, {char:'他', pinyin:'tā'},
            {char:'上', pinyin:'shàng'}, {char:'下', pinyin:'xià'}
        ];
    }

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

  const setupGrid = (pairs: any[]) => {
      const items: GridItem[] = [];
      pairs.forEach((p: any) => {
          items.push({
              id: p.id,
              uid: `${p.id}-word`,
              content: p.word,
              isPinyin: false,
              hint: p.hint,
              pairId: p.id,
              fullChar: p.word,
              fullPinyin: p.pinyin
          });
          items.push({
              id: p.id,
              uid: `${p.id}-pinyin`,
              content: p.pinyin,
              isPinyin: true,
              hint: p.hint,
              pairId: p.id,
              fullChar: p.word,
              fullPinyin: p.pinyin
          });
      });
      
      // Shuffle
      items.sort(() => 0.5 - Math.random());
      setGridItems(items);
  };

  const handleCardClick = (item: GridItem) => {
      if (matchedIds.includes(item.uid) || selectedIds.includes(item.uid) || selectedIds.length >= 2) return;

      const newSelected = [...selectedIds, item.uid];
      setSelectedIds(newSelected);
      
      if (!item.isPinyin) {
          speakText(item.content);
      }

      if (newSelected.length === 2) {
          const first = gridItems.find(i => i.uid === newSelected[0])!;
          const second = item;

          if (first.pairId === second.pairId) {
              // Match
              setTimeout(() => {
                  setMatchedIds(prev => [...prev, first.uid, second.uid]);
                  setSelectedIds([]);
                  setCurrentScore(prev => prev + 1); // 1 point per match
                  
                  // Show modal
                  setModalContent({
                      char: first.fullChar || '',
                      pinyin: first.fullPinyin || '',
                      hint: first.hint
                  });
                  setShowModal(true);
                  setTimeout(() => setShowModal(false), 1500);

              }, 300);
          } else {
              // Mismatch
              setTimeout(() => {
                  setErrorShake([first.uid, second.uid]);
                  speakText("不对哦");
                  setTimeout(() => {
                      setErrorShake([]);
                      setSelectedIds([]);
                  }, 500);
              }, 500);
          }
      }
  };

  const handleNextLevel = () => {
      // Logic for saving score if not replay
      const isReplay = level < maxReached;
      
      if (!isReplay) {
         const newTotal = totalGameScore + currentScore;
         setTotalGameScore(newTotal);
         
         const nextLevel = level + 1;
         if (nextLevel > maxReached) setMaxReached(nextLevel);
         saveGameStats('crush', { maxLevel: Math.max(maxReached, nextLevel), totalScore: newTotal });
         startLevel(nextLevel);
      } else {
         // Just move next without saving stars
         startLevel(level + 1);
      }
  };

  const handleBackToMenu = () => {
      // If we abort, we don't save partial score if it's new.
      // But if we want to save partial, we check isReplay.
      // For now, simple exit.
      setView('MENU');
  };

  // Display Score Logic
  const isReplay = level < maxReached;
  const displayTotalScore = totalGameScore + (isReplay ? 0 : currentScore);

  if (view === 'MENU') {
      return (
        <div className="min-h-screen bg-[#fdfbf7] flex flex-col relative overflow-hidden font-sans max-w-7xl mx-auto">
            <div className="bg-white/80 backdrop-blur-md p-4 shadow-sm border-b border-gray-100 flex justify-between items-center z-10">
                <div className="flex items-center gap-2">
                    <button onClick={onExit} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-600 transition-colors">
                        <ArrowLeft size={20}/>
                    </button>
                    <div className="flex items-center gap-2 font-bold text-green-900 text-lg">
                        <LayoutGrid className="text-green-600"/> 汉字消消乐
                    </div>
                </div>
                
                <div className="bg-white/50 px-3 py-1 rounded-full text-green-800 font-bold text-sm flex items-center gap-1 border border-green-100">
                   <Star size={16} className="text-yellow-500 fill-yellow-500"/> {totalGameScore}
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                    <button 
                        onClick={() => startLevel(maxReached + 1)}
                        className="aspect-square rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-green-400 text-green-600 hover:bg-green-50 hover:border-green-500 transition-all bg-white/60 shadow-sm group"
                    >
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                             <Plus size={24} />
                        </div>
                        <span className="text-xs font-bold">挑战新关卡</span>
                    </button>

                    {/* Only show COMPLETED levels (below current max) */}
                    {Array.from({ length: maxReached - 1 }).map((_, i) => {
                        const lvl = (maxReached - 1) - i;
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
        </div>
      );
  }

  if (showDailyComplete) {
       return (
          <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-4 max-w-7xl mx-auto">
              <div className="bg-white rounded-3xl p-8 shadow-xl text-center max-w-sm w-full animate-bounce-in border-4 border-green-100">
                  <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-green-900 mb-2">今日挑战已完成!</h2>
                  <p className="text-gray-500 mb-6 text-sm">今天要学习和复习的汉字已经全部完成啦。<br/>好好休息，明天再来挑战吧！</p>
                  
                  <button 
                      onClick={() => setView('MENU')}
                      className="w-full py-3 bg-green-600 text-white rounded-xl font-bold shadow-lg hover:bg-green-700 transition-all"
                  >
                      返回菜单
                  </button>
              </div>
          </div>
      );
  }

  if (matchedIds.length > 0 && matchedIds.length === gridItems.length) {
      return (
          <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 p-4 font-sans max-w-7xl mx-auto">
              <div className="bg-white p-8 rounded-[2rem] shadow-2xl border-4 border-yellow-200 text-center max-w-sm w-full animate-bounce-in">
                  <Trophy size={64} className="text-yellow-500 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">关卡 {level} 完成!</h2>
                  <p className="text-gray-500 mb-6">本关积分 +{currentScore}</p>
                  <div className="text-sm text-gray-400 mb-6 font-bold">Good Job!</div>
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
    <div className="min-h-screen bg-yellow-50 flex flex-col relative overflow-hidden font-sans max-w-7xl mx-auto">
      <div className="absolute top-[-50px] left-[-50px] w-48 h-48 bg-pink-200 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

      <div className="flex justify-between items-center p-4 relative z-10">
        <div className="flex items-center gap-2">
            <button onClick={handleBackToMenu} className="p-2 bg-white/50 rounded-full hover:bg-white text-green-800 transition-colors">
                <ArrowLeft />
            </button>
            <span className="font-bold text-green-900 text-lg">🧩 汉字消消乐</span>
        </div>
        <div className="flex gap-2">
            <div className="bg-white/50 px-3 py-1 rounded-full text-green-800 font-bold text-sm">
               关卡 {level}
            </div>
            <div className="bg-white/50 px-3 py-1 rounded-full text-green-800 font-bold text-sm flex items-center gap-1">
               <Star size={14} className="text-yellow-500 fill-yellow-500"/> {displayTotalScore}
            </div>
        </div>
      </div>

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
                      
                      <div className="flex items-center justify-center gap-3 bg-gray-50 p-3 rounded-xl">
                          <span className="text-xl font-bold text-gray-600">{modalContent.pinyin}</span>
                      </div>
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};
