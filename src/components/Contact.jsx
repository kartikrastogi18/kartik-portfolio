import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, Check } from 'lucide-react'
import { profile } from '../data/data'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="py-28 border-t border-border">
      <div className="max-w-content mx-auto px-6 lg:px-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-blue">07 · Contact</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 max-w-sm leading-tight">
            Let&apos;s build something together.
          </h2>
          <p className="text-muted mt-5 max-w-sm leading-relaxed">
            Open to internships, collaborative projects, and interesting backend problems. I usually reply within a day.
          </p>

          <div className="mt-10 space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-fog hover:text-blue transition-colors group"
            >
              <span className="w-10 h-10 flex items-center justify-center rounded-full border border-border group-hover:border-blue transition-colors">
                <Mail size={16} />
              </span>
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-fog hover:text-blue transition-colors group"
            >
              <span className="w-10 h-10 flex items-center justify-center rounded-full border border-border group-hover:border-blue transition-colors">
                <Github size={16} />
              </span>
              github.com/kartikrastogi18
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-fog hover:text-blue transition-colors group"
            >
              <span className="w-10 h-10 flex items-center justify-center rounded-full border border-border group-hover:border-blue transition-colors">
                <Linkedin size={16} />
              </span>
              linkedin.com/in/kartikrastogi18
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={onSubmit}
          className="rounded-2xl border border-border bg-surface/50 p-7 sm:p-9 space-y-5"
        >
          <div>
            <label className="block text-sm text-muted mb-2" htmlFor="name">Name</label>
            <input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-surface2 border border-border rounded-lg px-4 py-3 text-sm text-fog placeholder:text-muted focus:border-blue outline-none transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm text-muted mb-2" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-surface2 border border-border rounded-lg px-4 py-3 text-sm text-fog placeholder:text-muted focus:border-blue outline-none transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm text-muted mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-surface2 border border-border rounded-lg px-4 py-3 text-sm text-fog placeholder:text-muted focus:border-blue outline-none transition-colors resize-none"
              placeholder="What are you thinking of building?"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-blue text-ink font-semibold py-3 text-sm hover:bg-blue-soft transition-colors"
          >
            {sent ? (
              <>
                <Check size={16} /> Opening your mail client…
              </>
            ) : (
              <>
                <Send size={16} /> Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
