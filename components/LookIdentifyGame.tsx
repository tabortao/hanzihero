
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, LayoutGrid, Star, Plus, CheckCircle, Trophy } from 'lucide-react';
import { Character, CharPair } from '../types';
import { getLevelData, saveLevelData, getUnknownCharacters, getKnownCharacters, getCharacterCache, saveGameStats, getGameStats } from '../services/storage';
import { getOfflineDict, findCharacterPinyin } from '../data/dictionary';
import { speakText } from './SharedComponents';

const QUESTIONS_PER_LEVEL = 5;

interface LookIdentifyGameProps {
  characters: Character[];
  onExit: () => void;
}

export const LookIdentifyGame: React.FC<LookIdentifyGameProps> = ({ characters, onExit }) => {
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
  
  const [isWrongAnim, setIsWrongAnim] = useState(false);
  const [showGunAnim, setShowGunAnim] = useState<'HIT' | 'MISS' | null>(null);
  
  const wrongCharsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
      const stats = getGameStats('look');
      setMaxLevel(stats.maxLevel);
      setTotalScore(stats.totalScore);
  }, []);

  const generateLevelData = (levelNum: number): CharPair[][] => {
      const stored = getLevelData('look', levelNum);
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
           return [];
      }
      
      sourcePool = Array.from(new Map(sourcePool.map(c => [c.char, c])).values());
      if (sourcePool.length === 0) sourcePool = [{char: '中', pinyin: 'zhōng'}, {char: '国', pinyin: 'guó'}];

      const findContentForChar = (char: string): CharPair[] | null => {
        const cached = getCharacterCache(char);
        const entry = cached || dict[char];
        if (!entry) return null;

        if (Math.random() > 0.5 && entry.words && entry.words.length > 0) {
            const randomWord = entry.words[Math.floor(Math.random() * entry.words.length)];
            const charPairs: CharPair[] = [];
            const wordChars = randomWord.word.split('');
            const wordPinyins = randomWord.pinyin.split(' ');
            for(let i=0; i<wordChars.length; i++) {
                charPairs.push({ char: wordChars[i], pinyin: wordPinyins[i] || '' });
            }
            return charPairs;
        }
        if (entry.sentenceData && entry.sentenceData.length > 0 && entry.sentenceData.length <= 12) {
            return entry.sentenceData;
        }
        return null;
     };

     let poolIdx = 0;
     while (sentences.length < QUESTIONS_PER_LEVEL) {
         const focusChar = sourcePool[poolIdx % sourcePool.length];
         let content = findContentForChar(focusChar.char);
         if (!content) {
             const randoms = sourcePool.sort(() => 0.5 - Math.random()).slice(0, 3 + Math.floor(Math.random() * 2));
             content = randoms.map(c => ({ char: c.char, pinyin: c.pinyin || findCharacterPinyin(c.char) }));
         }
         sentences.push(content);
         poolIdx++;
     }
     
     saveLevelData('look', levelNum, { sentences });
     return sentences;
  };

  const startLevel = (levelNum: number) => {
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
      setShowGunAnim(null);
      
      const options = [...sentence].map((c, idx) => ({ ...c, originalIdx: idx })); 
      options.sort(() => 0.5 - Math.random());
      setShuffledOptions(options);
  };

  const handleOptionClick = (selected: CharPair & { originalIdx: number }, clickedIdx: number) => {
      const currentTargetIdx = correctIndices.length;
      if (currentTargetIdx >= targetSentence.length) return;

      const expectedChar = targetSentence[currentTargetIdx];

      if (selected.char === expectedChar.char) {
          const newIndices = [...correctIndices, currentTargetIdx];
          setCorrectIndices(newIndices);
          speakText(selected.char);
          
          const newOptions = [...shuffledOptions];
          newOptions.splice(clickedIdx, 1);
          setShuffledOptions(newOptions);

          setShowGunAnim('HIT');
          setTimeout(() => setShowGunAnim(null), 500);

          if (newIndices.length === targetSentence.length) {
              setTimeout(() => {
                   // Add score instantly (1 point)
                   setLevelScore(prev => prev + 1);

                   if (currentRoundInLevel < QUESTIONS_PER_LEVEL - 1) {
                       setCurrentRoundInLevel(prev => prev + 1);
                       loadRound(currentLevel, currentRoundInLevel + 1);
                   } else {
                       handleLevelComplete();
                   }
              }, 800);
          }
      } else {
          setIsWrongAnim(true);
          setTimeout(() => setIsWrongAnim(false), 500);
          setShowGunAnim('MISS');
          setTimeout(() => setShowGunAnim(null), 500);
          speakText("不对哦");
          wrongCharsRef.current.add(expectedChar.char);
      }
  };

  const handleLevelComplete = () => {
      const isReplay = currentLevel < maxLevel;
      const finalLevelScore = QUESTIONS_PER_LEVEL;

      if (!isReplay) {
          const newTotal = totalScore + finalLevelScore;
          setTotalScore(newTotal);
          const nextLevel = currentLevel + 1;
          if (nextLevel > maxLevel) setMaxLevel(nextLevel);
          saveGameStats('look', { maxLevel: Math.max(maxLevel, nextLevel), totalScore: newTotal });
      }
      
      setLevelScore(finalLevelScore);
      setShowLevelComplete(true);
  };

  // Display Logic
  const isReplay = currentLevel < maxLevel;
  const displayTotalScore = totalScore + (isReplay ? 0 : levelScore);


  if (view === 'MENU') {
      return (
        <div className="min-h-screen bg-orange-50 flex flex-col relative overflow-hidden font-sans max-w-7xl mx-auto">
             <div className="bg-white/80 backdrop-blur-md p-4 shadow-sm border-b border-gray-100 flex justify-between items-center z-10">
                <div className="flex items-center gap-2">
                    <button onClick={onExit} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-600 transition-colors">
                        <ArrowLeft size={20}/>
                    </button>
                    <div className="flex items-center gap-2 font-bold text-orange-900 text-lg">
                        <LayoutGrid className="text-orange-600"/> 超能靶场
                    </div>
                </div>
                
                <div className="bg-white/50 px-3 py-1 rounded-full text-orange-800 font-bold text-sm flex items-center gap-1 border border-orange-100">
                   <Star size={16} className="text-yellow-500 fill-yellow-500"/> {totalScore}
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                    <button 
                        onClick={() => startLevel(maxLevel)}
                        className="aspect-square rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-orange-400 text-orange-600 hover:bg-orange-50 hover:border-orange-500 transition-all bg-white/60 shadow-sm group"
                    >
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
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
          <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 p-4 max-w-7xl mx-auto">
              <div className="bg-white rounded-3xl p-8 shadow-xl text-center max-w-sm w-full animate-bounce-in border-4 border-orange-100">
                  <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-orange-900 mb-2">今日挑战已完成!</h2>
                  <p className="text-gray-500 mb-6 text-sm">今天要学习和复习的汉字已经全部完成啦。<br/>好好休息，明天再来挑战吧！</p>
                  
                  <button 
                      onClick={() => setView('MENU')}
                      className="w-full py-3 bg-orange-600 text-white rounded-xl font-bold shadow-lg hover:bg-orange-700 transition-all"
                  >
                      返回菜单
                  </button>
              </div>
          </div>
      );
  }

  if (showLevelComplete) {
      return (
          <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 p-4 max-w-7xl mx-auto">
              <div className="bg-white rounded-3xl p-8 shadow-xl text-center max-w-sm w-full animate-bounce-in border-4 border-orange-100">
                  <Trophy size={64} className="text-yellow-500 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-orange-900 mb-2">Great Job!</h2>
                  <p className="text-gray-500 mb-4">关卡 {currentLevel} 完成</p>
                  <p className="text-xl font-bold text-orange-600 mb-6">本关得分: {levelScore}</p>
                  
                  <div className="space-y-3">
                      <button 
                          onClick={() => startLevel(currentLevel + 1)}
                          className="w-full py-3 bg-orange-600 text-white rounded-xl font-bold shadow-lg hover:bg-orange-700 transition-all"
                      >
                          挑战下一关
                      </button>
                      <button 
                          onClick={() => setView('MENU')}
                          className="w-full py-3 border-2 border-orange-100 text-orange-600 rounded-xl font-bold hover:bg-orange-50"
                      >
                          返回菜单
                      </button>
                  </div>
              </div>
          </div>
      );
  }

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col relative overflow-hidden max-w-7xl mx-auto font-sans">
       <div className="flex justify-between items-center p-4">
           <div className="flex items-center gap-2">
               <button onClick={() => setView('MENU')} className="p-2 bg-white/50 rounded-full hover:bg-white text-orange-800">
                   <ArrowLeft />
               </button>
               <span className="font-bold text-orange-900 text-lg">第 {currentLevel} 关</span>
           </div>
           
           <div className="flex gap-2">
               <div className="bg-white/50 px-3 py-1 rounded-full text-orange-800 font-bold text-sm">
                  进度 {currentRoundInLevel + 1} / {QUESTIONS_PER_LEVEL}
               </div>
               <div className="bg-white/50 px-3 py-1 rounded-full text-orange-800 font-bold text-sm flex items-center gap-1">
                  <Star size={14} className="text-yellow-500 fill-yellow-500"/> {displayTotalScore}
               </div>
           </div>
       </div>

       <div className="flex-1 flex flex-col items-center pt-4 px-2">
           <div className="flex flex-wrap justify-center gap-3 mb-4 min-h-[80px]">
               {targetSentence.map((pair, idx) => {
                   const isSolved = idx < correctIndices.length;
                   return (
                       <div key={idx} className="flex flex-col items-center">
                           <span className="text-lg font-bold text-gray-500 mb-1">{pair.pinyin}</span>
                           <div 
                                className={`w-14 h-14 sm:w-16 sm:h-16 border-2 rounded-lg flex items-center justify-center transition-all duration-300 ${isSolved ? 'bg-white border-orange-400 shadow-md' : 'bg-white/30 border-dashed border-gray-300'}`}
                           >
                               {isSolved ? (
                                   <span className="font-fun text-3xl text-gray-800 animate-bounce-in">{pair.char}</span>
                               ) : (
                                   <div className="w-2 h-2 bg-gray-300 rounded-full" />
                               )}
                           </div>
                       </div>
                   )
               })}
           </div>

           <div className="relative w-full max-w-md flex-1 flex items-center justify-center mb-8 perspective-container">
               <div className={`relative transition-transform duration-100 ${showGunAnim === 'HIT' ? 'scale-105' : ''} target-tilted`}>
                   <div className="relative w-56 h-56 rounded-full border-4 border-gray-800 bg-white shadow-2xl flex items-center justify-center">
                       <div className="absolute w-[90%] h-[90%] rounded-full border-[15px] border-black/10"></div>
                       <div className="absolute w-[70%] h-[70%] rounded-full border-[15px] border-black/20"></div>
                       <div className="absolute w-[50%] h-[50%] rounded-full border-[15px] border-black/30"></div>
                       <div className="absolute w-[30%] h-[30%] rounded-full border-[15px] border-black/40"></div>
                       <div className="w-6 h-6 bg-red-600 rounded-full z-10 shadow-[0_0_10px_red]"></div>
                       
                       <div className="absolute right-[-40px] sm:right-[-180px] bottom-[-30px] opacity-90 pointer-events-none transform rotate-[20deg] origin-bottom-left transition-transform duration-300">
                           <span className="text-[10rem]">🔫</span>
                       </div>
                   </div>

                    {showGunAnim === 'HIT' && (
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none">
                            <div className="w-32 h-32 bg-yellow-400 rounded-full mix-blend-screen filter blur-xl animate-ping opacity-80"></div>
                            <span className="absolute text-4xl animate-bounce font-bold text-red-500 z-50" style={{top: '-20px'}}>Hit!</span>
                        </div>
                    )}
                    {showGunAnim === 'MISS' && (
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl font-bold text-red-500 animate-ping z-50">
                           ❌
                        </div>
                    )}
               </div>
           </div>
       </div>

       <div className="min-h-[180px] bg-white/90 backdrop-blur-md rounded-t-[3rem] p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] border-t-4 border-orange-100">
           <div className="flex flex-wrap justify-center gap-4 content-center h-full pb-6">
               {shuffledOptions.map((pair, idx) => (
                   <button
                       key={idx}
                       onClick={() => handleOptionClick(pair, idx)}
                       className={`
                           w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-100 to-white rounded-full shadow-md border-2 border-orange-200 text-2xl font-fun text-gray-700 flex items-center justify-center
                           hover:scale-110 active:scale-95 transition-all
                           ${isWrongAnim ? 'animate-shake bg-red-100 border-red-300' : 'animate-float-random'}
                       `}
                       style={{ 
                           animationDelay: `${idx * 0.2}s`,
                           animationDuration: `${3 + Math.random() * 2}s`
                       }}
                   >
                       {pair.char}
                   </button>
               ))}
           </div>
       </div>
       
       <style>{`
         .perspective-container { perspective: 800px; }
         .target-tilted { transform: rotateY(20deg); box-shadow: 10px 10px 20px rgba(0,0,0,0.2); }
         @keyframes bounce-in {
            0% { transform: scale(0.3); opacity: 0; }
            50% { transform: scale(1.1); }
            70% { transform: scale(0.9); }
            100% { transform: scale(1); opacity: 1; }
         }
         .animate-bounce-in { animation: bounce-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
         @keyframes float-random {
             0%, 100% { transform: translateY(0); }
             50% { transform: translateY(-8px); }
         }
         .animate-float-random { animation: float-random 4s ease-in-out infinite; }
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
