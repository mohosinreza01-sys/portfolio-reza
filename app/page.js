import React from 'react'
import Hero from './components/home/Hero'
import About from './components/home/About'
import Projects from './components/home/Projects'
import Services from './components/home/Services'
import Testimonials from './components/home/Testimonials'
import Contact from './components/home/Contact'

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default page
