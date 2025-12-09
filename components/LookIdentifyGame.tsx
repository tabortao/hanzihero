
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ArrowLeft, Star, Volume2 } from 'lucide-react';
import { Character, CharPair } from '../types';
import { getOfflineDict, findCharacterPinyin } from '../data/dictionary';
import { speakText, WritingGrid } from './SharedComponents';
import { addStars, addUnknownCharacter } from '../services/storage';
import confetti from 'canvas-confetti';

interface LookIdentifyGameProps {
  characters: Character[];
  onExit: () => void;
}

export const LookIdentifyGame: React.FC<LookIdentifyGameProps> = ({ characters, onExit }) => {
  const [currentRound, setCurrentRound] = useState(0);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<'PLAYING' | 'FINISHED'>('PLAYING');
  
  const [targetSentence, setTargetSentence] = useState<CharPair[]>([]);
  const [correctIndices, setCorrectIndices] = useState<number[]>([]); 
  const [shuffledOptions, setShuffledOptions] = useState<CharPair[]>([]);
  const [isWrongAnim, setIsWrongAnim] = useState(false);
  const [showGunAnim, setShowGunAnim] = useState<'HIT' | 'MISS' | null>(null);

  const TOTAL_ROUNDS = 10;
  const wrongCharsRef = useRef<Set<string>>(new Set());

  const rounds = useMemo(() => {
     const pool = [...characters];
     const generatedRounds: CharPair[][] = [];
     const dict = getOfflineDict();

     const findSentenceForChar = (char: string): CharPair[] | null => {
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
      setShowGunAnim(null);
      
      const options = [...sentence].map((c, idx) => ({ ...c, originalIdx: idx })); 
      options.sort(() => 0.5 - Math.random());
      setShuffledOptions(options);
  };

  const handleOptionClick = (charPair: CharPair, optionIdx: number) => {
      if (showGunAnim) return; 

      const nextTargetIndex = correctIndices.length;
      const targetChar = targetSentence[nextTargetIndex];

      if (charPair.char === targetChar.char) {
          // Correct
          setCorrectIndices(prev => [...prev, nextTargetIndex]);
          
          const newOptions = [...shuffledOptions];
          newOptions.splice(optionIdx, 1);
          setShuffledOptions(newOptions);

          setShowGunAnim('HIT');
          setScore(prev => prev + Math.ceil(100 / (TOTAL_ROUNDS * targetSentence.length)) * 2);

          setTimeout(() => {
              setShowGunAnim(null);
              speakText(targetChar.char); 
              
              if (nextTargetIndex + 1 === targetSentence.length) {
                   setTimeout(() => {
                       setCurrentRound(r => {
                           const next = r + 1;
                           startRound(next);
                           return next;
                       });
                   }, 1000);
              }
          }, 400); 

      } else {
          // Wrong
          setIsWrongAnim(true);
          setShowGunAnim('MISS');
          wrongCharsRef.current.add(targetChar.char);

          setTimeout(() => {
              setIsWrongAnim(false);
              setShowGunAnim(null);
          }, 400);
      }
  };

  const finishGame = () => {
      setGameState('FINISHED');
      const finalScore = Math.min(100, score);
      const starsEarned = finalScore >= 90 ? 3 : finalScore >= 60 ? 2 : 1;
      addStars(starsEarned);
      
      wrongCharsRef.current.forEach(char => {
          const fullChar = characters.find(c => c.char === char) || { char, pinyin: findCharacterPinyin(char) };
          addUnknownCharacter(fullChar);
      });

      confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
      });
  };

  if (gameState === 'FINISHED') {
      return (
          <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 p-4 max-w-7xl mx-auto">
              <div className="bg-white rounded-3xl p-8 shadow-xl text-center max-w-sm w-full animate-bounce-in border-4 border-orange-100">
                  <div className="mb-4 text-6xl">🔫</div>
                  <h2 className="text-3xl font-bold text-orange-900 mb-2">狙击任务完成!</h2>
                  <div className="text-6xl font-fun text-yellow-400 mb-4 flex justify-center gap-2">
                      {[1, 2, 3].map(i => (
                          <Star key={i} fill={score >= (i === 1 ? 1 : i === 2 ? 60 : 90) ? "currentColor" : "none"} className={score >= (i === 1 ? 1 : i === 2 ? 60 : 90) ? "text-yellow-400" : "text-gray-200"} />
                      ))}
                  </div>
                  <p className="text-2xl font-bold text-orange-600 mb-6">得分: {Math.min(100, score)}</p>
                  
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

                  <button onClick={onExit} className="w-full py-3 bg-orange-600 text-white rounded-xl font-bold shadow-lg hover:bg-orange-700 transition-all">
                      返回菜单
                  </button>
              </div>
          </div>
      );
  }

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col relative overflow-hidden max-w-7xl mx-auto font-sans">
       {/* Header */}
       <div className="flex justify-between items-center p-4">
           <div className="flex items-center gap-2">
               <button onClick={onExit} className="p-2 bg-white/50 rounded-full hover:bg-white text-orange-800">
                   <ArrowLeft />
               </button>
               <span className="font-bold text-orange-900 text-lg">🔫 手枪射击</span>
           </div>
           
           <div className="flex gap-2">
               <div className="bg-white/50 px-3 py-1 rounded-full text-orange-800 font-bold text-sm">
                  任务 {currentRound + 1} / {TOTAL_ROUNDS}
               </div>
               <div className="bg-white/50 px-3 py-1 rounded-full text-orange-800 font-bold text-sm flex items-center gap-1">
                  <Star size={14} className="text-yellow-500 fill-yellow-500"/> {score}
               </div>
           </div>
       </div>

       {/* Pinyin Display Area */}
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

           {/* Sniper Target Area */}
           <div className="relative w-full max-w-md flex-1 flex items-center justify-center mb-8 perspective-container">
               <div className={`relative transition-transform duration-100 ${showGunAnim === 'HIT' ? 'scale-105' : ''} target-tilted`}>
                   
                   {/* Multi-Ring Target (CSS) */}
                   <div className="relative w-56 h-56 rounded-full border-4 border-gray-800 bg-white shadow-2xl flex items-center justify-center">
                       {/* Rings */}
                       <div className="absolute w-[90%] h-[90%] rounded-full border-[15px] border-black/10"></div>
                       <div className="absolute w-[70%] h-[70%] rounded-full border-[15px] border-black/20"></div>
                       <div className="absolute w-[50%] h-[50%] rounded-full border-[15px] border-black/30"></div>
                       <div className="absolute w-[30%] h-[30%] rounded-full border-[15px] border-black/40"></div>
                       {/* Bullseye */}
                       <div className="w-6 h-6 bg-red-600 rounded-full z-10 shadow-[0_0_10px_red]"></div>
                       
                       {/* Gun Image (Emoji) Side View */}
                       <div className="absolute right-[-80px] bottom-[-20px] opacity-90 pointer-events-none transform -rotate-12 scale-x-[-1]">
                           <span className="text-9xl">🔫</span>
                       </div>
                   </div>

                    {/* Muzzle Flash Animation */}
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
           
           <div className="flex justify-center mb-2">
                <button 
                  onClick={() => speakText(targetSentence.map(c => c.char).join(''))}
                  className="p-3 bg-white/80 rounded-full shadow-sm text-orange-500 hover:text-orange-700"
                >
                    <Volume2 size={24} />
                </button>
           </div>
       </div>

       {/* Floating Options Area (Bubble Pool) */}
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
         .perspective-container {
             perspective: 800px;
         }
         .target-tilted {
             transform: rotateY(20deg);
             box-shadow: 10px 10px 20px rgba(0,0,0,0.2);
         }
         @keyframes bounce-in {
            0% { transform: scale(0.3); opacity: 0; }
            50% { transform: scale(1.1); }
            70% { transform: scale(0.9); }
            100% { transform: scale(1); opacity: 1; }
         }
         .animate-bounce-in {
            animation: bounce-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
         }
         @keyframes float-random {
             0%, 100% { transform: translateY(0); }
             50% { transform: translateY(-8px); }
         }
         .animate-float-random {
             animation: float-random 4s ease-in-out infinite;
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
