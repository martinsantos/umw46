import React from 'react'

const About: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Sobre Nosotros</h1>
        <div className="prose prose-lg mx-auto">
          <p className="text-gray-800 leading-relaxed">
            En ULTIMA MILLA, somos pioneros en la transformación digital de empresas. Nuestra misión es proporcionar soluciones tecnológicas innovadoras que impulsen el crecimiento y la eficiencia de nuestros clientes.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Fundada en 2010, nuestra empresa ha crecido hasta convertirse en un referente en el sector de servicios IT. Contamos con un equipo de expertos apasionados por la tecnología y comprometidos con la excelencia.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Nuestra Visión</h2>
          <p className="text-gray-800 leading-relaxed">
            Aspiramos a ser líderes globales en la provisión de soluciones tecnológicas, reconocidos por nuestra innovación, calidad y compromiso con el éxito de nuestros clientes.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Nuestros Valores</h2>
          <ul className="text-gray-800 leading-relaxed">
            <li>Innovación constante</li>
            <li>Excelencia en el servicio</li>
            <li>Integridad y transparencia</li>
            <li>Colaboración y trabajo en equipo</li>
            <li>Responsabilidad social y ambiental</li>
          </ul>
          <p className="text-gray-800 leading-relaxed">
            En ULTIMA MILLA, no solo ofrecemos servicios IT; creamos asociaciones duraderas con nuestros clientes, ayudándoles a navegar en el cambiante mundo digital y a alcanzar sus objetivos de negocio.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About