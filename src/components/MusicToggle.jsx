import { motion } from 'framer-motion'
import { Play, Pause, Music } from 'lucide-react'

const MusicToggle = ({ isPlaying, setIsPlaying }) => {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsPlaying(!isPlaying)}
      className="fixed bottom-4 right-4 z-50 p-4 bg-card/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
      aria-label="Toggle music"
    >
      <div className="relative">
        {isPlaying ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Music className="w-5 h-5 text-primary" />
          </motion.div>
        ) : (
          <Play className="w-5 h-5 text-muted-foreground" />
        )}
      </div>
      
      {/* Visualizer bars */}
      {isPlaying && (
        <motion.div
          className="absolute -bottom-1 -right-1 flex space-x-0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[0.8, 1.2, 0.6, 1.4, 0.9].map((height, i) => (
            <motion.div
              key={i}
              className="w-0.5 bg-primary rounded-full"
              initial={{ height: 2 }}
              animate={{ height: height * 8 }}
              transition={{
                duration: 0.5 + i * 0.1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.button>
  )
}

export default MusicToggle