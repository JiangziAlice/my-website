import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const Photography = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const photos = [
    {
      id: 1,
      title: "Urban Reflections",
      description: "Cityscape photography with dramatic lighting",
      image: "/api/placeholder/400/600",
      category: "Urban",
      year: "2024"
    },
    {
      id: 2,
      title: "Natural Beauty",
      description: "Portrait photography in natural light",
      image: "/api/placeholder/400/600",
      category: "Portrait",
      year: "2024"
    },
    {
      id: 3,
      title: "Abstract Light",
      description: "Experimental photography with light and shadow",
      image: "/api/placeholder/400/600",
      category: "Experimental",
      year: "2023"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section id="photography" className="py-20 md:py-32">
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
              Photography & Modeling
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Capturing moments through lens and creative vision
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              variants={itemVariants}
              onClick={() => setSelectedImage(photo)}
              className="group cursor-pointer"
            >
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[2/3] relative overflow-hidden">
                  <motion.img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white font-semibold text-xl mb-2">{photo.title}</h3>
                      <p className="text-white/80 text-sm">{photo.category} • {photo.year}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <h3 className="font-semibold text-lg mb-1">{photo.title}</h3>
                <p className="text-muted-foreground text-sm">{photo.description}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-xs px-2 py-1 bg-secondary/50 rounded-full text-secondary-foreground">
                    {photo.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{photo.year}</span>
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
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-card rounded-2xl max-w-4xl max-h-[90vh] overflow-auto"
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
                  <span>{selectedImage.category}</span>
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

export default Photography