import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const experiences = [
  {
    date: 'Jan 2026 – Mar 2026',
    role: 'IT Intern',
    company: 'ESJAY Auto Corporation',
    location: 'Quezon Avenue · Nueva Ecija, Philippines',
    responsibilities: [
      'Assisted in encoding labor amounts and service-related data into the system, ensuring accuracy and completeness of records.',
      'Organized and sorted documents to maintain proper filing and easy retrieval of important records.',
      'Supported daily operations by preparing reports, printing documents, and assisting in appointment scheduling.',
      'Performed text blasting to inform customers about service updates and scheduled appointments.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-24 px-6 md:px-10" style={{ background: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="section-tag">03 — Experience</div>
          <h2 className="section-heading">Where I've<br />contributed</h2>
          <div className="section-line" />
        </motion.div>

        <div className="relative pl-6 md:pl-10" style={{ borderLeft: '2px solid var(--border)' }}>
          {experiences.map((exp, i) => (
            <motion.div key={exp.company}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative mb-10 pl-6 md:pl-10"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[calc(1.5rem+1px)] md:-left-[calc(2.5rem+1px)] top-5 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                style={{ background: 'var(--bg3)', borderColor: 'var(--accent)', boxShadow: '0 0 0 4px var(--accent-soft)' }}>
                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
              </div>

              <div className="card p-7 md:p-8 hover:-translate-y-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-mono px-3 py-1 rounded-full font-medium"
                    style={{ background: 'var(--accent-soft)', color: 'var(--accent)', border: '1px solid var(--border)' }}>
                    {exp.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wide"
                    style={{ color: 'var(--text3)' }}>
                    <Briefcase size={11} /> {exp.role}
                  </span>
                </div>

                <h3 className="font-display text-xl md:text-2xl font-bold mb-1" style={{ color: 'var(--text)' }}>
                  {exp.company}
                </h3>
                <p className="text-sm font-medium mb-5" style={{ color: 'var(--accent)' }}>{exp.location}</p>

                <ul className="space-y-3">
                  {exp.responsibilities.map((r) => (
                    <li key={r} className="text-sm pl-5 relative leading-relaxed" style={{ color: 'var(--text2)' }}>
                      <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: 'var(--accent)' }} />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
