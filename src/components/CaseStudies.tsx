import React from 'react'

const CaseStudy: React.FC<{ title: string; description: string; result: string; image: string }> = ({ title, description, result, image }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-4 text-red-500">{title}</h3>
      <p className="mb-4 text-gray-300">{description}</p>
      <p className="font-semibold mb-4 text-white">Resultado: {result}</p>
      <a href="#" className="inline-block border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition-colors">Ver Detalles</a>
    </div>
  </div>
)

const CaseStudies: React.FC<{ limit?: number }> = ({ limit }) => {
  const caseStudies = [
    {
      title: "FinanzasTech: Seguridad Bancaria Reforzada",
      description: "Implementamos un sistema de seguridad avanzado para el Banco XYZ, incluyendo autenticación multifactor, encriptación de datos y monitoreo en tiempo real.",
      result: "Reducción de incidentes de ciberseguridad en un 95% y aumento de la confianza de los clientes.",
      image: "https://source.unsplash.com/random/800x600/?banking"
    },
    {
      title: "EcommerceTech: Escalabilidad en la Nube",
      description: "Nuestra solución de cloud computing permitió a la tienda online ABC escalar sus operaciones durante el Black Friday, implementando auto-scaling y balanceo de carga.",
      result: "Manejo de un aumento del 500% en el tráfico sin tiempo de inactividad y mejora en la velocidad de carga del sitio en un 40%.",
      image: "https://source.unsplash.com/random/800x600/?ecommerce"
    },
    {
      title: "LogisticaTech: Optimización de Rutas con IA",
      description: "Desarrollamos un sistema de análisis de datos basado en IA para la empresa de logística DEF, optimizando las rutas de entrega y la gestión de inventario.",
      result: "Aumento de la eficiencia en un 30%, reducción de costos de combustible en un 25% y mejora en los tiempos de entrega en un 20%.",
      image: "https://source.unsplash.com/random/800x600/?logistics"
    },
    {
      title: "HealthTech: Plataforma de Telemedicina",
      description: "Creamos una plataforma de telemedicina integral para la clínica GHI, permitiendo consultas virtuales, gestión de historias clínicas y seguimiento de pacientes.",
      result: "Aumento del 200% en la capacidad de atención, reducción de costos operativos en un 35% y mejora en la satisfacción del paciente.",
      image: "https://source.unsplash.com/random/800x600/?telemedicine"
    },
    {
      title: "EduTech: Sistema de Aprendizaje Adaptativo",
      description: "Desarrollamos un sistema de aprendizaje adaptativo basado en IA para la universidad JKL, personalizando la experiencia educativa de cada estudiante.",
      result: "Mejora del 40% en las tasas de retención de estudiantes y aumento del 25% en las calificaciones promedio.",
      image: "https://source.unsplash.com/random/800x600/?education"
    },
    {
      title: "AgriTech: IoT para Agricultura de Precisión",
      description: "Implementamos una solución IoT para la empresa agrícola MNO, optimizando el uso de recursos y mejorando la producción de cultivos.",
      result: "Aumento del 35% en la producción, reducción del 40% en el uso de agua y fertilizantes, y mejora en la calidad de los cultivos.",
      image: "https://source.unsplash.com/random/800x600/?agriculture"
    }
  ]

  const displayedCaseStudies = limit ? caseStudies.slice(0, limit) : caseStudies

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayedCaseStudies.map((study, index) => (
        <CaseStudy key={index} {...study} />
      ))}
    </div>
  )
}

export default CaseStudies