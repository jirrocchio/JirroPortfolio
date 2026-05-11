import { motion } from 'framer-motion'
// 👉 Place your photo in src/assets/ and update the filename if needed
import profilePhoto from '../assets/profileJirro.png'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 md:px-10 pt-32 pb-16 overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 70% at 30% 50%, rgba(200,169,110,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(200,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />

      {/* Split layout — photo column slightly wider */}
      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-[1fr_1.1fr] gap-6 items-center">

        {/* LEFT — Text content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest mb-8 px-4 py-2 rounded-full"
            style={{ color: 'var(--accent)', border: '1px solid var(--border)', letterSpacing: '0.2em' }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)', animation: 'pulse 2s infinite' }} />
            Available for Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-display font-black leading-none mb-4"
            style={{ fontSize: 'clamp(3rem,7vw,5.5rem)', letterSpacing: '-0.02em', color: 'var(--text)' }}
          >
            Harold Jirro
            <br />
            <span style={{ color: 'var(--accent)' }}>I. Madrona</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm uppercase tracking-widest mb-6 font-light"
            style={{ color: 'var(--text2)', letterSpacing: '0.1em' }}
          >
            Video Editing &nbsp;·&nbsp; UI/UX Design &nbsp;·&nbsp; IT &amp; Development
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base leading-loose mb-10"
            style={{ color: 'var(--text2)' }}
          >
            A creative technologist from Nueva Ecija, Philippines — bridging elegant design and robust development to craft digital experiences that matter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-secondary">Get In Touch</a>
          </motion.div>
        </div>

        {/* RIGHT — Bigger photo anchored to bottom, soft fade */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="relative hidden md:flex items-end justify-center self-end"
          style={{ minHeight: '78vh' }}
        >
          {/* Gold glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 85% 70% at 50% 55%, rgba(200,169,110,0.13) 0%, transparent 65%)',
            }}
          />

          <img
            src={profilePhoto}
            alt="Harold Jirro I. Madrona"
            style={{
              width: '100%',
              maxHeight: '82vh',
              objectFit: 'cover',
              objectPosition: 'top center',
              maskImage: `radial-gradient(ellipse 90% 95% at 50% 30%, black 20%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.25) 75%, transparent 100%)`,
              WebkitMaskImage: `radial-gradient(ellipse 90% 95% at 50% 30%, black 20%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.25) 75%, transparent 100%)`,
              filter: 'brightness(0.93) contrast(1.05)',
            }}
          />
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'var(--text3)' }}
      >
        <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, var(--accent), transparent)', animation: 'scrollLine 2s infinite' }} />
        <span className="text-xs uppercase tracking-widest">Scroll</span>
      </motion.div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.8)} }
        @keyframes scrollLine { 0%{opacity:0;transform:scaleY(0);transform-origin:top} 50%{opacity:1} 100%{opacity:0;transform:scaleY(1);transform-origin:top} }
      `}</style>
    </section>
  )
}