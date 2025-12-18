import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Dev local
  server: {
    host: true,
    port: 3000,
    open: true
  },

  // Render (vite preview)
  preview: {
    host: true,
    port: 10000,
    allowedHosts: [
      'the-crown-restaurant.onrender.com'
    ]
  }
})
