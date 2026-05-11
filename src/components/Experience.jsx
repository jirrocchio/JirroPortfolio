import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'

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
    <SectionWrapper id="experience" alt>
      <div className="section-tag">03 — Experience</div>
      <h2 className="section-heading">Where I've<br />contributed</h2>
      <div className="section-line" />

      <div className="relative pl-8" style={{ borderLeft: '1px solid', borderImageSlice: 1, borderImageSource: 'linear-gradient(to bottom, var(--accent), transparent)' }}>
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="relative mb-12 pl-8"
          >
            {/* Dot */}
            <span
              className="absolute -left-10 top-1.5 w-2.5 h-2.5 rounded-full"
              style={{ background: 'var(--accent)', boxShadow: '0 0 20px rgba(200,169,110,0.4)' }}
            />

            <div className="card p-8 hover:bg-opacity-80">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{
                    color: 'var(--accent)',
                    background: 'var(--card2)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {exp.date}
                </span>
                <span className="text-xs uppercase tracking-wide" style={{ color: 'var(--text3)' }}>
                  {exp.role}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold mb-1" style={{ color: 'var(--text)' }}>
                {exp.company}
              </h3>
              <p className="text-sm mb-5" style={{ color: 'var(--accent2)' }}>{exp.location}</p>

              <ul className="space-y-3">
                {exp.responsibilities.map((r) => (
                  <li
                    key={r}
                    className="text-sm pl-4 relative leading-relaxed"
                    style={{ color: 'var(--text2)' }}
                  >
                    <span
                      className="absolute left-0 top-1"
                      style={{ color: 'var(--accent)', fontSize: '0.6rem' }}
                    >▸</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
