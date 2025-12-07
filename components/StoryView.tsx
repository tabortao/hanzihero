import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Sparkles, Trash2, Volume2, Save, Plus, Archive, RotateCcw, Check, Loader2 } from 'lucide-react';
import { Story, CharPair } from '../types';
import { getStories, saveStory, deleteStory, getKnownCharacters, getUnknownCharacters } from '../services/storage';
import { generateStoryStream } from '../services/geminiService';
import { speakText, WritingGrid } from './SharedComponents';
import { findCharacterPinyin } from '../data/dictionary';

// Helper to generate a UUID
const generateId = () => Date.now().toString(36) + Math.random().toString(36).substring(2);

export const StoryView: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [currentStory, setCurrentStory] = useState<Story | null>(null);
  const [loading, setLoading] = useState(false);
  const [keywords, setKeywords] = useState('');
  const [showInput, setShowInput] = useState(false);
  
  // Streaming state
  const [streamText, setStreamText] = useState('');

  useEffect(() => {
    setStories(getStories());
  }, []);

  const handleGenerate = async () => {
    setLoading(true);
    setStreamText(''); // Reset buffer
    
    const known = getKnownCharacters();
    const unknown = getUnknownCharacters();
    const available = [...known, ...unknown];
    
    // Fallback if empty
    if (available.length < 5) {
        available.push(
            {char:'天', pinyin:'tiān'}, {char:'地', pinyin:'dì'}, {char:'人', pinyin:'rén'}
        );
    }

    try {
        await generateStoryStream(available, keywords, (chunk) => {
            setStreamText(prev => prev + chunk);
        });

        // Processing after stream finishes
        // Wait a tick to ensure state is updated (though in promise chain it uses closure usually, 
        // here we rely on the final text being in streamText which reacts, 
        // but inside async function we need access to the accumulated result. 
        // Actually the `generateStoryStream` promise resolves when done. 
        // But `streamText` state update is async. 
        // We can capture full text in a local var for processing.
    } catch (e) {
        alert("生成失败，请检查网络或 AI 设置");
        setLoading(false);
        return;
    }
    
    // We need to access the final text. Since state update is async, 
    // we can't just read `streamText` immediately here reliably if we relied purely on state.
    // However, the cleanest way is to use a mutable ref or let the user see the text and then "Save/Confirm".
    // But to match previous UX, let's process it. 
    // We will just process the `streamText` from the state in a `useEffect` or 
    // modify `generateStoryStream` to return the full text? 
    // Better: maintain a local variable during stream.
    setLoading(false);
  };

  // Helper to parse raw text into Story object
  const finalizeStory = () => {
      if (!streamText.trim()) return;

      const lines = streamText.split('\n').filter(l => l.trim() !== '');
      const title = lines[0]?.replace(/^#+\s*/, '') || '无题'; // Remove Markdown headers if any
      const contentText = lines.slice(1).join('\n');
      
      // Convert content to CharPairs with Pinyin lookup
      const content: CharPair[] = contentText.split('').map(char => {
          // If it's a known punctuation or whitespace, use empty pinyin
          if (/[\s\n\r\t,。！？.?!:：]/.test(char)) {
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
          keywords
      };

      saveStory(newStory);
      setStories([newStory, ...stories]);
      setCurrentStory(newStory);
      
      // Reset UI
      setShowInput(false);
      setKeywords('');
      setStreamText('');
  };

  // Trigger finalization when loading stops if we have text
  useEffect(() => {
      if (!loading && streamText.length > 10 && !currentStory) {
          finalizeStory();
      }
  }, [loading]);

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

  const activeStories = stories.filter(s => !s.isArchived);
  const archivedStories = stories.filter(s => s.isArchived);

  return (
    <div className="max-w-4xl mx-auto min-h-screen bg-amber-50 pb-24 flex flex-col">
       
       {!currentStory ? (
         // List View
         <div className="p-4 space-y-4 animate-fade-in">
             {/* Generator Box */}
             <div className="bg-white p-6 rounded-[2rem] shadow-sm mb-6 text-center border border-amber-100">
                 <h2 className="text-2xl font-bold text-amber-800 mb-2">AI 故事会</h2>
                 <p className="text-gray-500 text-sm mb-4">用你学过的汉字，编写有趣的小故事</p>
                 
                 {showInput ? (
                     <div className="mb-4 space-y-4 animate-slide-up">
                         {/* Live Preview during Generation */}
                         {streamText && (
                             <div className="bg-amber-50 p-4 rounded-xl text-left text-sm text-gray-600 max-h-40 overflow-y-auto whitespace-pre-wrap border border-amber-200">
                                 {streamText}
                                 <span className="inline-block w-2 h-4 bg-amber-500 ml-1 animate-pulse"/>
                             </div>
                         )}

                         {!loading && (
                            <input 
                                type="text" 
                                className="w-full p-3 rounded-xl border border-amber-200 focus:border-amber-400 outline-none text-sm bg-amber-50"
                                placeholder="输入关键词（如：小狗、春天）..."
                                value={keywords}
                                onChange={e => setKeywords(e.target.value)}
                            />
                         )}
                         
                         <div className="flex gap-2">
                             <button 
                               onClick={() => { setShowInput(false); setStreamText(''); }}
                               className="flex-1 py-2 text-gray-500 bg-gray-100 rounded-lg text-sm font-bold"
                               disabled={loading}
                             >
                               取消
                             </button>
                             <button 
                               onClick={handleGenerate}
                               disabled={loading}
                               className="flex-1 py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-lg font-bold shadow-md flex items-center justify-center gap-2"
                             >
                               {loading ? (
                                   <>
                                     <Loader2 className="animate-spin" size={18} />
                                     创作中...
                                   </>
                               ) : "开始生成"}
                             </button>
                         </div>
                     </div>
                 ) : (
                     <button 
                        onClick={() => setShowInput(true)}
                        className="px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-xl font-bold shadow-lg shadow-orange-200 active:scale-95 transition-all flex items-center gap-2 mx-auto"
                        >
                        <Sparkles className={loading ? "animate-spin" : ""} />
                        <span>生成新故事</span>
                    </button>
                 )}
             </div>

             <div className="grid gap-4">
                 {stories.length === 0 && !loading && (
                     <div className="text-center py-10 text-gray-400">还没有故事，点击上方按钮生成一个吧！</div>
                 )}

                 {/* Active Stories */}
                 {activeStories.map(story => (
                     <div 
                       key={story.id} 
                       onClick={() => openStory(story)}
                       className="bg-white p-4 rounded-2xl border border-amber-100 shadow-sm cursor-pointer hover:border-amber-300 transition-all flex justify-between items-center group relative overflow-hidden"
                     >
                         <div className="flex items-center gap-4 relative z-10">
                             <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold text-xs flex-col">
                                 <BookOpen size={20} />
                                 {story.readCount > 0 && <span>{story.readCount}次</span>}
                             </div>
                             <div>
                                 <h3 className="font-bold text-gray-800">{story.title}</h3>
                                 <div className="flex items-center gap-2 text-xs text-gray-400">
                                     <span>{new Date(story.createdAt).toLocaleDateString()}</span>
                                     {story.keywords && <span className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-500">{story.keywords}</span>}
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
                                        <div className="text-gray-400"><BookOpen size={20} /></div>
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
         </div>
       ) : (
         // Reader View
         <div className="flex flex-col h-full animate-fade-in">
             <div className="bg-white p-4 shadow-sm flex items-center justify-between sticky top-0 z-10">
                 <button onClick={() => setCurrentStory(null)} className="text-gray-500 font-bold px-3">
                    返回
                 </button>
                 <h2 className="font-bold text-lg max-w-[60%] truncate">{currentStory.title}</h2>
                 <button onClick={readStory} className="p-2 bg-amber-100 text-amber-600 rounded-full hover:bg-amber-200">
                    <Volume2 size={20} />
                 </button>
             </div>

             <div className="flex-1 p-4 overflow-y-auto">
                 <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-amber-100 min-h-[50vh]">
                     <div className="flex flex-wrap gap-2 leading-loose justify-center">
                         {currentStory.content.map((item, idx) => (
                             <WritingGrid 
                               key={idx}
                               char={item.char}
                               pinyin={item.pinyin}
                             />
                         ))}
                     </div>
                     
                     {!currentStory.isArchived && (
                         <div className="mt-12 flex justify-center">
                             <button 
                                onClick={(e) => {
                                    handleArchive(currentStory, e);
                                    setCurrentStory(null);
                                }}
                                className="px-6 py-3 bg-amber-100 text-amber-700 rounded-full font-bold flex items-center gap-2 hover:bg-amber-200 transition-colors"
                             >
                                 <Check size={20} /> 读完了，归档
                             </button>
                         </div>
                     )}
                 </div>
             </div>
         </div>
       )}
    </div>
  );
};