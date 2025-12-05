import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Volume2, Sparkles, BookOpen, Star, RefreshCw, Layers, Check, X, PenTool } from 'lucide-react';
import { GameConfig, AIExplanation } from '../types';
import { explainCharacter } from '../services/geminiService';
import { addUnknownCharacter, addKnownCharacter, addStars, getSettings, recordLearning } from '../services/storage';

// Declare HanziWriter types (loaded from CDN)
declare const HanziWriter: any;

interface GameViewProps {
  config: GameConfig;
  onExit: (newStars: number) => void;
}

const StrokeOrderDisplay = ({ char }: { char: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const writerRef = useRef<any>(null);

  useEffect(() => {
    if (containerRef.current && typeof HanziWriter !== 'undefined') {
      containerRef.current.innerHTML = ''; // Clear previous
      
      try {
        writerRef.current = HanziWriter.create(containerRef.current, char, {
          width: 200, // Matches the container size roughly
          height: 200,
          padding: 5,
          showOutline: true,
          strokeAnimationSpeed: 1, // 1x speed
          delayBetweenStrokes: 200, // ms
          strokeColor: '#333333',
          radicalColor: '#166534', // Green-700
        });
        
        // Auto animate once loaded
        writerRef.current.animateCharacter();
      } catch (e) {
        console.error("HanziWriter error", e);
        // Fallback or ignore
      }
    }
    
    return () => {
       // Cleanup if needed? HanziWriter doesn't have a destroy method easily accessible, 
       // but clearing innerHTML handles the DOM.
    }
  }, [char]);

  const replay = () => {
    if(writerRef.current) {
        writerRef.current.animateCharacter();
    }
  };

  return (
    <div className="relative w-40 h-40 sm:w-56 sm:h-56 mx-auto cursor-pointer" onClick={replay}>
      <div ref={containerRef} className="w-full h-full bg-red-50 rounded-3xl border-2 border-red-100" />
      <div className="absolute inset-0 border-dashed border-red-200 pointer-events-none rounded-3xl" style={{
        backgroundImage: 'linear-gradient(to right, transparent 49%, #fca5a5 50%, transparent 51%), linear-gradient(to bottom, transparent 49%, #fca5a5 50%, transparent 51%)',
        backgroundSize: '100% 100%'
      }}></div>
      <div className="absolute inset-0 border-2 border-red-200 m-2 pointer-events-none rounded-2xl"></div>
      
      <button className="absolute bottom-2 right-2 p-2 bg-white/80 rounded-full text-gray-600 hover:text-green-600 shadow-sm z-10" title="Replay Strokes">
        <PenTool size={16} />
      </button>
    </div>
  );
};

export const GameView: React.FC<GameViewProps> = ({ config, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewState, setViewState] = useState<'INITIAL' | 'LEARNING'>('INITIAL');
  const [score, setScore] = useState(0);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiExplanation, setAiExplanation] = useState<AIExplanation | null>(null);
  
  // Track characters learned in this session to record stats at end
  const [sessionLearned, setSessionLearned] = useState<Set<string>>(new Set());

  const currentCharacter = config.characters[currentIndex];

  useEffect(() => {
    // Reset state for new character
    setViewState('INITIAL');
    setAiExplanation(null);
  }, [currentIndex]);

  const speak = (text: string) => {
    const settings = getSettings();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = settings.ttsRate;
    
    if (settings.ttsVoice) {
      const voices = window.speechSynthesis.getVoices();
      const selectedVoice = voices.find(v => v.voiceURI === settings.ttsVoice);
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
    }
    
    window.speechSynthesis.speak(utterance);
  };

  const markLearned = () => {
    setSessionLearned(prev => new Set(prev).add(currentCharacter.char));
  }

  // User clicked "I Know It"
  const handleKnown = () => {
    addKnownCharacter(currentCharacter);
    markLearned();
    setScore(prev => prev + 10);
    speak("真棒！");
    nextChar();
  };

  // User clicked "I Don't Know"
  const handleUnknown = async () => {
    addUnknownCharacter(currentCharacter);
    markLearned();
    setViewState('LEARNING');
    speak(currentCharacter.char);
    
    // Auto-load AI content
    setAiLoading(true);
    const data = await explainCharacter(currentCharacter.char);
    setAiExplanation(data);
    setAiLoading(false);
  };

  const handleFinish = () => {
    // Record stats
    const charsLearned = config.characters.filter(c => sessionLearned.has(c.char));
    recordLearning(charsLearned);

    const earnedStars = Math.floor(score / 10); 
    const totalStars = addStars(earnedStars);
    onExit(totalStars);
  };

  const nextChar = () => {
    if (currentIndex < config.characters.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      handleFinish();
    }
  };

  const progress = ((currentIndex + 1) / config.characters.length) * 100;

  return (
    <div className="max-w-2xl mx-auto p-4 min-h-screen flex flex-col bg-[#ecfdf5]">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={handleFinish} 
          className="p-2 rounded-full hover:bg-gray-200 text-gray-600 transition-colors"
        >
          <ArrowLeft />
        </button>
        <div className="flex-1 mx-4">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>{config.title}</span>
            <span>{currentIndex + 1} / {config.characters.length}</span>
          </div>
          <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-green-500 h-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <div className="flex items-center gap-1 font-bold text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full border border-yellow-300">
           <Star size={16} fill="currentColor" /> {score}
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col items-center w-full max-w-lg mx-auto">
        
        {/* Character Card */}
        <div className="bg-white rounded-[2.5rem] shadow-xl w-full p-8 text-center border-4 border-green-100 relative mb-6">
          <div className="flex justify-center mb-4">
             {/* If learning, show stroke order, else show static for initial guess */}
             {viewState === 'LEARNING' ? (
                <StrokeOrderDisplay char={currentCharacter.char} />
             ) : (
                <div 
                  className="w-40 h-40 sm:w-56 sm:h-56 bg-red-50 rounded-3xl flex items-center justify-center border-2 border-red-100 cursor-pointer hover:border-red-200 transition-colors relative"
                  onClick={() => speak(currentCharacter.char)}
                >
                  {/* Grid lines */}
                  <div className="absolute inset-0 border-dashed border-red-200 pointer-events-none" style={{
                    backgroundImage: 'linear-gradient(to right, transparent 49%, #fca5a5 50%, transparent 51%), linear-gradient(to bottom, transparent 49%, #fca5a5 50%, transparent 51%)',
                    backgroundSize: '100% 100%'
                  }}></div>
                  <div className="absolute inset-0 border-2 border-red-200 m-2 pointer-events-none"></div>
                  
                  <span className="font-fun text-8xl sm:text-9xl text-gray-800 relative z-10">
                    {currentCharacter.char}
                  </span>
                  <button className="absolute bottom-2 right-2 p-2 bg-white/80 rounded-full text-gray-600 hover:text-green-600 shadow-sm">
                    <Volume2 size={24} />
                  </button>
                </div>
             )}
          </div>

          {/* INITIAL STATE: ASK USER */}
          {viewState === 'INITIAL' && (
            <div className="py-8 animate-fade-in">
              <p className="text-xl text-gray-600 font-bold mb-8">这个字你认识吗？</p>
              <div className="grid grid-cols-2 gap-6">
                <button
                  onClick={handleUnknown}
                  className="py-4 bg-orange-100 hover:bg-orange-200 text-orange-700 font-bold rounded-2xl border-b-4 border-orange-300 active:border-b-0 active:translate-y-1 transition-all flex flex-col items-center justify-center gap-2"
                >
                  <X className="w-8 h-8" />
                  <span>不认识</span>
                </button>
                <button
                  onClick={handleKnown}
                  className="py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-2xl border-b-4 border-green-700 active:border-b-0 active:translate-y-1 transition-all flex flex-col items-center justify-center gap-2 shadow-lg shadow-green-200"
                >
                  <Check className="w-8 h-8" />
                  <span>认识</span>
                </button>
              </div>
            </div>
          )}

          {/* LEARNING STATE: SHOW DETAILS */}
          {viewState === 'LEARNING' && (
            <div className="animate-fade-in text-left space-y-6">
              {/* Pinyin & Definition */}
              <div className="text-center border-b border-gray-100 pb-4">
                <h2 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
                  {currentCharacter.pinyin}
                  <button onClick={() => speak(currentCharacter.char)} className="p-1 bg-gray-100 rounded-full text-gray-500 hover:text-blue-500">
                    <Volume2 size={20} />
                  </button>
                </h2>
                <p className="text-gray-500">{currentCharacter.definition}</p>
              </div>

              {/* AI Content */}
              {aiLoading ? (
                <div className="flex flex-col items-center py-8 space-y-3 text-indigo-400">
                  <RefreshCw className="animate-spin" size={32} />
                  <p className="text-sm">AI 老师正在分析字形...</p>
                </div>
              ) : aiExplanation ? (
                <div className="space-y-4">
                  {/* Structure & Mnemonic */}
                  <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100">
                    <div className="flex items-center gap-2 mb-2">
                       <Layers size={18} className="text-indigo-600" />
                       <span className="font-bold text-indigo-800">字形结构: {aiExplanation.structure}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                       <span className="bg-white px-3 py-1 rounded-lg text-indigo-700 font-medium shadow-sm border border-indigo-100">
                         {aiExplanation.composition}
                       </span>
                    </div>
                    <div className="bg-white p-3 rounded-lg text-gray-700 leading-relaxed relative">
                       <p>{aiExplanation.memoryTip}</p>
                       <button 
                         onClick={() => speak(aiExplanation.memoryTip)}
                         className="absolute top-2 right-2 text-indigo-300 hover:text-indigo-600"
                       >
                         <Volume2 size={16} />
                       </button>
                    </div>
                  </div>

                  {/* Vocabulary & Sentence */}
                  <div className="space-y-3">
                    <h3 className="font-bold text-gray-700 flex items-center gap-2">
                      <BookOpen size={18} className="text-green-600" /> 组词造句
                    </h3>
                    
                    <div className="flex flex-wrap gap-3">
                      {aiExplanation.words?.map((w, i) => (
                        <div key={i} className="bg-white px-3 py-2 rounded-xl border border-green-100 shadow-sm flex flex-col items-center min-w-[80px]">
                           <span className="text-xs text-gray-400 mb-1">{w.pinyin}</span>
                           <span className="font-medium text-gray-800">
                             {w.word.split('').map((char, idx) => (
                               <span key={idx} className={char === currentCharacter.char ? 'text-green-600 font-bold' : ''}>{char}</span>
                             ))}
                           </span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-green-100 shadow-sm relative group cursor-pointer" onClick={() => speak(aiExplanation.sentence)}>
                       <p className="text-sm text-gray-400 mb-1 text-center">{aiExplanation.sentencePinyin}</p>
                       <p className="text-lg text-center font-medium text-gray-800">
                         {aiExplanation.sentence.split('').map((char, idx) => (
                           <span key={idx} className={char === currentCharacter.char ? 'text-green-600 font-bold text-xl' : ''}>{char}</span>
                         ))}
                       </p>
                       <button className="absolute right-2 bottom-2 text-green-300 group-hover:text-green-600 transition-colors">
                         <Volume2 size={18} />
                       </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-red-400 py-4">无法获取AI讲解</div>
              )}
              
              <button
                onClick={nextChar}
                className="w-full py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg transition-all"
              >
                学习下一个
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
