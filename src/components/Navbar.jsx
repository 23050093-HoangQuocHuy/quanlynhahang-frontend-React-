import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isNavActive, setIsNavActive] = useState(false)
  const [isHeaderActive, setIsHeaderActive] = useState(false)
  const [isHeaderHidden, setIsHeaderHidden] = useState(false)
  const location = useLocation()

  const toggleNavbar = () => {
    setIsNavActive(prev => !prev)
    document.body.classList.toggle('nav-active')
  }

  useEffect(() => {
    let lastScrollPos = 0

    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll >= 50) {
        setIsHeaderActive(true)
        const isScrollBottom = lastScrollPos < currentScroll
        setIsHeaderHidden(isScrollBottom)
      } else {
        setIsHeaderActive(false)
        setIsHeaderHidden(false)
      }

      lastScrollPos = currentScroll
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavLinkClick = () => {
    if (isNavActive) {
      setIsNavActive(false)
      document.body.classList.remove('nav-active')
    }
  }

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <>
      <header className={`header ${isHeaderActive ? 'active' : ''} ${isHeaderHidden ? 'hide' : ''}`} data-header>
        <div className="container">
          <Link to="/" className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span style={{ fontFamily: "'Forum', cursive", fontSize: '2.5rem', fontWeight: 700, color: '#D4AF37', letterSpacing: '2px' }}>
              THE CROWN
            </span>
          </Link>

          <nav className={`navbar ${isNavActive ? 'active' : ''}`} data-navbar>
            <button className="close-btn" aria-label="Đóng menu" data-nav-toggler onClick={toggleNavbar}>
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>

            <ul className="navbar-list">
              <li className="navbar-item">
                <Link to="/" className={`navbar-link hover-underline ${isActive('/') ? 'active' : ''}`} onClick={handleNavLinkClick}>
                  <div className="separator"></div>
                  <span className="span">Trang chủ</span>
                </Link>
              </li>

              <li className="navbar-item">
                <Link to="/menu" className={`navbar-link hover-underline ${isActive('/menu') ? 'active' : ''}`} onClick={handleNavLinkClick}>
                  <div className="separator"></div>
                  <span className="span">Thực đơn</span>
                </Link>
              </li>

              <li className="navbar-item">
                <Link 
                  to="/#about" 
                  className="navbar-link hover-underline" 
                  onClick={(e) => {
                    handleNavLinkClick()
                    if (location.pathname !== '/') {
                      e.preventDefault()
                      window.location.href = '/#about'
                    } else {
                      e.preventDefault()
                      const aboutSection = document.getElementById('about')
                      if (aboutSection) {
                        aboutSection.scrollIntoView({ behavior: 'smooth' })
                      }
                    }
                  }}
                >
                  <div className="separator"></div>
                  <span className="span">Về chúng tôi</span>
                </Link>
              </li>

              <li className="navbar-item">
                <Link to="/chef" className={`navbar-link hover-underline ${isActive('/chef') ? 'active' : ''}`} onClick={handleNavLinkClick}>
                  <div className="separator"></div>
                  <span className="span">Đầu bếp</span>
                </Link>
              </li>
            </ul>

            <div className="text-center">
              <p className="headline-1 navbar-title">Ghé thăm</p>

              <address className="body-4">
                125 Nguyễn Huệ, Quận 1<br />
                TP. Hồ Chí Minh<br />
                Việt Nam
              </address>

              <p className="body-4 navbar-text">Mở cửa: 8:00 - 22:00</p>

              <a href="mailto:booking@thecrown.com" className="body-4 sidebar-link" aria-label="Gửi email đến booking@thecrown.com">booking@thecrown.com</a>

              <div className="separator" aria-hidden="true"></div>

              <p className="contact-label">Đặt bàn</p>

              <a href="tel:+842828282828" className="body-1 contact-number hover-underline" aria-label="Gọi điện đặt bàn">
                028 2828 2828
              </a>
            </div>
          </nav>

          <Link to="/booking" className="btn btn-secondary" aria-label="Đặt bàn">
            <span className="text text-1">Đặt bàn</span>
            <span className="text text-2" aria-hidden="true">Đặt bàn</span>
          </Link>

          <button className="nav-open-btn" aria-label="Mở menu" data-nav-toggler onClick={toggleNavbar}>
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </button>

          <div className={`overlay ${isNavActive ? 'active' : ''}`} data-nav-toggler data-overlay onClick={toggleNavbar}></div>
        </div>
      </header>
    </>
  )
}

export default Navbar

