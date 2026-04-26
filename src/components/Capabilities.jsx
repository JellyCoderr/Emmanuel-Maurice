import Reveal from './Reveal'
import SectionLabel from './SectionLabel'

const SKILL_GROUPS = [
  { label: 'Front-end', items: ['React', 'TypeScript', 'Tailwind', 'Next.js'] },
  { label: 'AI', items: ['Agent architecture', 'AI-assisted development', 'Generative AI'] },
  { label: 'Design', items: ['Figma', 'Photoshop', 'Canva'] },
]

export default function Capabilities() {
  return (
    <section
      id="skills"
      style={{
        padding: 'clamp(80px, 12vw, 160px) 0',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <Reveal>
          <SectionLabel num="02">Capabilities</SectionLabel>
        </Reveal>
        <Reveal delay={100}>
          <h2 style={{
            margin: '0 0 64px',
            maxWidth: 900,
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            fontSize: 'clamp(36px, 5.5vw, 72px)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
          }}>
            I work across the seam where{' '}
            <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--accent-1)' }}>
              interfaces
            </span>
            {' '}meet{' '}
            <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'rgb(0, 164, 255)' }}>
              intelligence.
            </span>
          </h2>
        </Reveal>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div className="skill-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
          {SKILL_GROUPS.map((g, gi) => (
            <Reveal key={g.label} delay={gi * 100}>
              <div style={{ borderTop: '1px solid var(--line-strong)', paddingTop: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
                  <h3 style={{ margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 14, letterSpacing: '0.02em' }}>
                    {g.label}
                  </h3>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-mute)' }}>
                    0{gi + 1}
                  </span>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {g.items.map(s => (
                    <li key={s} style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--ink-soft)', display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--accent-1)', flexShrink: 0 }} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <style>{`
          @media (max-width: 820px) { .skill-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
        `}</style>
      </div>
    </section>
  )
}
