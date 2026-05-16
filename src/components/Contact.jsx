import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xjglnvvk'

export default function Contact() {
  const [status, setStatus] = useState('idle')
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
      if (res.ok) { setStatus('success'); setForm({ name: '', email: '', message: '' }) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  const inputBase = {
    background: 'var(--bg2)',
    border: '1.5px solid var(--border2)',
    color: 'var(--text)',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.2s',
    width: '100%',
    borderRadius: '12px',
    padding: '0.85rem 1.1rem',
    fontSize: '0.9rem',
  }

  return (
    <section id="contact" className="relative z-10 py-24 px-6 md:px-10" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="section-tag">06 — Contact</div>
          <h2 className="section-heading">Let's work<br />together</h2>
          <div className="section-line" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text)' }}>Open to new opportunities</h3>
            <p className="text-sm leading-loose mb-8" style={{ color: 'var(--text2)' }}>
              Whether you have a project in mind, a role to fill, or just want to connect — I'd love to hear from you. Based in Nueva Ecija, Philippines and available remotely.
            </p>
            <div className="space-y-3">
              {[
                { icon: Mail, label: 'haroldjirro@gmail.com', href: 'mailto:haroldjirro@gmail.com' },
                { icon: Phone, label: '+63-954-2868-276', href: 'tel:+639542868276' },
                { icon: MapPin, label: 'Nueva Ecija, Philippines', href: null },
              ].map(({ icon: Icon, label, href }) => (
                <a key={label} href={href || undefined}
                  className="flex items-center gap-4 p-4 rounded-2xl text-sm transition-all duration-200 group"
                  style={{ background: 'var(--bg3)', border: '1px solid var(--border2)', color: 'var(--text2)', cursor: href ? 'pointer' : 'default' }}
                  onMouseEnter={e => { if (href) { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateX(5px)' } }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.transform = 'none' }}
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--accent-soft)', border: '1px solid var(--border)' }}>
                    <Icon size={15} style={{ color: 'var(--accent)' }} />
                  </div>
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div key="success"
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-16 rounded-2xl"
                  style={{ background: 'var(--bg3)', border: '1.5px solid var(--border)' }}>
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}>
                    <CheckCircle size={52} style={{ color: 'var(--accent)' }} className="mb-4 mx-auto" />
                  </motion.div>
                  <h4 className="font-display text-xl font-bold mb-2" style={{ color: 'var(--text)' }}>Message Sent!</h4>
                  <p className="text-sm mb-6" style={{ color: 'var(--text2)' }}>Thanks for reaching out. I'll get back to you as soon as possible.</p>
                  <button onClick={() => setStatus('idle')} className="btn-secondary text-xs px-6 py-2">Send Another</button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { label: 'Your Name', type: 'text', name: 'name', placeholder: 'John Smith' },
                    { label: 'Email Address', type: 'email', name: 'email', placeholder: 'john@example.com' },
                  ].map(f => (
                    <div key={f.name} className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-widest font-semibold" style={{ color: 'var(--accent)' }}>{f.label}</label>
                      <input type={f.type} name={f.name} value={form[f.name]} onChange={handleChange}
                        placeholder={f.placeholder} required disabled={status === 'sending'}
                        style={inputBase}
                        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border2)'}
                      />
                    </div>
                  ))}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest font-semibold" style={{ color: 'var(--accent)' }}>Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      required rows={5} disabled={status === 'sending'}
                      style={{ ...inputBase, resize: 'vertical', height: 'auto' }}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border2)'}
                    />
                  </div>
                  {status === 'error' && (
                    <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-sm px-4 py-3 rounded-xl"
                      style={{ background: 'rgba(220,60,60,0.08)', border: '1px solid rgba(220,60,60,0.2)', color: '#c0392b' }}>
                      <AlertCircle size={15} /> Something went wrong. Please try again or email me directly.
                    </motion.div>
                  )}
                  <button type="submit" disabled={status === 'sending'} className="btn-primary flex items-center gap-2 disabled:opacity-60">
                    {status === 'sending' ? <><Loader size={14} className="animate-spin" />Sending...</> : <><Send size={14} />Send Message</>}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
