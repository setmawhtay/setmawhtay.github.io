import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/',
  plugins: [vue()],
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173,
    open: false,
  },
})
