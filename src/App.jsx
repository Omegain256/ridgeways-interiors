import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import Process from './components/Process'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <Process />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
