import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'

const highlights = [
  { icon: '⚙️', title: 'Full-Stack Development', desc: 'PHP, MySQLi, Java, C# — building robust backend systems with clean architecture' },
  { icon: '🎨', title: 'UI/UX & Graphic Design', desc: 'Figma, Canva — designing interfaces that are both intuitive and visually refined' },
  { icon: '🔐', title: 'System Security', desc: 'Authentication systems, honeypot implementation, and data integrity assurance' },
  { icon: '🎬', title: 'Video Editing', desc: 'Creative storytelling through motion — producing polished visual content' },
]

export default function About() {
  return (
    <SectionWrapper id="about" alt>
      <div className="section-tag">01 — About</div>
      <h2 className="section-heading">Crafted with passion,<br />built with precision</h2>
      <div className="section-line" />

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-5" style={{ color: 'var(--text2)', lineHeight: '1.9' }}>
          <p>
            I'm an Information Technology graduate from Our Lady of the Sacred Heart College of Guimba, with a strong foundation in both software development and visual design. My work spans the full spectrum — from backend systems to polished user interfaces.
          </p>
          <p>
            During my internship at ESJAY Auto Corporation, I contributed to operational efficiency through data management, documentation, and client communications — developing a sharp attention to detail and workflow discipline.
          </p>
          <p>
            I'm passionate about creating systems that are not just functional but beautiful — blending technical rigor with creative vision in every project I touch.
          </p>
        </div>

        <div className="grid gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card p-5 hover:-translate-x-1 cursor-default"
            >
              <div className="text-2xl mb-2">{h.icon}</div>
              <h4 className="text-sm font-semibold mb-1 tracking-wide" style={{ color: 'var(--accent)' }}>{h.title}</h4>
              <p className="text-sm" style={{ color: 'var(--text2)' }}>{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
