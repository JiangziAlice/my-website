import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const PaintingOnPaper = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const paintings = [
    {
      id: 1,
      title: "Ethereal Dreams",
      description: "Watercolor exploration of subconscious landscapes",
      image: "/api/placeholder/400/300",
      year: "2024"
    },
    {
      id: 2,
      title: "Urban Solitude",
      description: "Ink and watercolor study of city life",
      image: "/api/placeholder/400/300",
      year: "2024"
    },
    {
      id: 3,
      title: "Nature's Whisper",
      description: "Botanical illustration with mixed media",
      image: "/api/placeholder/400/300",
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
    hidden: { y: 50, opacity: 0 },
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
    <section id="paper-paintings" className="py-20 md:py-32 bg-muted/30">
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
              Paintings on Paper
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Traditional media meets contemporary vision in these carefully crafted works
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {paintings.map((painting) => (
            <motion.div
              key={painting.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCard(painting.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <motion.img
                  src={painting.image}
                  alt={painting.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">                  <h3 className="text-xl font-semibold text-foreground">{painting.title}</h3>
                  <span className="text-sm text-muted-foreground">{painting.year}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{painting.description}</p>
              </div>

              <AnimatePresence>
                {hoveredCard === painting.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
                  >
                    <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      View Details
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default PaintingOnPaper
