import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} ULTIMA MILLA Servicios de TI. Todos los derechos reservados.</p>
        <div className="mt-4">
          <a href="#" className="text-gray-400 hover:text-white mx-2">Política de Privacidad</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Términos de Servicio</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer