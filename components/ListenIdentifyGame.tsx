
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Volume2, Target, CheckCircle, Trophy, Star, Plus } from 'lucide-react';
import { Character, CharPair } from '../types';
import { getLevelData, saveLevelData, getUnknownCharacters, getKnownCharacters, getCharacterCache, saveGameStats, getGameStats } from '../services/storage';
import { getOfflineDict, findCharacterPinyin } from '../data/dictionary';
import { speakText, WritingGrid } from './SharedComponents';

const QUESTIONS_PER_LEVEL = 5;

interface ListenIdentifyGameProps {
  characters: Character[];
  onExit: () => void;
}

export const ListenIdentifyGame: React.FC<ListenIdentifyGameProps> = ({ characters, onExit }) => {
  const [view, setView] = useState<'MENU' | 'PLAYING'>('MENU');
  const [currentLevel, setCurrentLevel] = useState(1);
  const [maxLevel, setMaxLevel] = useState(1);
  const [totalScore, setTotalScore] = useState(0);
  
  const [targetSentence, setTargetSentence] = useState<CharPair[]>([]);
  const [shuffledOptions, setShuffledOptions] = useState<(CharPair & { originalIdx: number })[]>([]);
  const [correctIndices, setCorrectIndices] = useState<number[]>([]);
  
  const [levelScore, setLevelScore] = useState(0);
  const [currentRoundInLevel, setCurrentRoundInLevel] = useState(0);
  const [showLevelComplete, setShowLevelComplete] = useState(false);
  const [showDailyComplete, setShowDailyComplete] = useState(false);
  
  // Animation states
  const [isWrongAnim, setIsWrongAnim] = useState(false);
  const [showArrowAnim, setShowArrowAnim] = useState<'HIT' | 'MISS' | null>(null);
  
  const wrongCharsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
      const stats = getGameStats('listen');
      setMaxLevel(stats.maxLevel);
      setTotalScore(stats.totalScore);
  }, []);

  const generateLevelData = (levelNum: number): CharPair[][] => {
      const stored = getLevelData('listen', levelNum);
      if (stored && Array.isArray(stored.sentences) && stored.sentences.length === QUESTIONS_PER_LEVEL) {
          return stored.sentences;
      }

      const sentences: CharPair[][] = [];
      const dict = getOfflineDict();
      
      const startIndex = (levelNum - 1) * QUESTIONS_PER_LEVEL;
      let sourcePool: Character[] = [];
      
      if (startIndex < characters.length) {
           sourcePool = characters.slice(startIndex, startIndex + QUESTIONS_PER_LEVEL * 3);
           if (sourcePool.length < QUESTIONS_PER_LEVEL) {
               const padding = [...getUnknownCharacters(), ...getKnownCharacters()].sort(() => 0.5 - Math.random()).slice(0, 10);
               sourcePool = [...sourcePool, ...padding];
           }
      } else {
           // If daily pool exhausted, return empty to trigger complete message
           return [];
      }
      
      sourcePool = Array.from(new Map(sourcePool.map(c => [c.char, c])).values());
      if (sourcePool.length === 0) sourcePool = [{char: '天', pinyin: 'tiān'}, {char: '地', pinyin: 'dì'}];

      const findSentenceForChar = (char: string): CharPair[] | null => {
        const cached = getCharacterCache(char);
        if (cached && cached.sentenceData && cached.sentenceData.length > 0 && cached.sentenceData.length <= 15) return cached.sentenceData;
        const entry = dict[char];
        if (entry && entry.sentenceData && entry.sentenceData.length > 0 && entry.sentenceData.length <= 15) return entry.sentenceData;
        return null;
     };

     // Generate Questions
     let poolIdx = 0;
     while (sentences.length < QUESTIONS_PER_LEVEL) {
         const focusChar = sourcePool[poolIdx % sourcePool.length];
         let sentence = findSentenceForChar(focusChar.char);
         
         if (!sentence) {
             const randoms = sourcePool.sort(() => 0.5 - Math.random()).slice(0, 4);
             sentence = randoms.map(c => ({ char: c.char, pinyin: c.pinyin || findCharacterPinyin(c.char) }));
         }
         sentences.push(sentence);
         poolIdx++;
     }
     
     saveLevelData('listen', levelNum, { sentences });
     return sentences;
  };

  const startLevel = (levelNum: number) => {
      // Check Max Daily Level
      const maxDailyLevels = Math.ceil(characters.length / QUESTIONS_PER_LEVEL);
      if (characters.length > 0 && levelNum > maxDailyLevels) {
          setShowDailyComplete(true);
          setView('PLAYING');
          return;
      }
      setShowDailyComplete(false);

      setCurrentLevel(levelNum);
      setCurrentRoundInLevel(0);
      setLevelScore(0);
      wrongCharsRef.current.clear();
      setShowLevelComplete(false);
      setView('PLAYING');
      
      loadRound(levelNum, 0);
  };
  
  const loadRound = (levelNum: number, roundIdx: number) => {
      const sentences = generateLevelData(levelNum);
      if (sentences.length === 0) {
          setShowDailyComplete(true);
          return;
      }

      const sentence = sentences[roundIdx];
      setTargetSentence(sentence);
      setCorrectIndices([]);
      setShowArrowAnim(null);
      
      const options = [...sentence].map((c, idx) => ({ ...c, originalIdx: idx })); 
      options.sort(() => 0.5 - Math.random());
      setShuffledOptions(options);

      setTimeout(() => {
          speakText(sentence.map(c => c.char).join(''));
      }, 800);
  };

  const handleOptionClick = (selected: CharPair & { originalIdx: number }, clickedIdx: number) => {
      const currentTargetIdx = correctIndices.length;
      if (currentTargetIdx >= targetSentence.length) return;

      const expectedChar = targetSentence[currentTargetIdx];

      if (selected.char === expectedChar.char) {
          // Correct
          const newIndices = [...correctIndices, currentTargetIdx];
          setCorrectIndices(newIndices);
          speakText(selected.char);
          
          // Remove used option
          const newOptions = [...shuffledOptions];
          newOptions.splice(clickedIdx, 1);
          setShuffledOptions(newOptions);
          
          setShowArrowAnim('HIT');
          setTimeout(() => setShowArrowAnim(null), 500);

          if (newIndices.length === targetSentence.length) {
              // Round Complete
              setTimeout(() => {
                   // Add score immediately for this round (1 point per question)
                   setLevelScore(prev => prev + 1);
                   
                   if (currentRoundInLevel < QUESTIONS_PER_LEVEL - 1) {
                       setCurrentRoundInLevel(prev => prev + 1);
                       loadRound(currentLevel, currentRoundInLevel + 1);
                   } else {
                       handleLevelComplete();
                   }
              }, 1000);
          }
      } else {
          // Wrong
          setIsWrongAnim(true);
          setTimeout(() => setIsWrongAnim(false), 500);
          setShowArrowAnim('MISS');
          setTimeout(() => setShowArrowAnim(null), 500);
          speakText("不对哦");
          wrongCharsRef.current.add(expectedChar.char);
      }
  };

  const handleLevelComplete = () => {
      const isReplay = currentLevel < maxLevel;
      const pointsEarned = levelScore + 1; // +1 because levelScore state lags one step in the final round update above? No, wait.
      // Logic fix: setLevelScore adds 1 on round completion. So at end, levelScore is 5.
      
      // Calculate final stars for this session
      // Since we updated levelScore iteratively, 'levelScore' variable here holds (QUESTIONS_PER_LEVEL - 1) because of closure?
      // No, let's use functional update or rely on known count (5).
      const finalLevelScore = QUESTIONS_PER_LEVEL;
      
      if (!isReplay) {
          const newTotal = totalScore + finalLevelScore;
          setTotalScore(newTotal);
          const nextLevel = currentLevel + 1;
          if (nextLevel > maxLevel) setMaxLevel(nextLevel);
          saveGameStats('listen', { maxLevel: Math.max(maxLevel, nextLevel), totalScore: newTotal });
      }
      
      // Update UI state just for display
      setLevelScore(finalLevelScore);
      setShowLevelComplete(true);
  };

  // --- Renders ---

  // Calculate realtime total score for display
  const isReplay = currentLevel < maxLevel;
  const displayTotalScore = totalScore + (isReplay ? 0 : levelScore);

  if (view === 'MENU') {
      return (
        <div className="min-h-screen bg-[#f0f9ff] flex flex-col relative overflow-hidden font-sans max-w-7xl mx-auto">
             <div className="bg-white/80 backdrop-blur-md p-4 shadow-sm border-b border-gray-100 flex justify-between items-center z-10">
                <div className="flex items-center gap-2">
                    <button onClick={onExit} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-600 transition-colors">
                        <ArrowLeft size={20}/>
                    </button>
                    <div className="flex items-center gap-2 font-bold text-indigo-900 text-lg">
                        <Volume2 className="text-indigo-600"/> 星箭追击
                    </div>
                </div>
                
                <div className="bg-white/50 px-3 py-1 rounded-full text-indigo-800 font-bold text-sm flex items-center gap-1 border border-indigo-100">
                   <Star size={16} className="text-yellow-500 fill-yellow-500"/> {totalScore}
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                    <button 
                        onClick={() => startLevel(maxLevel)}
                        className="aspect-square rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-indigo-400 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-500 transition-all bg-white/60 shadow-sm group"
                    >
                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                             <Plus size={24} />
                        </div>
                        <span className="text-xs font-bold">挑战新关卡</span>
                    </button>

                    {/* Only show COMPLETED levels (below current max) */}
                    {Array.from({ length: maxLevel - 1 }).map((_, i) => {
                        const lvl = (maxLevel - 1) - i;
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
          <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-50 p-4 max-w-7xl mx-auto">
              <div className="bg-white rounded-3xl p-8 shadow-xl text-center max-w-sm w-full animate-bounce-in border-4 border-indigo-100">
                  <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-indigo-900 mb-2">今日挑战已完成!</h2>
                  <p className="text-gray-500 mb-6 text-sm">今天要学习和复习的汉字已经全部完成啦。<br/>好好休息，明天再来挑战吧！</p>
                  
                  <button 
                      onClick={() => setView('MENU')}
                      className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition-all"
                  >
                      返回菜单
                  </button>
              </div>
          </div>
      );
  }

  if (showLevelComplete) {
      return (
          <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-50 p-4 max-w-7xl mx-auto">
              <div className="bg-white rounded-3xl p-8 shadow-xl text-center max-w-sm w-full animate-bounce-in border-4 border-indigo-100">
                  <Trophy size={64} className="text-yellow-500 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-indigo-900 mb-2">Great Job!</h2>
                  <p className="text-gray-500 mb-4">关卡 {currentLevel} 完成</p>
                  <p className="text-xl font-bold text-indigo-600 mb-6">本关得分: {levelScore}</p>
                  
                  <div className="space-y-3">
                      <button 
                          onClick={() => startLevel(currentLevel + 1)}
                          className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition-all"
                      >
                          挑战下一关
                      </button>
                      <button 
                          onClick={() => setView('MENU')}
                          className="w-full py-3 border-2 border-indigo-100 text-indigo-600 rounded-xl font-bold hover:bg-indigo-50"
                      >
                          返回菜单
                      </button>
                  </div>
              </div>
          </div>
      );
  }

  return (
    <div className="min-h-screen bg-sky-100 flex flex-col relative overflow-hidden max-w-7xl mx-auto">
       <div className="flex justify-between items-center p-4">
           <div className="flex items-center gap-2">
               <button onClick={() => setView('MENU')} className="p-2 bg-white/50 rounded-full hover:bg-white text-indigo-800">
                   <ArrowLeft />
               </button>
               <span className="font-bold text-indigo-900 text-lg">第 {currentLevel} 关</span>
           </div>
           
           <div className="flex gap-2">
                <div className="bg-white/50 px-3 py-1 rounded-full text-indigo-800 font-bold text-sm flex items-center">
                   进度 {currentRoundInLevel + 1} / {QUESTIONS_PER_LEVEL}
                </div>
                <div className="bg-white/50 px-3 py-1 rounded-full text-indigo-800 font-bold text-sm flex items-center gap-1">
                   <Star size={14} className="text-yellow-500 fill-yellow-500"/> {displayTotalScore}
                </div>
           </div>
       </div>

       <div className="flex-1 flex flex-col items-center pt-4 px-2">
           <div className="flex flex-wrap justify-center gap-2 mb-8 min-h-[60px]">
               {targetSentence.map((pair, idx) => (
                   <div key={idx} className="transition-all duration-500">
                       {idx < correctIndices.length ? (
                           <WritingGrid char={pair.char} pinyin={pair.pinyin} variant="notebook" />
                       ) : (
                           <div className="w-14 h-14 sm:w-20 sm:h-20 border-2 border-dashed border-indigo-300 rounded-lg bg-white/30 flex items-center justify-center">
                               <span className="text-indigo-200 text-2xl">?</span>
                           </div>
                       )}
                   </div>
               ))}
           </div>

           <div className="relative w-full max-w-md flex-1 flex items-center justify-center mb-8 perspective-container">
               <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-red-500 flex items-center justify-center shadow-2xl border-4 border-white transform-style-3d target-tilted">
                   <div className="w-3/4 h-3/4 rounded-full bg-white flex items-center justify-center border-2 border-gray-200">
                       <div className="w-3/4 h-3/4 rounded-full bg-red-500 flex items-center justify-center border-2 border-white">
                           <div className="w-1/2 h-1/2 rounded-full bg-yellow-400 flex items-center justify-center shadow-inner border-2 border-red-600">
                               <Target size={32} className="text-red-600 opacity-50"/>
                           </div>
                       </div>
                   </div>
               </div>

               <div className="absolute right-0 bottom-10 z-20 transform -rotate-[60deg] opacity-80 pointer-events-none">
                   <span className="text-8xl filter drop-shadow-lg">🏹</span>
               </div>

               {showArrowAnim === 'HIT' && (
                   <div className="absolute z-30 animate-arrow-hit text-6xl" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                       🎯
                   </div>
               )}
               {showArrowAnim === 'MISS' && (
                   <div className="absolute z-30 animate-bounce text-6xl" style={{ top: '60%', left: '40%' }}>
                       ❌
                   </div>
               )}

               <button 
                  onClick={() => speakText(targetSentence.map(c => c.char).join(''))}
                  className="absolute bottom-0 left-4 p-3 bg-white rounded-full shadow-lg text-indigo-600 hover:scale-110 transition-transform"
               >
                   <Volume2 size={24} />
               </button>
           </div>
       </div>

       <div className="h-1/3 bg-white/90 backdrop-blur-md rounded-t-[3rem] p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border-t-4 border-indigo-100">
           <p className="text-center text-indigo-400 font-bold mb-4 text-sm animate-pulse">
               请按顺序点击听到的汉字
           </p>
           <div className="flex flex-wrap justify-center gap-3 content-center h-full pb-8">
               {shuffledOptions.map((pair, idx) => (
                   <button
                       key={idx}
                       onClick={() => handleOptionClick(pair, idx)}
                       className={`
                           w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl shadow-md border-b-4 border-indigo-200 text-2xl font-fun text-gray-700 flex items-center justify-center
                           hover:scale-110 active:scale-95 active:border-b-0 active:translate-y-1 transition-all
                           ${isWrongAnim ? 'animate-shake' : 'animate-float'}
                       `}
                       style={{ animationDelay: `${idx * 0.1}s` }}
                   >
                       {pair.char}
                   </button>
               ))}
           </div>
       </div>
       
       <style>{`
         .perspective-container { perspective: 800px; }
         .target-tilted { transform: rotateY(-25deg); box-shadow: -10px 10px 20px rgba(0,0,0,0.2); }
         @keyframes arrow-hit {
             0% { transform: translate(100%, 100%) scale(0.5); opacity: 0; }
             50% { opacity: 1; }
             100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0; }
         }
         .animate-arrow-hit { animation: arrow-hit 0.6s ease-out forwards; }
         @keyframes float {
             0%, 100% { transform: translateY(0); }
             50% { transform: translateY(-5px); }
         }
         .animate-float { animation: float 3s ease-in-out infinite; }
         @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
         }
         .animate-shake { animation: shake 0.3s ease-in-out; }
       `}</style>
    </div>
  );
};
