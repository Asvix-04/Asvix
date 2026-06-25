import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, MonitorSmartphone, Palette, Type } from 'lucide-react'
import Footer from './Footer'

const templates = [
  {
    title: 'Medibot AI',
    eyebrow: 'Health-tech landing page',
    image: '/projects/medibot-ai-2.png',
    gallery: [
      '/Screenshot 2026-06-25 225851.png',
      '/Screenshot 2026-06-25 225908.png',
      '/Screenshot 2026-06-25 230326.png',
    ],
    accent: '#14B8A6',
    points: [
      'Uses a bold, friendly display headline with generous line-height and a clear hierarchy from logo to hero copy to CTA.',
      'Pairs soft mint surfaces, teal-blue gradients, and rounded feature cards to make tracking, reminders, pricing, and AI chat feel calm.',
      'The mobile mockup, pricing panels, and feature grid show a responsive system built around large tap targets and clear card spacing.',
    ],
  },
  {
    title: 'DigiLab',
    eyebrow: 'Academic AI landing page',
    image: '/projects/digilab.svg',
    gallery: [
      '/Screenshot 2026-06-25 230109.png',
      '/Screenshot 2026-06-25 230123.png',
      '/Screenshot 2026-06-25 230145.png',
    ],
    accent: '#6366F1',
    points: [
      'Builds a direct SaaS-style hero with strong centered typography, a monospace product badge, and a clear academic intelligence message.',
      'Uses an indigo-led color system with light classroom cards, crisp dividers, and high-contrast dashboards for data-heavy sections.',
      'The feature panels and dark analytics view show how the landing page can shift from editorial explanation to product proof.',
    ],
  },
]

const designSignals = [
  { icon: Type, label: 'Typography', text: 'Large display headings, compact badges, and readable body copy establish quick visual hierarchy.' },
  { icon: Palette, label: 'Color', text: 'Each template uses a limited accent palette that matches the product domain and supports CTA clarity.' },
  { icon: MonitorSmartphone, label: 'Responsiveness', text: 'Hero spacing, navigation density, and button sizing are planned to adapt cleanly across screens.' },
]

export default function LandingPages({ dark }) {
  return (
    <>
      <main className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 md:px-10 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: dark
              ? 'linear-gradient(180deg, rgba(20,184,166,0.1) 0%, rgba(6,13,31,0) 45%)'
              : 'linear-gradient(180deg, rgba(236,253,245,0.85) 0%, rgba(255,255,255,0) 46%)',
          }}
        />

        <section className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-end mb-12 md:mb-16">
            <div>
              <p className={`text-xs font-body font-medium tracking-widest uppercase mb-4 ${dark ? 'text-azure-400/80' : 'text-azure-600'}`}>
                Landing Pages
              </p>
              <h1 className={`font-display font-bold leading-tight text-4xl md:text-5xl mb-5 ${dark ? 'text-white' : 'text-space-900'}`}>
                Landing page templates shaped from real product screens.
              </h1>
              <p className={`font-body text-base sm:text-lg leading-relaxed max-w-2xl ${dark ? 'text-white/[0.58]' : 'text-space-900/[0.68]'}`}>
                A showcase of landing page directions inspired by Medibot and DigiLab, with notes on visual structure, typography, color, and responsive behavior.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              {designSignals.map(({ icon: Icon, label, text }) => (
                <div
                  key={label}
                  className={`rounded-2xl border p-4 ${
                    dark
                      ? 'bg-space-800/70 border-white/[0.08]'
                      : 'bg-white border-black/[0.15] shadow-sm'
                  }`}
                >
                  <Icon size={18} className={dark ? 'text-azure-300' : 'text-azure-600'} />
                  <h2 className={`font-display text-sm font-semibold mt-3 mb-2 ${dark ? 'text-white' : 'text-space-900'}`}>
                    {label}
                  </h2>
                  <p className={`font-body text-xs leading-relaxed ${dark ? 'text-white/[0.48]' : 'text-space-900/[0.58]'}`}>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8 md:gap-10">
            {templates.map((template, index) => (
              <article
                key={template.title}
                className={`grid lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl border ${
                  dark
                    ? 'bg-space-800/70 border-white/[0.08]'
                    : 'bg-white border-black/[0.15] shadow-sm'
                }`}
              >
                <div className={`p-4 sm:p-5 ${dark ? 'bg-space-900/70' : 'bg-gray-50'}`}>
                  <div className={`rounded-xl overflow-hidden border ${dark ? 'border-white/[0.06]' : 'border-black/[0.12]'}`}>
                    <img
                      src={template.image}
                      alt={`${template.title} landing page screenshot`}
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
                    {template.gallery.map((src, shotIndex) => (
                      <div
                        key={src}
                        className={`rounded-xl overflow-hidden border ${dark ? 'border-white/[0.06]' : 'border-black/[0.12]'}`}
                      >
                        <img
                          src={src}
                          alt={`${template.title} supporting landing page screenshot ${shotIndex + 1}`}
                          className="w-full aspect-video object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`p-6 sm:p-8 lg:p-10 ${index % 2 === 1 ? 'lg:order-first' : ''}`}>
                  <p className="font-body text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: template.accent }}>
                    {template.eyebrow}
                  </p>
                  <h2 className={`font-display text-2xl sm:text-3xl font-bold mb-5 ${dark ? 'text-white' : 'text-space-900'}`}>
                    {template.title}
                  </h2>
                  <ul className="flex flex-col gap-4">
                    {template.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle2 size={17} className="mt-0.5 flex-shrink-0" style={{ color: template.accent }} />
                        <span className={`font-body text-sm sm:text-base leading-relaxed ${dark ? 'text-white/60' : 'text-space-900/[0.66]'}`}>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
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
