import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-gray-900 text-white fixed w-full z-10">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-red-500">ultima</span>
          <span className="text-blue-500">milla</span>
          <span className="text-red-500">.com.ar</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/nosotros" className="hover:text-red-500 transition-colors">Nosotros</Link>
          <Link to="/servicios" className="hover:text-red-500 transition-colors">Servicios</Link>
          <Link to="/casos-de-exito" className="hover:text-red-500 transition-colors">Casos de Éxito</Link>
          <Link to="/contacto" className="hover:text-red-500 transition-colors">Contacto</Link>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 py-2">
          <Link to="/nosotros" className="block py-2 px-4 hover:bg-gray-700" onClick={toggleMenu}>Nosotros</Link>
          <Link to="/servicios" className="block py-2 px-4 hover:bg-gray-700" onClick={toggleMenu}>Servicios</Link>
          <Link to="/casos-de-exito" className="block py-2 px-4 hover:bg-gray-700" onClick={toggleMenu}>Casos de Éxito</Link>
          <Link to="/contacto" className="block py-2 px-4 hover:bg-gray-700" onClick={toggleMenu}>Contacto</Link>
        </div>
      )}
    </header>
  )
}

export default Header