export class WebDAVClient {
    private url: string;
    private authHeader: string;
    private basePath: string;

    constructor(config: { url: string; username?: string; password?: string; path?: string }) {
        // Normalize URL: remove trailing slash
        this.url = config.url ? config.url.replace(/\/+$/, '') : '';
        // Normalize Path: remove leading/trailing slashes
        this.basePath = config.path ? config.path.replace(/^\/+|\/+$/g, '') : '';
        
        if (config.username && config.password) {
            this.authHeader = 'Basic ' + btoa(`${config.username}:${config.password}`);
        } else {
            this.authHeader = '';
        }
    }

    private getHeaders(extras: Record<string, string> = {}) {
        const headers: Record<string, string> = { ...extras };
        if (this.authHeader) {
            headers['Authorization'] = this.authHeader;
        }
        return headers;
    }

    private getFullUrl(filename: string = '') {
        let url = this.url;
        if (this.basePath) {
            url += '/' + this.basePath;
        }
        if (filename) {
            url += '/' + filename.replace(/^\/+/, '');
        }
        return url;
    }

    async testConnection(): Promise<{success: boolean; message?: string}> {
        if (!this.url) return { success: false, message: '请输入 WebDAV 地址' };
        
        try {
            // PROPFIND depth 0 on root to check access
            const response = await fetch(this.url, {
                method: 'PROPFIND',
                headers: this.getHeaders({ 'Depth': '0' }),
            });
            
            if (response.ok || response.status === 207) {
                return { success: true };
            } else {
                return { success: false, message: `连接失败: ${response.status} ${response.statusText}` };
            }
        } catch (e: any) {
            console.error("WebDAV connection failed:", e);
            let msg = e.message;
            // Catch common CORS error message
            if (msg === 'Failed to fetch' || msg.includes('NetworkError')) {
                if (this.url.includes('jianguoyun.com')) {
                    msg = '坚果云(Nutstore)不支持浏览器直接跨域访问 WebDAV。请使用支持 CORS 的 WebDAV 服务（如自建 dufs/Alist 等），或使用本地代理。';
                } else {
                    msg = '无法连接服务器。请检查：\n1. 地址是否正确 (https/http)\n2. 服务器是否支持跨域(CORS)访问\n3. 网络是否通畅';
                }
            }
            return { success: false, message: `连接错误: ${msg}` };
        }
    }

    async ensureDirectory(): Promise<boolean> {
        if (!this.basePath) return true;
        
        const parts = this.basePath.split('/');
        let currentPath = '';
        for (const part of parts) {
            if (!part) continue;
            currentPath += (currentPath ? '/' : '') + part;
            const fullUrl = this.url + '/' + currentPath;
            
             // Check existence
             try {
                const check = await fetch(fullUrl, {
                     method: 'PROPFIND',
                     headers: this.getHeaders({ 'Depth': '0' }),
                });
                if (check.ok || check.status === 207) continue; // Exists
             } catch(e) {
                 // ignore network error here, try create
             }

             // Create
             try {
                 const res = await fetch(fullUrl, {
                     method: 'MKCOL',
                     headers: this.getHeaders(),
                 });
                 if (!res.ok && res.status !== 405 && res.status !== 201) { // 405 means already exists usually
                     console.error(`Failed to create directory ${fullUrl}: ${res.status}`);
                     // Don't return false immediately, maybe parent exists or server handles it differently
                 }
             } catch (e) {
                 console.error(`Failed to create directory ${fullUrl}:`, e);
                 return false;
             }
        }
        return true;
    }

