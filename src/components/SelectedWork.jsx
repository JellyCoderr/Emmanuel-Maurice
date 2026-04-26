import { useState } from 'react'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'

const PROJECTS = [
  {
    n: '01',
    title: 'CalPad',
    sub: 'A calculator that remembers',
    year: '2025',
    role: 'Design + Engineering',
    tags: ['Next.js', 'PWA', 'TypeScript'],
  },
  {
    n: '02',
    title: 'Project Two',
    sub: 'Coming soon',
    year: '2025',
    role: '—',
    tags: ['—'],
  },
  {
    n: '03',
    title: 'Project Three',
    sub: 'Coming soon',
    year: '2025',
    role: '—',
    tags: ['—'],
  },
]

function ProjectRow({ p, i }) {
  const [hover, setHover] = useState(false)

  return (
    <Reveal delay={i * 80}>
      <a
        href="#"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="project-row"
        style={{
          display: 'grid',
          gridTemplateColumns: '60px 1.6fr 1fr 80px',
          gap: 24,
          alignItems: 'center',
          padding: '32px 0',
          borderBottom: '1px solid var(--line-strong)',
          position: 'relative',
          cursor: 'pointer',
        }}
      >
        {/* number */}
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.06em', color: 'var(--ink-mute)' }}>
          {p.n}
        </span>

        {/* title + sub */}
        <div>
          <h3 className="project-title" style={{
            margin: 0,
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            fontSize: 'clamp(32px, 4.5vw, 56px)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: 'var(--ink)',
            transition: 'transform 0.5s cubic-bezier(.2,.7,.2,1)',
            transform: hover ? 'translateX(8px)' : 'translateX(0)',
            display: 'flex',
            alignItems: 'baseline',
            gap: 16,
            flexWrap: 'wrap',
          }}>
            {p.title}
            <span style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '0.55em',
              color: 'var(--ink-soft)',
              fontWeight: 400,
            }}>
              — {p.sub}
            </span>
          </h3>
        </div>

        {/* tags */}
        <div className="project-tags" style={{
          display: 'flex',
          gap: 8,
          flexWrap: 'wrap',
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.04em',
          color: 'var(--ink-soft)',
        }}>
          {p.tags.slice(0, 3).map(t => (
            <span key={t} style={{ padding: '4px 10px', border: '1px solid var(--line-strong)', borderRadius: 999 }}>
              {t}
            </span>
          ))}
        </div>

        {/* year + arrow */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 12, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-soft)' }}>
          <span>{p.year}</span>
          <span style={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            border: '1px solid var(--line-strong)',
            display: 'grid',
            placeItems: 'center',
            background: hover ? 'var(--accent-1)' : 'transparent',
            color: hover ? 'var(--ink)' : 'var(--ink-soft)',
            transition: 'all 0.4s cubic-bezier(.2,.7,.2,1)',
            transform: hover ? 'rotate(-45deg)' : 'rotate(0)',
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </a>
      <style>{`
        @media (max-width: 820px) {
          .project-row { grid-template-columns: 32px 1fr 60px !important; }
          .project-tags { display: none !important; }
        }
      `}</style>
    </Reveal>
  )
}

export default function SelectedWork() {
  return (
    <section id="work" style={{ padding: 'clamp(80px, 12vw, 160px) 24px', maxWidth: 1280, margin: '0 auto' }}>
      <Reveal>
        <SectionLabel num="01">Selected work</SectionLabel>
      </Reveal>

      <Reveal delay={120}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, marginBottom: 64, flexWrap: 'wrap' }}>
          <h2 style={{
            margin: 0,
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            fontSize: 'clamp(40px, 6vw, 88px)',
            lineHeight: 1,
            letterSpacing: '-0.035em',
            maxWidth: 800,
          }}>
            Three projects that
            <br />
            <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'rgb(0, 164, 255)' }}>shipped</span>
            {' '}& taught me something.
          </h2>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-mute)' }}>
            ({String(PROJECTS.length).padStart(2, '0')}) Case studies
          </div>
        </div>
      </Reveal>

      <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--line-strong)' }}>
        {PROJECTS.map((p, i) => <ProjectRow key={p.n} p={p} i={i} />)}
      </div>
    </section>
  )
}
