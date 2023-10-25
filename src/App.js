import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='text-gray-600'>
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
    </div>
  )
}

export default App