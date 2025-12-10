
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { BookOpen, Sparkles, Trash2, Volume2, Save, Plus, Archive, RotateCcw, Check, Loader2, PenTool, Search, Tag, X, CheckCircle, GraduationCap, Edit2, ChevronLeft, ChevronRight, Coins } from 'lucide-react';
import { Story, CharPair, Character } from '../types';
import { getStories, saveStory, deleteStory, getKnownCharacters, getUnknownCharacters, addUnknownCharacter, addKnownCharacter, isCharacterKnown, getReadingCoins, addReadingCoins } from '../services/storage';
import { generateStoryStream } from '../services/geminiService';
import { speakText, WritingGrid } from './SharedComponents';
import { findCharacterPinyin } from '../data/dictionary';
import confetti from 'canvas-confetti';

// Helper to generate a UUID
const generateId = () => Date.now().toString(36) + Math.random().toString(36).substring(2);

const AVAILABLE_TAGS = ["一年级", "二年级", "三年级", "寓言", "童话", "古诗", "日常", "动物", "植物", "单元复习"];

// Reduced to 6 to ensure it fits above the bottom nav on mobile screens
const ROWS_PER_PAGE = 6; 

interface StoryViewProps {
    initialContext?: { chars: Character[], topic: string } | null;
    onClearContext?: () => void;
}

