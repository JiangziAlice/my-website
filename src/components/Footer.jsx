import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer id="social-media" className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-8">
          
          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">
              联系我
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12"
            >
              <a
                href="https://github.com/JiangziAlice"
                className="text-teal-400 font-bold text-lg hover:text-teal-300 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.xiaohongshu.com/user/profile/5997f3335e87e74eed2bb164?xhsshare=CopyLink&appuid=5997f3335e87e74eed2bb164&apptime=1725364495&share_id=c0770c6d3b6445a8aacb0807b0991e60"
                className="text-teal-400 font-bold text-lg hover:text-teal-300 transition-colors"
              >
                小红书
              </a>
              <a
                href="https://www.instagram.com/dobetteryz?igsh=MW9pc3lndmdsZmxwNw%3D%3D&utm_source=qr"
                className="text-teal-400 font-bold text-lg hover:text-teal-300 transition-colors"
              >
                Instagram
              </a>
              <a
                href="mailto:1572872012@qq.com"
                className="text-teal-400 font-bold text-lg hover:text-teal-300 transition-colors"
              >
                Email: 1572872012@qq.com
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white text-sm"
          >
            © 2024 Ye Zi. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

export default Footer