import React, { useState, useEffect } from 'react';
import { ArrowLeft, Book, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { Character } from '../types';
import { getKnownCharacters, getUnknownCharacters, addKnownCharacter, addUnknownCharacter, getCharacterLearnCount } from '../services/storage';

interface CharacterBankViewProps {
  onBack: () => void;
}

export const CharacterBankView: React.FC<CharacterBankViewProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'KNOWN' | 'UNKNOWN'>('KNOWN');
  const [knownList, setKnownList] = useState<Character[]>([]);
  const [unknownList, setUnknownList] = useState<Character[]>([]);

  useEffect(() => {
    refreshLists();
  }, []);

  const refreshLists = () => {
    setKnownList(getKnownCharacters());
    setUnknownList(getUnknownCharacters());
  };

  const toggleStatus = (char: Character, toStatus: 'KNOWN' | 'UNKNOWN') => {
    if (toStatus === 'KNOWN') {
      addKnownCharacter(char);
    } else {
      addUnknownCharacter(char);
    }
    refreshLists();
  };

  const currentList = activeTab === 'KNOWN' ? knownList : unknownList;

  return (
    <div className="max-w-4xl mx-auto p-4 min-h-screen animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={onBack}
          className="p-3 bg-white rounded-full shadow-md hover:bg-gray-50 text-gray-600 transition-all"
        >
          <ArrowLeft />
        </button>
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Book className="text-blue-500" />
          我的字库
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex bg-white p-1 rounded-2xl shadow-sm border border-gray-100 mb-6">
        <button
          onClick={() => setActiveTab('KNOWN')}
          className={`flex-1 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
            activeTab === 'KNOWN' 
              ? 'bg-green-100 text-green-700 shadow-sm' 
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <CheckCircle size={20} />
          已认识 ({knownList.length})
        </button>
        <button
          onClick={() => setActiveTab('UNKNOWN')}
          className={`flex-1 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
            activeTab === 'UNKNOWN' 
              ? 'bg-orange-100 text-orange-700 shadow-sm' 
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <XCircle size={20} />
          生字本 ({unknownList.length})
        </button>
      </div>

      {/* Grid */}
      <div className="bg-white rounded-3xl shadow-lg p-6 min-h-[50vh] border-2 border-gray-100">
        {currentList.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-gray-400">
            <span className="text-4xl mb-4">📭</span>
            <p>这里还是空的哦</p>
          </div>
        ) : (
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
            {currentList.map((char, idx) => {
              const learnCount = getCharacterLearnCount(char.char);
              return (
                <div key={`${char.char}-${idx}`} className="relative group">
                  <div className="aspect-square bg-gray-50 rounded-xl border border-gray-100 flex flex-col items-center justify-center cursor-default relative overflow-hidden">
                    <span className="font-fun text-2xl text-gray-800">{char.char}</span>
                    <span className="text-[10px] text-gray-400">{char.pinyin}</span>
                    
                    {/* Learn Count Badge */}
                    {learnCount > 0 && (
                      <div className="absolute top-1 right-1 flex items-center gap-0.5 bg-blue-100 text-blue-600 px-1 rounded-full text-[8px] font-bold">
                        <RotateCcw size={6} />
                        {learnCount}
                      </div>
                    )}
                  </div>
                  
                  {/* Overlay Action */}
                  <button
                    onClick={() => toggleStatus(char, activeTab === 'KNOWN' ? 'UNKNOWN' : 'KNOWN')}
                    className="absolute inset-0 bg-black/60 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-xs font-bold"
                  >
                    {activeTab === 'KNOWN' ? (
                      <>
                        <XCircle className="mb-1 text-orange-300" />
                        <span>标为生字</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="mb-1 text-green-300" />
                        <span>标为认识</span>
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
