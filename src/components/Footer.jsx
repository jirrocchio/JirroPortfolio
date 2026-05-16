import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

export default function Footer() {
  return (
    <footer className="relative z-10 py-10 px-6 md:px-10" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border2)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-display font-black text-xl mb-1" style={{ color: 'var(--accent)' }}>H.J.M</div>
            <p className="text-xs" style={{ color: 'var(--text3)' }}>Harold Jirro I. Madrona · Nueva Ecija, Philippines</p>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                className="text-xs uppercase tracking-widest transition-colors duration-200"
                style={{ color: 'var(--text3)' }}
                onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--text3)'}
              >
                {l}
              </a>
            ))}
          </div>

          <p className="text-xs flex items-center gap-1.5" style={{ color: 'var(--text3)' }}>
            © {new Date().getFullYear()} · Made with <Heart size={11} style={{ color: 'var(--accent)' }} fill="currentColor" />
          </p>
        </div>
      </div>
    </footer>
  )
}
