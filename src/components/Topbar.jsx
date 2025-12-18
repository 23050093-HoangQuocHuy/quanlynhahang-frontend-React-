import { useEffect, useState } from 'react'

function Topbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`topbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <address className="topbar-item">
          <div className="icon">
            <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
          </div>
          <span className="span">
            125 Nguyễn Huệ, Quận 1<br />TP. Hồ Chí Minh
          </span>
        </address>

        <div className="separator" aria-hidden="true"></div>

        <div className="topbar-item item-2">
          <div className="icon">
            <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
          </div>
          <span className="span">Mở cửa: 8:00 - 22:00</span>
        </div>

        <a href="tel:+842828282828" className="topbar-item link" aria-label="Gọi điện đặt bàn">
          <div className="icon">
            <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
          </div>
          <span className="span">028 2828 2828</span>
        </a>

        <div className="separator" aria-hidden="true"></div>

        <a href="mailto:booking@thecrown.com" className="topbar-item link" aria-label="Gửi email đến booking@thecrown.com">
          <div className="icon">
            <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
          </div>
          <span className="span">booking@thecrown.com</span>
        </a>
      </div>
    </div>
  )
}

export default Topbar

