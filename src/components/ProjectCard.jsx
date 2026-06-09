import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const statusStyles = {
  Live: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', dot: 'bg-emerald-400' },
  'In Development': { bg: 'bg-gold/10', text: 'text-gold', dot: 'bg-gold' },
  Active: { bg: 'bg-blue-500/10', text: 'text-blue-400', dot: 'bg-blue-400' },
  'Full-time': { bg: 'bg-purple-500/10', text: 'text-purple-400', dot: 'bg-purple-400' },
  Launching: { bg: 'bg-gold/10', text: 'text-gold-light', dot: 'bg-gold-light' },
}

export default function ProjectCard({ project }) {
  const style = statusStyles[project.status] || statusStyles.Live
  const isClickable = project.live && project.live !== '#'

  const cardContent = (
    <>
      <div className="mb-4 flex items-center justify-between">
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${style.bg} ${style.text}`}
        >
          <span className={`h-2 w-2 rounded-full animate-pulse-dot ${style.dot}`} />
          {project.status}
        </span>
        <span className="text-xs text-gray-soft">{project.type}</span>
      </div>

      <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-soft">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-navy-mid px-2 py-1 text-xs text-gray-soft"
          >
            {tech}
          </span>
        ))}
      </div>

     {project.github && project.github !== '#' && (
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}
    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold/20 text-gray-soft transition-colors hover:border-gold hover:text-gold"
    aria-label="GitHub"
  >
    <Github size={18} />
  </a>
)}

{project.live && project.live !== '#' && (
  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}
    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold/20 text-gray-soft transition-colors hover:border-gold hover:text-gold"
    aria-label="Live site"
  >
    <ExternalLink size={18} />
  </a>
)}
    </>
  )

  return isClickable ? (
    <motion.a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(212, 175, 55, 0.15)' }}
      className="flex flex-col rounded-2xl border border-gold/10 bg-navy-light p-6 transition-all duration-300 hover:border-gold/30 cursor-pointer"
    >
      {cardContent}
    </motion.a>
  ) : (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(212, 175, 55, 0.15)' }}
      className="flex flex-col rounded-2xl border border-gold/10 bg-navy-light p-6 transition-all duration-300 hover:border-gold/30"
    >
      {cardContent}
    </motion.article>
  )
}