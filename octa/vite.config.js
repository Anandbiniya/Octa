import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // Enable CSS Modules for your styles
      localIdentName: '[name]-[local]-[hash:base64:5]',
    },
  },
})
// vite.config.js

