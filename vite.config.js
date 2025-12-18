import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Dùng khi dev local
  server: {
    host: true,        // cho phép truy cập từ mạng
    port: 3000,
    open: true
  },

  // Dùng khi deploy Render (vite preview)
  preview: {
    host: true,        // bắt buộc để Render bind 0.0.0.0
    port: 10000,       // Render mặc định
    allowedHosts: [
      'the-crown-restaurant.onrender.com'
    ]
  }
})
