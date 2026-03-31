import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Target, Sparkles, Rocket, Handshake, Globe, Smartphone, Bot, Zap, Palette, Cloud, Code, PenTool, Cpu } from 'lucide-react'
import Footer from './Footer'

export default function About({ dark }) {
  const ref = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const values = [
    { icon: Target, title: 'Purpose-Driven', desc: 'Every line of code and every pixel serves a clear goal — helping our clients grow.' },
    { icon: Sparkles, title: 'Craft Over Convention', desc: 'We don\'t use templates. Each project gets a bespoke experience built from scratch.' },
    { icon: Rocket, title: 'Ship Fast, Ship Right', desc: 'Speed matters, but never at the cost of quality. We move fast with precision.' },
    { icon: Handshake, title: 'True Partnership', desc: 'We embed with your team, understand your vision, and treat your goals as our own.' },
  ]

  const team = [
    { icon: Code, title: 'Engineers', desc: 'Full-stack developers who build scalable, production-ready systems.' },
    { icon: PenTool, title: 'Designers', desc: 'UI/UX specialists obsessed with pixel-perfect, conversion-focused design.' },
    { icon: Cpu, title: 'AI Specialists', desc: 'Machine learning engineers who integrate intelligent features into products.' },
  ]

  return (
    <>
      <main className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 md:px-10 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: dark ? 'radial-gradient(ellipse at 30% 0%, rgba(59,130,246,0.15) 0%, transparent 50%)' : 'radial-gradient(ellipse at 30% 0%, rgba(59,130,246,0.08) 0%, transparent 50%)' }} />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header */}
          <div className="mb-16 md:mb-20">
            <p className={`text-xs font-body font-medium tracking-widest uppercase mb-4 ${dark ? 'text-azure-400/80' : 'text-azure-600'}`}>
              About Asvix
            </p>
            <h1 className={`font-display font-bold leading-tight mb-6 ${dark ? 'text-white' : 'text-space-900'}`} style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)' }}>
              We build digital products<br />
              <span className="bg-gradient-to-r from-azure-400 to-azure-600 bg-clip-text text-transparent">that people love.</span>
            </h1>
            <p className={`font-body text-base sm:text-lg leading-relaxed max-w-2xl ${dark ? 'text-white/60' : 'text-space-900/70'}`}>
              Asvix is a SaaS web studio founded by builders who care obsessively about craft.
              We don't ship generic — every product we touch gets a unique, purpose-built experience
              that converts visitors and earns trust.
            </p>
          </div>

          {/* Mission */}
          <div ref={ref} className={`reveal rounded-2xl md:rounded-3xl border p-6 sm:p-8 md:p-12 mb-16 md:mb-20 relative overflow-hidden ${dark ? 'bg-space-800 border-white/8' : 'bg-gray-50 border-gray-200'}`}>
            {dark && (
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl" />
                <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-cyan-600/8 blur-3xl" />
              </div>
            )}
            <div className="relative">
              <h2 className={`font-display font-bold text-2xl sm:text-3xl mb-4 ${dark ? 'text-white' : 'text-space-900'}`}>
                Our Mission
              </h2>
              <p className={`font-body text-sm sm:text-base leading-relaxed max-w-3xl ${dark ? 'text-white/55' : 'text-space-900/65'}`}>
                Whether it's a full-stack AI platform or a blazing-fast marketing frontend,
                we bring the same intensity: clean architecture, stunning visuals, and pixel-level attention to detail.
                We exist to turn ambitious visions into digital reality — products that don't just work, but inspire.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16 md:mb-20">
            <h2 className={`font-display font-bold text-2xl sm:text-3xl mb-8 ${dark ? 'text-white' : 'text-space-900'}`}>
              What We Stand For
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className={`rounded-2xl p-6 border transition-colors ${dark ? 'bg-space-800 border-white/8 hover:bg-space-700' : 'bg-white border-gray-200 hover:bg-gray-50'}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${dark ? 'bg-azure-400/10' : 'bg-azure-500/10'}`}>
                    <v.icon size={20} className={dark ? 'text-azure-400' : 'text-azure-600'} />
                  </div>
                  <h3 className={`font-display font-semibold text-lg mb-2 ${dark ? 'text-white' : 'text-space-900'}`}>{v.title}</h3>
                  <p className={`font-body text-sm leading-relaxed ${dark ? 'text-white/50' : 'text-space-900/65'}`}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="mb-16 md:mb-20">
            <h2 className={`font-display font-bold text-2xl sm:text-3xl mb-4 ${dark ? 'text-white' : 'text-space-900'}`}>
              What We Build
            </h2>
            <p className={`font-body text-sm sm:text-base mb-8 ${dark ? 'text-white/50' : 'text-space-900/65'}`}>
              From concept to launch, we handle the full stack.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { icon: Globe, title: 'Web Development' },
                { icon: Smartphone, title: 'Mobile Apps' },
                { icon: Bot, title: 'AI Integration' },
                { icon: Zap, title: 'Performance Optimization' },
                { icon: Palette, title: 'UI / UX Design' },
                { icon: Cloud, title: 'SaaS Architecture' },
              ].map((s) => (
                <div
                  key={s.title}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border transition-colors ${dark ? 'bg-white/4 border-white/8 hover:bg-white/7' : 'bg-white border-gray-200 hover:bg-gray-50'}`}
                >
                  <s.icon size={18} className={dark ? 'text-azure-400' : 'text-azure-600'} />
                  <span className={`font-body text-sm font-medium ${dark ? 'text-gray-300' : 'text-gray-700'}`}>{s.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-16 md:mb-20">
            <h2 className={`font-display font-bold text-2xl sm:text-3xl mb-8 ${dark ? 'text-white' : 'text-space-900'}`}>
              Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {team.map((t) => (
                <div key={t.title} className={`rounded-2xl p-6 border text-center transition-colors ${dark ? 'bg-space-800 border-white/8 hover:bg-space-700' : 'bg-white border-gray-200 hover:bg-gray-50'}`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${dark ? 'bg-azure-400/10' : 'bg-azure-500/10'}`}>
                    <t.icon size={24} className={dark ? 'text-azure-400' : 'text-azure-600'} />
                  </div>
                  <h3 className={`font-display font-semibold text-lg mb-2 ${dark ? 'text-white' : 'text-space-900'}`}>{t.title}</h3>
                  <p className={`font-body text-sm leading-relaxed ${dark ? 'text-white/50' : 'text-space-900/65'}`}>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className={`rounded-2xl md:rounded-3xl p-8 md:p-12 text-center border ${dark ? 'bg-space-800 border-white/8' : 'bg-gray-50 border-gray-200'}`}>
            <h2 className={`font-display font-bold text-2xl sm:text-3xl mb-4 ${dark ? 'text-white' : 'text-space-900'}`}>
              Ready to build something great?
            </h2>
            <p className={`font-body text-sm sm:text-base mb-6 ${dark ? 'text-white/50' : 'text-space-900/65'}`}>
              Let's talk about your next project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-space-600 to-space-500 text-white text-sm font-medium font-body hover:shadow-lg hover:shadow-space-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get in Touch →
            </Link>
          </div>

          <Link
            to="/"
            className={`inline-flex items-center gap-2 mt-8 text-sm font-body font-medium transition-colors ${dark ? 'text-white/70 hover:text-white' : 'text-space-900/70 hover:text-space-900'}`}
          >
            ← Back to home
          </Link>
        </div>
      </main>
      <Footer dark={dark} />
    </>
  )
}
