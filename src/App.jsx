import React from 'react'
import NavBar from './components/NavBar'
import Background from './components/Background'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Technologies
 from './components/Technologies'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className = "overflow-x-hidden text-neutral-50 antialiased selection:bg-cyan-300 selection:text-black">
      <div className=' fixed top-0 -z-10 h-full w-full'>
        <Background />
      </div>
      <div className=' container mx-auto px-8'>
        <NavBar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Contact />
      </div>
    </div>
  )
}