import { motion } from 'framer-motion'
import { useState } from 'react'

const DesignArt = () => {
  const [filter, setFilter] = useState('All')

  const designs = [
    {
      id: 1,
      title: "Brand Identity System",
      category: "Branding",
      description: "Complete visual identity for tech startup",
      image: "/api/placeholder/400/300",
      year: "2024"
    },
    {
      id: 2,
      title: "Mobile App UI",
      category: "UI/UX",
      description: "Modern interface design for productivity app",
      image: "/api/placeholder/400/300",
      year: "2024"
    },
    {
      id: 3,
      title: "Web Design Concept",
      category: "Web Design",
      description: "Responsive website with dark mode support",
      image: "/api/placeholder/400/300",
      year: "2023"
    },
    {
      id: 4,
      title: "Logo Collection",
      category: "Branding",
      description: "Various logo designs for different clients",
      image: "/api/placeholder/400/300",
      year: "2023"
    },
    {
      id: 5,
      title: "Poster Series",
      category: "Print",
      description: "Art exhibition promotional materials",
      image: "/api/placeholder/400/300",
      year: "2023"
    },
    {
      id: 6,
      title: "Icon Design",
      category: "Illustration",
      description: "Custom icon set for mobile application",
      image: "/api/placeholder/400/300",
      year: "2023"
    },
    {
      id: 7,
      title: "Packaging Design",
      category: "Product",
      description: "Eco-friendly product packaging concept",
      image: "/api/placeholder/400/300",
      year: "2023"
    },
    {
      id: 8,
      title: "Social Media Kit",
      category: "Digital",
      description: "Cohesive social media brand assets",
      image: "/api/placeholder/400/300",
      year: "2023"
    },
    {
      id: 9,
      title: "Typography Project",
      category: "Typography",
      description: "Custom typeface design for luxury brand",
      image: "/api/placeholder/400/300",
      year: "2022"
    },
    {
      id: 10,
      title: "Annual Report",
      category: "Print",
      description: "Corporate annual report design",
      image: "/api/placeholder/400/300",
      year: "2022"
    },
    {
      id: 11,
      title: "Dashboard Design",
      category: "UI/UX",
      description: "Analytics dashboard interface design",
      image: "/api/placeholder/400/300",
      year: "2022"
    },
    {
      id: 12,
      title: "Brand Guidelines",
      category: "Branding",
      description: "Comprehensive brand style guide",
      image: "/api/placeholder/400/300",
      year: "2022"
    }
  ]

  const categories = ['All', 'Branding', 'UI/UX', 'Web Design', 'Print', 'Illustration', 'Product', 'Digital', 'Typography']
  
  const filteredDesigns = filter === 'All' 
    ? designs 
    : designs.filter(design => design.category === filter)

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
    <section id="design-art" className="py-20 md:py-32 bg-background">
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
              Design Art
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional design work across multiple mediums and industries
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredDesigns.map((design) => (
            <motion.div
              key={design.id}
              variants={itemVariants}
              className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <motion.img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-1">{design.title}</h3>
                    <p className="text-white/80 text-sm">{design.category} • {design.year}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1">{design.title}</h3>
                <p className="text-sm text-muted-foreground">{design.description}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs px-2 py-1 bg-secondary/50 rounded-full text-secondary-foreground">
                    {design.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{design.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default DesignArt