
import React, { useState, useRef, useEffect } from 'react';
import { User, Settings, Database, Download, Upload, Info, Bot, ArrowLeft, HelpCircle, BookOpen, ChevronRight, Heart, ExternalLink, MessageCircle, Check, X, Server, FileJson, Activity, WifiOff, Sliders, Book, Cloud, CloudUpload, CloudDownload, RefreshCw, Trash2, Link } from 'lucide-react';
import { AppSettings, ViewState, WebDAVConfig } from '../types';
import { getSettings, saveSettings, exportUserData, importUserData } from '../services/storage';
import { WebDAVClient } from '../services/webdav';
import { AIConfigurationView } from './AIConfigurationView';
import { UserManualView } from './UserManualView';
import { HabitsAndVoiceView } from './HabitsAndVoiceView';
import { GuideView } from './GuideView';
import { DataManagementView } from './DataManagementView';

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
  const [view, setView] = useState<'MAIN' | 'AI_CONFIG' | 'ABOUT' | 'HELP' | 'MANUAL' | 'HABITS' | 'GUIDE' | 'REQUIREMENTS' | 'DONATION' | 'DATA_MANAGEMENT'>('MAIN');
  const [config, setConfig] = useState<AppSettings>(getSettings());
  const [activeProvider, setActiveProvider] = useState<string>('GOOGLE');
  
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

  if (view === 'MANUAL') {
      return <UserManualView onBack={() => setView('ABOUT')} />
  }
  
  if (view === 'GUIDE') {
      return <GuideView onBack={() => setView('ABOUT')} />
  }

  if (view === 'DATA_MANAGEMENT') {
      return <DataManagementView onBack={() => setView('MAIN')} />
  }

  if (view === 'REQUIREMENTS') {
      return (
          <div className="max-w-7xl mx-auto min-h-screen bg-gray-50 pb-24 animate-fade-in">
              <div className="bg-white px-6 py-4 shadow-sm border-b border-gray-100 sticky top-0 z-10 flex items-center gap-2">
                  <button onClick={() => setView('ABOUT')} className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600">
                      <ArrowLeft size={24} />
                  </button>
                  <h1 className="text-xl font-bold text-gray-800">需求与鸣谢</h1>
              </div>

              <div className="p-8">
                  {/* Requirements Section */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
                      <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                              <Heart size={20} />
                          </div>
                          需求
                      </h2>
                      <div className="text-gray-700 leading-relaxed">
                          <p className="mb-4">
                              因教材改版，暂未收集齐全语文2024版人教版的课本对应生字，需要热心网友提供下小学二年级下~六年级下的课本目录、生字表。
                          </p>
                          <p className="text-sm text-gray-500">
                              如果您有相关资料，欢迎通过以下方式联系我们：
                          </p>
                          <div className="mt-3 space-y-2">
                              <button 
                                  onClick={() => window.open('https://img.sdgarden.top/blog/wechat/zuoyejianeice.jpg', '_blank')}
                                  className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                              >
                                  <span className="font-medium text-gray-700">微信反馈</span>
                                  <span className="text-xs text-gray-500 ml-2">扫码添加微信提供资料</span>
                              </button>
                          </div>
                      </div>
                  </div>

                  {/* Acknowledgments Section */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                      <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                              <Heart size={20} />
                          </div>
                          鸣谢名单
                      </h2>
                      <div className="text-gray-700 leading-relaxed">
                          <p className="mb-4 text-sm text-gray-600">
                              感谢以下朋友的支持与贡献：
                          </p>
                          <div className="space-y-3">
                              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                                      V
                                  </div>
                                  <div>
                                      <span className="font-medium text-gray-800">Vos.</span>
                                      <span className="text-xs text-gray-500 ml-2">提供新课标语文识字表</span>
                                  </div>
                              </div>
                              
                              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">
                                      夜
                                  </div>
                                  <div>
                                      <span className="font-medium text-gray-800">夜雨晴空</span>
                                      <span className="text-xs text-gray-500 ml-2">提供用户反馈与功能建议</span>
                                  </div>
                              </div>
                              
                              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">
                                      A
                                  </div>
                                  <div>
                                      <span className="font-medium text-gray-800">Anne and Andy</span>
                                      <span className="text-xs text-gray-500 ml-2">提供测试反馈与改进建议</span>
                                  </div>
                              </div>
                          </div>
                          
                          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                              <p className="text-sm text-yellow-800 font-medium mb-2">持续更新中...</p>
                              <p className="text-xs text-yellow-700">
                                  更多贡献者名单将会陆续添加，感谢每一位支持汉字小英雄的朋友！
                              </p>
                          </div>
                      </div>
                  </div>
                  
                  <div className="mt-8 text-center text-xs text-gray-400 max-w-xs leading-relaxed mx-auto">
                      感谢所有支持与关注汉字小英雄的朋友们！<br/>
                      您的每一份贡献都让这个项目变得更好。
                  </div>
              </div>
          </div>
      );
  }

  if (view === 'DONATION') {
      return (
          <div className="max-w-7xl mx-auto min-h-screen bg-gray-50 pb-24 animate-fade-in">
              <div className="bg-white px-6 py-4 shadow-sm border-b border-gray-100 sticky top-0 z-10 flex items-center gap-2">
                  <button onClick={() => setView('ABOUT')} className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600">
                      <ArrowLeft size={24} />
                  </button>
                  <h1 className="text-xl font-bold text-gray-800">打赏支持</h1>
              </div>

              <div className="p-8">
                  {/* Thank you message */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
                      <div className="text-center">
                          <div className="text-4xl mb-4">🙏</div>
                          <h2 className="text-lg font-bold text-gray-800 mb-2">感谢您的支持！</h2>
                          <p className="text-gray-600 text-sm leading-relaxed">
                              您的每一份支持都将帮助我们持续改进和完善汉字小英雄，<br/>
                              让更多的孩子能够快乐地学习汉字。
                          </p>
                      </div>
                  </div>

                  {/* QR Code Section */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                      <h2 className="text-lg font-bold text-gray-800 mb-6 text-center">扫码打赏</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* WeChat Pay */}
                          <div className="text-center">
                              <div className="bg-green-50 p-4 rounded-lg border border-green-100 mb-4">
                                  <div className="text-2xl mb-2">💚</div>
                                  <h3 className="font-bold text-green-700">微信支付</h3>
                              </div>
                              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                  <img 
                                      src="https://img.sdgarden.top/blog/wechat/wechatpay.jpg" 
                                      alt="微信收款码" 
                                      className="w-48 h-48 mx-auto object-contain rounded-lg"
                                      onError={(e) => {
                                          const target = e.target as HTMLImageElement;
                                          target.style.display = 'none';
                                          target.nextElementSibling!.classList.remove('hidden');
                                      }}
                                  />
                                  <div className="hidden text-center text-gray-500 text-sm">
                                      <div className="w-48 h-48 mx-auto bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                                          <div>
                                              <div className="text-2xl mb-2">📱</div>
                                              <p>微信收款码</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          {/* Alipay */}
                          <div className="text-center">
                              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
                                  <div className="text-2xl mb-2">💙</div>
                                  <h3 className="font-bold text-blue-700">支付宝</h3>
                              </div>
                              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                  <img 
                                      src="https://img.sdgarden.top/blog/wechat/alipay.jpg" 
                                      alt="支付宝收款码" 
                                      className="w-48 h-48 mx-auto object-contain rounded-lg"
                                      onError={(e) => {
                                          const target = e.target as HTMLImageElement;
                                          target.style.display = 'none';
                                          target.nextElementSibling!.classList.remove('hidden');
                                      }}
                                  />
                                  <div className="hidden text-center text-gray-500 text-sm">
                                      <div className="w-48 h-48 mx-auto bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                                          <div>
                                              <div className="text-2xl mb-2">📱</div>
                                              <p>支付宝收款码</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="mt-6 text-center">
                          <p className="text-sm text-gray-500 mb-2">💡 提示</p>
                          <p className="text-xs text-gray-400">
                              打赏金额不限，您的支持就是我们最大的动力！<br/>
                              如遇到扫码问题，可通过微信反馈联系我们。
                          </p>
                      </div>
                  </div>
                  
                  <div className="mt-8 text-center text-xs text-gray-400 max-w-xs leading-relaxed mx-auto">
                      感谢您的慷慨支持！<br/>
                      您的每一份打赏都将用于产品的持续改进。
                  </div>
              </div>
          </div>
      );
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
                      <p className="text-gray-400 text-sm font-mono">Version 1.3.5</p>
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
                         onClick={() => setView('GUIDE')}
                         className="w-full bg-white p-4 rounded-xl border border-gray-200 flex items-center justify-between hover:bg-gray-50 transition-colors shadow-sm group"
                      >
                         <div className="flex items-center gap-3">
                             <div className="p-2 bg-purple-50 text-purple-600 rounded-lg group-hover:bg-purple-100 transition-colors">
                                 <Book size={20} />
                             </div>
                             <span className="font-bold text-gray-700">使用帮助</span>
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
                         onClick={() => window.open('https://img.sdgarden.top/blog/wechat/zuoyejianeice.jpg', '_blank')}
                         className="w-full bg-white p-4 rounded-xl border border-gray-200 flex items-center justify-between hover:bg-gray-50 transition-colors shadow-sm group"
                      >
                         <div className="flex items-center gap-3">
                             <div className="p-2 bg-green-50 text-green-600 rounded-lg group-hover:bg-green-100 transition-colors">
                                 <MessageCircle size={20} />
                             </div>
                             <span className="font-bold text-gray-700">微信反馈</span>
                         </div>
                         <ExternalLink size={18} className="text-gray-400" />
                      </button>

                      <button 
                         onClick={() => setView('REQUIREMENTS')}
                         className="w-full bg-white p-4 rounded-xl border border-gray-200 flex items-center justify-between hover:bg-gray-50 transition-colors shadow-sm group"
                      >
                         <div className="flex items-center gap-3">
                             <div className="p-2 bg-orange-50 text-orange-600 rounded-lg group-hover:bg-orange-100 transition-colors">
                                 <Heart size={20} />
                             </div>
                             <span className="font-bold text-gray-700">需求与鸣谢</span>
                         </div>
                         <ChevronRight size={18} className="text-gray-400" />
                      </button>

                      <button 
                         onClick={() => setView('DONATION')}
                         className="w-full bg-white p-4 rounded-xl border border-gray-200 flex items-center justify-between hover:bg-gray-50 transition-colors shadow-sm group"
                      >
                         <div className="flex items-center gap-3">
                             <div className="p-2 bg-yellow-50 text-yellow-600 rounded-lg group-hover:bg-yellow-100 transition-colors">
                                 <Heart size={20} />
                             </div>
                             <span className="font-bold text-gray-700">打赏支持</span>
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

           {/* Data Management Entry */}
           <div className="lg:col-span-2">
               <button 
                   onClick={() => setView('DATA_MANAGEMENT')}
                   className="w-full py-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-indigo-200 hover:shadow-md transition-all flex items-center justify-between px-6 group"
               >
                   <div className="flex items-center gap-4">
                       <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl group-hover:scale-110 transition-transform">
                           <Database size={24} />
                       </div>
                       <div className="text-left">
                           <h3 className="font-bold text-gray-800 text-lg group-hover:text-indigo-600 transition-colors">数据管理</h3>
                           <p className="text-sm text-gray-400">备份与恢复、WebDAV 云同步</p>
                       </div>
                   </div>
                   <ChevronRight className="text-gray-300 group-hover:text-indigo-400" />
               </button>
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
