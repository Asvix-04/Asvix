import { useState, useEffect, useRef } from 'react'
import { ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react'

const projects = [
  {
    id: 'medibot',
    title: 'MediBot AI',
    tagline: 'AI-Powered Health Companion',
    url: 'https://www.medibot-ai.com',
    category: 'HealthTech · SaaS',
    year: '2026',
    accentFrom: '#3B82F6',
    accentTo: '#6366F1',
    glowColor: 'rgba(99,102,241,0.15)',
    tag: 'Live',
    points: [
      'Built with Next.js App Router + TypeScript — server-side rendering for lightning-fast health dashboards',
      'AI chatbot powered by large language models for real-time, personalized medication advice and interaction warnings',
      'Multi-channel smart reminders via Email, WhatsApp & Push Notifications with customizable schedules',
      'OCR-based prescription scanner and medical document summarizer using computer vision pipelines',
      'Freemium SaaS model with tiered pricing, HIPAA-conscious data encryption, and biometric authentication',
    ],
    previewUrl: 'https://www.medibot-ai.com',
    imagePath: '/projects/medibot-ai.svg',
    mockBg: 'from-indigo-900/80 via-blue-950/80 to-space-900',
    mockLines: [
      { w: '70%', c: 'bg-blue-400/30' },
      { w: '50%', c: 'bg-indigo-400/20' },
      { w: '85%', c: 'bg-blue-300/25' },
    ],
  },
  {
    id: 'digilab',
    title: 'DigiLab',
    tagline: 'Space-Blue Product Showcase',
    url: 'https://v2fronted.netlify.app',
    category: 'SaaS · Web Platform',
    year: '2026',
    accentFrom: '#06B6D4',
    accentTo: '#3B82F6',
    glowColor: 'rgba(6,182,212,0.12)',
    tag: 'Live',
    points: [
      'Built with React + Vite, deployed on Netlify with continuous deployment and instant CDN rollouts',
      'Component-driven architecture with reusable UI primitives, design tokens, and a custom CSS system',
      'Smooth scroll-triggered animations and parallax effects delivering a cinematic browsing experience',
      'Mobile-first, fully responsive layout with optimized image delivery and < 1s Largest Contentful Paint',
      'Serves as DigiLab\'s own digital flagship, showcasing the studio\'s design philosophy and service range',
    ],
    previewUrl: 'https://v2fronted.netlify.app',
    imagePath: '/projects/digilab.svg',
    mockBg: 'from-cyan-900/80 via-blue-950/80 to-space-900',
    mockLines: [
      { w: '80%', c: 'bg-cyan-400/30' },
      { w: '55%', c: 'bg-blue-400/20' },
      { w: '75%', c: 'bg-cyan-300/25' },
    ],
  },
]

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

function BrowserMockup({ project, dark }) {
  const [imageFailed, setImageFailed] = useState(false)
  const hasImage = Boolean(project.imagePath && !imageFailed)

  return (
    <div className={`rounded-2xl overflow-hidden border ${dark ? 'border-white/8' : 'border-black/8'} shadow-2xl`}
      style={{ boxShadow: `0 40px 80px ${project.glowColor}` }}>
      {/* Browser bar */}
      <div className={`flex items-center gap-2 px-4 py-3 ${dark ? 'bg-space-800' : 'bg-gray-100'}`}>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
          <div className="w-3 h-3 rounded-full bg-green-400/70" />
        </div>
        <div className={`flex-1 mx-4 rounded-full px-3 py-1 text-xs font-body truncate ${dark ? 'bg-space-700 text-white/40' : 'bg-white text-space-900/60'}`}>
          {(project.previewUrl || project.url).replace('https://', '')}
        </div>
        <div className="w-4 h-4 opacity-30">
          <ExternalLink size={12} />
        </div>
      </div>

      {/* Screen */}
      <div className={`aspect-video bg-gradient-to-br ${project.mockBg} p-6 flex flex-col gap-4 relative overflow-hidden`}>
        {hasImage && (
          <img
            src={project.imagePath}
            alt={`${project.title} preview`}
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setImageFailed(true)}
          />
        )}

        {hasImage && (
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        )}

        {/* Glow bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: hasImage
              ? 'radial-gradient(ellipse at 50% 30%, rgba(15,23,42,0.08) 0%, transparent 70%)'
              : `radial-gradient(ellipse at 50% 30%, ${project.glowColor} 0%, transparent 70%)`,
          }}
        />

        {/* Fake hero content */}
        {!hasImage && (
          <div className="flex flex-col gap-2 z-10">
            <div className="w-24 h-3 rounded-full opacity-60" style={{ background: `linear-gradient(to right, ${project.accentFrom}, ${project.accentTo})` }} />
            <div className="w-40 h-5 rounded-full bg-white/20" />
            <div className="w-32 h-3 rounded-full bg-white/10" />
          </div>
        )}

        {/* Fake cards row */}
        {!hasImage && (
          <div className="grid grid-cols-3 gap-3 z-10 mt-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`rounded-xl p-3 flex flex-col gap-1.5 ${dark ? 'bg-white/5 border border-white/8' : 'bg-white/10 border border-white/15'}`}>
                <div className="w-8 h-8 rounded-lg opacity-70" style={{ background: `linear-gradient(135deg, ${project.accentFrom}50, ${project.accentTo}50)` }} />
                <div className="w-full h-2 rounded bg-white/20" />
                <div className="w-3/4 h-1.5 rounded bg-white/10" />
              </div>
            ))}
          </div>
        )}

        {/* Overlay iframe-like shimmer */}
        <div className={`absolute inset-0 pointer-events-none ${hasImage ? 'bg-gradient-to-t from-black/10 to-transparent' : 'bg-gradient-to-t from-black/30 to-transparent'}`} />

        {/* Visit overlay */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/40 z-20"
        >
          <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur text-white text-sm font-body font-medium border border-white/30">
            <ExternalLink size={14} /> Visit Live Site
          </span>
        </a>
      </div>
    </div>
  )
}

