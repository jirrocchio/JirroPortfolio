import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from './SectionWrapper'

// 👉 STEP 1: Go to https://formspree.io → create a free account
// 👉 STEP 2: Create a new form → copy your endpoint (looks like: https://formspree.io/f/xxxxxxxx)
// 👉 STEP 3: Paste it below replacing the placeholder
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xjglnvvk'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    background: 'var(--bg3)',
    border: '1px solid var(--border2)',
    color: 'var(--text)',
    fontFamily: 'inherit',
  }

  return (
    <SectionWrapper id="contact">
      <div className="section-tag">06 — Contact</div>
      <h2 className="section-heading">Let's work<br />together</h2>
      <div className="section-line" />

      <div className="grid md:grid-cols-2 gap-16">

        {/* Left — Info */}
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
                onMouseEnter={(e) => {
                  if (!href) return
                  e.currentTarget.style.color = 'var(--accent)'
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text2)'
                  e.currentTarget.style.borderColor = 'var(--border2)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <Icon size={16} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence mode="wait">

            {/* ── Success state ── */}
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center text-center h-full py-16 rounded-2xl"
                style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                >
                  <CheckCircle size={52} style={{ color: 'var(--accent)' }} className="mb-4 mx-auto" />
                </motion.div>
                <h4 className="font-display text-xl font-bold mb-2" style={{ color: 'var(--text)' }}>Message Sent!</h4>
                <p className="text-sm mb-6" style={{ color: 'var(--text2)' }}>
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-secondary text-xs px-6 py-2"
                >
                  Send Another
                </button>
              </motion.div>

            ) : (

              /* ── Form state ── */
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest font-semibold" style={{ color: 'var(--accent)', letterSpacing: '0.12em' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    disabled={status === 'sending'}
                    className="rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 disabled:opacity-50"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border2)')}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest font-semibold" style={{ color: 'var(--accent)', letterSpacing: '0.12em' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    disabled={status === 'sending'}
                    className="rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 disabled:opacity-50"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border2)')}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest font-semibold" style={{ color: 'var(--accent)', letterSpacing: '0.12em' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={5}
                    disabled={status === 'sending'}
                    className="rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 resize-y disabled:opacity-50"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border2)')}
                  />
                </div>

                {/* Error notice */}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm px-4 py-3 rounded-xl"
                    style={{ background: 'rgba(220,60,60,0.08)', border: '1px solid rgba(220,60,60,0.25)', color: '#e07070' }}
                  >
                    <AlertCircle size={15} />
                    Something went wrong. Please try again or email me directly.
                  </motion.div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader size={14} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Send Message
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </SectionWrapper>
  )
}