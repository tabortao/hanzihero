
import React, { useState, useEffect, useMemo } from 'react';
import { Book, Grid, Star, PlayCircle, Trophy, CheckCircle, List, X, Library, BookOpen, Sparkles, Plus, Save, ChevronDown, Edit3 } from 'lucide-react';
import { GameConfig, Character, Unit, Curriculum } from '../types';
import { APP_DATA } from '../data';
import { getSettings, getUnknownCharacters, getKnownCharacters, getCustomCurricula, saveCustomUnit, saveSettings } from '../services/storage';
import { findCharacterPinyin } from '../data/dictionary';

interface SelectionViewProps {
  onStartGame: (config: GameConfig) => void;
  onReview: () => void;
  onOpenBank: () => void;
  onGenerateUnitStory?: (unit: Unit) => void;
  stars: number;
}

const GRADE_PRESETS = [
    "一年级上册", "一年级下册",
    "二年级上册", "二年级下册",
    "三年级上册", "三年级下册",
    "四年级上册", "四年级下册",
    "五年级上册", "五年级下册",
    "六年级上册", "六年级下册",
];

export const SelectionView: React.FC<SelectionViewProps> = ({ onStartGame, onReview, onOpenBank, onGenerateUnitStory, stars }) => {
  const [isAllUnitsOpen, setIsAllUnitsOpen] = useState(false); 
  const [activeTab, setActiveTab] = useState<'TODO' | 'DONE'>('TODO');
  
  // Custom Unit Modal State
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [customCurrName, setCustomCurrName] = useState('');
  const [customGradeName, setCustomGradeName] = useState('');
  const [customUnitName, setCustomUnitName] = useState('');
  const [customCharsInput, setCustomCharsInput] = useState('');

  // Input Modes (Select existing or Create new)
  const [currInputMode, setCurrInputMode] = useState<'SELECT' | 'INPUT'>('SELECT');
  const [gradeInputMode, setGradeInputMode] = useState<'SELECT' | 'INPUT'>('SELECT');
  
  // Load settings and data
  const settings = getSettings();
  const knownChars = getKnownCharacters();
  const unknownChars = getUnknownCharacters();

  // Combine static data with custom user data
  // We use a key to force refresh when custom units are added
  const [refreshKey, setRefreshKey] = useState(0);
  
  const customCurricula = useMemo(() => getCustomCurricula(), [refreshKey, showCustomModal]);
  
  const allCurricula = useMemo(() => {
      return [...APP_DATA, ...customCurricula];
  }, [customCurricula]);

  // Resolve current configuration
  const currentCurriculum = allCurricula.find(c => c.id === settings.selectedCurriculumId);
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

  // Pre-fill custom modal logic
  const openCustomModal = () => {
      // Default to select mode if there are custom curricula, else input
      if (customCurricula.length > 0) {
          setCurrInputMode('SELECT');
          setCustomCurrName(customCurricula[0].name); // Default to first custom
      } else {
          setCurrInputMode('INPUT');
          setCustomCurrName('');
      }
      
      setGradeInputMode('SELECT');
      setCustomGradeName(GRADE_PRESETS[0]);
      
      setCustomUnitName('');
      setCustomCharsInput('');
      setShowCustomModal(true);
  };

  const handleSaveCustomUnit = () => {
      if (!customCurrName.trim() || !customGradeName.trim() || !customUnitName.trim() || !customCharsInput.trim()) {
          alert("请填写完整信息");
          return;
      }

      // Check for System Name Collision (Only if typing a new name)
      const systemNames = APP_DATA.map(c => c.name);
      if (systemNames.includes(customCurrName.trim())) {
          alert(`无法创建名为"${customCurrName}"的教材，因为它是系统内置教材。\n请选择"选择现有"或使用不同的名称。`);
          return;
      }

      // Parse characters (spaces, commas, newlines)
      const rawChars = customCharsInput.split(/[\s,，、\n]+/).filter(c => c.trim() !== '');
      const uniqueChars = Array.from(new Set(rawChars)); // Remove duplicates
      
      if (uniqueChars.length === 0) {
          alert("请输入至少一个汉字");
          return;
      }

      const charObjects: Character[] = uniqueChars.map(char => ({
          char: char[0], // Take first char if user typed phrases (simple safety)
          pinyin: findCharacterPinyin(char[0])
      }));

      // Save to storage
      const result = saveCustomUnit(customCurrName, customGradeName, customUnitName, charObjects);
      
      // Auto-switch settings to the new unit so the user sees it immediately
      const newSettings = { ...settings, selectedCurriculumId: result.curriculumId, selectedGradeId: result.gradeId };
      saveSettings(newSettings);

      // Force refresh UI
      setRefreshKey(prev => prev + 1);
      setShowCustomModal(false);
      
      alert("单元创建成功！已自动切换到该教材。");
  };

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

  // ... (Keep existing daily challenge logic) ...
  const startDailyChallenge = () => {
    const dailyLimit = settings.dailyLimit || 10;
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    
    const getDaysSince = (ts?: number) => {
        if (!ts) return 999;
        const diff = todayStart - ts;
        return Math.floor(diff / (1000 * 60 * 60 * 24));
    };

    const reviewCandidates = knownChars.filter(c => {
        const days = getDaysSince(c.learnedAt);
        return days === 1 || days === 3 || days > 7; 
    });
    
    reviewCandidates.sort((a, b) => {
        const daysA = getDaysSince(a.learnedAt);
        const daysB = getDaysSince(b.learnedAt);
        const scoreA = (daysA === 1 ? 0 : daysA === 3 ? 1 : 10);
        const scoreB = (daysB === 1 ? 0 : daysB === 3 ? 1 : 10);
        return scoreA - scoreB;
    });

    let selectedChars: Character[] = [];
    selectedChars = reviewCandidates.slice(0, dailyLimit);

    if (selectedChars.length < dailyLimit) {
        const needed = dailyLimit - selectedChars.length;
        const unknownReview = unknownChars.slice(0, needed);
        selectedChars = [...selectedChars, ...unknownReview];
    }

    if (selectedChars.length < dailyLimit) {
        let allCurriculumChars: Character[] = [];
        if (currentCurriculum) {
            currentCurriculum.grades.forEach(g => g.units.forEach(u => {
                allCurriculumChars = [...allCurriculumChars, ...u.characters];
            }));
        } else {
             allCurricula.forEach(c => c.grades.forEach(g => g.units.forEach(u => {
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

  // ... (Keep existing UnitList component) ...
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
          <div
            key={unit.id}
            className="flex items-center justify-between bg-white p-3 md:p-4 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group relative"
          >
             <div 
               className="flex items-center gap-3 md:gap-4 overflow-hidden flex-1 cursor-pointer"
               onClick={() => handleStartGame(unit.id, unit.name, unit.characters)}
             >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0 ${activeTab === 'DONE' ? 'bg-green-100 text-green-600' : 'bg-blue-50 text-blue-500'}`}>
                   {limit ? index + 1 : units.indexOf(unit) + 1}
                </div>
                <div className="text-left overflow-hidden">
                   <h3 className="font-bold text-gray-800 truncate group-hover:text-blue-600 transition-colors">{unit.name}</h3>
                   <p className="text-xs text-gray-400">{unit.characters.length} 个生字</p>
                </div>
             </div>

             <div className="flex items-center gap-1">
                 <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        if(onGenerateUnitStory) onGenerateUnitStory(unit);
                    }}
                    className="p-2 text-amber-400 hover:text-amber-600 hover:bg-amber-50 rounded-full transition-colors"
                    title="生成单元故事"
                 >
                    <BookOpen size={20} />
                 </button>

                 <button
                    onClick={() => handleStartGame(unit.id, unit.name, unit.characters)}
                    className="p-2 text-blue-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                    title="开始学习"
                 >
                    <PlayCircle size={24} className={`${activeTab === 'DONE' ? 'text-green-400' : 'text-blue-400'} shrink-0 group-hover:scale-110 transition-transform`} />
                 </button>
             </div>
          </div>
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
             <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center shadow-md text-white">
                <BookOpen size={20} strokeWidth={2.5} />
             </div>
             <h1 className="text-xl md:text-2xl font-fun text-gray-800">汉字小英雄</h1>
           </div>
           <p className="text-[10px] md:text-sm text-gray-400 font-bold mt-1 pl-1">
             {currentCurriculum ? `${currentCurriculum.name} · ${currentGrade?.name}` : '请先设置教材'}
           </p>
        </div>
        
        <div className="flex items-center space-x-2 bg-green-100 px-3 py-1.5 rounded-full border border-green-200 shadow-sm text-green-800" title="已认识的汉字">
            <CheckCircle size={18} className="text-green-600" />
            <span className="font-bold text-lg">{knownChars.length}</span>
        </div>
      </div>

      <div className="px-4 md:px-8 mt-6 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* Left Sidebar */}
          <div className="lg:col-span-4 space-y-4 md:space-y-6">
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

          {/* Right Content */}
          <div className="lg:col-span-8">
             <div className="bg-white p-6 rounded-3xl shadow-sm min-h-[500px] border border-gray-100 relative">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6 gap-4">
                   <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 shrink-0">
                     <Grid className="w-6 h-6 text-blue-500" /> 学习单元
                   </h2>
                   
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

      {/* Floating Action Button */}
      <button 
        onClick={openCustomModal}
        className="fixed bottom-24 right-6 z-30 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform active:scale-95 flex items-center justify-center"
        title="创建自定义学习单元"
      >
        <Plus size={28} />
      </button>

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

      {/* --- Custom Unit Creation Modal --- */}
      {showCustomModal && (
          <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
             <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl animate-bounce-in flex flex-col overflow-hidden max-h-[90vh]">
                <div className="p-4 border-b border-gray-100 bg-blue-50 flex justify-between items-center shrink-0">
                   <h3 className="font-bold text-lg text-blue-900 flex items-center gap-2">
                      <Plus size={20} /> 创建自定义单元
                   </h3>
                   <button onClick={() => setShowCustomModal(false)} className="p-2 hover:bg-blue-100 rounded-full text-blue-700">
                      <X size={20} />
                   </button>
                </div>
                
                <div className="p-6 space-y-4 overflow-y-auto custom-scrollbar">
                   {/* Curriculum Name Input */}
                   <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1">教材版本 (归类)</label>
                      <div className="flex gap-2">
                         {currInputMode === 'SELECT' ? (
                             <div className="relative flex-1">
                                 <select 
                                    className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none appearance-none bg-white"
                                    value={customCurrName}
                                    onChange={e => {
                                        if (e.target.value === '__NEW__') {
                                            setCurrInputMode('INPUT');
                                            setCustomCurrName('');
                                        } else {
                                            setCustomCurrName(e.target.value);
                                        }
                                    }}
                                 >
                                    {customCurricula.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                                    <option value="__NEW__">+ 创建新教材/自定义</option>
                                 </select>
                                 <ChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" size={16} />
                             </div>
                         ) : (
                             <div className="flex-1 relative">
                                <input 
                                    type="text" 
                                    value={customCurrName} 
                                    onChange={e => setCustomCurrName(e.target.value)}
                                    className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none"
                                    placeholder="例如：我的自定义教材"
                                    autoFocus
                                />
                                {customCurricula.length > 0 && (
                                    <button 
                                        onClick={() => setCurrInputMode('SELECT')}
                                        className="absolute right-2 top-2 p-1.5 text-gray-400 hover:text-blue-600 bg-gray-50 rounded-lg text-xs"
                                    >
                                        选择现有
                                    </button>
                                )}
                             </div>
                         )}
                      </div>
                      <p className="text-[10px] text-orange-400 mt-1 pl-1">* 不能与系统内置教材重名</p>
                   </div>

                   {/* Grade Input */}
                   <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1">年级</label>
                      <div className="flex gap-2">
                         {gradeInputMode === 'SELECT' ? (
                             <div className="relative flex-1">
                                 <select 
                                    className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none appearance-none bg-white"
                                    value={customGradeName}
                                    onChange={e => {
                                        if (e.target.value === '__NEW__') {
                                            setGradeInputMode('INPUT');
                                            setCustomGradeName('');
                                        } else {
                                            setCustomGradeName(e.target.value);
                                        }
                                    }}
                                 >
                                    {GRADE_PRESETS.map(g => <option key={g} value={g}>{g}</option>)}
                                    <option value="__NEW__">+ 自定义年级</option>
                                 </select>
                                 <ChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" size={16} />
                             </div>
                         ) : (
                             <div className="flex-1 relative">
                                <input 
                                    type="text" 
                                    value={customGradeName} 
                                    onChange={e => setCustomGradeName(e.target.value)}
                                    className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none"
                                    placeholder="例如：课外班"
                                />
                                <button 
                                    onClick={() => setGradeInputMode('SELECT')}
                                    className="absolute right-2 top-2 p-1.5 text-gray-400 hover:text-blue-600 bg-gray-50 rounded-lg text-xs"
                                >
                                    选择常用
                                </button>
                             </div>
                         )}
                      </div>
                   </div>

                   {/* Unit Name */}
                   <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1">单元名称</label>
                      <input 
                         type="text" 
                         value={customUnitName} 
                         onChange={e => setCustomUnitName(e.target.value)}
                         className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none"
                         placeholder="例如：难字突破"
                      />
                   </div>

                   {/* Characters Input */}
                   <div className="flex-1 min-h-[120px]">
                      <label className="block text-xs font-bold text-gray-500 mb-1">学习生字 (空格或逗号分隔)</label>
                      <textarea 
                         value={customCharsInput}
                         onChange={e => setCustomCharsInput(e.target.value)}
                         className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none h-32 resize-none font-mono"
                         placeholder="请输入汉字，例如：龙 凤 呈 祥"
                      />
                      <p className="text-[10px] text-gray-400 mt-1">系统将自动生成拼音。</p>
                   </div>
                </div>

                <div className="p-4 bg-gray-50 border-t border-gray-100 flex gap-3 shrink-0">
                    <button 
                       onClick={() => setShowCustomModal(false)}
                       className="flex-1 py-3 text-gray-500 font-bold hover:bg-gray-200 rounded-xl transition-colors"
                    >
                       取消
                    </button>
                    <button 
                       onClick={handleSaveCustomUnit}
                       className="flex-1 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                       <Save size={18} /> 保存单元
                    </button>
                </div>
             </div>
          </div>
      )}

    </div>
  );
};
