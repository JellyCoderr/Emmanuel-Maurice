import { useRef, useState, useEffect } from 'react'

export function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    if (!ref.current || shown) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        // Defer setState to next animation frame — avoids mid-scroll re-renders
        requestAnimationFrame(() => { setShown(true); io.disconnect() })
      }
    }, { threshold })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [shown, threshold])
  return [ref, shown]
}

export default function Reveal({ children, delay = 0, as: Tag = 'div', style = {}, ...rest }) {
  const [ref, shown] = useReveal()
  return (
    <Tag
      ref={ref}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(18px)',
        transition: `opacity 0.9s cubic-bezier(.2,.7,.2,1) ${delay}ms, transform 0.9s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
        willChange: shown ? 'auto' : 'transform, opacity',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
