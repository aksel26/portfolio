import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import ScrollProgress from './components/ScrollProgress'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

/**
 * 메인 App 컴포넌트
 * 전체 페이지 레이아웃과 섹션 구성
 */
function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* 스크롤 진행바 */}
        <ScrollProgress />

        {/* 헤더/네비게이션 */}
        <Header />

        {/* 메인 콘텐츠 */}
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>

        {/* 푸터 */}
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
