export default function SectionLabel({ num, children }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      marginBottom: 28,
    }}>
      <span style={{ color: 'var(--accent-1)' }}>{num}</span>
      <span style={{ width: 32, height: 1, background: 'var(--line-strong)' }} />
      <span>{children}</span>
    </div>
  )
}
