
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Database, Download, Upload, Cloud, CloudUpload, CloudDownload, RefreshCw, Activity, Link, Check, X, FileJson, WifiOff, Trash2 } from 'lucide-react';
import { AppSettings, WebDAVConfig } from '../types';
import { getSettings, saveSettings, exportUserData, importUserData } from '../services/storage';
import { WebDAVClient } from '../services/webdav';

interface DataManagementViewProps {
  onBack: () => void;
}

export const DataManagementView: React.FC<DataManagementViewProps> = ({ onBack }) => {
  const [config, setConfig] = useState<AppSettings>(getSettings());
  
  // Import State
  const [showImport, setShowImport] = useState(false);
  const [importStatus, setImportStatus] = useState<'IDLE' | 'READING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [importErrorMsg, setImportErrorMsg] = useState('');

  // WebDAV State
  const [webdavStatus, setWebdavStatus] = useState<'IDLE' | 'TESTING' | 'BACKING_UP' | 'RESTORING' | 'LISTING'>('IDLE');
  const [webdavMsg, setWebdavMsg] = useState<{type: 'success'|'error', text: string} | null>(null);
  const [backupList, setBackupList] = useState<{name: string, lastModified: Date}[]>([]);
  const [showWebdavRestore, setShowWebdavRestore] = useState(false);

  const [restoreConfirmFile, setRestoreConfirmFile] = useState<string | null>(null);

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

  const getWebdavClient = () => {
      return new WebDAVClient({
          url: config.webdav?.url || '',
          username: config.webdav?.username,
          password: config.webdav?.password,
          path: config.webdav?.path
      });
  };

  const handleWebdavTest = async () => {
      setWebdavStatus('TESTING');
      setWebdavMsg(null);
      const client = getWebdavClient();
      const result = await client.testConnection();
      if (result.success) {
          setWebdavMsg({ type: 'success', text: '连接成功！' });
      } else {
          setWebdavMsg({ type: 'error', text: result.message || '连接失败' });
      }
      setWebdavStatus('IDLE');
  };

  const refreshBackupList = async () => {
      setWebdavStatus('LISTING');
      const client = getWebdavClient();
      const files = await client.getFileList();
      // Filter for our backups (simple check)
      const backups = files.filter(f => f.name.endsWith('.json') && f.name.includes('hanzi-hero'));
      setBackupList(backups);
      setWebdavStatus('IDLE');
      return backups;
  };

  const handleWebdavBackup = async () => {
      if (!config.webdav?.url) {
          setWebdavMsg({ type: 'error', text: '请先配置 WebDAV 地址' });
          return;
      }
      setWebdavStatus('BACKING_UP');
      setWebdavMsg(null);
      
      try {
          const client = getWebdavClient();
          const data = exportUserData();
          const now = new Date();
          const filename = `hanzi-hero-backup-${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}-${String(now.getHours()).padStart(2,'0')}${String(now.getMinutes()).padStart(2,'0')}${String(now.getSeconds()).padStart(2,'0')}.json`;
          
          const success = await client.uploadFile(filename, data);
          
          if (success) {
              setWebdavMsg({ type: 'success', text: '备份成功！' });
              // Clean up old backups
              const backups = await refreshBackupList();
              const maxBackups = config.webdav?.maxBackups || 5;
              if (backups.length > maxBackups) {
                  const toDelete = backups.slice(maxBackups);
                  for (const file of toDelete) {
                      await client.deleteFile(file.name);
                  }
                  await refreshBackupList();
              }
          } else {
              setWebdavMsg({ type: 'error', text: '备份上传失败' });
          }
      } catch (e: any) {
          setWebdavMsg({ type: 'error', text: `备份出错: ${e.message}` });
      } finally {
          setWebdavStatus('IDLE');
      }
  };

  const handleWebdavRestore = (filename: string) => {
      setRestoreConfirmFile(filename);
  };

  const confirmRestore = async () => {
      if (!restoreConfirmFile) return;
      const filename = restoreConfirmFile;
      setRestoreConfirmFile(null);
      
      setWebdavStatus('RESTORING');
      try {
          const client = getWebdavClient();
          const content = await client.downloadFile(filename);
          if (content) {
              const success = importUserData(content);
              if (success) {
                   setWebdavMsg({ type: 'success', text: '恢复成功！即将刷新...' });
                   setTimeout(() => window.location.reload(), 1500);
              } else {
                   setWebdavMsg({ type: 'error', text: '备份文件格式错误' });
              }
          } else {
              setWebdavMsg({ type: 'error', text: '下载备份文件失败' });
          }
      } catch (e: any) {
          setWebdavMsg({ type: 'error', text: `恢复出错: ${e.message}` });
      } finally {
          setWebdavStatus('IDLE');
      }
  };

  const updateWebdavConfig = (field: keyof WebDAVConfig, value: any) => {
      const newWebdav = { ...config.webdav!, [field]: value };
      const newConfig = { ...config, webdav: newWebdav };
      setConfig(newConfig);
      saveSettings(newConfig);
  };

  return (
    <div className="max-w-7xl mx-auto min-h-screen bg-gray-50 pb-24 animate-fade-in">
        <div className="bg-white px-6 py-4 shadow-sm border-b border-gray-100 sticky top-0 z-10 flex items-center gap-2">
            <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600">
                <ArrowLeft size={24} />
            </button>
            <h1 className="text-xl font-bold text-gray-800">数据管理</h1>
        </div>

        <div className="p-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-800 border-b pb-3 mb-4 flex items-center gap-2">
                    <Database size={18} className="text-indigo-600"/> 本地备份与恢复
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col justify-between">
                        <div className="mb-2">
                            <h4 className="font-bold text-gray-700 flex items-center gap-2"><Download size={16}/> 导出数据</h4>
                            <p className="text-xs text-gray-400 mt-1">保存所有学习进度、设置和自定义内容到本地文件。</p>
                        </div>
                        <button onClick={handleExport} className="w-full py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-indigo-300 hover:text-indigo-600 font-bold flex justify-center items-center gap-2 transition-colors">
                            导出备份
                        </button>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col justify-between">
                        <div className="mb-2">
                            <h4 className="font-bold text-gray-700 flex items-center gap-2"><Upload size={16}/> 导入数据</h4>
                            <p className="text-xs text-gray-400 mt-1">从备份文件恢复数据。注意：这将覆盖当前所有数据。</p>
                        </div>
                        <button onClick={() => setShowImport(!showImport)} className="w-full py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-indigo-300 hover:text-indigo-600 font-bold flex justify-center items-center gap-2 transition-colors">
                            {showImport ? '取消导入' : '选择文件'}
                        </button>
                    </div>
                </div>
                
                {showImport && (
                    <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 animate-slide-up mb-6">
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

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-6">
                <h3 className="font-bold text-gray-800 border-b pb-3 mb-4 flex items-center gap-2">
                    <Cloud size={18} className="text-blue-500"/> WebDAV 云备份
                </h3>
                
                <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 space-y-4">
                    {/* Config Form */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-500">服务器地址</label>
                            <input 
                                type="text" 
                                placeholder="https://dav.example.com"
                                value={config.webdav?.url || ''}
                                onChange={(e) => updateWebdavConfig('url', e.target.value)}
                                className="w-full p-2 rounded-lg border border-gray-200 focus:border-blue-400 outline-none text-sm"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-500">备份路径</label>
                            <input 
                                type="text" 
                                placeholder="/hanzi-hero-backup"
                                value={config.webdav?.path || ''}
                                onChange={(e) => updateWebdavConfig('path', e.target.value)}
                                className="w-full p-2 rounded-lg border border-gray-200 focus:border-blue-400 outline-none text-sm"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-500">用户名</label>
                            <input 
                                type="text" 
                                placeholder="Username"
                                value={config.webdav?.username || ''}
                                onChange={(e) => updateWebdavConfig('username', e.target.value)}
                                className="w-full p-2 rounded-lg border border-gray-200 focus:border-blue-400 outline-none text-sm"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-500">密码</label>
                            <input 
                                type="password" 
                                placeholder="Password"
                                value={config.webdav?.password || ''}
                                onChange={(e) => updateWebdavConfig('password', e.target.value)}
                                className="w-full p-2 rounded-lg border border-gray-200 focus:border-blue-400 outline-none text-sm"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-500">最大备份数</label>
                            <input 
                                type="number" 
                                min="1"
                                max="20"
                                value={config.webdav?.maxBackups || 5}
                                onChange={(e) => updateWebdavConfig('maxBackups', parseInt(e.target.value))}
                                className="w-full p-2 rounded-lg border border-gray-200 focus:border-blue-400 outline-none text-sm"
                            />
                        </div>
                    </div>

                    <div className="text-xs text-orange-500 bg-orange-50 p-2 rounded border border-orange-100">
                        注意：请确保您的 WebDAV 服务已允许跨域请求 (CORS)，否则无法在浏览器中连接。坚果云不支持跨域请求。推荐使用自建WebDAV(如dufs)，启动命令示例：<code className="bg-orange-100 px-1 rounded">dufs --cors -A</code>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                        <button 
                            onClick={handleWebdavTest}
                            disabled={webdavStatus !== 'IDLE'}
                            className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 font-bold text-sm flex items-center gap-2 disabled:opacity-50 transition-colors"
                        >
                            {webdavStatus === 'TESTING' ? <Activity size={16} className="animate-spin"/> : <Link size={16}/>} 
                            测试连接
                        </button>

                        <button 
                            onClick={handleWebdavBackup}
                            disabled={webdavStatus !== 'IDLE'}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-bold text-sm flex items-center gap-2 shadow-sm disabled:opacity-50 transition-colors"
                        >
                            {webdavStatus === 'BACKING_UP' ? <Activity size={16} className="animate-spin"/> : <CloudUpload size={16}/>} 
                            备份到 WebDAV
                        </button>
                        
                        <button 
                            onClick={async () => {
                                setShowWebdavRestore(!showWebdavRestore);
                                if (!showWebdavRestore) await refreshBackupList();
                            }}
                            disabled={webdavStatus !== 'IDLE' && webdavStatus !== 'LISTING'}
                            className="px-4 py-2 bg-white border border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 font-bold text-sm flex items-center gap-2 disabled:opacity-50 transition-colors"
                        >
                            {webdavStatus === 'LISTING' ? <Activity size={16} className="animate-spin"/> : <CloudDownload size={16}/>} 
                            从 WebDAV 恢复
                        </button>
                    </div>

                    {/* Status Message */}
                    {webdavMsg && (
                        <div className={`text-sm font-bold flex items-center gap-2 ${webdavMsg.type === 'success' ? 'text-green-600' : 'text-red-500'}`}>
                            {webdavMsg.type === 'success' ? <Check size={14}/> : <X size={14}/>}
                            {webdavMsg.text}
                        </div>
                    )}

                    {/* Restore List */}
                    {showWebdavRestore && (
                        <div className="mt-4 bg-white rounded-xl border border-blue-100 overflow-hidden animate-fade-in">
                            <div className="px-4 py-3 bg-blue-50/50 border-b border-blue-100 flex items-center justify-between">
                                <h5 className="font-bold text-blue-800 text-sm">云端备份列表</h5>
                                <button onClick={() => refreshBackupList()} className="p-1 hover:bg-blue-100 rounded text-blue-600">
                                    <RefreshCw size={14} />
                                </button>
                            </div>
                            <div className="max-h-60 overflow-y-auto">
                                {backupList.length === 0 ? (
                                    <div className="p-8 text-center text-gray-400 text-sm">
                                        {webdavStatus === 'LISTING' ? '正在获取列表...' : '暂无备份文件'}
                                    </div>
                                ) : (
                                    <div className="divide-y divide-gray-50">
                                        {backupList.map((file) => (
                                            <div key={file.name} className="p-3 flex items-center justify-between hover:bg-gray-50">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-medium text-gray-700">{file.name}</span>
                                                    <span className="text-xs text-gray-400">{file.lastModified.toLocaleString()}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <button 
                                                        onClick={() => handleWebdavRestore(file.name)}
                                                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded text-xs font-bold hover:bg-blue-100 transition-colors"
                                                    >
                                                        恢复
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        {/* Restore Confirmation Modal */}
        {restoreConfirmFile && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
                <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden animate-slide-up">
                    <div className="p-6">
                        <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <RefreshCw size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-center text-gray-800 mb-2">确认恢复数据？</h3>
                        <p className="text-gray-500 text-center text-sm mb-6">
                            您即将从备份 <span className="font-mono bg-gray-100 px-1 rounded text-gray-700">{restoreConfirmFile}</span> 恢复数据。
                            <br/><br/>
                            <span className="text-red-500 font-bold">⚠️ 警告：此操作将完全覆盖您当前的本地数据，且无法撤销！</span>
                        </p>
                        
                        <div className="flex gap-3">
                            <button 
                                onClick={() => setRestoreConfirmFile(null)}
                                className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                            >
                                取消
                            </button>
                            <button 
                                onClick={confirmRestore}
                                className="flex-1 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 shadow-lg shadow-red-200 transition-colors"
                            >
                                确认恢复
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}

    </div>
  );
};
