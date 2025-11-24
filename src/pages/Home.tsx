import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import Contact from '../sections/Contact'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '')
      const element = document.getElementById(targetId)
      const mainElement = document.querySelector('main')

      if (element && mainElement) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [location])

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}
