
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { User, Save, Download, Upload, Activity, Wifi, HelpCircle, Book, Zap, ArrowLeft, Server, Eye, EyeOff, WifiOff, Check, FileJson, Database, Bot, ChevronRight, Settings, Image, Info, Heart, MessageCircle, ExternalLink, BookOpen } from 'lucide-react';
import { AppSettings, ProviderConfig } from '../types';
import { getSettings, saveSettings, exportUserData, importUserData, getCustomCurricula } from '../services/storage';
import { testConnection, testVisionConnection } from '../services/geminiService';
import { APP_DATA, GRADE_PRESETS } from '../data';
import { UserManualView } from './UserManualView';

const PROVIDERS = {
    GOOGLE: { name: 'Google Gemini', url: '', defaultModel: 'gemini-2.5-flash' },
    ZHIPU: { name: '智谱 AI (BigModel)', url: 'https://open.bigmodel.cn/api/paas/v4', defaultModel: 'glm-4-flash' },
    DEEPSEEK: { name: 'DeepSeek (Official)', url: 'https://api.deepseek.com', defaultModel: 'deepseek-chat' },
    SILICON: { name: 'SiliconFlow (硅基流动)', url: 'https://api.siliconflow.cn/v1', defaultModel: 'deepseek-ai/DeepSeek-V3' },
    CUSTOM: { name: '自定义 / OpenAI 兼容', url: '', defaultModel: '' }
};

