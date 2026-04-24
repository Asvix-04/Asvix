import { Link } from 'react-router-dom'
import { Mail, ExternalLink, Clock, ArrowLeft, Zap } from 'lucide-react'

const RECIPIENT = 'asvix2025@gmail.com'

export default function Contact({ dark }) {
  const openQuickGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${RECIPIENT}&su=${encodeURIComponent('Project Enquiry — Asvix')}`
    window.open(gmailUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* Background glow & elements */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: dark
            ? 'radial-gradient(ellipse at 50% 20%, rgba(59,130,246,0.15) 0%, transparent 60%)'
            : 'radial-gradient(ellipse at 50% 25%, rgba(59,130,246,0.1) 0%, transparent 60%)',
        }}
      />
      
      {/* Dynamic particles or subtle shapes */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-azure-500/10 blur-[100px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      <section className="max-w-2xl w-full text-center relative z-10 animate-fade-up">
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border text-[10px] sm:text-xs font-medium font-body tracking-[0.2em] uppercase"
          style={{
            borderColor: dark ? 'rgba(96,165,250,0.2)' : 'rgba(0,0,0,0.25)',
            color: dark ? 'rgba(147,197,253,0.9)' : '#2563EB',
            background: dark ? 'rgba(59,130,246,0.05)' : 'rgba(219,234,254,0.4)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-azure-500 animate-pulse" />
          Get in touch
        </div>

        <h1
          className={`font-display font-bold leading-tight mb-6 ${dark ? 'text-white' : 'text-space-900'}`}
          style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)' }}
        >
          Let's build something <span className="text-gradient bg-gradient-to-r from-azure-400 to-indigo-400 font-extrabold italic">extraordinary.</span>
        </h1>
        
        <p className={`font-body text-base sm:text-lg leading-relaxed max-w-lg mx-auto mb-10 ${dark ? 'text-white/50' : 'text-space-900/60'}`}>
          Ready to start your next project? We're just one click away. Reach out directly via Gmail and let's discuss your vision.
        </p>

        {/* Hero Action Card */}
        <div className={`group relative rounded-[2.5rem] p-8 sm:p-12 border transition-all duration-500 hover:shadow-2xl hover:shadow-azure-500/10 ${
          dark 
            ? 'bg-space-800/40 border-white/8 backdrop-blur-md' 
            : 'bg-white border-black/20 shadow-xl shadow-black/5'
        }`}>
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-azure-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                    dark ? 'bg-azure-500/10 text-azure-400' : 'bg-azure-50 text-azure-600'
                }`}>
                    <Zap size={32} />
                </div>

                <h2 className={`font-display font-semibold text-2xl mb-2 ${dark ? 'text-white' : 'text-space-900'}`}>
                     Contact
                </h2>
                
                <a
                    href={`mailto:${RECIPIENT}`}
                    className={`font-body text-lg mb-8 transition-colors hover:underline underline-offset-4 ${dark ? 'text-azure-300 hover:text-azure-200' : 'text-azure-700 hover:text-azure-600'}`}
                >
                    {RECIPIENT}
                </a>

                <div className="w-full flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={openQuickGmail}
                        className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-space-600 to-space-500 text-white font-body font-semibold text-base hover:shadow-xl hover:shadow-space-500/30 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
                    >
                        <ExternalLink size={18} />
                        Contact Us
                    </button>
                </div>

                <div className={`mt-8 flex items-center gap-6 text-sm font-body ${dark ? 'text-white/30' : 'text-space-900/30'}`}>
                    <div className="flex items-center gap-2">
                        <Clock size={16} />
                        Mon–Fri, 9:00 AM – 8:00 PM IST
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-8">
            <Link
                to="/"
                className={`inline-flex items-center gap-2 px-6 py-2 rounded-full border text-sm font-body font-medium transition-all duration-300 hover:scale-105 ${
                    dark 
                        ? 'border-white/10 text-white/50 hover:border-white/30 hover:text-white' 
                        : 'border-black/25 text-space-900/50 hover:border-black/40 hover:text-space-900'
                }`}
            >
                <ArrowLeft size={14} />
                Back to home
            </Link>
            
            {/* Subtle branding */}
            <div className={`text-[10px] font-body tracking-[0.3em] uppercase opacity-20 ${dark ? 'text-white' : 'text-space-900'}`}>
                ASVIX DIGITAL EXPERIENCE ✦ 2025
            </div>
        </div>
      </section>
    </main>
  )
}
