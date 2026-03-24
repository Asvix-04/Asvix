import { useState } from 'react'
import { Link } from 'react-router-dom'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export default function Contact({ dark }) {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ type: '', text: '' })
  const [sending, setSending] = useState(false)

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setSending(true)
    setStatus({ type: '', text: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message.')
      }

      setStatus({ type: 'success', text: 'Message sent successfully. We will get back to you soon.' })
      setForm(initialForm)
    } catch (error) {
      setStatus({
        type: 'error',
        text: error.message || 'Unable to send message right now. Please try again in a few minutes.',
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <main className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: dark ? 'radial-gradient(ellipse at 20% 0%, rgba(59,130,246,0.18) 0%, transparent 45%)' : 'radial-gradient(ellipse at 25% 0%, rgba(59,130,246,0.12) 0%, transparent 45%)' }} />

      <section className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-start relative z-10">
        <div>
          <p className={`text-xs font-body font-medium tracking-widest uppercase mb-4 ${dark ? 'text-azure-400/80' : 'text-azure-600'}`}>
            Contact Asvix
          </p>
          <h1 className={`font-display font-bold leading-tight mb-5 ${dark ? 'text-white' : 'text-space-900'}`} style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)' }}>
            Tell us what you want to build.
          </h1>
          <p className={`font-body text-base sm:text-lg leading-relaxed max-w-lg mb-8 ${dark ? 'text-white/55' : 'text-space-900/55'}`}>
            Share your project details and timeline. We will review it and respond with the right next steps.
          </p>

          <div className={`rounded-2xl p-5 sm:p-6 border ${dark ? 'bg-white/5 border-white/10' : 'bg-white border-black/10 shadow-sm'}`}>
            <p className={`font-display font-semibold text-lg mb-4 ${dark ? 'text-white' : 'text-space-900'}`}>
              Direct contact
            </p>
            <div className="space-y-2">
              <a href="mailto:hello@asvix.com" className={`block font-body text-sm transition-colors ${dark ? 'text-azure-300 hover:text-azure-200' : 'text-azure-700 hover:text-azure-600'}`}>
                hello@asvix.com
              </a>
              <p className={`font-body text-sm ${dark ? 'text-white/50' : 'text-space-900/50'}`}>Mon-Fri, 9:00 AM to 8:00 PM IST</p>
            </div>
          </div>

          <Link
            to="/"
            className={`inline-flex items-center gap-2 mt-6 text-sm font-body font-medium transition-colors ${dark ? 'text-white/70 hover:text-white' : 'text-space-900/70 hover:text-space-900'}`}
          >
            ← Back to home
          </Link>
        </div>

        <div className={`rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border ${dark ? 'bg-space-800/80 border-white/10' : 'bg-white border-black/10 shadow-sm'}`}>
          <form className="space-y-4" onSubmit={onSubmit}>
            <div>
              <label htmlFor="name" className={`block text-sm mb-1.5 font-body font-medium ${dark ? 'text-white/85' : 'text-space-900/85'}`}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={onChange}
                required
                className={`w-full rounded-xl px-4 py-3 text-sm outline-none border transition-colors ${dark ? 'bg-white/5 border-white/15 text-white placeholder:text-white/35 focus:border-azure-400/60' : 'bg-white border-black/15 text-space-900 placeholder:text-space-900/35 focus:border-azure-500/60'}`}
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className={`block text-sm mb-1.5 font-body font-medium ${dark ? 'text-white/85' : 'text-space-900/85'}`}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                required
                className={`w-full rounded-xl px-4 py-3 text-sm outline-none border transition-colors ${dark ? 'bg-white/5 border-white/15 text-white placeholder:text-white/35 focus:border-azure-400/60' : 'bg-white border-black/15 text-space-900 placeholder:text-space-900/35 focus:border-azure-500/60'}`}
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className={`block text-sm mb-1.5 font-body font-medium ${dark ? 'text-white/85' : 'text-space-900/85'}`}>
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={onChange}
                required
                className={`w-full rounded-xl px-4 py-3 text-sm outline-none border transition-colors ${dark ? 'bg-white/5 border-white/15 text-white placeholder:text-white/35 focus:border-azure-400/60' : 'bg-white border-black/15 text-space-900 placeholder:text-space-900/35 focus:border-azure-500/60'}`}
                placeholder="Project discussion"
              />
            </div>

            <div>
              <label htmlFor="message" className={`block text-sm mb-1.5 font-body font-medium ${dark ? 'text-white/85' : 'text-space-900/85'}`}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={onChange}
                required
                rows={6}
                className={`w-full rounded-xl px-4 py-3 text-sm outline-none border transition-colors resize-none ${dark ? 'bg-white/5 border-white/15 text-white placeholder:text-white/35 focus:border-azure-400/60' : 'bg-white border-black/15 text-space-900 placeholder:text-space-900/35 focus:border-azure-500/60'}`}
                placeholder="Tell us what you need, goals, deadlines, and budget range."
              />
            </div>

            {status.text && (
              <p className={`text-sm font-body ${status.type === 'success' ? (dark ? 'text-green-300' : 'text-green-700') : (dark ? 'text-rose-300' : 'text-rose-700')}`}>
                {status.text}
              </p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-space-600 to-space-500 text-white font-body font-semibold text-sm hover:shadow-xl hover:shadow-space-500/30 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {sending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
