import { useState, useEffect } from 'react'

// Import your three images from assets/new folder
import img1 from '../assets/hero/hero1.jpeg'
import img2 from '../assets/hero/hero2.jpeg'
import img3 from '../assets/hero/hero3.jpeg'

const Hero = () => {
  const images = [img1, img2, img3]
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // 5000ms = 5 seconds

    return () => clearInterval(interval) // cleanup on unmount
  }, [images.length])

  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* Hero Right Side (Carousel) */}
      <div className="w-full sm:w-1/2 relative flex items-center justify-center">
        <img
          className="w-full h-full object-cover transition-all duration-700 ease-in-out"
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
        />

        {/* Dots indicator */}
        <div className="absolute bottom-4 flex gap-2">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === currentIndex ? 'bg-[#414141]' : 'bg-gray-300'
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
