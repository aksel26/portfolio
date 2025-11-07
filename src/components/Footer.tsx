import { motion } from 'framer-motion'

/**
 * 푸터 컴포넌트
 */
export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.p
          className="text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © 2024 Frontend Developer Portfolio. All rights reserved.
        </motion.p>
        <motion.p
          className="text-sm text-gray-500 dark:text-gray-500 mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Built with React, Tailwind CSS, and Framer Motion
        </motion.p>
      </div>
    </footer>
  )
}
