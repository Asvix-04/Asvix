import { useEffect, useRef } from 'react'

export default function About() {
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
    <section id="about" className="relative z-10 py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="w-full h-px dark:bg-gradient-to-r dark:from-transparent dark:via-white/10 dark:to-transparent bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-14 md:mb-20" />

        <div
          ref={ref}
          className="reveal relative overflow-hidden rounded-2xl md:rounded-3xl dark:bg-space-800 bg-gray-50 border dark:border-white/8 border-gray-200 p-6 sm:p-8 md:p-16"
        >
          {/* Background glow for dark mode */}
          <div className="absolute inset-0 pointer-events-none dark:opacity-100 opacity-0 transition-opacity">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-cyan-600/8 blur-3xl" />
          </div>

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 dark:bg-white/5 bg-white border dark:border-white/10 border-gray-200">
                <span className="text-xs font-body font-medium tracking-widest uppercase dark:text-gray-400 text-gray-500">
                  About Asvix
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold dark:text-white text-gray-900 mb-4 leading-tight">
                We Turn Visions Into
                <br />
                <span className="dark:text-gradient-blue text-gradient-blue-light">Digital Reality.</span>
              </h2>
              <p className="font-body text-sm sm:text-base dark:text-gray-400 text-gray-500 leading-relaxed mb-4">
                Asvix is a SaaS web studio founded by builders who care obsessively about craft.
                We don't ship generic — every product we touch gets a unique, purpose-built experience
                that converts visitors and earns trust.
              </p>
              <p className="font-body text-sm sm:text-base dark:text-gray-400 text-gray-500 leading-relaxed">
                Whether it's a full-stack AI platform or a blazing-fast marketing frontend,
                we bring the same intensity: clean architecture, stunning visuals, and pixel-level attention to detail.
              </p>
            </div>

            {/* Services list */}
            <div className="flex-shrink-0 w-full lg:w-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: '🌐', title: 'Web Development' },
                  { icon: '📱', title: 'Mobile Apps' },
                  { icon: '🤖', title: 'AI Integration' },
                  { icon: '⚡', title: 'Performance Optimization' },
                  { icon: '🎨', title: 'UI / UX Design' },
                  { icon: '☁️', title: 'SaaS Architecture' },
                ].map((s) => (
                  <div
                    key={s.title}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl dark:bg-white/4 bg-white dark:border-white/8 border border-gray-200 hover:dark:bg-white/7 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-base">{s.icon}</span>
                    <span className="font-body text-sm font-medium dark:text-gray-300 text-gray-700">{s.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
