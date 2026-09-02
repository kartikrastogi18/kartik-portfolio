import { motion } from 'framer-motion'
import { BrainCircuit, Database } from 'lucide-react'
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiPostman,
  SiTailwindcss,
} from 'react-icons/si'
import { skills, aimlFocus } from '../data/data'

const iconMap = {
  'C++': SiCplusplus,
  C: SiC,
  JavaScript: SiJavascript,
  Python: SiPython,
  SQL: Database,
  React: SiReact,
  HTML: SiHtml5,
  CSS: SiCss,
  'Tailwind CSS': SiTailwindcss,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Docker: SiDocker,
  Git: SiGit,
  Postman: SiPostman,
  'Machine Learning': BrainCircuit,
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 border-t border-border">
      <div className="max-w-content mx-auto px-6 lg:px-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl sm:text-5xl font-bold"
        >
          My <span className="text-blue">Skills</span>
        </motion.h2>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-12">
          {skills.map((name, i) => {
            const Icon = iconMap[name]
            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.06 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-blue flex items-center justify-center text-blue hover:bg-blue/10 hover:shadow-[0_0_24px_rgba(91,141,239,0.35)] transition-all duration-300">
                  {Icon && <Icon size={38} />}
                </div>
                <p className="font-display text-lg font-semibold text-blue">{name}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 rounded-2xl border border-border bg-surface/50 px-6 sm:px-10 py-8"
        >
          <p className="font-mono text-sm text-amber">// where I go deeper</p>
          <h3 className="font-display text-2xl sm:text-3xl font-semibold mt-2">
            Especially strong in AI/ML.
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {aimlFocus.map((item) => (
              <span
                key={item}
                className="px-5 py-2.5 rounded-full border border-amber/40 text-amber font-medium text-base hover:bg-amber/10 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
