import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: 'tslib',
        replacement: 'node_modules/tslib/tslib.es6.js',
      },
    ]
  }
})
