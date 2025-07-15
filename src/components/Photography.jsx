import { motion } from 'framer-motion'
import LazyImage from './LazyImage'

const Photography = () => {
  const photos = [
    { id: 1, src: "/my-website/photo/tom.png", alt: "摄影作品" },
    { id: 2, src: "/my-website/photo/yy.jpg", alt: "摄影作品" },
    { id: 3, src: "/my-website/photo/y.jpg", alt: "摄影作品" }
  ]

  return (
    <section id="photography-modeling" className="py-20 bg-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 border-2 border-white rounded-lg px-4 py-2 inline-block">
            Photography & Modeling
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 place-items-center"
        >
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="w-full max-w-sm md:w-auto"
            >
              <LazyImage
                src={photo.src}
                alt={photo.alt}
                className="aspect-square"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Photography