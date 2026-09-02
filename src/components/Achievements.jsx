import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, Award, Code2 } from 'lucide-react'
import { achievements } from '../data/data'

const icons = [Code2, Trophy, Award]

function Counter({ target }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState('0')

  const numeric = parseInt(target.replace(/\D/g, ''), 10)
  const suffix = target.replace(/[0-9]/g, '')

  useEffect(() => {
    if (!inView || Number.isNaN(numeric)) {
      if (Number.isNaN(numeric)) setDisplay(target)
      return
    }
    let frame
    const duration = 1200
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * numeric).toString())
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, numeric, target])

  return (
    <span ref={ref}>
      {Number.isNaN(numeric) ? target : `${display}${suffix}`}
    </span>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 border-t border-border">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-blue"
        >
          06 · Achievements
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl sm:text-4xl font-semibold mt-3 mb-14"
        >
Proof, not promises.
        </motion.h2>

        <div className="grid sm:grid-cols-3 gap-5">
          {achievements.map((a, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-surface/50 p-8 hover:border-amber/40 transition-colors"
              >
                <Icon size={22} className="text-amber mb-6" />
                <div className="font-display text-4xl font-semibold text-gradient">
                  <Counter target={a.value} />
                </div>
                <p className="text-muted text-sm mt-3">{a.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
