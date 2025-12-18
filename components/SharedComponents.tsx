
import React, { useEffect, useRef, useState } from 'react';
import { PenTool, Grid, BookOpen, BarChart3, User } from 'lucide-react';
import { getSettings } from '../services/storage';
import { ViewState } from '../types';

// Global variable to keep track of current audio to stop overlap
let currentAudio: HTMLAudioElement | null = null;

// Helper to speak individual characters
export const speakText = async (text: string, onEnd?: () => void, lang: string = 'zh-CN') => {
  const settings = getSettings();
  
  // 1. Stop any currently playing custom audio
  if (currentAudio) {
      currentAudio.pause();
      currentAudio = null;
  }
  // Cancel browser synthesis if supported
  if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
  }

  // 2. Check for Custom TTS
  if (settings.activeTTSProfileId && settings.activeTTSProfileId !== 'SYSTEM' && settings.customTTSProfiles) {
      const profile = settings.customTTSProfiles.find(p => p.id === settings.activeTTSProfileId);
      if (profile && profile.apiUrl) {
          try {
              // Common: Prepare Headers
              const headers: HeadersInit = {};
              if (profile.apiKey) {
                  headers['Authorization'] = `Bearer ${profile.apiKey}`;
              }

              // Determine URL and Method
              let baseUrl = profile.apiUrl.trim();
              if (!baseUrl.startsWith('http')) {
                  baseUrl = 'https://' + baseUrl;
              }
              // Don't strip trailing slash aggressively here, trust what was saved in test

              // Calculate Effective Rate & Pitch
              // App Global Rate * Profile specific rate
              const globalRate = settings.ttsRate || 1.0;
              const profileSpeed = profile.speed || 1.0;
              const finalSpeed = globalRate * profileSpeed;
              
              const profilePitch = profile.pitch || 1.0;

              // -- POST METHOD (OpenAI Compatible) --
              if (profile.method === 'POST') {
                   // If URL is full path, use it. Otherwise append standard path.
                   let finalUrl = baseUrl;
                   if (!finalUrl.endsWith('/speech')) {
                       // Try to guess if it needs a suffix. If it ends in /v1/audio, append /speech.
                       if (finalUrl.endsWith('/v1/audio')) finalUrl += '/speech';
                       // If it's just a base domain, maybe try the standard OpenAI path?
                       // But usually user enters full URL. Let's assume user entered full URL if they chose POST during test.
                       // Or fallback to standard if looks like base.
                   }

                   headers['Content-Type'] = 'application/json';
                   const body = JSON.stringify({
                       model: 'tts-1',
                       input: text,
                       voice: profile.voiceId || 'zh-CN-XiaoxiaoNeural',
                       speed: finalSpeed, // OpenAI standard speed (0.25 - 4.0)
                       pitch: profilePitch, // Note: Not standard OpenAI, but sending just in case custom backend supports it
                       response_format: 'mp3'
                   });

                   const res = await fetch(finalUrl, {
                       method: 'POST',
                       headers,
                       body
                   });

                   if (!res.ok) throw new Error(`TTS API Error: ${res.status}`);
                   
                   const blob = await res.blob();
                   const audioUrl = URL.createObjectURL(blob);
                   const audio = new Audio(audioUrl);
                   
                   currentAudio = audio;
                   audio.play().catch(e => console.warn("Audio play error", e));
                   audio.onended = () => {
                       currentAudio = null;
                       URL.revokeObjectURL(audioUrl);
                       if (onEnd) onEnd();
                   };
                   return;
              }

              // -- GET METHOD (Standard Edge-TTS Wrapper) --
              const urlObj = new URL(baseUrl);
              urlObj.searchParams.set('text', text);
              
              if (profile.voiceId) {
                  urlObj.searchParams.set('voice', profile.voiceId);
              }
              
              // Calculate Rate parameter for Edge-TTS style APIs
              const ratePercent = Math.round((finalSpeed - 1) * 100);
              const rateStr = (ratePercent >= 0 ? '+' : '') + ratePercent + '%';
              urlObj.searchParams.set('rate', rateStr);

              // Calculate Pitch parameter
              const pitchDiff = Math.round((profilePitch - 1) * 20);
              const pitchStr = (pitchDiff >= 0 ? '+' : '') + pitchDiff + 'Hz';
              urlObj.searchParams.set('pitch', pitchStr);
              
              const res = await fetch(urlObj.toString(), { headers });
              if (!res.ok) throw new Error(`TTS API Error: ${res.status}`);
              
              const blob = await res.blob();
              const audioUrl = URL.createObjectURL(blob);
              const audio = new Audio(audioUrl);
              
              currentAudio = audio;
              
              const playPromise = audio.play();
              if (playPromise !== undefined) {
                  playPromise.catch(e => {
                      console.warn("Audio play blocked or failed:", e);
                  });
              }
              
              audio.onended = () => {
                  currentAudio = null;
                  URL.revokeObjectURL(audioUrl);
                  if (onEnd) onEnd();
              };
              
              return; // Exit, handled by Custom TTS
          } catch (e) {
              console.warn("Custom TTS Failed, falling back to System", e);
              // Fallthrough to system
          }
      }
  }

  // 3. System Fallback
  if (typeof window !== 'undefined' && window.speechSynthesis) {
      try {
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = lang;
          utterance.rate = settings.ttsRate || 1.0;
          
          if (lang === 'zh-CN' && settings.ttsVoice && settings.activeTTSProfileId === 'SYSTEM') {
            const voices = window.speechSynthesis.getVoices();
            const selectedVoice = voices.find(v => v.voiceURI === settings.ttsVoice);
            if (selectedVoice) {
              utterance.voice = selectedVoice;
            }
          }
    
          if (onEnd) {
              utterance.onend = onEnd;
          }
          
          window.speechSynthesis.speak(utterance);
      } catch(e) {
          console.error("System TTS failed:", e);
      }
  } else {
      console.warn("Speech Synthesis not supported in this browser.");
  }
};

