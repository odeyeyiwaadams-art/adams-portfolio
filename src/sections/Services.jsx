import { TrendingUp, Code, Users } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'

export default function Services() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const services = [
    {
      icon: TrendingUp,
      title: 'Digital Sales & Growth Marketing',
      description:
        "I build and execute digital sales systems that generate real leads and close real deals. From social media strategy to outreach scripts to CRM setup — I don't just plan, I implement.",
      tags: ['Social Media', 'Lead Generation', 'CRM', 'Copywriting'],
      cta: 'Learn More',
      onCtaClick: () => scrollTo('#contact'),
      delay: 0,
    },
    {
      icon: Code,
      title: 'Business Systems & App Building',
      description:
        'I identify operational gaps in businesses and build the digital infrastructure to fix them — custom web apps, sales trackers, lead management systems, and compliance tools.',
      tags: ['Web Apps', 'React', 'Node.js', 'MongoDB'],
      cta: 'See Projects',
      onCtaClick: () => scrollTo('#projects'),
      badge: '2 Live Apps Built',
      delay: 0.15,
    },
    {
      icon: Users,
      title: 'Career Repositioning Consulting',
      description:
        'I help skilled professionals shift their physical expertise onto global freelance platforms and build sustainable income systems — sometimes enough to leave their 9-5 entirely.',
      tags: ['Fiverr', 'Upwork', 'Contra', 'Freelance Strategy'],
      cta: 'Work With Me',
      onCtaClick: () => scrollTo('#contact'),
      badge: '3 Active Clients',
      delay: 0.3,
    },
  ]

  return (
    <section id="services" className="section-padding bg-navy">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="What I Do"
          subtitle="Three core offerings. One consistent result: growth."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
