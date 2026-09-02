import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Download, ArrowDown } from 'lucide-react'
import { profile } from '../data/data'

function useTypewriter(words, speed = 65, pause = 1400) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    let timeout

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setIndex((i) => i + 1)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, index, words, speed, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(profile.roles)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 grid-fade pointer-events-none" />
      <div className="absolute -top-24 right-[-10%] w-[36rem] h-[36rem] rounded-full bg-blue/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[28rem] h-[28rem] rounded-full bg-amber/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-content mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center w-full">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:hidden w-24 h-24 rounded-full overflow-hidden border-2 border-blue/50 shadow-xl mb-6"
          >
            <img src={profile.photo} alt={profile.name} className="w-full h-full object-cover" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-blue mb-5"
          >
            hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]"
          >
            {profile.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-muted mt-2 leading-tight"
          >
            Building things that <span className="text-gradient">actually work.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-muted max-w-lg text-base sm:text-lg"
          >
            {profile.role}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-3 h-7 font-mono text-base sm:text-lg text-amber"
          >
            &gt; {typed}
            <span className="inline-block w-[2px] h-5 bg-amber ml-1 align-middle animate-blink" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full bg-blue text-ink font-semibold px-6 py-3 text-sm hover:bg-blue-soft transition-colors"
            >
              View Projects
            </button>
            <a
              href={profile.resumeUrl}
              download="Kartik_Rastogi_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-fog hover:border-amber hover:text-amber transition-colors"
            >
              <Download size={16} /> Resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-border text-fog hover:border-blue hover:text-blue transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-border text-fog hover:border-blue hover:text-blue transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative hidden lg:flex justify-center"
        >
          <div className="relative w-[22rem] h-[22rem]">
            {/* rotating gradient ring */}
            <div
              className="absolute -inset-3 rounded-[2.5rem] opacity-70 animate-spin"
              style={{
                background: 'conic-gradient(from 0deg, #5B8DEF, #F2A65A, transparent 60%, #5B8DEF)',
                animationDuration: '8s',
              }}
            />
            <div className="absolute inset-0 rounded-[2.2rem] bg-ink" />

            {/* photo */}
            <div className="absolute inset-[6px] rounded-[2.2rem] overflow-hidden border border-border shadow-2xl animate-floatSlow">
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-full h-full object-cover grayscale-[15%] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            </div>

            {/* floating glass badges */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{ opacity: { delay: 1, duration: 0.5 }, y: { duration: 4, repeat: Infinity, delay: 1 } }}
              className="absolute -top-5 -right-8 rounded-xl border border-border bg-surface/80 backdrop-blur-md px-4 py-2.5 shadow-xl"
            >
              <p className="font-display text-lg font-semibold text-amber leading-none">500+</p>
              <p className="font-mono text-[10px] text-muted mt-1">LeetCode Solved</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [0, 8, 0] }}
              transition={{ opacity: { delay: 1.2, duration: 0.5 }, y: { duration: 4.5, repeat: Infinity, delay: 1.2 } }}
              className="absolute -bottom-4 -left-8 rounded-xl border border-border bg-surface/80 backdrop-blur-md px-4 py-2.5 shadow-xl"
            >
              <p className="font-mono text-[10px] text-muted">// currently</p>
              <p className="text-sm text-fog font-medium mt-0.5">Open to opportunities</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="absolute top-1/2 -right-14 -translate-y-1/2 rounded-full border border-border bg-surface/80 backdrop-blur-md px-3 py-1.5 shadow-xl"
            >
              <p className="font-mono text-[10px] text-blue">JNU &apos;28</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { duration: 1.8, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-fog transition-colors"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  )
}

