import { useRef, useEffect, useState } from 'react'
import { Zap, Globe, Star, Coffee } from 'lucide-react'

const stats = [
  { icon: Globe, label: 'Projects Shipped', value: '20+', desc: 'across 6 countries' },
  { icon: Star, label: 'Client Satisfaction', value: '98%', desc: 'average rating' },
  { icon: Zap, label: 'Avg. Load Time', value: '<1s', desc: 'LCP performance' },
  { icon: Coffee, label: 'Cups of Coffee', value: '∞', desc: 'and counting' },
]

const services = [
  'Landing Pages', 'SaaS Platforms', 'AI Integrations', 'Mobile Apps',
  'Design Systems', 'API Development', 'E-Commerce', 'Web3 Products',
]

export default function Stats({ dark }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="services" className="py-20 md:py-24 px-4 sm:px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Stats strip */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border mb-16 md:mb-24 ${dark ? 'border-white/8 bg-white/5' : 'border-black/8 bg-black/5'}`}>
          {stats.map(({ icon: Icon, label, value, desc }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center justify-center gap-2 py-7 sm:py-8 md:py-10 px-3 sm:px-4 md:px-6 text-center transition-all duration-700 ${dark ? 'bg-space-900 hover:bg-space-800' : 'bg-white hover:bg-gray-50'} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <Icon size={20} className={dark ? 'text-azure-400' : 'text-azure-600'} />
              <span className={`font-display font-bold text-2xl sm:text-3xl md:text-4xl ${dark ? 'text-white' : 'text-space-900'}`}>{value}</span>
              <span className={`font-body text-sm font-medium ${dark ? 'text-white/70' : 'text-space-900/70'}`}>{label}</span>
              <span className={`font-body text-xs ${dark ? 'text-white/30' : 'text-space-900/30'}`}>{desc}</span>
            </div>
          ))}
        </div>

        {/* Services Marquee */}
        <div className={`transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <p className={`text-center text-xs font-body font-medium tracking-widest uppercase mb-8 ${dark ? 'text-white/25' : 'text-space-900/25'}`}>
            What we build
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {services.map((s, i) => (
              <span
                key={s}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-body text-xs sm:text-sm font-medium border transition-all duration-300 hover:-translate-y-0.5 cursor-default ${
                  dark
                    ? 'border-white/10 text-white/50 hover:border-azure-500/40 hover:text-azure-400'
                    : 'border-black/10 text-space-900/50 hover:border-azure-500/40 hover:text-azure-600'
                }`}
                style={{ transitionDelay: `${i * 0.04}s` }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className={`mt-16 md:mt-24 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-16 text-center relative overflow-hidden transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${dark ? 'bg-space-800 border border-white/8' : 'bg-gray-50 border border-black/8'}`}
          style={{ transitionDelay: '0.3s' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% -20%, rgba(59,130,246,0.12) 0%, transparent 60%)' }} />
          <p className={`text-xs font-body font-medium tracking-widest uppercase mb-4 ${dark ? 'text-azure-400/70' : 'text-azure-600'}`}>
            Ready to build?
          </p>
          <h3 className={`font-display font-bold mb-4 ${dark ? 'text-white' : 'text-space-900'}`}
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            Let's make something<br />
            <span className="text-gradient bg-gradient-to-r from-azure-400 to-indigo-400">unforgettable.</span>
          </h3>
          <p className={`max-w-lg mx-auto font-body text-sm sm:text-base mb-8 ${dark ? 'text-white/45' : 'text-space-900/45'}`}>
            Whether it's a SaaS product, a marketing site, or a full-scale web app — we'll build it with craft and obsession.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-space-600 to-space-500 text-white font-body font-semibold text-sm hover:shadow-xl hover:shadow-space-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            Contact Us →
          </a>
        </div>
      </div>
    </section>
  )
}
