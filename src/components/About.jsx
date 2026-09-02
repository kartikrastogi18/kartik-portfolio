import { motion } from 'framer-motion'
import { about, profile } from '../data/data'

const facts = [
  { label: 'Based at', value: profile.location },
  { label: 'Focus', value: 'Full-Stack & Backend Systems' },
  { label: 'Currently', value: '3rd-Year B.Tech, CSE' },
  { label: 'Also into', value: 'Applied AI/ML' },
]

export default function About() {
  return (
    <section id="about" className="py-28 border-t border-border">
      <div className="max-w-content mx-auto px-6 lg:px-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-blue">01 · About</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 max-w-sm leading-tight">
            Code by day, complexity by night.
          </h2>

          <dl className="mt-10 space-y-5 max-w-sm">
            {facts.map((f) => (
              <div key={f.label} className="flex justify-between border-b border-border pb-3">
                <dt className="text-muted text-sm">{f.label}</dt>
                <dd className="text-sm text-fog text-right">{f.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-5 text-muted text-base sm:text-lg leading-relaxed max-w-2xl"
        >
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
