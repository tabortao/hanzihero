
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { BookOpen, Sparkles, Trash2, Volume2, Save, Plus, Archive, RotateCcw, Check, Loader2, PenTool, Search, Tag, X, CheckCircle, GraduationCap, Edit2, ChevronLeft, ChevronRight, Coins, Camera, Image as ImageIcon, Wand2, Type, Star, Filter } from 'lucide-react';
import { Story, CharPair, Character, VisionPrompt } from '../types';
import { getStories, saveStory, deleteStory, getKnownCharacters, getUnknownCharacters, addUnknownCharacter, addKnownCharacter, isCharacterKnown, getReadingCoins, addReadingCoins, getVisionPrompts, saveVisionPrompt, deleteVisionPrompt } from '../services/storage';
import { generateStoryStream, recognizeTextFromImage } from '../services/geminiService';
import { speakText, WritingGrid } from './SharedComponents';
import { findCharacterPinyin } from '../data/dictionary';
import confetti from 'canvas-confetti';

// Helper to generate a UUID
const generateId = () => Date.now().toString(36) + Math.random().toString(36).substring(2);

const AVAILABLE_TAGS = ["一年级", "二年级", "三年级", "寓言", "童话", "古诗", "日常", "动物", "植物", "单元复习"];

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
  
  // Modal Mode: AI Generation, Manual/Type, Photo Recognition
  const [modalTab, setModalTab] = useState<'AI' | 'MANUAL' | 'PHOTO'>('AI');
  
  // Manual/Result Fields
  const [manualTitle, setManualTitle] = useState('');
  const [manualContent, setManualContent] = useState('');
  
  // AI Params
  const [keywords, setKeywords] = useState(''); 
  const [streamText, setStreamText] = useState('');

  // Photo Params
  const [recognitionMode, setRecognitionMode] = useState<'OCR' | 'STORY' | 'CUSTOM'>('OCR');
  const [photoPrompt, setPhotoPrompt] = useState('');
  const [customPrompts, setCustomPrompts] = useState<VisionPrompt[]>([]);
  const [selectedPromptId, setSelectedPromptId] = useState<string>('');
  
  // Common
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [customTagInput, setCustomTagInput] = useState(''); 
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(''); // New: To show "Processing 1/3..."
  
  // Vision / Camera State
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isAnalyzingRef = useRef(false); // To handle cancellation

  // Reader Edit State
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [editTitleValue, setEditTitleValue] = useState('');

  // Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTagFilter, setActiveTagFilter] = useState('ALL');
  const [showTagFilterDropdown, setShowTagFilterDropdown] = useState(false);

  // Reader Interaction State
  const [selectedCharPair, setSelectedCharPair] = useState<CharPair | null>(null);

  // Grid Layout State
  const [gridCols, setGridCols] = useState(9);
  const [rowsPerPage, setRowsPerPage] = useState(8);

  useEffect(() => {
    setStories(getStories());
    setCoins(getReadingCoins());
    setCustomPrompts(getVisionPrompts());
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
    const updateLayout = () => {
        const w = window.innerWidth;
        if (w < 768) { 
            // Mobile: Fixed 9 columns, 8 rows (72 chars/page)
            setGridCols(9);
            setRowsPerPage(8);
        } else {
            // Tablet & Desktop: Auto arrange based on size
            // We'll increase columns for wider screens
            if (w >= 1280) {
                 setGridCols(14);
                 setRowsPerPage(8);
            } else if (w >= 1024) {
                 setGridCols(12);
                 setRowsPerPage(8);
            } else {
                 setGridCols(10); // Medium tablets
                 setRowsPerPage(8);
            }
        }
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  // Handle Initial Context (e.g., coming from Unit selection)
  useEffect(() => {
      if (initialContext) {
          setShowInputModal(true);
          setModalTab('AI');
          setKeywords(initialContext.topic);
          setSelectedTags(['单元复习']);
      }
  }, [initialContext]);

  // Update Photo Prompt based on Mode
  useEffect(() => {
      // If a specific prompt is selected, it takes precedence
      if (selectedPromptId) {
          const p = customPrompts.find(c => c.id === selectedPromptId);
          if(p) {
              setPhotoPrompt(p.text);
              return;
          }
      }

      // Default prompts for modes
      if (recognitionMode === 'OCR') {
          setPhotoPrompt("任务：提取文字。\n请将图片中所有的汉字、标点符号完整的提取出来，不提取拼音、页眉和页脚。如原文每行字数较少换行较多，请自动优化段落排版；如原文每段字数较多，保持原文的格式。");
      } else if (recognitionMode === 'STORY') {
          setPhotoPrompt("任务：看图写话。\n请仔细观察这张图片，发挥想象力，用生动有趣、适合小学生阅读的语言（一年级水平），根据画面内容编写一个小故事。");
      } 
      // CUSTOM mode preserves current input unless prompt ID selected
  }, [recognitionMode, selectedPromptId, customPrompts]);

  // Get all unique tags from stories + default
  const allUserTags = useMemo(() => {
      const tagSet = new Set<string>(AVAILABLE_TAGS);
      stories.forEach(s => {
          if (s.tags) s.tags.forEach(t => tagSet.add(t));
      });
      return Array.from(tagSet);
  }, [stories]);

  const handleCloseModal = () => {
      setShowInputModal(false);
      setKeywords('');
      setStreamText('');
      setManualTitle('');
      setManualContent('');
      setSelectedTags([]);
      setCustomTagInput('');
      setLoading(false);
      setLoadingMessage('');
      // Logic cancellation
      isAnalyzingRef.current = false; 
      if(onClearContext) onClearContext();
  };

  // --- Actions ---

  const handleGenerateAI = async () => {
    setLoading(true);
    setLoadingMessage('');
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
    } catch (e: any) {
        // Show detailed error message
        alert(e.message || "生成失败，请检查网络或 AI 设置");
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
      saveNewStory(manualTitle, manualContent, modalTab === 'AI' ? 'AI' : (modalTab === 'PHOTO' ? 'OCR' : 'MANUAL'));
  };
  
  // --- Vision / Camera Handlers ---
  const handleCameraClick = () => {
      fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (!files || files.length === 0) return;

      setLoading(true);
      isAnalyzingRef.current = true;
      
      let combinedContent = "";
      let firstTitle = "";
      const totalFiles = files.length;
      let successCount = 0;
      let failCount = 0;

      try {
          for (let i = 0; i < totalFiles; i++) {
              if (!isAnalyzingRef.current) break; // Cancelled

              const file = files[i];
              
              // Simple Validation
              if (!file.type.startsWith('image/')) {
                  continue;
              }

              // Update message for multiple files
              if (totalFiles > 1) {
                  setLoadingMessage(`正在处理第 ${i + 1} / ${totalFiles} 张图片...`);
              } else {
                  setLoadingMessage(modalTab === 'PHOTO' ? '正在识别图片内容...' : '');
              }

              try {
                  const base64 = await convertFileToBase64(file);
                  // Pass the specific prompt based on user selection
                  const result = await recognizeTextFromImage(base64, photoPrompt || undefined);
                  
                  if (result) {
                      // Use title from the first valid image, or update if still empty
                      if (!firstTitle) firstTitle = result.title;
                      
                      // Concatenate content
                      if (combinedContent) combinedContent += "\n\n";
                      combinedContent += result.content;
                      successCount++;
                  }
              } catch (innerErr) {
                  console.warn(`Failed to process image ${i+1}:`, innerErr);
                  failCount++;
              }
          }

          if (isAnalyzingRef.current) {
              if (combinedContent) {
                  setManualTitle(prev => prev || firstTitle);
                  setManualContent(prev => (prev ? prev + "\n\n" : "") + combinedContent);
                  
                  // Switch to Manual tab to show result for editing
                  setModalTab('MANUAL'); 
                  
                  // Add appropriate tags
                  const newTags = [...selectedTags];
                  if (!newTags.includes('拍照识别')) newTags.push('拍照识别');
                  if (recognitionMode === 'OCR' && !newTags.includes('绘本')) newTags.push('绘本');
                  if (recognitionMode === 'STORY' && !newTags.includes('看图说话')) newTags.push('看图说话');
                  setSelectedTags(newTags);
                  
                  if (failCount > 0) {
                      alert(`识别完成！成功 ${successCount} 张，失败 ${failCount} 张。\n请检查内容是否完整。`);
                  }
              } else {
                   throw new Error("未能识别出有效内容，请重试或检查图片清晰度。");
              }
          }

      } catch (err: any) {
          if (!isAnalyzingRef.current) return;
          console.error(err);
          alert(err.message || "图片识别失败，请检查网络或 API 配置");
      } finally {
          if (isAnalyzingRef.current) {
              setLoading(false);
              setLoadingMessage('');
              isAnalyzingRef.current = false;
              // Reset input
              e.target.value = '';
          }
      }
  };

  const handleSavePrompt = () => {
      if (!photoPrompt.trim()) {
          alert("提示词内容不能为空");
          return;
      }
      const alias = prompt("给这个提示词起个名字：", "我的自定义提示词");
      if (alias) {
          const newPrompt: VisionPrompt = {
              id: generateId(),
              alias,
              text: photoPrompt
          };
          saveVisionPrompt(newPrompt);
          setCustomPrompts(getVisionPrompts());
          setSelectedPromptId(newPrompt.id);
          alert("保存成功！您可以在“选择常用”中找到它。");
      }
  };

  const handleDeletePrompt = () => {
      if (!selectedPromptId) return;
      if (confirm("确定要删除这个提示词吗？")) {
          deleteVisionPrompt(selectedPromptId);
          setCustomPrompts(getVisionPrompts());
          setSelectedPromptId('');
          // Revert to default text for current mode
          if (recognitionMode === 'OCR') {
              setPhotoPrompt("任务：提取文字。\n请将图片中所有的汉字、标点符号完整的提取出来，不提取拼音、页眉和页脚。如原文每行字数较少换行较多，请自动优化段落排版；如原文每段字数较多，保持原文的格式。");
          } else if (recognitionMode === 'STORY') {
              setPhotoPrompt("任务：看图写话。\n请仔细观察这张图片，发挥想象力，用生动有趣、适合小学生阅读的语言（一年级水平），根据画面内容编写一个小故事。");
          } else {
              setPhotoPrompt('');
          }
      }
  };

  const convertFileToBase64 = (file: File): Promise<string> => {
      return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = error => reject(error);
      });
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
      if (!loading && streamText.length > 10 && modalTab === 'AI' && showInputModal) {
          const lines = streamText.split('\n').filter(l => l.trim() !== '');
          const title = lines[0]?.replace(/^#+\s*/, '') || '无题';
          const content = lines.slice(1).join('\n');
          
          setManualTitle(title);
          setManualContent(content);
          setModalTab('MANUAL');
          if (!selectedTags.includes('AI生成')) {
              setSelectedTags(prev => [...prev, 'AI生成']);
          }
      }
  }, [loading, streamText]);

  const handleDelete = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if(window.confirm("确定要删除这篇短文吗？")) {
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
      const itemsPerPage = gridCols * rowsPerPage;
      const total = Math.ceil(allCells.length / itemsPerPage);
      
      // Get current page slice
      let slice = allCells.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
      
      // Pad the last page to look full if it's the last page
      while (slice.length < itemsPerPage) {
          slice.push({ char: '', pinyin: '', id: `end-pad-${slice.length}` });
      }

      return { pageCells: slice, totalPages: total };

  }, [currentStory, gridCols, rowsPerPage, currentPage]);


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
              <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-amber-50 shrink-0">
                  <h3 className="font-bold text-lg text-amber-900 flex items-center gap-2">
                      {modalTab === 'AI' && <Sparkles size={20}/>}
                      {modalTab === 'MANUAL' && <PenTool size={20}/>}
                      {modalTab === 'PHOTO' && <Camera size={20}/>}
                      {modalTab === 'AI' ? 'AI 创作故事' : modalTab === 'PHOTO' ? '拍照/图片识别' : '编辑故事'}
                  </h3>
                  <button onClick={handleCloseModal} className="p-2 hover:bg-amber-100 rounded-full"><X size={20}/></button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {/* Mode Tabs */}
                  <div className="flex bg-gray-100 p-1 rounded-xl mb-4 shrink-0">
                      <button onClick={() => setModalTab('AI')} className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-1 ${modalTab === 'AI' ? 'bg-white shadow text-amber-600' : 'text-gray-400'}`}>
                          <Sparkles size={14}/> AI生成
                      </button>
                      <button onClick={() => setModalTab('PHOTO')} className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-1 ${modalTab === 'PHOTO' ? 'bg-white shadow text-purple-600' : 'text-gray-400'}`}>
                          <Camera size={14}/> 拍照识别
                      </button>
                      <button onClick={() => setModalTab('MANUAL')} className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-1 ${modalTab === 'MANUAL' ? 'bg-white shadow text-blue-600' : 'text-gray-400'}`}>
                          <Edit2 size={14}/> 手动/编辑
                      </button>
                  </div>
                  
                  {/* Loading Overlay */}
                   {loading && (
                      <div className="absolute inset-0 bg-white/80 z-20 flex flex-col items-center justify-center backdrop-blur-sm">
                          <Loader2 className="animate-spin text-blue-500 mb-2" size={40} />
                          <p className="text-blue-600 font-bold">
                              {loadingMessage || (modalTab === 'PHOTO' ? '正在识别图片内容...' : 'AI 正在创作中...')}
                          </p>
                          <p className="text-xs text-gray-400 mt-2">
                             {modalTab === 'PHOTO' ? '图片越清晰，文字越多，识别时间可能稍长...' : '正在构思精彩的故事...'}
                          </p>
                          <button onClick={() => { isAnalyzingRef.current = false; setLoading(false); }} className="mt-4 px-4 py-2 bg-gray-100 rounded-full text-xs font-bold text-gray-500">取消</button>
                      </div>
                  )}

                  {/* AI Mode Content */}
                  {modalTab === 'AI' && (
                      <div className="space-y-4">
                          {streamText ? (
                              <div className="bg-amber-50 p-4 rounded-xl text-sm leading-relaxed whitespace-pre-wrap min-h-[200px] border border-amber-200 animate-fade-in">
                                  {streamText}
                                  {loading && <span className="inline-block w-2 h-4 bg-amber-500 ml-1 animate-pulse"/>}
                              </div>
                          ) : (
                              <div>
                                  <label className="block text-sm font-bold text-gray-500 mb-2">故事主题关键词</label>
                                  <input 
                                      type="text" 
                                      className="w-full p-4 rounded-xl border border-gray-200 focus:border-amber-400 outline-none transition-all"
                                      placeholder="例如：春天、小狗、勇敢..."
                                      value={keywords}
                                      onChange={e => setKeywords(e.target.value)}
                                  />
                                  {initialContext && (
                                     <p className="text-xs text-green-600 mt-2 flex items-center gap-1"><CheckCircle size={12}/> 已根据选择的单元设置了识字范围</p>
                                  )}
                                  
                                  <div className="mt-6 bg-amber-50/50 p-4 rounded-xl border border-amber-100 text-xs text-amber-700">
                                      <p className="font-bold mb-1">💡 提示：</p>
                                      <p>AI 会优先使用你“我的字库”中已掌握的汉字来编写故事，帮助你巩固复习。</p>
                                  </div>
                              </div>
                          )}
                      </div>
                  )}

                  {/* Photo Mode Content */}
                  {modalTab === 'PHOTO' && (
                      <div className="space-y-5 animate-fade-in">
                          <div>
                              <label className="block text-sm font-bold text-gray-700 mb-3">1. 选择识别模式</label>
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                  <button 
                                      onClick={() => {
                                          setRecognitionMode('OCR');
                                          setSelectedPromptId('');
                                      }}
                                      className={`p-3 rounded-xl border-2 text-left transition-all ${recognitionMode === 'OCR' ? 'border-purple-500 bg-purple-50 text-purple-700' : 'border-gray-200 text-gray-500 hover:border-purple-200'}`}
                                  >
                                      <div className="font-bold text-sm mb-1 flex items-center gap-1"><Type size={16}/> 提取文字</div>
                                      <div className="text-[10px] opacity-70">识别绘本/课本上的文字内容</div>
                                  </button>
                                  <button 
                                      onClick={() => {
                                          setRecognitionMode('STORY');
                                          setSelectedPromptId('');
                                      }}
                                      className={`p-3 rounded-xl border-2 text-left transition-all ${recognitionMode === 'STORY' ? 'border-pink-500 bg-pink-50 text-pink-700' : 'border-gray-200 text-gray-500 hover:border-pink-200'}`}
                                  >
                                      <div className="font-bold text-sm mb-1 flex items-center gap-1"><Wand2 size={16}/> 看图写话</div>
                                      <div className="text-[10px] opacity-70">AI 根据图片画面编写有趣故事</div>
                                  </button>
                                  <button 
                                      onClick={() => {
                                          setRecognitionMode('CUSTOM');
                                          setSelectedPromptId('');
                                      }}
                                      className={`p-3 rounded-xl border-2 text-left transition-all ${recognitionMode === 'CUSTOM' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-500 hover:border-blue-200'}`}
                                  >
                                      <div className="font-bold text-sm mb-1 flex items-center gap-1"><PenTool size={16}/> 自定义</div>
                                      <div className="text-[10px] opacity-70">输入或选择保存的提示词</div>
                                  </button>
                              </div>
                          </div>

                          <div>
                               <div className="flex justify-between items-center mb-2">
                                  <label className="block text-sm font-bold text-gray-700">2. 识别要求 (提示词)</label>
                                  <div className="flex gap-2">
                                      <select 
                                        className="text-xs p-1 border rounded text-gray-600 outline-none focus:border-purple-400"
                                        value={selectedPromptId}
                                        onChange={e => setSelectedPromptId(e.target.value)}
                                      >
                                          <option value="">-- 选择常用 --</option>
                                          {customPrompts.map(p => (
                                              <option key={p.id} value={p.id}>{p.alias}</option>
                                          ))}
                                      </select>
                                  </div>
                               </div>
                               <textarea 
                                  className="w-full p-3 rounded-xl border border-gray-200 text-sm focus:border-purple-400 outline-none min-h-[80px]"
                                  value={photoPrompt}
                                  onChange={e => setPhotoPrompt(e.target.value)}
                                  placeholder="请输入具体的识别要求..."
                               />
                               <div className="flex gap-2 mt-2 justify-end">
                                   <button onClick={handleSavePrompt} className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-lg hover:bg-blue-100 flex items-center gap-1">
                                       <Save size={12} /> 保存常用
                                   </button>
                                   {selectedPromptId && (
                                       <button onClick={handleDeletePrompt} className="text-xs bg-red-50 text-red-600 px-3 py-1 rounded-lg hover:bg-red-100 flex items-center gap-1">
                                           <Trash2 size={12} /> 删除
                                       </button>
                                   )}
                               </div>
                          </div>

                          <div>
                              <label className="block text-sm font-bold text-gray-700 mb-3">3. 上传图片</label>
                              <div 
                                onClick={handleCameraClick}
                                className="border-2 border-dashed border-gray-300 rounded-2xl h-32 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 hover:border-purple-300 transition-colors group"
                              >
                                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-500 mb-2 group-hover:scale-110 transition-transform">
                                      <Camera size={24} />
                                  </div>
                                  <span className="text-gray-400 text-sm font-bold">点击拍摄或选择图片 (支持多选)</span>
                              </div>
                              <input 
                                  type="file" 
                                  ref={fileInputRef} 
                                  accept="image/*" 
                                  multiple
                                  className="hidden" 
                                  onChange={handleFileChange}
                              />
                          </div>
                      </div>
                  )}

                  {/* Manual Mode Content */}
                  {modalTab === 'MANUAL' && (
                      <div className="space-y-3 relative animate-fade-in">
                          <input 
                              type="text" 
                              placeholder="故事标题" 
                              className="w-full p-4 rounded-xl border border-gray-200 font-bold text-lg focus:border-blue-400 outline-none"
                              value={manualTitle}
                              onChange={e => setManualTitle(e.target.value)}
                          />
                          <textarea 
                              placeholder="在此输入故事内容..." 
                              className="w-full p-4 rounded-xl border border-gray-200 h-64 focus:border-blue-400 outline-none resize-none leading-relaxed"
                              value={manualContent}
                              onChange={e => setManualContent(e.target.value)}
                          />
                          {/* Tags Selection only visible here for final saving */}
                          <div>
                              <label className="block text-sm font-bold text-gray-500 mb-2 flex items-center gap-1"><Tag size={14}/> 分类标签</label>
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
                      </div>
                  )}
              </div>

              <div className="p-4 border-t border-gray-100 bg-white shrink-0">
                  {modalTab === 'AI' ? (
                      <button 
                          onClick={handleGenerateAI}
                          disabled={loading || streamText.length > 0}
                          className="w-full py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-xl font-bold shadow-md flex items-center justify-center gap-2 disabled:opacity-50 hover:shadow-lg transition-all transform active:scale-95"
                      >
                          {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
                          {loading ? 'AI 创作中...' : '开始生成故事'}
                      </button>
                  ) : modalTab === 'PHOTO' ? (
                      <div className="text-center text-xs text-gray-400">
                          请点击上方相机图标上传图片
                      </div>
                  ) : (
                      <button 
                          onClick={handleManualSave}
                          className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold shadow-md flex items-center justify-center gap-2 hover:bg-blue-700 transition-all transform active:scale-95"
                      >
                          <Save size={18} /> 保存故事
                      </button>
                  )}
              </div>
          </div>
      </div>
  );

  return (
    <div className="max-w-7xl mx-auto min-h-screen bg-gray-50 flex flex-col pb-24 relative">
       {/* Sticky Header */}
       <div className="bg-white px-6 py-4 shadow-sm border-b border-gray-100 flex justify-between items-center z-20 sticky top-0">
          <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
             <BookOpen className="text-amber-500" /> 趣味阅读
          </h1>
          
          <div className="flex items-center gap-3">
             <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full text-yellow-700 text-xs font-bold border border-yellow-200">
                <Coins size={14} /> <span>{coins}</span>
             </div>
             <button 
               onClick={() => {
                   setModalTab('AI');
                   setShowInputModal(true);
               }}
               className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-md flex items-center gap-2 transition-all"
             >
                <Plus size={18} /> <span className="hidden sm:inline">新故事</span>
             </button>
          </div>
       </div>

       <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Sidebar: Story List */}
          <div className={`w-full md:w-80 bg-white border-r border-gray-100 flex flex-col z-10 ${currentStory ? 'hidden md:flex' : 'flex'}`}>
              <div className="p-4 border-b border-gray-100 space-y-3">
                  <div className="flex items-center gap-2">
                      <div className="relative flex-1">
                          <Search className="absolute left-3 top-3 text-gray-400" size={16} />
                          <input 
                             type="text" 
                             placeholder="搜索故事..." 
                             className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border-transparent focus:bg-white focus:border-amber-300 rounded-xl text-sm outline-none transition-all"
                             value={searchQuery}
                             onChange={e => setSearchQuery(e.target.value)}
                          />
                      </div>
                      
                      <div className="relative">
                          <button 
                            onClick={() => setShowTagFilterDropdown(!showTagFilterDropdown)}
                            className={`p-2.5 rounded-xl border transition-all ${showTagFilterDropdown ? 'bg-amber-100 border-amber-300 text-amber-600' : 'bg-gray-50 border-gray-100 text-gray-500 hover:bg-gray-100'}`}
                            title="筛选标签"
                          >
                             <Filter size={18} />
                          </button>
                          
                          {showTagFilterDropdown && (
                              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 z-30 p-2 animate-bounce-in max-h-64 overflow-y-auto custom-scrollbar">
                                  <div className="text-xs font-bold text-gray-400 mb-2 px-2">筛选标签</div>
                                  <button 
                                     onClick={() => { setActiveTagFilter('ALL'); setShowTagFilterDropdown(false); }}
                                     className={`w-full text-left px-3 py-2 rounded-lg text-sm font-bold mb-1 transition-colors ${activeTagFilter === 'ALL' ? 'bg-amber-50 text-amber-700' : 'text-gray-600 hover:bg-gray-50'}`}
                                  >
                                      全部
                                  </button>
                                  {allUserTags.map(tag => (
                                      <button 
                                         key={tag}
                                         onClick={() => { setActiveTagFilter(tag); setShowTagFilterDropdown(false); }}
                                         className={`w-full text-left px-3 py-2 rounded-lg text-sm font-bold mb-1 transition-colors ${activeTagFilter === tag ? 'bg-amber-50 text-amber-700' : 'text-gray-600 hover:bg-gray-50'}`}
                                      >
                                          {tag}
                                      </button>
                                  ))}
                                  {allUserTags.length === 0 && <div className="text-center py-2 text-xs text-gray-300">暂无标签</div>}
                              </div>
                          )}
                      </div>
                  </div>
              </div>

              <div className="flex-1 overflow-y-auto p-3 space-y-3">
                  {activeStories.length === 0 && (
                      <div className="text-center py-10 text-gray-400 text-sm">
                          {stories.length === 0 ? "还没有故事，快去创作吧！" : "没有找到匹配的故事"}
                      </div>
                  )}
                  {activeStories.map(story => (
                      <div 
                         key={story.id}
                         onClick={() => openStory(story)}
                         className={`p-4 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md relative group ${currentStory?.id === story.id ? 'border-amber-400 bg-amber-50' : 'border-gray-100 bg-white hover:border-amber-200'}`}
                      >
                          <h3 className="font-bold text-gray-800 mb-1 truncate pr-6">{story.title}</h3>
                          <p className="text-xs text-gray-500 line-clamp-2 mb-2 leading-relaxed">
                              {story.content.map(c => c.char).join('').substring(0, 30)}...
                          </p>
                          <div className="flex justify-between items-center text-[10px] text-gray-400">
                              <span className="flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-gray-100">
                                  {story.source === 'AI' ? <Sparkles size={10} className="text-purple-400"/> : (story.source === 'OCR' ? <Camera size={10} className="text-blue-400"/> : <Edit2 size={10} className="text-green-400"/>)}
                                  {story.source === 'AI' ? 'AI创作' : (story.source === 'OCR' ? '拍照' : '原创')}
                              </span>
                              <span>{new Date(story.createdAt).toLocaleDateString()}</span>
                          </div>
                          
                          {/* Hover Actions - Added z-index to ensure clickable */}
                          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1 bg-white/90 rounded-lg p-1 shadow-sm z-10">
                              <button 
                                onClick={(e) => handleArchive(story, e)}
                                className="p-1.5 hover:bg-gray-100 rounded text-gray-400 hover:text-blue-500" 
                                title="归档"
                              >
                                  <Archive size={14} />
                              </button>
                              <button 
                                onClick={(e) => handleDelete(story.id, e)}
                                className="p-1.5 hover:bg-red-50 rounded text-gray-400 hover:text-red-500" 
                                title="删除"
                              >
                                  <Trash2 size={14} />
                              </button>
                          </div>
                      </div>
                  ))}
                  
                  {archivedStories.length > 0 && (
                      <div className="pt-4 border-t border-gray-100">
                          <p className="text-xs font-bold text-gray-400 mb-3 px-2">已归档 ({archivedStories.length})</p>
                          {archivedStories.map(story => (
                              <div key={story.id} onClick={() => openStory(story)} className="px-4 py-3 rounded-xl bg-gray-50 border border-transparent hover:border-gray-200 mb-2 cursor-pointer opacity-70 hover:opacity-100 transition-all relative group">
                                  <div className="flex justify-between items-center">
                                      <span className="text-sm font-bold text-gray-600 truncate">{story.title}</span>
                                      <div className="flex gap-2">
                                          <button onClick={(e) => handleArchive(story, e)} className="text-xs text-blue-500 hover:underline">还原</button>
                                      </div>
                                  </div>
                                   {/* Allow delete from archive too */}
                                   <div className="absolute top-2 right-12 opacity-0 group-hover:opacity-100 transition-opacity">
                                       <button 
                                          onClick={(e) => handleDelete(story.id, e)}
                                          className="p-1 text-gray-400 hover:text-red-500"
                                          title="彻底删除"
                                       >
                                          <Trash2 size={12} />
                                       </button>
                                   </div>
                              </div>
                          ))}
                      </div>
                  )}
              </div>
          </div>

          {/* Main Reader Area */}
          <div className={`flex-1 bg-[#fdfbf7] relative flex flex-col h-full ${!currentStory ? 'hidden md:flex' : 'flex'}`}>
              {!currentStory ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-gray-400 p-8">
                      <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mb-6 text-amber-500">
                          <BookOpen size={48} />
                      </div>
                      <p className="text-lg font-bold text-gray-600 mb-2">开始你的阅读之旅</p>
                      <p className="text-sm max-w-xs text-center">选择左侧故事，或者点击“新故事”让 AI 老师为你创作。</p>
                  </div>
              ) : (
                  <>
                      {/* Reader Header */}
                      <div className="px-6 py-4 flex justify-between items-center bg-white/50 backdrop-blur-sm sticky top-0 z-10">
                          <div className="flex items-center gap-3 overflow-hidden">
                              <button onClick={() => setCurrentStory(null)} className="md:hidden p-2 -ml-2 rounded-full hover:bg-gray-200 text-gray-500">
                                  <ChevronLeft size={24} />
                              </button>
                              
                              {isEditingTitle ? (
                                  <input 
                                      autoFocus
                                      className="font-bold text-lg text-gray-800 bg-transparent border-b-2 border-amber-400 outline-none w-full max-w-[200px]"
                                      value={editTitleValue}
                                      onChange={e => setEditTitleValue(e.target.value)}
                                      onBlur={saveTitleEdit}
                                      onKeyDown={e => e.key === 'Enter' && saveTitleEdit()}
                                  />
                              ) : (
                                  <h2 
                                      onClick={() => { setEditTitleValue(currentStory.title); setIsEditingTitle(true); }}
                                      className="font-bold text-lg md:text-xl text-gray-800 truncate cursor-pointer hover:text-amber-600 flex items-center gap-2"
                                      title="点击修改标题"
                                  >
                                      {currentStory.title}
                                      <Edit2 size={14} className="text-gray-300 opacity-0 group-hover:opacity-100"/>
                                  </h2>
                              )}
                          </div>
                          <div className="flex items-center gap-2">
                               <button 
                                  onClick={() => {
                                      setManualTitle(currentStory.title);
                                      setManualContent(currentStory.content.map(c => c.char).join(''));
                                      setSelectedTags(currentStory.tags || []);
                                      setModalTab('MANUAL');
                                      setShowInputModal(true);
                                  }}
                                  className="p-2 bg-white rounded-full text-gray-500 hover:text-blue-600 shadow-sm border border-gray-100"
                                  title="编辑内容"
                               >
                                  <Edit2 size={20} />
                               </button>
                               <button 
                                  onClick={(e) => handleDelete(currentStory.id, e)}
                                  className="p-2 bg-white rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 shadow-sm border border-gray-100 transition-colors"
                                  title="删除当前故事"
                               >
                                  <Trash2 size={20} />
                               </button>
                          </div>
                      </div>

                      {/* Reader Content - Grid */}
                      <div className="flex-1 overflow-y-auto p-2 sm:p-4 md:p-8 flex flex-col items-center">
                          <div 
                              className="grid gap-0 mb-8 content-start border-t border-l border-red-300"
                              style={{ 
                                  gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
                                  width: '100%',
                                  maxWidth: '900px'
                              }}
                          >
                              {pageCells.map((cell, idx) => (
                                  <div key={cell.id} className="flex justify-center w-full">
                                      <WritingGrid 
                                          char={cell.char} 
                                          pinyin={cell.pinyin} 
                                          variant="notebook"
                                          noGapBorder={true}
                                          className="w-full"
                                          onClick={() => handleCharClick({char: cell.char, pinyin: cell.pinyin})}
                                      />
                                  </div>
                              ))}
                          </div>
                      </div>

                      {/* Pagination Footer */}
                      {totalPages > 1 && (
                          <div className="p-4 bg-white border-t border-gray-100 flex justify-between items-center shrink-0 safe-area-pb">
                              <button 
                                  onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                                  disabled={currentPage === 0}
                                  className="flex items-center gap-1 px-4 py-2 rounded-xl font-bold text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent"
                              >
                                  <ChevronLeft size={20} /> 上一页
                              </button>
                              
                              <span className="text-sm font-bold text-gray-400">
                                  {currentPage + 1} / {totalPages}
                              </span>

                              <button 
                                  onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
                                  disabled={currentPage === totalPages - 1}
                                  className="flex items-center gap-1 px-4 py-2 rounded-xl font-bold text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent"
                              >
                                  下一页 <ChevronRight size={20} />
                              </button>
                          </div>
                      )}
                  </>
              )}
          </div>
       </div>

       {/* Character Action Modal */}
       {selectedCharPair && (
            <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedCharPair(null)}>
                <div 
                    className="bg-white rounded-[2rem] shadow-2xl p-6 w-full max-w-xs relative animate-bounce-in flex flex-col items-center gap-4"
                    onClick={e => e.stopPropagation()}
                >
                    <button onClick={() => setSelectedCharPair(null)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"><X size={20}/></button>
                    
                    <div className="text-center mt-2">
                        <div className="text-2xl font-bold text-gray-500 mb-1">{selectedCharPair.pinyin}</div>
                        <div className="w-32 h-32 mx-auto bg-red-50 rounded-2xl border-2 border-red-100 flex items-center justify-center mb-2">
                             <span className="font-fun text-7xl text-gray-800">{selectedCharPair.char}</span>
                        </div>
                        <div className="flex justify-center gap-2">
                            {isCharacterKnown(selectedCharPair.char) && <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold">已认识</span>}
                            {getUnknownCharacters().some(c => c.char === selectedCharPair.char) && <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-bold">生字本</span>}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 w-full">
                        <button onClick={() => handleCharAction('READ')} className="flex flex-col items-center justify-center p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 font-bold text-sm gap-1">
                            <Volume2 size={20}/> 朗读
                        </button>
                        <button onClick={() => handleCharAction('STUDY')} className="flex flex-col items-center justify-center p-3 bg-indigo-50 text-indigo-600 rounded-xl hover:bg-indigo-100 font-bold text-sm gap-1">
                            <GraduationCap size={20}/> 学习
                        </button>
                        <button onClick={() => handleCharAction('KNOWN')} className="flex flex-col items-center justify-center p-3 bg-green-50 text-green-600 rounded-xl hover:bg-green-100 font-bold text-sm gap-1">
                            <CheckCircle size={20}/> 认识
                        </button>
                        <button onClick={() => handleCharAction('UNKNOWN')} className="flex flex-col items-center justify-center p-3 bg-orange-50 text-orange-600 rounded-xl hover:bg-orange-100 font-bold text-sm gap-1">
                            <BookOpen size={20}/> 不认识
                        </button>
                    </div>
                </div>
            </div>
       )}

       {showInputModal && renderInputModal()}

    </div>
  );
};
