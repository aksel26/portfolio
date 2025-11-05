import { motion } from 'framer-motion'
import { useState } from 'react'

/**
 * Projects 섹션 컴포넌트
 * 프로젝트 카드 그리드 및 필터링 기능
 */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('전체')

  const categories = ['전체', 'React', 'Next.js', 'Web App', 'UI/UX']

  const projects = [
    {
      title: '이커머스 플랫폼',
      description: '사용자 친화적인 쇼핑 경험을 제공하는 풀스택 이커머스 웹사이트입니다. 장바구니, 결제, 주문 관리 등의 기능을 구현했습니다.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      category: 'React',
      github: '#',
      demo: '#',
    },
    {
      title: '날씨 대시보드',
      description: '실시간 날씨 정보와 7일 예보를 제공하는 반응형 웹 애플리케이션입니다. OpenWeather API를 활용했습니다.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
      tags: ['React', 'API', 'Chart.js'],
      category: 'Web App',
      github: '#',
      demo: '#',
    },
    {
      title: '포트폴리오 빌더',
      description: '개발자들이 쉽게 포트폴리오를 만들 수 있는 드래그 앤 드롭 기반 웹 빌더입니다.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop',
      tags: ['Next.js', 'React DnD', 'Tailwind CSS'],
      category: 'Next.js',
      github: '#',
      demo: '#',
    },
    {
      title: '태스크 관리 앱',
      description: '팀 협업을 위한 칸반 보드 스타일의 태스크 관리 애플리케이션입니다. 드래그 앤 드롭으로 직관적인 UX를 제공합니다.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      tags: ['React', 'Firebase', 'Framer Motion'],
      category: 'Web App',
      github: '#',
      demo: '#',
    },
    {
      title: '디자인 시스템',
      description: '재사용 가능한 UI 컴포넌트 라이브러리와 디자인 가이드라인을 포함한 디자인 시스템입니다.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      tags: ['React', 'Storybook', 'CSS'],
      category: 'UI/UX',
      github: '#',
      demo: '#',
    },
    {
      title: '블로그 플랫폼',
      description: 'MDX 기반의 정적 사이트 생성 블로그 플랫폼입니다. SEO 최적화와 다크모드를 지원합니다.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
      tags: ['Next.js', 'MDX', 'Tailwind CSS'],
      category: 'Next.js',
      github: '#',
      demo: '#',
    },
  ]

  const filteredProjects =
    activeFilter === '전체'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            프로젝트
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            다양한 프로젝트를 통해 얻은 경험과 기술을 소개합니다.
          </p>
        </motion.div>

        {/* 필터 버튼 */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeFilter === category
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* 프로젝트 그리드 */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              {/* 프로젝트 이미지 */}
              <div className="relative overflow-hidden h-48 bg-gray-200 dark:bg-gray-700">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* 프로젝트 정보 */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* 기술 스택 태그 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 링크 */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    className="flex-1 text-center py-2 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    className="flex-1 text-center py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:shadow-lg transition-shadow text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
