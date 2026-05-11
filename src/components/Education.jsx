import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'

const items = [
  {
    icon: '🎓',
    title: 'Bachelor of Science in Information Technology',
    institution: 'Our Lady of the Sacred Heart College of Guimba, Inc.',
    period: '2022 – 2026',
    location: 'Guimba, Nueva Ecija',
    desc: null,
  },
  {
    icon: '🤝',
    title: 'Member – Junior Philippine Computer Society',
    institution: 'Academic & Technical Organization',
    period: '2022 – 2026',
    location: null,
    desc: 'Participated in academic and technical activities related to information technology. Engaged in collaborative learning, workshops, and peer-based knowledge sharing.',
  },
]

export default function Education() {
  return (
    <SectionWrapper id="education" alt>
      <div className="section-tag">05 — Education</div>
      <h2 className="section-heading">Academic<br />foundation</h2>
      <div className="section-line" />

      <div className="space-y-5">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.55 }}
            className="card p-8 flex flex-col sm:flex-row gap-5 items-start hover:translate-x-1"
          >
            <div
              className="w-14 h-14 min-w-14 rounded-xl flex items-center justify-center text-2xl"
              style={{ background: 'var(--card2)', border: '1px solid var(--border)' }}
            >
              {item.icon}
            </div>
            <div>
              <h3 className="font-display text-lg font-bold mb-1" style={{ color: 'var(--text)' }}>
                {item.title}
              </h3>
              <p className="text-sm font-medium mb-1" style={{ color: 'var(--accent2)' }}>
                {item.institution}
              </p>
              <p className="text-xs font-mono" style={{ color: 'var(--text3)' }}>
                {item.period}{item.location ? ` · ${item.location}` : ''}
              </p>
              {item.desc && (
                <p className="text-sm mt-3 leading-relaxed" style={{ color: 'var(--text2)' }}>
                  {item.desc}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
