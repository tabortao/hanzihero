import React, { useState, useEffect } from 'react';
import { User, Save, Download, Upload, Check, Activity, Wifi, HelpCircle, Info, Book, Zap, ArrowLeft, Sliders, FileText } from 'lucide-react';
import { AppSettings } from '../types';
import { getSettings, saveSettings, exportUserData, importUserData } from '../services/storage';
import { testConnection } from '../services/geminiService';
import { APP_DATA } from '../data';

export const ProfileView: React.FC = () => {
  const [view, setView] = useState<'MAIN' | 'HELP'>('MAIN');
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
  
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [testStatus, setTestStatus] = useState<'IDLE' | 'TESTING' | 'SUCCESS' | 'FAIL'>('IDLE');
  const [importStatus, setImportStatus] = useState<'IDLE' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [showImport, setShowImport] = useState(false);
  const [importText, setImportText] = useState('');

  useEffect(() => {
    setConfig(getSettings());
    const updateVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      const zhVoices = voices.filter(v => v.lang.includes('zh') || v.lang.includes('CN'));
      setAvailableVoices(zhVoices.length > 0 ? zhVoices : voices);
    };
    updateVoices();
    window.speechSynthesis.onvoiceschanged = updateVoices;
  }, []);

  const handleSave = () => {
    saveSettings(config);
    window.location.reload(); // Reload to apply global changes effectively
  };

  const handleTestConnection = async () => {
    setTestStatus('TESTING');
    const success = await testConnection(config);
    setTestStatus(success ? 'SUCCESS' : 'FAIL');
    setTimeout(() => setTestStatus('IDLE'), 3000);
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
  };

  const handleImport = () => {
    if (importUserData(importText)) {
        setImportStatus('SUCCESS');
        setTimeout(() => window.location.reload(), 1000);
    } else {
        setImportStatus('ERROR');
    }
  };

  const currentCurriculum = APP_DATA.find(c => c.id === config.selectedCurriculumId);

  if (view === 'HELP') {
      return (
          <div className="max-w-4xl mx-auto min-h-screen bg-white pb-24 animate-fade-in">
             <div className="bg-indigo-50 px-6 py-6 shadow-sm border-b border-indigo-100 sticky top-0 z-10">
                <button onClick={() => setView('MAIN')} className="flex items-center gap-2 text-indigo-700 font-bold">
                    <ArrowLeft size={20} /> 返回设置
                </button>
                <h1 className="text-2xl font-bold text-indigo-900 mt-4">帮助与设计理念</h1>
             </div>
             
             <div className="p-6 space-y-8">
                 {/* 3-1-3 Method */}
                 <div>
                     <h4 className="font-bold text-blue-800 text-lg flex items-center gap-2 mb-3">
                         <Activity size={24} className="text-blue-600"/> 3-1-3 科学识字法
                     </h4>
                     <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 text-sm text-gray-700 leading-relaxed space-y-4">
                         <p>本应用核心基于“艾宾浩斯遗忘曲线”设计了智能复习算法。</p>
                         <p>当您使用<span className="font-bold text-blue-700">“每日挑战”</span>功能时，系统会自动筛选以下三类汉字：</p>
                         <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                             <li className="bg-white p-4 rounded-xl shadow-sm border border-blue-50">
                                 <div className="text-3xl font-fun text-blue-400 mb-2">3</div>
                                 <div className="font-bold text-gray-800 mb-1">关键回顾</div>
                                 <div className="text-xs text-gray-500">3天前学习过的字，这是记忆流失的关键节点。</div>
                             </li>
                             <li className="bg-white p-4 rounded-xl shadow-sm border border-blue-50">
                                 <div className="text-3xl font-fun text-blue-400 mb-2">1</div>
                                 <div className="font-bold text-gray-800 mb-1">短期巩固</div>
                                 <div className="text-xs text-gray-500">昨天（1天前）刚学的字，趁热打铁。</div>
                             </li>
                             <li className="bg-white p-4 rounded-xl shadow-sm border border-blue-50">
                                 <div className="text-3xl font-fun text-blue-400 mb-2">3</div>
                                 <div className="font-bold text-gray-800 mb-1">新知摄入</div>
                                 <div className="text-xs text-gray-500">新单元中的3个生字，保持学习进度。</div>
                             </li>
                         </ul>
                     </div>
                 </div>

                 {/* Story Feature */}
                 <div>
                     <h4 className="font-bold text-amber-800 text-lg flex items-center gap-2 mb-3">
                         <Book size={24} className="text-amber-600"/> AI 短文故事
                     </h4>
                     <div className="bg-amber-50 p-6 rounded-3xl border border-amber-100 text-sm text-gray-700 leading-relaxed">
                         <p>单纯的识字容易枯燥且难以致用。通过“短文”功能，AI 会利用孩子<span className="font-bold text-amber-700">“我的字库”</span>中已经掌握的字，编写出独一无二的趣味小故事。</p>
                         <p className="mt-4">这不仅能提高阅读兴趣，还能在真实的语境中彻底掌握汉字的用法。您可以设置生成短文的字数限制，循序渐进。</p>
                     </div>
                 </div>
                 
                 {/* Learning Structure */}
                 <div>
                     <h4 className="font-bold text-green-800 text-lg flex items-center gap-2 mb-3">
                         <Zap size={24} className="text-green-600"/> 全方位学习闭环
                     </h4>
                     <div className="bg-green-50 p-6 rounded-3xl border border-green-100 text-sm text-gray-700 leading-relaxed grid grid-cols-1 md:grid-cols-3 gap-6">
                         <div>
                             <span className="font-bold block text-green-800 mb-1">识字</span>
                             结合笔画、田字格、组词、造句和结构拆解，全维度认知。
                         </div>
                         <div>
                             <span className="font-bold block text-green-800 mb-1">巩固</span>
                             生字本自动收集难点，每日挑战智能安排复习。
                         </div>
                         <div>
                             <span className="font-bold block text-green-800 mb-1">应用</span>
                             阅读生成的短文，实现从“认字”到“阅读”的跨越。
                         </div>
                     </div>
                 </div>
             </div>
          </div>
      );
  }

  return (
    <div className="max-w-4xl mx-auto min-h-screen bg-gray-50 pb-24">
       <div className="bg-white px-6 py-8 shadow-sm">
          <h1 className="text-2xl font-bold flex items-center gap-2 mb-2">
              <User className="text-indigo-600" /> 我的设置
          </h1>
          <p className="text-gray-400 text-sm">配置学习计划与AI参数</p>
       </div>

       <div className="p-4 space-y-6">
          
          {/* Textbook */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
             <h3 className="font-bold text-gray-800 border-b pb-3 mb-4">📚 教材选择</h3>
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

          {/* AI */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
             <h3 className="font-bold text-gray-800 border-b pb-3 mb-4">🧠 AI 配置</h3>
             <div className="space-y-3">
                <input
                    type="text"
                    placeholder="API Base URL (Optional)"
                    className="w-full p-3 rounded-xl border border-gray-300 text-sm"
                    value={config.apiBaseUrl}
                    onChange={e => setConfig({ ...config, apiBaseUrl: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="API Key"
                    className="w-full p-3 rounded-xl border border-gray-300 text-sm"
                    value={config.apiKey}
                    onChange={e => setConfig({ ...config, apiKey: e.target.value })}
                />
                <div className="flex justify-between items-center">
                    <input
                        type="text"
                        placeholder="Model Name (e.g., gemini-2.5-flash)"
                        className="w-2/3 p-3 rounded-xl border border-gray-300 text-sm"
                        value={config.model}
                        onChange={e => setConfig({ ...config, model: e.target.value })}
                    />
                    <button
                        onClick={handleTestConnection}
                        disabled={testStatus === 'TESTING'}
                        className={`ml-2 px-4 py-3 rounded-xl text-sm font-bold flex items-center gap-2 border ${
                            testStatus === 'SUCCESS' ? 'bg-green-50 border-green-200 text-green-600' :
                            testStatus === 'FAIL' ? 'bg-red-50 border-red-200 text-red-600' :
                            'bg-gray-50 border-gray-200 text-gray-600'
                        }`}
                    >
                        {testStatus === 'TESTING' ? <Activity className="animate-spin" size={16} /> : 
                         testStatus === 'SUCCESS' ? <Wifi size={16} /> : <Activity size={16} />}
                        {testStatus === 'SUCCESS' ? '成功' : testStatus === 'FAIL' ? '失败' : '测试'}
                    </button>
                </div>
             </div>
          </div>
          
           {/* Voice & Habits */}
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
             <h3 className="font-bold text-gray-800 border-b pb-3 mb-4">⚙️ 习惯与语音</h3>
             <div className="space-y-4">
                 <div>
                    <label className="text-xs font-bold text-gray-500 mb-1 block">每日挑战数量: {config.dailyLimit} 字</label>
                    <input
                        type="range"
                        min="5"
                        max="30"
                        className="w-full h-2 bg-indigo-100 rounded-lg"
                        value={config.dailyLimit}
                        onChange={e => setConfig({ ...config, dailyLimit: parseInt(e.target.value) })}
                    />
                 </div>
                 <div>
                    <label className="text-xs font-bold text-gray-500 mb-1 block">短文最大字数: {config.storyLength || 50} 字</label>
                    <input
                        type="range"
                        min="20"
                        max="200"
                        step="10"
                        className="w-full h-2 bg-amber-100 rounded-lg"
                        value={config.storyLength || 50}
                        onChange={e => setConfig({ ...config, storyLength: parseInt(e.target.value) })}
                    />
                 </div>
                 <div>
                    <label className="text-xs font-bold text-gray-500 mb-1 block">语速: {config.ttsRate}x</label>
                    <input
                        type="range"
                        min="0.5"
                        max="1.5"
                        step="0.1"
                        className="w-full h-2 bg-indigo-100 rounded-lg"
                        value={config.ttsRate}
                        onChange={e => setConfig({ ...config, ttsRate: parseFloat(e.target.value) })}
                    />
                 </div>
                 <div>
                    <select 
                        className="w-full p-3 rounded-xl border border-gray-300 text-sm bg-white"
                        value={config.ttsVoice}
                        onChange={e => setConfig({ ...config, ttsVoice: e.target.value })}
                    >
                        <option value="">默认声音</option>
                        {availableVoices.map((v) => (
                        <option key={v.voiceURI} value={v.voiceURI}>{v.name}</option>
                        ))}
                    </select>
                 </div>
             </div>
           </div>

           {/* Data */}
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <h3 className="font-bold text-gray-800 border-b pb-3 mb-4">💾 数据管理</h3>
               <div className="flex gap-4 mb-4">
                  <button onClick={handleExport} className="flex-1 py-3 border border-indigo-100 text-indigo-600 rounded-xl hover:bg-indigo-50 font-bold flex justify-center gap-2">
                      <Download size={18} /> 导出
                  </button>
                  <button onClick={() => setShowImport(!showImport)} className="flex-1 py-3 border border-indigo-100 text-indigo-600 rounded-xl hover:bg-indigo-50 font-bold flex justify-center gap-2">
                      <Upload size={18} /> 导入
                  </button>
               </div>
               
               <button 
                  onClick={() => setView('HELP')} 
                  className="w-full py-3 border border-blue-100 text-blue-600 rounded-xl hover:bg-blue-50 font-bold flex justify-center gap-2 mb-4"
               >
                  <HelpCircle size={18} /> 帮助与设计理念
               </button>

               {showImport && (
                   <div className="bg-gray-50 p-3 rounded-xl">
                       <textarea 
                           className="w-full h-20 p-2 text-xs border rounded mb-2"
                           placeholder="Paste JSON here..."
                           value={importText}
                           onChange={e => setImportText(e.target.value)}
                       />
                       <button onClick={handleImport} className="w-full py-2 bg-indigo-600 text-white rounded-lg font-bold text-sm">
                           {importStatus === 'SUCCESS' ? '导入成功' : importStatus === 'ERROR' ? '格式错误' : '确认导入'}
                       </button>
                   </div>
               )}
           </div>
           
           <button 
             onClick={handleSave}
             className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg flex justify-center gap-2"
           >
              <Save /> 保存设置
           </button>
       </div>
    </div>
  );
};