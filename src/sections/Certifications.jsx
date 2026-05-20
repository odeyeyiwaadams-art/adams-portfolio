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
]

export default function Certifications() {
  return (
    <section className="section-padding bg-navy">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Credentials" />
        <div className="grid gap-8 md:grid-cols-3">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} delay={i * 0.1} />
          ))}
        </div>
        <p className="mt-12 text-center font-display text-lg italic text-gray-soft">
          Continuous learning is non-negotiable.
        </p>
      </div>
    </section>
  )
}

function CertCard({ cert, delay }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, borderColor: 'rgba(212, 175, 55, 0.4)' }}
      className="flex flex-col items-center rounded-2xl border border-gold/10 bg-navy-light p-8 text-center transition-all"
    >
      <BadgeCheck size={48} className="text-gold" strokeWidth={1.5} />
      <h3 className="mt-6 font-display text-lg font-semibold text-white">{cert.title}</h3>
      <p className="mt-2 text-sm text-gray-soft">{cert.issuer}</p>
    </motion.div>
  )
}
