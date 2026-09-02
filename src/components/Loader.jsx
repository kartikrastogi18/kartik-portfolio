import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="font-mono text-sm text-muted flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-lg text-fog">
              <span className="text-blue">const</span>
              <span>portfolio</span>
              <span className="text-amber">=</span>
              <span className="text-blue">await</span>
              <span>load()</span>
              <span className="w-2 h-5 bg-blue animate-blink inline-block" />
            </div>
            <div className="w-48 h-[2px] bg-surface2 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-blue to-amber"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
