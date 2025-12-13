
import React, { useState, useRef, useEffect } from 'react';
import { User, Settings, Database, Download, Upload, Info, Bot, ArrowLeft, HelpCircle, BookOpen, ChevronRight, Heart, ExternalLink, MessageCircle, Check, X, Server, FileJson, Activity, WifiOff, Sliders } from 'lucide-react';
import { AppSettings, ViewState } from '../types';
import { getSettings, saveSettings, exportUserData, importUserData } from '../services/storage';
import { AIConfigurationView } from './AIConfigurationView';
import { UserManualView } from './UserManualView';
import { HabitsAndVoiceView } from './HabitsAndVoiceView';

// Stub for provider constants
const PROVIDERS = {
    GOOGLE: { name: 'Google Gemini' },
    ZHIPU: { name: '智谱 AI' },
    DEEPSEEK: { name: 'DeepSeek' },
    SILICON: { name: 'SiliconFlow' },
    CUSTOM: { name: 'Custom' }
};

interface ProfileViewProps {
  onSave: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ onSave }) => {
  const [view, setView] = useState<'MAIN' | 'AI_CONFIG' | 'ABOUT' | 'HELP' | 'MANUAL' | 'HABITS'>('MAIN');
  const [config, setConfig] = useState<AppSettings>(getSettings());
  const [activeProvider, setActiveProvider] = useState<string>('GOOGLE');
  
  const [showImport, setShowImport] = useState(false);
  const [importStatus, setImportStatus] = useState<'IDLE' | 'READING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [importErrorMsg, setImportErrorMsg] = useState('');

  // WeChat Modal State
  const [showWeChatModal, setShowWeChatModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // Ref to track mount status for auto-save logic
  const isMounted = useRef(false);

  useEffect(() => {
    // Load initial settings
    const saved = getSettings();
    setConfig(saved);
    
    // Determine provider name for display
    let foundProvider = 'CUSTOM';
    if (!saved.apiBaseUrl) foundProvider = 'GOOGLE';
    else if (saved.apiBaseUrl.includes('deepseek.com')) foundProvider = 'DEEPSEEK';
    else if (saved.apiBaseUrl.includes('siliconflow')) foundProvider = 'SILICON';
    else if (saved.apiBaseUrl.includes('bigmodel.cn')) foundProvider = 'ZHIPU';
    setActiveProvider(foundProvider);

    isMounted.current = true;
    return () => { isMounted.current = false; };
  }, [view]); // Reload when view changes back to main

  const handleCopyWeChat = async () => {
      try {
          await navigator.clipboard.writeText('tabor2024');
          setCopySuccess(true);
          setTimeout(() => {
              if (isMounted.current) {
                setCopySuccess(false);
                setShowWeChatModal(false);
              }
          }, 1500);
      } catch (err) {
          alert('复制失败，请手动复制：tabor2024');
      }
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

  const handleFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      
      setImportStatus('READING');
      const reader = new FileReader();
      reader.onload = (evt) => {
          const content = evt.target?.result as string;
          const success = importUserData(content);
          if (success) {
              setImportStatus('SUCCESS');
              setTimeout(() => {
                  window.location.reload();
              }, 1500);
          } else {
              setImportStatus('ERROR');
              setImportErrorMsg('Json format error');
          }
      };
      reader.readAsText(file);
  };

  if (view === 'MANUAL') {
      return <UserManualView onBack={() => setView('ABOUT')} />
  }

  if (view === 'AI_CONFIG') {
      return <AIConfigurationView onBack={() => setView('MAIN')} />
  }
  
  if (view === 'HABITS') {
      return <HabitsAndVoiceView onBack={() => setView('MAIN')} />
  }
  
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
                  <div className="flex flex-col items-center mb-10">
                      <div className="w-24 h-24 bg-white rounded-3xl shadow-lg flex items-center justify-center text-6xl border border-gray-100 mb-4">
                          🐼
                      </div>
                      <h2 className="text-2xl font-fun font-bold text-gray-800 mb-1">汉字小英雄</h2>
                      <p className="text-gray-400 text-sm font-mono">Version 1.2.0</p>
                      <p className="text-gray-500 text-sm mt-2 font-bold">Author: Tabor</p>
                  </div>

                  {/* Actions - Responsive Grid */}
                  <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
                      <button 
                         onClick={() => setView('MANUAL')}
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
                         onClick={() => setShowWeChatModal(true)}
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
              
              {/* WeChat Modal */}
              {showWeChatModal && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setShowWeChatModal(false)}>
                      <div 
                          className="bg-white rounded-3xl p-8 shadow-2xl w-full max-w-sm animate-bounce-in text-center relative"
                          onClick={e => e.stopPropagation()}
                      >
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                              <MessageCircle size={32} />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">微信反馈</h3>
                          <p className="text-gray-500 text-sm mb-6">
                              添加作者微信，交流反馈或建议。<br/>
                              微信号：<span className="font-mono font-bold text-gray-800 bg-gray-100 px-2 py-0.5 rounded">tabor2024</span>
                          </p>
                          
                          <button 
                              onClick={handleCopyWeChat}
                              className={`w-full py-3 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 ${copySuccess ? 'bg-green-500' : 'bg-gray-900 hover:bg-gray-800'}`}
                          >
                              {copySuccess ? <Check size={20} /> : <span className="flex items-center gap-2">复制微信号</span>}
                              {copySuccess ? '复制成功' : ''}
                          </button>
                          
                          <p className="text-[10px] text-gray-400 mt-4">备注：汉字小英雄</p>
                          
                          <button onClick={() => setShowWeChatModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                              <X size={20} />
                          </button>
                      </div>
                  </div>
              )}
          </div>
      );
  }

  // --- MAIN VIEW ---
  return (
    <div className="max-w-7xl mx-auto min-h-screen bg-gray-50 pb-24">
       {/* Header */}
       <div className="bg-white px-6 py-8 shadow-sm">
          <div className="flex justify-between items-center">
              <div>
                  <h1 className="text-2xl font-bold flex items-center gap-2 mb-2">
                      <User className="text-indigo-600" /> 我的
                  </h1>
              </div>
          </div>
       </div>

       <div className="p-4 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* AI Settings Card */}
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
          
           {/* Habits & Voice Card (New separate view) */}
           <div 
             onClick={() => setView('HABITS')}
             className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:border-blue-300 hover:shadow-md transition-all group"
           >
              <div className="flex justify-between items-center h-full">
                  <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-lg mb-2 flex items-center gap-2">
                          <div className="p-2 bg-blue-50 text-blue-600 rounded-xl group-hover:scale-110 transition-transform">
                              <Sliders size={22} />
                          </div>
                          习惯与语音
                      </h3>
                      <p className="text-gray-400 text-xs mb-1">
                          设置每日学习量、故事字数，以及自定义 TTS 语音接口。
                      </p>
                  </div>
                  <div className="pl-4">
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <ChevronRight size={20} />
                      </div>
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
