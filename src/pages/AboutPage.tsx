import { Shield, Target, Code2, Terminal, Award, FileCheck, MapPin, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 bg-white min-h-screen text-foreground relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16 relative z-10">
        {/* Page Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="inline-block px-3.5 py-1 mb-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
              Corporate Profile &bull; RC 9986069
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy mb-6">
              Engineering Sovereign Digital Infrastructure
            </h1>
            <p className="text-base sm:text-lg text-foreground-muted leading-relaxed">
              Akanno Tech Labs Limited is a Nigerian technology company developing enterprise software, AI-powered intelligence platforms, cybersecurity solutions and digital infrastructure.
            </p>
          </ScrollReveal>
        </div>

        {/* Corporate Legal & Registration Card */}
        <div className="mb-20 p-8 sm:p-10 rounded-3xl bg-background-secondary border border-border-light shadow-subtle">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-2xl bg-white border border-border-light shadow-2xs">
              <span className="text-xs font-mono font-semibold uppercase text-primary block mb-1">
                Legal Entity
              </span>
              <p className="font-display text-lg font-bold text-navy">
                Akanno Tech Labs Limited
              </p>
              <p className="text-xs text-foreground-muted mt-1">Private Limited Company</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-border-light shadow-2xs">
              <span className="text-xs font-mono font-semibold uppercase text-primary block mb-1">
                CAC Registration
              </span>
              <p className="font-display text-lg font-bold text-navy flex items-center gap-1.5">
                <FileCheck size={18} className="text-emerald-600" />
                <span>RC 9986069</span>
              </p>
              <p className="text-xs text-foreground-muted mt-1">Corporate Affairs Commission</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-border-light shadow-2xs">
              <span className="text-xs font-mono font-semibold uppercase text-primary block mb-1">
                Date Incorporated
              </span>
              <p className="font-display text-lg font-bold text-navy">
                November 4, 2026
              </p>
              <p className="text-xs text-foreground-muted mt-1">Jurisdiction: Nigeria</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-border-light shadow-2xs">
              <span className="text-xs font-mono font-semibold uppercase text-primary block mb-1">
                Founder &amp; Principal
              </span>
              <p className="font-display text-lg font-bold text-navy">
                David Gini Akanno
              </p>
              <p className="text-xs text-foreground-muted mt-1">Defensive Security Researcher</p>
            </div>
          </div>
        </div>

        {/* Core Architectural Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <ScrollReveal delay={0.1}>
            <div className="rounded-3xl p-8 bg-white border border-border-light shadow-subtle hover:shadow-card-hover transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <div className="p-3 w-fit rounded-2xl bg-primary/10 text-primary mb-6">
                  <Target size={24} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-navy">Our Mission</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  Our mission is to build innovative software that addresses complex operational and commercial challenges. We engineer platforms that give regional enterprises, logistics operators, and institutions complete control over their transactional security and operational data.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-3xl p-8 bg-white border border-border-light shadow-subtle hover:shadow-card-hover transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <div className="p-3 w-fit rounded-2xl bg-cyan-accent/15 text-cyan-700 mb-6">
                  <Shield size={24} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-navy">Defensive By Design</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  Security is not an afterthought or an add-on badge. Every microservice, escrow ledger, and telemetry pipeline begins with formal threat modeling, zero-trust cryptographic validation (HMAC-SHA256, salted hashes), and tamper-evident audit trails.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="rounded-3xl p-8 bg-white border border-border-light shadow-subtle hover:shadow-card-hover transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <div className="p-3 w-fit rounded-2xl bg-amber-500/15 text-amber-700 mb-6">
                  <Code2 size={24} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-navy">No Fragile Wrappers</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  We avoid generic third-party SaaS wrappers. We engineer core engines from mathematical foundations, high-concurrency low-latency runtimes, and local data persistence that stay online through network blackouts and external volatility.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Founder & Engineering Leadership */}
        <div className="rounded-3xl p-8 sm:p-12 bg-background-secondary border border-border-light shadow-card mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 text-center lg:text-left">
              <div className="w-44 h-44 rounded-2xl mx-auto lg:mx-0 overflow-hidden border-2 border-primary/20 p-1.5 bg-white shadow-md mb-6">
                <img
                  src="/assets/atl_logo_badge.png"
                  alt="David Gini Akanno"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <h3 className="font-display text-2xl font-bold text-navy mb-1">
                David Gini Akanno
              </h3>
              <p className="text-xs font-mono font-semibold text-primary mb-3">
                Founder &amp; Principal Software Engineer
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <span className="text-xs font-mono px-3 py-1 rounded-lg bg-white border border-border-light text-navy font-medium shadow-2xs">
                  Certified SOC Analyst
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-lg bg-white border border-border-light text-navy font-medium shadow-2xs">
                  Defensive Security Researcher
                </span>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase text-primary">
                <Terminal size={14} />
                <span>Founder's Directive</span>
              </div>
              <h4 className="font-display text-2xl sm:text-3xl font-bold text-navy">
                Nigeria-to-Global Engineering Vision
              </h4>
              <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
                "Developing software in Africa is not a handicap; it is a masterclass in extreme resilience. When your systems are built to thrive amidst fluctuating fuel prices, subsea cable severances, delayed bank settlements, and commercial counterparty mistrust, they possess a robustness that global enterprise software rarely matches."
              </p>
              <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
                Under the technical stewardship of David Gini Akanno, Akanno Tech Labs Limited bridges deep defensive cybersecurity research with high-throughput full-stack software development to build solutions that stand up to institutional inspection.
              </p>

              <div className="pt-4 border-t border-border-light flex flex-wrap items-center gap-6 text-xs text-foreground-subtle font-mono">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  <span>Engineering Base: Lagos, Nigeria</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-primary" />
                  <a href="mailto:davidakanno56@gmail.com" className="text-navy hover:underline">
                    davidakanno56@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-emerald-600" />
                  <span>Sovereign &amp; Enterprise Platforms</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Institutional & Accelerator Readiness Manifesto */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-border-light shadow-subtle mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary block mb-2">
              Reviewer &amp; Investor Transparency
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy">
              Integrity &amp; Development Truth
            </h3>
            <p className="text-sm text-foreground-muted mt-2">
              We present our stage of development with absolute factual accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-background-secondary border border-border-light">
              <h4 className="font-display font-bold text-navy mb-2">Verifiable Codebases</h4>
              <p className="text-xs text-foreground-muted leading-relaxed">
                All platforms presented exist as functional codebases, prototypes, or active MVPs with typed APIs, automated unit tests, and documented architectures.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-background-secondary border border-border-light">
              <h4 className="font-display font-bold text-navy mb-2">Zero Speculative Claims</h4>
              <p className="text-xs text-foreground-muted leading-relaxed">
                We do not claim non-existent enterprise revenue, unverified certifications, or exaggerated headcount. We let architectural rigor and technical execution demonstrate our value.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-background-secondary border border-border-light">
              <h4 className="font-display font-bold text-navy mb-2">Open for Institutional Evaluation</h4>
              <p className="text-xs text-foreground-muted leading-relaxed">
                Our prototype platforms (including SkyGrid Intelligence and PORTVAULT OS) are available for technical evaluation, code review, and pilot testing.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-10 rounded-3xl bg-navy text-white text-center max-w-4xl mx-auto">
          <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
            Connect with Our Technical Leadership
          </h3>
          <p className="text-foreground-light text-sm sm:text-base max-w-xl mx-auto mb-8">
            Whether you are an international investor, enterprise partner, or accelerator reviewer, we welcome architectural consultations and technical reviews.
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold text-sm inline-flex items-center gap-2 shadow-glow-blue transition-all"
          >
            <span>Initiate Direct Inquiry</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
