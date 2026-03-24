import { useEffect, useRef } from 'react'
import { ArrowDown } from 'lucide-react'

export default function Hero({ dark }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    const stars = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 120; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.3,
        a: Math.random(),
        speed: Math.random() * 0.003 + 0.001,
        phase: Math.random() * Math.PI * 2,
      })
    }

    const draw = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach((s) => {
        const pulse = 0.3 + 0.7 * Math.abs(Math.sin(t * s.speed + s.phase))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = dark
          ? `rgba(147, 197, 253, ${pulse * 0.6})`
          : `rgba(59, 130, 246, ${pulse * 0.3})`
        ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [dark])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-10 overflow-hidden">
      {/* Canvas stars */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Dark mode glows */}
      {dark && (
        <>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-space-500/20 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-azure-500/8 blur-[100px] pointer-events-none" />
        </>
      )}

      {/* Light mode subtle gradient + 3D orb */}
      {!dark && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-sky-50/80 via-white to-white pointer-events-none" />
          <div className="absolute right-[-8rem] top-[20%] w-[20rem] h-[20rem] md:w-[26rem] md:h-[26rem] pointer-events-none animate-float"
            style={{ perspective: '1200px' }}>
            <div className="w-full h-full rounded-[28%] border border-space-500/15"
              style={{
                transform: 'rotateX(58deg) rotateY(-26deg) rotateZ(24deg)',
                background: 'radial-gradient(circle at 25% 20%, rgba(147,197,253,0.55) 0%, rgba(59,130,246,0.28) 35%, rgba(30,49,99,0.2) 62%, rgba(255,255,255,0.04) 100%)',
                boxShadow: '0 35px 90px rgba(30,49,99,0.25), inset -28px -28px 70px rgba(30,49,99,0.18), inset 24px 24px 54px rgba(255,255,255,0.6)',
              }}
            />
          </div>
        </>
      )}

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-5 sm:mb-7 px-3 sm:px-4 py-1.5 rounded-full border text-[10px] sm:text-xs font-medium font-body tracking-[0.2em] uppercase animate-fade-in"
          style={{
            borderColor: dark ? 'rgba(96,165,250,0.3)' : 'rgba(37,99,235,0.2)',
            color: dark ? 'rgba(147,197,253,0.9)' : '#2563EB',
            background: dark ? 'rgba(59,130,246,0.08)' : 'rgba(219,234,254,0.6)',
          }}>
          <span className="w-1.5 h-1.5 rounded-full bg-azure-500 animate-pulse" />
          Software as a Service
        </div>

        {/* Headline */}
        <h1 className="font-display font-extrabold leading-[0.95] mb-5 sm:mb-6 animate-fade-up"
          style={{ fontSize: 'clamp(2.1rem, 6.5vw, 4.9rem)' }}>
          <span className={dark ? 'text-white' : 'text-space-900'}>We craft</span>
          <br />
          <span className="text-gradient bg-gradient-to-r from-azure-400 via-blue-400 to-indigo-400">
            digital experiences.
          </span>
        </h1>

        {/* Sub */}
        <p className={`max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-body font-light leading-relaxed mb-8 sm:mb-10 animate-fade-up stagger-2 ${dark ? 'text-white/55' : 'text-space-900/55'}`}>
          Asvix crafts high-performance, visually stunning digital products for startups and enterprises — from landing pages to full-scale SaaS platforms.
        </p>

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up stagger-3">
          <a
            href="#work"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-space-600 to-space-500 text-white font-body font-semibold text-sm hover:shadow-xl hover:shadow-space-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            See Our Work
          </a>
          <a
            href="#services"
            className={`px-8 py-3.5 rounded-full border font-body font-medium text-sm transition-all duration-300 hover:-translate-y-1 ${
              dark
                ? 'border-white/15 text-white/70 hover:border-white/30 hover:text-white'
                : 'border-space-900/15 text-space-900/70 hover:border-space-900/30 hover:text-space-900'
            }`}
          >
            Our Services
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-12 sm:mt-16 md:mt-20 flex flex-col items-center gap-2 animate-fade-in stagger-5">
          <span className={`text-xs font-body tracking-widest uppercase ${dark ? 'text-white/25' : 'text-space-900/25'}`}>scroll</span>
          <ArrowDown size={14} className={`animate-bounce ${dark ? 'text-white/25' : 'text-space-900/25'}`} />
        </div>
      </div>
    </section>
  )
}
