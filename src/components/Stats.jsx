import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Layers, GraduationCap, Calendar } from 'lucide-react'

const stats = [
  { icon: GraduationCap, label: 'Years of Study', value: 4, suffix: '+' },
  { icon: Code2, label: 'Projects Built', value: 5, suffix: '+' },
  { icon: Layers, label: 'Skills Mastered', value: 15, suffix: '+' },
  { icon: Calendar, label: 'Months Experience', value: 3, suffix: '' },
]

function CountUp({ target, suffix, start }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let current = 0
    const step = Math.ceil(target / 40)
    const timer = setInterval(() => {
      current += step
      if (current >= target) { setCount(target); clearInterval(timer) }
      else setCount(current)
    }, 35)
    return () => clearInterval(timer)
  }, [start, target])

  return <span>{count}{suffix}</span>
}

export default function Stats() {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative z-10 py-16 px-6 md:px-10" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card p-6 text-center hover:-translate-y-1 group"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'var(--accent-soft)', border: '1px solid var(--border)' }}>
                  <Icon size={20} style={{ color: 'var(--accent)' }} />
                </div>
                <div className="font-display font-black text-3xl mb-1" style={{ color: 'var(--accent)' }}>
                  <CountUp target={s.value} suffix={s.suffix} start={started} />
                </div>
                <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--text3)' }}>{s.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
