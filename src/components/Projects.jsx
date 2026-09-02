import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/data'

export default function Projects() {
  return (
    <section id="projects" className="py-28 border-t border-border">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-blue"
        >
          03 · Projects
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl sm:text-4xl font-semibold mt-3 mb-14"
        >
Ideas, compiled and deployed.
        </motion.h2>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectRow({ project, index }) {
  const reversed = index % 2 === 1

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-2xl border border-border bg-surface/50 p-7 sm:p-9 hover:border-blue/40 transition-colors overflow-hidden"
    >
      <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-blue/0 group-hover:bg-blue/10 blur-[80px] transition-colors duration-500 pointer-events-none" />

      <div className={`relative grid lg:grid-cols-[1fr_auto] gap-8 items-start ${reversed ? 'lg:text-right' : ''}`}>
        <div>
          <div className={`flex items-center gap-3 flex-wrap ${reversed ? 'lg:justify-end' : ''}`}>
            <span className="font-mono text-xs text-muted">{project.year}</span>
            <span className="w-1 h-1 rounded-full bg-muted" />
            <span className="font-mono text-xs text-amber">{project.tag}</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-semibold mt-3">{project.name}</h3>

          <p className="text-muted mt-3 max-w-2xl leading-relaxed lg:ml-auto">{project.description}</p>

          <ul
            className={`mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-2 max-w-2xl text-sm text-fog/80 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-400 ${
              reversed ? 'lg:ml-auto' : ''
            }`}
          >
            {project.features.map((f) => (
              <li key={f} className={`flex gap-2 ${reversed ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
                <span className="text-blue mt-1.5 w-1 h-1 rounded-full bg-blue shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className={`flex flex-wrap gap-2 mt-6 ${reversed ? 'lg:justify-end' : ''}`}>
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-xs px-2.5 py-1 rounded-md border border-border text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex lg:flex-col gap-2.5 shrink-0">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium hover:border-blue hover:text-blue transition-colors"
          >
            <Github size={16} /> Code
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue text-ink px-4 py-2.5 text-sm font-semibold hover:bg-blue-soft transition-colors"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
