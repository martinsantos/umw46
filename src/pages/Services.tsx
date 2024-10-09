import React from 'react'
import Services from '../components/Services'

const ServicesPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Nuestros Servicios</h1>
      <Services />
    </div>
  )
}

export default ServicesPage