import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ProfileImage from '../components/ProfileImage'

const values = [
  'Execution over theory',
  'Systems over hustle',
  'International standard, Nigerian roots',
  'Build first, optimize always',
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-padding bg-navy-light/20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold to-gold-dim p-1" />
              <div className="relative m-1 h-64 w-64 overflow-hidden rounded-full border-4 border-navy sm:h-80 sm:w-80">
                <ProfileImage
                  alt="Adams Oladele"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          <div ref={ref}>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="font-display text-3xl font-bold text-white sm:text-4xl"
            >
              The Person Behind The Work
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
              className="mt-6 space-y-4 text-gray-soft leading-relaxed"
            >
              <p>
                I grew up around large-scale commercial poultry farming — an environment
                that taught me that systems either work or they don't, and the gap between
                failure and success is usually operational, not motivational.
              </p>
              <p>
                That instinct has followed me across six industries. I don't just market
                businesses — I diagnose them, rebuild what's broken, and install the
                digital infrastructure to sustain growth.
              </p>
              <p>
                Today I operate under Tycoon Group Ltd — my long-term framework for
                building an integrated multi-sector enterprise.
              </p>
            </motion.div>

            <ul className="mt-10 space-y-4">
              {values.map((value, i) => (
                <motion.li
                  key={value}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 text-white"
                >
                  <span className="text-gold">✦</span>
                  <span>{value}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
