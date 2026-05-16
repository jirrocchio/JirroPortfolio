import { motion } from 'framer-motion'
import { ExternalLink, Github, Lock, Smartphone, Database } from 'lucide-react'

const projects = [
  {
    num: '001',
    date: 'Feb 2026',
    title: 'OLSHKEY',
    subtitle: 'Computer Laboratory Smart Lock System',
    description: 'A smart automation system that handles laboratory access control and monitors student attendance in real time, complete with SMS notifications to parents and guardians.',
    highlights: [
      'Automated laboratory access with smart lock integration',
      'Real-time attendance monitoring and logging',
      'SMS notification gateway for parent/guardian alerts',
      'Structured MySQLi database with data integrity checks',
    ],
    tech: ['PHP', 'MySQLi', 'SMS API', 'Authentication', 'Data Integrity'],
    icons: [Lock, Smartphone, Database],
    color: 'rgba(26,158,110,0.08)',
    border: 'rgba(26,158,110,0.2)',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24 px-6 md:px-10" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="section-tag">04 — Projects</div>
          <h2 className="section-heading">Things I've<br />built</h2>
          <div className="section-line" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="card p-8 relative overflow-hidden group hover:-translate-y-2"
            >
              {/* Accent top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ background: 'linear-gradient(to right, var(--accent), rgba(26,158,110,0.3))' }} />

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-xs font-mono mb-1" style={{ color: 'var(--text3)' }}>{p.num} · {p.date}</div>
                  <h3 className="font-display text-2xl font-bold" style={{ color: 'var(--text)' }}>{p.title}</h3>
                  <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--accent)' }}>{p.subtitle}</p>
                </div>
                {/* Icons */}
                <div className="flex gap-2 mt-1">
                  {p.icons.map((Icon, j) => (
                    <div key={j} className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: 'var(--accent-soft)', border: '1px solid var(--border)' }}>
                      <Icon size={14} style={{ color: 'var(--accent)' }} />
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-sm leading-loose mb-5" style={{ color: 'var(--text2)' }}>{p.description}</p>

              {/* Highlights */}
              <ul className="space-y-2 mb-6">
                {p.highlights.map((h) => (
                  <li key={h} className="text-xs flex items-start gap-2" style={{ color: 'var(--text2)' }}>
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: 'var(--accent)' }} />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-lg"
                    style={{ background: 'var(--accent-soft)', color: 'var(--accent)', border: '1px solid var(--border)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
