import React, { useEffect, useRef, useState } from 'react';
import { PenTool, Grid, BookOpen, BarChart3, User } from 'lucide-react';
import { getSettings } from '../services/storage';
import { ViewState } from '../types';

// Helper to speak individual characters
export const speakText = (text: string) => {
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

// --- Writing Grid (Pinyin 4-lines + Hanzi Tianzi Ge) ---
interface WritingGridProps {
  char: string;
  pinyin: string;
  isTarget?: boolean;
  onClick?: () => void;
}

export const WritingGrid: React.FC<WritingGridProps> = ({ char, pinyin, isTarget = false, onClick }) => {
  // Use local click handler if provided, otherwise default to speaking the char
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onClick) {
      onClick();
    } else {
      speakText(char);
    }
  };

  // Check if character is punctuation (no pinyin usually)
  const isPunctuation = !pinyin && char.length === 1 && !char.match(/[\u4e00-\u9fa5]/);

  if (isPunctuation) {
      return <span className="text-4xl self-end mb-4 font-fun text-gray-400">{char}</span>;
  }

  return (
    <div className="flex flex-col items-center cursor-pointer group" onClick={handleClick}>
      {/* Pinyin Grid (4 lines) */}
      <div className="relative w-10 h-8 sm:w-14 sm:h-10 mb-0.5 flex items-center justify-center">
         <div className="absolute inset-x-0 top-[20%] border-t border-red-300/40"></div>
         <div className="absolute inset-x-0 top-[40%] border-t border-red-300/40"></div>
         <div className="absolute inset-x-0 top-[60%] border-t border-red-400/60"></div> {/* Baseline */}
         <div className="absolute inset-x-0 top-[80%] border-t border-red-300/40"></div>
         <span className={`relative z-10 text-sm sm:text-base font-medium font-sans -mt-1 ${isTarget ? 'text-blue-600 font-bold' : 'text-gray-600'}`}>{pinyin}</span>
      </div>
      
      {/* Hanzi Tianzi Ge (田字格) */}
      <div className={`relative w-10 h-10 sm:w-14 sm:h-14 bg-white border border-red-400 flex items-center justify-center shadow-sm transition-transform group-hover:scale-105 ${isTarget ? 'ring-2 ring-blue-300 ring-offset-1' : ''}`}>
        {/* Diagonals and Cross lines for Tianzi Ge */}
        <div className="absolute inset-0" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, transparent 49%, #fca5a5 50%, transparent 51%), 
              linear-gradient(to bottom, transparent 49%, #fca5a5 50%, transparent 51%),
              linear-gradient(45deg, transparent 49%, #fca5a5 50%, transparent 51%),
              linear-gradient(-45deg, transparent 49%, #fca5a5 50%, transparent 51%)
            `,
            backgroundSize: '100% 100%' 
          }}
        ></div>
        
        <span className={`relative z-10 font-fun text-xl sm:text-2xl leading-none ${isTarget ? 'text-blue-600' : 'text-gray-800'}`}>{char}</span>
      </div>
    </div>
  );
};

// --- Stroke Order Component ---
declare const HanziWriter: any;

export const StrokeOrderDisplay: React.FC<{ char: string }> = ({ char }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const writerRef = useRef<any>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  // Track if SVG is successfully loaded to hide fallback
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false); // Reset on char change
    if (containerRef.current && typeof HanziWriter !== 'undefined') {
      containerRef.current.innerHTML = ''; // Clear previous
      
      const size = containerRef.current.clientWidth;

      try {
        writerRef.current = HanziWriter.create(containerRef.current, char, {
          width: size, 
          height: size,
          padding: 5,
          showOutline: true,
          strokeAnimationSpeed: 1, 
          delayBetweenStrokes: 200, 
          strokeColor: '#333333',
          radicalColor: '#166534', 
          showCharacter: true,
          showHintAfterMisses: 1,
          // Hook into loading process roughly if possible or rely on existence
        });
        
        // HanziWriter doesn't have a direct 'onLoad' in create options in all versions, 
        // but we can assume if we start animation it's ready. 
        // However, let's set isLoaded to true after a short timeout to ensure the svg is inserted, 
        // or check writerRef.current
        setTimeout(() => setIsLoaded(true), 500);

        startAnimationLoop();
      } catch (e) {
        console.error("HanziWriter error", e);
        // If error, we still want fallback visible
        setIsLoaded(false);
      }
    }
    return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }
  }, [char]);

  const startAnimationLoop = () => {
      if (!writerRef.current) return;
      
      writerRef.current.animateCharacter({
          onComplete: () => {
              // Loop after 1.5 seconds
              timeoutRef.current = setTimeout(() => {
                  startAnimationLoop();
              }, 1500);
          }
      });
  };

  const replay = () => {
    if(writerRef.current) {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        startAnimationLoop();
    }
  };

  return (
    <div className="relative w-40 h-40 sm:w-56 sm:h-56 mx-auto cursor-pointer group" onClick={replay}>
      <div ref={containerRef} className="w-full h-full bg-white rounded-md border-2 border-red-300 overflow-hidden shadow-inner relative z-10" />
      
      {/* Fallback Static Character (Visible if Writer fails or is loading) */}
      {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
             <span className="font-fun text-8xl sm:text-9xl text-gray-300 opacity-50">{char}</span>
          </div>
      )}

      {/* TianZiGe Overlay (Dashed/Dotted lines) */}
      <div className="absolute inset-0 pointer-events-none z-20" style={{
         backgroundImage: `
            linear-gradient(to right, transparent 49%, #fca5a5 50%, transparent 51%), 
            linear-gradient(to bottom, transparent 49%, #fca5a5 50%, transparent 51%),
            linear-gradient(45deg, transparent 49%, #FECACA 50%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, #FECACA 50%, transparent 51%)
         `,
         backgroundSize: '100% 100%'
      }}></div>

      <button className="absolute bottom-2 right-2 p-2 bg-white/80 rounded-full text-gray-500 hover:text-blue-600 shadow-sm z-30 opacity-0 group-hover:opacity-100 transition-opacity">
        <PenTool size={16} />
      </button>
    </div>
  );
};

// --- Bottom Navigation ---

interface BottomNavProps {
    currentTab: ViewState;
    onChange: (tab: ViewState) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onChange }) => {
    const navItems = [
        { id: 'TAB_HOME', label: '识字', icon: Grid },
        { id: 'TAB_STORY', label: '短文', icon: BookOpen },
        { id: 'TAB_STATS', label: '统计', icon: BarChart3 },
        { id: 'TAB_PROFILE', label: '我的', icon: User },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-100 px-6 py-2 pb-5 flex justify-between items-center z-50 shadow-[0_-5px_15px_rgba(0,0,0,0.02)]">
            {navItems.map(item => {
                const isActive = currentTab === item.id;
                const Icon = item.icon;
                return (
                    <button
                        key={item.id}
                        onClick={() => onChange(item.id as ViewState)}
                        className={`flex flex-col items-center gap-1 p-2 transition-all duration-300 ${isActive ? 'text-indigo-600 scale-110' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                        <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                        <span className={`text-[10px] font-bold ${isActive ? 'opacity-100' : 'opacity-70'}`}>{item.label}</span>
                    </button>
                )
            })}
        </div>
    );
};