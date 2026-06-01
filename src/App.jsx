import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'
import Experience from "./sections/Experience.jsx";
import AIChat from "./components/AIChat";




function App() {
  return (
    <div className="bg-[#050816] text-white min-h-screen overflow-hidden">


    

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <About />

      {/* SKILLS */}
      <Skills />

      <Experience />

      {/* PROJECTS */}
      <Projects />

      {/* CONTACT */}
      <Contact />

      <AIChat />

    </div>
  )
}

export default App