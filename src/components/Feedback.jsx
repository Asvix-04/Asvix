import { Link } from 'react-router-dom'
import { ArrowLeft, Quote, Star } from 'lucide-react'
import Footer from './Footer'

const feedbackItems = [
  {
    name: 'Ananya Mehta',
    role: 'Founder, wellness platform',
    rating: 4.5,
    quote: 'Asvix understood the product vision quickly and turned it into a polished, confident web experience. The team kept the build practical, fast, and very easy to review at each stage.',
  },
  {
    name: 'Rohan Kapoor',
    role: 'SaaS product lead',
    rating: 4.4,
    quote: 'The project felt organized from day one. Asvix balanced design details, AI workflow thinking, and clean engineering without losing momentum during delivery.',
  },
  {
    name: 'Priya Nair',
    role: 'Operations consultant',
    rating: 4.2,
    quote: 'Their work gave our product a sharper identity and a much smoother user journey. We especially liked how they handled responsive behavior and small interaction details.',
  },
  {
    name: 'Karan Malhotra',
    role: 'Startup advisor',
    rating: 4.3,
    quote: 'Asvix brings strong project dynamics: clear communication, thoughtful UI decisions, and an ability to make complex product ideas feel simple on screen.',
  },
]

function Rating({ value, dark }) {
  return (
    <div className="flex items-center gap-2" aria-label={`${value} out of 5 stars`}>
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => {
          const active = index < Math.floor(value)
          return (
            <Star
              key={index}
              size={16}
              className={active ? 'text-amber-400' : dark ? 'text-white/20' : 'text-space-900/20'}
              fill={active ? 'currentColor' : 'none'}
            />
          )
        })}
      </div>
      <span className={`font-body text-sm font-semibold ${dark ? 'text-white/70' : 'text-space-900/70'}`}>
        {value.toFixed(1)} / 5
      </span>
    </div>
  )
}

export default function Feedback({ dark }) {
  return (
    <>
      <main className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 md:px-10 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: dark
              ? 'linear-gradient(180deg, rgba(59,130,246,0.12) 0%, rgba(6,13,31,0) 42%)'
              : 'linear-gradient(180deg, rgba(219,234,254,0.75) 0%, rgba(255,255,255,0) 44%)',
          }}
        />

        <section className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className={`text-xs font-body font-medium tracking-widest uppercase mb-4 ${dark ? 'text-azure-400/80' : 'text-azure-600'}`}>
              Feedback
            </p>
            <h1 className={`font-display font-bold leading-tight text-4xl md:text-5xl mb-5 ${dark ? 'text-white' : 'text-space-900'}`}>
              What people say about Asvix.
            </h1>
            <p className={`font-body text-base sm:text-lg leading-relaxed ${dark ? 'text-white/[0.58]' : 'text-space-900/[0.68]'}`}>
              A few notes from teams and founders who value thoughtful product strategy, polished interfaces, and dependable delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {feedbackItems.map((item) => (
              <article
                key={item.name}
                className={`rounded-2xl border p-6 sm:p-7 transition-all duration-300 ${
                  dark
                    ? 'bg-space-800/70 border-white/[0.08] hover:bg-space-700/80'
                    : 'bg-white border-black/[0.15] shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h2 className={`font-display text-lg font-semibold ${dark ? 'text-white' : 'text-space-900'}`}>
                      {item.name}
                    </h2>
                    <p className={`font-body text-sm mt-1 ${dark ? 'text-white/[0.42]' : 'text-space-900/[0.55]'}`}>
                      {item.role}
                    </p>
                  </div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${dark ? 'bg-azure-400/10 text-azure-300' : 'bg-azure-50 text-azure-600'}`}>
                    <Quote size={18} />
                  </div>
                </div>
                <Rating value={item.rating} dark={dark} />
                <p className={`font-body text-sm sm:text-base leading-relaxed mt-5 ${dark ? 'text-white/60' : 'text-space-900/[0.66]'}`}>
                  {item.quote}
                </p>
              </article>
            ))}
          </div>

          <Link
            to="/"
            className={`inline-flex items-center gap-2 mt-10 text-sm font-body font-medium transition-colors ${dark ? 'text-white/70 hover:text-white' : 'text-space-900/70 hover:text-space-900'}`}
          >
            <ArrowLeft size={14} />
            Back to home
          </Link>
        </section>
      </main>
      <Footer dark={dark} />
    </>
  )
}
