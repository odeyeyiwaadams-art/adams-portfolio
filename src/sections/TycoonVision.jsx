import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function TycoonVision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-navy py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-gold-pattern opacity-60" />
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-64 w-64 border border-gold/10 rotate-45" />
        <div className="absolute right-1/4 bottom-0 h-48 w-48 rounded-full border border-gold/10" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-sm font-medium uppercase tracking-widest text-gold"
        >
          The Vision
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl"
        >
          Tycoon Group Ltd
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: '6rem' } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mx-auto mt-6 h-1 bg-gold"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-10 space-y-6 text-left text-gray-soft leading-relaxed sm:text-center sm:text-lg"
        >
          <p>
            Tycoon Group Ltd is not a job title — it is a framework for building an
            integrated multi-sector enterprise. Every client engagement, every app built,
            every system designed feeds into a single long-term vision: to create
            businesses that solve real problems across agriculture, technology,
            real estate, media, and compliance.
          </p>
          <p className="font-display text-xl italic text-gold-light">
            We are early. But we are deliberate.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-8 text-sm text-gray-soft"
        >
          Founded by Odeyeyiwa Adams Oladele · Lagos & Ibadan, Nigeria
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-12 flex flex-wrap justify-center gap-8 sm:gap-16"
        >
          {[
            { icon: '🏗', label: 'Build' },
            { icon: '📈', label: 'Grow' },
            { icon: '🌍', label: 'Scale' },
          ].map((pillar) => (
            <div key={pillar.label} className="flex flex-col items-center gap-2">
              <span className="text-4xl">{pillar.icon}</span>
              <span className="font-display text-lg font-semibold text-gold">{pillar.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
