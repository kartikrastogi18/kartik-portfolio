import { motion } from 'framer-motion'
import { experience } from '../data/data'

export default function Experience() {
  return (
    <section id="experience" className="py-28 border-t border-border">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-blue"
        >
          05 · Experience
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl sm:text-4xl font-semibold mt-3 mb-14"
        >
Beyond the codebase.
        </motion.h2>

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-border" />
          <div className="space-y-12">
            {experience.map((e, i) => (
              <motion.div
                key={e.role + e.org}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-8 sm:-left-10 top-1.5 w-3.5 h-3.5 rounded-full bg-ink border-2 border-blue" />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-xl font-semibold">{e.role}</h3>
                  <span className="text-muted text-sm">— {e.org}</span>
                  <span className="font-mono text-xs text-amber ml-auto">{e.period}</span>
                </div>
                <p className="text-muted mt-2 max-w-2xl leading-relaxed">{e.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
