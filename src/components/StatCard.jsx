import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function parseStatValue(value) {
  const str = String(value)
  const prefix = str.match(/^[^\d]*/)?.[0] || ''
  const suffix = str.match(/[^\d]*$/)?.[0] || ''
  const num = parseFloat(str.replace(/[^\d.]/g, ''))
  return { prefix, suffix, num: isNaN(num) ? 0 : num, isDecimal: str.includes('.') }
}

export default function StatCard({ value, label, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [display, setDisplay] = useState('0')
  const parsed = parseStatValue(value)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = parsed.num / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(parsed.num, increment * step)
      const formatted = parsed.isDecimal
        ? current.toFixed(0)
        : Math.floor(current).toLocaleString()
      setDisplay(`${parsed.prefix}${formatted}${parsed.suffix}`)

      if (step >= steps) {
        setDisplay(value)
        clearInterval(timer)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value, parsed.num, parsed.prefix, parsed.suffix, parsed.isDecimal])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center rounded-xl bg-navy-light/60 p-6 text-center backdrop-blur-sm border border-gold/10 hover:border-gold/30 transition-colors"
    >
      <span className="font-display text-3xl font-bold text-gold sm:text-4xl lg:text-5xl">
        {display}
      </span>
      <p className="mt-3 text-sm text-gray-soft sm:text-base">{label}</p>
      <div className="mt-4 h-0.5 w-12 bg-gold" />
    </motion.div>
  )
}
