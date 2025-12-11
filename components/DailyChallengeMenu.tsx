
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Book, Volume2, Eye, LayoutGrid, Play, Star } from 'lucide-react';
import { Character } from '../types';
import { getStars } from '../services/storage';

interface DailyChallengeMenuProps {
  onBack: () => void;
  onSelectMode: (mode: 'CARD' | 'LISTEN' | 'LOOK' | 'CRUSH') => void;
  characterCount: number;
}

export const DailyChallengeMenu: React.FC<DailyChallengeMenuProps> = ({ onBack, onSelectMode, characterCount }) => {
  const [totalStars, setTotalStars] = useState(0);

  useEffect(() => {
    setTotalStars(getStars());
  }, []);

  return (
    <div className="max-w-7xl mx-auto min-h-screen bg-[#ecfdf5] p-4 md:p-6 flex flex-col relative overflow-hidden">
       {/* Decorative Background Elements */}
       <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
       <div className="absolute top-0 left-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
       <div className="absolute -bottom-32 left-20 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center gap-3">
            <button 
              onClick={onBack}
              className="p-2 bg-white rounded-full shadow-sm hover:bg-white/80 text-gray-600 transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl md:text-2xl font-fun text-gray-800 flex items-center gap-2">
                每日挑战 <span className="text-2xl">🏆</span>
              </h1>
              <p className="text-gray-600 text-xs font-bold mt-0.5">
                今日任务：<span className="text-indigo-600 text-base">{characterCount}</span> 个汉字
              </p>
            </div>
        </div>
        
        {/* Total Score Display */}
        <div className="bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-sm border border-white">
            <Star size={20} className="text-yellow-400 fill-yellow-400" />
            <span className="text-lg font-bold text-yellow-600">{totalStars}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 content-start relative z-10 pb-20">
        {/* Mode 1: Flashcards (Classic) */}
        <button 
          onClick={() => onSelectMode('CARD')}
          className="bg-white p-5 rounded-[1.5rem] shadow-md border-2 border-indigo-50 hover:border-indigo-200 hover:shadow-lg hover:-translate-y-1 transition-all group text-left relative overflow-hidden h-40 flex flex-col justify-between"
        >
           {/* Mask/Overlay */}
           <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-50/30 to-indigo-100/50 opacity-0 group-hover:opacity-100 transition-opacity z-0" />
           <div className="absolute right-[-10px] bottom-[-20px] text-[6rem] group-hover:scale-110 transition-transform duration-500 opacity-10 group-hover:opacity-30 rotate-12 select-none pointer-events-none z-0">🎴</div>

           <div className="relative z-10 flex justify-between w-full">
              <div>
                  <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600"><Book size={20} /></div>
                      <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Classic</span>
                  </div>
                  <h3 className="text-lg font-fun text-gray-800 font-bold group-hover:text-indigo-700 transition-colors">智趣翻卡屋</h3>
                  <p className="text-xs text-gray-400 font-medium mt-1 line-clamp-2">经典翻卡，AI 辅助讲解。</p>
              </div>
           </div>
           
           <div className="relative z-10 mt-auto flex items-center gap-1 text-indigo-600 text-xs font-bold opacity-60 group-hover:opacity-100 transition-opacity self-end">
               <span>GO</span> <ArrowLeft size={14} className="rotate-180" />
           </div>
        </button>

        {/* Mode 2: Listen & Identify */}
        <button 
          onClick={() => onSelectMode('LISTEN')}
          className="bg-white p-5 rounded-[1.5rem] shadow-md border-2 border-purple-50 hover:border-purple-200 hover:shadow-lg hover:-translate-y-1 transition-all group text-left relative overflow-hidden h-40 flex flex-col justify-between"
        >
           <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity z-0" />
           <div className="absolute right-[-10px] bottom-[-20px] text-[6rem] group-hover:scale-110 transition-transform duration-500 opacity-10 group-hover:opacity-30 -rotate-12 select-none pointer-events-none z-0">🏹</div>

           <div className="relative z-10 flex justify-between w-full">
              <div>
                  <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 bg-purple-100 rounded-lg text-purple-600"><Volume2 size={20} /></div>
                      <span className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1">HOT</span>
                  </div>
                  <h3 className="text-lg font-fun text-gray-800 font-bold group-hover:text-purple-700 transition-colors">星箭追击</h3>
                  <p className="text-xs text-gray-400 font-medium mt-1 line-clamp-2">听音辨字，拉弓射箭！</p>
              </div>
           </div>

           <div className="relative z-10 mt-auto flex items-center gap-1 text-purple-600 text-xs font-bold opacity-60 group-hover:opacity-100 transition-opacity self-end">
               <span>GO</span> <Play size={14} fill="currentColor" />
           </div>
        </button>

        {/* Mode 3: Look & Identify */}
        <button 
          onClick={() => onSelectMode('LOOK')}
          className="bg-white p-5 rounded-[1.5rem] shadow-md border-2 border-orange-50 hover:border-orange-200 hover:shadow-lg hover:-translate-y-1 transition-all group text-left relative overflow-hidden h-40 flex flex-col justify-between"
        >
           <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50/30 to-orange-100/50 opacity-0 group-hover:opacity-100 transition-opacity z-0" />
           <div className="absolute right-[-10px] bottom-[-20px] text-[6rem] group-hover:scale-110 transition-transform duration-500 opacity-10 group-hover:opacity-30 rotate-12 select-none pointer-events-none z-0">🔫</div>

           <div className="relative z-10 flex justify-between w-full">
              <div>
                  <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 bg-orange-100 rounded-lg text-orange-600"><Eye size={20} /></div>
                      <span className="text-xs font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1">NEW</span>
                  </div>
                  <h3 className="text-lg font-fun text-gray-800 font-bold group-hover:text-orange-700 transition-colors">超能靶场</h3>
                  <p className="text-xs text-gray-400 font-medium mt-1 line-clamp-2">看拼音，化身神枪手！</p>
              </div>
          </div>

          <div className="relative z-10 mt-auto flex items-center gap-1 text-orange-600 text-xs font-bold opacity-60 group-hover:opacity-100 transition-opacity self-end">
               <span>GO</span> <Play size={14} fill="currentColor" />
           </div>
        </button>

        {/* Mode 4: Match 3 - Hanzi Crush */}
        <button 
          onClick={() => onSelectMode('CRUSH')}
          className="bg-stone-50 p-5 rounded-[1.5rem] shadow-md border-2 border-stone-200 hover:border-green-300 hover:shadow-lg hover:-translate-y-1 transition-all group text-left relative overflow-hidden h-40 flex flex-col justify-between"
        >
           <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50/30 to-green-100/50 opacity-0 group-hover:opacity-100 transition-opacity z-0" />
           <div className="absolute right-[-10px] bottom-[-20px] text-[6rem] group-hover:scale-110 transition-transform duration-500 opacity-10 group-hover:opacity-30 rotate-6 select-none pointer-events-none z-0">🧩</div>

           <div className="relative z-10 flex justify-between w-full">
              <div>
                 <div className="flex items-center gap-2 mb-2">
                     <div className="p-2 bg-green-100 rounded-lg text-green-700"><LayoutGrid size={20} /></div>
                     <span className="text-xs font-bold text-green-500 uppercase tracking-wider">AI</span>
                 </div>
                 <h3 className="text-lg font-fun text-gray-800 font-bold group-hover:text-green-800 transition-colors">汉字消消乐</h3>
                 <p className="text-xs text-gray-500 font-medium mt-1 line-clamp-2">拼音汉字对对碰。</p>
              </div>
           </div>
           
           <div className="relative z-10 mt-auto flex items-center gap-1 text-green-700 text-xs font-bold opacity-60 group-hover:opacity-100 transition-opacity self-end">
               <span>GO</span> <Play size={14} fill="currentColor" />
           </div>
        </button>
      </div>
      
      {/* Styles for blobs */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-bounce-slow {
             animation: bounce 3s infinite;
        }
      `}</style>
    </div>
  );
};
