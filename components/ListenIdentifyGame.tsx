
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ArrowLeft, Volume2, Target, Star } from 'lucide-react';
import { Character, CharPair } from '../types';
import { getOfflineDict, findCharacterPinyin } from '../data/dictionary';
import { speakText, WritingGrid } from './SharedComponents';
import { addStars, addUnknownCharacter, addKnownCharacter, recordLearning, getCharacterCache } from '../services/storage';
import confetti from 'canvas-confetti';

interface ListenIdentifyGameProps {
  characters: Character[];
  onExit: () => void;
}

export const ListenIdentifyGame: React.FC<ListenIdentifyGameProps> = ({ characters, onExit }) => {
  const [currentRound, setCurrentRound] = useState(0);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<'PLAYING' | 'FINISHED'>('PLAYING');
  
  // Current Sentence State
  const [targetSentence, setTargetSentence] = useState<CharPair[]>([]);
  const [correctIndices, setCorrectIndices] = useState<number[]>([]); 
  const [shuffledOptions, setShuffledOptions] = useState<CharPair[]>([]);
  const [isWrongAnim, setIsWrongAnim] = useState(false);
  const [showArrowAnim, setShowArrowAnim] = useState<'HIT' | 'MISS' | null>(null);

  // Stats
  const TOTAL_ROUNDS = 10;
  const wrongCharsRef = useRef<Set<string>>(new Set());

  // Generate rounds based on characters
  const rounds = useMemo(() => {
     // Ensure we have enough characters to loop through
     const pool = characters.length > 0 ? [...characters] : [{char: '天', pinyin: 'tiān'}]; 
     const generatedRounds: CharPair[][] = [];
     const dict = getOfflineDict();

     const findSentenceForChar = (char: string): CharPair[] | null => {
        // 1. Try AI Cache first (AI Driven Learning)
        const cached = getCharacterCache(char);
        if (cached && cached.sentenceData && cached.sentenceData.length > 0 && cached.sentenceData.length <= 15) {
            return cached.sentenceData;
        }

        // 2. Fallback to Offline Dictionary
        const entry = dict[char];
        if (entry && entry.sentenceData && entry.sentenceData.length > 0 && entry.sentenceData.length <= 15) {
            return entry.sentenceData;
        }
        return null;
     };

     for (let i = 0; i < TOTAL_ROUNDS; i++) {
        const focusChar = pool[i % pool.length];
        let sentence = findSentenceForChar(focusChar.char);

        if (!sentence) {
            // Fallback: Random characters if no sentence found
            const randomChars = pool.sort(() => 0.5 - Math.random()).slice(0, 4);
            sentence = randomChars.map(c => ({ char: c.char, pinyin: c.pinyin }));
        }
        generatedRounds.push(sentence);
     }
     return generatedRounds;
  }, [characters]);

  useEffect(() => {
      startRound(0);
  }, []);

  const startRound = (roundIdx: number) => {
      if (roundIdx >= TOTAL_ROUNDS) {
          finishGame();
          return;
      }
      
      const sentence = rounds[roundIdx];
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

  const handleOptionClick = (charPair: CharPair, optionIdx: number) => {
      if (showArrowAnim) return; 

      const nextTargetIndex = correctIndices.length;
      const targetChar = targetSentence[nextTargetIndex];

      if (charPair.char === targetChar.char) {
          // Correct
          setCorrectIndices(prev => [...prev, nextTargetIndex]);
          
          const newOptions = [...shuffledOptions];
          newOptions.splice(optionIdx, 1);
          setShuffledOptions(newOptions);

          setShowArrowAnim('HIT');
          speakText(charPair.char); 
          
          setScore(prev => prev + 1); // 1 point per correct char

          setTimeout(() => {
              setShowArrowAnim(null);
              if (nextTargetIndex + 1 === targetSentence.length) {
                   setTimeout(() => {
                       setCurrentRound(r => {
                           const next = r + 1;
                           startRound(next);
                           return next;
                       });
                   }, 1000);
              }
          }, 600); 

      } else {
          // Wrong
          setIsWrongAnim(true);
          setShowArrowAnim('MISS');
          
          wrongCharsRef.current.add(targetChar.char);

          setTimeout(() => {
              setIsWrongAnim(false);
              setShowArrowAnim(null);
          }, 600);
      }
  };

  const finishGame = () => {
      setGameState('FINISHED');
      addStars(score); // Save total points
      
      // 1. Record Wrong Characters (Add to Unknown)
      wrongCharsRef.current.forEach(charStr => {
          const fullChar = characters.find(c => c.char === charStr) || { char: charStr, pinyin: findCharacterPinyin(charStr) };
          addUnknownCharacter(fullChar);
      });

      // 2. Record Correct Characters (Update Timestamp for 3-1-3 Method)
      const correctChars = characters.filter(c => !wrongCharsRef.current.has(c.char));
      correctChars.forEach(c => addKnownCharacter(c));

      // 3. Update Daily Stats
      recordLearning(correctChars);

      confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
      });
  };

  const getRankTitle = (finalScore: number) => {
      if (finalScore >= 50) return "传说神射手";
      if (finalScore >= 30) return "皇家弓箭手";
      if (finalScore >= 15) return "森林游侠";
      return "见习弓手";
  };

  if (gameState === 'FINISHED') {
      return (
          <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-50 p-4 max-w-7xl mx-auto">
              <div className="bg-white rounded-3xl p-8 shadow-xl text-center max-w-sm w-full animate-bounce-in border-4 border-indigo-100">
                  <div className="mb-4 text-6xl">🏹</div>
                  <h2 className="text-3xl font-bold text-indigo-900 mb-2">挑战完成!</h2>
                  <div className="text-xl font-bold text-purple-600 mb-4 bg-purple-50 py-2 rounded-lg">
                      称号：{getRankTitle(score)}
                  </div>
                  <div className="text-6xl font-fun text-yellow-400 mb-4 flex justify-center gap-2">
                       <Star fill="currentColor" className="text-yellow-400" />
                  </div>
                  <p className="text-2xl font-bold text-indigo-600 mb-6">获得积分: {score}</p>
                  
                  {wrongCharsRef.current.size > 0 && (
                      <div className="mb-6 bg-red-50 p-4 rounded-xl">
                          <p className="text-sm text-red-500 font-bold mb-2">脱靶汉字（需复习）：</p>
                          <div className="flex flex-wrap justify-center gap-2">
                              {Array.from(wrongCharsRef.current).map(c => (
                                  <span key={c} className="bg-white px-2 py-1 rounded border border-red-200 text-red-600 font-bold">{c}</span>
                              ))}
                          </div>
                      </div>
                  )}

                  <button onClick={onExit} className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition-all">
                      返回菜单
                  </button>
              </div>
          </div>
      );
  }

  return (
    <div className="min-h-screen bg-sky-100 flex flex-col relative overflow-hidden max-w-7xl mx-auto">
       {/* Header */}
       <div className="flex justify-between items-center p-4">
           <div className="flex items-center gap-2">
               <button onClick={onExit} className="p-2 bg-white/50 rounded-full hover:bg-white text-indigo-800">
                   <ArrowLeft />
               </button>
               <span className="font-bold text-indigo-900 text-lg">🏹 弓箭射击</span>
           </div>
           
           <div className="flex gap-2">
                <div className="bg-white/50 px-3 py-1 rounded-full text-indigo-800 font-bold text-sm flex items-center">
                   {currentRound + 1} / {TOTAL_ROUNDS}
                </div>
                <div className="bg-white/50 px-3 py-1 rounded-full text-indigo-800 font-bold text-sm flex items-center gap-1">
                   <Star size={14} className="text-yellow-500 fill-yellow-500"/> {score}
                </div>
           </div>
       </div>

       {/* Sentence Grid Area */}
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

           {/* Archery Target Area (Side View) */}
           <div className="relative w-full max-w-md flex-1 flex items-center justify-center mb-8 perspective-container">
               {/* 3D Tilted Target */}
               <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-red-500 flex items-center justify-center shadow-2xl border-4 border-white transform-style-3d target-tilted">
                   <div className="w-3/4 h-3/4 rounded-full bg-white flex items-center justify-center border-2 border-gray-200">
                       <div className="w-3/4 h-3/4 rounded-full bg-red-500 flex items-center justify-center border-2 border-white">
                           <div className="w-1/2 h-1/2 rounded-full bg-yellow-400 flex items-center justify-center shadow-inner border-2 border-red-600">
                               <Target size={32} className="text-red-600 opacity-50"/>
                           </div>
                       </div>
                   </div>
               </div>

               {/* Side Bow Visual - Right side, Rotated */}
               <div className="absolute right-0 bottom-10 z-20 transform -rotate-[60deg] opacity-80 pointer-events-none">
                   <span className="text-8xl filter drop-shadow-lg">🏹</span>
               </div>

               {/* Arrow Animation */}
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

               {/* Replay Sound Button */}
               <button 
                  onClick={() => speakText(targetSentence.map(c => c.char).join(''))}
                  className="absolute bottom-0 left-4 p-3 bg-white rounded-full shadow-lg text-indigo-600 hover:scale-110 transition-transform"
               >
                   <Volume2 size={24} />
               </button>
           </div>
       </div>

       {/* Floating Options Area */}
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
         .perspective-container {
             perspective: 800px;
         }
         .target-tilted {
             transform: rotateY(-25deg);
             box-shadow: -10px 10px 20px rgba(0,0,0,0.2);
         }
         @keyframes arrow-hit {
             0% { transform: translate(100%, 100%) scale(0.5); opacity: 0; }
             50% { opacity: 1; }
             100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0; }
         }
         .animate-arrow-hit {
             animation: arrow-hit 0.6s ease-out forwards;
         }
         @keyframes float {
             0%, 100% { transform: translateY(0); }
             50% { transform: translateY(-5px); }
         }
         .animate-float {
             animation: float 3s ease-in-out infinite;
         }
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
