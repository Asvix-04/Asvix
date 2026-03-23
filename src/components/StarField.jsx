import { useMemo } from 'react'

export default function StarField() {
  const stars = useMemo(() => {
    return Array.from({ length: 70 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 1.8 + 0.8,
      dur: `${(Math.random() * 3 + 2).toFixed(1)}s`,
      delay: `${(Math.random() * 4).toFixed(1)}s`,
    }))
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Stars */}
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: s.top,
            left: s.left,
            width: `${s.size}px`,
            height: `${s.size}px`,
            '--dur': s.dur,
            animationDelay: s.delay,
          }}
        />
      ))}

      {/* Nebula glow patches */}
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          top: '15%',
          left: '20%',
          width: '420px',
          height: '420px',
          background: 'radial-gradient(circle, rgba(36,99,235,0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          top: '55%',
          right: '15%',
          width: '340px',
          height: '340px',
          background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          bottom: '20%',
          left: '40%',
          width: '280px',
          height: '280px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 70%)',
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 grid-bg"
        style={{ opacity: 0.6 }}
      />
    </div>
  )
}
