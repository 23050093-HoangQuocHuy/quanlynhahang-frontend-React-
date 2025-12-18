import { useRef } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const formRef = useRef(null)

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    const emailInput = formRef.current?.querySelector('input[name="email_address"]')
    const email = emailInput?.value.trim() || ''

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!email) {
      alert('Vui lòng nhập địa chỉ email!')
      return
    }

    if (!emailPattern.test(email)) {
      alert('Địa chỉ email không hợp lệ!')
      return
    }

    console.log('=== ĐĂNG KÝ NEWSLETTER ===')
    console.log('Email:', email)
    console.log('=========================')

    alert('Đăng ký nhận tin thành công! Bạn sẽ nhận được ưu đãi 25% trong email.')
    formRef.current?.reset()
  }

  const handlePlaceholderClick = (e, type) => {
    e.preventDefault()
    const messages = {
      social: 'Chức năng mạng xã hội đang được phát triển. Vui lòng quay lại sau!',
      chef: 'Tính năng này đang được phát triển. Vui lòng quay lại sau!'
    }
    alert(messages[type] || 'Tính năng này đang được phát triển. Vui lòng quay lại sau!')
  }

  return (
    <footer 
      className="footer section has-bg-image text-center" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop&q=80')" }}
    >
      <div className="container">
        <div className="footer-top grid-list">
          <div className="footer-brand has-before has-after">
            <Link to="/" className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span style={{ fontFamily: "'Forum', cursive", fontSize: '2.5rem', fontWeight: 700, color: '#D4AF37', letterSpacing: '2px' }}>
                THE CROWN
              </span>
            </Link>

            <address className="body-4">
              125 Nguyễn Huệ, Quận 1<br />
              TP. Hồ Chí Minh, Việt Nam
            </address>

            <a href="mailto:booking@thecrown.com" className="body-4 contact-link" aria-label="Gửi email đến booking@thecrown.com">
              booking@thecrown.com
            </a>

            <p className="body-4">
              Mở cửa: 09:00 - 15:00 & 17:00 - 22:00
            </p>

            <div className="wrapper" aria-hidden="true">
              <div className="separator"></div>
              <div className="separator"></div>
              <div className="separator"></div>
            </div>

            <p className="title-1">Nhận tin tức và ưu đãi</p>

            <p className="label-1">
              Đăng ký & Nhận <span className="span">25% Giảm giá.</span>
            </p>

            <form ref={formRef} action="" className="input-wrapper" id="newsletterForm" onSubmit={handleNewsletterSubmit}>
              <div className="icon-wrapper">
                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
                <input type="email" name="email_address" placeholder="Email của bạn" autoComplete="off" className="input-field" required />
              </div>

              <button type="submit" className="btn btn-secondary" aria-label="Đăng ký nhận tin">
                <span className="text text-1">Đăng ký</span>
                <span className="text text-2" aria-hidden="true">Đăng ký</span>
              </button>
            </form>
          </div>

          <ul className="footer-list">
            <li>
              <Link to="/" className="label-2 footer-link hover-underline">Trang chủ</Link>
            </li>
            <li>
              <Link to="/menu" className="label-2 footer-link hover-underline">Thực đơn</Link>
            </li>
            <li>
              <Link 
                to="/#about" 
                className="label-2 footer-link hover-underline"
                onClick={(e) => {
                  if (window.location.pathname !== '/') {
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
                Về chúng tôi
              </Link>
            </li>
            <li>
              <Link to="/chef" className="label-2 footer-link hover-underline">Đầu bếp</Link>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <a href="#" className="label-2 footer-link hover-underline" onClick={(e) => handlePlaceholderClick(e, 'social')}>Facebook</a>
            </li>
            <li>
              <a href="#" className="label-2 footer-link hover-underline" onClick={(e) => handlePlaceholderClick(e, 'social')}>Instagram</a>
            </li>
            <li>
              <a href="#" className="label-2 footer-link hover-underline" onClick={(e) => handlePlaceholderClick(e, 'social')}>Twitter</a>
            </li>
            <li>
              <a href="#" className="label-2 footer-link hover-underline" onClick={(e) => handlePlaceholderClick(e, 'social')}>Youtube</a>
            </li>
            <li>
              <a href="#" className="label-2 footer-link hover-underline" onClick={(e) => handlePlaceholderClick(e, 'social')}>Google Map</a>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2025 THE CROWN RESTAURANT. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

