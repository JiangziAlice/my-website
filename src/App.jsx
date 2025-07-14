import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PaintingOnPaper from './components/PaintingOnPaper'
import FlatPainting from './components/FlatPainting'
import DesignArt from './components/DesignArt'
import Photography from './components/Photography'
import Footer from './components/Footer'
import MusicToggle from './components/MusicToggle'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <main className="relative">
        <Hero />
        <PaintingOnPaper />
        <FlatPainting />
        <DesignArt />
        <Photography />
      </main>

      <Footer />

      <MusicToggle isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 right-4 bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-lg"
          >
            <p className="text-sm text-muted-foreground">Now Playing: Ambient</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
