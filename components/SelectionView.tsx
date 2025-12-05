import React, { useState, useEffect } from 'react';
import { Book, GraduationCap, Grid, Star, PlayCircle, Settings, Library, Trophy, Flame } from 'lucide-react';
import { GameConfig, Character } from '../types';
import { APP_DATA } from '../data';
import { SettingsModal } from './SettingsModal';
import { getSettings, getUnknownCharacters, getDailyActivity } from '../services/storage';

interface SelectionViewProps {
  onStartGame: (config: GameConfig) => void;
  onReview: () => void;
  onOpenBank: () => void;
  stars: number;
}

// Simple Heatmap Component
const LearningHeatmap = () => {
  const activity = getDailyActivity();
  const days = 14; // Show last 2 weeks
  const today = new Date();
  const dates = Array.from({ length: days }, (_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() - (days - 1 - i));
    return d.toISOString().split('T')[0];
  });

  return (
    <div className="bg-white p-4 rounded-3xl shadow-md border border-gray-100">
      <div className="flex items-center gap-2 mb-3 text-gray-700 font-bold text-sm">
        <Flame className="text-orange-500" size={18} /> 学习热力图
      </div>
      <div className="flex justify-between items-end gap-1 sm:gap-2">
        {dates.map(date => {
          const count = activity[date] || 0;
          let colorClass = 'bg-gray-100';
          let heightClass = 'h-3';
          if (count > 0) {
            colorClass = 'bg-green-200';
            heightClass = 'h-4';
          }
          if (count > 5) {
            colorClass = 'bg-green-400';
             heightClass = 'h-6';
          }
          if (count > 15) {
            colorClass = 'bg-green-600';
             heightClass = 'h-8';
          }

          const isToday = date === today.toISOString().split('T')[0];

          return (
            <div key={date} className="flex flex-col items-center gap-1 w-full">
              <div 
                className={`w-full rounded-md transition-all ${colorClass} ${heightClass} ${isToday ? 'ring-2 ring-orange-300 ring-offset-1' : ''}`} 
                title={`${date}: ${count} characters`}
              />
              <span className="text-[10px] text-gray-400 font-mono hidden sm:block">
                 {date.slice(5).replace('-','/')}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const SelectionView: React.FC<SelectionViewProps> = ({ onStartGame, onReview, onOpenBank, stars }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const settings = getSettings();
  
  // Resolve current configuration
  const currentCurriculum = APP_DATA.find(c => c.id === settings.selectedCurriculumId);
  const currentGrade = currentCurriculum?.grades.find(g => g.id === settings.selectedGradeId);

  // Check if setup is needed
  const needsSetup = !currentCurriculum || !currentGrade;

  const handleStart = (unitId: string, unitName: string, chars: Character[]) => {
    onStartGame({
      mode: 'UNIT',
      title: unitName,
      curriculumId: settings.selectedCurriculumId,
      gradeId: settings.selectedGradeId,
      unitId: unitId,
      characters: chars
    });
  };

  const startDailyChallenge = () => {
    // 1. Get unknown characters (Review Priority)
    const unknownChars = getUnknownCharacters();
    // Shuffle and take up to 5
    const reviewSet = unknownChars.sort(() => 0.5 - Math.random()).slice(0, 5);
    
    // 2. Get random new characters to fill up to 10
    let allChars: Character[] = [];
    if (currentCurriculum) {
       currentCurriculum.grades.forEach(g => g.units.forEach(u => {
         allChars = [...allChars, ...u.characters];
       }));
    } else {
        // Fallback to all data if no curriculum selected
         APP_DATA.forEach(c => c.grades.forEach(g => g.units.forEach(u => {
           allChars = [...allChars, ...u.characters];
         })));
    }

    // Filter out chars already in reviewSet to avoid duplicates
    const existingChars = new Set(reviewSet.map(c => c.char));
    const pool = allChars.filter(c => !existingChars.has(c.char));
    const newSet = pool.sort(() => 0.5 - Math.random()).slice(0, 10 - reviewSet.length);

    // Combine
    const challengeChars = [...reviewSet, ...newSet];

    onStartGame({
      mode: 'CHALLENGE',
      title: '📅 每日挑战',
      curriculumId: 'daily',
      gradeId: 'daily',
      unitId: 'daily',
      characters: challengeChars
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6 animate-fade-in relative pb-20">
      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />

      {/* Header */}
      <div className="flex justify-between items-center bg-white p-6 rounded-[2rem] shadow-xl border-b-8 border-blue-100">
        <div className="flex items-center space-x-4">
          <div className="bg-yellow-400 p-3 rounded-2xl shadow-inner text-white hidden sm:block">
            <div className="text-3xl">🐼</div>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-fun text-gray-800">汉字小英雄</h1>
            <p className="text-gray-400 text-xs sm:text-sm font-bold mt-1">
              {currentCurriculum ? `${currentCurriculum.name} · ${currentGrade?.name}` : '请先选择教材'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
           <div className="flex items-center space-x-1 sm:space-x-2 bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-200">
            <Star className="text-yellow-500 fill-yellow-500 w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-bold text-yellow-700 text-sm sm:text-lg">{stars}</span>
          </div>
          <button 
            onClick={() => setIsSettingsOpen(true)}
            className="p-3 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-500 transition-colors"
          >
            <Settings size={20} />
          </button>
        </div>
      </div>

      {/* Heatmap */}
      <LearningHeatmap />

      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Left: Main Content (Units) */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 px-2">
            <Grid className="w-6 h-6 text-blue-500" /> 
            学习单元
          </h2>
          
          {needsSetup ? (
            <div className="bg-white p-8 rounded-3xl text-center border-2 border-dashed border-gray-300">
              <Book size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-bold text-gray-600 mb-2">还没有选择教材哦</h3>
              <p className="text-gray-400 text-sm mb-6">去设置里选择你正在学习的课本吧</p>
              <button 
                onClick={() => setIsSettingsOpen(true)}
                className="px-6 py-3 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-600 transition-colors"
              >
                去设置教材
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentGrade?.units.map((unit, index) => (
                <button
                  key={unit.id}
                  onClick={() => handleStart(unit.id, unit.name, unit.characters)}
                  className="group relative bg-white p-5 rounded-3xl shadow-sm hover:shadow-md border-2 border-transparent hover:border-blue-200 transition-all text-left overflow-hidden"
                >
                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <span className="text-6xl font-fun text-blue-500">{index + 1}</span>
                   </div>
                   <div className="relative z-10">
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1 block">Unit {index + 1}</span>
                      <h3 className="text-lg font-bold text-gray-800 mb-2 truncate">{unit.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                         <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">{unit.characters.length} 个生字</span>
                      </div>
                      <div className="mt-4 flex items-center text-blue-500 font-bold text-sm group-hover:translate-x-1 transition-transform">
                         开始学习 <PlayCircle size={16} className="ml-1" />
                      </div>
                   </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Actions */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 px-2">
            <Trophy className="w-6 h-6 text-yellow-500" /> 
            挑战与复习
          </h2>

          {/* Daily Challenge */}
          <button 
            onClick={startDailyChallenge}
            className="w-full bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-3xl shadow-lg border-b-4 border-blue-800 hover:scale-[1.02] active:scale-95 transition-all text-left group relative overflow-hidden"
          >
             <div className="absolute right-[-20px] top-[-20px] bg-white/10 w-32 h-32 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
             
             <div className="bg-white/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
               <Trophy size={24} className="text-white" />
             </div>
             <h3 className="text-xl font-bold mb-1">每日挑战</h3>
             <p className="text-blue-100 text-xs">
               Review + New
               <br/>
               复习生字，巩固新知
             </p>
          </button>

          {/* Review */}
          <button
            onClick={onReview}
            className="w-full bg-white p-5 rounded-3xl shadow-md border-2 border-orange-100 hover:border-orange-300 transition-all text-left flex items-center gap-4 group"
          >
            <div className="bg-orange-100 w-12 h-12 rounded-2xl flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
               <Book size={24} />
            </div>
            <div>
               <h3 className="text-lg font-bold text-gray-800">生字本</h3>
               <p className="text-gray-400 text-xs">消灭拦路虎</p>
            </div>
          </button>

          {/* Library / Bank */}
          <button
            onClick={onOpenBank}
            className="w-full bg-white p-5 rounded-3xl shadow-md border-2 border-green-100 hover:border-green-300 transition-all text-left flex items-center gap-4 group"
          >
            <div className="bg-green-100 w-12 h-12 rounded-2xl flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
               <Library size={24} />
            </div>
             <div>
               <h3 className="text-lg font-bold text-gray-800">我的字库</h3>
               <p className="text-gray-400 text-xs">学习足迹</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
