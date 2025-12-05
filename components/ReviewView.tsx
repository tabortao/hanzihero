import React, { useState, useEffect } from 'react';
import { ArrowLeft, Trash2, Volume2, Sparkles, Layers, BookOpen } from 'lucide-react';
import { Character, AIExplanation } from '../types';
import { getUnknownCharacters, removeUnknownCharacter, getSettings } from '../services/storage';
import { explainCharacter } from '../services/geminiService';

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

  const speak = (text: string) => {
    const settings = getSettings();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = settings.ttsRate;
    
    if (settings.ttsVoice) {
      const voices = window.speechSynthesis.getVoices();
      const selectedVoice = voices.find(v => v.voiceURI === settings.ttsVoice);
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
    }
    
    window.speechSynthesis.speak(utterance);
  };

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
    <div className="max-w-4xl mx-auto p-4 min-h-screen">
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={onBack}
          className="p-3 bg-white rounded-full shadow-md hover:bg-gray-50 text-gray-600 transition-all"
        >
          <ArrowLeft />
        </button>
        <h1 className="text-2xl font-bold text-gray-800">生字本 ({list.length})</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8 h-[calc(100vh-150px)]">
        {/* List Section */}
        <div className="bg-white rounded-3xl shadow-lg p-4 overflow-y-auto border-2 border-orange-100">
           {list.length === 0 ? (
             <div className="h-full flex flex-col items-center justify-center text-gray-400">
               <span className="text-6xl mb-4">🌟</span>
               <p>太棒了！没有生字需要复习。</p>
             </div>
           ) : (
             <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
               {list.map(item => (
                 <div 
                   key={item.char}
                   onClick={() => handleSelect(item)}
                   className={`
                     aspect-square rounded-2xl flex flex-col items-center justify-center cursor-pointer border-2 transition-all relative group
                     ${selectedChar?.char === item.char ? 'bg-orange-100 border-orange-400' : 'bg-gray-50 border-gray-100 hover:border-orange-200'}
                   `}
                 >
                   <span className="font-fun text-3xl text-gray-700 mb-1">{item.char}</span>
                   <span className="text-xs text-gray-400">{item.pinyin}</span>
                   
                   <button 
                     onClick={(e) => handleRemove(item, e)}
                     className="absolute -top-2 -right-2 bg-red-100 text-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-200"
                   >
                     <Trash2 size={12} />
                   </button>
                 </div>
               ))}
             </div>
           )}
        </div>

        {/* Detail Section */}
        <div className="bg-white rounded-3xl shadow-lg p-6 border-2 border-blue-100 flex flex-col relative overflow-hidden">
           {selectedChar ? (
             <div className="flex flex-col h-full animate-fade-in z-10 overflow-y-auto custom-scrollbar">
                <div className="text-center mb-6 shrink-0">
                  <div 
                    className="w-24 h-24 mx-auto bg-red-50 rounded-[2rem] flex items-center justify-center border-2 border-red-200 mb-2 cursor-pointer hover:bg-red-100"
                    onClick={() => speak(selectedChar.char)}
                  >
                    <span className="font-fun text-5xl text-gray-800">{selectedChar.char}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">{selectedChar.pinyin}</h2>
                </div>

                <div className="flex-1 bg-gray-50 rounded-2xl p-4 space-y-4">
                  <h3 className="font-bold text-gray-700 flex items-center gap-2">
                    <Sparkles className="text-yellow-500" size={18} /> AI 老师讲解
                  </h3>
                  
                  {loadingAi ? (
                    <div className="space-y-3 animate-pulse">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-20 bg-gray-200 rounded w-full mt-4"></div>
                    </div>
                  ) : aiData ? (
                    <div className="space-y-4 text-sm">
                       {/* Structure */}
                       <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                         <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">字形记忆</span>
                            <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{aiData.structure}</span>
                         </div>
                         <p className="text-gray-700 font-medium mb-1">{aiData.composition}</p>
                         <p className="text-gray-600 text-xs leading-relaxed">{aiData.memoryTip}</p>
                       </div>

                       {/* Words */}
                       <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                         <span className="block text-xs font-bold text-green-400 mb-2 uppercase tracking-wider">组词</span>
                         <div className="flex flex-wrap gap-2">
                           {aiData.words?.map((w, i) => (
                             <span key={i} className="bg-green-50 text-green-800 px-2 py-1 rounded-md text-xs">
                               {w.word}
                             </span>
                           ))}
                         </div>
                       </div>
                    </div>
                  ) : (
                    <p className="text-gray-400 text-sm">暂无数据</p>
                  )}
                </div>

                <button 
                  onClick={(e) => selectedChar && handleRemove(selectedChar, e)}
                  className="mt-6 w-full py-3 bg-green-100 text-green-700 rounded-xl hover:bg-green-200 font-semibold transition-colors flex items-center justify-center gap-2 shrink-0"
                >
                  <Trash2 size={20} />
                  我已经学会了，移除
                </button>
             </div>
           ) : (
             <div className="h-full flex flex-col items-center justify-center text-gray-400 z-10">
                <p>点击左侧生字查看详情</p>
             </div>
           )}
           
           <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-[10rem] -z-0 opacity-50 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
