import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  define: {
    global: 'window',
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
