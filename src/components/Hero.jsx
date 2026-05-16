import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Sparkles } from 'lucide-react'
import profilePhoto from '../assets/profileJirro.png'

const WORDS = ['UI/UX Designer', 'Video Editor', 'Web Developer', 'IT Graduate', 'Creative Technologist']

function Typewriter() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = WORDS[index]
    let timeout

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1600)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % WORDS.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, index])

  return (
    <span className="font-semibold" style={{ color: 'var(--accent)' }}>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--bg)', zIndex: 1 }}
    >
      {/* Gradient blob */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: '55%', height: '80%',
          background: 'radial-gradient(ellipse, rgba(26,158,110,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', bottom: '0', left: '-10%',
          width: '40%', height: '50%',
          background: 'radial-gradient(ellipse, rgba(26,158,110,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
      </div>

      {/* ── MOBILE layout ── */}
      <div className="md:hidden relative z-10 w-full min-h-screen flex flex-col">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          <img
            src={profilePhoto}
            alt="Harold Jirro I. Madrona"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'top center',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.3) 35%, rgba(0,0,0,0.08) 60%, transparent 85%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.3) 35%, rgba(0,0,0,0.08) 60%, transparent 85%)',
              filter: 'brightness(0.8) saturate(0.9)',
            }}
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, rgba(244,250,247,0.2) 0%, rgba(244,250,247,0.55) 55%, var(--bg) 80%)',
          }} />
        </motion.div>

        <div className="relative z-10 mt-auto px-6 pb-20 pt-[52vh]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest mb-5 px-3 py-1.5 rounded-full"
            style={{ background: 'var(--accent-soft)', color: 'var(--accent)', border: '1px solid var(--border)' }}>
            <Sparkles size={11} /> Available for Opportunities
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="font-display font-black leading-none mb-3"
            style={{ fontSize: 'clamp(2.8rem,12vw,4.5rem)', letterSpacing: '-0.02em', color: 'var(--text)' }}>
            Harold Jirro<br /><span style={{ color: 'var(--accent)' }}>I. Madrona</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
            className="text-sm mb-4" style={{ color: 'var(--text2)' }}>
            <Typewriter />
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
            className="text-sm leading-loose mb-8" style={{ color: 'var(--text2)' }}>
            Creative technologist from Nueva Ecija, Philippines — bridging elegant design and robust development.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }} className="flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-secondary">Get In Touch</a>
          </motion.div>
        </div>
      </div>

      {/* ── DESKTOP layout ── */}
      <div className="hidden md:grid relative z-10 max-w-7xl w-full mx-auto px-10 grid-cols-[1fr_0.75fr] gap-6 items-center">
        {/* Left */}
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest mb-8 px-4 py-2 rounded-full"
            style={{ background: 'var(--accent-soft)', color: 'var(--accent)', border: '1px solid var(--border)' }}>
            <Sparkles size={12} /> Available for Opportunities
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-display font-black leading-none mb-4"
            style={{ fontSize: 'clamp(3rem,6.5vw,5.2rem)', letterSpacing: '-0.02em', color: 'var(--text)' }}>
            Harold Jirro<br /><span style={{ color: 'var(--accent)' }}>I. Madrona</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
            className="text-lg mb-5 h-8" style={{ color: 'var(--text2)' }}>
            <Typewriter />
          </motion.p>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
            className="text-base leading-loose mb-10 max-w-md" style={{ color: 'var(--text2)' }}>
            A creative technologist from Nueva Ecija, Philippines — bridging elegant design and robust development to craft digital experiences that matter.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }} className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-secondary">Get In Touch</a>
          </motion.div>

          {/* Scroll hint */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
            className="mt-14 flex items-center gap-3" style={{ color: 'var(--text3)' }}>
            <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--accent), transparent)', animation: 'scrollLine 2s infinite' }} />
            <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          </motion.div>
        </div>

        {/* Right — Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="relative flex items-end justify-center self-end" style={{ minHeight: '55vh' }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 80% 70% at 50% 55%, rgba(26,158,110,0.12) 0%, transparent 65%)',
          }} />
          <img
            src={profilePhoto}
            alt="Harold Jirro I. Madrona"
            style={{
              width: '100%', maxHeight: '58vh',
              objectFit: 'cover', objectPosition: 'top center',
              maskImage: 'radial-gradient(ellipse 90% 95% at 50% 30%, black 20%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.2) 75%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 90% 95% at 50% 30%, black 20%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.2) 75%, transparent 100%)',
              filter: 'brightness(0.95) contrast(1.04)',
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}