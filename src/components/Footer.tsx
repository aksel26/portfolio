import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

/**
 * 푸터 컴포넌트
 * 스크롤을 끝까지 내렸을 때만 표시
 */
export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // 페이지 전체 높이
      const scrollHeight = document.documentElement.scrollHeight
      // 현재 스크롤 위치 + 뷰포트 높이
      const scrollTop = window.scrollY
      const clientHeight = window.innerHeight
      
      // 스크롤이 거의 끝에 도달했는지 확인 (100px 여유)
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 100
      
      setIsVisible(isAtBottom)
    }

    // 초기 체크
    handleScroll()

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.footer 
      className="bg-gray-100 dark:bg-gray-900 py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20
      }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.p
          className="text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          © 2024 Frontend Developer Portfolio. All rights reserved.
        </motion.p>
        <motion.p
          className="text-sm text-gray-500 dark:text-gray-500 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          Built with React, Tailwind CSS, and Framer Motion
        </motion.p>
      </div>
    </motion.footer>
  )
}
