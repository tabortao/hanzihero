import React, { useState, useEffect, useMemo } from 'react';
import { ArrowLeft, Book, CheckCircle, XCircle, Search, GraduationCap, Volume2, Check, X, Library, User } from 'lucide-react';
import { Character } from '../types';
import { getKnownCharacters, getUnknownCharacters, addKnownCharacter, addUnknownCharacter, getCharacterLearnCount } from '../services/storage';
import { getOfflineDict, findCharacterPinyin } from '../data/dictionary';
import { speakText } from './SharedComponents';

interface CharacterBankViewProps {
  onBack: () => void;
  onStudy?: (char: Character) => void;
}

// Helper to get normalized initial (A-Z) from pinyin
const getPinyinInitial = (pinyin: string): string => {
    if (!pinyin) return '#';
    const normalized = pinyin.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const initial = normalized.charAt(0).toUpperCase();
    if (/[A-Z]/.test(initial)) return initial;
    return '#';
};

export const CharacterBankView: React.FC<CharacterBankViewProps> = ({ onBack, onStudy }) => {
  const [activeTab, setActiveTab] = useState<'KNOWN' | 'UNKNOWN' | 'ALL'>('KNOWN');
  const [knownList, setKnownList] = useState<Character[]>([]);
  const [unknownList, setUnknownList] = useState<Character[]>([]);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // For 'ALL' tab - Pagination
  const [allCharsPage, setAllCharsPage] = useState(0);
  const PAGE_SIZE = 100;

  // Modal State
  const [selectedChar, setSelectedChar] = useState<Character | null>(null);

  useEffect(() => {
    refreshLists();
  }, []);

  const refreshLists = () => {
    setKnownList(getKnownCharacters());
    setUnknownList(getUnknownCharacters());
  };

  // Prepare the "All" list (Memoized)
  // This combines the offline dictionary with any user-added characters
  const allDictionaryList = useMemo(() => {
    const dict = getOfflineDict();
    const dictChars = Object.keys(dict);
    
    // Get unique chars from user lists that might not be in dict
    const userKnownChars = knownList.map(c => c.char);
    const userUnknownChars = unknownList.map(c => c.char);
    
    // Combine all unique characters
    const allCharsSet = new Set([...dictChars, ...userKnownChars, ...userUnknownChars]);
    
    const charObjects = Array.from(allCharsSet).map(c => ({
       char: c,
       pinyin: findCharacterPinyin(c),
       // Flag if not in built-in dictionary
       isCustom: !dict[c] 
    }));

    // Sort by pinyin
    return charObjects.sort((a, b) => {
        if (!a.pinyin && !b.pinyin) return 0;
        if (!a.pinyin) return 1;
        if (!b.pinyin) return -1;

        const normA = a.pinyin.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const normB = b.pinyin.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
        const cmp = normA.localeCompare(normB);
        if (cmp !== 0) return cmp;
        
        return a.pinyin.localeCompare(b.pinyin);
    });
  }, [knownList, unknownList]); // Refresh if user lists change

  const handleAction = (action: 'READ' | 'STUDY' | 'KNOWN' | 'UNKNOWN') => {
    if (!selectedChar) return;
    
    switch (action) {
      case 'READ':
        speakText(selectedChar.char);
        break;
      case 'STUDY':
        if (onStudy) onStudy(selectedChar);
        setSelectedChar(null);
        break;
      case 'KNOWN':
        addKnownCharacter(selectedChar);
        refreshLists();
        speakText('认识');
        setSelectedChar(null);
        break;
      case 'UNKNOWN':
        addUnknownCharacter(selectedChar);
        refreshLists();
        speakText('不认识');
        setSelectedChar(null);
        break;
    }
  };

  const getCharStatus = (charStr: string): 'KNOWN' | 'UNKNOWN' | 'NONE' => {
      if (knownList.some(c => c.char === charStr)) return 'KNOWN';
      if (unknownList.some(c => c.char === charStr)) return 'UNKNOWN';
      return 'NONE';
  };

  // Filter Data based on Tab and Search
  const getDisplayData = () => {
      let source: any[] = []; // Using any to accommodate isCustom property
      if (activeTab === 'KNOWN') source = knownList;
      else if (activeTab === 'UNKNOWN') source = unknownList;
      else source = allDictionaryList;

      // Filter by Search
      if (searchQuery.trim()) {
          return source.filter(c => c.char.includes(searchQuery) || c.pinyin.includes(searchQuery));
      }
      return source;
  };

  const displayList = getDisplayData();
  
  // Pagination Logic
  const isPaginated = activeTab === 'ALL' && !searchQuery;
  const paginatedList = isPaginated 
      ? displayList.slice(allCharsPage * PAGE_SIZE, (allCharsPage + 1) * PAGE_SIZE)
      : displayList;

  const totalPages = Math.ceil(displayList.length / PAGE_SIZE);

  return (
    <div className="max-w-7xl mx-auto min-h-screen bg-gray-50 flex flex-col pb-24">
      
      {/* Sticky Header */}
      <div className="sticky top-0 z-30 bg-white shadow-sm px-4 py-4 rounded-b-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
                <button 
                onClick={onBack}
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-600 transition-all"
                >
                <ArrowLeft size={20} />
                </button>
                <h1 className="text-xl md:text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Library className="text-indigo-500" />
                我的字库
                </h1>
            </div>
            <button 
                onClick={() => setShowSearch(!showSearch)}
                className={`p-2 rounded-full transition-all ${showSearch ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-500'}`}
            >
                <Search size={20} />
            </button>
          </div>

          {/* Search Bar */}
          {showSearch && (
              <div className="mb-4 animate-slide-up">
                  <input 
                      type="text" 
                      placeholder="搜索汉字或拼音..." 
                      className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-indigo-400 outline-none transition-all"
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      autoFocus
                  />
              </div>
          )}

          {/* Tabs */}
          <div className="flex bg-gray-100 p-1 rounded-xl">
            <button
            onClick={() => { setActiveTab('KNOWN'); setAllCharsPage(0); }}
            className={`flex-1 py-2 rounded-lg text-xs md:text-sm font-bold transition-all flex items-center justify-center gap-1 ${
                activeTab === 'KNOWN' ? 'bg-white text-green-600 shadow-sm' : 'text-gray-400'
            }`}
            >
            <CheckCircle size={16} /> 已认识 ({knownList.length})
            </button>
            <button
            onClick={() => { setActiveTab('UNKNOWN'); setAllCharsPage(0); }}
            className={`flex-1 py-2 rounded-lg text-xs md:text-sm font-bold transition-all flex items-center justify-center gap-1 ${
                activeTab === 'UNKNOWN' ? 'bg-white text-orange-500 shadow-sm' : 'text-gray-400'
            }`}
            >
            <XCircle size={16} /> 生字本 ({unknownList.length})
            </button>
            <button
            onClick={() => { setActiveTab('ALL'); setAllCharsPage(0); }}
            className={`flex-1 py-2 rounded-lg text-xs md:text-sm font-bold transition-all flex items-center justify-center gap-1 ${
                activeTab === 'ALL' ? 'bg-white text-indigo-500 shadow-sm' : 'text-gray-400'
            }`}
            >
            <Book size={16} /> 字库字典 ({allDictionaryList.length})
            </button>
          </div>
      </div>

      {/* Grid Content */}
      <div className="p-4 flex-1">
        {paginatedList.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-gray-400">
            <span className="text-4xl mb-4">📭</span>
            <p>暂无相关汉字</p>
          </div>
        ) : (
          <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-3 md:gap-4 content-start">
            {paginatedList.map((char: any, idx: number) => {
              const learnCount = getCharacterLearnCount(char.char);
              const status = getCharStatus(char.char);
              
              // Dynamic Style based on status
              let cardStyle = "bg-white border-gray-200 hover:border-indigo-300";
              if (activeTab === 'ALL') {
                  if (status === 'KNOWN') cardStyle = "bg-green-50 border-green-200 hover:border-green-400";
                  if (status === 'UNKNOWN') cardStyle = "bg-orange-50 border-orange-200 hover:border-orange-400";
              } else if (activeTab === 'KNOWN') {
                  cardStyle = "bg-green-50 border-green-200";
              } else if (activeTab === 'UNKNOWN') {
                  cardStyle = "bg-orange-50 border-orange-200";
              }

              // Determine if we need a section header (only for ALL tab)
              let showHeader = false;
              if (activeTab === 'ALL' && !searchQuery) {
                  const currentInitial = getPinyinInitial(char.pinyin);
                  const prevChar = paginatedList[idx - 1] as any;
                  const prevInitial = prevChar ? getPinyinInitial(prevChar.pinyin) : null;
                  
                  if (idx === 0 || currentInitial !== prevInitial) {
                      showHeader = true;
                  }
              }

              return (
                <React.Fragment key={`${char.char}-${idx}`}>
                   {showHeader && (
                       <div className="col-span-5 md:col-span-8 lg:col-span-10 mt-4 mb-2 pb-1 border-b border-gray-200 flex items-center">
                           <span className="text-lg font-bold text-indigo-500">
                               {getPinyinInitial(char.pinyin)}
                           </span>
                       </div>
                   )}
                    <div 
                      onClick={() => setSelectedChar(char)}
                      className={`
                          aspect-square rounded-xl border-2 flex flex-col items-center justify-center cursor-pointer transition-all relative select-none shadow-sm active:scale-95
                          ${cardStyle}
                      `}
                    >
                      <span className="font-fun text-2xl text-gray-800">{char.char}</span>
                      <span className="text-[10px] text-gray-400 mt-1">{char.pinyin || ' '}</span>
                      
                      {/* Learn Count Badge (Only show if significant) */}
                      {learnCount > 5 && (
                        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      )}
                      
                      {/* Custom User Character Badge */}
                      {(char.isCustom) && (
                         <div className="absolute top-1 right-1 text-blue-500" title="用户自定义">
                             <User size={10} fill="currentColor" />
                         </div>
                      )}
                    </div>
                </React.Fragment>
              );
            })}
          </div>
        )}
      </div>

      {/* Pagination Controls (Only for ALL tab) */}
      {isPaginated && totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 py-6">
              <button 
                onClick={() => setAllCharsPage(Math.max(0, allCharsPage - 1))}
                disabled={allCharsPage === 0}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold disabled:opacity-50 hover:bg-gray-50"
              >
                  上一页
              </button>
              <span className="text-xs font-bold text-gray-400">
                  {allCharsPage + 1} / {totalPages}
              </span>
              <button 
                onClick={() => setAllCharsPage(Math.min(totalPages - 1, allCharsPage + 1))}
                disabled={allCharsPage === totalPages - 1}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold disabled:opacity-50 hover:bg-gray-50"
              >
                  下一页
              </button>
          </div>
      )}

      {/* --- Action Modal --- */}
      {selectedChar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedChar(null)}>
              <div 
                className="bg-white w-full max-w-sm rounded-3xl shadow-2xl p-6 relative animate-bounce-in"
                onClick={e => e.stopPropagation()}
              >
                  <button 
                    onClick={() => setSelectedChar(null)}
                    className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200"
                  >
                      <X size={20} />
                  </button>

                  <div className="flex flex-col items-center mb-8 pt-4">
                      <div className="text-xl font-bold text-gray-500 mb-2">{selectedChar.pinyin}</div>
                      <div className="w-32 h-32 bg-gray-50 rounded-2xl border-2 border-gray-200 flex items-center justify-center mb-4 relative">
                          {/* TianZiGe Lines */}
                          <div className="absolute inset-0 pointer-events-none opacity-20" style={{
                              backgroundImage: `linear-gradient(to right, transparent 49%, #f87171 50%, transparent 51%), linear-gradient(to bottom, transparent 49%, #f87171 50%, transparent 51%), linear-gradient(45deg, transparent 49%, #f87171 50%, transparent 51%), linear-gradient(-45deg, transparent 49%, #f87171 50%, transparent 51%)`,
                              backgroundSize: '100% 100%'
                          }}></div>
                          <span className="font-fun text-7xl text-gray-800 relative z-10">{selectedChar.char}</span>
                      </div>
                      
                      {/* Status Badges */}
                      <div className="flex gap-2">
                        {getCharStatus(selectedChar.char) === 'KNOWN' && <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"><CheckCircle size={12}/> 已认识</span>}
                        {getCharStatus(selectedChar.char) === 'UNKNOWN' && <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"><XCircle size={12}/> 生字本</span>}
                        {(selectedChar as any).isCustom && <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"><User size={12}/> 自定义</span>}
                      </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                      <button 
                        onClick={() => handleAction('READ')}
                        className="flex flex-col items-center justify-center p-4 bg-blue-50 text-blue-600 rounded-2xl hover:bg-blue-100 transition-colors gap-2"
                      >
                          <Volume2 size={24} />
                          <span className="font-bold text-sm">朗读</span>
                      </button>
                      
                      <button 
                        onClick={() => handleAction('STUDY')}
                        className="flex flex-col items-center justify-center p-4 bg-indigo-50 text-indigo-600 rounded-2xl hover:bg-indigo-100 transition-colors gap-2"
                      >
                          <GraduationCap size={24} />
                          <span className="font-bold text-sm">学习</span>
                      </button>

                      <button 
                        onClick={() => handleAction('KNOWN')}
                        className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-colors gap-2 border-2 ${
                            getCharStatus(selectedChar.char) === 'KNOWN' ? 'bg-green-100 border-green-300 text-green-700' : 'bg-white border-green-100 text-green-600 hover:bg-green-50'
                        }`}
                      >
                          <Check size={24} />
                          <span className="font-bold text-sm">认识</span>
                      </button>

                      <button 
                        onClick={() => handleAction('UNKNOWN')}
                        className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-colors gap-2 border-2 ${
                            getCharStatus(selectedChar.char) === 'UNKNOWN' ? 'bg-orange-100 border-orange-300 text-orange-700' : 'bg-white border-orange-100 text-orange-600 hover:bg-orange-50'
                        }`}
                      >
                          <X size={24} />
                          <span className="font-bold text-sm">不认识</span>
                      </button>
                  </div>
              </div>
          </div>
      )}

    </div>
  );
};