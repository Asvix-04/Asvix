import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const links = {
  Work: ['MediBot AI', 'Asvix V2', 'Case Studies'],
  Services: ['Landing Pages', 'SaaS Builds', 'AI Products', 'Design Systems'],
  Company: ['About', 'Careers', 'Blog', 'Contact'],
}

export default function Footer({ dark }) {
  return (
    <footer id="contact" className={`pt-14 md:pt-16 pb-8 px-4 sm:px-6 md:px-10 border-t ${dark ? 'border-white/6' : 'border-black/6'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-14 md:mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-azure-500 to-blue-700 flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">A</span>
              </div>
              <span className={`font-display font-bold text-lg ${dark ? 'text-white' : 'text-space-900'}`}>asvix</span>
            </div>
            <p className={`font-body text-sm leading-relaxed mb-5 ${dark ? 'text-white/40' : 'text-space-900/40'}`}>
              We craft digital experiences for ambitious teams.
            </p>
            <div className="flex items-center gap-3">
              {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${dark ? 'bg-white/8 hover:bg-white/15 text-white/50 hover:text-white' : 'bg-black/6 hover:bg-black/12 text-space-900/50 hover:text-space-900'}`}>
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([cat, items]) => (
            <div key={cat}>
              <p className={`font-display font-semibold text-sm mb-4 ${dark ? 'text-white' : 'text-space-900'}`}>{cat}</p>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className={`font-body text-sm transition-colors duration-200 ${dark ? 'text-white/40 hover:text-white/70' : 'text-space-900/40 hover:text-space-900/70'}`}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t ${dark ? 'border-white/5' : 'border-black/5'}`}>
          <p className={`font-body text-xs ${dark ? 'text-white/25' : 'text-space-900/25'}`}>
            © 2025 Asvix. All rights reserved.
          </p>
          <p className={`font-body text-xs ${dark ? 'text-white/25' : 'text-space-900/25'}`}>
            Built by Asvix · Designed with craft ✦
          </p>
        </div>
      </div>
    </footer>
  )
}
