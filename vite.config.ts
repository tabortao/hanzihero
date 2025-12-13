
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Increase the chunk size limit to avoid warnings for the large dictionary
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'lucide-react', 'uuid', 'canvas-confetti'],
          'genai': ['@google/genai'],
          // Split the large dictionary data into a separate chunk
          'dictionary': [
            './data/dictionary/chunk01.ts',
            './data/dictionary/chunk02.ts',
            './data/dictionary/chunk03.ts',
            './data/dictionary/index.tsx'
          ]
        }
      }
    }
  }
});
