import { motion } from 'framer-motion'

/**
 * About 섹션 컴포넌트
 * 자기소개 및 기술 스택
 */
export default function About() {
  const skills = [
    { name: 'React', icon: '⚛️', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
    { name: 'TypeScript', icon: '📘', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
    { name: 'JavaScript', icon: '✨', color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400' },
    { name: 'Tailwind CSS', icon: '🎨', color: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400' },
    { name: 'Next.js', icon: '▲', color: 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300' },
    { name: 'Git', icon: '🔧', color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400' },
    { name: 'Framer Motion', icon: '🎬', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' },
    { name: 'Vite', icon: '⚡', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            소개
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              안녕하세요! 👋
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              저는 사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다.
              깔끔하고 직관적인 인터페이스를 만드는 것을 좋아하며,
              최신 웹 기술을 활용하여 성능이 뛰어난 웹 애플리케이션을 개발합니다.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              React를 중심으로 모던 JavaScript 생태계에서 활동하고 있으며,
              타입 안정성을 위해 TypeScript를 선호합니다.
              디자인과 개발의 경계에서 균형을 맞추는 것을 즐깁니다.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              끊임없이 배우고 성장하는 것을 목표로 하며,
              팀과의 협업을 통해 더 나은 결과물을 만들어내는 것을 중요하게 생각합니다.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              기술 스택
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`${skill.color} rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
