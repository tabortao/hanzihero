
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Save, Activity, Wifi, WifiOff, Eye, EyeOff, Server, Image as ImageIcon, Bot, Check } from 'lucide-react';
import { AppSettings, ProviderConfig } from '../types';
import { getSettings, saveSettings } from '../services/storage';
import { testConnection, testVisionConnection } from '../services/geminiService';

interface AIConfigurationViewProps {
  onBack: () => void;
}

const PROVIDERS = {
    GOOGLE: { 
        name: 'Google Gemini', 
        url: '', 
        model: 'gemini-2.5-flash',
        visionModel: 'gemini-2.5-flash' 
    },
    ZHIPU: {
        name: '智谱 AI (Zhipu)',
        url: 'https://open.bigmodel.cn/api/paas/v4/',
        model: 'glm-4.5-flash',
        visionModel: 'glm-4.6v-flash'
    },
    DEEPSEEK: { 
        name: 'DeepSeek (Official)', 
        url: 'https://api.deepseek.com', 
        model: 'deepseek-chat',
        visionModel: '' 
    },
    SILICON: { 
        name: 'SiliconFlow (硅基流动)', 
        url: 'https://api.siliconflow.cn/v1', 
        model: 'deepseek-ai/DeepSeek-V3',
        visionModel: ''
    },
    CUSTOM: { 
        name: '自定义 / OpenAI 兼容', 
        url: '', 
        model: '',
        visionModel: ''
    }
};

