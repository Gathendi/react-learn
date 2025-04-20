// Import Vite configuration utilities
import { defineConfig } from 'vite'
// Import React plugin for Vite
import react from '@vitejs/plugin-react'

// Vite configuration
// See: https://vite.dev/config/
export default defineConfig({
  // Configure plugins - React is the main plugin
  plugins: [react()],
})