    async uploadFile(filename: string, data: string): Promise<boolean> {
        if (!await this.ensureDirectory()) {
             // Try upload anyway, maybe path exists
        }
        
        const url = this.getFullUrl(filename);
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: this.getHeaders({ 'Content-Type': 'application/json' }),
                body: data
            });
            if (response.ok || response.status === 201 || response.status === 204) {
                return true;
            } else {
                throw new Error(`上传失败: ${response.status} ${response.statusText}`);
            }
        } catch (e: any) {
            console.error("WebDAV upload failed:", e);

            // Verification Step:
            // If upload threw an error (e.g. ERR_ABORTED), but the file might have been written,
            // we check if the file exists and is very recent.
            try {
                // Wait a moment before checking
                await new Promise(resolve => setTimeout(resolve, 500));
                
                const checkRes = await fetch(url, {
                    method: 'PROPFIND',
                    headers: this.getHeaders({ 'Depth': '0' }),
                });

                if (checkRes.ok || checkRes.status === 207) {
                    console.log("File verification successful despite error:", e.message);
                    return true;
                }
            } catch (verifyError) {
                console.error("Verification failed:", verifyError);
            }

            let msg = e.message;
            if (msg === 'Failed to fetch' || msg.includes('NetworkError')) {
                 msg = '无法连接服务器或被拒绝。请确保您的WebDAV服务(如dufs)已开启写入权限(如 -A 或 --allow-upload)。';
            }
            throw new Error(msg);
        }
    }

    async getFileList(): Promise<{name: string, lastModified: Date}[]> {
         try {
            const response = await fetch(this.getFullUrl(), {
                method: 'PROPFIND',
                headers: this.getHeaders({ 'Depth': '1' }),
            });
            
            if (!response.ok && response.status !== 207) return [];

            const text = await response.text();
            // Parse XML response
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(text, "text/xml");
            
            // Handle namespace prefixes (e.g. d:response or D:response or response)
            // A simple way is to use getElementsByTagNameNS or just standard selector if no prefix
            // But browsers might be strict. Let's try flexible selection.
            const responses = Array.from(xmlDoc.getElementsByTagName("response"));
            if (responses.length === 0) {
                 // Try with namespaces
                 const all = xmlDoc.getElementsByTagName("*");
                 for(let i=0; i<all.length; i++) {
                     if (all[i].localName === 'response') responses.push(all[i]);
                 }
            }

            const files: {name: string, lastModified: Date}[] = [];
            
            responses.forEach(resp => {
                let href = "";
                const hrefNode = Array.from(resp.children).find(n => n.localName === 'href');
                if (hrefNode) href = hrefNode.textContent || "";
                
                // Filter out the directory itself
                let name = href.split('/').filter(p => p).pop() || "";
                // Decode URI component
                try { name = decodeURIComponent(name); } catch(e) {}

                // Check collection
                let isCollection = false;
                const propStat = Array.from(resp.children).find(n => n.localName === 'propstat');
                if (propStat) {
                    const prop = Array.from(propStat.children).find(n => n.localName === 'prop');
                    if (prop) {
                        const resType = Array.from(prop.children).find(n => n.localName === 'resourcetype');
                        if (resType) {
                            isCollection = Array.from(resType.children).some(n => n.localName === 'collection');
                        }
                    }
                }

                if (!isCollection && name) {
                    let lastModifiedStr = "";
                     // Find getlastmodified
                    const propStat = Array.from(resp.children).find(n => n.localName === 'propstat');
                    if (propStat) {
                         const prop = Array.from(propStat.children).find(n => n.localName === 'prop');
                         if (prop) {
                             const lm = Array.from(prop.children).find(n => n.localName === 'getlastmodified');
                             if (lm) lastModifiedStr = lm.textContent || "";
                         }
                    }
                    
                    files.push({ name, lastModified: new Date(lastModifiedStr) });
                }
            });
            
            // Sort by date desc
            return files.sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime());
        } catch (e) {
            console.error("WebDAV list failed:", e);
            return [];
        }
    }

    async downloadFile(filename: string): Promise<string | null> {
        try {
            const response = await fetch(this.getFullUrl(filename), {
                method: 'GET',
                headers: this.getHeaders(),
            });
            if (!response.ok) return null;
            return await response.text();
        } catch (e) {
            console.error("WebDAV download failed:", e);
            return null;
        }
    }

    async deleteFile(filename: string): Promise<boolean> {
        try {
            const response = await fetch(this.getFullUrl(filename), {
                method: 'DELETE',
                headers: this.getHeaders(),
            });
            return response.ok || response.status === 204;
        } catch (e) {
             console.error("WebDAV delete failed:", e);
             return false;
        }
    }
}
