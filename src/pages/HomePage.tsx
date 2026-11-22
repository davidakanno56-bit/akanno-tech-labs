import { useState } from 'react';
import { ArrowRight, ShieldCheck, Cpu, Database, CheckCircle2, Terminal, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ScrollReveal from '../components/ScrollReveal';
import InteractiveShowcase from '../components/InteractiveShowcase';
import ProductModal from '../components/ProductModal';
import { PRODUCTS } from '../data/products';
import { SOLUTIONS } from '../data/solutions';
import type { Product } from '../types';

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="bg-white text-foreground">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Positioning & Mission Highlight */}
      <section className="py-16 bg-white border-y border-border-light relative">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                Company Positioning &bull; RC 9986069
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-navy tracking-tight leading-snug">
                Akanno Tech Labs Limited builds innovative software that addresses complex operational and commercial challenges.
              </h2>
              <p className="text-base text-foreground-muted leading-relaxed max-w-3xl">
                We are a Nigerian technology company developing enterprise software, AI-powered intelligence platforms, cybersecurity solutions and digital infrastructure engineered to thrive in real-world African environments and scale globally.
              </p>
            </div>
            <div className="lg:col-span-4 p-6 rounded-2xl bg-background-secondary border border-border-light space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-primary uppercase">
                <ShieldCheck size={16} />
                <span>Regulatory Identity</span>
              </div>
              <p className="text-sm font-bold text-navy">Corporate Affairs Commission (CAC)</p>
              <p className="text-xs font-mono text-foreground-muted">Registration Number: RC 9986069</p>
              <p className="text-xs text-foreground-muted">Incorporated: November 4, 2026 &bull; Nigeria</p>
              <div className="pt-2 border-t border-border-light">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark transition-colors"
                >
                  <span>Learn more about our governance</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Venture Products */}
      <section className="py-24 bg-background-secondary/60 relative">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block px-3.5 py-1 mb-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
                  Venture Portfolio
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
                  Featured Platforms &amp; Prototypes
                </h2>
                <p className="mt-4 text-base sm:text-lg text-foreground-muted max-w-2xl">
                  Hardened digital solutions engineered with clear problem statements, verified architectures, and transparent development stages.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-glow-blue/30 group"
              >
                <span>View All 5 Products</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>

          {/* Grid of Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product, idx) => (
              <ScrollReveal key={product.id} delay={idx * 0.08}>
                <div className="bg-white rounded-3xl border border-border-light p-6 sm:p-7 flex flex-col justify-between h-full shadow-subtle hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 group">
                  <div>
                    {/* Image Preview */}
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-background-secondary border border-border-light mb-5">
                      <img
                        src={product.primaryImage}
                        alt={product.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase bg-white/95 text-navy border border-border-light shadow-2xs">
                        {product.category}
                      </span>
                    </div>

                    {/* Status Pill */}
                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-primary/10 text-primary border border-primary/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        {product.status}
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-navy group-hover:text-primary transition-colors mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xs font-semibold text-primary mb-3">
                      {product.tagline}
                    </p>
                    <p className="text-sm text-foreground-muted leading-relaxed line-clamp-3 mb-6">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border-light flex items-center justify-between">
                    <Link
                      to={`/products/${product.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-primary transition-colors"
                    >
                      <span>Explore Technical Specs</span>
                      <ArrowRight size={14} />
                    </Link>

                    {product.website ? (
                      <a
                        href={product.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                      >
                        <span>Live Site</span>
                        <ExternalLink size={12} />
                      </a>
                    ) : (
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="text-xs font-semibold text-foreground-subtle hover:text-navy cursor-pointer"
                      >
                        Quick Blueprint
                      </button>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Applied Interactive Showcase */}
      <InteractiveShowcase />

      {/* 5. Enterprise Solutions & Engineering Capabilities */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1 mb-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
              Enterprise Offerings
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
              Enterprise Solutions
            </h2>
            <p className="mt-4 text-base sm:text-lg text-foreground-muted">
              We design and deploy purpose-built technologies spanning 7 foundational solution domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SOLUTIONS.slice(0, 6).map((solution, idx) => (
              <ScrollReveal key={solution.id} delay={idx * 0.08}>
                <div className="p-8 rounded-3xl border border-border-light bg-background-secondary/70 hover:bg-white hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary font-mono block mb-2">
                      {solution.category}
                    </span>
                    <h3 className="font-display text-xl font-bold text-navy mb-2 group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-xs font-medium text-foreground-subtle mb-4">
                      {solution.tagline}
                    </p>
                    <p className="text-sm text-foreground-muted leading-relaxed mb-6 line-clamp-3">
                      {solution.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {solution.coreCapabilities.slice(0, 2).map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 text-xs text-foreground-muted">
                          <CheckCircle2 size={14} className="text-emerald-600 mt-0.5 shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border-light">
                    <Link
                      to="/solutions"
                      className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-primary-dark transition-colors uppercase tracking-wider"
                    >
                      <span>Explore Solution Specs</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold text-sm transition-all duration-200"
            >
              <span>Explore All 7 Solutions &amp; Technical Specs</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Founder & Sovereign Vision */}
      <section className="py-20 bg-background-secondary border-t border-border-light relative">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-border-light shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-4 text-center lg:text-left">
                <div className="w-36 h-48 sm:w-44 sm:h-56 rounded-2xl mx-auto lg:mx-0 overflow-hidden border-2 border-primary/20 p-1 bg-white shadow-md mb-5">
                  <img
                    src="/images/founder/afSNET-founder-portrait-3.jpg"
                    alt="David Gini Akanno - Founder &amp; CEO"
                    className="w-full h-full object-cover object-top rounded-xl"
                  />
                </div>
                <h3 className="font-display text-2xl font-bold text-navy mb-1">
                  David Gini Akanno
                </h3>
                <p className="text-xs font-mono text-primary font-semibold mb-3">
                  Founder &amp; CEO
                </p>
                <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start mb-3">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-background-secondary border border-border-light text-navy font-medium">
                    Software Developer
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-background-secondary border border-border-light text-navy font-medium">
                    Cybersecurity Researcher
                  </span>
                </div>
                <Link
                  to="/founder"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover"
                >
                  <span>Explore Founder Profile</span>
                  <ArrowRight size={13} />
                </Link>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase text-primary">
                  <Terminal size={14} />
                  <span>Nigeria to Global Engineering Directive</span>
                </div>
                <h4 className="font-display text-2xl sm:text-3xl font-bold text-navy">
                  Building for Hard Constraints
                </h4>
                <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
                  "Developing enterprise and sovereign software in emerging markets demands engineering for structural realities: volatile fuel indices, undersea cable severances, delayed bank reconciliation, and trust deficits between commercial counterparties. Our software is built with mathematical proofs, isolated escrows, and offline cryptographic handshakes to run continuously regardless of environment."
                </p>
                <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-foreground-subtle font-mono">
                  <div className="flex items-center gap-1.5">
                    <Database size={15} className="text-primary" />
                    <span>Calabar, Cross River State, Nigeria</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Cpu size={15} className="text-cyan-600" />
                    <span>Zero SaaS Wrappers</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck size={15} className="text-emerald-600" />
                    <span>Auditable Source-Backed Code</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Institutional CTA */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-accent mb-2 block">
              Consultation &amp; Technical Engagement
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              Ready to explore our platforms or commission custom architecture?
            </h3>
            <p className="text-foreground-light text-sm sm:text-base max-w-xl">
              Connect directly with our engineering team for institutional briefings, prototype evaluations, or pilot deployments.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-sm tracking-wide shadow-glow-blue transition-all shrink-0"
          >
            Initiate Architectural Consultation
          </Link>
        </div>
      </section>

      {/* Modal for quick product blueprint inspection */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
