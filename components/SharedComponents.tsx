import React, { useEffect, useRef } from 'react';
import { PenTool } from 'lucide-react';
import { getSettings } from '../services/storage';

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
        
        {/* Dotted lines mask (simulated by using dashed border on inner div if needed, but CSS gradient above handles standard lines. 
            For dotted specific Tianzi Ge often used in schools, simplified cross lines are often enough. 
            Let's stick to standard solid center lines + diagonals which is common for calligraphy structure) 
        */}
        
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

  useEffect(() => {
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
          showHintAfterMisses: 1
        });
        
        writerRef.current.animateCharacter();
      } catch (e) {
        console.error("HanziWriter error", e);
      }
    }
  }, [char]);

  const replay = () => {
    if(writerRef.current) {
        writerRef.current.animateCharacter();
    }
  };

  return (
    <div className="relative w-40 h-40 sm:w-56 sm:h-56 mx-auto cursor-pointer group" onClick={replay}>
      <div ref={containerRef} className="w-full h-full bg-white rounded-md border-2 border-red-300 overflow-hidden shadow-inner" />
      
      {/* TianZiGe Overlay (Dashed/Dotted lines) */}
      <div className="absolute inset-0 pointer-events-none" style={{
         backgroundImage: `
            linear-gradient(to right, transparent 49%, #fca5a5 50%, transparent 51%), 
            linear-gradient(to bottom, transparent 49%, #fca5a5 50%, transparent 51%),
            linear-gradient(45deg, transparent 49%, #FECACA 50%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, #FECACA 50%, transparent 51%)
         `,
         backgroundSize: '100% 100%'
      }}></div>

      <button className="absolute bottom-2 right-2 p-2 bg-white/80 rounded-full text-gray-500 hover:text-blue-600 shadow-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <PenTool size={16} />
      </button>
    </div>
  );
};
