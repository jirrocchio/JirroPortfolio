import { motion } from 'framer-motion'

const items = [
  {
    icon: '🎓',
    title: 'Bachelor of Science in Information Technology',
    institution: 'Our Lady of the Sacred Heart College of Guimba, Inc.',
    period: '2022 – 2026',
    location: 'Guimba, Nueva Ecija',
    desc: null,
    tag: 'Degree',
  },
  {
    icon: '🤝',
    title: 'Member – Junior Philippine Computer Society',
    institution: 'Academic & Technical Organization',
    period: '2022 – 2026',
    location: null,
    desc: 'Participated in academic and technical activities related to information technology. Engaged in collaborative learning, workshops, and peer-based knowledge sharing.',
    tag: 'Organization',
  },
]

export default function Education() {
  return (
    <section id="education" className="relative z-10 py-24 px-6 md:px-10" style={{ background: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="section-tag">05 — Education</div>
          <h2 className="section-heading">Academic<br />foundation</h2>
          <div className="section-line" />
        </motion.div>

        <div className="space-y-5">
          {items.map((item, i) => (
            <motion.div key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.55 }}
              className="card p-7 md:p-8 flex flex-col sm:flex-row gap-5 items-start hover:-translate-y-0.5 group"
            >
              <div className="w-14 h-14 min-w-[3.5rem] rounded-2xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'var(--accent-soft)', border: '1px solid var(--border)' }}>
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="font-display text-lg font-bold leading-tight" style={{ color: 'var(--text)' }}>
                    {item.title}
                  </h3>
                  <span className="text-xs px-2.5 py-1 rounded-full flex-shrink-0"
                    style={{ background: 'var(--accent-soft)', color: 'var(--accent)', border: '1px solid var(--border)' }}>
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm font-medium mb-1" style={{ color: 'var(--accent)' }}>{item.institution}</p>
                <p className="text-xs font-mono mb-3" style={{ color: 'var(--text3)' }}>
                  {item.period}{item.location ? ` · ${item.location}` : ''}
                </p>
                {item.desc && (
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text2)' }}>{item.desc}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
