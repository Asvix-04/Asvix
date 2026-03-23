import { useEffect, useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)

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

  return (
    <section id="contact" className="relative z-10 py-24 px-6">
      <div className="max-w-3xl mx-auto text-center" ref={ref}>
        <div className="reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-8 border dark:border-blue-500/20 border-blue-200 dark:bg-blue-500/8 bg-blue-50">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-body font-medium tracking-widest uppercase dark:text-blue-400 text-blue-600">
              Open for Projects
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold dark:text-white text-gray-900 mb-5 leading-tight">
            Got an Idea?
            <br />
            <span className="dark:text-gradient-blue text-gradient-blue-light">Let's Build It.</span>
          </h2>

          <p className="font-body text-lg dark:text-gray-400 text-gray-500 mb-10 max-w-lg mx-auto leading-relaxed">
            We partner with startups, founders, and teams who want a website that doesn't just look good — 
            it performs, converts, and stands out.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="mailto:hello@asvix.com"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-body font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
            >
              Say Hello
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl dark:bg-white/5 bg-gray-100 dark:hover:bg-white/8 hover:bg-gray-200 dark:text-white text-gray-800 font-body font-semibold text-sm transition-all duration-200 dark:border-white/8 border border-gray-200 hover:-translate-y-0.5"
            >
              See More Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
