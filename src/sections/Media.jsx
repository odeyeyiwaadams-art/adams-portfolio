import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mic } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const tags = ['Radio', 'Co-Presenter', 'Oxygen FM', 'Al-Haqqiqa']

export default function Media() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="media" className="section-padding bg-navy-light/20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="On Air"
          subtitle="Beyond business — shaping conversations that matter."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-2xl border border-gold/10 border-l-4 border-l-gold bg-navy-light/80 p-8 sm:p-10 lg:p-12"
        >
          <Mic size={56} className="text-gold" strokeWidth={1.5} />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-gold-dim">Station</p>
              <p className="mt-1 font-display text-xl font-semibold text-white">Oxygen FM</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gold-dim">Program</p>
              <p className="mt-1 font-display text-xl font-semibold text-white">Al-Haqqiqa</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gold-dim">Role</p>
              <p className="mt-1 font-display text-xl font-semibold text-white">Co-Presenter</p>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-gray-soft leading-relaxed">
            Al-Haqqiqa — Arabic for &apos;The Truth&apos; — is a radio program on Oxygen FM where I
            serve as Co-Presenter. The program explores faith, truth, and contemporary issues,
            reaching listeners across the airwaves with thoughtful, grounded conversation.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-gold/20 bg-navy-mid/50 px-4 py-1.5 text-sm text-gray-soft"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
