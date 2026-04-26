export default function ProjectArt({ variant }) {
  if (variant === 'stack') {
    return (
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, oklch(0.92 0.04 70), oklch(0.85 0.05 60))' }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} style={{
            position: 'absolute',
            left: `${10 + i * 8}%`,
            top: `${15 + i * 10}%`,
            width: '55%',
            height: 56,
            background: i === 2 ? 'var(--accent-1)' : 'rgba(20,19,15,0.85)',
            borderRadius: 8,
            transform: `rotate(${-3 + i}deg)`,
            boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
          }} />
        ))}
      </div>
    )
  }

  if (variant === 'orbit') {
    return (
      <div style={{ position: 'absolute', inset: 0, background: 'oklch(0.18 0.02 260)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%', width: '80%', aspectRatio: 1, transform: 'translate(-50%,-50%)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', left: '50%', top: '50%', width: '55%', aspectRatio: 1, transform: 'translate(-50%,-50%)', border: '1px solid rgba(255,255,255,0.20)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', left: '50%', top: '50%', width: 18, height: 18, borderRadius: '50%', background: 'var(--accent-1)', transform: 'translate(-50%,-50%)', boxShadow: '0 0 60px var(--accent-1)' }} />
        <div style={{ position: 'absolute', left: 'calc(50% + 27.5%)', top: '50%', width: 8, height: 8, borderRadius: '50%', background: 'white', transform: 'translate(-50%,-50%)' }} />
        <div style={{ position: 'absolute', left: 'calc(50% - 40%)', top: '50%', width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-2)', transform: 'translate(-50%,-50%)', filter: 'brightness(1.6)' }} />
      </div>
    )
  }

  if (variant === 'wave') {
    return (
      <div style={{ position: 'absolute', inset: 0, background: 'oklch(0.96 0.02 240)', overflow: 'hidden' }}>
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: 0, right: 0,
            top: `${i * 6}%`,
            height: 1,
            background: i === 8 ? 'var(--accent-2)' : 'var(--ink)',
            opacity: i === 8 ? 1 : 0.15 + Math.abs(8 - i) * 0.04,
            transform: `translateY(${Math.sin(i * 0.6) * 12}px)`,
          }} />
        ))}
        <div style={{ position: 'absolute', right: 20, bottom: 20, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Embedding space
        </div>
      </div>
    )
  }

  return null
}
