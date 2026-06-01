import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-5xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-black leading-tight"
        >
          Hi, I'm <span className="text-cyan-400">EUGE</span>
        </motion.h1>

        <div className="mt-6 text-2xl text-gray-300">
          <TypeAnimation
  sequence={[
    'Full Stack Developer',
   
    2000,
     'Frontend Developer',
    2000,
    
  ]}
  wrapper="span"
  repeat={Infinity}
/>
        </div>

       <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-8">
  I build modern, responsive, high-performance web applications
  using React, Node.js, and modern technologies.
</p>


<div className="mt-8 flex flex-col md:flex-row justify-center gap-6 text-gray-400">

  <a
    href="ejcpunzalan16@gmail.com"
    className="flex items-center gap-2 hover:text-cyan-400 transition"
  >
    <FaEnvelope className="text-cyan-400" />
    <span>ejcpunzalan16@gmail.com</span>
  </a>

  <a
    href="tel:+639662264113"
    className="flex items-center gap-2 hover:text-cyan-400 transition"
  >
    <FaPhone className="text-cyan-400" />
    <span>+63 966 226 4113</span>
  </a>

  <div className="flex items-center gap-2">
    <FaMapMarkerAlt className="text-cyan-400" />
    <span>Philippines</span>
  </div>

</div>

        <div className="mt-10 flex gap-4 justify-center">
          <a href="#projects">
          <button className="bg-cyan-500 hover:bg-cyan-400 px-8 py-3 rounded-xl font-semibold transition">
            View Projects
          </button>
          </a>
           <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
  <button className="border border-white/20 hover:border-cyan-400 px-8 py-3 rounded-xl transition">
    View Resume
  </button>
</a>
        </div>
      </div>
    </section>
  )
}

export default Hero