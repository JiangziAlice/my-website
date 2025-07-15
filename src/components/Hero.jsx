import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section id="welcome-section" className="relative min-h-screen flex items-center justify-center bg-black">
      <div className="relative w-full h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: 'blur(3px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 cursor-[url('/my-website/photo/285639_heart_icon.png'),auto] hover:filter-none"
          >
            Welcome to My Personal Portfolio
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a
            href="#paper-painting"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#paper-painting')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-white hover:text-teal-400 transition-colors"
          >
            <ArrowDown className="w-8 h-8 animate-bounce" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 bg-black p-8 md:p-20"
      >
        <p className="text-white text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-center">
          Welcome to my portfolio! I am a creator passionate about painting
          and design, focusing on expressing my unique perspective through
          art. My works include illustrations and digital art, showcasing
          rich colors.<br /><br />
          Additionally, I have personally designed the website and
          background music, aiming to provide an immersive experience for
          the audience. I hope my creations can inspire your thoughts and
          ideas. Thank you for browsing my portfolio!
        </p>
      </motion.div>
    </section>
  )
}

export default Hero