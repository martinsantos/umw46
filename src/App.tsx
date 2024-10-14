import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import CaseStudies from './pages/CaseStudies'
import Contact from './pages/Contact'
import About from './pages/About'
import SingleCase from './components/SingleCase'; // Importa el componente SingleCase
import SingleService from './components/SingleService'; // Importa el componente SingleService

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-800 text-base flex flex-col">
        <Header />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/casos-de-exito" element={<CaseStudies />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/servicios/:id" element={<SingleService />} />
            <Route path="/casos-de-exito/:id" element={<SingleCase />} />    <Route path="/nosotros" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App