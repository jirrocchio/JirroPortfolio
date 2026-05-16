import { motion } from 'framer-motion'
import { MapPin, Mail, Zap } from 'lucide-react'

const highlights = [
  { icon: '⚙️', title: 'Full-Stack Development', desc: 'PHP, MySQLi, Java, C# — building robust backend systems with clean architecture' },
  { icon: '🎨', title: 'UI/UX & Graphic Design', desc: 'Figma, Canva — designing interfaces that are intuitive and visually refined' },
  { icon: '🔐', title: 'System Security', desc: 'Authentication systems, honeypot implementation, and data integrity assurance' },
  { icon: '🎬', title: 'Video Editing', desc: 'Creative storytelling through motion — producing polished visual content' },
]

export default function About() {
  return (
    <section id="about" className="relative z-10 py-24 px-6 md:px-10" style={{ background: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="section-tag">01 — About</div>
          <h2 className="section-heading">Crafted with passion,<br />built with precision</h2>
          <div className="section-line" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Text side */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="space-y-4 mb-8" style={{ color: 'var(--text2)', lineHeight: '1.9' }}>
              <p>I'm an Information Technology graduate from Our Lady of the Sacred Heart College of Guimba, with a strong foundation in both software development and visual design.</p>
              <p>During my internship at ESJAY Auto Corporation, I contributed to operational efficiency through data management, documentation, and client communications — developing sharp attention to detail and workflow discipline.</p>
              <p>I'm passionate about creating systems that are not just functional but beautiful — blending technical rigor with creative vision in every project I touch.</p>
            </div>

            {/* Info chips */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: MapPin, text: 'Nueva Ecija, Philippines' },
                { icon: Mail, text: 'haroldjirro@gmail.com' },
                { icon: Zap, text: 'Open to Work' },
              ].map(({ icon: Icon, text }) => (
                <span key={text} className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full"
                  style={{ background: 'var(--accent-soft)', color: 'var(--accent)', border: '1px solid var(--border)' }}>
                  <Icon size={12} /> {text}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Highlight cards */}
          <div className="grid gap-4">
            {highlights.map((h, i) => (
              <motion.div key={h.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card p-5 flex gap-4 items-start hover:-translate-y-0.5 group"
              >
                <div className="text-2xl mt-0.5 group-hover:scale-110 transition-transform">{h.icon}</div>
                <div>
                  <h4 className="text-sm font-semibold mb-1" style={{ color: 'var(--accent)' }}>{h.title}</h4>
                  <p className="text-sm" style={{ color: 'var(--text2)' }}>{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
