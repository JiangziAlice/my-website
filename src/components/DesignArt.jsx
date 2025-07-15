import { motion } from 'framer-motion'
import LazyImage from './LazyImage'

const DesignArt = () => {
  const designs = [
    { id: 1, src: "/my-website/photo/fvghb.png", alt: "设计作品" },
    { id: 2, src: "/my-website/photo/cvh.png", alt: "设计作品" },
    { id: 3, src: "/my-website/photo/fhdf.png", alt: "设计作品" },
    { id: 4, src: "/my-website/photo/egrd.png", alt: "设计作品" },
    { id: 5, src: "/my-website/photo/jhfu.png", alt: "设计作品" },
    { id: 6, src: "/my-website/photo/hgig.png", alt: "设计作品" },
    { id: 7, src: "/my-website/photo/shfgys.jpg", alt: "设计作品" },
    { id: 8, src: "/my-website/photo/dzgddg.png", alt: "设计作品" },
    { id: 9, src: "/my-website/photo/fjnardh.jpg", alt: "设计作品" },
    { id: 10, src: "/my-website/photo/ff.png", alt: "设计作品" },
    { id: 11, src: "/my-website/photo/fjdk.png", alt: "设计作品" },
    { id: 12, src: "/my-website/photo/djgrireh.png", alt: "设计作品" }
  ]

  return (
    <section id="design" className="py-20 bg-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 border-2 border-white rounded-lg px-4 py-2 inline-block">
            Design Art
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {designs.map((design, index) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="w-full"
            >
              <LazyImage
                src={design.src}
                alt={design.alt}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default DesignArt