import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Play, Pause } from 'lucide-react'

const MusicToggle = ({ isPlaying, setIsPlaying }) => {
  useEffect(() => {
    const audio = new Audio('/my-website/photo/yinfu.mp3')
    audio.loop = true

    if (isPlaying) {
      audio.play().catch(e => console.log('Audio play failed:', e))
    } else {
      audio.pause()
    }

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [isPlaying])

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsPlaying(!isPlaying)}
      className="fixed top-4 right-4 z-50 px-3 py-1 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg text-white text-sm font-bold transition-all hover:bg-white/20 hover:scale-105 shadow-lg"
      aria-label="Toggle music"
    >
      {isPlaying ?
        <Pause className="w-4 h-4" /> :
        <Play className="w-4 h-4" />
      }
    </motion.button>
  )
}

export default MusicToggle
