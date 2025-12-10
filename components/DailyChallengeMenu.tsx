
import React from 'react';
import { ArrowLeft, Book, Volume2, Eye, LayoutGrid, Play, Star } from 'lucide-react';
import { Character } from '../types';

interface DailyChallengeMenuProps {
  onBack: () => void;
  onSelectMode: (mode: 'CARD' | 'LISTEN' | 'LOOK' | 'CRUSH') => void;
  characterCount: number;
}

export const DailyChallengeMenu: React.FC<DailyChallengeMenuProps> = ({ onBack, onSelectMode, characterCount }) => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen bg-[#ecfdf5] p-4 md:p-8 flex flex-col relative overflow-hidden">
       {/* Decorative Background Elements */}
       <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
       <div className="absolute top-0 left-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
       <div className="absolute -bottom-32 left-20 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="flex items-center gap-4 mb-8 relative z-10">
        <button 
          onClick={onBack}
          className="p-3 bg-white rounded-full shadow-sm hover:bg-white/80 text-gray-600 transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <div>
          <h1 className="text-2xl md:text-3xl font-fun text-gray-800 flex items-center gap-2">
            每日挑战 <span className="text-3xl">🏆</span>
          </h1>
          <p className="text-gray-600 text-sm font-bold mt-1">
            今日任务：<span className="text-indigo-600 text-lg">{characterCount}</span> 个汉字 (3-1-3 复习)
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 content-start relative z-10">
        {/* Mode 1: Flashcards (Classic) */}
        <button 
          onClick={() => onSelectMode('CARD')}
          className="bg-white p-6 rounded-[2rem] shadow-lg border-4 border-indigo-50 hover:border-indigo-200 hover:shadow-xl hover:-translate-y-1 transition-all group text-left relative overflow-hidden h-64 flex flex-col justify-between"
        >
           {/* Mask/Overlay */}
           <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-50/30 to-indigo-100/50 opacity-0 group-hover:opacity-100 transition-opacity z-0" />
           
           <div className="absolute right-[-10px] bottom-[-10px] text-[10rem] group-hover:scale-110 transition-transform duration-500 opacity-20 group-hover:opacity-40 rotate-12 select-none pointer-events-none z-0">
               🎴
           </div>

           <div className="relative z-10">
              <div className="flex justify-between items-start">
                  <div className="p-4 bg-indigo-100 w-16 h-16 rounded-2xl text-indigo-600 mb-4 flex items-center justify-center shadow-sm">
                    <Book size={32} />
                  </div>
                  <div className="bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      Classic
                  </div>
              </div>
              <h3 className="text-2xl font-fun text-gray-800 group-hover:text-indigo-700 transition-colors">智趣翻卡屋</h3>
              <p className="text-sm text-gray-500 font-medium mt-2 max-w-[70%]">
                经典翻卡模式，看字识音，AI 老师辅助讲解。
              </p>
           </div>
           
           <div className="relative z-10 mt-auto flex items-center gap-2 text-indigo-600 font-bold opacity-60 group-hover:opacity-100 transition-opacity">
               <span>进入房间</span> <ArrowLeft size={16} className="rotate-180" />
           </div>
        </button>

        {/* Mode 2: Listen & Identify (New) */}
        <button 
          onClick={() => onSelectMode('LISTEN')}
          className="bg-white p-6 rounded-[2rem] shadow-lg border-4 border-purple-50 hover:border-purple-200 hover:shadow-xl hover:-translate-y-1 transition-all group text-left relative overflow-hidden h-64 flex flex-col justify-between"
        >
           {/* Mask/Overlay */}
           <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity z-0" />
           
           <div className="absolute right-[-20px] bottom-[-20px] text-purple-100 group-hover:text-purple-200 transition-colors transform -rotate-12 group-hover:scale-110 duration-500 opacity-20 group-hover:opacity-40 pointer-events-none z-0">
               <span className="text-[10rem]">🏹</span>
           </div>

           <div className="relative z-10">
              <div className="flex justify-between items-start">
                 <div className="p-4 bg-purple-100 w-16 h-16 rounded-2xl text-purple-600 mb-4 flex items-center justify-center shadow-sm">
                   <Volume2 size={32} />
                </div>
                <div className="bg-purple-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                      <Star size={10} fill="currentColor"/> Hot
                 </div>
              </div>
              <h3 className="text-2xl font-fun text-gray-800 group-hover:text-purple-700 transition-colors">星箭追击</h3>
              <p className="text-sm text-gray-500 font-medium mt-2 max-w-[70%]">
                听音辨字，拉弓射箭！挑战你的听辨反应速度。
              </p>
           </div>

           <div className="relative z-10 mt-auto flex items-center gap-2 text-purple-600 font-bold opacity-60 group-hover:opacity-100 transition-opacity">
               <span>开始追击</span> <Play size={16} fill="currentColor" />
           </div>
        </button>

        {/* Mode 3: Look & Identify */}
        <button 
          onClick={() => onSelectMode('LOOK')}
          className="bg-white p-6 rounded-[2rem] shadow-lg border-4 border-orange-50 hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all group text-left relative overflow-hidden h-64 flex flex-col justify-between"
        >
           {/* Mask/Overlay */}
           <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50/30 to-orange-100/50 opacity-0 group-hover:opacity-100 transition-opacity z-0" />

           <div className="absolute right-[-20px] bottom-[-20px] text-orange-100 group-hover:text-orange-200 transition-colors transform rotate-12 group-hover:scale-110 duration-500 opacity-20 group-hover:opacity-40 pointer-events-none z-0">
               <span className="text-[10rem]">🔫</span>
           </div>

           <div className="relative z-10">
              <div className="flex justify-between items-start">
                 <div className="p-4 bg-orange-100 w-16 h-16 rounded-2xl text-orange-600 mb-4 flex items-center justify-center shadow-sm">
                   <Eye size={32} />
                </div>
                 <div className="bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                      <Star size={10} fill="currentColor"/> New
                 </div>
              </div>
              <h3 className="text-2xl font-fun text-gray-800 group-hover:text-orange-700 transition-colors">超能靶场</h3>
              <p className="text-sm text-gray-500 font-medium mt-2 max-w-[70%]">看拼音，化身神枪手！瞄准射击正确的汉字。</p>
          </div>

          <div className="relative z-10 mt-auto flex items-center gap-2 text-orange-600 font-bold opacity-60 group-hover:opacity-100 transition-opacity">
               <span>进入靶场</span> <Play size={16} fill="currentColor" />
           </div>
        </button>

        {/* Mode 4: Match 3 - Hanzi Crush */}
        <button 
          onClick={() => onSelectMode('CRUSH')}
          className="bg-stone-50 p-6 rounded-[2rem] shadow-lg border-4 border-stone-200 hover:border-green-300 hover:shadow-xl hover:-translate-y-1 transition-all group text-left relative overflow-hidden h-64 flex flex-col justify-between"
        >
           {/* Mask/Overlay - Ink Effect */}
           <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-stone-100 to-green-50 opacity-50 z-0" />
           {/* Hover Gradient Overlay */}
           <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50/30 to-green-100/50 opacity-0 group-hover:opacity-100 transition-opacity z-0" />

           <div className="absolute right-[-10px] bottom-[-10px] text-green-100 group-hover:text-green-200 transition-colors transform rotate-6 group-hover:scale-110 duration-500 opacity-20 group-hover:opacity-40 pointer-events-none z-0">
               <span className="text-[10rem]">🧩</span>
           </div>

           <div className="relative z-10">
              <div className="flex justify-between items-start">
                 <div className="p-4 bg-green-100 w-16 h-16 rounded-2xl text-green-700 mb-4 flex items-center justify-center shadow-sm relative">
                   <LayoutGrid size={32} />
                </div>
                <div className="bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                    AI 关卡
                </div>
              </div>
              <h3 className="text-2xl font-fun text-gray-800 group-hover:text-green-800 transition-colors font-bold">汉字消消乐</h3>
              <p className="text-sm text-gray-500 font-medium mt-2 max-w-[80%] font-serif">
                马卡龙风拼字游戏，AI 出题，拼音汉字对对碰。
              </p>
           </div>
           
           <div className="relative z-10 mt-auto flex items-center gap-2 text-green-700 font-bold opacity-60 group-hover:opacity-100 transition-opacity">
               <span>开始闯关</span> <Play size={16} fill="currentColor" />
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
