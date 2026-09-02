import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2 } from 'lucide-react'
import { navLinks, profile } from '../data/data'

export default function Navbar({ active, scrolled }) {
  const [open, setOpen] = useState(false)

  const goTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-content mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <button
          onClick={() => goTo('home')}
          className="font-display text-lg text-fog tracking-tight flex items-center gap-2"
        >
          <Code2 size={20} className="text-blue" />
          <span className="font-semibold">Kartik</span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => goTo(link.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  active === link.id ? 'text-fog' : 'text-muted hover:text-fog'
                }`}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-blue rounded-full"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeUrl}
          download="Kartik_Rastogi_Resume.pdf"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-fog hover:border-blue hover:text-blue transition-colors"
        >
          Resume
        </a>

        <button
          className="md:hidden text-fog"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-ink border-b border-border"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => goTo(link.id)}
                    className={`w-full text-left py-2.5 text-sm font-medium ${
                      active === link.id ? 'text-blue' : 'text-muted'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={profile.resumeUrl}
                  download="Kartik_Rastogi_Resume.pdf"
                  className="inline-block mt-2 text-sm font-medium text-amber"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
