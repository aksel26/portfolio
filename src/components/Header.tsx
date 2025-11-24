import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

/**
 * 헤더 컴포넌트
 * 네비게이션 메뉴와 다크모드 토글 버튼 포함
 */
export default function Header() {
  const { isDark, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      const mainElement = document.querySelector('main');
      const scrollPosition = mainElement ? mainElement.scrollTop : window.scrollY;
      setScrolled(scrollPosition > 50);
    }

    // Listen to both window and main element
    window.addEventListener('scroll', handleScroll);
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (mainElement) {
        mainElement.removeEventListener('scroll', handleScroll);
      }
    }
  }, [location.pathname]) // Re-run when location changes to re-attach to new main if needed

  const navItems = [
    { name: 'About', href: isHome ? '#about' : '/#about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: isHome ? '#experience' : '/#experience' },
    { name: 'Contact', href: isHome ? '#contact' : '/#contact' },
  ]

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Mobile menu close
    setIsMobileMenuOpen(false);

    // Only handle hash links on home page
    if (isHome && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      const mainElement = document.querySelector('main');

      if (element && mainElement) {
        // Calculate position relative to the main container's current scroll
        // element.getBoundingClientRect().top is relative to viewport
        // mainElement.getBoundingClientRect().top is relative to viewport
        // We need the offset from the top of the main container
        
        // Since main is the scroll container, we can just use element.offsetTop if it's a direct child, 
        // but it's inside sections. 
        // Better approach: element.scrollIntoView works but might scroll the whole window if not careful.
        // Let's try element.scrollIntoView first as it's standard.
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-2 left-1/2 z-50 -translate-x-1/2 md:w-[calc(100%-1rem)] md:max-w-5xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          scrolled
            ? 'rounded-full border border-white/20 dark:border-gray-700/30 bg-white/10 dark:bg-gray-900/20 backdrop-blur-md shadow-lg'
            : 'w-full bg-transparent p-0'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* 로고 */}
            <Link to="/">
              <motion.div
                className="text-2xl font-bold text-gray-900 dark:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Portfolio
              </motion.div>
            </Link>

            {/* 데스크톱 네비게이션 */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <Link 
                  key={item.name} 
                  to={item.href}
                  onClick={(e) => handleScrollToSection(e, item.href)}
                >
                  <motion.div
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              {/* 다크모드 토글 */}
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="테마 전환"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isDark ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isDark ? (
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  )}
                </motion.div>
              </motion.button>

              {/* 모바일 메뉴 버튼 */}
              <div className="md:hidden relative">
                <motion.button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="메뉴 열기"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5 text-gray-900 dark:text-white" />
                  ) : (
                    <Menu className="w-5 h-5 text-gray-900 dark:text-white" />
                  )}
                </motion.button>

                {/* 모바일 드롭다운 메뉴 */}
                <AnimatePresence>
                  {isMobileMenuOpen && (
                    <motion.div
                      className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <nav className="py-2">
                        {navItems.map((item, index) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={(e) => handleScrollToSection(e, item.href)}
                          >
                            <motion.div
                              className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              {item.name}
                            </motion.div>
                          </Link>
                        ))}
                      </nav>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  )
}
