import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import CaseStudies from '../components/CaseStudies'
import Contact from '../components/Contact'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  const [dynamicText, setDynamicText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const textArray = [
    'ULTIMA MILLA@root:~$ run test',
    'Transformamos tu negocio.',
    'Tecnología que puedes pagar.',
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentText = textArray[currentIndex % textArray.length];
      if (!isDeleting) {
        setDynamicText(currentText.substring(0, dynamicText.length + 1));
        if (dynamicText === currentText) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDynamicText(currentText.substring(0, dynamicText.length - 1));
        if (dynamicText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 150);
    return () => clearTimeout(timer);
  }, [dynamicText, isDeleting, currentIndex, textArray]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-red-500">
            ultimamilla<span className="text-white">.com.ar</span>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/nosotros" className="hover:text-red-500">Nosotros</Link></li>
              <li><Link to="/servicios" className="hover:text-red-500">Servicios</Link></li>
              <li><Link to="/casos-de-exito" className="hover:text-red-500">Casos de Éxito</Link></li>
              <li><Link to="/contacto" className="hover:text-red-500">Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto mt-8 p-4">
        <section className="hero min-h-screen flex items-center justify-center text-center bg-dark-color text-light-color">
          <div className="hero-content">
            <h1 className="text-4xl font-bold overflow-hidden whitespace-nowrap border-r-2 border-primary-color animate-typing">
              {dynamicText}
            </h1>
            <p className="text-xl mt-4 opacity-0 animate-fadeIn delay-1000">
              Transformamos tu negocio con tecnología que puedes pagar.
            </p>
            <Link to="/contacto" className="btn mt-6 bg-primary-color text-light-color px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 opacity-0 animate-slideUp delay-1500">
              Contáctanos
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
