import { motion } from 'framer-motion'

export default function GlowButton({
  children,
  onClick,
  href,
  type = 'button',
  className = '',
  size = 'md',
}) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const baseClass = `inline-flex items-center justify-center gap-2 rounded-lg bg-gold font-semibold text-navy transition-colors ${sizes[size]} ${className}`

  const motionProps = {
    whileHover: { scale: 1.05, boxShadow: '0 0 40px rgba(212, 175, 55, 0.6), 0 0 80px rgba(212, 175, 55, 0.3)' },
    whileTap: { scale: 0.98 },
    animate: {
      boxShadow: [
        '0 0 20px rgba(212, 175, 55, 0.4), 0 0 40px rgba(212, 175, 55, 0.2)',
        '0 0 30px rgba(212, 175, 55, 0.5), 0 0 60px rgba(212, 175, 55, 0.3)',
        '0 0 20px rgba(212, 175, 55, 0.4), 0 0 40px rgba(212, 175, 55, 0.2)',
      ],
    },
    transition: {
      boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
      scale: { duration: 0.2 },
    },
  }

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
        {...motionProps}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type={type} onClick={onClick} className={baseClass} {...motionProps}>
      {children}
    </motion.button>
  )
}
