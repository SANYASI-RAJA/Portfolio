import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Sanyasi-s-Portfolio/",
  plugins: [react()],
  build: {
    sourcemap: true, // Enable CSS source maps
  },
})
