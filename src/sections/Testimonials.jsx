import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const testimonials = [
  {
    quote:
      'Adams didn\'t just run campaigns — he built the entire outreach system, trained the team, and closed deals we had been chasing for months.',
    author: 'Dazzling Features',
    role: 'Luxury Home Goods · CRM Client',
  },
  {
    quote:
      'From farm operations to digital systems, he identified exactly where we were leaking value and fixed it with measurable results.',
    author: 'Agricultural Operations',
    role: 'Yield & Systems Consulting',
  },
  {
    quote:
      'His school pitch framework helped us close accounts across Ibadan and Ikeja that our team had struggled to convert for years.',
    author: 'APL Digital',
    role: 'EdTech · B2B Sales',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-navy">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="What Clients Say" subtitle="Results backed by real relationships." />
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.author} testimonial={t} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, delay }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.blockquote
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="rounded-2xl border border-gold/10 bg-navy-light p-8"
    >
      <p className="font-display text-lg italic leading-relaxed text-white/90">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <footer className="mt-6 border-t border-gold/10 pt-6">
        <cite className="not-italic font-semibold text-gold">{testimonial.author}</cite>
        <p className="mt-1 text-sm text-gray-soft">{testimonial.role}</p>
      </footer>
    </motion.blockquote>
  )
}
