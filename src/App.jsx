import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Stats from './components/Stats'
import Footer from './components/Footer'
import Contact from './components/Contact'
import About from './components/About'

export default function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('asvix-theme')
    return saved !== null ? JSON.parse(saved) : true
  })

  useEffect(() => {
    localStorage.setItem('asvix-theme', JSON.stringify(dark))
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

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
    <div className={`min-h-screen transition-colors duration-500 ${dark ? 'bg-space-900 text-white' : 'bg-white text-space-900'}`}>
      <Navbar dark={dark} setDark={setDark} />
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <main>
                <Hero dark={dark} />
                <Projects dark={dark} />
                <Stats dark={dark} />
              </main>
              <Footer dark={dark} />
            </>
          )}
        />
        <Route path="/contact" element={<Contact dark={dark} />} />
        <Route path="/about" element={<About dark={dark} />} />
      </Routes>
    </div>
  )
}
