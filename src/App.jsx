/* eslint-disable no-unused-vars */
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Resume from './Components/Resume'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Element } from 'react-scroll'


function App() {

  return (
    <main className="h-screen w-screen flex-col justify-center items-center px-40 overflow-x-hidden snap-y">
        <Router>
          <Navbar className=""/>
          
          <Element name="Hero">
            <Route exact path="/" component="Hero" />
          </Element>

          <Element name="Resume">
            <Router path="/Resume" component="Resume" />
          </Element>

          <Element name="Projects">
            <Route path="/Projects" component="Projects" />
          </Element>
    
          <Element name="Contact">
            <Route path="/Contact" component="Contact" />
          </Element>

        </Router>
    </main>
  )
}

export default App
