import SectionHeading from '../components/SectionHeading'
import IndustryTimeline from '../components/IndustryTimeline'

const industries = [
  {
    icon: '🌾',
    name: 'Agriculture',
    years: 'Operations & Yield',
    description: 'Increased farm yield 23% through operational restructuring',
  },
  {
    icon: '🏥',
    name: 'Medical Equipment',
    years: 'B2B Sales',
    description: 'B2B sales at Dansol Medical Equipment',
  },
  {
    icon: '🏠',
    name: 'Real Estate',
    years: 'Sales & Certification',
    description: 'Closed ₦2.6M in sales · Utah RE Course certified',
  },
  {
    icon: '🏗',
    name: 'Construction',
    years: 'Site Management',
    description: 'Site management and operational oversight',
  },
  {
    icon: '📚',
    name: 'EdTech / Publishing',
    years: 'Digital Sales',
    description: 'Digital sales & school pitches at APL',
  },
  {
    icon: '📱',
    name: 'Consumer Electronics',
    years: 'Growth Consulting',
    description: 'Digital growth consulting for Trifone',
  },
  {
    icon: '⚡',
    name: 'RegTech',
    years: 'Current',
    description: 'Building TaxCrest under Tycoon Group Ltd',
    current: true,
  },
]

export default function Industries() {
  return (
    <section className="section-padding bg-navy-light/30 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Six Industries. One Pattern."
          subtitle="Everywhere I've worked, the problem was the same: broken systems and untapped potential."
        />
        <IndustryTimeline industries={industries} />
      </div>
    </section>
  )
}
