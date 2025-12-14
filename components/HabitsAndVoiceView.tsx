
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Volume2, Plus, Trash2, Edit2, Check, Sliders, Globe, AlertCircle, Eye, EyeOff, Gauge, Play, Save, X } from 'lucide-react';
import { AppSettings, CustomTTSProfile } from '../types';
import { getSettings, saveSettings } from '../services/storage';
import { speakText } from './SharedComponents';
import { v4 as uuidv4 } from 'uuid';

interface HabitsAndVoiceViewProps {
    onBack: () => void;
}

export const HabitsAndVoiceView: React.FC<HabitsAndVoiceViewProps> = ({ onBack }) => {
    const [config, setConfig] = useState<AppSettings>(getSettings());
    const [availableSystemVoices, setAvailableSystemVoices] = useState<SpeechSynthesisVoice[]>([]);
    const [ttsTab, setTtsTab] = useState<'SYSTEM' | 'CUSTOM'>('SYSTEM');
    const [showModal, setShowModal] = useState(false);
    const [editingProfile, setEditingProfile] = useState<Partial<CustomTTSProfile>>({});
    const [isTesting, setIsTesting] = useState(false);
    const [testResult, setTestResult] = useState<{success: boolean, msg: string} | null>(null);
    const [showKey, setShowKey] = useState(false);
    
    useEffect(() => {
        const saved = getSettings();
        setConfig(saved);
        if (saved.activeTTSProfileId && saved.activeTTSProfileId !== 'SYSTEM') {
            setTtsTab('CUSTOM');
        } else {
            setTtsTab('SYSTEM');
        }
        const loadVoices = () => {
            const voices = window.speechSynthesis.getVoices();
            setAvailableSystemVoices(voices.filter(v => v.lang.startsWith('zh') || v.lang.includes('CN')));
        };
        loadVoices();
        window.speechSynthesis.onvoiceschanged = loadVoices;
        return () => { window.speechSynthesis.onvoiceschanged = null; }
    }, []);

    const handleSaveSettings = (newConfig: AppSettings) => {
        setConfig(newConfig);
        saveSettings(newConfig);
    };

    const handleDailyLimitChange = (val: number) => {
        handleSaveSettings({ ...config, dailyNewLimit: val });
    };

    const handleStoryLengthChange = (val: number) => {
        handleSaveSettings({ ...config, storyLength: val });
    };

    const handleTTSModeChange = (mode: 'SYSTEM' | 'CUSTOM') => {
        setTtsTab(mode);
        if (mode === 'SYSTEM') {
            handleSaveSettings({ ...config, activeTTSProfileId: 'SYSTEM' });
        } else {
            if (config.customTTSProfiles && config.customTTSProfiles.length > 0) {
                 if (config.activeTTSProfileId === 'SYSTEM' || !config.activeTTSProfileId) {
                      handleSaveSettings({ ...config, activeTTSProfileId: config.customTTSProfiles[0].id });
                 }
            }
        }
    };

    const handleSystemVoiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        handleSaveSettings({ ...config, ttsVoice: e.target.value });
    };

    const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleSaveSettings({ ...config, ttsRate: parseFloat(e.target.value) });
    };

    const handleSelectCustomProfile = (id: string) => {
        handleSaveSettings({ ...config, activeTTSProfileId: id });
    };

    const openAddModal = () => {
        setEditingProfile({
            id: '', name: '', apiUrl: 'https://', voiceId: '', apiKey: '', method: 'GET', speed: 1.0, pitch: 1.0
        });
        setTestResult(null);
        setShowKey(false);
        setShowModal(true);
    };

    const openEditModal = (profile: CustomTTSProfile) => {
        setEditingProfile({ ...profile, speed: profile.speed || 1.0, pitch: profile.pitch || 1.0 });
        setTestResult(null);
        setShowKey(false);
        setShowModal(true);
    };

    const handleDeleteProfile = (id: string) => {
        if (confirm("确定要删除这个语音配置吗？")) {
            const newProfiles = config.customTTSProfiles?.filter(p => p.id !== id) || [];
            let newActiveId = config.activeTTSProfileId;
            if (newActiveId === id) newActiveId = newProfiles.length > 0 ? newProfiles[0].id : 'SYSTEM';
            handleSaveSettings({ ...config, customTTSProfiles: newProfiles, activeTTSProfileId: newActiveId });
        }
    };

    const handleSaveProfile = () => {
        if (!editingProfile.name || !editingProfile.apiUrl) {
            alert("名称和接口地址不能为空");
            return;
        }
        let cleanUrl = editingProfile.apiUrl.trim();
        if (!cleanUrl.startsWith('http')) cleanUrl = 'https://' + cleanUrl;
        
        const newProfile: CustomTTSProfile = {
            id: editingProfile.id || uuidv4(),
            name: editingProfile.name,
            apiUrl: cleanUrl,
            voiceId: editingProfile.voiceId || '',
            apiKey: editingProfile.apiKey || '',
            method: editingProfile.method || 'GET',
            speed: editingProfile.speed || 1.0,
            pitch: editingProfile.pitch || 1.0
        };

        let newProfiles = [...(config.customTTSProfiles || [])];
        if (editingProfile.id) {
            const index = newProfiles.findIndex(p => p.id === editingProfile.id);
            if (index !== -1) newProfiles[index] = newProfile;
        } else {
            newProfiles.push(newProfile);
        }
        handleSaveSettings({ ...config, customTTSProfiles: newProfiles, activeTTSProfileId: newProfile.id });
        setShowModal(false);
    };

    const handleTestTTS = async () => {
        if (!editingProfile.apiUrl) return;
        setIsTesting(true);
        setTestResult(null);
        const testText = "你好";
        
        let rawUrl = editingProfile.apiUrl.trim();
        if (!rawUrl.startsWith('http')) rawUrl = 'https://' + rawUrl;
        
        const candidates: { url: string, method: 'GET' | 'POST' }[] = [];
        if (rawUrl.endsWith('/v1/audio/speech') || rawUrl.endsWith('/speech')) candidates.push({ url: rawUrl, method: 'POST' });
        candidates.push({ url: rawUrl, method: 'GET' });
        let baseUrl = rawUrl.replace(/\/v1\/audio\/speech\/?$/, '').replace(/\/api\/tts\/?$/, '').replace(/\/+$/, '');
        candidates.push({ url: `${baseUrl}/v1/audio/speech`, method: 'POST' });
        candidates.push({ url: `${baseUrl}/api/tts`, method: 'GET' });
        candidates.push({ url: `${baseUrl}/tts`, method: 'GET' });
        
        const uniqueCandidates = candidates.filter((v, i, a) => a.findIndex(t => t.url === v.url && t.method === v.method) === i);
        let successfulUrl = '', successfulMethod: 'GET' | 'POST' = 'GET', errorDetails = '', found = false;

        for (const candidate of uniqueCandidates) {
            try {
                const headers: HeadersInit = {};
                if (editingProfile.apiKey) headers['Authorization'] = `Bearer ${editingProfile.apiKey}`;
                let res;
                if (candidate.method === 'POST') {
                    headers['Content-Type'] = 'application/json';
                    res = await fetch(candidate.url, {
                        method: 'POST',
                        headers,
                        body: JSON.stringify({
                            model: 'tts-1', input: testText, voice: editingProfile.voiceId || 'zh-CN-XiaoxiaoNeural',
                            speed: editingProfile.speed || 1.0, pitch: editingProfile.pitch || 1.0, response_format: 'mp3'
                        })
                    });
                } else {
                    const urlObj = new URL(candidate.url);
                    urlObj.searchParams.set('text', testText);
                    if (editingProfile.voiceId) urlObj.searchParams.set('voice', editingProfile.voiceId);
                    const ratePercent = Math.round(((editingProfile.speed || 1.0) - 1) * 100);
                    urlObj.searchParams.set('rate', (ratePercent >= 0 ? '+' : '') + ratePercent + '%');
                    const pitchDiff = Math.round(((editingProfile.pitch || 1.0) - 1) * 20);
                    urlObj.searchParams.set('pitch', (pitchDiff >= 0 ? '+' : '') + pitchDiff + 'Hz');
                    res = await fetch(urlObj.toString(), { headers });
                }

                const type = res.headers.get('content-type');
                if (res.ok && type && (type.includes('audio') || type.includes('mpeg') || type.includes('wav') || type.includes('octet-stream'))) {
                    const blob = await res.blob();
                    if (blob.size > 0) {
                        const audio = new Audio(URL.createObjectURL(blob));
                        await audio.play();
                        successfulUrl = candidate.url;
                        successfulMethod = candidate.method;
                        found = true;
                        break; 
                    }
                } else {
                     if (!res.ok) {
                         const txt = await res.text().catch(() => '');
                         if (res.status !== 404 && res.status !== 405) errorDetails = `[${candidate.method} ${res.status}] ${txt.slice(0, 100)}`;
                     }
                }
            } catch (e: any) {
                if (!errorDetails || candidate.url === rawUrl) errorDetails = e.message || "Network Error";
            }
        }

        setIsTesting(false);
        if (found && successfulUrl) {
            setTestResult({ success: true, msg: "测试成功！声音正常播放。" });
            if (successfulUrl !== rawUrl || successfulMethod !== editingProfile.method) {
                if (confirm(`测试成功！\n\n检测到有效的接口配置：\n地址: ${successfulUrl}\n方式: ${successfulMethod}\n\n是否为您自动更新？`)) {
                    setEditingProfile(prev => ({ ...prev, apiUrl: successfulUrl, method: successfulMethod }));
                }
            }
        } else {
            setTestResult({ success: false, msg: `测试失败。\n错误: ${errorDetails}` });
        }
    };

    return (
        <div className="max-w-7xl mx-auto min-h-screen bg-gray-50 pb-24 animate-slide-up">
            <div className="bg-white px-6 py-4 shadow-sm border-b border-gray-100 sticky top-0 z-10 flex items-center gap-3">
                <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600">
                    <ArrowLeft size={24} />
                </button>
                <h1 className="text-xl font-bold text-gray-800">习惯与语音</h1>
            </div>

            <div className="p-4 md:p-8 space-y-8 max-w-3xl mx-auto">
                <section className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                     <h3 className="font-bold text-lg text-gray-800 mb-6 flex items-center gap-2">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-xl"><Sliders size={20}/></div>
                        学习习惯
                     </h3>
                     <div className="space-y-6">
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-bold text-gray-600">每日新学数量</label>
                                <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{config.dailyNewLimit} 字</span>
                            </div>
                            <input type="range" min="3" max="20" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" value={config.dailyNewLimit} onChange={e => handleDailyLimitChange(parseInt(e.target.value))} />
                            <p className="text-xs text-gray-400 mt-2">复习数量由 AI 根据遗忘曲线自动安排。</p>
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-bold text-gray-600">AI 故事长度</label>
                                <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{config.storyLength} 字</span>
                            </div>
                            <input type="range" min="50" max="500" step="10" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" value={config.storyLength} onChange={e => handleStoryLengthChange(parseInt(e.target.value))} />
                        </div>
                     </div>
                </section>
                <section className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                     <h3 className="font-bold text-lg text-gray-800 mb-6 flex items-center gap-2">
                        <div className="p-2 bg-purple-50 text-purple-600 rounded-xl"><Volume2 size={20}/></div>
                        语音设置 (TTS)
                     </h3>
                     <div className="bg-gray-100 p-1 rounded-xl flex mb-6">
                         <button onClick={() => handleTTSModeChange('SYSTEM')} className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${ttsTab === 'SYSTEM' ? 'bg-white shadow text-gray-800' : 'text-gray-500'}`}>系统默认</button>
                         <button onClick={() => handleTTSModeChange('CUSTOM')} className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${ttsTab === 'CUSTOM' ? 'bg-white shadow text-purple-600' : 'text-gray-500'}`}>自定义接口</button>
                     </div>
                     {ttsTab === 'SYSTEM' ? (
                         <div className="space-y-4 animate-fade-in">
                             <div>
                                <label className="block text-xs font-bold text-gray-500 mb-2">系统声音</label>
                                <select className="w-full p-3 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:border-blue-500 outline-none" value={config.ttsVoice} onChange={handleSystemVoiceChange}>
                                    <option value="">默认声音 (自动)</option>
                                    {availableSystemVoices.map((v) => <option key={v.voiceURI} value={v.voiceURI}>{v.name} ({v.lang})</option>)}
                                </select>
                             </div>
                             <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-xs font-bold text-gray-500">语速</label>
                                    <span className="text-xs font-bold text-gray-700">{config.ttsRate}x</span>
                                </div>
                                <input type="range" min="0.5" max="1.5" step="0.1" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" value={config.ttsRate} onChange={handleRateChange} />
                             </div>
                             <div className="flex justify-end">
                                 <button onClick={() => speakText("你好，我是汉字小英雄。")} className="text-xs font-bold text-blue-600 flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors"><Volume2 size={14}/> 试听</button>
                             </div>
                         </div>
                     ) : (
                         <div className="space-y-4 animate-fade-in">
                             <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 text-xs text-purple-700 mb-4 leading-relaxed">
                                 <p className="font-bold mb-1">📢 支持 zuoban/tts 等开源项目</p>
                                 <p>推荐使用 Vercel 或 Cloudflare 部署的 Edge-TTS 接口。</p>
                             </div>
                             {config.customTTSProfiles && config.customTTSProfiles.length > 0 ? (
                                 <div className="space-y-2">
                                     {config.customTTSProfiles.map(profile => (
                                         <div key={profile.id} onClick={() => handleSelectCustomProfile(profile.id)} className={`p-3 rounded-xl border-2 flex items-center justify-between cursor-pointer transition-all ${config.activeTTSProfileId === profile.id ? 'border-purple-500 bg-purple-50 shadow-sm' : 'border-gray-100 hover:border-purple-200 bg-white'}`}>
                                             <div className="flex items-center gap-3 overflow-hidden">
                                                 <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${config.activeTTSProfileId === profile.id ? 'border-purple-600' : 'border-gray-300'}`}>
                                                     {config.activeTTSProfileId === profile.id && <div className="w-2.5 h-2.5 bg-purple-600 rounded-full"/>}
                                                 </div>
                                                 <div className="min-w-0 flex-1">
                                                     <div className="font-bold text-sm text-gray-800 truncate flex items-center gap-2">{profile.name}</div>
                                                     <div className="text-[10px] text-gray-400 truncate font-mono">{profile.apiUrl}</div>
                                                 </div>
                                             </div>
                                             <div className="flex gap-1 shrink-0 ml-2">
                                                 <button onClick={(e) => { e.stopPropagation(); speakText("你好", undefined, 'zh-CN'); }} className="p-2 hover:bg-white rounded-full text-gray-400 hover:text-purple-600"><Volume2 size={16}/></button>
                                                 <button onClick={(e) => { e.stopPropagation(); openEditModal(profile); }} className="p-2 hover:bg-white rounded-full text-gray-400 hover:text-blue-600"><Edit2 size={16}/></button>
                                                 <button onClick={(e) => { e.stopPropagation(); handleDeleteProfile(profile.id); }} className="p-2 hover:bg-white rounded-full text-gray-400 hover:text-red-600"><Trash2 size={16}/></button>
                                             </div>
                                         </div>
                                     ))}
                                 </div>
                             ) : (
                                 <div className="text-center py-8 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                                     <div className="text-gray-400 text-sm mb-2">暂无自定义配置</div>
                                     <div className="text-xs text-gray-300">点击下方按钮添加</div>
                                 </div>
                             )}
                             <button onClick={openAddModal} className="w-full py-3 border-2 border-dashed border-purple-300 text-purple-600 bg-purple-50/50 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-purple-100 transition-colors"><Plus size={18}/> 添加新配置</button>
                         </div>
                     )}
                </section>
            </div>
            
            {showModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-6 animate-bounce-in max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-lg text-gray-800">{editingProfile.id ? '编辑配置' : '新增 TTS 配置'}</h3>
                            <button onClick={() => setShowModal(false)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"><X size={20}/></button>
                        </div>
                        <div className="space-y-4">
                            <div><label className="block text-xs font-bold text-gray-500 mb-1">配置名称</label><input className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 outline-none transition-all" placeholder="例如：微软晓晓" value={editingProfile.name || ''} onChange={e => setEditingProfile({...editingProfile, name: e.target.value})}/></div>
                            <div><label className="block text-xs font-bold text-gray-500 mb-1 flex items-center gap-1"><Globe size={12}/> 接口地址 (API URL)</label><input className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 outline-none transition-all font-mono text-xs text-gray-600" placeholder="https://your-app.vercel.app/api/tts" value={editingProfile.apiUrl || ''} onChange={e => setEditingProfile({...editingProfile, apiUrl: e.target.value})}/></div>
                            <div><label className="block text-xs font-bold text-gray-500 mb-1">音色标识 (Voice ID)</label><input className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 outline-none transition-all" placeholder="例如：zh-CN-XiaoxiaoNeural" value={editingProfile.voiceId || ''} onChange={e => setEditingProfile({...editingProfile, voiceId: e.target.value})}/></div>
                            <div className="pt-4 flex gap-3">
                                <button onClick={handleTestTTS} disabled={isTesting} className="flex-1 py-3 border border-gray-200 text-gray-600 font-bold rounded-xl hover:bg-gray-50 flex items-center justify-center gap-2 disabled:opacity-50">{isTesting ? <div className="loader w-4 h-4 border-2 border-gray-400"/> : <Play size={16}/>} 试听</button>
                                <button onClick={handleSaveProfile} className="flex-[2] py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 shadow-md flex items-center justify-center gap-2"><Save size={18}/> 保存配置</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
