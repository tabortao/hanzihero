
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Book, Grid, Star, PlayCircle, Trophy, CheckCircle, List, X, Library, BookOpen, Sparkles, Plus, Save, ChevronDown, Edit3, ArrowRightLeft, Camera, Loader2, Image as ImageIcon, FileText, Wand2, Edit2, Gamepad2 } from 'lucide-react';
import { GameConfig, Character, Unit, Curriculum } from '../types';
import { APP_DATA, GRADE_PRESETS } from '../appData';
import { getSettings, getUnknownCharacters, getKnownCharacters, getCustomCurricula, saveCustomUnit, updateCustomUnit, saveSettings, getDailyPlan } from '../services/storage';
import { findCharacterPinyin } from '../data/dictionary';
import { recognizeTextFromImage } from '../services/geminiService';

interface SelectionViewProps {
  onStartGame: (config: GameConfig) => void;
  onReview: () => void;
  onOpenBank: () => void;
  onGenerateUnitStory?: (unit: Unit) => void;
  onOpenDailyMenu: (chars: Character[], title?: string) => void; 
  stars: number;
}

export const SelectionView: React.FC<SelectionViewProps> = ({ onStartGame, onReview, onOpenBank, onGenerateUnitStory, onOpenDailyMenu, stars }) => {
  const [isAllUnitsOpen, setIsAllUnitsOpen] = useState(false); 
  const [activeTab, setActiveTab] = useState<'TODO' | 'DONE'>('TODO');
  
  // Custom Unit Modal State
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [modalTab, setModalTab] = useState<'MANUAL' | 'BATCH_AI'>('MANUAL'); 
  const [editingUnitId, setEditingUnitId] = useState<string | null>(null);
  
  // Shared Inputs
  const [customCurrName, setCustomCurrName] = useState('');
  const [customGradeName, setCustomGradeName] = useState('');
  
  // Manual Inputs
  const [customUnitName, setCustomUnitName] = useState('');
  const [customCharsInput, setCustomCharsInput] = useState('');

  // Batch Inputs
  const [batchSize, setBatchSize] = useState(5);
  const [batchInputText, setBatchInputText] = useState('');
  const [isRecognizing, setIsRecognizing] = useState(false);
  const [batchPreviews, setBatchPreviews] = useState<{name: string, chars: Character[]}[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Quick Switch Modal State
  const [showSwitchModal, setShowSwitchModal] = useState(false);
  const [quickCurrId, setQuickCurrId] = useState('');
  const [quickGradeId, setQuickGradeId] = useState('');

  // Input Modes (Select existing or Create new)
  const [currInputMode, setCurrInputMode] = useState<'SELECT' | 'INPUT'>('SELECT');
  const [gradeInputMode, setGradeInputMode] = useState<'SELECT' | 'INPUT'>('SELECT');
  
  // Load settings and data
  // We fetch settings inside functions to ensure freshness, but keep a reference here for initial rendering if needed
  const settings = getSettings(); 
  const knownChars = getKnownCharacters();
  const unknownChars = getUnknownCharacters();

  // Combine static data with custom user data
  // We use a key to force refresh when custom units are added
  const [refreshKey, setRefreshKey] = useState(0);
  
  const customCurricula = useMemo(() => getCustomCurricula(), [refreshKey, showCustomModal, showSwitchModal]);
  
  const allCurricula = useMemo(() => {
      return [...APP_DATA, ...customCurricula];
  }, [customCurricula]);

  // Compute Recent Categories (Grades) from custom data
  const recentCategories = useMemo(() => {
      const userCats = new Set<string>();
      customCurricula.forEach(c => c.grades.forEach(g => userCats.add(g.name)));
      // Combine user cats with presets, user cats first, filtering out duplicates
      return Array.from(userCats).concat(GRADE_PRESETS.filter(p => !userCats.has(p)));
  }, [customCurricula]);

  // Resolve current configuration
  const currentCurriculum = allCurricula.find(c => c.id === settings.selectedCurriculumId);
  const currentGrade = currentCurriculum?.grades.find(g => g.id === settings.selectedGradeId);
  const needsSetup = !currentCurriculum || !currentGrade;
  
  // Check if current curriculum is custom
  const isCustomCurriculum = currentCurriculum && !APP_DATA.some(c => c.id === currentCurriculum.id);

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

  // AI Agent Logic for Daily Challenge
  // 1. Fetch Ebbinghaus Reviews (Due today)
  // 2. Fetch New Characters from selected Curriculum (Up to daily limit)
  const prepareDailyChallenge = () => {
    // 1. Basic Validation
    if (needsSetup) {
        alert("请先点击左上角，设置您的教材和年级！");
        return;
    }

    // Refresh settings & data
    const currentSettings = getSettings();
    const dailyPlan = getDailyPlan(); // This only gets review items (Ebbinghaus)
    const reviewTargets = dailyPlan.review;
    
    let newTargets: Character[] = [];
    
    // 2. Determine New Characters to Learn (Based on Curriculum Sequence)
    const dailyNewLimit = currentSettings.dailyNewLimit || 5;
    
    // Iterate through units in the current grade to find the first unlearned characters
    // Note: processedUnits.todo contains units that are NOT fully complete
    if (processedUnits.todo.length > 0) {
        const knownSet = new Set(knownChars.map(c => c.char));
        const unlearnedBuffer: Character[] = [];
        
        // Collect unlearned chars from todo units until we hit the limit
        for (const unit of processedUnits.todo) {
            if (unlearnedBuffer.length >= dailyNewLimit) break;
            
            const unlearnedInUnit = unit.characters.filter(c => !knownSet.has(c.char));
            unlearnedBuffer.push(...unlearnedInUnit);
        }
        
        // Slice to exact limit
        newTargets = unlearnedBuffer.slice(0, dailyNewLimit);
    }
    
    // 3. Combine Review + New
    const combinedTargets = [...reviewTargets, ...newTargets];
    
    if (combinedTargets.length === 0) {
        alert("🎉 太棒了！\n\n今天没有需要复习的汉字，本册书的新课也已全部完成。\n\n您可以去【生字本】自由复习，或进入【阅读】生成新故事！");
        return;
    }
    
    // Dedup just in case
    const unique = Array.from(new Set(combinedTargets.map(c => c.char)))
        .map(char => combinedTargets.find(c => c.char === char)!);

    onOpenDailyMenu(unique, "每日挑战");
  };

  // Pre-fill custom modal logic
  const openCustomModal = () => {
      setEditingUnitId(null);
      setModalTab('MANUAL');
      setBatchPreviews([]);
      setBatchInputText('');
      // Default to select mode if there are custom curricula, else input
      if (customCurricula.length > 0) {
          setCurrInputMode('SELECT');
          setCustomCurrName(customCurricula[0].name); // Default to first custom
      } else {
          setCurrInputMode('INPUT');
          setCustomCurrName('');
      }
      
      setGradeInputMode('SELECT');
      // Default to most recent used category or first preset
      setCustomGradeName(recentCategories[0] || GRADE_PRESETS[0]);
      
      setCustomUnitName('');
      setCustomCharsInput('');
      setShowCustomModal(true);
  };
  
  const handleEditUnit = (unit: Unit) => {
      if (!currentCurriculum || !currentGrade) return;
      
      setEditingUnitId(unit.id);
      
      // Lock context to current selection
      setCurrInputMode('SELECT'); 
      setCustomCurrName(currentCurriculum.name);
      
      setGradeInputMode('SELECT');
      setCustomGradeName(currentGrade.name);
      
      // Set Unit Data
      setCustomUnitName(unit.name);
      setCustomCharsInput(unit.characters.map(c => c.char).join(' '));
      
      setModalTab('MANUAL'); 
      setShowCustomModal(true);
  };

  const handleSaveCustomUnit = () => {
      if (!customCurrName.trim() || !customGradeName.trim() || !customUnitName.trim() || !customCharsInput.trim()) {
          alert("请填写完整信息");
          return;
      }
      
      // Check for System Name Collision (Only if typing a new name and not editing)
      if (!editingUnitId) {
          const systemNames = APP_DATA.map(c => c.name);
          if (systemNames.includes(customCurrName.trim())) {
              alert(`无法创建名为"${customCurrName}"的教材，因为它是系统内置教材。\n请选择"选择现有"或使用不同的名称。`);
              return;
          }
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

      // Save or Update
      if (editingUnitId && currentCurriculum && currentGrade) {
          // Edit Mode
          updateCustomUnit(currentCurriculum.id, currentGrade.id, editingUnitId, customUnitName, charObjects);
          alert("单元修改成功！");
      } else {
          // Create Mode
          const result = saveCustomUnit(customCurrName, customGradeName, customUnitName, charObjects);
          // Auto-switch settings
          const newSettings = { ...settings, selectedCurriculumId: result.curriculumId, selectedGradeId: result.gradeId };
          saveSettings(newSettings);
          alert("单元创建成功！已自动切换到该教材。");
      }

      // Force refresh UI
      setRefreshKey(prev => prev + 1);
      setShowCustomModal(false);
      setEditingUnitId(null);
  };

  // --- Batch AI Logic ---
  
  const handleAnalyzeBatch = (sourceText: string) => {
      if (!sourceText.trim()) return;

      const rawText = sourceText;
      // Extract unique Chinese characters
      const matches = rawText.match(/[\u4e00-\u9fa5]/g);
      
      if (!matches || matches.length === 0) {
          alert("未在内容中找到有效汉字");
          return;
      }

      const uniqueChars = Array.from(new Set(matches));
      
      // Chunking
      const chunks: {name: string, chars: Character[]}[] = [];
      const safeBatchSize = Math.max(1, Math.min(50, batchSize));

      for (let i = 0; i < uniqueChars.length; i += safeBatchSize) {
          const chunkSlice = uniqueChars.slice(i, i + safeBatchSize);
          const chunkChars = chunkSlice.map(c => ({
              char: c,
              pinyin: findCharacterPinyin(c)
          }));
          
          const partNum = Math.floor(i / safeBatchSize) + 1;
          const padNum = String(partNum).padStart(2, '0');
          // Name format: "01 天地人你我"
          const firstFive = chunkChars.slice(0, 5).map(c => c.char).join('');
          const name = `${padNum} ${firstFive}`;
          
          chunks.push({ name, chars: chunkChars });
      }

      setBatchPreviews(chunks);
  };

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      e.target.value = ''; // Reset

      setIsRecognizing(true);
      
      try {
          const base64 = await new Promise<string>((resolve, reject) => {
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => resolve(reader.result as string);
              reader.onerror = reject;
          });

          // Custom prompt for simple extraction
          const prompt = "任务：提取所有不重复的汉字。请列出图片中所有用于识字教学的汉字。";
          const result = await recognizeTextFromImage(base64, prompt);
          
          // Populate text area first so user can see/edit
          setBatchInputText(result.content);
          
          // Auto analyze
          handleAnalyzeBatch(result.content);

      } catch (err: any) {
          console.error(err);
          alert(err.message || "识别失败，请重试");
      } finally {
          setIsRecognizing(false);
      }
  };

  const handleSaveBatch = () => {
      if (batchPreviews.length === 0) return;
      if (!customCurrName.trim()) {
        alert("请选择或输入教材版本");
        return;
      }
      if (!customGradeName.trim()) {
        alert("请选择或输入分类（年级）");
        return;
      }

      // Check collision
      const systemNames = APP_DATA.map(c => c.name);
      if (systemNames.includes(customCurrName.trim())) {
          alert(`无法修改系统内置教材"${customCurrName}"。请使用不同的名称。`);
          return;
      }

      let lastResult;
      batchPreviews.forEach(unit => {
           lastResult = saveCustomUnit(customCurrName, customGradeName, unit.name, unit.chars);
      });

      if (lastResult) {
          const newSettings = { ...settings, selectedCurriculumId: lastResult.curriculumId, selectedGradeId: lastResult.gradeId };
          saveSettings(newSettings);
      }

      setRefreshKey(prev => prev + 1);
      setShowCustomModal(false);
      alert(`成功创建了 ${batchPreviews.length} 个学习单元！`);
  };


  const handleQuickSwitch = () => {
      if (quickCurrId && quickGradeId) {
          const newSettings = { ...settings, selectedCurriculumId: quickCurrId, selectedGradeId: quickGradeId };
          saveSettings(newSettings);
          setRefreshKey(prev => prev + 1);
          setShowSwitchModal(false);
      }
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
                 {/* Edit Button for Custom Units */}
                 {isCustomCurriculum && (
                     <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleEditUnit(unit);
                        }}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-colors"
                        title="编辑单元"
                     >
                        <Edit2 size={18} />
                     </button>
                 )}

                 {/* Removed Gamepad2 button as requested */}

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

  // ... (rest of the file remains same, return existing JSX)
  return (
    <div className="max-w-7xl mx-auto min-h-screen bg-gray-50 flex flex-col pb-24 relative transition-all">
      
      {/* --- Header --- */}
      <div className="bg-white px-4 py-3 md:px-6 md:py-6 rounded-b-[2rem] shadow-sm flex justify-between items-center z-10 sticky top-0 transition-all">
        <div>
           <div className="flex items-center gap-2">
             <span className="text-3xl filter drop-shadow-sm">🐼</span>
             <h1 className="text-xl md:text-2xl font-fun text-gray-800">汉字小英雄</h1>
           </div>
           
           {/* Current Context & Quick Switch */}
           <div 
             onClick={() => {
                 setQuickCurrId(settings.selectedCurriculumId || '');
                 setQuickGradeId(settings.selectedGradeId || '');
                 setShowSwitchModal(true);
             }}
             className="flex items-center gap-1 mt-1 cursor-pointer group hover:bg-gray-50 rounded-lg pr-2 transition-all"
             title="点击快速切换教材"
           >
              <p className="text-[10px] md:text-sm text-gray-400 font-bold pl-1 group-hover:text-blue-500">
                {currentCurriculum ? `${currentCurriculum.name} · ${currentGrade?.name || '未知分类'}` : '请设置教材'}
              </p>
              <ArrowRightLeft size={12} className="text-gray-300 group-hover:text-blue-500" />
           </div>
        </div>
        
        {/* Responsive Known Characters Badge */}
        <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full border border-green-200 shadow-sm text-green-800 min-w-[5rem] justify-center transition-all" title="已认识的汉字">
            <CheckCircle size={18} className="text-green-600 shrink-0" />
            <span className="font-bold text-lg font-mono tracking-tight">{knownChars.length}</span>
            <span className="text-xs font-bold text-green-600/60">字</span>
        </div>
      </div>

      <div className="px-4 md:px-8 mt-6 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* Left Sidebar */}
          <div className="lg:col-span-4 space-y-4 md:space-y-6">
             <div className="grid grid-cols-3 gap-3">
                <button onClick={prepareDailyChallenge} className="bg-white text-gray-800 p-3 rounded-2xl shadow-md border border-blue-100 flex flex-col items-center justify-center gap-2 h-32 relative overflow-hidden group hover:border-blue-300 transition-colors">
                   <div className="bg-blue-100 p-2 rounded-xl text-blue-600 group-hover:scale-110 transition-transform">
                     <Trophy size={24} />
                   </div>
                   <div className="text-center">
                      <div className="font-bold text-sm">每日挑战</div>
                      <div className="text-[10px] text-gray-400">AI 记忆曲线</div>
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
                      <p className="text-xs text-gray-400">请前往"我的"页面进行设置，或点击左上角快速切换</p>
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

      {/* ... (Keep existing Modals: Full Unit List, Quick Switch, Custom Unit) ... */}
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

      {/* Quick Switch and Custom Modal logic remains the same... */}
      {showSwitchModal && (
          <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
             {/* ... content same as previous ... */}
             <div className="bg-white w-full max-w-sm rounded-3xl shadow-2xl animate-bounce-in p-6">
                  <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-lg text-gray-800 flex items-center gap-2">
                          <ArrowRightLeft size={20} className="text-blue-500"/> 快速切换教材
                      </h3>
                      <button onClick={() => setShowSwitchModal(false)} className="p-1 hover:bg-gray-100 rounded-full">
                          <X size={20} className="text-gray-400"/>
                      </button>
                  </div>
                  
                  <div className="space-y-4">
                      <div>
                          <label className="block text-xs font-bold text-gray-500 mb-1">教材</label>
                          <select 
                             className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:border-blue-500 outline-none"
                             value={quickCurrId}
                             onChange={e => {
                                 setQuickCurrId(e.target.value);
                                 const newCurr = allCurricula.find(c => c.id === e.target.value);
                                 if (newCurr && newCurr.grades.length > 0) {
                                     setQuickGradeId(newCurr.grades[0].id);
                                 }
                             }}
                          >
                              {allCurricula.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                          </select>
                      </div>
                      <div>
                          <label className="block text-xs font-bold text-gray-500 mb-1">分类 (年级)</label>
                          <select 
                             className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:border-blue-500 outline-none"
                             value={quickGradeId}
                             onChange={e => setQuickGradeId(e.target.value)}
                          >
                              <option value="">请选择...</option>
                              {(() => {
                                  const curr = allCurricula.find(c => c.id === quickCurrId);
                                  const existingNames = new Set(curr?.grades.map(g => g.name) || []);
                                  
                                  const options = [];
                                  
                                  if (curr) {
                                      curr.grades.forEach(g => {
                                          options.push(<option key={g.id} value={g.id}>{g.name}</option>);
                                      });
                                  }

                                  GRADE_PRESETS.forEach(preset => {
                                      if (!existingNames.has(preset)) {
                                          options.push(<option key={preset} value={preset}>{preset}</option>);
                                      }
                                  });
                                  
                                  return options;
                              })()}
                          </select>
                      </div>

                      <button 
                         onClick={handleQuickSwitch}
                         className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl mt-2 hover:bg-blue-700 transition-colors"
                      >
                          确认切换
                      </button>
                  </div>
              </div>
          </div>
      )}

      {showCustomModal && (
          <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
             {/* ... content same as previous ... */}
             <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl animate-bounce-in flex flex-col overflow-hidden max-h-[85vh] mb-safe">
                <div className="p-4 border-b border-gray-100 bg-blue-50 flex justify-between items-center shrink-0">
                   <h3 className="font-bold text-lg text-blue-900 flex items-center gap-2">
                      {editingUnitId ? <Edit2 size={20} /> : <Plus size={20} />} 
                      {editingUnitId ? '编辑自定义单元' : '创建自定义单元'}
                   </h3>
                   <button onClick={() => setShowCustomModal(false)} className="p-2 hover:bg-blue-100 rounded-full text-blue-700">
                      <X size={20} />
                   </button>
                </div>
                
                {/* Mode Tabs - Only show when creating new, or just show Manual when editing */}
                {!editingUnitId && (
                    <div className="flex bg-gray-100 p-1 mx-4 mt-4 rounded-xl shrink-0">
                        <button 
                            onClick={() => setModalTab('MANUAL')}
                            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1 ${modalTab === 'MANUAL' ? 'bg-white shadow text-blue-600' : 'text-gray-400'}`}
                        >
                            <Edit3 size={14}/> 手动录入
                        </button>
                        <button 
                            onClick={() => setModalTab('BATCH_AI')}
                            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1 ${modalTab === 'BATCH_AI' ? 'bg-white shadow text-purple-600' : 'text-gray-400'}`}
                        >
                            <Sparkles size={14}/> AI 批量
                        </button>
                    </div>
                )}

                <div className="p-6 space-y-4 overflow-y-auto custom-scrollbar flex-1">
                   {/* Shared Fields */}
                   <div className="space-y-3">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 mb-1">教材版本 (归类)</label>
                            <div className="flex gap-2">
                                {currInputMode === 'SELECT' ? (
                                    <div className="relative flex-1">
                                        <select 
                                            className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none appearance-none bg-white disabled:bg-gray-100 disabled:text-gray-400"
                                            value={customCurrName}
                                            disabled={!!editingUnitId} // Disable when editing
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
                                            {!editingUnitId && <option value="__NEW__">+ 创建新教材/自定义</option>}
                                        </select>
                                        {!editingUnitId && <ChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" size={16} />}
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
                                            disabled={!!editingUnitId}
                                        />
                                        {!editingUnitId && customCurricula.length > 0 && (
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
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-500 mb-1">分类 (年级)</label>
                            <div className="flex gap-2">
                                {gradeInputMode === 'SELECT' ? (
                                    <div className="relative flex-1">
                                        <select 
                                            className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none appearance-none bg-white disabled:bg-gray-100 disabled:text-gray-400"
                                            value={customGradeName}
                                            disabled={!!editingUnitId} // Disable when editing
                                            onChange={e => {
                                                if (e.target.value === '__NEW__') {
                                                    setGradeInputMode('INPUT');
                                                    setCustomGradeName('');
                                                } else {
                                                    setCustomGradeName(e.target.value);
                                                }
                                            }}
                                        >
                                            {recentCategories.map(g => <option key={g} value={g}>{g}</option>)}
                                            {!editingUnitId && <option value="__NEW__">+ 自定义分类</option>}
                                        </select>
                                        {!editingUnitId && <ChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" size={16} />}
                                    </div>
                                ) : (
                                    <div className="flex-1 relative">
                                        <input 
                                            type="text" 
                                            value={customGradeName} 
                                            onChange={e => setCustomGradeName(e.target.value)}
                                            className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none"
                                            placeholder="例如：课外班"
                                            disabled={!!editingUnitId}
                                        />
                                        {!editingUnitId && (
                                            <button 
                                                onClick={() => setGradeInputMode('SELECT')}
                                                className="absolute right-2 top-2 p-1.5 text-gray-400 hover:text-blue-600 bg-gray-50 rounded-lg text-xs"
                                            >
                                                选择常用
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                   </div>

                   {modalTab === 'MANUAL' ? (
                       // Manual Mode Content
                       <>
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

                           <div className="flex-1">
                              <label className="block text-xs font-bold text-gray-500 mb-1">学习生字 (空格或逗号分隔)</label>
                              <textarea 
                                 value={customCharsInput}
                                 onChange={e => setCustomCharsInput(e.target.value)}
                                 className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none h-32 resize-none font-mono"
                                 placeholder="请输入汉字，例如：龙 凤 呈 祥"
                              />
                              <p className="text-[10px] text-gray-400 mt-1">系统将自动生成拼音。</p>
                           </div>
                       </>
                   ) : (
                       // AI Batch Mode Content
                       <div className="space-y-4">
                           <div className="bg-purple-50 p-3 rounded-xl border border-purple-100">
                               <label className="block text-xs font-bold text-purple-700 mb-2">每个单元包含汉字数量</label>
                               <div className="flex items-center gap-3">
                                   <input 
                                       type="number" 
                                       min="1" 
                                       max="50" 
                                       value={batchSize}
                                       onChange={e => {
                                           const val = parseInt(e.target.value);
                                           if (!isNaN(val)) setBatchSize(val);
                                       }}
                                       className="w-20 p-2 rounded-lg border border-purple-200 text-center font-bold text-purple-800 outline-none focus:border-purple-400"
                                   />
                               </div>
                           </div>

                           <div>
                               <label className="block text-xs font-bold text-gray-500 mb-1 flex justify-between items-center">
                                   <span>识别内容 / 输入文字</span>
                                   <button 
                                      onClick={() => handleAnalyzeBatch(batchInputText)}
                                      className="text-purple-600 hover:text-purple-800 flex items-center gap-1"
                                      disabled={!batchInputText}
                                   >
                                      <Wand2 size={12}/> 生成预览
                                   </button>
                               </label>
                               <div className="relative">
                                   <textarea 
                                       value={batchInputText}
                                       onChange={e => setBatchInputText(e.target.value)}
                                       className="w-full p-3 pr-10 rounded-xl border border-gray-200 focus:border-purple-500 outline-none h-32 resize-none font-mono text-sm"
                                       placeholder="在此粘贴文字，或点击右下角相机拍照识别..."
                                   />
                                   
                                   {/* Floating Camera Button inside Textarea */}
                                   <div 
                                      className="absolute bottom-3 right-3 cursor-pointer hover:bg-gray-100 p-2 rounded-full transition-colors text-purple-500"
                                      onClick={() => fileInputRef.current?.click()}
                                      title="拍照/上传图片识别文字"
                                   >
                                       {isRecognizing ? <Loader2 className="animate-spin" size={20}/> : <Camera size={20} />}
                                   </div>
                               </div>
                               
                               <input 
                                   type="file" 
                                   ref={fileInputRef} 
                                   accept="image/*" 
                                   className="hidden" 
                                   onChange={handlePhotoUpload}
                                   disabled={isRecognizing}
                               />
                           </div>

                           {/* Preview Area */}
                           {batchPreviews.length > 0 && (
                               <div className="space-y-2 animate-fade-in">
                                   <h4 className="text-xs font-bold text-gray-500 flex items-center gap-1">
                                       <Sparkles size={12} className="text-yellow-500"/> 
                                       单元预览 ({batchPreviews.length} 个)
                                   </h4>
                                   <div className="max-h-[120px] overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                                       {batchPreviews.map((unit, idx) => (
                                           <div key={idx} className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm flex items-start gap-2">
                                               <div className="bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-1 rounded mt-0.5 shrink-0">
                                                   {unit.chars.length}字
                                               </div>
                                               <div className="flex-1 min-w-0">
                                                   <div className="font-bold text-xs text-gray-700 mb-1 truncate">{unit.name}</div>
                                                   <div className="text-xs text-gray-400 truncate tracking-widest">
                                                       {unit.chars.map(c => c.char).join(' ')}
                                                   </div>
                                               </div>
                                           </div>
                                       ))}
                                   </div>
                               </div>
                           )}
                       </div>
                   )}
                </div>

                <div className="p-4 bg-gray-50 border-t border-gray-100 flex gap-3 shrink-0">
                    <button 
                       onClick={() => setShowCustomModal(false)}
                       className="flex-1 py-3 text-gray-500 font-bold hover:bg-gray-200 rounded-xl transition-colors"
                    >
                       取消
                    </button>
                    {modalTab === 'MANUAL' ? (
                        <button 
                           onClick={handleSaveCustomUnit}
                           className="flex-1 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                        >
                           <Save size={18} /> {editingUnitId ? '更新单元' : '保存单元'}
                        </button>
                    ) : (
                        <button 
                           onClick={handleSaveBatch}
                           disabled={batchPreviews.length === 0}
                           className="flex-1 py-3 bg-purple-600 text-white font-bold rounded-xl shadow-md hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                           <Save size={18} /> 批量保存
                        </button>
                    )}
                </div>
             </div>
          </div>
      )}

    </div>
  );
};
