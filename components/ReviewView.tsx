import React, { useState, useEffect } from 'react';
import { ArrowLeft, Trash2, Volume2, Sparkles, Layers, BookOpen, RefreshCw } from 'lucide-react';
import { Character, AIExplanation } from '../types';
import { getUnknownCharacters, removeUnknownCharacter, getSettings } from '../services/storage';
import { explainCharacter } from '../services/geminiService';
import { StrokeOrderDisplay, WritingGrid, speakText } from './SharedComponents';

interface ReviewViewProps {
  onBack: () => void;
}

export const ReviewView: React.FC<ReviewViewProps> = ({ onBack }) => {
  const [list, setList] = useState<Character[]>([]);
  const [selectedChar, setSelectedChar] = useState<Character | null>(null);
  const [aiData, setAiData] = useState<AIExplanation | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);

  useEffect(() => {
    setList(getUnknownCharacters());
  }, []);

  const handleRemove = (char: Character, e: React.MouseEvent) => {
    e.stopPropagation();
    removeUnknownCharacter(char.char);
    setList(prev => prev.filter(c => c.char !== char.char));
    if (selectedChar?.char === char.char) {
      setSelectedChar(null);
    }
  };

  const handleSelect = async (char: Character) => {
    setSelectedChar(char);
    setAiData(null);
    setLoadingAi(true);
    // Auto fetch explanation
    const data = await explainCharacter(char.char);
    setAiData(data);
    setLoadingAi(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 min-h-screen flex flex-col">
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={onBack}
          className="p-3 bg-white rounded-full shadow-md hover:bg-gray-50 text-gray-600 transition-all"
        >
          <ArrowLeft />
        </button>
        <h1 className="text-2xl font-bold text-gray-800">生字本 ({list.length})</h1>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 flex-1 h-[calc(100vh-120px)]">
        {/* List Section (Left) */}
        <div className="lg:col-span-4 bg-white rounded-3xl shadow-lg p-4 overflow-y-auto border-2 border-orange-100 custom-scrollbar">
           {list.length === 0 ? (
             <div className="h-full flex flex-col items-center justify-center text-gray-400">
               <span className="text-6xl mb-4">🌟</span>
               <p>太棒了！没有生字需要复习。</p>
             </div>
           ) : (
             <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-3 gap-3">
               {list.map(item => (
                 <div 
                   key={item.char}
                   onClick={() => handleSelect(item)}
                   className={`
                     aspect-square rounded-2xl flex flex-col items-center justify-center cursor-pointer border-2 transition-all relative group
                     ${selectedChar?.char === item.char ? 'bg-orange-100 border-orange-400 scale-105 shadow-md' : 'bg-gray-50 border-gray-100 hover:border-orange-200'}
                   `}
                 >
                   <span className="font-fun text-2xl text-gray-700 mb-1">{item.char}</span>
                   <span className="text-[10px] text-gray-400">{item.pinyin}</span>
                   
                   <button 
                     onClick={(e) => handleRemove(item, e)}
                     className="absolute -top-2 -right-2 bg-red-100 text-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-200 z-10"
                   >
                     <Trash2 size={12} />
                   </button>
                 </div>
               ))}
             </div>
           )}
        </div>

        {/* Detail Section (Right) */}
        <div className="lg:col-span-8 bg-white rounded-3xl shadow-lg border-2 border-blue-100 flex flex-col relative overflow-hidden">
           {selectedChar ? (
             <div className="flex flex-col h-full animate-fade-in z-10 overflow-y-auto custom-scrollbar p-6">
                {/* Header with Stroke Order */}
                <div className="flex flex-col items-center justify-center mb-6 shrink-0">
                   <StrokeOrderDisplay char={selectedChar.char} />
                   <div className="mt-4 flex items-center gap-2">
                      <h2 className="text-3xl font-bold text-gray-800">{selectedChar.pinyin}</h2>
                      <button onClick={() => speakText(selectedChar.char)} className="p-2 bg-gray-100 rounded-full text-gray-600 hover:text-blue-500">
                        <Volume2 size={20} />
                      </button>
                   </div>
                </div>

                <div className="flex-1 space-y-4">
                  <h3 className="font-bold text-gray-700 flex items-center gap-2 text-lg border-b pb-2">
                    <Sparkles className="text-yellow-500" size={20} /> AI 老师讲解
                  </h3>
                  
                  {loadingAi ? (
                    <div className="flex flex-col items-center py-8 space-y-3 text-indigo-400">
                      <RefreshCw className="animate-spin" size={32} />
                      <p className="text-sm">AI 老师正在准备教案...</p>
                    </div>
                  ) : aiData ? (
                    <div className="space-y-6">
                       {/* Structure & Memory Tip */}
                       <div className="bg-indigo-50 rounded-2xl p-5 border border-indigo-100">
                          <div className="flex items-center gap-2 mb-3">
                             <Layers size={18} className="text-indigo-600" />
                             <span className="font-bold text-indigo-800">字形结构: {aiData.structure}</span>
                             <span className="bg-white px-2 py-0.5 rounded text-xs text-indigo-600 border border-indigo-100 ml-2">{aiData.composition}</span>
                          </div>
                          <div className="bg-white p-4 rounded-xl text-gray-700 leading-relaxed relative shadow-sm">
                             <p className="text-lg">{aiData.memoryTip}</p>
                             <button 
                               onClick={() => speakText(aiData.memoryTip)}
                               className="absolute top-2 right-2 text-indigo-300 hover:text-indigo-600"
                             >
                               <Volume2 size={18} />
                             </button>
                          </div>
                       </div>

                       {/* Words Grid */}
                       <div>
                          <h4 className="font-bold text-gray-600 mb-3 flex items-center gap-2">
                             <BookOpen size={18} className="text-green-500" /> 常用组词
                          </h4>
                          <div className="flex flex-wrap gap-4">
                            {aiData.words?.map((w, i) => {
                              const chars = w.word.split('');
                              const pinyins = w.pinyin.split(' ');
                              return (
                                 <div key={i} className="bg-gray-50 p-2 rounded-xl border border-gray-200 shadow-sm flex gap-1">
                                    {chars.map((c, idx) => (
                                      <WritingGrid 
                                        key={idx} 
                                        char={c} 
                                        pinyin={pinyins[idx] || ''} 
                                        isTarget={c === selectedChar.char} 
                                      />
                                    ))}
                                 </div>
                              );
                            })}
                          </div>
                       </div>
                       
                       {/* Sentence Grid */}
                       <div>
                          <h4 className="font-bold text-gray-600 mb-3 flex items-center gap-2">
                             <Sparkles size={18} className="text-purple-500" /> 例句
                          </h4>
                          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 shadow-sm flex flex-wrap gap-2 relative">
                             {aiData.sentenceData?.map((item, idx) => (
                                <WritingGrid 
                                   key={idx} 
                                   char={item.char} 
                                   pinyin={item.pinyin} 
                                   isTarget={item.char === selectedChar.char} 
                                />
                             ))}
                              <button 
                                 onClick={() => {
                                    const sentence = aiData.sentenceData.map(d => d.char).join('');
                                    speakText(sentence);
                                 }}
                                 className="absolute right-2 bottom-2 text-purple-300 hover:text-purple-600 transition-colors bg-white/80 rounded-full p-2 shadow-sm"
                              >
                                 <Volume2 size={20} />
                              </button>
                          </div>
                       </div>

                    </div>
                  ) : (
                    <div className="text-center py-10 text-gray-400 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                       <p>暂无讲解数据，请重试</p>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
                  <button 
                    onClick={(e) => selectedChar && handleRemove(selectedChar, e)}
                    className="py-3 px-6 bg-green-500 text-white rounded-xl hover:bg-green-600 font-bold shadow-lg shadow-green-100 transition-all flex items-center gap-2"
                  >
                    <Trash2 size={18} />
                    移出生字本
                  </button>
                </div>
             </div>
           ) : (
             <div className="h-full flex flex-col items-center justify-center text-gray-400 z-10 bg-gray-50/50">
                <BookOpen size={48} className="mb-4 text-gray-300 opacity-50" />
                <p>点击左侧生字开始复习</p>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};