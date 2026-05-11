import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'

const categories = [
  {
    icon: '💻',
    title: 'Programming & Development',
    skills: ['PHP', 'MySQLi', 'Java', 'C#', 'Web Development'],
  },
  {
    icon: '🛡️',
    title: 'System & Security',
    skills: ['Authentication Systems', 'Honeypot Implementation', 'Data Logging'],
  },
  {
    icon: '🧪',
    title: 'Testing & QA',
    skills: ['PHPUnit', 'JUnit', 'Debugging', 'System Testing'],
  },
  {
    icon: '🔧',
    title: 'Tools & Platforms',
    skills: ['VS Code', 'NetBeans', 'Figma', 'Canva'],
  },
  {
    icon: '✨',
    title: 'Other Skills',
    skills: ['Networking', 'Graphic Design', 'Video Editing', 'UI/UX Design'],
  },
]

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="section-tag">02 — Skills</div>
      <h2 className="section-heading">My expertise,<br />my toolkit</h2>
      <div className="section-line" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.55 }}
            className="card p-7 hover:-translate-y-1"
            style={{ background: 'var(--bg3)' }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-4"
              style={{ background: 'var(--card2)', border: '1px solid var(--border)' }}
            >
              {cat.icon}
            </div>
            <h3
              className="text-xs uppercase tracking-widest font-semibold mb-4"
              style={{ color: 'var(--accent)', letterSpacing: '0.12em' }}
            >
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
    </SectionWrapper>
  )
}
