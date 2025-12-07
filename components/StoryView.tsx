import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Sparkles, Trash2, Volume2, Save, Plus, Archive, RotateCcw, Check, Loader2, Camera, PenTool, Search, Tag, X, CheckCircle, GraduationCap } from 'lucide-react';
import { Story, CharPair, Character } from '../types';
import { getStories, saveStory, deleteStory, getKnownCharacters, getUnknownCharacters, addUnknownCharacter, addKnownCharacter, isCharacterKnown } from '../services/storage';
import { generateStoryStream, recognizeTextFromImage } from '../services/geminiService';
import { speakText, WritingGrid } from './SharedComponents';
import { findCharacterPinyin } from '../data/dictionary';

// Helper to generate a UUID
const generateId = () => Date.now().toString(36) + Math.random().toString(36).substring(2);

const AVAILABLE_TAGS = ["一年级", "二年级", "三年级", "寓言", "童话", "古诗", "日常", "动物", "植物"];

export const StoryView: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [currentStory, setCurrentStory] = useState<Story | null>(null);
  
  // Create/Input State
  const [showInputModal, setShowInputModal] = useState(false);
  const [inputType, setInputType] = useState<'AI' | 'MANUAL' | 'OCR'>('AI');
  const [manualTitle, setManualTitle] = useState('');
  const [manualContent, setManualContent] = useState('');
  const [keywords, setKeywords] = useState(''); // For AI
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [streamText, setStreamText] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTagFilter, setActiveTagFilter] = useState('ALL');

  // Reader Interaction State
  const [selectedCharPair, setSelectedCharPair] = useState<CharPair | null>(null);

  useEffect(() => {
    setStories(getStories());
  }, []);

  // --- Actions ---

  const handleGenerateAI = async () => {
    setLoading(true);
    setStreamText(''); 
    
    const known = getKnownCharacters();
    const unknown = getUnknownCharacters();
    const available = [...known, ...unknown];
    
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

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onloadend = async () => {
          const base64 = reader.result as string;
          setLoading(true);
          try {
              const result = await recognizeTextFromImage(base64);
              setManualTitle(result.title);
              setManualContent(result.content);
              setInputType('MANUAL'); // Switch to manual view to edit/confirm
          } catch (err) {
              alert("图片识别失败，请重试");
          } finally {
              setLoading(false);
          }
      };
      reader.readAsDataURL(file);
  };

  // Common finalization for all methods
  const saveNewStory = (title: string, contentStr: string, source: 'AI' | 'MANUAL' | 'OCR') => {
      const content: CharPair[] = contentStr.split('').map(char => {
          // Keep alphanumeric and chinese chars, split others
          // 0-9 are now allowed
          if (!char.match(/[\u4e00-\u9fa5a-zA-Z0-9]/)) {
               // Treat as punctuation
               if (char.trim() === '') return { char: '', pinyin: '' }; // skip pure whitespace
               return { char, pinyin: '' };
          }
          return {
              char,
              pinyin: findCharacterPinyin(char) || ''
          };
      });

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
      
      // Reset
      setShowInputModal(false);
      setKeywords('');
      setStreamText('');
      setManualTitle('');
      setManualContent('');
      setSelectedTags([]);
  };

  // Watch for AI stream finish
  useEffect(() => {
      if (!loading && streamText.length > 10 && inputType === 'AI' && showInputModal) {
          const lines = streamText.split('\n').filter(l => l.trim() !== '');
          const title = lines[0]?.replace(/^#+\s*/, '') || '无题';
          const content = lines.slice(1).join('\n');
          saveNewStory(title, content, 'AI');
      }
  }, [loading, streamText]);

  // --- Story Management ---

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

  const readStory = () => {
      if(!currentStory) return;
      const text = currentStory.content.map(c => c.char).join('');
      speakText(text);
  };

  // --- Character Interaction ---

  const handleCharClick = (charPair: CharPair) => {
      // Don't open for punctuation (empty char or special symbols), but allow numbers and chinese
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
              // Since StoryView is inside App, we need a way to trigger GameView.
              // Currently not strictly wired via props in this simplified component tree.
              // In a real app, we'd use a context or callback.
              // For this version, we will simulate by speaking and maybe saving to Unknown
              speakText(`学习: ${selectedCharPair.char}`);
              // Note: Ideally this would navigate to GameView with this char
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


  // --- Filtering ---
  const filteredStories = stories.filter(s => {
      const matchesSearch = s.title.includes(searchQuery) || 
                            s.content.some(c => c.char.includes(searchQuery));
      const matchesTag = activeTagFilter === 'ALL' || s.tags?.includes(activeTagFilter);
      return matchesSearch && matchesTag;
  });

  const activeStories = filteredStories.filter(s => !s.isArchived);
  const archivedStories = filteredStories.filter(s => s.isArchived);

  // --- Renders ---

  const renderInputModal = () => (
      <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white w-full max-w-lg h-[90vh] sm:h-auto sm:max-h-[90vh] sm:rounded-3xl rounded-t-3xl shadow-2xl flex flex-col animate-slide-up overflow-hidden">
              <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-amber-50">
                  <h3 className="font-bold text-lg text-amber-900 flex items-center gap-2">
                      {inputType === 'AI' && <Sparkles size={20}/>}
                      {inputType === 'MANUAL' && <PenTool size={20}/>}
                      {inputType === 'OCR' && <Camera size={20}/>}
                      {inputType === 'AI' ? 'AI 创作故事' : '录入新故事'}
                  </h3>
                  <button onClick={() => setShowInputModal(false)} className="p-2 hover:bg-amber-100 rounded-full"><X size={20}/></button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {/* Mode Switcher */}
                  {!loading && !streamText && (
                      <div className="flex bg-gray-100 p-1 rounded-xl mb-4">
                          <button onClick={() => setInputType('AI')} className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${inputType === 'AI' ? 'bg-white shadow text-amber-600' : 'text-gray-400'}`}>AI 生成</button>
                          <button onClick={() => setInputType('MANUAL')} className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${inputType === 'MANUAL' ? 'bg-white shadow text-blue-600' : 'text-gray-400'}`}>手动录入</button>
                          <button onClick={() => fileInputRef.current?.click()} className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${inputType === 'OCR' ? 'bg-white shadow text-green-600' : 'text-gray-400'}`}>拍照识别</button>
                          <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileUpload} />
                      </div>
                  )}

                  {/* AI Mode */}
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
                              </div>
                          )}
                      </div>
                  )}

                  {/* Manual Mode */}
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

                  {/* Tag Selector (Common) */}
                  {!streamText && (
                      <div>
                          <label className="block text-sm font-bold text-gray-500 mb-2 flex items-center gap-1"><Tag size={14}/> 分类标签 (分级)</label>
                          <div className="flex flex-wrap gap-2">
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
                          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'linear-gradient(to right, transparent 49%, #f87171 50%, transparent 51%), linear-gradient(to bottom, transparent 49%, #f87171 50%, transparent 51%)', backgroundSize: '100% 100%'}}></div>
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
    <div className="max-w-4xl mx-auto min-h-screen bg-amber-50 pb-24 flex flex-col relative">
       
       {/* --- Top Bar (Search & Filter) --- */}
       {!currentStory && (
           <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md shadow-sm p-4 space-y-3">
               <div className="flex justify-between items-center gap-4">
                   <div className="flex items-center gap-2">
                       <BookOpen className="text-amber-500" size={24}/>
                       <h1 className="text-2xl font-bold text-gray-800">阅读</h1>
                   </div>
                   
                   <div className="flex-1 max-w-xs bg-gray-100 rounded-full flex items-center px-4 py-2 transition-all focus-within:ring-2 focus-within:ring-amber-200">
                       <Search size={16} className="text-gray-400 mr-2 shrink-0"/>
                       <input 
                          type="text" 
                          placeholder="搜索故事..." 
                          className="bg-transparent w-full outline-none text-sm"
                          value={searchQuery}
                          onChange={e => setSearchQuery(e.target.value)}
                       />
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
         <div className="p-4 space-y-4 animate-fade-in relative min-h-[50vh]">
             <div className="grid gap-4 pb-20">
                 {activeStories.length === 0 && (
                     <div className="text-center py-20 text-gray-400 flex flex-col items-center">
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
                       className="bg-white p-4 rounded-2xl border border-amber-100 shadow-sm cursor-pointer hover:border-amber-300 transition-all flex flex-col gap-3 group relative overflow-hidden"
                     >
                         <div className="flex justify-between items-start">
                             <div className="flex items-center gap-3">
                                 <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-500">
                                     {story.source === 'MANUAL' ? <PenTool size={18}/> : story.source === 'OCR' ? <Camera size={18}/> : <Sparkles size={18}/>}
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
                         <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed bg-gray-50 p-2 rounded-lg">
                             {story.content.map(c => c.char).join('').substring(0, 50)}...
                         </p>
                     </div>
                 ))}

                 {/* Archived Section */}
                 {archivedStories.length > 0 && (
                     <div className="mt-8">
                         <h3 className="text-gray-400 font-bold text-sm mb-4 flex items-center gap-2">
                             <Archive size={16}/> 已读完归档
                         </h3>
                         <div className="opacity-70 grid gap-3">
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
             </div>

             {/* Floating Action Button for New Story */}
             <button
                onClick={() => setShowInputModal(true)}
                className="fixed bottom-24 right-6 z-40 bg-gradient-to-r from-amber-400 to-orange-500 text-white p-4 rounded-full shadow-lg shadow-orange-200 hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
             >
                <Sparkles size={24} fill="white" />
             </button>

         </div>
       ) : (
         // Reader View
         <div className="flex flex-col h-full animate-fade-in bg-white min-h-screen">
             <div className="bg-white p-4 shadow-sm flex items-center justify-between sticky top-0 z-10 border-b border-gray-100">
                 <button onClick={() => setCurrentStory(null)} className="text-gray-500 font-bold px-2 flex items-center gap-1">
                    <RotateCcw size={16}/> 返回
                 </button>
                 <div className="flex flex-col items-center">
                     <h2 className="font-bold text-lg max-w-[150px] truncate">{currentStory.title}</h2>
                     {currentStory.tags && <span className="text-[10px] text-gray-400">{currentStory.tags.join(', ')}</span>}
                 </div>
                 <button onClick={readStory} className="p-2 bg-amber-100 text-amber-600 rounded-full hover:bg-amber-200">
                    <Volume2 size={20} />
                 </button>
             </div>

             <div className="flex-1 p-4 overflow-y-auto pb-32">
                 <div className="max-w-2xl mx-auto">
                     <div className="flex flex-wrap gap-x-2 gap-y-4 leading-loose justify-center content-start">
                         {currentStory.content.map((item, idx) => (
                             <WritingGrid 
                               key={idx}
                               char={item.char}
                               pinyin={item.pinyin}
                               onClick={() => handleCharClick(item)} // Open modal instead of just speaking
                             />
                         ))}
                     </div>
                     
                     {!currentStory.isArchived && (
                         <div className="mt-16 flex justify-center pb-8">
                             <button 
                                onClick={(e) => {
                                    handleArchive(currentStory, e);
                                    setCurrentStory(null);
                                }}
                                className="px-8 py-4 bg-green-500 text-white rounded-full font-bold flex items-center gap-2 hover:bg-green-600 transition-colors shadow-lg shadow-green-200"
                             >
                                 <Check size={20} /> 我读完了，归档
                             </button>
                         </div>
                     )}
                 </div>
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