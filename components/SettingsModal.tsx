
import React, { useState, useEffect, useMemo } from 'react';
import { X, Save, Settings as SettingsIcon, Download, Upload, Check, Activity, Wifi, WifiOff, HelpCircle, Eye, EyeOff, Server } from 'lucide-react';
import { AppSettings, Curriculum } from '../types';
import { getSettings, saveSettings, exportUserData, importUserData, getCustomCurricula } from '../services/storage';
import { testConnection } from '../services/geminiService';
import { APP_DATA } from '../data';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PROVIDERS = {
    GOOGLE: { name: 'Google Gemini', url: '', model: 'gemini-2.5-flash' },
    DEEPSEEK: { name: 'DeepSeek (Official)', url: 'https://api.deepseek.com', model: 'deepseek-chat' },
    SILICON: { name: 'SiliconFlow (硅基流动)', url: 'https://api.siliconflow.cn/v1', model: 'deepseek-ai/DeepSeek-V3' },
    CUSTOM: { name: '自定义 / OpenAI 兼容', url: '', model: '' }
};

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const [config, setConfig] = useState<AppSettings>({
    apiBaseUrl: '',
    apiKey: '',
    model: 'gemini-2.5-flash',
    ttsRate: 1.0,
    ttsVoice: '',
    dailyLimit: 10,
    storyLength: 50,
    selectedCurriculumId: '',
    selectedGradeId: ''
  });
  
  const [activeProvider, setActiveProvider] = useState<string>('GOOGLE');
  const [showKey, setShowKey] = useState(false);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [importText, setImportText] = useState('');
  const [showImportArea, setShowImportArea] = useState(false);
  const [importStatus, setImportStatus] = useState<'IDLE' | 'SUCCESS' | 'ERROR'>('IDLE');
  
  const [testStatus, setTestStatus] = useState<'IDLE' | 'TESTING' | 'SUCCESS' | 'FAIL'>('IDLE');

  // Combine static and custom curricula
  const allCurricula = useMemo(() => {
     const custom = getCustomCurricula();
     return [...APP_DATA, ...custom];
  }, [isOpen]); // Refresh when modal opens

  useEffect(() => {
    if (isOpen) {
      const saved = getSettings();
      setConfig(saved);
      setTestStatus('IDLE');
      
      // Determine provider from saved URL
      if (!saved.apiBaseUrl) {
          setActiveProvider('GOOGLE');
      } else if (saved.apiBaseUrl.includes('deepseek.com')) {
          setActiveProvider('DEEPSEEK');
      } else if (saved.apiBaseUrl.includes('siliconflow')) {
          setActiveProvider('SILICON');
      } else {
          setActiveProvider('CUSTOM');
      }
      
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

  const handleProviderChange = (providerKey: string) => {
      setActiveProvider(providerKey);
      const provider = PROVIDERS[providerKey as keyof typeof PROVIDERS];
      if (providerKey !== 'CUSTOM') {
          setConfig(prev => ({
              ...prev,
              apiBaseUrl: provider.url,
              model: provider.model
          }));
      }
  };

  const handleSave = () => {
    saveSettings(config);
    onClose();
  };

  const handleTestConnection = async () => {
    setTestStatus('TESTING');
    const success = await testConnection(config);
    setTestStatus(success ? 'SUCCESS' : 'FAIL');
    
    setTimeout(() => {
        if (isOpen) setTestStatus('IDLE');
    }, 3000);
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

  const currentCurriculum = allCurricula.find(c => c.id === config.selectedCurriculumId);

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
                        const newCurr = allCurricula.find(c => c.id === e.target.value);
                        setConfig({
                          ...config, 
                          selectedCurriculumId: e.target.value,
                          // Reset grade if curriculum changes
                          selectedGradeId: newCurr?.grades[0]?.id || ''
                        })
                     }}
                   >
                     <option value="">请选择教材</option>
                     {allCurricula.map(c => (
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
          <div className="space-y-4 bg-gray-50 p-4 rounded-2xl border border-gray-200">
            <h3 className="font-bold text-gray-800 border-b pb-2 flex items-center gap-2">
                <Server size={18} className="text-indigo-600"/> AI 模型配置
            </h3>
            
            {/* Provider Selector */}
            <div>
                <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">AI 服务商</label>
                <div className="grid grid-cols-2 gap-2">
                    {Object.entries(PROVIDERS).map(([key, provider]) => (
                        <button
                            key={key}
                            onClick={() => handleProviderChange(key)}
                            className={`px-3 py-2 rounded-lg text-xs font-bold border transition-all truncate ${
                                activeProvider === key 
                                ? 'bg-indigo-600 text-white border-indigo-600' 
                                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-100'
                            }`}
                        >
                            {provider.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* API Base URL */}
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">
                  API 代理地址 (API Host)
                  {activeProvider === 'GOOGLE' && <span className="text-gray-400 font-normal ml-2">(默认为空)</span>}
              </label>
              <input
                type="text"
                placeholder={activeProvider === 'GOOGLE' ? '默认无需填写' : 'https://api.example.com/v1'}
                className="w-full p-3 rounded-xl border border-gray-300 focus:border-indigo-500 outline-none text-sm font-mono"
                value={config.apiBaseUrl}
                onChange={e => {
                    setConfig({ ...config, apiBaseUrl: e.target.value });
                    if(activeProvider !== 'CUSTOM') setActiveProvider('CUSTOM');
                }}
              />
            </div>

            {/* API Key */}
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">API Key (密钥)</label>
              <div className="relative">
                  <input
                    type={showKey ? "text" : "password"}
                    placeholder="sk-..."
                    className="w-full p-3 pr-10 rounded-xl border border-gray-300 focus:border-indigo-500 outline-none text-sm font-mono"
                    value={config.apiKey}
                    onChange={e => setConfig({ ...config, apiKey: e.target.value })}
                  />
                  <button 
                    onClick={() => setShowKey(!showKey)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                      {showKey ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
              </div>
            </div>

            {/* Model Name */}
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">模型名称 (Model)</label>
              <input
                type="text"
                placeholder="如: gemini-2.5-flash 或 deepseek-chat"
                className="w-full p-3 rounded-xl border border-gray-300 focus:border-indigo-500 outline-none text-sm font-mono"
                value={config.model}
                onChange={e => setConfig({ ...config, model: e.target.value })}
              />
            </div>

            {/* Test Connection Button */}
            <div className="flex items-center gap-3 pt-2">
                <button
                    onClick={handleTestConnection}
                    disabled={testStatus === 'TESTING'}
                    className={`w-full py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-colors border shadow-sm ${
                        testStatus === 'SUCCESS' ? 'bg-green-50 border-green-200 text-green-600' :
                        testStatus === 'FAIL' ? 'bg-red-50 border-red-200 text-red-600' :
                        'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                >
                    {testStatus === 'TESTING' ? (
                        <>
                            <Activity className="animate-spin" size={16} /> 连接测试中...
                        </>
                    ) : testStatus === 'SUCCESS' ? (
                        <>
                            <Wifi size={16} /> 连接成功
                        </>
                    ) : testStatus === 'FAIL' ? (
                        <>
                            <WifiOff size={16} /> 连接失败
                        </>
                    ) : (
                        <>
                            <Activity size={16} /> 测试 AI 连接
                        </>
                    )}
                </button>
            </div>
          </div>

          {/* TTS & Daily Settings */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-800 border-b pb-2">⚙️ 习惯设置</h3>
            
            <div className="flex flex-col gap-4">
               {/* Daily Limit */}
               <div>
                 <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-gray-500">每日挑战复习量</label>
                    <span className="text-sm font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{config.dailyLimit || 10} 张</span>
                 </div>
                 <input
                   type="range"
                   min="5"
                   max="30"
                   step="1"
                   className="w-full h-2 bg-indigo-100 rounded-lg cursor-pointer"
                   value={config.dailyLimit || 10}
                   onChange={e => setConfig({ ...config, dailyLimit: parseInt(e.target.value) })}
                 />
               </div>

               {/* Voice Speed */}
               <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-gray-500">语音朗读速度</label>
                    <span className="text-sm font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{config.ttsRate}x</span>
                  </div>
                 <input
                   type="range"
                   min="0.5"
                   max="1.5"
                   step="0.1"
                   className="w-full h-2 bg-indigo-100 rounded-lg cursor-pointer"
                   value={config.ttsRate}
                   onChange={e => setConfig({ ...config, ttsRate: parseFloat(e.target.value) })}
                 />
               </div>

               {/* Voice Select */}
               <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1">朗读音色</label>
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
            </div>
          </div>
          
          {/* About / Help Section */}
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100 space-y-2">
             <h3 className="font-bold text-blue-800 flex items-center gap-2">
                <HelpCircle size={18} /> 关于 3-1-3 识字法
             </h3>
             <p className="text-xs text-blue-700 leading-relaxed">
                <span className="font-bold">设计理念：</span> 本应用基于“艾宾浩斯遗忘曲线”设计的 3-1-3 记忆规律。
             </p>
             <ul className="text-xs text-blue-600 list-disc list-inside space-y-1">
                <li><span className="font-bold">3：</span> 每天复习 <span className="underline">3天前</span> 学习的汉字。</li>
                <li><span className="font-bold">1：</span> 每天复习 <span className="underline">1天前</span>（昨天）学习的汉字。</li>
                <li><span className="font-bold">3：</span> 每天学习 <span className="underline">3个</span>（或更多）新汉字。</li>
             </ul>
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
            <Save size={20} /> 保存配置
          </button>
        </div>
      </div>
    </div>
  );
};
