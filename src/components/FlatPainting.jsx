import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const FlatPainting = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const paintings = [
    {
      id: 1,
      title: "Digital Horizon",
      description: "Exploration of digital landscapes and virtual reality",
      image: "/api/placeholder/400/300",
      year: "2024",
      type: "Digital"
    },
    {
      id: 2,
      title: "Neon Dreams",
      description: "Cyberpunk-inspired digital artwork",
      image: "/api/placeholder/400/300",
      year: "2024",
      type: "Digital"
    },
    {
      id: 3,
      title: "Abstract Flow",
      description: "Generative art using algorithmic patterns",
      image: "/api/placeholder/400/300",
      year: "2023",
      type: "Generative"
    },
    {
      id: 4,
      title: "Urban Geometry",
      description: "Architectural studies in digital medium",
      image: "/api/placeholder/400/300",
      year: "2023",
      type: "Digital"
    },
    {
      id: 5,
      title: "Color Symphony",
      description: "Digital painting exploring color theory",
      image: "/api/placeholder/400/300",
      year: "2023",
      type: "Digital"
    },
    {
      id: 6,
      title: "Motion Study",
      description: "Animated digital artwork with GIF format",
      image: "/api/placeholder/400/300",
      year: "2023",
      type: "Animation"
    },
    {
      id: 7,
      title: "Minimal Zen",
      description: "Minimalist approach to digital composition",
      image: "/api/placeholder/400/300",
      year: "2023",
      type: "Digital"
    },
    {
      id: 8,
      title: "Data Visualization",
      description: "Artistic representation of data patterns",
      image: "/api/placeholder/400/300",
      year: "2023",
      type: "Data Art"
    },
    {
      id: 9,
      title: "Glitch Art",
      description: "Embracing digital imperfections as art",
      image: "/api/placeholder/400/300",
      year: "2022",
      type: "Experimental"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section id="flat-paintings" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Flat Paintings
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Digital explorations and flat design experiments
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {paintings.map((painting) => (
            <motion.div
              key={painting.id}
              variants={itemVariants}
              onClick={() => setSelectedImage(painting)}
              className="group cursor-pointer"
            >
              <div className="relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <motion.img
                    src={painting.image}
                    alt={painting.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg mb-1">{painting.title}</h3>
                      <p className="text-white/80 text-sm">{painting.type} • {painting.year}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for selected image */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-card rounded-2xl max-w-4xl max-h-[80vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-muted-foreground">{selectedImage.description}</p>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span>{selectedImage.type}</span>
                  <span>•</span>
                  <span>{selectedImage.year}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default FlatPainting