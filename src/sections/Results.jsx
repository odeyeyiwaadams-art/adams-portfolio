import SectionHeading from '../components/SectionHeading'
import StatCard from '../components/StatCard'

const stats = [
  { value: '₦2.6M', label: 'Real Estate Sales Closed' },
  { value: '23%', label: 'Farm Yield Increase' },
  { value: '2', label: 'Live Apps Deployed' },
  { value: '6', label: 'Industries Consulted' },
  { value: '30+', label: 'School Pitches Executed & Closed' },
]

export default function Results() {
  return (
    <section
      id="results"
      className="section-padding relative bg-navy-light bg-gold-grid bg-grid"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-transparent to-navy/80 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading title="Results That Speak" />
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
