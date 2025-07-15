import { motion } from 'framer-motion'
import LazyImage from './LazyImage'

const PaintingOnPaper = () => {
  const paintings = [
    {
      id: 1,
      src: "/my-website/photo/微信图片_20240902154154.jpg",
      alt: "纸上绘画作品"
    },
    {
      id: 2,
      src: "/my-website/photo/微信图片_20240902154201.jpg",
      alt: "纸上绘画作品"
    },
    {
      id: 3,
      src: "/my-website/photo/微信图片_20240902154140.jpg",
      alt: "纸上绘画作品"
    }
  ]

  return (
    <section id="paper-painting" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 border-2 border-white rounded-lg px-4 py-2 inline-block">
            Painting on Paper
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {paintings.map((painting) => (
            <motion.div
              key={painting.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="w-full"
            >
              <LazyImage
                src={painting.src}
                alt={painting.alt}
                className="aspect-square"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default PaintingOnPaper
