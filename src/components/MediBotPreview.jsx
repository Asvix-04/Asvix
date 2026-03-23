export default function MediBotPreview() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#050f2a] to-[#0a1a3e] p-4 overflow-hidden relative">
      {/* Top nav bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-blue-500 flex items-center justify-center">
            <span className="text-white text-[9px] font-bold">M</span>
          </div>
          <span className="text-white text-xs font-semibold">MediBot</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-14 h-4 rounded-full bg-white/10" />
          <div className="w-6 h-6 rounded-full bg-blue-500/30 border border-blue-500/50" />
        </div>
      </div>

      {/* Dashboard grid */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { label: 'Medications', val: '4', color: 'from-blue-600 to-blue-400', icon: '💊' },
          { label: 'Adherence', val: '92%', color: 'from-cyan-600 to-cyan-400', icon: '📈' },
          { label: 'Reminders', val: '3', color: 'from-violet-600 to-violet-400', icon: '🔔' },
        ].map((c) => (
          <div key={c.label} className={`bg-gradient-to-br ${c.color} rounded-xl p-2.5 opacity-90`}>
            <div className="text-white/70 text-[9px] mb-1">{c.icon} {c.label}</div>
            <div className="text-white font-bold text-base">{c.val}</div>
          </div>
        ))}
      </div>

      {/* Medication list */}
      <div className="bg-white/5 rounded-xl p-3 mb-3 border border-white/8">
        <div className="text-white/60 text-[9px] mb-2 font-semibold uppercase tracking-widest">Today's Schedule</div>
        {[
          { name: 'Metformin 500mg', time: '8:00 AM', done: true },
          { name: 'Lisinopril 10mg', time: '2:00 PM', done: false },
          { name: 'Atorvastatin', time: '9:00 PM', done: false },
        ].map((m, i) => (
          <div key={i} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full border ${m.done ? 'bg-green-500 border-green-500' : 'border-white/30'}`} />
              <span className={`text-[10px] ${m.done ? 'text-white/40 line-through' : 'text-white/80'}`}>{m.name}</span>
            </div>
            <span className="text-[9px] text-white/40">{m.time}</span>
          </div>
        ))}
      </div>

      {/* AI Chat bubble */}
      <div className="bg-white/5 rounded-xl p-3 border border-white/8">
        <div className="text-white/60 text-[9px] mb-2 font-semibold uppercase tracking-widest">AI Assistant</div>
        <div className="bg-blue-600/20 rounded-lg rounded-tl-none p-2 mb-2">
          <p className="text-[9px] text-blue-200">Is it safe to take Metformin with my blood pressure medication?</p>
        </div>
        <div className="bg-white/8 rounded-lg rounded-tr-none p-2 ml-4">
          <p className="text-[9px] text-white/70">Yes, Metformin and Lisinopril are generally safe to take together. No significant interactions found. ✓</p>
        </div>
      </div>

      {/* Floating glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-blue-500/15 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none" />
    </div>
  )
}