export const StoryView: React.FC<StoryViewProps> = ({ initialContext, onClearContext }) => {
  const [stories, setStories] = useState<Story[]>([]);
  const [currentStory, setCurrentStory] = useState<Story | null>(null);
  const [coins, setCoins] = useState(0);
  
  // Reader State
  const [currentPage, setCurrentPage] = useState(0);
  const [hasAwardedCoins, setHasAwardedCoins] = useState(false); // Track if coins awarded for current session

  // Create/Input State
  const [showInputModal, setShowInputModal] = useState(false);
  const [inputType, setInputType] = useState<'AI' | 'MANUAL'>('AI');
  const [manualTitle, setManualTitle] = useState('');
  const [manualContent, setManualContent] = useState('');
  const [keywords, setKeywords] = useState(''); // For AI
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [customTagInput, setCustomTagInput] = useState(''); 
  const [loading, setLoading] = useState(false);
  const [streamText, setStreamText] = useState('');

  // Reader Edit State
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [editTitleValue, setEditTitleValue] = useState('');

  // Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTagFilter, setActiveTagFilter] = useState('ALL');

  // Reader Interaction State
  const [selectedCharPair, setSelectedCharPair] = useState<CharPair | null>(null);

  // Grid Layout State
  const [gridCols, setGridCols] = useState(6);

  useEffect(() => {
    setStories(getStories());
    setCoins(getReadingCoins());
  }, []);

  // Reset page when story changes
  useEffect(() => {
      if (currentStory) {
          setCurrentPage(0);
          setHasAwardedCoins(false); // Reset coin flag
      }
  }, [currentStory]);

  // Update Grid Cols based on width
  useEffect(() => {
    const updateCols = () => {
        const w = window.innerWidth;
        let cols = 6;
        if (w >= 1280) cols = 12;      // XL
        else if (w >= 1024) cols = 10; // LG
        else if (w >= 768) cols = 9;   // MD
        else if (w >= 640) cols = 8;   // SM
        else cols = 6;                 // Mobile (min)

        // Adjust for very small screens
        if (w < 360) cols = 5;

        setGridCols(cols);
    };

    updateCols();
    window.addEventListener('resize', updateCols);
    return () => window.removeEventListener('resize', updateCols);
  }, []);

  // Handle Initial Context (e.g., coming from Unit selection)
  useEffect(() => {
      if (initialContext) {
          setShowInputModal(true);
          setInputType('AI');
          setKeywords(initialContext.topic);
          setSelectedTags(['单元复习']);
      }
  }, [initialContext]);

  const handleCloseModal = () => {
      setShowInputModal(false);
      setKeywords('');
      setStreamText('');
      setManualTitle('');
      setManualContent('');
      setSelectedTags([]);
      setCustomTagInput('');
      setLoading(false);
      if(onClearContext) onClearContext();
  };

  // --- Actions ---

  const handleGenerateAI = async () => {
    setLoading(true);
    setStreamText(''); 
    
    let available: Character[] = [];
    
    if (initialContext && initialContext.chars.length > 0) {
        available = initialContext.chars;
    } else {
        const known = getKnownCharacters();
        const unknown = getUnknownCharacters();
        available = [...known, ...unknown];
    }
    
    if (available.length < 5) {
        available.push({char:'天', pinyin:'tiān'}, {char:'地', pinyin:'dì'}, {char:'人', pinyin:'rén'});
    }

    try {
        await generateStoryStream(available, keywords, (chunk) => {
            setStreamText(prev => prev + chunk);
        });
    } catch (e) {
        alert("生成失败，请检查网络或 AI 设置");
        setLoading(false);
        return;
    }
    setLoading(false);
  };

  const handleManualSave = () => {
      if (!manualTitle || !manualContent) {
          alert("标题和内容不能为空");
          return;
      }
      saveNewStory(manualTitle, manualContent, 'MANUAL');
  };

  const saveNewStory = (title: string, contentStr: string, source: 'AI' | 'MANUAL' | 'OCR') => {
      const content: CharPair[] = [];
      const normalizedStr = contentStr.replace(/\r\n/g, '\n');
      
      for (let i = 0; i < normalizedStr.length; i++) {
          const char = normalizedStr[i];
          if (char === '\n') {
              content.push({ char: '\n', pinyin: '' });
          } else if (char.match(/[\u4e00-\u9fa5a-zA-Z0-9]/)) {
              content.push({ char, pinyin: findCharacterPinyin(char) || '' });
          } else if (char.trim() !== '') {
              content.push({ char, pinyin: '' });
          }
      }

      const newStory: Story = {
          id: generateId(),
          title,
          content,
          createdAt: Date.now(),
          isArchived: false,
          readCount: 0,
          keywords: source === 'AI' ? keywords : undefined,
          tags: selectedTags.length > 0 ? selectedTags : (source === 'AI' ? ['AI生成'] : ['手动录入']),
          source
      };

      saveStory(newStory);
      setStories([newStory, ...stories]);
      setCurrentStory(newStory);
      
      handleCloseModal();
  };

  useEffect(() => {
      if (!loading && streamText.length > 10 && inputType === 'AI' && showInputModal) {
          const lines = streamText.split('\n').filter(l => l.trim() !== '');
          const title = lines[0]?.replace(/^#+\s*/, '') || '无题';
          const content = lines.slice(1).join('\n');
          
          setManualTitle(title);
          setManualContent(content);
          setInputType('MANUAL');
          if (!selectedTags.includes('AI生成')) {
              setSelectedTags(prev => [...prev, 'AI生成']);
          }
      }
  }, [loading, streamText]);

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if(confirm("确定要删除这篇短文吗？")) {
        deleteStory(id);
        setStories(prev => prev.filter(s => s.id !== id));
        if (currentStory?.id === id) setCurrentStory(null);
    }
  };

  const handleArchive = (story: Story, e: React.MouseEvent) => {
      e.stopPropagation();
      const updated = { ...story, isArchived: !story.isArchived };
      saveStory(updated);
      setStories(stories.map(s => s.id === updated.id ? updated : s));
  };

  const openStory = (story: Story) => {
      const updated = { ...story, readCount: (story.readCount || 0) + 1 };
      saveStory(updated);
      setStories(stories.map(s => s.id === updated.id ? updated : s));
      setCurrentStory(updated);
  };

  const saveTitleEdit = () => {
    if (currentStory && editTitleValue.trim()) {
        const updated = { ...currentStory, title: editTitleValue };
        saveStory(updated);
        setStories(stories.map(s => s.id === updated.id ? updated : s));
        setCurrentStory(updated);
    }
    setIsEditingTitle(false);
  };

  const addCustomTag = () => {
      if (customTagInput && !selectedTags.includes(customTagInput)) {
          setSelectedTags([...selectedTags, customTagInput]);
          setCustomTagInput('');
      }
  };

  const handleCharClick = (charPair: CharPair) => {
      if (!charPair.char || !charPair.char.match(/[\u4e00-\u9fa5a-zA-Z0-9]/)) return;
      setSelectedCharPair(charPair);
  };

  const handleCharAction = (action: 'READ' | 'STUDY' | 'UNKNOWN' | 'KNOWN') => {
      if (!selectedCharPair) return;
      
      const charObj = { char: selectedCharPair.char, pinyin: selectedCharPair.pinyin };

      switch (action) {
          case 'READ':
              speakText(selectedCharPair.char);
              break;
          case 'STUDY':
              speakText(`学习: ${selectedCharPair.char}`);
              break;
          case 'UNKNOWN':
              addUnknownCharacter(charObj);
              speakText('已加入生字本');
              setSelectedCharPair(null);
              break;
          case 'KNOWN':
              addKnownCharacter(charObj);
              speakText('真棒');
              setSelectedCharPair(null);
              break;
      }
  };


  const filteredStories = stories.filter(s => {
      const matchesSearch = s.title.includes(searchQuery) || 
                            s.content.some(c => c.char.includes(searchQuery));
      const matchesTag = activeTagFilter === 'ALL' || s.tags?.includes(activeTagFilter);
      return matchesSearch && matchesTag;
  });

  const activeStories = filteredStories.filter(s => !s.isArchived);
  const archivedStories = filteredStories.filter(s => s.isArchived);

  // --- Grid & Pagination Processing Logic ---
  const { pageCells, totalPages } = useMemo(() => {
      if (!currentStory) return { pageCells: [], totalPages: 0 };
      
      const allCells: { char: string, pinyin: string, id: string }[] = [];
      const content = currentStory.content;
      
      let currentRowCount = 0;
      
      const fillRow = () => {
          const remainder = currentRowCount % gridCols;
          if (remainder > 0) {
              const needed = gridCols - remainder;
              for (let i = 0; i < needed; i++) {
                  allCells.push({ char: '', pinyin: '', id: `pad-${allCells.length}` });
                  currentRowCount++;
              }
          }
      };

      const addIndent = () => {
          allCells.push({ char: '', pinyin: '', id: `indent-1-${allCells.length}` });
          allCells.push({ char: '', pinyin: '', id: `indent-2-${allCells.length}` });
          currentRowCount += 2;
      };

      addIndent();

      for (let i = 0; i < content.length; i++) {
          const item = content[i];
          
          if (item.char === '\n') {
              fillRow();
              if (i < content.length - 1) {
                  addIndent();
              }
          } else {
              allCells.push({ ...item, id: `char-${i}` });
              currentRowCount++;
          }
      }
      fillRow();

      // Pagination Calculation
      const itemsPerPage = gridCols * ROWS_PER_PAGE;
      const total = Math.ceil(allCells.length / itemsPerPage);
      
      // Get current page slice
      let slice = allCells.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
      
      // Pad the last page to look full if it's the last page
      while (slice.length < itemsPerPage) {
          slice.push({ char: '', pinyin: '', id: `end-pad-${slice.length}` });
      }

      return { pageCells: slice, totalPages: total };

  }, [currentStory, gridCols, currentPage]);


  // Check for Coin Award (If user reached last page)
  useEffect(() => {
      if (currentStory && totalPages > 0 && currentPage === totalPages - 1 && !hasAwardedCoins) {
          const earned = totalPages * 10;
          const newTotal = addReadingCoins(earned);
          setCoins(newTotal);
          setHasAwardedCoins(true);
          
          confetti({
             particleCount: 80,
             spread: 60,
             origin: { y: 0.6 },
             colors: ['#FFD700', '#FFA500', '#FF4500']
          });
      }
  }, [currentPage, totalPages, currentStory, hasAwardedCoins]);


  // --- Renders ---

  const renderInputModal = () => (
      <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white w-full max-w-lg h-[90vh] sm:h-auto sm:max-h-[90vh] sm:rounded-3xl rounded-t-3xl shadow-2xl flex flex-col animate-slide-up overflow-hidden">
              <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-amber-50">
                  <h3 className="font-bold text-lg text-amber-900 flex items-center gap-2">
                      {inputType === 'AI' && <Sparkles size={20}/>}
                      {inputType === 'MANUAL' && <PenTool size={20}/>}
                      {inputType === 'AI' ? 'AI 创作故事' : '录入/编辑故事'}
                  </h3>
                  <button onClick={handleCloseModal} className="p-2 hover:bg-amber-100 rounded-full"><X size={20}/></button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {!loading && !streamText && (
                      <div className="flex bg-gray-100 p-1 rounded-xl mb-4">
                          <button onClick={() => setInputType('AI')} className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${inputType === 'AI' ? 'bg-white shadow text-amber-600' : 'text-gray-400'}`}>AI 生成</button>
                          <button onClick={() => setInputType('MANUAL')} className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${inputType === 'MANUAL' ? 'bg-white shadow text-blue-600' : 'text-gray-400'}`}>手动录入</button>
                      </div>
                  )}

                  {inputType === 'AI' && (
                      <div className="space-y-4">
                          {streamText ? (
                              <div className="bg-amber-50 p-4 rounded-xl text-sm leading-relaxed whitespace-pre-wrap min-h-[200px] border border-amber-200">
                                  {streamText}
                                  {loading && <span className="inline-block w-2 h-4 bg-amber-500 ml-1 animate-pulse"/>}
                              </div>
                          ) : (
                              <div>
                                  <label className="block text-sm font-bold text-gray-500 mb-2">故事主题关键词</label>
                                  <input 
                                      type="text" 
                                      className="w-full p-3 rounded-xl border border-gray-200 focus:border-amber-400 outline-none"
                                      placeholder="例如：春天、小狗、勇敢..."
                                      value={keywords}
                                      onChange={e => setKeywords(e.target.value)}
                                  />
                                  {initialContext && (
                                     <p className="text-xs text-green-600 mt-2 flex items-center gap-1"><CheckCircle size={12}/> 已根据选择的单元设置了识字范围</p>
                                  )}
                              </div>
                          )}
                      </div>
                  )}

                  {inputType === 'MANUAL' && (
                      <div className="space-y-3">
                          <input 
                              type="text" 
                              placeholder="故事标题" 
                              className="w-full p-3 rounded-xl border border-gray-200 font-bold text-lg focus:border-blue-400 outline-none"
                              value={manualTitle}
                              onChange={e => setManualTitle(e.target.value)}
                          />
                          <textarea 
                              placeholder="在此输入故事内容..." 
                              className="w-full p-3 rounded-xl border border-gray-200 h-60 focus:border-blue-400 outline-none resize-none"
                              value={manualContent}
                              onChange={e => setManualContent(e.target.value)}
                          />
                      </div>
                  )}

                  {!streamText && (
                      <div>
                          <label className="block text-sm font-bold text-gray-500 mb-2 flex items-center gap-1"><Tag size={14}/> 分类标签 (分级)</label>
                          <div className="flex flex-wrap gap-2 mb-2">
                              {AVAILABLE_TAGS.map(tag => (
                                  <button
                                      key={tag}
                                      onClick={() => {
                                          if (selectedTags.includes(tag)) setSelectedTags(prev => prev.filter(t => t !== tag));
                                          else setSelectedTags(prev => [...prev, tag]);
                                      }}
                                      className={`px-3 py-1 rounded-full text-xs font-bold border transition-colors ${selectedTags.includes(tag) ? 'bg-indigo-100 border-indigo-300 text-indigo-700' : 'bg-white border-gray-200 text-gray-500'}`}
                                  >
                                      {tag}
                                  </button>
                              ))}
                              {selectedTags.filter(t => !AVAILABLE_TAGS.includes(t)).map(tag => (
                                  <button
                                      key={tag}
                                      onClick={() => setSelectedTags(prev => prev.filter(t => t !== tag))}
                                      className="px-3 py-1 rounded-full text-xs font-bold border bg-indigo-100 border-indigo-300 text-indigo-700 flex items-center gap-1"
                                  >
                                      {tag} <X size={10} />
                                  </button>
                              ))}
                          </div>
                          
                          <div className="flex items-center gap-2">
                              <input 
                                type="text" 
                                className="flex-1 p-2 text-xs border border-gray-200 rounded-lg outline-none focus:border-indigo-300"
                                placeholder="添加自定义标签..."
                                value={customTagInput}
                                onChange={e => setCustomTagInput(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && addCustomTag()}
                              />
                              <button 
                                onClick={addCustomTag}
                                disabled={!customTagInput}
                                className="p-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 disabled:opacity-50"
                              >
                                  <Plus size={14} />
                              </button>
                          </div>
                      </div>
                  )}
              </div>

              <div className="p-4 border-t border-gray-100 bg-white">
                  {inputType === 'AI' ? (
                      <button 
                          onClick={handleGenerateAI}
                          disabled={loading || streamText.length > 0}
                          className="w-full py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-xl font-bold shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                          {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
                          {loading ? '创作中...' : '开始生成'}
                      </button>
                  ) : (
                      <button 
                          onClick={handleManualSave}
                          className="w-full py-3 bg-blue-500 text-white rounded-xl font-bold shadow-md flex items-center justify-center gap-2"
                      >
                          <Save size={18} /> 保存故事
                      </button>
                  )}
              </div>
          </div>
      </div>
  );

  const renderCharActionModal = () => {
      if (!selectedCharPair) return null;
      const isKnown = isCharacterKnown(selectedCharPair.char);

      return (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedCharPair(null)}>
              <div className="bg-white rounded-[2rem] p-6 shadow-2xl w-full max-w-xs animate-bounce-in relative" onClick={e => e.stopPropagation()}>
                  <button onClick={() => setSelectedCharPair(null)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"><X size={20}/></button>
                  
                  <div className="flex flex-col items-center mb-6">
                      <div className="text-2xl font-bold text-gray-500 mb-2">{selectedCharPair.pinyin || ' '}</div>
                      <div className="w-24 h-24 bg-gray-50 border-2 border-red-100 rounded-xl flex items-center justify-center text-6xl font-fun text-gray-800 mb-3 relative">
                          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'linear-gradient(to right, transparent 49%, #f87171 50%, transparent 51%), linear-gradient(to bottom, transparent 49%, #f87171 50%, transparent 51%), linear-gradient(45deg, transparent 49%, #f87171 50%, transparent 51%), linear-gradient(-45deg, transparent 49%, #f87171 50%, transparent 51%)', backgroundSize: '100% 100%'}}></div>
                          {selectedCharPair.char}
                      </div>
                      {isKnown && <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-bold flex items-center gap-1"><CheckCircle size={10}/> 已认识</span>}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                      <button onClick={() => handleCharAction('READ')} className="flex flex-col items-center justify-center p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 gap-1">
                          <Volume2 size={20}/> <span className="text-xs font-bold">朗读</span>
                      </button>
                      <button onClick={() => handleCharAction('STUDY')} className="flex flex-col items-center justify-center p-3 bg-indigo-50 text-indigo-600 rounded-xl hover:bg-indigo-100 gap-1">
                          <GraduationCap size={20}/> <span className="text-xs font-bold">学习 (AI)</span>
                      </button>
                      <button onClick={() => handleCharAction('KNOWN')} className="flex flex-col items-center justify-center p-3 border-2 border-green-100 text-green-600 rounded-xl hover:bg-green-50 gap-1">
                          <Check size={20}/> <span className="text-xs font-bold">认识</span>
                      </button>
                      <button onClick={() => handleCharAction('UNKNOWN')} className="flex flex-col items-center justify-center p-3 border-2 border-orange-100 text-orange-600 rounded-xl hover:bg-orange-50 gap-1">
                          <BookOpen size={20}/> <span className="text-xs font-bold">生字本</span>
                      </button>
                  </div>
              </div>
          </div>
      );
  };

  return (
    <div className="max-w-7xl mx-auto min-h-screen bg-amber-50 pb-24 flex flex-col relative h-[100dvh] overflow-hidden">
       
       {/* --- Top Bar (Search & Filter) --- */}
       {!currentStory && (
           <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md shadow-sm p-4 space-y-3 shrink-0">
               <div className="flex justify-between items-center gap-4">
                   <div className="flex items-center gap-2">
                       <BookOpen className="text-amber-500" size={24}/>
                       <h1 className="text-2xl font-bold text-gray-800">阅读</h1>
                   </div>
                   
                   <div className="flex items-center gap-2">
                       {/* Coins Display */}
                       <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full text-yellow-700 font-bold text-sm border border-yellow-200">
                           <Coins size={16} fill="currentColor" />
                           <span>{coins}</span>
                       </div>

                       <div className="flex-1 max-w-[140px] bg-gray-100 rounded-full flex items-center px-4 py-2 transition-all focus-within:ring-2 focus-within:ring-amber-200">
                           <Search size={16} className="text-gray-400 mr-2 shrink-0"/>
                           <input 
                              type="text" 
                              placeholder="搜索..." 
                              className="bg-transparent w-full outline-none text-sm"
                              value={searchQuery}
                              onChange={e => setSearchQuery(e.target.value)}
                           />
                       </div>
                   </div>
               </div>
               
               {/* Horizontal Tags Scroll */}
               <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                   <button 
                      onClick={() => setActiveTagFilter('ALL')}
                      className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${activeTagFilter === 'ALL' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-500'}`}
                   >
                       全部
                   </button>
                   {AVAILABLE_TAGS.map(tag => (
                       <button
                           key={tag}
                           onClick={() => setActiveTagFilter(tag)}
                           className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${activeTagFilter === tag ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-500'}`}
                       >
                           {tag}
                       </button>
                   ))}
               </div>
           </div>
       )}

       {!currentStory ? (
         // List View
         <div className="p-4 space-y-4 animate-fade-in relative flex-1 overflow-y-auto">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-32">
                 {activeStories.length === 0 && (
                     <div className="col-span-full text-center py-20 text-gray-400 flex flex-col items-center">
                         <BookOpen size={48} className="mb-4 opacity-20"/>
                         <p>没有找到相关故事</p>
                         <button onClick={() => setShowInputModal(true)} className="mt-4 text-amber-500 font-bold">创建一个？</button>
                     </div>
                 )}

                 {/* Active Stories */}
                 {activeStories.map(story => (
                     <div 
                       key={story.id} 
                       onClick={() => openStory(story)}
                       className="bg-white p-4 rounded-2xl border border-amber-100 shadow-sm cursor-pointer hover:border-amber-300 transition-all flex flex-col gap-3 group relative overflow-hidden h-full"
                     >
                         <div className="flex justify-between items-start">
                             <div className="flex items-center gap-3">
                                 <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-500">
                                     {story.source === 'MANUAL' ? <PenTool size={18}/> : <Sparkles size={18}/>}
                                 </div>
                                 <div>
                                     <h3 className="font-bold text-gray-800 text-lg line-clamp-1">{story.title}</h3>
                                     <div className="flex items-center gap-2 text-xs text-gray-400">
                                         <span>{new Date(story.createdAt).toLocaleDateString()}</span>
                                         <span>· {story.content.length} 字</span>
                                     </div>
                                 </div>
                             </div>
                             <div className="flex items-center gap-1">
                                <button 
                                    onClick={(e) => handleArchive(story, e)}
                                    className="p-2 text-gray-300 hover:text-blue-500 transition-colors"
                                    title="归档"
                                >
                                    <Archive size={18} />
                                </button>
                                <button 
                                    onClick={(e) => handleDelete(story.id, e)}
                                    className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                                    title="删除"
                                >
                                    <Trash2 size={18} />
                                </button>
                             </div>
                         </div>
                         
                         {/* Tags & Preview */}
                         <div className="flex items-center gap-2 flex-wrap">
                             {story.tags?.map(tag => (
                                 <span key={tag} className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md font-medium">
                                     {tag}
                                 </span>
                             ))}
                         </div>
                         <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed bg-gray-50 p-2 rounded-lg mt-auto">
                             {story.content.map(c => c.char).join('').substring(0, 50)}...
                         </p>
                     </div>
                 ))}
             </div>
             
             {/* Archived Section */}
             {archivedStories.length > 0 && (
                 <div className="mt-8 pb-32">
                     <h3 className="text-gray-400 font-bold text-sm mb-4 flex items-center gap-2">
                         <Archive size={16}/> 已读完归档
                     </h3>
                     <div className="opacity-70 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {archivedStories.map(story => (
                            <div 
                            key={story.id} 
                            onClick={() => openStory(story)}
                            className="bg-gray-50 p-4 rounded-2xl border border-gray-200 flex justify-between items-center cursor-pointer"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="text-gray-400"><Check size={20} /></div>
                                    <div>
                                        <h3 className="font-bold text-gray-600 text-sm">{story.title}</h3>
                                        <p className="text-xs text-gray-400">已读 {story.readCount} 次</p>
                                    </div>
                                </div>
                                <button 
                                    onClick={(e) => handleArchive(story, e)}
                                    className="p-2 text-gray-300 hover:text-blue-500 transition-colors"
                                >
                                    <RotateCcw size={16} />
                                </button>
                            </div>
                        ))}
                     </div>
                 </div>
             )}

             {/* Floating Action Button for New Story */}
             <button
                onClick={() => setShowInputModal(true)}
                className="fixed bottom-24 right-6 z-40 bg-gradient-to-r from-amber-400 to-orange-500 text-white p-4 rounded-full shadow-lg shadow-orange-200 hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
             >
                <Sparkles size={24} fill="white" />
             </button>

         </div>
       ) : (
         // Reader View - Fixed Layer allowing Bottom Nav to show
         // z-40 sits below z-50 nav bar but above regular content
         // bottom-[90px] preserves space for the app's bottom navigation
         // Centered on large screens with max-w-7xl
         <div className="fixed top-0 bottom-[90px] left-1/2 -translate-x-1/2 w-full max-w-7xl z-40 bg-white flex flex-col animate-fade-in shadow-2xl border-x border-gray-100">
             {/* Header */}
             <div className="bg-white p-2 shadow-sm flex items-center justify-between z-10 border-b border-gray-100 shrink-0 h-14">
                 <button onClick={() => setCurrentStory(null)} className="text-gray-500 font-bold px-2 flex items-center gap-1 hover:text-gray-800">
                    <RotateCcw size={18}/> 返回
                 </button>
                 <div className="flex flex-col items-center flex-1 mx-4 overflow-hidden">
                     {isEditingTitle ? (
                         <input 
                            autoFocus
                            type="text" 
                            className="text-lg font-bold text-center border-b-2 border-amber-300 outline-none w-full bg-transparent"
                            value={editTitleValue}
                            onChange={e => setEditTitleValue(e.target.value)}
                            onBlur={saveTitleEdit}
                            onKeyDown={e => e.key === 'Enter' && saveTitleEdit()}
                         />
                     ) : (
                        <div 
                           onClick={() => {
                               setEditTitleValue(currentStory.title);
                               setIsEditingTitle(true);
                           }}
                           className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-3 py-1 rounded-lg group"
                           title="点击修改标题"
                        >
                            <h2 className="font-bold text-lg truncate">{currentStory.title}</h2>
                            <Edit2 size={14} className="text-gray-300 group-hover:text-amber-500" />
                        </div>
                     )}
                 </div>
                 
                 {/* Removed Read Aloud Button as requested */}
                 <div className="w-8"></div>
             </div>
             
             {/* Reward Notification Overlay */}
             {hasAwardedCoins && (
                 <div className="absolute top-16 left-1/2 -translate-x-1/2 z-50 bg-yellow-100 border border-yellow-300 text-yellow-800 px-4 py-2 rounded-full font-bold shadow-lg animate-bounce-in flex items-center gap-2">
                     <Coins size={18} fill="currentColor" />
                     +{totalPages * 10} 阅读币
                 </div>
             )}

             {/* 
                 READER CONTENT 
                 Uses strict CSS Grid layout for perfect alignment.
                 The cell size is responsive.
                 We calculate gridCols state based on window width.
                 Added overflow-y-auto to allow scrolling if content overflows vertically on small screens.
             */}
             <div className="flex-1 overflow-y-auto bg-white flex flex-col items-center justify-center p-2 relative">
                 <div className="w-full max-w-7xl flex flex-col items-center my-auto">
                     <div 
                         className="border border-red-300 shadow-sm bg-white overflow-hidden p-px box-content grid"
                         style={{ 
                             gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`
                         }}
                     >
                         {pageCells.map((item, idx) => (
                             <WritingGrid 
                               key={item.id}
                               char={item.char}
                               pinyin={item.pinyin}
                               variant="notebook"
                               onClick={() => handleCharClick(item)} 
                             />
                         ))}
                     </div>
                 </div>
             </div>

             {/* Footer Pagination Bar - Compact & Cleaned */}
             <div className="bg-white flex items-center justify-center gap-6 px-4 py-2 shrink-0 h-14">
                  <button 
                    onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                    disabled={currentPage === 0}
                    className="p-2 rounded-full bg-white shadow-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-amber-100 transition-colors text-amber-700 border border-gray-100"
                  >
                      <ChevronLeft size={20} />
                  </button>

                  <div className="flex flex-col items-center min-w-[80px]">
                      <span className="text-xs font-bold text-amber-800">
                          第 {currentPage + 1} / {totalPages} 页
                      </span>
                      {/* Archive Button only on last page */}
                      {currentPage === totalPages - 1 && !currentStory.isArchived && (
                          <button 
                             onClick={(e) => {
                                 handleArchive(currentStory, e);
                                 setCurrentStory(null);
                             }}
                             className="mt-0.5 text-[10px] bg-green-500 text-white px-2 py-0.5 rounded-full font-bold flex items-center gap-1 hover:bg-green-600 transition-colors shadow-sm"
                          >
                              <Check size={10} /> 读完归档
                          </button>
                      )}
                  </div>

                  <button 
                    onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
                    disabled={currentPage === totalPages - 1}
                    className="p-2 rounded-full bg-white shadow-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-amber-100 transition-colors text-amber-700 border border-gray-100"
                  >
                      <ChevronRight size={20} />
                  </button>
             </div>
         </div>
       )}

       {/* Creation Modal */}
       {showInputModal && renderInputModal()}
       
       {/* Character Action Modal */}
       {renderCharActionModal()}

    </div>
  );
};
