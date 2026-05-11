import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(8,12,16,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border2)' : 'none',
      }}
    >
      <a href="#hero" className="font-display font-bold text-xl" style={{ color: 'var(--accent)' }}>
        H.J.M
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex gap-8">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="text-xs uppercase tracking-widest transition-colors duration-200"
            style={{ color: 'var(--text2)', letterSpacing: '0.12em' }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--accent)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--text2)')}
          >
            {l}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden"
        style={{ color: 'var(--accent)' }}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          className="absolute top-full left-0 right-0 py-6 px-6 flex flex-col gap-4 md:hidden"
          style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border2)' }}
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-widest"
              style={{ color: 'var(--text2)', letterSpacing: '0.12em' }}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
