import React, { useState, useEffect } from 'react';
import { X, Save, Settings as SettingsIcon, Download, Upload, Check } from 'lucide-react';
import { AppSettings, Curriculum } from '../types';
import { getSettings, saveSettings, exportUserData, importUserData } from '../services/storage';
import { APP_DATA } from '../data';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const [config, setConfig] = useState<AppSettings>({
    apiBaseUrl: '',
    apiKey: '',
    model: 'gemini-2.5-flash',
    ttsRate: 1.0,
    ttsVoice: '',
    selectedCurriculumId: '',
    selectedGradeId: ''
  });
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [importText, setImportText] = useState('');
  const [showImportArea, setShowImportArea] = useState(false);
  const [importStatus, setImportStatus] = useState<'IDLE' | 'SUCCESS' | 'ERROR'>('IDLE');

  useEffect(() => {
    if (isOpen) {
      setConfig(getSettings());
      
      const updateVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        const zhVoices = voices.filter(v => v.lang.includes('zh') || v.lang.includes('CN'));
        setAvailableVoices(zhVoices.length > 0 ? zhVoices : voices);
      };
      updateVoices();
      window.speechSynthesis.onvoiceschanged = updateVoices;
      return () => { window.speechSynthesis.onvoiceschanged = null; };
    }
  }, [isOpen]);

  const handleSave = () => {
    saveSettings(config);
    // Reload page to apply curriculum changes freshly or trigger a callback (simplest is just close for now, app state will read from storage on next render or we can force reload)
    window.location.reload(); 
    onClose();
  };

  const handleExport = () => {
    const data = exportUserData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hanzi-hero-backup-${new Date().toISOString().slice(0,10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    const success = importUserData(importText);
    if (success) {
      setImportStatus('SUCCESS');
      setTimeout(() => {
         window.location.reload();
      }, 1000);
    } else {
      setImportStatus('ERROR');
    }
  };

  // Helper to get grades for currently selected curriculum
  const currentCurriculum = APP_DATA.find(c => c.id === config.selectedCurriculumId);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl border-4 border-indigo-100 overflow-hidden flex flex-col max-h-[90vh]">
        <div className="bg-indigo-50 p-4 border-b border-indigo-100 flex justify-between items-center shrink-0">
          <h2 className="text-xl font-bold text-indigo-900 flex items-center gap-2">
            <SettingsIcon size={20} /> 全局设置
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-indigo-200 rounded-full transition-colors text-indigo-700">
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-8 overflow-y-auto custom-scrollbar flex-1">
          {/* Textbook Settings */}
          <div className="space-y-4">
             <h3 className="font-bold text-gray-800 border-b pb-2 flex items-center gap-2">
                📚 教材选择
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                   <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">教材版本</label>
                   <select
                     className="w-full p-3 rounded-xl border border-gray-300 focus:border-indigo-500 outline-none bg-white"
                     value={config.selectedCurriculumId}
                     onChange={e => {
                        const newCurr = APP_DATA.find(c => c.id === e.target.value);
                        setConfig({
                          ...config, 
                          selectedCurriculumId: e.target.value,
                          // Reset grade if curriculum changes
                          selectedGradeId: newCurr?.grades[0]?.id || ''
                        })
                     }}
                   >
                     <option value="">请选择教材</option>
                     {APP_DATA.map(c => (
                       <option key={c.id} value={c.id}>{c.name}</option>
                     ))}
                   </select>
                </div>
                <div>
                   <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">年级</label>
                   <select
                     className="w-full p-3 rounded-xl border border-gray-300 focus:border-indigo-500 outline-none bg-white"
                     value={config.selectedGradeId}
                     onChange={e => setConfig({...config, selectedGradeId: e.target.value})}
                     disabled={!currentCurriculum}
                   >
                     <option value="">请选择年级</option>
                     {currentCurriculum?.grades.map(g => (
                       <option key={g.id} value={g.id}>{g.name}</option>
                     ))}
                   </select>
                </div>
             </div>
          </div>

          {/* AI Settings */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-800 border-b pb-2">🧠 AI 配置</h3>
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-1">API KEY</label>
              <input
                type="password"
                placeholder="sk-..."
                className="w-full p-3 rounded-xl border border-gray-300 focus:border-indigo-500 outline-none text-sm"
                value={config.apiKey}
                onChange={e => setConfig({ ...config, apiKey: e.target.value })}
              />
            </div>
             <div>
              <label className="block text-xs font-bold text-gray-500 mb-1">API BASE URL (可选)</label>
              <input
                type="text"
                placeholder="默认 Gemini API"
                className="w-full p-3 rounded-xl border border-gray-300 focus:border-indigo-500 outline-none text-sm"
                value={config.apiBaseUrl}
                onChange={e => setConfig({ ...config, apiBaseUrl: e.target.value })}
              />
            </div>
          </div>

          {/* TTS Settings */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-800 border-b pb-2">🔊 语音设置</h3>
            <div className="flex gap-4">
               <div className="flex-1">
                  <label className="block text-xs font-bold text-gray-500 mb-1">音色</label>
                  <select 
                    className="w-full p-3 rounded-xl border border-gray-300 focus:border-indigo-500 outline-none text-sm bg-white"
                    value={config.ttsVoice}
                    onChange={e => setConfig({ ...config, ttsVoice: e.target.value })}
                  >
                    <option value="">默认声音</option>
                    {availableVoices.map((v) => (
                      <option key={v.voiceURI} value={v.voiceURI}>
                        {v.name}
                      </option>
                    ))}
                  </select>
               </div>
               <div className="w-1/3">
                 <label className="block text-xs font-bold text-gray-500 mb-1">语速 {config.ttsRate}x</label>
                 <input
                   type="range"
                   min="0.5"
                   max="1.5"
                   step="0.1"
                   className="w-full h-2 bg-indigo-100 rounded-lg mt-4 cursor-pointer"
                   value={config.ttsRate}
                   onChange={e => setConfig({ ...config, ttsRate: parseFloat(e.target.value) })}
                 />
               </div>
            </div>
          </div>

          {/* Data Management */}
           <div className="space-y-4">
            <h3 className="font-bold text-gray-800 border-b pb-2">💾 数据管理</h3>
            <div className="flex gap-4">
              <button onClick={handleExport} className="flex-1 py-3 border-2 border-indigo-100 text-indigo-600 rounded-xl hover:bg-indigo-50 font-bold flex items-center justify-center gap-2">
                <Download size={18} /> 导出数据
              </button>
              <button onClick={() => setShowImportArea(!showImportArea)} className="flex-1 py-3 border-2 border-indigo-100 text-indigo-600 rounded-xl hover:bg-indigo-50 font-bold flex items-center justify-center gap-2">
                <Upload size={18} /> 导入数据
              </button>
            </div>
            
            {showImportArea && (
              <div className="mt-2 bg-gray-50 p-4 rounded-xl border border-gray-200">
                <textarea 
                  className="w-full h-24 p-2 text-xs border rounded-lg mb-2 font-mono"
                  placeholder="在此粘贴 JSON 数据..."
                  value={importText}
                  onChange={e => setImportText(e.target.value)}
                />
                <button 
                  onClick={handleImport}
                  className={`w-full py-2 rounded-lg text-white font-bold transition-colors ${
                    importStatus === 'SUCCESS' ? 'bg-green-500' : importStatus === 'ERROR' ? 'bg-red-500' : 'bg-indigo-600'
                  }`}
                >
                  {importStatus === 'SUCCESS' ? <span className="flex items-center justify-center gap-2"><Check size={16}/> 导入成功! 即将刷新</span> : importStatus === 'ERROR' ? '格式错误，请重试' : '确认导入'}
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="p-4 border-t border-gray-100 bg-gray-50 shrink-0">
          <button
            onClick={handleSave}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2"
          >
            <Save size={20} /> 保存并在首页生效
          </button>
        </div>
      </div>
    </div>
  );
};
