import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/data'

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-content mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="font-mono text-sm text-muted">
          {profile.name} <span className="text-border">©</span> 2026
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted hover:text-blue transition-colors">
            <Github size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted hover:text-blue transition-colors">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-muted hover:text-blue transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
