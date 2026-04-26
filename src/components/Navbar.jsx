import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
)

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transform: 'translateZ(0)',
      padding: scrolled ? '14px 24px' : '22px 24px',
      transition: 'padding 0.3s ease, backdrop-filter 0.3s ease',
      backdropFilter: scrolled ? 'blur(14px) saturate(140%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(14px) saturate(140%)' : 'none',
      background: scrolled ? 'color-mix(in oklab, var(--bg) 75%, transparent)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>

        {/* Logo */}
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{
            width: 28,
            height: 28,
            borderRadius: 8,
            background: 'var(--ink)',
            color: 'var(--bg)',
            display: 'grid',
            placeItems: 'center',
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 18,
            lineHeight: 1,
            flexShrink: 0,
          }}>
            e
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.04em' }}>
            EMMANUEL MAURICE
          </span>
        </a>

        {/* Center nav — desktop */}
        <div className="nav-links" style={{ display: 'flex', gap: 28, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{ position: 'relative', color: 'var(--ink-soft)', transition: 'color 0.2s ease' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--ink)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-soft)'}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className="nav-status" style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.04em', color: 'var(--ink-soft)' }}>
            <span style={{ position: 'relative', width: 7, height: 7, flexShrink: 0 }}>
              {/* Ping ring */}
              <span className="status-ping" style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                background: 'oklch(0.72 0.18 145)',
                animation: 'ping 2s cubic-bezier(0,0,0.2,1) infinite',
              }} />
              {/* Solid dot */}
              <span style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                background: 'oklch(0.72 0.18 145)',
              }} />
            </span>
            Available
          </span>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{ width: 34, height: 34, borderRadius: '50%', border: '1px solid var(--line-strong)', display: 'grid', placeItems: 'center', transition: 'transform 0.3s ease, background 0.3s ease' }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-elev)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            {theme === 'dark' ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            )}
          </button>

          {/* Hamburger — mobile only */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            style={{ display: 'none', width: 34, height: 34, borderRadius: '50%', border: '1px solid var(--line-strong)', placeItems: 'center' }}
          >
            {menuOpen ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden', background: 'var(--bg)', borderTop: '1px solid var(--line)' }}
          >
            <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink)' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 720px) {
          .nav-links { display: none !important; }
          .nav-status { display: none !important; }
          .nav-hamburger { display: grid !important; }
        }
      `}</style>
    </nav>
  )
}
