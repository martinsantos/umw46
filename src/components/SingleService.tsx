import { ArrowLeft, Shield, Cloud, BarChart, Code, Smartphone, Database } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import React from 'react';

const serviceIcons: Record<string, React.ElementType> = {
  'Ciberseguridad': Shield,
  'Cloud Computing': Cloud,
  'Análisis de Datos': BarChart,
  'Desarrollo de Software': Code,
  'Desarrollo de Aplicaciones Móviles': Smartphone,
  'Gestión de Bases de Datos': Database,
};

const serviceData = [
  {
    id: 1,
    name: 'Ciberseguridad',
    description: 'Protegemos tu negocio contra amenazas cibernéticas con soluciones avanzadas de seguridad.',
    details: [
      'Evaluación de vulnerabilidades',
      'Implementación de firewalls de última generación',
      'Monitoreo continuo de amenazas',
      'Respuesta a incidentes de seguridad',
      'Capacitación en seguridad para empleados',
    ],
    benefits: [
      'Protección integral de datos sensibles',
      'Reducción del riesgo de brechas de seguridad',
      'Cumplimiento de normativas de seguridad',
      'Mejora de la confianza de clientes y socios',
    ],
  },
  {
    id: 2,
    name: 'Cloud Computing',
    description: 'Optimiza tus operaciones con nuestras soluciones de nube escalables y flexibles.',
    details: [
      'Infraestructura escalable',
      'Gestión y soporte continuo',
      'Optimización de costos en la nube',
      'Alta disponibilidad y recuperación ante desastres',
    ],
    benefits: [
      'Reducción de costos operativos',
      'Escalabilidad sin límites',
      'Disponibilidad garantizada',
      'Seguridad mejorada para aplicaciones en la nube',
    ],
  },
  // Agrega más servicios según sea necesario...
];

const SingleService: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = serviceData.find((service) => service.id === parseInt(id || '', 10));

  if (!service) {
    return <p>Servicio no encontrado.</p>;
  }

  const Icon = serviceIcons[service.name];

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
        <Link to="/servicios" className="inline-flex items-center text-gray-600 hover:text-red-500 mb-4">
          <ArrowLeft className="mr-2" size={20} />
          Volver a Servicios
        </Link>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center mb-4">
              {Icon && <Icon className="text-red-500 mr-4" size={48} />}
              <h1 className="text-3xl font-bold text-gray-800">{service.name}</h1>
            </div>
            <p className="text-xl text-gray-600 mb-6">{service.description}</p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Características del Servicio</h2>
            <ul className="list-disc list-inside mb-6">
              {service.details.map((detail, index) => (
                <li key={index} className="text-gray-600 mb-2">{detail}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Beneficios</h2>
            <ul className="list-disc list-inside mb-6">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="text-gray-600 mb-2">{benefit}</li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                to="/contacto"
                className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition duration-300"
              >
                Solicitar Información
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SingleService;