import { motion } from 'framer-motion'
import GlowButton from './GlowButton'

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  tags,
  cta,
  onCtaClick,
  badge,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, boxShadow: '0 12px 40px rgba(212, 175, 55, 0.15)' }}
      className="group relative flex flex-col rounded-2xl border border-gold/10 bg-navy-light p-8 transition-all duration-300 hover:border-gold/40"
    >
      {badge && (
        <span className="absolute right-4 top-4 rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
          {badge}
        </span>
      )}
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold/20">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-soft">{description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-gold/20 bg-navy-mid/50 px-3 py-1 text-xs text-gray-soft"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-8">
        <GlowButton onClick={onCtaClick} size="sm">
          {cta}
        </GlowButton>
      </div>
    </motion.div>
  )
}
