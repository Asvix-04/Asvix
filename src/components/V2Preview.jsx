export default function V2Preview() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#071126] to-[#0b1937] p-4 overflow-hidden relative">
      {/* Nav */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-space-500 to-azure-500 flex items-center justify-center">
            <span className="text-white text-[9px] font-bold">D</span>
          </div>
          <div className="w-16 h-2.5 rounded bg-white/20" />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-2 rounded bg-white/10" />
          <div className="w-8 h-2 rounded bg-white/10" />
          <div className="w-8 h-2 rounded bg-white/10" />
          <div className="w-14 h-5 rounded-lg bg-space-600/80 border border-space-500/50" />
        </div>
      </div>

      {/* Hero section */}
      <div className="relative mb-4 rounded-2xl overflow-hidden"
        style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.25) 0%, rgba(30,49,99,0.18) 100%)' }}
      >
        <div className="p-4">
          <div className="w-20 h-2.5 rounded bg-azure-400/50 mb-2" />
          <div className="w-48 h-5 rounded bg-white/70 mb-1.5" />
          <div className="w-40 h-5 rounded bg-white/40 mb-3" />
          <div className="w-32 h-3 rounded bg-white/20 mb-1" />
          <div className="w-28 h-3 rounded bg-white/15 mb-4" />
          <div className="flex gap-2">
            <div className="w-20 h-7 rounded-lg bg-space-600/80 border border-space-500/40" />
            <div className="w-20 h-7 rounded-lg bg-white/8 border border-white/15" />
          </div>
        </div>

        {/* Decorative circles */}
        <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full border border-space-500/25" />
        <div className="absolute -right-2 top-4 w-16 h-16 rounded-full border border-azure-500/20" />
      </div>

      {/* Feature cards row */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { icon: '⚡', title: 'Fast', color: 'yellow' },
          { icon: '🎨', title: 'Pixel Perfect', color: 'violet' },
          { icon: '📱', title: 'Responsive', color: 'blue' },
        ].map((f) => (
          <div key={f.title} className="bg-white/5 rounded-xl p-2.5 border border-white/8">
            <div className="text-base mb-1">{f.icon}</div>
            <div className="text-[9px] text-white/60 font-semibold">{f.title}</div>
          </div>
        ))}
      </div>

      {/* Code snippet mockup */}
      <div className="bg-white/4 rounded-xl p-3 border border-white/8 font-mono">
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-2 h-2 rounded-full bg-red-400/60" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
          <div className="w-2 h-2 rounded-full bg-green-400/60" />
          <div className="flex-1" />
          <div className="w-16 h-2 rounded bg-white/10" />
        </div>
        <div className="space-y-1">
          <div className="flex gap-2 items-center">
            <span className="text-azure-400 text-[9px]">const</span>
            <span className="text-cyan-300 text-[9px]">App</span>
            <span className="text-white/40 text-[9px]">= () =&gt; {'{'}</span>
          </div>
          <div className="pl-3">
            <span className="text-blue-300 text-[9px]">return</span>
            <span className="text-white/40 text-[9px]"> &lt;</span>
            <span className="text-green-300 text-[9px]">Landing</span>
            <span className="text-white/40 text-[9px]"> /&gt;</span>
          </div>
          <div className="text-white/40 text-[9px]">{'}'}</div>
        </div>
      </div>

      {/* Glow */}
      <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-space-500/20 blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-azure-500/12 blur-2xl pointer-events-none" />
    </div>
  )
}
