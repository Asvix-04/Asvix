import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon, Menu, X } from 'lucide-react'
import BrandLogo from './BrandLogo'

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { label: 'Work', href: '/#work' },
    { label: 'Services', href: '/#services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? dark
            ? 'glass-dark border-white/5'
            : 'glass-light border-black/5 shadow-sm'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center" aria-label="Asvix Home">
          <BrandLogo sizeClass="w-12 h-12" dark={dark} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-sm font-body font-medium transition-colors duration-200 ${
                dark
                  ? 'text-white/60 hover:text-white'
                  : 'text-space-900/75 hover:text-space-900'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              dark
                ? 'bg-white/10 hover:bg-white/20 text-white/70 hover:text-white'
                : 'bg-black/5 hover:bg-black/10 text-space-900/70 hover:text-space-900'
            }`}
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* CTA */}
          <Link
            to={location.pathname === '/contact' ? '/#work' : '#work'}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-space-600 to-space-500 text-white text-sm font-medium font-body hover:shadow-lg hover:shadow-space-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            View Work
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden w-10 h-10 flex items-center justify-center rounded-full ${
              dark ? 'bg-white/10 text-white' : 'bg-black/5 text-space-900'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className={`md:hidden px-4 sm:px-6 pb-6 pt-2 flex flex-col gap-4 ${dark ? 'bg-space-900/95' : 'bg-white/95'}`}>
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium ${dark ? 'text-white/70' : 'text-space-900/70'}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