function ProjectBlock({ project, dark, index }) {
  const [ref, inView] = useInView()
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      id="work"
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        {/* Mockup */}
        <BrowserMockup project={project} dark={dark} />

        {/* Content */}
        <div className="flex flex-col gap-6">
          {/* Meta */}
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-body font-medium border"
              style={{
                borderColor: `${project.accentFrom}40`,
                color: project.accentFrom,
                background: `${project.accentFrom}12`,
              }}>
              {project.category}
            </span>
            <span className={`flex items-center gap-1.5 text-xs font-body ${dark ? 'text-green-400/80' : 'text-green-600'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              {project.tag}
            </span>
            <span className={`text-xs font-body ${dark ? 'text-white/30' : 'text-space-900/50'}`}>{project.year}</span>
          </div>

          {/* Title */}
          <div>
            <h2 className={`font-display font-bold text-3xl md:text-4xl leading-tight mb-2 ${dark ? 'text-white' : 'text-space-900'}`}>
              {project.title}
            </h2>
            <p className="font-body font-medium text-base" style={{ color: project.accentFrom }}>
              {project.tagline}
            </p>
          </div>

          {/* Points */}
          <ul className="flex flex-col gap-3">
            {project.points.map((pt, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: project.accentFrom }} />
                <span className={`text-sm font-body leading-relaxed ${dark ? 'text-white/65' : 'text-space-900/65'}`}>{pt}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start mt-2 font-body font-semibold text-sm group"
            style={{ color: project.accentFrom }}
          >
            View Project
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects({ dark }) {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="work" className="py-20 md:py-28 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div ref={ref} className={`text-center mb-14 sm:mb-18 md:mb-24 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className={`text-xs font-body font-medium tracking-widest uppercase mb-4 ${dark ? 'text-azure-400/80' : 'text-azure-600'}`}>
            Featured Work
          </p>
          <h2 className={`font-display font-bold mb-4 ${dark ? 'text-white' : 'text-space-900'}`}
            style={{ fontSize: 'clamp(1.7rem, 4.8vw, 3.2rem)' }}>
            Projects we're proud of
          </h2>
          <p className={`max-w-xl mx-auto font-body text-sm sm:text-base leading-relaxed ${dark ? 'text-white/50' : 'text-space-900/50'}`}>
            Two of our flagship builds — from AI-driven health tech to our own agency platform. Each shipped with obsessive attention to performance, design, and user experience.
          </p>
        </div>

        {/* Project blocks */}
        <div className="flex flex-col gap-20 md:gap-28 lg:gap-36">
          {projects.map((p, i) => (
            <ProjectBlock key={p.id} project={p} dark={dark} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
