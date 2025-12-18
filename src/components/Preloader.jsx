import { useEffect, useState } from 'react'

function Preloader() {
  const [loaded, setLoaded] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const handleLoad = () => {
      // Start fade out animation
      setFadeOut(true)
      // After fade animation completes, mark as loaded
      setTimeout(() => {
        setLoaded(true)
        document.body.classList.add('loaded')
      }, 700) // Match CSS transition duration (--transition-3)
    }

    // Check if already loaded
    if (document.readyState === 'complete') {
      // Add minimum display time for better UX
      setTimeout(handleLoad, 800)
    } else {
      // Wait for load event with minimum display time
      const minDisplayTime = setTimeout(() => {
        if (document.readyState === 'complete') {
          handleLoad()
        } else {
          window.addEventListener('load', handleLoad, { once: true })
        }
      }, 800)

      window.addEventListener('load', handleLoad, { once: true })
      
      return () => {
        clearTimeout(minDisplayTime)
        window.removeEventListener('load', handleLoad)
      }
    }
  }, [])

  // Prevent flash of white screen
  useEffect(() => {
    if (!loaded) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [loaded])

  return (
    <div className={`preload ${fadeOut ? 'fade-out' : ''} ${loaded ? 'loaded' : ''}`} data-preaload>
      <div className="circle"></div>
      <p className="text">THE CROWN RESTAURANT</p>
    </div>
  )
}

export default Preloader

