import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        roadmap: resolve(__dirname, 'roadmap.html'),
        bridge: resolve(__dirname, 'bridge.html'),
      }
    }
  }
})