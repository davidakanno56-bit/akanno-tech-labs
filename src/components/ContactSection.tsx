import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Globe, ArrowRight, Send } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'david@akannotechlabs.com',
    href: 'mailto:david@akannotechlabs.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Lagos, Nigeria',
    href: 'https://maps.google.com/?q=Lagos,Nigeria',
  },
  {
    icon: Globe,
    label: 'Web',
    value: 'akannotechlabs.com',
    href: 'https://akannotechlabs.com',
  },
] as const;

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Placeholder — wire up to an API later
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy-DEFAULT py-24 md:py-32"
    >
      {/* ── Background grid with fading edges ── */}
      <div className="bg-grid-pattern-dark absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* Animated gradient glow orbs */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[400px] h-[400px] rounded-full bg-cyan-accent/10 blur-[100px] animate-pulse-slow pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
        {/* ── Heading ── */}
        <ScrollReveal className="text-center mb-16 md:mb-20">
          <p className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-cyan-accent mb-4">
            Let's Talk
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
            <span className="text-white">Ready to Build Something</span>
            <br />
            <span className="text-gradient-electric">Extraordinary?</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base md:text-lg text-foreground-light/80 leading-relaxed">
            Partner with Akanno Tech Labs to design, build, and scale the digital
            infrastructure your business deserves. We're ready when you are.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ── Contact cards ── */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-5">
              {CONTACT_METHODS.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 rounded-2xl glass-panel-dark p-5 transition-all duration-300 hover:shadow-glow-blue/20 hover:border-primary/30"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-light group-hover:bg-primary/20 transition-colors">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-foreground-light/50 mb-0.5">
                      {label}
                    </p>
                    <p className="text-base font-medium text-white group-hover:text-cyan-glow transition-colors">
                      {value}
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="ml-auto text-foreground-light/30 group-hover:text-primary-light group-hover:translate-x-1 transition-all"
                  />
                </a>
              ))}
            </div>

            {/* CTA button (below contact cards on mobile, visible when form is offscreen) */}
            <motion.a
              href="mailto:david@akannotechlabs.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-flex items-center justify-center gap-2.5 w-full rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-glow-blue hover:bg-primary-hover transition-colors lg:hidden"
            >
              Get in Touch
              <ArrowRight size={18} />
            </motion.a>
          </ScrollReveal>

          {/* ── Contact form ── */}
          <ScrollReveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="relative rounded-2xl glass-panel-dark p-6 md:p-8 space-y-5"
            >
              {/* Gradient border accent (top) */}
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-medium uppercase tracking-wider text-foreground-light/50 mb-2"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((d) => ({ ...d, name: e.target.value }))
                  }
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-border-dark bg-navy-surface/60 px-4 py-3 text-sm text-white placeholder:text-foreground-light/30 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-medium uppercase tracking-wider text-foreground-light/50 mb-2"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((d) => ({ ...d, email: e.target.value }))
                  }
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-border-dark bg-navy-surface/60 px-4 py-3 text-sm text-white placeholder:text-foreground-light/30 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium uppercase tracking-wider text-foreground-light/50 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((d) => ({ ...d, message: e.target.value }))
                  }
                  placeholder="Tell us about your project…"
                  className="w-full resize-none rounded-lg border border-border-dark bg-navy-surface/60 px-4 py-3 text-sm text-white placeholder:text-foreground-light/30 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2.5 w-full rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-white shadow-glow-blue hover:bg-primary-hover transition-colors"
              >
                {submitted ? (
                  'Message sent ✓'
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </motion.button>
            </form>
          </ScrollReveal>
        </div>

        {/* Large desktop CTA (centered, below the grid) */}
        <ScrollReveal delay={0.3} className="hidden lg:flex justify-center mt-16">
          <motion.a
            href="mailto:david@akannotechlabs.com"
            whileHover={{ scale: 1.04, boxShadow: '0 0 50px rgba(37,99,235,0.45)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 rounded-xl bg-primary px-10 py-5 text-lg font-semibold text-white shadow-glow-blue hover:bg-primary-hover transition-colors"
          >
            Get in Touch
            <ArrowRight size={20} />
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
}
