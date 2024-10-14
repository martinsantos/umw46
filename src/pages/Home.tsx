import React, { useState, useEffect } from 'react';

const Home: React.FC = () => {
  // Efecto de escribir texto dinámico en el banner principal
  const [dynamicText, setDynamicText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const textArray = [
    'ULTIMA MILLA@root:~$ run test',
    'Transformamos tu negocio.',
    'Tecnología que puedes pagar.',
  ];

  // Estado para la imagen de fondo aleatoria
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    // Función para manejar el efecto de escritura
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

  useEffect(() => {
    // Lista de imágenes disponibles en la carpeta public
    const images = [
      '/1.webp',
      '/2.webp',
      '/3.webp',
      '/4.webp',
      '/5.webp',
      '/6.webp',
      '/7.webp',
      '/8.webp',
      '/9.webp',
    ];
    // Seleccionar una imagen aleatoria
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setBackgroundImage(randomImage);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Espaciador para compensar el header fijo */}
      {/* <div className="h-20"></div>*/}

      {/* Banner Principal con Efecto de Escritura y Fondo Aleatorio */}
      <section
        className="hero min-h-screen flex items-center justify-center text-center text-white relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay para mejorar la legibilidad del texto */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="hero-content container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold overflow-hidden whitespace-nowrap border-r-4 border-red-500 inline-block mb-4 animate-typing">
            {dynamicText}
          </h1>
          <p className="text-2xl mt-4">
            Transformamos tu negocio con tecnología que puedes pagar.
          </p>
          <a
            href="#contacto"
            className="mt-8 inline-block bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Contáctanos
          </a>
        </div>
      </section>

      {/* Sección Servicios */}
      <section id="servicios" className="services py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="service-item bg-gray-100 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="service-icon text-6xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Ciberseguridad
              </h3>
              <p>
                Protegemos tu negocio contra amenazas cibernéticas con soluciones avanzadas de seguridad.
              </p>
            </div>
            <div className="service-item bg-gray-100 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="service-icon text-6xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Cloud Computing
              </h3>
              <p>
                Optimiza tus operaciones con nuestras soluciones de nube escalables y flexibles.
              </p>
            </div>
            <div className="service-item bg-gray-100 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="service-icon text-6xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Análisis de Datos
              </h3>
              <p>
                Obtén insights valiosos de tus datos con nuestras soluciones de análisis avanzado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Casos de Éxito */}
      <section id="casos" className="cases py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">
            Casos de Éxito
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="case-study bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors relative overflow-hidden">
              {/* Línea vertical animada */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-red-500 transition-all duration-500 hover:h-full"></div>
              <h3 className="text-2xl font-bold text-red-500 mb-4">
                FinanzasTech
              </h3>
              <p>
                Implementamos un sistema de seguridad avanzado para el Banco XYZ, reduciendo los
                incidentes de ciberseguridad en un 95%.
              </p>
              <a
                href="#"
                className="mt-4 inline-block bg-transparent border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-gray-800 transition-colors"
              >
                Ver Detalles
              </a>
            </div>
            <div className="case-study bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors relative overflow-hidden">
              {/* Línea vertical animada */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-red-500 transition-all duration-500 hover:h-full"></div>
              <h3 className="text-2xl font-bold text-red-500 mb-4">
                EcommerceTech
              </h3>
              <p>
                Nuestra solución de cloud computing permitió a la tienda online ABC escalar sus operaciones durante el Black Friday, manejando un aumento del 500% en el tráfico.
              </p>
              <a
                href="#"
                className="mt-4 inline-block bg-transparent border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-gray-800 transition-colors"
              >
                Ver Detalles
              </a>
            </div>
            <div className="case-study bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors relative overflow-hidden">
              {/* Línea vertical animada */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-red-500 transition-all duration-500 hover:h-full"></div>
              <h3 className="text-2xl font-bold text-red-500 mb-4">
                LogisticaTech
              </h3>
              <p>
                El análisis de datos implementado para la empresa de logística DEF optimizó las rutas de entrega, aumentando la eficiencia en un 30%.
              </p>
              <a
                href="#"
                className="mt-4 inline-block bg-transparent border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-gray-800 transition-colors"
              >
                Ver Detalles
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="contact py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Contáctanos</h2>
          <form className="max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Nombre"
              required
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Mensaje"
              required
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg h-40"
            ></textarea>
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition duration-300"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p>
            &copy; 2024 ULTIMA MILLA Servicios de TI. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
