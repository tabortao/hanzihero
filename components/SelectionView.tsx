import React, { useState } from 'react';
import { Book, Grid, Star, PlayCircle, Trophy, CheckCircle, List, X, Library } from 'lucide-react';
import { GameConfig, Character, Unit } from '../types';
import { APP_DATA } from '../data';
import { getSettings, getUnknownCharacters, getKnownCharacters } from '../services/storage';

interface SelectionViewProps {
  onStartGame: (config: GameConfig) => void;
  onReview: () => void;
  onOpenBank: () => void;
  stars: number;
}

export const SelectionView: React.FC<SelectionViewProps> = ({ onStartGame, onReview, onOpenBank, stars }) => {
  const [isAllUnitsOpen, setIsAllUnitsOpen] = useState(false); // Modal for all units
  
  const [activeTab, setActiveTab] = useState<'TODO' | 'DONE'>('TODO');
  
  const settings = getSettings();
  const knownChars = getKnownCharacters();
  const unknownChars = getUnknownCharacters();
  
  // Resolve current configuration
  const currentCurriculum = APP_DATA.find(c => c.id === settings.selectedCurriculumId);
  const currentGrade = currentCurriculum?.grades.find(g => g.id === settings.selectedGradeId);
  const needsSetup = !currentCurriculum || !currentGrade;

  // Process Units Logic
  const processedUnits = React.useMemo(() => {
    if (!currentGrade) return { todo: [], done: [] };
    
    const knownSet = new Set(knownChars.map(c => c.char));
    const todo: Unit[] = [];
    const done: Unit[] = [];

    currentGrade.units.forEach(unit => {
       const isComplete = unit.characters.every(c => knownSet.has(c.char));
       if (isComplete) {
         done.push(unit);
       } else {
         todo.push(unit);
       }
    });
    return { todo, done };
  }, [currentGrade, knownChars]);

  const handleStartGame = (unitId: string, unitName: string, chars: Character[]) => {
    onStartGame({
      mode: 'UNIT',
      title: unitName,
      curriculumId: settings.selectedCurriculumId,
      gradeId: settings.selectedGradeId,
      unitId: unitId,
      characters: chars
    });
  };

  /**
   * 3-1-3 Method Implementation
   */
  const startDailyChallenge = () => {
    const dailyLimit = settings.dailyLimit || 10;
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    
    // Helper: Days since learned
    const getDaysSince = (ts?: number) => {
        if (!ts) return 999;
        const diff = todayStart - ts;
        return Math.floor(diff / (1000 * 60 * 60 * 24));
    };

    // 1. Identify Review Candidates (Known)
    const reviewCandidates = knownChars.filter(c => {
        const days = getDaysSince(c.learnedAt);
        return days === 1 || days === 3 || days > 7; // 3-1-3 + long term decay
    });
    
    // Sort by priority: 1 day > 3 days > older
    reviewCandidates.sort((a, b) => {
        const daysA = getDaysSince(a.learnedAt);
        const daysB = getDaysSince(b.learnedAt);
        const scoreA = (daysA === 1 ? 0 : daysA === 3 ? 1 : 10);
        const scoreB = (daysB === 1 ? 0 : daysB === 3 ? 1 : 10);
        return scoreA - scoreB;
    });

    let selectedChars: Character[] = [];
    selectedChars = reviewCandidates.slice(0, dailyLimit);

    // 2. If space remains, add from "Unknown" list
    if (selectedChars.length < dailyLimit) {
        const needed = dailyLimit - selectedChars.length;
        const unknownReview = unknownChars.slice(0, needed);
        selectedChars = [...selectedChars, ...unknownReview];
    }

    // 3. If space still remains, add New Words
    if (selectedChars.length < dailyLimit) {
        let allCurriculumChars: Character[] = [];
        if (currentCurriculum) {
            currentCurriculum.grades.forEach(g => g.units.forEach(u => {
                allCurriculumChars = [...allCurriculumChars, ...u.characters];
            }));
        } else {
             // Fallback
             APP_DATA.forEach(c => c.grades.forEach(g => g.units.forEach(u => {
                 allCurriculumChars = [...allCurriculumChars, ...u.characters];
             })));
        }
        
        const existingSet = new Set([...knownChars, ...unknownChars].map(c => c.char));
        const newPool = allCurriculumChars.filter(c => !existingSet.has(c.char));
        const needed = dailyLimit - selectedChars.length;
        const newWords = newPool.sort(() => 0.5 - Math.random()).slice(0, needed);
        selectedChars = [...selectedChars, ...newWords];
    }
    
    if (selectedChars.length === 0) {
        alert("恭喜你！没有需要复习的字，去学习新单元吧！");
        return;
    }

    onStartGame({
      mode: 'CHALLENGE',
      title: '📅 每日挑战 (3-1-3)',
      curriculumId: 'daily',
      gradeId: 'daily',
      unitId: 'daily',
      characters: selectedChars
    });
  };

  // Helper component for Unit List
  const UnitList = ({ units, limit }: { units: Unit[], limit?: number }) => {
    const displayUnits = limit ? units.slice(0, limit) : units;
    
    if (units.length === 0) {
      return (
         <div className="flex flex-col items-center justify-center py-10 text-gray-400 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
            {activeTab === 'TODO' ? <CheckCircle size={32} className="mb-2 text-green-300"/> : <Book size={32} className="mb-2 text-gray-300"/>}
            <p className="text-sm">{activeTab === 'TODO' ? '太棒了！本册所有单元已完成' : '还没完成任何单元，加油！'}</p>
         </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {displayUnits.map((unit, index) => (
          <button
            key={unit.id}
            onClick={() => handleStartGame(unit.id, unit.name, unit.characters)}
            className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md active:scale-[0.98] transition-all group"
          >
             <div className="flex items-center gap-4 overflow-hidden">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0 ${activeTab === 'DONE' ? 'bg-green-100 text-green-600' : 'bg-blue-50 text-blue-500'}`}>
                   {limit ? index + 1 : units.indexOf(unit) + 1}
                </div>
                <div className="text-left overflow-hidden">
                   <h3 className="font-bold text-gray-800 truncate group-hover:text-blue-600 transition-colors">{unit.name}</h3>
                   <p className="text-xs text-gray-400">{unit.characters.length} 个生字</p>
                </div>
             </div>
             <PlayCircle size={24} className={`${activeTab === 'DONE' ? 'text-green-400' : 'text-blue-400'} shrink-0 group-hover:scale-110 transition-transform`} />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto min-h-screen bg-gray-50 flex flex-col pb-24 relative transition-all">
      
      {/* --- Header --- */}
      <div className="bg-white px-4 py-3 md:px-6 md:py-6 rounded-b-[2rem] shadow-sm flex justify-between items-center z-10 sticky top-0 transition-all">
        <div>
           <div className="flex items-center gap-2">
             <span className="text-3xl">🐼</span>
             <h1 className="text-xl md:text-2xl font-fun text-gray-800">汉字小英雄</h1>
           </div>
           <p className="text-[10px] md:text-sm text-gray-400 font-bold mt-1 pl-1">
             {currentCurriculum ? `${currentCurriculum.name} · ${currentGrade?.name}` : '请先设置教材'}
           </p>
        </div>
        <div className="flex items-center space-x-2 bg-yellow-100 px-3 py-1.5 rounded-full border border-yellow-200 shadow-sm">
            <Star className="text-yellow-600 fill-yellow-500 w-5 h-5" />
            <span className="font-bold text-yellow-800 text-lg">{stars}</span>
        </div>
      </div>

      <div className="px-4 md:px-8 mt-6 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* Left Sidebar (Stats & Quick Actions) */}
          <div className="lg:col-span-4 space-y-4 md:space-y-6">
             {/* Compact Quick Actions (Grid) */}
             <div className="grid grid-cols-3 gap-3">
                <button onClick={startDailyChallenge} className="bg-white text-gray-800 p-3 rounded-2xl shadow-md border border-blue-100 flex flex-col items-center justify-center gap-2 h-32 relative overflow-hidden group hover:border-blue-300 transition-colors">
                   <div className="bg-blue-100 p-2 rounded-xl text-blue-600 group-hover:scale-110 transition-transform">
                     <Trophy size={24} />
                   </div>
                   <div className="text-center">
                      <div className="font-bold text-sm">每日挑战</div>
                      <div className="text-[10px] text-gray-400">3-1-3 识字法</div>
                   </div>
                </button>
                
                <button onClick={onReview} className="bg-white text-gray-800 p-3 rounded-2xl shadow-md border border-orange-100 flex flex-col items-center justify-center gap-2 h-32 relative overflow-hidden group hover:border-orange-300 transition-colors">
                   {unknownChars.length > 0 && <div className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full animate-pulse" />}
                   <div className="bg-orange-100 p-2 rounded-xl text-orange-600 group-hover:scale-110 transition-transform"><Book size={24} /></div>
                   <div className="text-center">
                      <div className="font-bold text-sm">生字本</div>
                      <div className="text-[10px] text-gray-400">{unknownChars.length} 个待复习</div>
                   </div>
                </button>

                <button onClick={onOpenBank} className="bg-white text-gray-800 p-3 rounded-2xl shadow-md border border-green-100 flex flex-col items-center justify-center gap-2 h-32 group hover:border-green-300 transition-colors">
                   <div className="bg-green-100 p-2 rounded-xl text-green-600 group-hover:scale-110 transition-transform"><Library size={24} /></div>
                   <div className="text-center">
                      <div className="font-bold text-sm">我的字库</div>
                      <div className="text-[10px] text-gray-400">{knownChars.length} 个已掌握</div>
                   </div>
                </button>
             </div>
          </div>

          {/* Right Content (Units) */}
          <div className="lg:col-span-8">
             <div className="bg-white p-6 rounded-3xl shadow-sm min-h-[500px] border border-gray-100">
                {/* Header: Stack vertically on mobile, row on desktop */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6 gap-4">
                   <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 shrink-0">
                     <Grid className="w-6 h-6 text-blue-500" /> 学习单元
                   </h2>
                   
                   {/* Tabs Switch */}
                   <div className="bg-gray-100 p-1 rounded-xl flex text-sm font-bold self-start md:self-auto w-full md:w-auto">
                      <button 
                        onClick={() => setActiveTab('TODO')}
                        className={`flex-1 md:flex-none px-4 py-2 rounded-lg transition-all ${activeTab === 'TODO' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                      >
                        待学习 ({processedUnits.todo.length})
                      </button>
                      <button 
                        onClick={() => setActiveTab('DONE')}
                        className={`flex-1 md:flex-none px-4 py-2 rounded-lg transition-all ${activeTab === 'DONE' ? 'bg-white text-green-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                      >
                        已完成 ({processedUnits.done.length})
                      </button>
                   </div>
                </div>
                
                {needsSetup ? (
                   <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                      <Book size={48} className="text-gray-300 mb-4"/>
                      <p className="text-gray-500 font-bold mb-2">还没有设置教材</p>
                      <p className="text-xs text-gray-400">请前往"我的"页面进行设置</p>
                   </div>
                ) : (
                   <>
                      <UnitList units={activeTab === 'TODO' ? processedUnits.todo : processedUnits.done} limit={10} />
                      
                      {/* View All Button */}
                      {(activeTab === 'TODO' ? processedUnits.todo.length : processedUnits.done.length) > 10 && (
                         <button 
                            onClick={() => setIsAllUnitsOpen(true)}
                            className="w-full mt-4 py-4 text-sm font-bold text-gray-500 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center gap-2 hover:bg-gray-100 hover:text-gray-700 transition-colors"
                         >
                            <List size={18} /> 查看全部单元
                         </button>
                      )}
                   </>
                )}
             </div>
          </div>

        </div>
      </div>

      {/* --- Full Unit List Modal --- */}
      {isAllUnitsOpen && (
         <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 flex items-end sm:items-center justify-center p-0 sm:p-4">
            <div className="bg-white w-full max-w-2xl sm:rounded-3xl h-[80vh] flex flex-col shadow-2xl animate-slide-up">
               <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                  <h2 className="font-bold text-lg flex items-center gap-2">
                     {activeTab === 'TODO' ? '待学习单元' : '已完成单元'}
                     <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-500">
                        {activeTab === 'TODO' ? processedUnits.todo.length : processedUnits.done.length}
                     </span>
                  </h2>
                  <button onClick={() => setIsAllUnitsOpen(false)} className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                     <X size={20} />
                  </button>
               </div>
               <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                  <UnitList units={activeTab === 'TODO' ? processedUnits.todo : processedUnits.done} />
               </div>
            </div>
         </div>
      )}
    </div>
  );
};