interface ProfileViewProps {
    onSave?: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ onSave }) => {
  const [view, setView] = useState<'MAIN' | 'HELP' | 'MANUAL' | 'AI_CONFIG' | 'ABOUT'>('MAIN');
  
  // Initialize state directly from storage to ensure it's ready on first render
  const [config, setConfig] = useState<AppSettings>(() => getSettings());
  
  // Local state to manage provider specific configs
  const [providerConfigs, setProviderConfigs] = useState<Record<string, ProviderConfig>>({});
  const [activeProvider, setActiveProvider] = useState<string>('GOOGLE');

  const [showKey, setShowKey] = useState(false);
  const [showVisionKey, setShowVisionKey] = useState(false);

  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [testStatus, setTestStatus] = useState<'IDLE' | 'TESTING' | 'SUCCESS' | 'FAIL'>('IDLE');
  const [visionTestStatus, setVisionTestStatus] = useState<'IDLE' | 'TESTING' | 'SUCCESS' | 'FAIL'>('IDLE');
  
  // Import State
  const [showImport, setShowImport] = useState(false);
  const [importStatus, setImportStatus] = useState<'IDLE' | 'READING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [importErrorMsg, setImportErrorMsg] = useState('');

  // Ref to track mount status for auto-save logic
  const isMounted = useRef(false);

  // Merge APP_DATA and Custom Data
  const allCurricula = useMemo(() => {
      const customs = getCustomCurricula();
      return [...APP_DATA, ...customs];
  }, []); 

  // Initial Load Effect
  useEffect(() => {
    // 1. Initialize Voices
    const updateVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      const zhVoices = voices.filter(v => v.lang.includes('zh') || v.lang.includes('CN'));
      setAvailableVoices(zhVoices.length > 0 ? zhVoices : voices);
    };
    updateVoices();
    window.speechSynthesis.onvoiceschanged = updateVoices;

    // 2. Initialize Provider Configs from Storage or Defaults
    const saved = getSettings();
    const loadedProviderConfigs = saved.savedProviderConfigs || {};
    
    // Ensure all known providers have an entry
    Object.keys(PROVIDERS).forEach(key => {
        if (!loadedProviderConfigs[key]) {
            const def = PROVIDERS[key as keyof typeof PROVIDERS];
            loadedProviderConfigs[key] = {
                apiKey: '', // Start empty if not saved
                apiBaseUrl: def.url,
                model: def.defaultModel
            };
        }
    });
    setProviderConfigs(loadedProviderConfigs);

    // 3. Determine Active Provider based on current URL
    let currentKey = 'CUSTOM';
    if (!saved.apiBaseUrl) {
        currentKey = 'GOOGLE';
    } else if (saved.apiBaseUrl.includes('bigmodel.cn')) {
        currentKey = 'ZHIPU';
    } else if (saved.apiBaseUrl.includes('deepseek.com')) {
        currentKey = 'DEEPSEEK';
    } else if (saved.apiBaseUrl.includes('siliconflow')) {
        currentKey = 'SILICON';
    }
    setActiveProvider(currentKey);
  }, []);

  // Auto-Save Effect
  useEffect(() => {
      if (isMounted.current) {
          // When saving, also update the 'savedProviderConfigs' field in the global config
          const configToSave = {
              ...config,
              savedProviderConfigs: providerConfigs
          };
          saveSettings(configToSave);
      } else {
          isMounted.current = true;
      }
  }, [config, providerConfigs]);

  const handleProviderChange = (newProviderKey: string) => {
      // 1. Save current input values to the OLD active provider in the 'providerConfigs' map
      const updatedConfigs = { ...providerConfigs };
      updatedConfigs[activeProvider] = {
          apiKey: config.apiKey,
          apiBaseUrl: config.apiBaseUrl,
          model: config.model
      };
      setProviderConfigs(updatedConfigs);

      // 2. Load values for NEW provider
      const nextConfig = updatedConfigs[newProviderKey];
      if (nextConfig) {
          setConfig(prev => ({
              ...prev,
              apiKey: nextConfig.apiKey,
              apiBaseUrl: nextConfig.apiBaseUrl,
              model: nextConfig.model
          }));
      }

      setActiveProvider(newProviderKey);
  };

  const handleTestConnection = async () => {
    setTestStatus('TESTING');
    const success = await testConnection(config);
    setTestStatus(success ? 'SUCCESS' : 'FAIL');
    setTimeout(() => setTestStatus('IDLE'), 3000);
  };

  const handleTestVisionConnection = async () => {
    setVisionTestStatus('TESTING');
    const success = await testVisionConnection(config);
    setVisionTestStatus(success ? 'SUCCESS' : 'FAIL');
    setTimeout(() => setVisionTestStatus('IDLE'), 3000);
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


  if (view === 'MANUAL') {
      return <UserManualView onBack={() => setView('ABOUT')} />
  }

  // --- AI CONFIGURATION VIEW ---
  if (view === 'AI_CONFIG') {
      return (
          <div className="max-w-7xl mx-auto min-h-screen bg-gray-50 pb-24 animate-fade-in">
              <div className="bg-white px-6 py-4 shadow-sm border-b border-gray-100 sticky top-0 z-10 flex items-center gap-2">
                  <button onClick={() => setView('MAIN')} className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600">
                      <ArrowLeft size={24} />
                  </button>
                  <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                      <Bot className="text-indigo-600" /> AI 模型配置
                  </h1>
              </div>

              <div className="p-4 md:p-8 max-w-3xl mx-auto space-y-6">
                  {/* Provider Selector */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                      <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                          <Server size={18} className="text-indigo-500"/> 选择 AI 服务商
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {Object.entries(PROVIDERS).map(([key, provider]) => (
                              <button
                                  key={key}
                                  onClick={() => handleProviderChange(key)}
                                  className={`px-4 py-3 rounded-xl text-left border transition-all relative overflow-hidden group ${
                                      activeProvider === key 
                                      ? 'bg-indigo-50 border-indigo-500 text-indigo-700 shadow-sm' 
                                      : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                                  }`}
                              >
                                  <div className="font-bold text-sm">{provider.name}</div>
                                  <div className="text-[10px] opacity-60 truncate mt-1">{provider.url || 'Native / Internal'}</div>
                                  {activeProvider === key && <div className="absolute top-2 right-2 text-indigo-500"><Check size={16}/></div>}
                              </button>
                          ))}
                      </div>
                  </div>

                  {/* Config Fields (Dynamic based on provider) */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-5 relative overflow-hidden">
                      {/* Decorative Label for current provider context */}
                      <div className="absolute top-0 right-0 bg-gray-100 text-gray-500 text-[10px] px-3 py-1 rounded-bl-xl font-bold uppercase">
                          {activeProvider} 配置
                      </div>

                      <div>
                          <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">API 代理地址 (Host)</label>
                          <input
                              type="text"
                              placeholder={activeProvider === 'GOOGLE' ? '默认无需填写' : 'https://api.example.com/v1'}
                              className="w-full p-4 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none text-sm font-mono transition-all"
                              value={config.apiBaseUrl}
                              onChange={e => setConfig({ ...config, apiBaseUrl: e.target.value })}
                          />
                          <p className="text-[10px] text-gray-400 mt-1.5 ml-1">
                              {activeProvider === 'ZHIPU' ? '智谱 AI 默认地址: https://open.bigmodel.cn/api/paas/v4/' : 
                               activeProvider === 'GOOGLE' ? 'Google 官方直连，需自备科学上网环境。' : 'OpenAI 兼容接口地址'}
                          </p>
                      </div>
                      
                      <div>
                          <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">API Key (密钥)</label>
                          <div className="relative">
                              <input
                                  type={showKey ? "text" : "password"}
                                  placeholder={activeProvider === 'GOOGLE' ? "AIza..." : "sk-..."}
                                  className="w-full p-4 pr-12 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none text-sm font-mono transition-all"
                                  value={config.apiKey}
                                  onChange={e => setConfig({ ...config, apiKey: e.target.value })}
                              />
                              <button 
                                  onClick={() => setShowKey(!showKey)}
                                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                              >
                                  {showKey ? <EyeOff size={20} /> : <Eye size={20} />}
                              </button>
                          </div>
                      </div>

                      <div>
                          <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">模型名称 (Model)</label>
                          <input
                              type="text"
                              placeholder="如: gemini-2.5-flash, glm-4-flash"
                              className="w-full p-4 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none text-sm font-mono transition-all"
                              value={config.model}
                              onChange={e => setConfig({ ...config, model: e.target.value })}
                          />
                           {activeProvider === 'ZHIPU' && (
                              <p className="text-[10px] text-indigo-400 mt-1.5 ml-1">
                                  推荐模型: glm-4-flash (免费/快速), glm-4.5-flash, glm-4.6v-flash
                              </p>
                          )}
                      </div>

                      {/* Test Connection Button */}
                      <div className="pt-2">
                          <button
                              onClick={handleTestConnection}
                              disabled={testStatus === 'TESTING' || !config.apiKey}
                              className={`w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-sm ${
                                  testStatus === 'SUCCESS' ? 'bg-green-50 border border-green-200 text-green-600' :
                                  testStatus === 'FAIL' ? 'bg-red-50 border border-red-200 text-red-600' :
                                  'bg-gray-800 text-white hover:bg-gray-900'
                              } disabled:opacity-50 disabled:cursor-not-allowed`}
                          >
                              {testStatus === 'TESTING' ? (
                                  <>
                                      <Activity className="animate-spin" size={18} /> 连接测试中...
                                  </>
                              ) : testStatus === 'SUCCESS' ? (
                                  <>
                                      <Wifi size={18} /> 连接成功
                                  </>
                              ) : testStatus === 'FAIL' ? (
                                  <>
                                      <WifiOff size={18} /> 连接失败，请检查配置
                                  </>
                              ) : (
                                  <>
                                      <Zap size={18} className="fill-current text-yellow-400" /> 测试 AI 连接
                                  </>
                              )}
                          </button>
                      </div>
                  </div>
                  
                  {/* Vision Model Config (Separate) */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-5">
                      <h3 className="font-bold text-gray-800 border-b pb-3 mb-2 flex items-center gap-2">
                           <Image size={18} className="text-purple-600"/> 视觉模型配置 (选填)
                      </h3>
                      <p className="text-xs text-gray-400 mb-2">用于“拍照识别”故事功能。若不填，将默认使用 Google Gemini。</p>

                      <div>
                          <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">API 地址 (Vision Host)</label>
                          <input
                              type="text"
                              placeholder="默认无需填写 (或 OpenAI 兼容 Vision 接口)"
                              className="w-full p-4 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none text-sm font-mono transition-all"
                              value={config.visionApiBaseUrl || ''}
                              onChange={e => setConfig({ ...config, visionApiBaseUrl: e.target.value })}
                          />
                      </div>
                      
                      <div>
                          <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">API Key (视觉)</label>
                          <div className="relative">
                              <input
                                  type={showVisionKey ? "text" : "password"}
                                  placeholder="sk-..."
                                  className="w-full p-4 pr-12 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none text-sm font-mono transition-all"
                                  value={config.visionApiKey || ''}
                                  onChange={e => setConfig({ ...config, visionApiKey: e.target.value })}
                              />
                              <button 
                                  onClick={() => setShowVisionKey(!showVisionKey)}
                                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                              >
                                  {showVisionKey ? <EyeOff size={20} /> : <Eye size={20} />}
                              </button>
                          </div>
                      </div>

                      <div>
                          <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">模型名称 (Vision Model)</label>
                          <input
                              type="text"
                              placeholder="如: gemini-2.5-flash, gpt-4o"
                              className="w-full p-4 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none text-sm font-mono transition-all"
                              value={config.visionModel || ''}
                              onChange={e => setConfig({ ...config, visionModel: e.target.value })}
                          />
                      </div>

                      {/* Vision Test Button */}
                       <div className="pt-2">
                          <button
                              onClick={handleTestVisionConnection}
                              disabled={visionTestStatus === 'TESTING' || !config.visionApiKey}
                              className={`w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-sm ${
                                  visionTestStatus === 'SUCCESS' ? 'bg-green-50 border border-green-200 text-green-600' :
                                  visionTestStatus === 'FAIL' ? 'bg-red-50 border border-red-200 text-red-600' :
                                  'bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100'
                              } disabled:opacity-50 disabled:cursor-not-allowed`}
                          >
                              {visionTestStatus === 'TESTING' ? (
                                  <>
                                      <Activity className="animate-spin" size={18} /> 测试中...
                                  </>
                              ) : visionTestStatus === 'SUCCESS' ? (
                                  <>
                                      <Wifi size={18} /> 视觉模型连接成功
                                  </>
                              ) : visionTestStatus === 'FAIL' ? (
                                  <>
                                      <WifiOff size={18} /> 连接失败
                                  </>
                              ) : (
                                  <>
                                      <Image size={18} /> 测试视觉模型
                                  </>
                              )}
                          </button>
                      </div>
                  </div>

                  <div className="text-center text-xs text-gray-400 px-4">
                      <p>配置将自动保存。请确保您的 API Key 有效且有额度。</p>
                  </div>
              </div>
          </div>
      )
  }

  // --- HELP VIEW ---
  if (view === 'HELP') {
    return (
          <div className="max-w-7xl mx-auto min-h-screen bg-white pb-24 animate-fade-in">
             <div className="bg-indigo-50 px-6 py-4 shadow-sm border-b border-indigo-100 sticky top-0 z-10">
                <button onClick={() => setView('ABOUT')} className="flex items-center gap-2 text-indigo-900 font-bold text-xl">
                    <ArrowLeft size={24} className="text-indigo-700" /> 设计理念
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

  // --- ABOUT VIEW ---
  if (view === 'ABOUT') {
      return (
          <div className="max-w-7xl mx-auto min-h-screen bg-gray-50 pb-24 animate-fade-in">
              <div className="bg-white px-6 py-4 shadow-sm border-b border-gray-100 sticky top-0 z-10 flex items-center gap-2">
                  <button onClick={() => setView('MAIN')} className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600">
                      <ArrowLeft size={24} />
                  </button>
                  <h1 className="text-xl font-bold text-gray-800">关于</h1>
              </div>

              <div className="p-8 flex flex-col items-center">
                  {/* App Info */}
                  <div className="flex flex-col items-center mb-10">
                      <div className="w-24 h-24 bg-white rounded-3xl shadow-lg flex items-center justify-center text-6xl border border-gray-100 mb-4">
                          🐼
                      </div>
                      <h2 className="text-2xl font-fun font-bold text-gray-800 mb-1">汉字小英雄</h2>
                      <p className="text-gray-400 text-sm font-mono">Version 1.0.0</p>
                      <p className="text-gray-500 text-sm mt-2 font-bold">Author: Tabor</p>
                  </div>

                  {/* Actions - Responsive Grid */}
                  <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
                      <button 
                         onClick={() => setView('HELP')}
                         className="w-full bg-white p-4 rounded-xl border border-gray-200 flex items-center justify-between hover:bg-gray-50 transition-colors shadow-sm group"
                      >
                         <div className="flex items-center gap-3">
                             <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100 transition-colors">
                                 <HelpCircle size={20} />
                             </div>
                             <span className="font-bold text-gray-700">设计理念</span>
                         </div>
                         <ChevronRight size={18} className="text-gray-400" />
                      </button>

                      <button 
                         onClick={() => setView('MANUAL')}
                         className="w-full bg-white p-4 rounded-xl border border-gray-200 flex items-center justify-between hover:bg-gray-50 transition-colors shadow-sm group"
                      >
                         <div className="flex items-center gap-3">
                             <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg group-hover:bg-indigo-100 transition-colors">
                                 <BookOpen size={20} />
                             </div>
                             <span className="font-bold text-gray-700">使用说明</span>
                         </div>
                         <ChevronRight size={18} className="text-gray-400" />
                      </button>

                      <button 
                         onClick={() => window.open('https://xhslink.com/m/3QRAda5uzs5', '_blank')}
                         className="w-full bg-white p-4 rounded-xl border border-gray-200 flex items-center justify-between hover:bg-gray-50 transition-colors shadow-sm group"
                      >
                         <div className="flex items-center gap-3">
                             <div className="p-2 bg-red-50 text-red-600 rounded-lg group-hover:bg-red-100 transition-colors">
                                 <Heart size={20} />
                             </div>
                             <span className="font-bold text-gray-700">关注小红书</span>
                         </div>
                         <ExternalLink size={18} className="text-gray-400" />
                      </button>

                      <button 
                         onClick={() => alert('添加微信：tabor2024，备注“汉字小英雄”')}
                         className="w-full bg-white p-4 rounded-xl border border-gray-200 flex items-center justify-between hover:bg-gray-50 transition-colors shadow-sm group"
                      >
                         <div className="flex items-center gap-3">
                             <div className="p-2 bg-green-50 text-green-600 rounded-lg group-hover:bg-green-100 transition-colors">
                                 <MessageCircle size={20} />
                             </div>
                             <span className="font-bold text-gray-700">微信反馈</span>
                         </div>
                         <ChevronRight size={18} className="text-gray-400" />
                      </button>
                  </div>
                  
                  <div className="mt-12 text-center text-xs text-gray-400 max-w-xs leading-relaxed">
                      让每一个汉字都成为孩子的好朋友。<br/>
                      感谢您的使用与支持！
                  </div>
              </div>
          </div>
      );
  }

  // --- MAIN VIEW ---
  return (
    <div className="max-w-7xl mx-auto min-h-screen bg-gray-50 pb-24">
       <div className="bg-white px-6 py-8 shadow-sm">
          <div className="flex justify-between items-center">
              <div>
                  <h1 className="text-2xl font-bold flex items-center gap-2 mb-2">
                      <User className="text-indigo-600" /> 我的设置
                  </h1>
                  <p className="text-gray-400 text-sm">修改配置后会自动保存</p>
              </div>
          </div>
       </div>

       <div className="p-4 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* AI Settings Entry Card - Updated Style */}
          <div 
             onClick={() => setView('AI_CONFIG')}
             className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:border-indigo-300 hover:shadow-md transition-all group"
          >
             <div className="flex justify-between items-center h-full">
                 <div className="flex-1">
                     <h3 className="font-bold text-gray-800 text-lg mb-2 flex items-center gap-2">
                         <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl group-hover:scale-110 transition-transform">
                             <Bot size={22} />
                         </div>
                         AI 模型配置
                     </h3>
                     <p className="text-gray-400 text-xs mb-3">
                         设置 API Key、选择模型服务商 (Google, DeepSeek, 智谱等) 及视觉模型。
                     </p>
                     <div className="inline-flex items-center gap-1.5 text-xs font-bold bg-gray-50 text-gray-600 px-3 py-1.5 rounded-lg border border-gray-100 group-hover:bg-indigo-50 group-hover:text-indigo-700 group-hover:border-indigo-100 transition-colors">
                         <Server size={12} />
                         <span>{PROVIDERS[activeProvider as keyof typeof PROVIDERS]?.name || '自定义'}</span>
                     </div>
                 </div>
                 
                 <div className="pl-4">
                     <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                         <Settings size={20} />
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

           {/* About Section Entry */}
           <div className="lg:col-span-2">
                <button 
                        onClick={() => setView('ABOUT')} 
                        className="w-full py-4 border border-blue-100 text-blue-600 rounded-xl hover:bg-blue-50 font-bold flex justify-center items-center gap-2 shadow-sm transition-colors"
                    >
                        <Info size={18} /> 关于
                </button>
           </div>
       </div>
    </div>
  );
};
