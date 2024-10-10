import React from 'react';
import { ArrowLeft, BarChart, Cloud, Truck } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const caseIcons: Record<string, React.ElementType> = {
  'FinanzasTech': BarChart,
  'EcommerceTech': Cloud,
  'LogisticaTech': Truck,
};

const caseStudiesData = [
  {
    id: '1',
    category: 'FinanzasTech',
    title: 'Seguridad Bancaria Reforzada',
    client: 'Banco XYZ',
    description: 'Implementamos un sistema de seguridad avanzado para el Banco XYZ, incluyendo autenticación multifactor, encriptación de datos y monitoreo en tiempo real.',
    challenge: 'El Banco XYZ enfrentaba un aumento en los intentos de ciberataques y necesitaba fortalecer su infraestructura de seguridad para proteger los datos sensibles de sus clientes.',
    solution: [
      'Implementación de autenticación multifactor para todos los usuarios',
      'Encriptación de datos end-to-end para todas las transacciones',
      'Sistema de monitoreo en tiempo real con alertas instantáneas',
      'Capacitación exhaustiva del personal en prácticas de ciberseguridad',
    ],
    result: 'Reducción de incidentes de ciberseguridad en un 95% y aumento de la confianza de los clientes.',
    metrics: [
      { label: 'Reducción de incidentes', value: '95%' },
      { label: 'Aumento en la satisfacción del cliente', value: '30%' },
      { label: 'Tiempo de respuesta a amenazas', value: '< 5 minutos' },
    ],
    testimonial: {
      quote: "La solución de UltimaMilla ha transformado nuestra seguridad bancaria. Ahora podemos ofrecer a nuestros clientes una protección sin precedentes.",
      author: "María González",
      position: "CIO, Banco XYZ",
    },
  },
  // Agrega más estudios de caso según sea necesario...
];

const SingleCase: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = caseStudiesData.find((study) => study.id === id);

  if (!caseStudy) {
    return <p>Estudio de caso no encontrado.</p>;
  }

  const Icon = caseIcons[caseStudy.category];

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
        <Link to="/casos-de-exito" className="inline-flex items-center text-gray-600 hover:text-red-500 mb-4">
          <ArrowLeft className="mr-2" size={20} />
          Volver a Casos de Éxito
        </Link>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center mb-4">
              {Icon && <Icon className="text-red-500 mr-4" size={48} />}
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{caseStudy.title}</h1>
                <p className="text-xl text-gray-600">{caseStudy.client}</p>
              </div>
            </div>

            <p className="text-xl text-gray-600 mb-6">{caseStudy.description}</p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">El Desafío</h2>
            <p className="text-gray-600 mb-6">{caseStudy.challenge}</p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nuestra Solución</h2>
            <ul className="list-disc list-inside mb-6">
              {caseStudy.solution.map((item, index) => (
                <li key={index} className="text-gray-600 mb-2">{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Resultados</h2>
            <p className="text-gray-600 mb-6">{caseStudy.result}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {caseStudy.metrics.map((metric, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-red-500">{metric.value}</p>
                  <p className="text-gray-600">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <p className="text-xl italic text-gray-600 mb-4">"{caseStudy.testimonial.quote}"</p>
              <p className="font-semibold">{caseStudy.testimonial.author}</p>
              <p className="text-gray-500">{caseStudy.testimonial.position}</p>
            </div>

            <div className="mt-8">
              <Link
                to="/contacto"
                className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition duration-300"
              >
                Consultar sobre este servicio
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SingleCase;

