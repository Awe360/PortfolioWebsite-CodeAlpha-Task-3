import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'


function App() {
  return (
    <div className='min-h-screen' >
      <NavBar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
     
      <Footer/>

    </div>
  )
}

export default App
