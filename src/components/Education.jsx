import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../data/data'

export default function Education() {
  return (
    <section id="education" className="py-28 border-t border-border">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-blue"
        >
          04 · Education
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl sm:text-4xl font-semibold mt-3 mb-14"
        >
          Where it&apos;s being built.
        </motion.h2>

        <div className="space-y-5">
          {education.map((e, i) => (
            <motion.div
              key={e.institute}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-surface/50 p-7 sm:p-9 flex items-start gap-5 hover:border-blue/40 transition-colors"
            >
              <span className="w-12 h-12 shrink-0 rounded-full border border-border flex items-center justify-center text-blue">
                <GraduationCap size={22} />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold">{e.institute}</h3>
                  <span className="font-mono text-xs text-amber">{e.period}</span>
                </div>
                <p className="text-fog mt-1">{e.degree}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm text-muted">
                  <span>{e.detail}</span>
                  <span>{e.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
