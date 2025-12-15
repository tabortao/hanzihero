
import React, { useState, useEffect, useRef } from 'react';
import { X, Save, Activity, Wifi, WifiOff, Eye, EyeOff, Server, Image as ImageIcon, Bot, Check } from 'lucide-react';
import { AppSettings, ProviderConfig } from '../types';
import { getSettings, saveSettings } from '../services/storage';
import { testConnection, testVisionConnection } from '../services/geminiService';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
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

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
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
    if (isOpen) {
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
    }
  }, [isOpen]);

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

  const handleSave = () => {
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
    onClose();
  };

  const handleTestConnection = async () => {
    setTestStatus('TESTING');
    const success = await testConnection(config);
    setTestStatus(success ? 'SUCCESS' : 'FAIL');
    setTimeout(() => { if (isOpen) setTestStatus('IDLE'); }, 3000);
  };

  const handleTestVisionConnection = async () => {
    setVisionTestStatus('TESTING');
    const success = await testVisionConnection(config);
    setVisionTestStatus(success ? 'SUCCESS' : 'FAIL');
    setTimeout(() => { if (isOpen) setVisionTestStatus('IDLE'); }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in sm:p-6">
      <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl border-4 border-indigo-50 overflow-hidden flex flex-col max-h-[90vh] sm:max-h-[85vh]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-4 border-b border-indigo-100 flex justify-between items-center shrink-0">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Bot size={24} className="text-indigo-100" /> 
            <span>AI 模型配置</span>
          </h2>
          <button 
            onClick={onClose} 
            className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-6 space-y-6 overflow-y-auto custom-scrollbar flex-1 bg-gray-50/50">
          
          {/* Provider Selection */}
          <div className="space-y-3">
             <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                 <Server size={14}/> 选择服务商
             </label>
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {Object.entries(PROVIDERS).map(([key, provider]) => (
                    <button
                        key={key}
                        onClick={() => handleProviderChange(key)}
                        className={`
                            px-3 py-3 rounded-xl text-xs font-bold border-2 transition-all truncate flex flex-col items-center justify-center gap-1
                            ${activeProvider === key 
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-md transform scale-[1.02]' 
                            : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
                            }
                        `}
                    >
                        {key === 'GOOGLE' && <span className="text-lg">🌍</span>}
                        {key === 'ZHIPU' && <span className="text-lg">🧠</span>}
                        {key === 'DEEPSEEK' && <span className="text-lg">🐳</span>}
                        {key === 'SILICON' && <span className="text-lg">🚀</span>}
                        {key === 'CUSTOM' && <span className="text-lg">⚙️</span>}
                        <span>{provider.name}</span>
                    </button>
                ))}
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* 1. Chat Model Config */}
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <h3 className="font-bold text-gray-800 flex items-center gap-2">
                        <Server size={18} className="text-indigo-500"/> 对话模型 (Chat)
                    </h3>
                    {testStatus === 'SUCCESS' && <span className="text-xs font-bold text-green-600 flex items-center gap-1"><Check size={12}/> 已连接</span>}
                </div>
                
                {/* API Base URL */}
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">
                      API Host (代理地址)
                  </label>
                  <input
                    type="text"
                    placeholder={activeProvider === 'GOOGLE' ? '默认无需填写' : 'https://api.example.com/v1'}
                    className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-indigo-500 outline-none text-sm font-mono transition-all"
                    value={config.apiBaseUrl}
                    onChange={e => {
                        setConfig({ ...config, apiBaseUrl: e.target.value });
                        if(activeProvider !== 'CUSTOM' && Object.keys(PROVIDERS).includes(activeProvider) && e.target.value !== PROVIDERS[activeProvider as keyof typeof PROVIDERS].url) {
                             // Optional: Could auto-switch to custom if user edits a preset URL, but keeping current provider active is also fine for minor tweaks
                        }
                    }}
                  />
                  {activeProvider === 'GOOGLE' && <p className="text-[10px] text-gray-400 mt-1">Google 直连无需填写，国内使用请填代理。</p>}
                </div>

                {/* API Key */}
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">API Key (密钥)</label>
                  <div className="relative group">
                      <input
                        type={showKey ? "text" : "password"}
                        placeholder="sk-..."
                        className="w-full p-3 pr-10 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-indigo-500 outline-none text-sm font-mono transition-all"
                        value={config.apiKey}
                        onChange={e => setConfig({ ...config, apiKey: e.target.value })}
                      />
                      <button 
                        onClick={() => setShowKey(!showKey)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-indigo-600 transition-colors"
                        tabIndex={-1}
                      >
                          {showKey ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                  </div>
                </div>

                {/* Model Name */}
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">Model Name (模型)</label>
                  <input
                    type="text"
                    placeholder="如: gemini-2.5-flash"
                    className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-indigo-500 outline-none text-sm font-mono transition-all"
                    value={config.model}
                    onChange={e => setConfig({ ...config, model: e.target.value })}
                  />
                </div>

                {/* Test Connection Button */}
                <button
                    onClick={handleTestConnection}
                    disabled={testStatus === 'TESTING' || !config.apiKey}
                    className={`w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all border ${
                        testStatus === 'SUCCESS' ? 'bg-green-50 border-green-200 text-green-600' :
                        testStatus === 'FAIL' ? 'bg-red-50 border-red-200 text-red-600' :
                        'bg-indigo-50 border-indigo-100 text-indigo-600 hover:bg-indigo-100'
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                    {testStatus === 'TESTING' ? <><Activity className="animate-spin" size={16} /> 测试中...</> : 
                     testStatus === 'SUCCESS' ? <><Wifi size={16} /> 连接成功</> : 
                     testStatus === 'FAIL' ? <><WifiOff size={16} /> 连接失败</> : 
                     <><Activity size={16} /> 测试对话连接</>}
                </button>
              </div>

              {/* 2. Vision Model Config */}
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                      <h3 className="font-bold text-gray-800 flex items-center gap-2">
                          <ImageIcon size={18} className="text-purple-500"/> 视觉模型 (Vision)
                      </h3>
                      {visionTestStatus === 'SUCCESS' && <span className="text-xs font-bold text-green-600 flex items-center gap-1"><Check size={12}/> 已连接</span>}
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded-lg border border-purple-100 text-xs text-purple-700 mb-2">
                      用于 <span className="font-bold">拍照识字</span> 和 <span className="font-bold">看图写话</span>。留空则默认使用上方配置。
                  </div>

                  <div className="space-y-4">
                      <div>
                          <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">Vision API Host</label>
                          <input
                            type="text"
                            placeholder="同上 (默认)"
                            className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 outline-none text-sm font-mono transition-all"
                            value={config.visionApiBaseUrl || ''}
                            onChange={e => setConfig({ ...config, visionApiBaseUrl: e.target.value })}
                          />
                      </div>
                      <div>
                          <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">Vision API Key</label>
                          <div className="relative group">
                              <input
                                type={showVisionKey ? "text" : "password"}
                                placeholder="同上 (默认)"
                                className="w-full p-3 pr-10 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 outline-none text-sm font-mono transition-all"
                                value={config.visionApiKey || ''}
                                onChange={e => setConfig({ ...config, visionApiKey: e.target.value })}
                              />
                               <button 
                                onClick={() => setShowVisionKey(!showVisionKey)}
                                className="absolute right-3 top-3 text-gray-400 hover:text-purple-600 transition-colors"
                                tabIndex={-1}
                              >
                                  {showVisionKey ? <EyeOff size={18} /> : <Eye size={18} />}
                              </button>
                          </div>
                      </div>
                      <div>
                          <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">Vision Model Name</label>
                          <input
                            type="text"
                            placeholder="默认: gemini-2.5-flash"
                            className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 outline-none text-sm font-mono transition-all"
                            value={config.visionModel || ''}
                            onChange={e => setConfig({ ...config, visionModel: e.target.value })}
                          />
                      </div>
                  </div>

                  <button
                        onClick={handleTestVisionConnection}
                        disabled={visionTestStatus === 'TESTING' || (!config.apiKey && !config.visionApiKey)}
                        className={`w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all border ${
                            visionTestStatus === 'SUCCESS' ? 'bg-green-50 border-green-200 text-green-600' :
                            visionTestStatus === 'FAIL' ? 'bg-red-50 border-red-200 text-red-600' :
                            'bg-purple-50 border-purple-100 text-purple-600 hover:bg-purple-100'
                        } disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                        {visionTestStatus === 'TESTING' ? <><Activity className="animate-spin" size={16} /> 测试中...</> : 
                         visionTestStatus === 'SUCCESS' ? <><Wifi size={16} /> 视觉连接成功</> : 
                         visionTestStatus === 'FAIL' ? <><WifiOff size={16} /> 视觉连接失败</> : 
                         <><ImageIcon size={16} /> 测试视觉连接</>}
                  </button>
              </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-white shrink-0 pb-safe">
          <button
            onClick={handleSave}
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            <Save size={20} /> 保存所有配置
          </button>
        </div>
      </div>
      
      {/* Styles for safe area padding if needed on mobile PWA */}
      <style>{`
          .pb-safe {
              padding-bottom: env(safe-area-inset-bottom, 20px);
          }
      `}</style>
    </div>
  );
};
