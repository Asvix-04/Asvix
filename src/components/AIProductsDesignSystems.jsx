import { Link } from 'react-router-dom'
import { ArrowLeft, Bot, CheckCircle2, FileText, Layers, MessageSquare, Palette, ShieldCheck, Zap } from 'lucide-react'
import Footer from './Footer'

const aiProducts = [
  {
    icon: MessageSquare,
    title: 'AI Chatbots & Assistants',
    accent: '#14B8A6',
    points: [
      'Conversational assistants for support, onboarding, wellness guidance, and internal product workflows.',
      'Domain-aware responses with clear guardrails, fallback paths, and handoff points when human review is needed.',
      'Interfaces designed around fast prompts, readable answers, source context, and trust-building microcopy.',
    ],
  },
  {
    icon: Bot,
    title: 'RAG Knowledge Products',
    accent: '#6366F1',
    points: [
      'Academic, operational, or company knowledge assistants built around search, retrieval, and structured answers.',
      'Useful for projects like DigiLab where users need a guided AI layer over documents, dashboards, and learning content.',
      'Built with clean navigation patterns, citations or context blocks, and role-based experiences for different users.',
    ],
  },
  {
    icon: FileText,
    title: 'AI Workflow Automation',
    accent: '#3B82F6',
    points: [
      'Document summarizers, OCR flows, reminder systems, and content generation tools that reduce repetitive work.',
      'Relevant to Medibot-style products where prescriptions, reminders, and health notes need simpler user journeys.',
      'Designed as practical product features rather than loose demos, with states for loading, review, errors, and edits.',
    ],
  },
]

const principles = [
  {
    icon: Layers,
    title: 'Token-led foundations',
    text: 'Color, spacing, type, radius, shadow, and motion decisions are kept consistent so products scale without visual drift.',
  },
  {
    icon: Palette,
    title: 'Domain-specific visual systems',
    text: 'Healthcare, academic, SaaS, and automation products each get a palette and tone that fits their users and trust needs.',
  },
  {
    icon: ShieldCheck,
    title: 'Accessible interaction states',
    text: 'Buttons, cards, forms, and AI responses are designed with clear contrast, hover states, focus behavior, and readable hierarchy.',
  },
  {
    icon: Zap,
    title: 'Responsive performance',
    text: 'Components are planned for fast loading, stable layouts, and smooth behavior across mobile, tablet, and desktop.',
  },
]

export default function AIProductsDesignSystems({ dark }) {
  return (
    <>
      <main className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 md:px-10 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: dark
              ? 'linear-gradient(180deg, rgba(99,102,241,0.12) 0%, rgba(6,13,31,0) 46%)'
              : 'linear-gradient(180deg, rgba(238,242,255,0.9) 0%, rgba(255,255,255,0) 48%)',
          }}
        />

        <section className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className={`text-xs font-body font-medium tracking-widest uppercase mb-4 ${dark ? 'text-azure-400/80' : 'text-azure-600'}`}>
              AI Products & Design Systems
            </p>
            <h1 className={`font-display font-bold leading-tight text-4xl md:text-5xl mb-5 ${dark ? 'text-white' : 'text-space-900'}`}>
              Intelligent products with design systems underneath.
            </h1>
            <p className={`font-body text-base sm:text-lg leading-relaxed ${dark ? 'text-white/[0.58]' : 'text-space-900/[0.68]'}`}>
              Asvix builds AI product experiences that feel clear, useful, and polished, then supports them with repeatable design foundations.
            </p>
          </div>

          <div className="mb-14 md:mb-16">
            <div className="flex items-end justify-between gap-6 mb-6">
              <div>
                <p className={`font-body text-xs font-medium tracking-widest uppercase mb-2 ${dark ? 'text-white/30' : 'text-space-900/[0.45]'}`}>
                  Product types
                </p>
                <h2 className={`font-display text-2xl sm:text-3xl font-bold ${dark ? 'text-white' : 'text-space-900'}`}>
                  AI products we build
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
              {aiProducts.map((product) => (
                <article
                  key={product.title}
                  className={`rounded-2xl border p-6 sm:p-7 ${
                    dark
                      ? 'bg-space-800/70 border-white/[0.08]'
                      : 'bg-white border-black/[0.15] shadow-sm'
                  }`}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: `${product.accent}18`, color: product.accent }}>
                    <product.icon size={21} />
                  </div>
                  <h3 className={`font-display text-xl font-semibold mb-4 ${dark ? 'text-white' : 'text-space-900'}`}>
                    {product.title}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {product.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: product.accent }} />
                        <span className={`font-body text-sm leading-relaxed ${dark ? 'text-white/[0.58]' : 'text-space-900/[0.64]'}`}>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div>
            <p className={`font-body text-xs font-medium tracking-widest uppercase mb-2 ${dark ? 'text-white/30' : 'text-space-900/[0.45]'}`}>
              Design systems
            </p>
            <h2 className={`font-display text-2xl sm:text-3xl font-bold mb-6 ${dark ? 'text-white' : 'text-space-900'}`}>
              Principles Asvix follows
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {principles.map((principle) => (
                <article
                  key={principle.title}
                  className={`rounded-2xl border p-6 ${
                    dark
                      ? 'bg-space-800/70 border-white/[0.08] hover:bg-space-700/80'
                      : 'bg-white border-black/[0.15] shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${dark ? 'bg-azure-400/10 text-azure-300' : 'bg-azure-50 text-azure-600'}`}>
                    <principle.icon size={19} />
                  </div>
                  <h3 className={`font-display text-lg font-semibold mb-2 ${dark ? 'text-white' : 'text-space-900'}`}>
                    {principle.title}
                  </h3>
                  <p className={`font-body text-sm leading-relaxed ${dark ? 'text-white/[0.55]' : 'text-space-900/[0.64]'}`}>
                    {principle.text}
                  </p>
                </article>
              ))}
            </div>
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
