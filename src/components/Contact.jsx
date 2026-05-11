import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <SectionWrapper id="contact">
      <div className="section-tag">06 — Contact</div>
      <h2 className="section-heading">Let's work<br />together</h2>
      <div className="section-line" />

      <div className="grid md:grid-cols-2 gap-16">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text)' }}>
            Open to new opportunities
          </h3>
          <p className="text-sm leading-loose mb-8" style={{ color: 'var(--text2)' }}>
            Whether you have a project in mind, a role to fill, or just want to connect — I'd love to hear from you. Based in Nueva Ecija, Philippines and available remotely.
          </p>

          <div className="space-y-3">
            {[
              { icon: Mail, label: 'haroldjirro@gmail.com', href: 'mailto:haroldjirro@gmail.com' },
              { icon: Phone, label: '+63-954-2868-276', href: 'tel:+639542868276' },
              { icon: MapPin, label: 'Nueva Ecija, Philippines', href: null },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href || undefined}
                className="flex items-center gap-4 p-4 rounded-xl text-sm transition-all duration-200"
                style={{
                  background: 'var(--bg3)',
                  border: '1px solid var(--border2)',
                  color: 'var(--text2)',
                  cursor: href ? 'pointer' : 'default',
                }}
                onMouseEnter={(e) => { if (href) e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateX(4px)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.transform = 'translateX(0)' }}
              >
                <Icon size={16} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {[
            { label: 'Your Name', type: 'text', name: 'name', placeholder: 'John Smith' },
            { label: 'Email Address', type: 'email', name: 'email', placeholder: 'john@example.com' },
          ].map((field) => (
            <div key={field.name} className="flex flex-col gap-2">
              <label
                className="text-xs uppercase tracking-widest font-semibold"
                style={{ color: 'var(--accent)', letterSpacing: '0.12em' }}
              >
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                required
                className="rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200"
                style={{
                  background: 'var(--bg3)',
                  border: '1px solid var(--border2)',
                  color: 'var(--text)',
                  fontFamily: 'inherit',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--border2)')}
              />
            </div>
          ))}

          <div className="flex flex-col gap-2">
            <label
              className="text-xs uppercase tracking-widest font-semibold"
              style={{ color: 'var(--accent)', letterSpacing: '0.12em' }}
            >
              Message
            </label>
            <textarea
              name="message"
              placeholder="Tell me about your project or opportunity..."
              required
              rows={5}
              className="rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 resize-y"
              style={{
                background: 'var(--bg3)',
                border: '1px solid var(--border2)',
                color: 'var(--text)',
                fontFamily: 'inherit',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--border2)')}
            />
          </div>

          <button
            type="submit"
            className="btn-primary flex items-center gap-2"
            style={sent ? { background: '#4a7c59' } : {}}
          >
            {sent ? '✓ Message Sent!' : (
              <>
                <Send size={14} />
                Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  )
}
