import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import ScrollProgress from './components/ScrollProgress'
import PageNavigation from './components/PageNavigation'
import ScrollToTop from './components/ScrollToTop'
import SEO from './components/SEO'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const ProjectPage = lazy(() => import('./pages/ProjectPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

/**
 * Loading Spinner Component
 */
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
    <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
  </div>
)

/**
 * 메인 App 컴포넌트
 * 전체 페이지 레이아웃과 섹션 구성
 */
function AppContent() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <SEO />
      
      {/* 스크롤 진행바 */}
      <ScrollProgress />

      {/* 페이지 네비게이션 - 홈에서만 표시 */}
      {isHome && <PageNavigation />}

      {/* 헤더/네비게이션 */}
      <Header />

      {/* 메인 콘텐츠 */}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      {/* Scroll To Top Button */}
      <ScrollToTop />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  )
}

export default App
