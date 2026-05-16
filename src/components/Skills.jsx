import { useState } from 'react'
import { motion } from 'framer-motion'

const categories = [
  { icon: '💻', title: 'Programming & Dev', skills: ['PHP', 'MySQLi', 'Java', 'C#', 'Web Development'] },
  { icon: '🛡️', title: 'System & Security', skills: ['Authentication Systems', 'Honeypot Implementation', 'Data Logging'] },
  { icon: '🧪', title: 'Testing & QA', skills: ['PHPUnit', 'JUnit', 'Debugging', 'System Testing'] },
  { icon: '🔧', title: 'Tools & Platforms', skills: ['VS Code', 'NetBeans', 'Figma', 'Canva'] },
  { icon: '✨', title: 'Other Skills', skills: ['Networking', 'Graphic Design', 'Video Editing', 'UI/UX Design'] },
]

export default function Skills() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="skills" className="relative z-10 py-24 px-6 md:px-10" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="section-tag">02 — Skills</div>
          <h2 className="section-heading">My expertise,<br />my toolkit</h2>
          <div className="section-line" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="card p-7 transition-all duration-300"
              style={{
                transform: hovered === i ? 'translateY(-6px)' : 'none',
                background: hovered === i ? 'var(--bg3)' : 'var(--bg3)',
                borderColor: hovered === i ? 'var(--accent)' : undefined,
              }}
            >
              <motion.div
                animate={{ rotate: hovered === i ? [0, -8, 8, 0] : 0 }}
                transition={{ duration: 0.4 }}
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
                style={{ background: 'var(--accent-soft)', border: '1px solid var(--border)' }}
              >
                {cat.icon}
              </motion.div>
              <h3 className="text-xs uppercase tracking-widest font-semibold mb-4"
                style={{ color: 'var(--accent)', letterSpacing: '0.12em' }}>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span key={s} className="skill-badge">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
