import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.', // ✅ tell Vite to use project root
  plugins: [react()], // ✅ for assets like favicon, etc.
  build: {
    outDir: 'dist',
  },
  base: './', // ✅ ensures relative paths work
});
