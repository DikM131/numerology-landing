import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // base: './', // раскомментировать только для продакшн-сборки в подпапку
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
});
