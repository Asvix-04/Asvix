import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Stats from './components/Stats'
import Footer from './components/Footer'
import Contact from './components/Contact'

export default function App() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

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
      </Routes>
    </div>
  )
}
