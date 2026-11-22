import { Link } from 'react-router-dom';
import {
  Cpu,
  Brain,
  Shield,
  Plane,
  FileSearch,
  Ship,
  Network,
  Check,
  ArrowRight,
  Terminal
} from 'lucide-react';
import { SOLUTIONS } from '../data/solutions';
import { PRODUCTS } from '../data/products';
import ScrollReveal from '../components/ScrollReveal';

const ICON_MAP: Record<string, React.ElementType> = {
  'enterprise-software': Cpu,
  'artificial-intelligence': Brain,
  'cybersecurity-engineering': Shield,
  'aviation-intelligence': Plane,
  'trade-risk-technology': FileSearch,
  'maritime-software': Ship,
  'digital-infrastructure': Network,
};

export default function SolutionsPage() {
  return (
    <div className="pt-28 pb-24 bg-white min-h-screen text-foreground relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
        {/* Header */}
        <div className="mb-16">
          <ScrollReveal>
            <span className="inline-block px-3.5 py-1 mb-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
              Enterprise Disciplines
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy mb-6">
              Solutions &amp; Architectural Practices
            </h1>
            <p className="text-base sm:text-lg text-foreground-muted max-w-3xl leading-relaxed">
              Akanno Tech Labs Limited delivers hardened software, intelligence platforms, and digital infrastructure across 7 mission-critical domains. Each practice combines deep defensive security with high-throughput distributed engineering.
            </p>
          </ScrollReveal>
        </div>

        {/* 7 Solutions Grid */}
        <div className="space-y-16">
          {SOLUTIONS.map((solution, idx) => {
            const Icon = ICON_MAP[solution.id] ?? Cpu;
            const relatedProductObjects = PRODUCTS.filter((p) =>
              solution.relatedProducts?.includes(p.id)
            );

            return (
              <ScrollReveal key={solution.id} delay={0.06}>
                <div
                  id={solution.id}
                  className="rounded-3xl border border-border-light bg-background-secondary/60 p-8 sm:p-12 shadow-subtle hover:shadow-card-hover hover:bg-white transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
                    {/* Left: Info */}
                    <div className="lg:w-7/12">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3.5 rounded-2xl bg-primary/10 text-primary shadow-2xs">
                          <Icon size={26} />
                        </div>
                        <div>
                          <span className="text-xs font-mono font-semibold text-primary uppercase tracking-wider">
                            0{idx + 1} &bull; {solution.category}
                          </span>
                          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy">
                            {solution.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-base font-semibold text-navy mb-3 leading-snug">
                        {solution.tagline}
                      </p>
                      <p className="text-sm text-foreground-muted leading-relaxed mb-6 font-sans">
                        {solution.description}
                      </p>

                      {/* Tech stack */}
                      <div className="mb-6">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-navy/80 mb-2.5 font-mono flex items-center gap-1.5">
                          <Terminal size={14} className="text-primary" />
                          <span>Technology Stack &amp; Tooling</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {solution.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-lg text-xs font-mono bg-white border border-border-light text-navy font-medium shadow-2xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Target Sectors */}
                      <div>
                        <span className="text-xs font-mono uppercase tracking-wider text-foreground-subtle block mb-2 font-medium">
                          Target Sectors
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {solution.targetSectors.map((sector) => (
                            <span
                              key={sector}
                              className="text-xs px-2.5 py-0.5 rounded-md bg-white/80 border border-border-light/70 text-foreground-muted"
                            >
                              {sector}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Deliverables & Connected Platforms */}
                    <div className="lg:w-5/12 bg-white rounded-2xl p-6 sm:p-8 border border-border-light shadow-2xs space-y-6">
                      <div>
                        <h4 className="font-display text-base font-bold text-navy mb-4">
                          Key Capabilities &amp; Deliverables
                        </h4>
                        <ul className="space-y-3">
                          {solution.coreCapabilities.map((item, dIdx) => (
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
                      </div>

                      {/* Connected Platform Prototypes */}
                      {relatedProductObjects.length > 0 && (
                        <div className="pt-5 border-t border-border-light">
                          <span className="text-xs font-mono uppercase tracking-wider text-foreground-subtle block mb-3 font-semibold">
                            Applied Platform Prototypes
                          </span>
                          <div className="space-y-2">
                            {relatedProductObjects.map((prod) => (
                              <Link
                                key={prod.id}
                                to={`/products/${prod.id}`}
                                className="group flex items-center justify-between p-3 rounded-xl bg-background-secondary border border-border-light hover:border-primary/40 hover:bg-white transition-all"
                              >
                                <div>
                                  <p className="text-xs font-bold text-navy group-hover:text-primary transition-colors">
                                    {prod.name}
                                  </p>
                                  <p className="text-[11px] text-foreground-muted truncate max-w-[200px]">
                                    {prod.category}
                                  </p>
                                </div>
                                <ArrowRight size={14} className="text-foreground-subtle group-hover:text-primary group-hover:translate-x-1 transition-transform" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="pt-2">
                        <Link
                          to="/contact"
                          className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary-hover shadow-sm transition-colors"
                        >
                          <span>Commission Solution Architecture</span>
                          <ArrowRight size={14} />
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
            Require Specialized Software Architecture?
          </h3>
          <p className="text-foreground-light text-sm sm:text-base max-w-xl mx-auto mb-8">
            Our principal software engineers and defensive security researchers design, harden, and build sovereign systems to your exact operational specifications.
          </p>
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold text-sm inline-flex items-center gap-2 shadow-glow-blue transition-all"
          >
            <span>Consult Our Engineering Practice</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
