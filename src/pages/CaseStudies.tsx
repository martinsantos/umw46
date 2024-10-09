import React from 'react'
import CaseStudies from '../components/CaseStudies'

const CaseStudiesPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Casos de Éxito</h1>
      <CaseStudies />
    </div>
  )
}

export default CaseStudiesPage