import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import CaseStudies from '../components/CaseStudies'
import Contact from '../components/Contact'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Bienvenido a ULTIMA MILLA</h2>
        <p className="mb-8 text-center text-lg">
          Somos expertos en transformar negocios a través de soluciones tecnológicas innovadoras.
          Descubre cómo podemos ayudarte a alcanzar tus objetivos.
        </p>
        
        <section id="servicios" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Servicios</h2>
          <Services limit={3} />
          <div className="text-center mt-8">
            <Link to="/servicios" className="bg-red-600 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
              Ver todos los servicios
            </Link>
          </div>
        </section>

        <section id="casos-exito" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Casos de Éxito</h2>
          <CaseStudies limit={3} />
          <div className="text-center mt-8">
            <Link to="/casos-de-exito" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
              Ver todos los casos de éxito
            </Link>
          </div>
        </section>

        <section id="contacto">
          <h2 className="text-3xl font-bold mb-8 text-center">Contáctanos</h2>
          <Contact />
        </section>
      </div>
    </div>
  )
}

export default Home