import React, { useState, useEffect, useMemo } from 'react';
import { User, Save, Download, Upload, Activity, Wifi, HelpCircle, Book, Zap, ArrowLeft, Server, Eye, EyeOff, WifiOff, Check, FileJson, Database } from 'lucide-react';
import { AppSettings } from '../types';
import { getSettings, saveSettings, exportUserData, importUserData, getCustomCurricula } from '../services/storage';
import { testConnection } from '../services/geminiService';
import { APP_DATA, GRADE_PRESETS } from '../data';

const PROVIDERS = {
    GOOGLE: { name: 'Google Gemini', url: '', model: 'gemini-2.5-flash' },
    DEEPSEEK: { name: 'DeepSeek (Official)', url: 'https://api.deepseek.com', model: 'deepseek-chat' },
    SILICON: { name: 'SiliconFlow (硅基流动)', url: 'https://api.siliconflow.cn/v1', model: 'deepseek-ai/DeepSeek-V3' },
    CUSTOM: { name: '自定义 / OpenAI 兼容', url: '', model: '' }
};

interface ProfileViewProps {
    onSave?: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ onSave }) => {
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
  
  const [activeProvider, setActiveProvider] = useState<string>('GOOGLE');
  const [showKey, setShowKey] = useState(false);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [testStatus, setTestStatus] = useState<'IDLE' | 'TESTING' | 'SUCCESS' | 'FAIL'>('IDLE');
  const [saveStatus, setSaveStatus] = useState<'IDLE' | 'SAVED'>('IDLE');
  
  // Import State
  const [showImport, setShowImport] = useState(false);
  const [importStatus, setImportStatus] = useState<'IDLE' | 'READING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [importErrorMsg, setImportErrorMsg] = useState('');

  // Merge APP_DATA and Custom Data
  const allCurricula = useMemo(() => {
      const customs = getCustomCurricula();
      return [...APP_DATA, ...customs];
  }, []); // Reload only on mount is acceptable here as profile usually re-mounts

  useEffect(() => {
    const saved = getSettings();
    setConfig(saved);
    
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
  }, []);

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
    try {
        saveSettings(config);
        setSaveStatus('SAVED');
        
        // Use callback to navigate instead of reloading page
        if (onSave) {
            setTimeout(() => {
                onSave();
            }, 800);
        } else {
            setTimeout(() => setSaveStatus('IDLE'), 2000);
        }
    } catch (e) {
        console.error("Save failed", e);
        alert("保存失败，请重试");
    }
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

  const handleFileImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setImportStatus('READING');
    const reader = new FileReader();
    
    reader.onload = (e) => {
        try {
            const jsonStr = e.target?.result as string;
            if (!jsonStr) throw new Error("File is empty");
            
            // Validate JSON
            const data = JSON.parse(jsonStr);
            if (!data || typeof data !== 'object') throw new Error("Invalid JSON format");

            // Attempt Import
            const success = importUserData(jsonStr);
            if (success) {
                setImportStatus('SUCCESS');
                setTimeout(() => {
                    window.location.reload(); 
                }, 1500);
            } else {
                throw new Error("Import logic failed");
            }
        } catch (err: any) {
            console.error("Import error:", err);
            setImportStatus('ERROR');
            setImportErrorMsg(err.message || "Unknown error");
        }
    };
    
    reader.readAsText(file);
    // Reset input value so same file can be selected again if needed
    event.target.value = ''; 
  };

  // Safe access to current curriculum
  const currentCurriculum = allCurricula.find(c => c.id === config.selectedCurriculumId);

  const gradeOptions = useMemo(() => {
      const options: {id: string, name: string}[] = [];
      const existingNames = new Set<string>();

      if (currentCurriculum) {
          currentCurriculum.grades.forEach(g => {
              options.push({ id: g.id, name: g.name });
              existingNames.add(g.name);
          });
      }

      GRADE_PRESETS.forEach(presetName => {
          if (!existingNames.has(presetName)) {
              options.push({ id: presetName, name: presetName });
          }
      });
      return options;
  }, [currentCurriculum]);


  if (view === 'HELP') {
      return (
          <div className="max-w-7xl mx-auto min-h-screen bg-white pb-24 animate-fade-in">
             <div className="bg-indigo-50 px-6 py-4 shadow-sm border-b border-indigo-100 sticky top-0 z-10">
                <button onClick={() => setView('MAIN')} className="flex items-center gap-2 text-indigo-900 font-bold text-xl">
                    <ArrowLeft size={24} className="text-indigo-700" /> 帮助与设计理念
                </button>
             </div>
             
             <div className="p-6 space-y-8 max-w-4xl mx-auto">
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
    <div className="max-w-7xl mx-auto min-h-screen bg-gray-50 pb-24">
       <div className="bg-white px-6 py-8 shadow-sm">
          <h1 className="text-2xl font-bold flex items-center gap-2 mb-2">
              <User className="text-indigo-600" /> 我的设置
          </h1>
          <p className="text-gray-400 text-sm">配置学习计划与AI参数</p>
       </div>

       <div className="p-4 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Textbook */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
             <h3 className="font-bold text-gray-800 border-b pb-3 mb-4">📚 教材选择</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                   <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">教材版本</label>
                   <select
                     className="w-full p-3 rounded-xl border border-gray-300 focus:border-indigo-500 outline-none bg-white"
                     value={config.selectedCurriculumId}
                     onChange={e => {
                        const newCurrId = e.target.value;
                        const newCurr = allCurricula.find(c => c.id === newCurrId);
                        setConfig({
                          ...config, 
                          selectedCurriculumId: newCurrId,
                          // Reset grade to first available if switching curriculum
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
                     {gradeOptions.map(g => (
                         <option key={g.id} value={g.id}>{g.name}</option>
                     ))}
                   </select>
                </div>
             </div>
          </div>

          {/* AI Settings */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 row-span-2">
             <h3 className="font-bold text-gray-800 border-b pb-3 mb-4 flex items-center gap-2">
                 <Server size={18} className="text-indigo-600"/> AI 模型配置
             </h3>
             
             {/* Provider Selector */}
            <div className="mb-4">
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

             <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">API 代理地址 (Host)</label>
                    <input
                        type="text"
                        placeholder={activeProvider === 'GOOGLE' ? '默认无需填写' : 'https://api.example.com/v1'}
                        className="w-full p-3 rounded-xl border border-gray-300 text-sm font-mono"
                        value={config.apiBaseUrl}
                        onChange={e => {
                            setConfig({ ...config, apiBaseUrl: e.target.value });
                            if(activeProvider !== 'CUSTOM') setActiveProvider('CUSTOM');
                        }}
                    />
                </div>
                
                <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">API Key (密钥)</label>
                    <div className="relative">
                        <input
                            type={showKey ? "text" : "password"}
                            placeholder="sk-..."
                            className="w-full p-3 pr-10 rounded-xl border border-gray-300 text-sm font-mono"
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

                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                         <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">模型名称 (Model)</label>
                        <input
                            type="text"
                            placeholder="如: gemini-2.5-flash"
                            className="w-full p-3 rounded-xl border border-gray-300 text-sm font-mono"
                            value={config.model}
                            onChange={e => setConfig({ ...config, model: e.target.value })}
                        />
                    </div>
                    <div className="self-end w-full md:w-auto">
                         <button
                            onClick={handleTestConnection}
                            disabled={testStatus === 'TESTING'}
                            className={`w-full md:w-auto px-6 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 border ${
                                testStatus === 'SUCCESS' ? 'bg-green-50 border-green-200 text-green-600' :
                                testStatus === 'FAIL' ? 'bg-red-50 border-red-200 text-red-600' :
                                'bg-gray-50 border-gray-200 text-gray-600'
                            }`}
                        >
                            {testStatus === 'TESTING' ? <Activity className="animate-spin" size={16} /> : 
                            testStatus === 'SUCCESS' ? <Wifi size={16} /> : 
                            testStatus === 'FAIL' ? <WifiOff size={16} /> : <Activity size={16} />}
                            {testStatus === 'SUCCESS' ? '连接成功' : testStatus === 'FAIL' ? '连接失败' : '测试连接'}
                        </button>
                    </div>
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
                 
                 {/* Story Length */}
                 <div>
                    <div className="flex justify-between text-xs font-bold text-gray-500 mb-1">
                        <label>阅读最大字数 (上限 10000)</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="number"
                            min="10"
                            max="10000"
                            className="w-full p-3 rounded-xl border border-gray-300 focus:border-indigo-500 outline-none font-mono"
                            value={config.storyLength || ''}
                            onChange={e => {
                                const strVal = e.target.value;
                                if (strVal === '') {
                                    setConfig({ ...config, storyLength: 0 });
                                    return;
                                }
                                let val = parseInt(strVal);
                                if (isNaN(val)) val = 0;
                                if (val > 10000) val = 10000;
                                setConfig({ ...config, storyLength: val });
                            }}
                        />
                        <span className="text-sm font-bold text-indigo-600 bg-indigo-50 px-3 py-3 rounded-xl border border-indigo-100">
                            字
                        </span>
                    </div>
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

           {/* Data Management */}
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 lg:col-span-2">
               <h3 className="font-bold text-gray-800 border-b pb-3 mb-4 flex items-center gap-2">
                   <Database size={18} className="text-indigo-600"/> 数据备份与恢复
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col justify-between">
                      <div className="mb-2">
                          <h4 className="font-bold text-gray-700">导出数据</h4>
                          <p className="text-xs text-gray-400 mt-1">保存所有学习进度、设置和自定义内容到本地文件。</p>
                      </div>
                      <button onClick={handleExport} className="w-full py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-indigo-300 hover:text-indigo-600 font-bold flex justify-center items-center gap-2 transition-colors">
                          <Download size={16} /> 导出备份
                      </button>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col justify-between">
                       <div className="mb-2">
                          <h4 className="font-bold text-gray-700">导入数据</h4>
                          <p className="text-xs text-gray-400 mt-1">从备份文件恢复数据。注意：这将覆盖当前所有数据。</p>
                      </div>
                      <button onClick={() => setShowImport(!showImport)} className="w-full py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-indigo-300 hover:text-indigo-600 font-bold flex justify-center items-center gap-2 transition-colors">
                          <Upload size={16} /> {showImport ? '取消导入' : '选择文件'}
                      </button>
                  </div>
               </div>
               
               {showImport && (
                   <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 animate-slide-up">
                       <label className="block text-sm font-bold text-indigo-900 mb-2 flex items-center gap-2">
                           <FileJson size={18} /> 
                           上传备份文件 (.json)
                       </label>
                       
                       <input 
                           type="file" 
                           accept=".json"
                           onChange={handleFileImport}
                           className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white file:text-indigo-700 hover:file:bg-indigo-50 mb-3 cursor-pointer"
                       />

                       {importStatus === 'READING' && <div className="text-indigo-500 font-bold text-sm flex items-center gap-2"><Activity className="animate-spin" size={14}/> 正在读取文件...</div>}
                       {importStatus === 'SUCCESS' && <div className="text-green-600 font-bold text-sm flex items-center gap-2"><Check size={14}/> 导入成功! 正在刷新...</div>}
                       {importStatus === 'ERROR' && <div className="text-red-500 font-bold text-sm flex items-center gap-2"><WifiOff size={14}/> 导入失败: {importErrorMsg}</div>}
                   </div>
               )}
           </div>

           <div className="lg:col-span-2 space-y-4">
                <button 
                    onClick={handleSave}
                    disabled={saveStatus === 'SAVED'}
                    className={`w-full py-4 font-bold rounded-2xl shadow-lg flex justify-center gap-2 transition-all ${
                        saveStatus === 'SAVED' 
                        ? 'bg-green-500 text-white scale-95' 
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    }`}
                >
                    {saveStatus === 'SAVED' ? <Check /> : <Save />} 
                    {saveStatus === 'SAVED' ? '设置已保存' : '保存设置'}
                </button>
                
                <button 
                        onClick={() => setView('HELP')} 
                        className="w-full py-3 border border-blue-100 text-blue-600 rounded-xl hover:bg-blue-50 font-bold flex justify-center gap-2"
                    >
                        <HelpCircle size={18} /> 帮助与设计理念
                </button>
           </div>
       </div>
    </div>
  );
};