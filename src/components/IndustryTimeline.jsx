import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function IndustryTimeline({ industries }) {
  const containerRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  const scroll = (direction) => {
    if (!containerRef.current) return
    const amount = 320
    containerRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-gold/30 bg-navy-light p-2 text-gold transition-colors hover:bg-navy-mid md:flex"
        aria-label="Scroll left"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-gold/30 bg-navy-light p-2 text-gold transition-colors hover:bg-navy-mid md:flex"
        aria-label="Scroll right"
      >
        <ChevronRight size={20} />
      </button>

      <div
        ref={containerRef}
        className="overflow-x-auto pb-4 scrollbar-thin"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex gap-6 px-2 md:px-12" style={{ width: 'max-content' }}>
          <motion.div
            className="flex gap-6"
            animate={{ x: isPaused ? 0 : [0, -1400] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 40,
                ease: 'linear',
              },
            }}
          >
            {[...industries, ...industries].map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className={`w-72 shrink-0 rounded-2xl border p-6 transition-all ${
                  item.current
                    ? 'border-gold bg-gold/5 shadow-glow'
                    : 'border-gold/10 bg-navy-light hover:border-gold/30'
                }`}
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className={`mt-4 font-display text-lg font-semibold ${item.current ? 'text-gold' : 'text-white'}`}>
                  {item.name}
                </h3>
                <p className="mt-1 text-xs text-gold-dim">{item.years}</p>
                <p className="mt-3 text-sm text-gray-soft leading-relaxed">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
