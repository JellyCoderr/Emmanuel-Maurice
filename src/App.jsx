import { useEffect } from 'react'
import { useTheme } from './hooks/useTheme'
import { useLenis } from './hooks/useLenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SelectedWork from './components/SelectedWork'
import Capabilities from './components/Capabilities'
import About from './components/About'
import Contact from './components/Contact'
import './index.css'

const ACCENT_PALETTE = {
  amber:  'oklch(0.72 0.15 60)',
  indigo: 'oklch(0.50 0.13 255)',
}

export default function App() {
  const [theme, toggleTheme] = useTheme()
  useLenis()

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--accent-1', ACCENT_PALETTE.amber)
    root.style.setProperty('--accent-2', ACCENT_PALETTE.indigo)
    root.style.setProperty('--font-sans', '"Geist", system-ui, sans-serif')
    root.style.setProperty('--font-mono', '"Geist Mono", ui-monospace, monospace')
    root.style.setProperty('--font-display', '"Instrument Serif", serif')
  }, [])

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <SelectedWork />
        <Capabilities />
        <About />
        <Contact />
      </main>
    </>
  )
}
