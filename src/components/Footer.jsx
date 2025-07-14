import { motion } from 'framer-motion'
import { Mail, Github, Instagram, Twitter, Heart } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: Mail, href: 'mailto:yezhi@example.com', label: 'Email' },
    { icon: Github, href: 'https://github.com/yezhi', label: 'GitHub' },
    { icon: Instagram, href: 'https://instagram.com/yezhi.art', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/yezhi_art', label: 'Twitter' }
  ]

  return (
    <footer id="find-me" className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
            >
              YeZhi
            </h3>
            <p className="text-muted-foreground max-w-sm"
            >
              Visual artist and designer exploring the intersection of traditional art and digital innovation.
            </p>
            <div className="flex space-x-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="space-y-2"
            >
              {[
                { name: 'Home', href: '#home' },
                { name: 'Paintings', href: '#paper-paintings' },
                { name: 'Digital Art', href: '#flat-paintings' },
                { name: 'Design Work', href: '#design-art' },
                { name: 'Photography', href: '#photography' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-foreground">Get in Touch</h4>
            <div className="space-y-2"
            >
              <a
                href="mailto:yezhi@example.com"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                yezhi@example.com
              </a>
              <p className="text-muted-foreground">
                Available for commissions and collaborations
              </p>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <p className="text-muted-foreground text-sm flex items-center"
            >
              Made with <Heart className="w-4 h-4 mx-1 text-red-500 fill-red-500" /> by YeZhi
            </p>
            <p className="text-muted-foreground text-sm"
            >
              © {new Date().getFullYear()} YeZhi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer