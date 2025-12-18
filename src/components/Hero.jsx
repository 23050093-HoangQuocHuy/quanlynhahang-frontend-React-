import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=1880&h=950&fit=crop&q=80',
    subtitle: 'Tinh hoa & Ẩm thực',
    title: 'Thịt bò Wagyu\nthượng hạng',
    text: 'Hãy đến với chúng tôi và cảm nhận những món ăn ngon miệng',
    darkImg: true
  },
  {
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1880&h=950&fit=crop&q=80',
    subtitle: 'Trải nghiệm thú vị',
    title: 'Hương vị lấy cảm hứng từ\nkhắp nơi trên thế giới',
    text: 'Hãy đến với chúng tôi và cảm nhận những món ăn ngon miệng',
    darkImg: true
  },
  {
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1880&h=950&fit=crop&q=80',
    subtitle: 'Tuyệt vời & Ngon',
    title: 'Nơi mà mọi hương vị\nđều có thể tìm thấy',
    text: 'Hãy đến với chúng tôi và cảm nhận những món ăn ngon miệng',
    darkImg: false
  }
]

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const autoSlideIntervalRef = useRef(null)

  const slideNext = () => {
    setCurrentSlide((prev) => (prev >= slides.length - 1 ? 0 : prev + 1))
  }

  const slidePrev = () => {
    setCurrentSlide((prev) => (prev <= 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    // Auto slide
    autoSlideIntervalRef.current = setInterval(() => {
      slideNext()
    }, 7000)

    return () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current)
      }
    }
  }, [])

  const handlePrevClick = () => {
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current)
    }
    slidePrev()
    autoSlideIntervalRef.current = setInterval(() => {
      slideNext()
    }, 7000)
  }

  const handleNextClick = () => {
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current)
    }
    slideNext()
    autoSlideIntervalRef.current = setInterval(() => {
      slideNext()
    }, 7000)
  }

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu')
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero text-center" aria-label="home" id="home">
      <ul className="hero-slider" data-hero-slider>
        {slides.map((slide, index) => (
          <li
            key={index}
            className={`slider-item ${index === currentSlide ? 'active' : ''}`}
            data-hero-slider-item
          >
            <div className="slider-bg">
              <img
                src={slide.image}
                width="1880"
                height="950"
                alt={slide.subtitle}
                className={`${slide.darkImg ? 'dark-img ' : ''}img-cover`}
              />
            </div>

            <p className="label-2 section-subtitle slider-reveal">{slide.subtitle}</p>

            <h1 className="display-1 hero-title slider-reveal">
              {slide.title.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < slide.title.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h1>

            <p className="body-2 hero-text slider-reveal">{slide.text}</p>

            <a href="#menu" className="btn btn-primary slider-reveal" onClick={(e) => {
              e.preventDefault()
              scrollToMenu()
            }} aria-label="Xem thực đơn">
              <span className="text text-1">Xem thực đơn</span>
              <span className="text text-2" aria-hidden="true">Xem thực đơn</span>
            </a>
          </li>
        ))}
      </ul>

      <button
        className="slider-btn prev"
        aria-label="Slide trước"
        data-prev-btn
        onClick={handlePrevClick}
      >
        <ion-icon name="chevron-back"></ion-icon>
      </button>

      <button
        className="slider-btn next"
        aria-label="Slide tiếp theo"
        data-next-btn
        onClick={handleNextClick}
      >
        <ion-icon name="chevron-forward"></ion-icon>
      </button>

      <Link to="/booking" className="hero-btn has-after" aria-label="Đặt bàn ngay">
        <ion-icon name="calendar-outline" aria-hidden="true" style={{ fontSize: '48px', color: '#000', marginBottom: '6px' }}></ion-icon>
        <span className="label-2 text-center span">Đặt bàn ngay</span>
      </Link>
    </section>
  )
}

export default Hero

