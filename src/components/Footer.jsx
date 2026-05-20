import { FaWhatsapp, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-gold/30 bg-navy">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <p className="text-center text-sm text-gray-soft md:text-left">
            © 2026 Odeyeyiwa Adams Oladele · Tycoon Group Ltd
          </p>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(link.href)
                }}
                className="text-sm text-gray-soft transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
            <a
              href="https://wa.me/2349127811233"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-soft transition-colors hover:text-gold"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/odeyeyiwa-adams-037136260"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-soft transition-colors hover:text-gold"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:odeyeyiwaadams@gmail.com"
              className="text-gray-soft transition-colors hover:text-gold"
              aria-label="Email"
            >
              <HiMail size={20} />
            </a>
          </div>
        </div>

        <p className="mt-10 text-center text-xs italic text-gray-soft/80">
          By Allah&apos;s grace, every system built serves a purpose greater than profit.
        </p>
      </div>
    </footer>
  )
}
