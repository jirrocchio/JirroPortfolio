import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.4 }
    )
    links.forEach(l => {
      const el = document.getElementById(l.toLowerCase())
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-300"
      style={{
        background: scrolled ? (dark ? 'rgba(10,21,18,0.92)' : 'rgba(244,250,247,0.92)') : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border2)' : 'none',
        boxShadow: scrolled ? 'var(--shadow)' : 'none',
      }}
    >
      {/* Logo */}
      <a href="#hero" className="font-display font-black text-xl tracking-tight" style={{ color: 'var(--accent)' }}>
        H.J.M
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-7">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="relative text-xs uppercase tracking-widest transition-colors duration-200 py-1"
            style={{ color: active === l.toLowerCase() ? 'var(--accent)' : 'var(--text2)', letterSpacing: '0.12em' }}
          >
            {l}
            {active === l.toLowerCase() && (
              <motion.span
                layoutId="nav-underline"
                className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full"
                style={{ background: 'var(--accent)' }}
              />
            )}
          </a>
        ))}

        {/* Dark mode toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ background: 'var(--accent-soft)', color: 'var(--accent)', border: '1px solid var(--border)' }}
          aria-label="Toggle dark mode"
        >
          <motion.div
            key={dark ? 'sun' : 'moon'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile: dark toggle + hamburger */}
      <div className="md:hidden flex items-center gap-3">
        <button
          onClick={() => setDark(!dark)}
          className="w-9 h-9 rounded-full flex items-center justify-center"
          style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
        >
          {dark ? <Sun size={15} /> : <Moon size={15} />}
        </button>
        <button
          className="w-9 h-9 flex items-center justify-center rounded-full"
          style={{ color: 'var(--accent)', background: 'var(--accent-soft)' }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 py-5 px-6 flex flex-col gap-4 md:hidden"
            style={{
              background: dark ? 'rgba(10,21,18,0.97)' : 'rgba(244,250,247,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border2)',
            }}
          >
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-widest py-1 transition-colors"
                style={{ color: active === l.toLowerCase() ? 'var(--accent)' : 'var(--text2)' }}
              >
                {l}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
