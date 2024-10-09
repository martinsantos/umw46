import React from 'react'
import { Shield, Cloud, BarChart, Code, Smartphone, Database } from 'lucide-react'

const ServiceItem: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
    <div className="text-4xl text-red-500 mb-4">{icon}</div>
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <p>{description}</p>
  </div>
)

const Services: React.FC<{ limit?: number }> = ({ limit }) => {
  const services = [
    {
      icon: <Shield />,
      title: "Ciberseguridad",
      description: "Protegemos tu negocio contra amenazas cibernéticas con soluciones avanzadas de seguridad."
    },
    {
      icon: <Cloud />,
      title: "Cloud Computing",
      description: "Optimiza tus operaciones con nuestras soluciones de nube escalables y flexibles."
    },
    {
      icon: <BarChart />,
      title: "Análisis de Datos",
      description: "Obtén insights valiosos de tus datos con nuestras soluciones de análisis avanzado."
    },
    {
      icon: <Code />,
      title: "Desarrollo de Software",
      description: "Creamos soluciones de software personalizadas para impulsar tu negocio."
    },
    {
      icon: <Smartphone />,
      title: "Desarrollo de Aplicaciones Móviles",
      description: "Diseñamos y desarrollamos aplicaciones móviles innovadoras para iOS y Android."
    },
    {
      icon: <Database />,
      title: "Gestión de Bases de Datos",
      description: "Optimizamos y aseguramos tus bases de datos para un rendimiento óptimo."
    }
  ]

  const displayedServices = limit ? services.slice(0, limit) : services

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayedServices.map((service, index) => (
        <ServiceItem key={index} {...service} />
      ))}
    </div>
  )
}

export default Services