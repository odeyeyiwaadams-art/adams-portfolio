import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BadgeCheck } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const certifications = [
  {
    title: 'Google Digital Marketing Certification',
    issuer: 'Google',
  },
  {
    title: 'Professional Copywriting',
    issuer: 'Alison.com',
  },
  {
    title: 'Utah Real Estate Agent Course',
    issuer: 'USA · International',
  },
  {
    title: 'Coding & Web Development',
    issuer: 'Self-taught · AI-Assisted Development',
    description:
      'Built and deployed full-stack web applications including a CRM system, a sales tracker, a RegTech SaaS, and e-commerce websites — using React, Node.js, MongoDB, and modern deployment tools.',
  },
  {
    title: 'Product & Project Management',
    issuer: 'Udacity · Advance Africa Scholarship · Sponsored by Access Bank Nigeria',
    description:
      "Selected as a finalist in the Advance Africa Scholarship Program — a competitive, internationally recognized initiative. Completed Udacity's Product Management program in 2023 and applied that knowledge to successfully manage a construction project worth hundreds of millions of naira from planning through to delivery.",
    badgeText: '2023 Challenge Finalist',
    udacityBadge: true,
    wide: true,
  },
]

export default function Certifications() {
  const topRow = certifications.slice(0, 3)
  const bottomRow = certifications.slice(3)

  return (
    <section className="section-padding bg-navy">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Credentials" />
        <div className="grid gap-8 md:grid-cols-3">
          {topRow.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} delay={i * 0.1} />
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {bottomRow.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} delay={0.3 + i * 0.1} wide={cert.wide} />
          ))}
        </div>
        <p className="mt-12 text-center font-display text-lg italic text-gray-soft">
          Continuous learning is non-negotiable.
        </p>
      </div>
    </section>
  )
}

function CertCard({ cert, delay, wide = false }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  if (cert.udacityBadge) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -6, borderColor: 'rgba(212, 175, 55, 0.4)' }}
        className={`w-full rounded-2xl border border-gold/10 bg-navy-light p-8 transition-all md:max-w-2xl ${
          wide ? 'lg:max-w-3xl' : 'md:max-w-md'
        }`}
      >
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:text-left">
          <div className="flex flex-1 flex-col items-center md:items-start">
            <BadgeCheck size={48} className="text-gold" strokeWidth={1.5} />
            <h3 className="mt-6 font-display text-lg font-semibold text-white">{cert.title}</h3>
            <p className="mt-2 text-sm text-gray-soft">{cert.issuer}</p>
            {cert.badgeText && (
              <span className="mt-3 inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                {cert.badgeText}
              </span>
            )}
            <p className="mt-4 text-sm leading-relaxed text-gray-soft">{cert.description}</p>
          </div>
          <motion.div
            className="group flex shrink-0 justify-center md:justify-end"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/udacity-badge.png"
              alt="Udacity Advance Africa Challenge Finalist Badge"
              className="w-full max-w-[120px] drop-shadow-[0_4px_20px_rgba(212,175,55,0.45)] transition-all duration-300 group-hover:drop-shadow-[0_0_28px_rgba(240,204,85,0.85)] group-hover:brightness-110"
            />
          </motion.div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, borderColor: 'rgba(212, 175, 55, 0.4)' }}
      className={`flex flex-col rounded-2xl border border-gold/10 bg-navy-light p-8 text-center transition-all ${
        wide ? 'w-full md:max-w-2xl' : 'w-full md:max-w-md'
      }`}
    >
      <BadgeCheck size={48} className="mx-auto text-gold" strokeWidth={1.5} />
      <h3 className="mt-6 font-display text-lg font-semibold text-white">{cert.title}</h3>
      <p className="mt-2 text-sm text-gray-soft">{cert.issuer}</p>
      {cert.description && (
        <p className="mt-4 text-sm leading-relaxed text-gray-soft">{cert.description}</p>
      )}
    </motion.div>
  )
}
