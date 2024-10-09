import React, { useState, useEffect } from 'react'

const ultraWideImages = [
  'https://source.unsplash.com/random/2560x1080/?technology',
  'https://source.unsplash.com/random/2560x1080/?innovation',
  'https://source.unsplash.com/random/2560x1080/?future',
  'https://source.unsplash.com/random/2560x1080/?digital',
  'https://source.unsplash.com/random/2560x1080/?network'
]

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ultraWideImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="h-screen flex items-center justify-center text-white bg-cover bg-center transition-all duration-1000 ease-in-out" style={{backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.7), rgba(26, 26, 26, 0.7)), url("${ultraWideImages[currentImageIndex]}")`}}>
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Innovación IT</h1>
        <p className="text-xl md:text-2xl mb-8">Transformamos tu negocio con tecnología de vanguardia</p>
        <a href="#contacto" className="bg-red-600 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">Contáctanos</a>
      </div>
    </section>
  )
}

export default Hero