export const AIConfigurationView: React.FC<AIConfigurationViewProps> = ({ onBack }) => {
  // We need to load all settings to preserve them when saving
  const [config, setConfig] = useState<AppSettings>({
    apiBaseUrl: '',
    apiKey: '',
    model: 'gemini-2.5-flash',
    savedProviderConfigs: {},
    visionApiBaseUrl: '',
    visionApiKey: '',
    visionModel: 'gemini-2.5-flash',
    ttsRate: 1.0,
    ttsVoice: '',
    dailyNewLimit: 5,
    storyLength: 50,
    selectedCurriculumId: '',
    selectedGradeId: ''
  });
  
  const [activeProvider, setActiveProvider] = useState<string>('GOOGLE');
  const [showKey, setShowKey] = useState(false);
  const [showVisionKey, setShowVisionKey] = useState(false);
  
  const [testStatus, setTestStatus] = useState<'IDLE' | 'TESTING' | 'SUCCESS' | 'FAIL'>('IDLE');
  const [visionTestStatus, setVisionTestStatus] = useState<'IDLE' | 'TESTING' | 'SUCCESS' | 'FAIL'>('IDLE');

  // Ref to track if we just loaded data to avoid auto-saving immediately
  const isLoaded = useRef(false);

  useEffect(() => {
    const saved = getSettings();
    // Ensure savedProviderConfigs exists
    if (!saved.savedProviderConfigs) {
        saved.savedProviderConfigs = {};
    }
    setConfig(saved);
    setTestStatus('IDLE');
    setVisionTestStatus('IDLE');
    
    // Determine provider from saved URL and match with known providers
    // This logic helps highlight the correct button on load
    let foundProvider = 'CUSTOM';
    
    // 1. Try to match by base URL exactly first
    for (const [key, p] of Object.entries(PROVIDERS)) {
        if (key === 'CUSTOM') continue;
        if (p.url === saved.apiBaseUrl) {
            foundProvider = key;
            break;
        }
    }
    
    // 2. If no exact match, try partial match for known domains
    if (foundProvider === 'CUSTOM') {
        if (!saved.apiBaseUrl) foundProvider = 'GOOGLE';
        else if (saved.apiBaseUrl.includes('deepseek.com')) foundProvider = 'DEEPSEEK';
        else if (saved.apiBaseUrl.includes('siliconflow')) foundProvider = 'SILICON';
        else if (saved.apiBaseUrl.includes('bigmodel.cn')) foundProvider = 'ZHIPU';
    }
    
    setActiveProvider(foundProvider);
    isLoaded.current = true;
  }, []);

  // Auto-save effect with debounce
  useEffect(() => {
      if (!isLoaded.current) return;

      const timer = setTimeout(() => {
           // Save current active provider settings to the map before persisting
           const currentCache: ProviderConfig = {
              apiKey: config.apiKey,
              apiBaseUrl: config.apiBaseUrl,
              model: config.model,
              visionApiKey: config.visionApiKey,
              visionApiBaseUrl: config.visionApiBaseUrl,
              visionModel: config.visionModel
          };
          
          const finalConfig = {
              ...config,
              savedProviderConfigs: {
                  ...config.savedProviderConfigs,
                  [activeProvider]: currentCache
              }
          };

          saveSettings(finalConfig);
      }, 500); // 500ms debounce

      return () => clearTimeout(timer);
  }, [config, activeProvider]);


  const handleProviderChange = (newProviderKey: string) => {
      if (!isLoaded.current) return;

      // 1. Save current state to cache (for the previous provider)
      const currentCache: ProviderConfig = {
          apiKey: config.apiKey,
          apiBaseUrl: config.apiBaseUrl,
          model: config.model,
          visionApiKey: config.visionApiKey,
          visionApiBaseUrl: config.visionApiBaseUrl,
          visionModel: config.visionModel
      };

      const newSavedConfigs = {
          ...config.savedProviderConfigs,
          [activeProvider]: currentCache
      };

      // 2. Load new state from cache OR defaults
      const cached = newSavedConfigs[newProviderKey];
      const defaultPreset = PROVIDERS[newProviderKey as keyof typeof PROVIDERS];

      let newConfigState = { ...config, savedProviderConfigs: newSavedConfigs };

      if (cached && (cached.apiKey || cached.apiBaseUrl)) {
          // Use cached values if they exist (user previously edited this provider)
          newConfigState = {
              ...newConfigState,
              apiKey: cached.apiKey || '',
              apiBaseUrl: cached.apiBaseUrl || defaultPreset.url,
              model: cached.model || defaultPreset.model,
              visionApiKey: cached.visionApiKey || '',
              visionApiBaseUrl: cached.visionApiBaseUrl || '',
              visionModel: cached.visionModel || defaultPreset.visionModel || ''
          };
      } else {
          // Use Default Presets
          newConfigState = {
              ...newConfigState,
              apiKey: '', // Always clear key for new provider unless cached
              apiBaseUrl: defaultPreset.url,
              model: defaultPreset.model,
              visionApiKey: '',
              visionApiBaseUrl: defaultPreset.url, // Default vision URL usually same as chat
              visionModel: defaultPreset.visionModel || ''
          };
          
          // Special case: Google vision URL is usually empty (handled by SDK)
          if (newProviderKey === 'GOOGLE') {
              newConfigState.visionApiBaseUrl = '';
          }
      }

      setConfig(newConfigState);
      setActiveProvider(newProviderKey);
      setTestStatus('IDLE');
      setVisionTestStatus('IDLE');
  };

  const handleTestConnection = async () => {
    setTestStatus('TESTING');
    const success = await testConnection(config);
    setTestStatus(success ? 'SUCCESS' : 'FAIL');
    setTimeout(() => { setTestStatus('IDLE'); }, 3000);
  };

  const handleTestVisionConnection = async () => {
    setVisionTestStatus('TESTING');
    const success = await testVisionConnection(config);
    setVisionTestStatus(success ? 'SUCCESS' : 'FAIL');
    setTimeout(() => { setVisionTestStatus('IDLE'); }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[60] bg-gray-50 flex flex-col animate-slide-up">
      {/* Header */}
      <div className="bg-white px-6 py-4 shadow-sm border-b border-gray-100 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
              <button 
                onClick={onBack} 
                className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
              >
                  <ArrowLeft size={24} />
              </button>
              <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <Bot className="text-indigo-600" /> 
                  AI 模型配置
              </h1>
          </div>
      </div>

      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 md:p-8">
          <div className="max-w-3xl mx-auto space-y-8 pb-24">
              
              {/* Provider Selector */}
              <div className="space-y-3">
                 <label className="text-sm font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                     <Server size={16}/> 选择服务商
                 </label>
                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {Object.entries(PROVIDERS).map(([key, provider]) => (
                        <button
                            key={key}
                            onClick={() => handleProviderChange(key)}
                            className={`
                                px-2 py-4 rounded-xl text-xs font-bold border-2 transition-all flex flex-col items-center justify-center gap-2
                                ${activeProvider === key 
                                ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg transform scale-105' 
                                : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
                                }
                            `}
                        >
                            <span className="text-2xl">
                                {key === 'GOOGLE' && '🌍'}
                                {key === 'ZHIPU' && '🧠'}
                                {key === 'DEEPSEEK' && '🐳'}
                                {key === 'SILICON' && '🚀'}
                                {key === 'CUSTOM' && '⚙️'}
                            </span>
                            <span className="text-center">{provider.name}</span>
                        </button>
                    ))}
                 </div>
              </div>

              {/* Chat Model Config */}
              <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                            <Bot size={20} className="text-indigo-500"/> 对话模型 (Chat)
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">用于文字生成、故事创作和汉字讲解。</p>
                    </div>
                    {testStatus === 'SUCCESS' && <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"><Check size={14}/> 已连接</span>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* API Base URL */}
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">
                          API Host (代理地址)
                      </label>
                      <input
                        type="text"
                        placeholder={activeProvider === 'GOOGLE' ? '默认无需填写' : 'https://api.example.com/v1'}
                        className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-indigo-500 outline-none text-sm font-mono transition-all"
                        value={config.apiBaseUrl}
                        onChange={e => {
                            setConfig({ ...config, apiBaseUrl: e.target.value });
                        }}
                      />
                      {activeProvider === 'GOOGLE' && <p className="text-[10px] text-gray-400 mt-2 ml-1">Google 直连无需填写，国内使用请填代理。</p>}
                    </div>

                    {/* API Key */}
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">API Key (密钥)</label>
                      <div className="relative group">
                          <input
                            type={showKey ? "text" : "password"}
                            placeholder="sk-..."
                            className="w-full p-4 pr-12 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-indigo-500 outline-none text-sm font-mono transition-all"
                            value={config.apiKey}
                            onChange={e => setConfig({ ...config, apiKey: e.target.value })}
                          />
                          <button 
                            onClick={() => setShowKey(!showKey)}
                            className="absolute right-4 top-4 text-gray-400 hover:text-indigo-600 transition-colors"
                            tabIndex={-1}
                          >
                              {showKey ? <EyeOff size={20} /> : <Eye size={20} />}
                          </button>
                      </div>
                    </div>

                    {/* Model Name */}
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Model Name (模型)</label>
                      <input
                        type="text"
                        placeholder="如: gemini-2.5-flash"
                        className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-indigo-500 outline-none text-sm font-mono transition-all"
                        value={config.model}
                        onChange={e => setConfig({ ...config, model: e.target.value })}
                      />
                    </div>
                </div>

                {/* Test Connection Button */}
                <button
                    onClick={handleTestConnection}
                    disabled={testStatus === 'TESTING' || !config.apiKey}
                    className={`w-full py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all border-2 ${
                        testStatus === 'SUCCESS' ? 'bg-green-50 border-green-200 text-green-600' :
                        testStatus === 'FAIL' ? 'bg-red-50 border-red-200 text-red-600' :
                        'bg-white border-indigo-100 text-indigo-600 hover:bg-indigo-50'
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                    {testStatus === 'TESTING' ? <><Activity className="animate-spin" size={18} /> 连接测试中...</> : 
                     testStatus === 'SUCCESS' ? <><Wifi size={18} /> 连接成功</> : 
                     testStatus === 'FAIL' ? <><WifiOff size={18} /> 连接失败，请检查网络或密钥</> : 
                     <><Activity size={18} /> 测试对话连接</>}
                </button>
              </div>

              {/* Vision Model Config */}
              <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-6">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                      <div>
                          <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                              <ImageIcon size={20} className="text-purple-500"/> 视觉模型 (Vision)
                          </h3>
                          <p className="text-xs text-gray-400 mt-1">用于拍照识字和看图写话。</p>
                      </div>
                      {visionTestStatus === 'SUCCESS' && <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"><Check size={14}/> 已连接</span>}
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 text-xs text-purple-700 leading-relaxed">
                      💡 提示：如果留空，系统将默认使用上方“对话模型”的配置。如需使用特定的 Vision 模型（如 gpt-4o 或 gemini-1.5-flash），请在此填写。
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                      <div>
                          <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Vision API Host</label>
                          <input
                            type="text"
                            placeholder="同上 (默认)"
                            className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 outline-none text-sm font-mono transition-all"
                            value={config.visionApiBaseUrl || ''}
                            onChange={e => setConfig({ ...config, visionApiBaseUrl: e.target.value })}
                          />
                      </div>
                      <div>
                          <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Vision API Key</label>
                          <div className="relative group">
                              <input
                                type={showVisionKey ? "text" : "password"}
                                placeholder="同上 (默认)"
                                className="w-full p-4 pr-12 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 outline-none text-sm font-mono transition-all"
                                value={config.visionApiKey || ''}
                                onChange={e => setConfig({ ...config, visionApiKey: e.target.value })}
                              />
                               <button 
                                onClick={() => setShowVisionKey(!showVisionKey)}
                                className="absolute right-4 top-4 text-gray-400 hover:text-purple-600 transition-colors"
                                tabIndex={-1}
                              >
                                  {showVisionKey ? <EyeOff size={20} /> : <Eye size={20} />}
                              </button>
                          </div>
                      </div>
                      <div>
                          <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Vision Model Name</label>
                          <input
                            type="text"
                            placeholder="默认: gemini-2.5-flash"
                            className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 outline-none text-sm font-mono transition-all"
                            value={config.visionModel || ''}
                            onChange={e => setConfig({ ...config, visionModel: e.target.value })}
                          />
                      </div>
                  </div>

                  <button
                        onClick={handleTestVisionConnection}
                        disabled={visionTestStatus === 'TESTING' || (!config.apiKey && !config.visionApiKey)}
                        className={`w-full py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all border-2 ${
                            visionTestStatus === 'SUCCESS' ? 'bg-green-50 border-green-200 text-green-600' :
                            visionTestStatus === 'FAIL' ? 'bg-red-50 border-red-200 text-red-600' :
                            'bg-white border-purple-100 text-purple-600 hover:bg-purple-50'
                        } disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                        {visionTestStatus === 'TESTING' ? <><Activity className="animate-spin" size={18} /> 测试中...</> : 
                         visionTestStatus === 'SUCCESS' ? <><Wifi size={18} /> 视觉连接成功</> : 
                         visionTestStatus === 'FAIL' ? <><WifiOff size={18} /> 视觉连接失败</> : 
                         <><ImageIcon size={18} /> 测试视觉连接</>}
                  </button>
              </div>
          </div>
      </div>

    </div>
  );
};
