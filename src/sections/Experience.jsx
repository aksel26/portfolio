import { motion } from 'framer-motion'

/**
 * Experience 섹션 컴포넌트
 * 경력 및 경험 타임라인
 */
export default function Experience() {
  const experiences = [
    {
      period: '2023.03 - 현재',
      title: '시니어 프론트엔드 개발자',
      company: '테크 스타트업',
      description: 'React 기반 SaaS 플랫폼 개발 및 리드를 담당하고 있습니다. 팀 내 코드 리뷰와 아키텍처 설계를 주도하며, 신입 개발자 멘토링을 진행하고 있습니다.',
      achievements: [
        '웹 성능 개선으로 로딩 시간 40% 단축',
        'TypeScript 마이그레이션 프로젝트 리드',
        '컴포넌트 라이브러리 구축 및 문서화',
      ],
    },
    {
      period: '2021.06 - 2023.02',
      title: '프론트엔드 개발자',
      company: '디지털 에이전시',
      description: '다양한 클라이언트 프로젝트에서 웹 애플리케이션 개발을 담당했습니다. React, Vue.js 등 다양한 프레임워크를 활용하여 프로젝트를 성공적으로 완수했습니다.',
      achievements: [
        '10개 이상의 클라이언트 프로젝트 성공적 완수',
        '반응형 디자인 시스템 구축',
        '웹 접근성 개선 (WCAG 2.1 AA 준수)',
      ],
    },
    {
      period: '2020.01 - 2021.05',
      title: '주니어 웹 개발자',
      company: '스타트업',
      description: 'HTML, CSS, JavaScript를 활용한 웹 페이지 개발 및 유지보수를 담당했습니다. React를 학습하며 모던 프론트엔드 개발 경험을 쌓았습니다.',
      achievements: [
        'React로 레거시 jQuery 코드 마이그레이션',
        'UI/UX 개선으로 사용자 만족도 25% 향상',
        'Git 워크플로우 및 코드 리뷰 프로세스 도입',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            경험
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            다양한 환경에서 쌓아온 실무 경험과 성장 과정입니다.
          </p>
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* 타임라인 세로선 */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* 타임라인 점 */}
              <div
                className={`absolute top-6 ${
                  index % 2 === 0
                    ? 'left-0 md:right-0 md:left-auto transform md:translate-x-1/2'
                    : 'left-0 md:left-0 transform md:-translate-x-1/2'
                } w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900`}
              ></div>

              <motion.div
                className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-3">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3 font-semibold">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      주요 성과:
                    </p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-gray-600 dark:text-gray-300 text-sm flex items-start gap-2"
                        >
                          <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
