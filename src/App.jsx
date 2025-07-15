import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PaintingOnPaper from './components/PaintingOnPaper'
import FlatPainting from './components/FlatPainting'
import DesignArt from './components/DesignArt'
import Photography from './components/Photography'
import Footer from './components/Footer'
import MusicToggle from './components/MusicToggle'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      <main>
        <Hero />
        <PaintingOnPaper />
        <FlatPainting />
        <DesignArt />
        <Photography />
      </main>

      <Footer />
      <MusicToggle isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </div>
  )
}

export default App
