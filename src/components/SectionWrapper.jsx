import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function SectionWrapper({ children, className = '', alt = false, id }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      className={`py-24 px-6 md:px-10 ${className}`}
      style={{ background: alt ? 'var(--bg2)' : 'var(--bg)' }}
    >
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 28 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  )
}