// --- Writing Grid (Pinyin 4-lines + Hanzi Tianzi Ge) ---
interface WritingGridProps {
  char: string;
  pinyin: string;
  isTarget?: boolean;
  onClick?: () => void;
  variant?: 'card' | 'notebook'; 
  className?: string; // Add className prop for external sizing
  noGapBorder?: boolean; // New prop for gapless grid mode (like StoryView)
}

export const WritingGrid: React.FC<WritingGridProps> = ({ char, pinyin, isTarget = false, onClick, variant = 'card', className = '', noGapBorder = false }) => {
  // Use local click handler if provided, otherwise default to speaking the char
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (char && onClick) {
      onClick();
    } else if (char) {
      speakText(char);
    }
  };

  // Check if character is punctuation (no pinyin usually)
  const isPunctuation = !pinyin && char.length === 1 && !char.match(/[\u4e00-\u9fa5a-zA-Z0-9]/);
  const isEmpty = !char; // For indentation

  // --- CARD STYLE (Rounded, Shadow, Spaced) ---
  if (variant === 'card') {
    return (
      <div className={`flex flex-col items-center cursor-pointer group ${className}`} onClick={handleClick}>
        {/* Pinyin Grid (4 lines) */}
        <div className={`relative w-10 h-8 sm:w-14 sm:h-10 mb-0.5 flex items-center justify-center ${isPunctuation ? 'opacity-0' : 'opacity-100'}`}>
           <div className="absolute inset-x-0 top-[20%] border-t border-red-300/40"></div>
           <div className="absolute inset-x-0 top-[40%] border-t border-red-300/40"></div>
           <div className="absolute inset-x-0 top-[60%] border-t border-red-400/60"></div> {/* Baseline */}
           <div className="absolute inset-x-0 top-[80%] border-t border-red-300/40"></div>
           <span className={`relative z-10 text-sm sm:text-base font-medium font-sans -mt-1 ${isTarget ? 'text-blue-600 font-bold' : 'text-gray-600'}`}>{pinyin}</span>
        </div>
        
        {/* Hanzi Tianzi Ge */}
        <div className={`relative w-10 h-10 sm:w-14 sm:h-14 bg-white border border-red-400 flex items-center justify-center shadow-sm transition-transform group-hover:scale-105 ${isTarget ? 'ring-2 ring-blue-300 ring-offset-1' : ''}`}>
          {/* Diagonals */}
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
          <span className={`relative z-10 font-kaiti text-xl sm:text-2xl leading-none ${isTarget ? 'text-blue-600' : 'text-gray-800'}`}>{char}</span>
        </div>
      </div>
    );
  }

  // --- NOTEBOOK STYLE (Square, Continuous Border or Gapless) ---
  // In noGapBorder mode, we use border-right and border-bottom on cells,
  // and expect the parent container to provide border-top and border-left.
  
  const outerBorderClass = noGapBorder 
    ? "border-r border-b border-red-300" 
    : "border border-red-300 -ml-[1px] -mt-[1px]";

  const pinyinBorderClass = noGapBorder 
    ? "border-b border-red-300"
    : "border-b border-red-300";

  return (
    <div 
      className={`flex flex-col items-center group relative box-border ${isEmpty ? '' : 'cursor-pointer hover:bg-red-50/30'} ${outerBorderClass} ${className}`} 
      onClick={!isEmpty ? handleClick : undefined}
    >
        {/* Pinyin Area (4 lines) */}
        {/* Responsive height: maintain aspect ratio suitable for 4 lines. If cell is very narrow (mobile 9 cols), height is small. */}
        <div className={`relative w-full aspect-[2.5/1] sm:aspect-[3/1] box-border ${pinyinBorderClass}`}>
           {/* Inner lines - Solid/Dashed mix for 4-line grid */}
           <div className="absolute inset-x-0 top-[25%] border-t border-red-300/50 border-dashed"></div>
           <div className="absolute inset-x-0 top-[50%] border-t border-red-300/80"></div> {/* Middle line slightly darker */}
           <div className="absolute inset-x-0 top-[75%] border-t border-red-300/50 border-dashed"></div>
           
           {!isEmpty && !isPunctuation && (
             <span className={`absolute inset-0 flex items-center justify-center font-medium font-sans pt-[2px] text-gray-700 leading-none text-[10px] sm:text-sm md:text-base`}>
                {pinyin}
             </span>
           )}
        </div>

        {/* Hanzi Area (Mi Zi Ge - Dashed) */}
        <div className="relative w-full aspect-square box-border bg-white">
           {/* SVG Lines for "Mi" character (Dashed) */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
               {/* Diagonals - Dashed */}
               <line x1="0" y1="0" x2="100" y2="100" stroke="#fca5a5" strokeWidth="1" strokeDasharray="4,2" />
               <line x1="100" y1="0" x2="0" y2="100" stroke="#fca5a5" strokeWidth="1" strokeDasharray="4,2" />
               {/* Cross - Dashed (Vertical and Horizontal centers) */}
               <line x1="50" y1="0" x2="50" y2="100" stroke="#fca5a5" strokeWidth="1" strokeDasharray="4,2" />
               <line x1="0" y1="50" x2="100" y2="50" stroke="#fca5a5" strokeWidth="1" strokeDasharray="4,2" />
           </svg>
          
          {!isEmpty && (
             <span className={`relative z-10 flex items-center justify-center w-full h-full font-kaiti leading-none text-gray-800 text-lg sm:text-2xl md:text-4xl`}>
               {char}
             </span>
          )}
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
        });
        
        setTimeout(() => setIsLoaded(true), 500);

        startAnimationLoop();
      } catch (e) {
        console.error("HanziWriter error", e);
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
             <span className="font-kaiti text-8xl sm:text-9xl text-gray-300 opacity-50">{char}</span>
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
        { id: 'TAB_STORY', label: '阅读', icon: BookOpen },
        { id: 'TAB_STATS', label: '统计', icon: BarChart3 },
        { id: 'TAB_PROFILE', label: '我的', icon: User },
    ];

    return (
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl z-50">
            <div className="bg-white/95 backdrop-blur-sm border-t border-gray-100 px-6 py-2 pb-5 flex justify-between items-center shadow-[0_-5px_15px_rgba(0,0,0,0.02)] rounded-t-[2rem]">
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
        </div>
    );
};
