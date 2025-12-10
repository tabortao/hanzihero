
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Volume2, Sparkles, BookOpen, Star, RefreshCw, Layers, Check, X, Puzzle, GraduationCap, CheckCircle, XCircle } from 'lucide-react';
import { GameConfig, AIExplanation, Character } from '../types';
import { explainCharacter } from '../services/geminiService';
import { addUnknownCharacter, addKnownCharacter, addStars, getSettings, recordLearning, isCharacterKnown, getUnknownCharacters } from '../services/storage';
import { WritingGrid, StrokeOrderDisplay, speakText } from './SharedComponents';
import confetti from 'canvas-confetti';

interface GameViewProps {
  config: GameConfig;
  onExit: (newStars: number) => void;
}

const PRAISE_WORDS = ["Amazing", "Excellent", "Great", "Good Job", "Wonderful", "Super", "Awesome", "Well done", "Fantastic", "Brilliant"];

export const GameView: React.FC<GameViewProps> = ({ config, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewState, setViewState] = useState<'INITIAL' | 'LEARNING'>('INITIAL');
  const [score, setScore] = useState(0);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiExplanation, setAiExplanation] = useState<AIExplanation | null>(null);
  
  // Modal State for clicking sub-characters
  const [modalChar, setModalChar] = useState<Character | null>(null);
  
  // Track characters learned in this session to record stats at end
  const [sessionLearned, setSessionLearned] = useState<Set<string>>(new Set());

  const currentCharacter = config.characters[currentIndex];

  useEffect(() => {
    // Reset state for new character
    setViewState('INITIAL');
    setAiExplanation(null);
  }, [currentIndex]);

  // Auto-Speak Memory Tip when Loaded
  useEffect(() => {
    if (viewState === 'LEARNING' && aiExplanation && aiExplanation.memoryTip) {
       // Small delay to ensure UI renders first and previous speech clears
       const timer = setTimeout(() => {
         speakText(aiExplanation.memoryTip);
       }, 500);
       return () => clearTimeout(timer);
    }
  }, [aiExplanation, viewState]);

  const markLearned = () => {
    setSessionLearned(prev => new Set(prev).add(currentCharacter.char));
  }

  // User clicked "I Know It"
  const handleKnown = () => {
    addKnownCharacter(currentCharacter);
    markLearned();
    setScore(prev => prev + 1); // 1 point per character
    
    // 1. Speak the character
    speakText(currentCharacter.char);
    
    // 2. Speak random English praise (queued after char)
    const randomPraise = PRAISE_WORDS[Math.floor(Math.random() * PRAISE_WORDS.length)];
    speakText(randomPraise, undefined, 'en-US');

    nextChar();
  };

  // User clicked "I Don't Know"
  const handleUnknown = async () => {
    // Add to unknown immediately (will update later with AI info if needed)
    addUnknownCharacter(currentCharacter);
    markLearned();
    setViewState('LEARNING');
    speakText(currentCharacter.char); // Speak char immediately
    
    // Auto-load AI content (will default to local if available)
    loadExplanation(false);
  };

  const loadExplanation = async (forceAI: boolean) => {
    setAiLoading(true);
    setAiExplanation(null);
    try {
        const data = await explainCharacter(currentCharacter.char, forceAI);
        setAiExplanation(data);
        
        // --- Critical Update: Save Pinyin if it was missing ---
        if (!currentCharacter.pinyin && data.pinyin) {
            // Update current character in config (local state) so UI updates
            currentCharacter.pinyin = data.pinyin;
            // Update in storage as "Unknown" with the new pinyin info
            addUnknownCharacter({ ...currentCharacter, pinyin: data.pinyin });
        }
    } catch (e) {
        console.error(e);
    } finally {
        setAiLoading(false);
    }
  };

  const handleForceRefresh = () => {
      loadExplanation(true);
  };

  const triggerCelebration = () => {
    const duration = 2000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  const handleFinish = () => {
    // Trigger celebration
    triggerCelebration();

    // Record stats
    const charsLearned = config.characters.filter(c => sessionLearned.has(c.char));
    recordLearning(charsLearned);

    // Save points
    const totalStars = addStars(score);

    // Delay exit slightly to show celebration
    setTimeout(() => {
        onExit(totalStars);
    }, 2000);
  };

  const nextChar = () => {
    if (currentIndex < config.characters.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      handleFinish();
    }
  };

  // --- Modal Logic ---
  const handleCharClick = (char: string, pinyin: string) => {
      setModalChar({ char, pinyin });
  };

  const handleModalAction = (action: 'READ' | 'STUDY' | 'KNOWN' | 'UNKNOWN') => {
    if (!modalChar) return;
    
    switch (action) {
      case 'READ':
        speakText(modalChar.char);
        break;
      case 'STUDY':
        // In Game context, we can't easily jump to study another char without losing state.
        // We will just speak it and maybe provide a tip.
        speakText(`学习: ${modalChar.char}`);
        break;
      case 'KNOWN':
        addKnownCharacter(modalChar);
        speakText('认识');
        setModalChar(null);
        break;
      case 'UNKNOWN':
        addUnknownCharacter(modalChar);
        speakText('不认识');
        setModalChar(null);
        break;
    }
  };

  const getCharStatus = (charStr: string): 'KNOWN' | 'UNKNOWN' | 'NONE' => {
      if (isCharacterKnown(charStr)) return 'KNOWN';
      const unknownList = getUnknownCharacters();
      if (unknownList.some(c => c.char === charStr)) return 'UNKNOWN';
      return 'NONE';
  };


  const progress = ((currentIndex + 1) / config.characters.length) * 100;

  // Use pinyin from char or from AI if loaded
  const displayPinyin = currentCharacter.pinyin || aiExplanation?.pinyin || '';

  return (
    <div className="max-w-7xl mx-auto p-4 min-h-screen flex flex-col bg-[#ecfdf5] pb-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={() => onExit(addStars(score))} // Exit with current score added if manual
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
        {/* Points Display */}
        <div className="bg-white px-3 py-1 rounded-full shadow-sm flex items-center gap-1 font-bold text-yellow-600 border border-yellow-100">
             <Star size={16} fill="currentColor" /> {score}
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col items-center w-full max-w-2xl mx-auto">
        
        {/* Character Card */}
        <div className="bg-white rounded-[2.5rem] shadow-xl w-full p-6 sm:p-8 text-center border-4 border-green-100 relative mb-6">
          
          {viewState === 'LEARNING' && (
              <div className="mb-4 text-center">
                  <h2 className="text-4xl font-bold text-gray-800 flex items-center justify-center gap-2">
                  {displayPinyin}
                  <button onClick={() => speakText(currentCharacter.char)} className="p-1 bg-gray-100 rounded-full text-gray-500 hover:text-blue-500">
                    <Volume2 size={20} />
                  </button>
                  {/* Regenerate AI Button */}
                  <button 
                    onClick={handleForceRefresh} 
                    className={`p-2 bg-indigo-50 rounded-full text-indigo-400 hover:text-indigo-600 hover:bg-indigo-100 transition-colors ml-2 ${aiLoading ? 'animate-spin' : ''}`}
                    title="AI 重新分析"
                  >
                    <Sparkles size={20} />
                  </button>
                </h2>
              </div>
          )}

          {/* Composition Decomposition (New) */}
          {viewState === 'LEARNING' && aiExplanation?.compositionParts && aiExplanation.compositionParts.length > 0 && (
             <div className="flex flex-col items-center justify-center mb-6 bg-blue-50 p-3 rounded-2xl border border-blue-100 border-dashed">
                <div className="text-xs text-blue-500 font-bold mb-2 flex items-center gap-1">
                    <Puzzle size={12} /> 字形结构拆解
                </div>
                <div className="flex items-center gap-4">
                    {aiExplanation.compositionParts.map((part, idx) => (
                        <React.Fragment key={idx}>
                             {/* Plus sign between parts */}
                             {idx > 0 && <span className="text-blue-300 font-bold text-xl">+</span>}
                             <WritingGrid char={part.char} pinyin={part.pinyin} onClick={() => handleCharClick(part.char, part.pinyin)} />
                        </React.Fragment>
                    ))}
                </div>
             </div>
          )}

          <div className="flex justify-center mb-4">
             {/* If learning, show stroke order, else show static for initial guess */}
             {viewState === 'LEARNING' ? (
                <StrokeOrderDisplay key={currentCharacter.char} char={currentCharacter.char} />
             ) : (
                <div 
                  className="w-40 h-40 sm:w-56 sm:h-56 bg-red-50 rounded-3xl flex items-center justify-center border-2 border-red-100 cursor-pointer hover:border-red-200 transition-colors relative"
                  onClick={() => speakText(currentCharacter.char)}
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
              <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto">
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
                    {/* Fallback composition text if visual parts aren't there */}
                    {(!aiExplanation.compositionParts || aiExplanation.compositionParts.length === 0) && (
                        <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-white px-3 py-1 rounded-lg text-indigo-700 font-medium shadow-sm border border-indigo-100">
                                {aiExplanation.composition}
                            </span>
                        </div>
                    )}
                    <div className="bg-white p-3 rounded-lg text-gray-700 leading-relaxed relative">
                       <p>{aiExplanation.memoryTip}</p>
                       <button 
                         onClick={() => speakText(aiExplanation.memoryTip)}
                         className="absolute top-2 right-2 text-indigo-300 hover:text-indigo-600"
                       >
                         <Volume2 size={16} />
                       </button>
                    </div>
                  </div>

                  {/* Vocabulary */}
                  <div className="space-y-3">
                    <h3 className="font-bold text-gray-700 flex items-center gap-2">
                      <BookOpen size={18} className="text-green-600" /> 组词
                    </h3>
                    
                    <div className="flex flex-wrap gap-4">
                      {aiExplanation.words?.map((w, i) => {
                        const chars = w.word.split('');
                        const pinyins = w.pinyin.split(' ');
                        
                        return (
                           <div key={i} className="bg-white p-2 rounded-xl border border-green-100 shadow-sm flex gap-1">
                              {chars.map((c, idx) => (
                                <WritingGrid 
                                  key={idx} 
                                  char={c} 
                                  pinyin={pinyins[idx] || ''} 
                                  isTarget={c === currentCharacter.char} // Highlight if match
                                  onClick={() => handleCharClick(c, pinyins[idx] || '')}
                                />
                              ))}
                           </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Sentence */}
                  <div className="space-y-3">
                     <h3 className="font-bold text-gray-700 flex items-center gap-2">
                        <Sparkles size={18} className="text-purple-600" /> 造句
                     </h3>
                     <div 
                        className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm flex flex-wrap gap-2 relative group"
                     >
                        {aiExplanation.sentenceData?.map((item, idx) => (
                           <WritingGrid 
                              key={idx} 
                              char={item.char} 
                              pinyin={item.pinyin} 
                              isTarget={item.char === currentCharacter.char} // Highlight if match
                              onClick={() => handleCharClick(item.char, item.pinyin)}
                           />
                        ))}

                        <button 
                           onClick={() => {
                              const sentence = aiExplanation.sentenceData.map(d => d.char).join('');
                              speakText(sentence);
                           }}
                           className="absolute right-2 bottom-2 text-purple-300 hover:text-purple-600 transition-colors bg-white/80 rounded-full p-1"
                        >
                           <Volume2 size={20} />
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

      {/* --- Action Modal (Copied from CharacterBankView but adapted) --- */}
      {modalChar && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setModalChar(null)}>
              <div 
                className="bg-white w-full max-w-sm rounded-3xl shadow-2xl p-6 relative animate-bounce-in"
                onClick={e => e.stopPropagation()}
              >
                  <button 
                    onClick={() => setModalChar(null)}
                    className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200"
                  >
                      <X size={20} />
                  </button>

                  <div className="flex flex-col items-center mb-8 pt-4">
                      <div className="text-xl font-bold text-gray-500 mb-2">{modalChar.pinyin}</div>
                      <div className="w-32 h-32 bg-gray-50 rounded-2xl border-2 border-gray-200 flex items-center justify-center mb-4 relative">
                          <div className="absolute inset-0 pointer-events-none opacity-20" style={{
                              backgroundImage: `linear-gradient(to right, transparent 49%, #f87171 50%, transparent 51%), linear-gradient(to bottom, transparent 49%, #f87171 50%, transparent 51%), linear-gradient(45deg, transparent 49%, #f87171 50%, transparent 51%), linear-gradient(-45deg, transparent 49%, #f87171 50%, transparent 51%)`,
                              backgroundSize: '100% 100%'
                          }}></div>
                          <span className="font-fun text-7xl text-gray-800 relative z-10">{modalChar.char}</span>
                      </div>
                      
                      <div className="flex gap-2">
                        {getCharStatus(modalChar.char) === 'KNOWN' && <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"><CheckCircle size={12}/> 已认识</span>}
                        {getCharStatus(modalChar.char) === 'UNKNOWN' && <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"><XCircle size={12}/> 生字本</span>}
                      </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                      <button 
                        onClick={() => handleModalAction('READ')}
                        className="flex flex-col items-center justify-center p-4 bg-blue-50 text-blue-600 rounded-2xl hover:bg-blue-100 transition-colors gap-2"
                      >
                          <Volume2 size={24} />
                          <span className="font-bold text-sm">朗读</span>
                      </button>
                      
                      <button 
                        onClick={() => handleModalAction('STUDY')}
                        className="flex flex-col items-center justify-center p-4 bg-indigo-50 text-indigo-600 rounded-2xl hover:bg-indigo-100 transition-colors gap-2"
                      >
                          <GraduationCap size={24} />
                          <span className="font-bold text-sm">学习</span>
                      </button>

                      <button 
                        onClick={() => handleModalAction('KNOWN')}
                        className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-colors gap-2 border-2 ${
                            getCharStatus(modalChar.char) === 'KNOWN' ? 'bg-green-100 border-green-300 text-green-700' : 'bg-white border-green-100 text-green-600 hover:bg-green-50'
                        }`}
                      >
                          <Check size={24} />
                          <span className="font-bold text-sm">认识</span>
                      </button>

                      <button 
                        onClick={() => handleModalAction('UNKNOWN')}
                        className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-colors gap-2 border-2 ${
                            getCharStatus(modalChar.char) === 'UNKNOWN' ? 'bg-orange-100 border-orange-300 text-orange-700' : 'bg-white border-orange-100 text-orange-600 hover:bg-orange-50'
                        }`}
                      >
                          <X size={24} />
                          <span className="font-bold text-sm">不认识</span>
                      </button>
                  </div>
              </div>
          </div>
      )}

    </div>
  );
};
