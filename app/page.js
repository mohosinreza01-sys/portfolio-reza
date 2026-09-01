import React from 'react'
import Hero from './components/home/Hero'
import About from './components/home/About'
import Projects from './components/home/Projects'
import Services from './components/home/Services'

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Services />
    </div>
  )
}

export default page
