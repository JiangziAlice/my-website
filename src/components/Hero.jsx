import { motion } from 'framer-motion'
import { ArrowDown, Mail, Github, Instagram } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          {/* Animated Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary"
          >
            ✨ Visual Artist & Designer
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              YeZhi
            </span>
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl font-light text-muted-foreground">
              Creative Portfolio
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Exploring the intersection of traditional art and digital innovation. 
            From paper paintings to generative design, each piece tells a unique story.
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Mail, href: 'mailto:yezhi@example.com', label: 'Email' },
              { icon: Github, href: 'https://github.com/yezhi', label: 'GitHub' },
              { icon: Instagram, href: 'https://instagram.com/yezhi.art', label: 'Instagram' }
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.a
              href="#paper-paintings"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#paper-paintings')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-sm">Explore Work</span>
              <ArrowDown className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-l from-accent/20 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  )
}

export default Hero