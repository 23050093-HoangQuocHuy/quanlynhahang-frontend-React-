# THE CROWN RESTAURANT - React Website

Website nhà hàng cao cấp được xây dựng bằng React.js với Vite.

## 🚀 Cài đặt và Chạy

### Yêu cầu
- Node.js (v16 trở lên)
- npm hoặc yarn

### Cài đặt dependencies

```bash
npm install
```

### Chạy development server

```bash
npm run dev
```

Website sẽ chạy tại: `http://localhost:3000`

### Build cho production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## 📁 Cấu trúc Project

```
src/
├── components/          # React Components
│   ├── Preloader.jsx
│   ├── Topbar.jsx
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Footer.jsx
│   ├── BackToTop.jsx
│   └── ServiceSection.jsx
├── pages/              # React Pages
│   ├── Home.jsx
│   ├── Menu.jsx
│   ├── Booking.jsx
│   └── Chef.jsx
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── menu-page.css
│   └── js/            # JS files gốc (đã chuyển sang React hooks)
├── App.jsx            # Main App component với Router
└── main.jsx           # Entry point
```

## 🛣️ Routes

- `/` - Trang chủ
- `/menu` - Thực đơn
- `/booking` - Đặt bàn
- `/chef` - Đầu bếp

## ✨ Tính năng

- ✅ Responsive design (Mobile, Tablet, Desktop)
- ✅ Hero slider với auto-play
- ✅ Smooth scroll navigation
- ✅ Preloader animation
- ✅ Form validation
- ✅ Modal notifications
- ✅ Parallax effects
- ✅ Soft-gold glow effects
- ✅ React Router SPA navigation

## 🎨 Màu sắc chủ đạo

- Đen: `#000000`
- Gold: `#D4AF37`
- Trắng: `#FFFFFF`

## 📝 Lưu ý

- Tất cả ảnh sử dụng CDN Unsplash
- API endpoints cần được cấu hình trong các components (Menu, Booking)
- CSS được giữ nguyên 100% từ bản HTML gốc

## 🔧 Công nghệ sử dụng

- React 18
- Vite
- React Router DOM
- Ionicons
- Google Fonts (DM Sans, Forum)

