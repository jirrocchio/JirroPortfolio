// Kept for backwards compat — sections now handle their own layout
export default function SectionWrapper({ children, className = '', alt = false, id }) {
  return (
    <section id={id} className={`relative z-10 py-24 px-6 md:px-10 ${className}`}
      style={{ background: alt ? 'var(--bg2)' : 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  )
}
