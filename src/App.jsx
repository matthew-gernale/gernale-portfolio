/* eslint-disable no-unused-vars */
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Keycaps from './Components/Keycaps'


function App() {

  return (
    <main className="h-screen w-screen flex-col justify-center items-center overflow-x-hidden scroll-smooth">
      <Navbar className=""/>

      <Hero className=""/>

      <About className=""/>

      <Projects className=""/>
    
      <Contact className=""/>
      <Footer />
    </main>
  )
}

export default App
