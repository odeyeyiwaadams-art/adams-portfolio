import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Mail } from 'lucide-react';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import SectionHeading from '../components/SectionHeading';

const subjects = [
  'Digital Marketing Consulting',
  'App Development',
  'Career Consulting',
  'Partnership',
  'Other',
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const { name, email, subject, message } = form;

    const text = `New Portfolio Message\n\nName: ${name.value}\nEmail: ${email.value}\nSubject: ${subject.value}\nMessage: ${message.value}`;
    const whatsappUrl = `https://wa.me/2349127811233?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, '_blank');
    setLoading(false);
    setSubmitted(true);
    form.reset();
  };

  return (
    <section id="contact" className="section-padding bg-navy-light/30">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Let's Build Something"
          subtitle="Whether you need a digital sales system, a custom web app, or a growth strategy — I want to hear about it."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Left column */}
          <div className="space-y-8">
            <a
              href="https://wa.me/2349127811233"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-gold bg-gold/10 px-6 py-3 text-gold font-semibold transition-all hover:bg-gold/20 hover:shadow-glow"
            >
              <FaWhatsapp size={22} />
              Chat on WhatsApp
            </a>

            <div className="space-y-4">
              <a
                href="mailto:odeyeyiwaadams@gmail.com"
                className="flex items-center gap-3 text-gray-soft transition-colors hover:text-gold"
              >
                <Mail size={20} className="text-gold" />
                odeyeyiwaadams@gmail.com
              </a>
              
              <a
                href="https://www.linkedin.com/in/odeyeyiwa-adams-037136260"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-soft transition-colors hover:text-gold"
              >
                <FaLinkedin size={20} className="text-gold" />
                LinkedIn Profile
              </a>
              
              <p className="flex items-center gap-3 text-gray-soft">
                <MapPin size={20} className="text-gold shrink-0" />
                Lagos &amp; Ibadan, Nigeria
              </p>
            </div>

            <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-4 py-2 text-sm text-gold">
              Available for remote work worldwide
            </span>

            <div className="flex gap-4 pt-4">
              <a
                href="https://wa.me/2349127811233"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-gold transition-all hover:bg-gold/10 hover:shadow-glow"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={22} />
              </a>
              
              <a
                href="https://www.linkedin.com/in/odeyeyiwa-adams-037136260"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-gold transition-all hover:bg-gold/10 hover:shadow-glow"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
              
              <a
                href="mailto:odeyeyiwaadams@gmail.com"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-gold transition-all hover:bg-gold/10 hover:shadow-glow"
                aria-label="Email"
              >
                <HiMail size={22} />
              </a>
            </div>
          </div>

          {/* Right column - Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gold/10 bg-navy-light p-8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[320px] flex-col items-center justify-center text-center"
              >
                <p className="font-display text-2xl font-semibold text-gold">Message Sent!</p>
                <p className="mt-4 text-gray-soft">
                  Thank you for reaching out. I&apos;ll get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm text-gray-soft">Name</label>
                    <input id="name" name="name" type="text" required className="w-full rounded-lg border border-gold/20 bg-navy px-4 py-3 text-white outline-none transition-colors focus:border-gold" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm text-gray-soft">Email</label>
                    <input id="email" name="email" type="email" required className="w-full rounded-lg border border-gold/20 bg-navy px-4 py-3 text-white outline-none transition-colors focus:border-gold" />
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="subject" className="mb-2 block text-sm text-gray-soft">Subject</label>
                  <select id="subject" name="subject" required className="w-full rounded-lg border border-gold/20 bg-navy px-4 py-3 text-white outline-none transition-colors focus:border-gold">
                    {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="mt-6">
                  <label htmlFor="message" className="mb-2 block text-sm text-gray-soft">Message</label>
                  <textarea id="message" name="message" rows={5} required className="w-full resize-none rounded-lg border border-gold/20 bg-navy px-4 py-3 text-white outline-none transition-colors focus:border-gold" />
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold bg-gold/10 px-8 py-3 font-semibold text-gold transition-all hover:bg-gold/20 hover:shadow-glow disabled:opacity-50 sm:w-auto"
                  >
                    {loading ? 'Opening WhatsApp...' : 'Send Message'}
                  </button>
                </div>
              </>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}