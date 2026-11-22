import { Link } from 'react-router-dom';
import { Cpu, Shield, Brain, Cloud, ShoppingCart, Check, ArrowRight, Terminal } from 'lucide-react';
import { CAPABILITIES } from '../data/capabilities';
import ScrollReveal from '../components/ScrollReveal';

const ICON_MAP: Record<string, React.ElementType> = {
  'enterprise-software': Cpu,
  'cybersecurity': Shield,
  'ai-automation': Brain,
  'cloud-infrastructure': Cloud,
  'digital-commerce': ShoppingCart,
};

export default function CapabilitiesPage() {
  return (
    <div className="pt-28 pb-24 bg-white min-h-screen text-foreground relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
        {/* Header */}
        <div className="mb-20">
          <ScrollReveal>
            <span className="inline-block px-3.5 py-1 mb-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
              Technical Disciplines
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy mb-6">
              Engineering Disciplines &amp; Standards
            </h1>
            <p className="text-base sm:text-lg text-foreground-muted max-w-3xl leading-relaxed">
              We engineer mission-critical systems that function reliably under severe real-world constraints—network blackouts, currency devaluation, latency, and regulatory fragmentation across African enterprise corridors.
            </p>
          </ScrollReveal>
        </div>

        {/* Deep Dive Capability Modules */}
        <div className="space-y-16">
          {CAPABILITIES.map((cap) => {
            const Icon = ICON_MAP[cap.id] ?? Cpu;
            return (
              <ScrollReveal key={cap.id} delay={0.05}>
                <div className="rounded-3xl border border-border-light bg-background-secondary/60 p-8 sm:p-12 shadow-subtle hover:shadow-card-hover hover:bg-white transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
                    {/* Left: Info */}
                    <div className="lg:w-7/12">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3.5 rounded-2xl bg-primary/10 text-primary shadow-2xs">
                          <Icon size={26} />
                        </div>
                        <div>
                          <span className="text-xs font-mono font-semibold text-primary uppercase tracking-wider">
                            {cap.badge}
                          </span>
                          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy">
                            {cap.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-base text-navy font-semibold mb-3 leading-snug">
                        {cap.summary}
                      </p>
                      <p className="text-sm text-foreground-muted leading-relaxed mb-8 font-sans">
                        {cap.description}
                      </p>

                      {/* Stack Tags */}
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-navy/80 mb-3 font-mono flex items-center gap-2">
                          <Terminal size={14} className="text-primary" />
                          <span>Core Technologies &amp; Architectural Tooling</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {cap.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white border border-border-light text-navy font-medium shadow-2xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Deliverables Box */}
                    <div className="lg:w-5/12 bg-white rounded-2xl p-6 sm:p-8 border border-border-light shadow-2xs">
                      <h4 className="font-display text-base font-bold text-navy mb-4">
                        Enterprise Deliverables &amp; Outputs
                      </h4>
                      <ul className="space-y-3">
                        {cap.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5">
                            <span className="p-1 rounded-full bg-emerald-500/10 text-emerald-600 shrink-0 mt-0.5">
                              <Check size={13} strokeWidth={2.5} />
                            </span>
                            <span className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 pt-6 border-t border-border-light flex items-center justify-between">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-primary-dark transition-colors uppercase tracking-wider"
                        >
                          <span>Commission Capability</span>
                          <ArrowRight size={14} />
                        </Link>
                        <Link
                          to="/solutions"
                          className="text-xs text-foreground-subtle hover:text-navy font-semibold"
                        >
                          View Solutions &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-10 rounded-3xl bg-navy text-white text-center max-w-4xl mx-auto">
          <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
            Have a custom engineering requirement?
          </h3>
          <p className="text-foreground-light text-sm sm:text-base max-w-xl mx-auto mb-8">
            Our principal engineers consult on critical software architecture, cybersecurity hardening, and offline-first infrastructure.
          </p>
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold text-sm inline-flex items-center gap-2 shadow-glow-blue transition-all"
          >
            <span>Consult Our Engineering Team</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
