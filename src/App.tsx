import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import ScrollProgress from './components/ScrollProgress'
import PageNavigation from './components/PageNavigation'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import ProjectPage from './pages/ProjectPage'
import ScrollToTop from './components/ScrollToTop'

/**
 * 메인 App 컴포넌트
 * 전체 페이지 레이아웃과 섹션 구성
 */
function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          {/* 스크롤 진행바 */}
          <ScrollProgress />

          {/* 페이지 네비게이션 */}
          <PageNavigation />

          {/* 헤더/네비게이션 */}
          <Header />

          {/* 메인 콘텐츠 */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/project/:id" element={<ProjectPage />} />
          </Routes>

          {/* Scroll To Top Button */}
          <ScrollToTop />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
