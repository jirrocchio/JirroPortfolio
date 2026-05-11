import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'

const projects = [
  {
    num: '001',
    date: 'Feb 2026',
    title: 'OLSHKEY – Computer Laboratory Smart Lock System',
    description:
      'A smart automation system that handles laboratory access control and monitors student attendance in real time, complete with SMS notifications to parents and guardians of student activity.',
    highlights: [
      'Automated laboratory access with smart lock integration',
      'Real-time attendance monitoring system',
      'SMS notification gateway for parent/guardian alerts',
      'Structured database with MySQLi for data integrity',
    ],
    tech: ['PHP', 'MySQLi', 'SMS API', 'Authentication', 'Data Integrity'],
  },
]

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="section-tag">04 — Projects</div>
      <h2 className="section-heading">Things I've<br />built</h2>
      <div className="section-line" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="card p-8 relative overflow-hidden group hover:-translate-y-2"
            style={{ background: 'var(--bg3)' }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: 'linear-gradient(to right, var(--accent), transparent)' }}
            />

            <div
              className="text-xs font-mono tracking-widest mb-4"
              style={{ color: 'var(--text3)' }}
            >
              {p.num} · {p.date}
            </div>

            <h3 className="font-display text-xl font-bold mb-4" style={{ color: 'var(--text)', lineHeight: '1.3' }}>
              {p.title}
            </h3>

            <p className="text-sm leading-loose mb-5" style={{ color: 'var(--text2)' }}>
              {p.description}
            </p>

            <ul className="space-y-2 mb-6">
              {p.highlights.map((h) => (
                <li key={h} className="text-xs pl-4 relative" style={{ color: 'var(--text2)' }}>
                  <span className="absolute left-0 top-0.5" style={{ color: 'var(--accent)', fontSize: '0.6rem' }}>▸</span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2 py-1 rounded"
                  style={{
                    color: 'var(--accent)',
                    background: 'rgba(200,169,110,0.08)',
                    border: '1px solid rgba(200,169,110,0.2)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
