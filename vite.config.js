import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Dev local (giữ nguyên)
  server: {
    port: 3000,
    open: true
  },

  // Dùng cho Render (vite preview)
  preview: {
    host: true,
    port: 10000,
    allowedHosts: [
      'quanlynhahang-frontend-react.onrender.com'
    ]
  }
})
