import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Stats from './components/Stats'
import Footer from './components/Footer'
import Contact from './components/Contact'
import About from './components/About'
import Feedback from './components/Feedback'
import LandingPages from './components/LandingPages'
import AIProductsDesignSystems from './components/AIProductsDesignSystems'

const DARK_MODE = true

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
    } else {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [pathname, hash])

  return (
    <div className="min-h-screen bg-space-900 text-white transition-colors duration-500">
      <Navbar dark={DARK_MODE} />
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <main>
                <Hero dark={DARK_MODE} />
                <Projects dark={DARK_MODE} />
                <Stats dark={DARK_MODE} />
              </main>
              <Footer dark={DARK_MODE} />
            </>
          )}
        />
        <Route path="/contact" element={<Contact dark={DARK_MODE} />} />
        <Route path="/about" element={<About dark={DARK_MODE} />} />
        <Route path="/feedback" element={<Feedback dark={DARK_MODE} />} />
        <Route path="/landing-pages" element={<LandingPages dark={DARK_MODE} />} />
        <Route path="/ai-products-design-systems" element={<AIProductsDesignSystems dark={DARK_MODE} />} />
      </Routes>
    </div>
  )
}
