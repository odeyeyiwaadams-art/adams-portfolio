import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { SiReact, SiMongodb, SiGoogle, SiVercel } from 'react-icons/si'
import GlowButton from '../components/GlowButton'
import ProfileImage from '../components/ProfileImage'

const headingLines = [
  'I Find What\'s Broken.',
  'Build What\'s Missing.',
  'Grow What\'s Working.',
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-20 h-72 w-72 rotate-45 border border-gold/10" />
        <div className="absolute left-10 bottom-40 h-48 w-48 rounded-full border border-gold/10" />
        <div className="absolute right-1/3 top-1/2 h-32 w-32 border border-gold/5 rotate-12" />
      </div>

      <div className="section-padding relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.span
              variants={item}
              className="shimmer-badge inline-block rounded-full border border-gold/40 px-4 py-2 text-xs font-medium tracking-wide text-gold sm:text-sm"
            >
              Digital Sales & Growth Consultant
            </motion.span>

            <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {headingLines.map((line, i) => (
                <motion.span
                  key={line}
                  variants={item}
                  className="block"
                  custom={i}
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-gray-soft sm:text-lg">
              Helping businesses and individuals unlock growth through digital strategy,
              systems, and execution — across industries, across borders.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
              <GlowButton onClick={() => scrollTo('#projects')}>See My Work</GlowButton>
              <motion.a
                href="https://wa.me/2349127811233"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, borderColor: 'rgba(212, 175, 55, 0.8)' }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-lg border-2 border-gold/50 px-6 py-3 font-semibold text-gold transition-colors hover:bg-gold/10"
              >
                <FaWhatsapp size={20} />
                WhatsApp Me
              </motion.a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap gap-4 text-xs text-gray-soft sm:gap-6 sm:text-sm"
            >
              <span className="rounded-lg border border-gold/20 bg-navy-light/50 px-4 py-2">
                ₦2.6M Closed
              </span>
              <span className="rounded-lg border border-gold/20 bg-navy-light/50 px-4 py-2">
                6 Industries
              </span>
              <span className="rounded-lg border border-gold/20 bg-navy-light/50 px-4 py-2">
                2 Apps Deployed
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="rotating-border w-full max-w-md"
            >
              <div className="rotating-border-inner">
                <ProfileImage
                  alt="Odeyeyiwa Adams Oladele"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex flex-col items-center"
        >
          <motion.a
            href="#services"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-gold"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} />
          </motion.a>

          <p className="mt-12 text-center text-xs uppercase tracking-widest text-gray-soft">
            Tools I work with
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 text-gray-soft">
            <SiReact size={36} className="transition-colors hover:text-gold" title="React" />
            <SiMongodb size={36} className="transition-colors hover:text-gold" title="MongoDB" />
            <SiGoogle size={36} className="transition-colors hover:text-gold" title="Google" />
            <SiVercel size={36} className="transition-colors hover:text-gold" title="Vercel" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
