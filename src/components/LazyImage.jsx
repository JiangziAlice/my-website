import { useState, useRef, useEffect } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const LazyImage = ({ src, alt, className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isZoomed, setIsZoomed] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '50px' }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setIsError(true)
    setIsLoaded(true)
  }

  const handleZoom = () => {
    setIsZoomed(true)
  }

  const handleCloseZoom = () => {
    setIsZoomed(false)
  }

  return (
    <>
      <div ref={imgRef} className={`${className} cursor-pointer`} onClick={handleZoom}>
        {!isLoaded && (
          <div className="aspect-square bg-gray-700 animate-pulse rounded-lg" />
        )}
        
        {shouldLoad && (
          <img
            src={src}
            alt={alt}
            className={`w-full aspect-square object-cover rounded-lg transition-transform duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} hover:scale-[1.02]`}
            onLoad={handleLoad}
            onError={handleError}
          />
        )}
        
        {!shouldLoad && (
          <div className="aspect-square bg-gray-700 rounded-lg" />
        )}
      </div>

      {/* Zoom modal - using yet-another-react-lightbox for zero flicker */}
      <Lightbox
        open={isZoomed}
        close={handleCloseZoom}
        slides={[{ src, alt }]}
        styles={{ 
          container: { 
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            cursor: 'pointer'
          }
        }}
        render={{ 
          buttonPrev: () => null,
          buttonNext: () => null
        }}
        controller={{ closeOnBackdropClick: true }}
      />
    </>
  )
}

export default LazyImage