import { motion } from 'framer-motion'
import LazyImage from './LazyImage'

const FlatPainting = () => {
  const paintings = [
    { id: 1, src: "/my-website/photo/1.png", alt: "电子绘画" },
    { id: 2, src: "/my-website/photo/2.png", alt: "电子绘画" },
    { id: 3, src: "/my-website/photo/8.png", alt: "电子绘画" },
    { id: 4, src: "/my-website/photo/5.png", alt: "电子绘画" },
    { id: 5, src: "/my-website/photo/3.png", alt: "电子绘画" },
    { id: 6, src: "/my-website/photo/6.png", alt: "电子绘画" },
    { id: 7, src: "/my-website/photo/d.png", alt: "电子绘画" },
    { id: 8, src: "/my-website/photo/0918.png", alt: "电子绘画" },
    { id: 9, src: "/my-website/photo/0733.png", alt: "电子绘画" }
  ]

  return (
    <section id="flat-painting" className="py-20 bg-gray-700 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 border-2 border-white rounded-lg px-4 py-2 inline-block">
            Flat Painting
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {paintings.map((painting) => (
            <motion.div
              key={painting.id}
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

        {/* Floating GIF */}
        <div className="fixed top-20 right-20 w-64 h-48 floating-gif">
          <LazyImage
            src="/my-website/photo/GIF.gif"
            alt="floating gif"
            className="w-full h-full object-contain"
          />
        </div>
        <style jsx>{`
          @keyframes float {
            0% { transform: translate(0px, 0px); }
            25% { transform: translate(100px, 50px); }
            50% { transform: translate(200px, 100px); }
            75% { transform: translate(100px, 50px); }
            100% { transform: translate(0px, 0px); }
          }
          .floating-gif {
            animation: float 15s ease-in-out infinite;
            will-change: transform;
          }
        `}</style>
      </div>
    </section>
  )
}

export default FlatPainting