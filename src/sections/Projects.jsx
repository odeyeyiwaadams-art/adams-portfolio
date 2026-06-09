import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'

const filters = ['All', 'Apps', 'Marketing', 'Consulting']

const projects = [
  {
    title: 'Dazzling Stepper',
    status: 'Live',
    type: 'App',
    category: 'Apps',
    description:
      'E-commerce landing page for selling the Dazzling Stair Stepper fitness product. Features dynamic pricing, WhatsApp order redirect, and email notifications.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Nodemailer'],
    live: 'https://dazzling-stepper.vercel.app',
  },
  {
    title: 'Dazzling Prospector',
    status: 'Live',
    type: 'App',
    category: 'Apps',
    description:
      'Full-stack CRM that surgically pulls prospects from the web for the Dazzling Features brand. Lead management, outreach tracking, Kanban pipeline, and CSV export.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    live: 'https://dazzling-prospector.vercel.app',
  },
  {
    title: 'WorkEasy',
    status: 'In Development',
    type: 'App',
    category: 'Apps',
    description:
      'A two-sided marketplace app — helping people hire trusted local artisans while giving artisans a platform to find gigs and grow their business.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    live: '#',
  },
  {
    title: 'TaxCrest',
    status: 'In Development',
    type: 'App',
    category: 'Apps',
    description:
      'RegTech SaaS helping Nigerian POS owners calculate profit, compute tax under Nigerian law, and pay via Remita. Under Tycoon Group Ltd.',
    stack: ['MongoDB', 'Express', 'React'],
  },
  {
    title: 'Trifone Nigeria',
    status: 'Active',
    type: 'Marketing',
    category: 'Marketing',
    description:
      'Social media content strategy, product visuals, WhatsApp reseller group setup, and digital growth for a Nigerian consumer electronics brand.',
    stack: ['Social Media', 'AI Visuals', 'WhatsApp Marketing'],
  },
  {
    title: 'APL Digital',
    status: 'Full-time',
    type: 'Marketing',
    category: 'Marketing',
    description:
      "School pitches and digital marketing for Nigeria's leading educational digital product company across Ibadan.",
    stack: ['EdTech', 'B2B Sales', 'Digital Marketing'],
  },
  {
    title: 'Celeb Alagbafo',
status: 'Launched',
type: 'Laundry',
category: 'Consumer Service',
description:
  'Co-founded a premium laundry service in Ibadan. Driving brand strategy, tiered pricing, and B2B hotel acquisition.',
stack: ['Brand Strategy', 'B2B Sales', 'Co-founder'],
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="section-padding bg-navy">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Work That Speaks"
          subtitle="From strategy to shipped product."
        />

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-gold text-navy shadow-glow'
                  : 'border border-gold/30 text-gray-soft hover:border-gold hover:text-gold'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}