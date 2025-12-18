import { useEffect, useState } from 'react'

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <a 
      href="#top" 
      className={`back-top-btn ${isVisible ? 'active' : ''}`} 
      aria-label="Về đầu trang" 
      data-back-top-btn
      onClick={(e) => {
        e.preventDefault()
        scrollToTop()
      }}
    >
      <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
    </a>
  )
}

export default BackToTop

