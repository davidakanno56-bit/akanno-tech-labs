import { MapPin, Mail, ArrowRight, Shield, Globe, Cpu, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const FOUNDER_PRODUCTS = [
  {
    name: 'SkyGrid Intelligence',
    category: 'Aviation Risk Intelligence',
    description: 'An aviation risk and intelligence platform focused on telemetry, hazard visibility, and predictive operational awareness for aviation environments.',
    stage: 'Functional Evaluation Prototype',
    link: '/products/skygrid',
    externalUrl: 'https://skygrid-intelligence.vercel.app/',
    tags: ['ADS-B Telemetry', 'Aviation Safety', 'Spatial Risk Scoring', 'FastAPI', 'React']
  },
  {
    name: 'TradeShield AI',
    category: 'Trade Risk & Fraud Investigation',
    description: 'An AI-powered trade risk and supplier investigation platform designed to help organizations detect supplier fraud, verify counterparties, and investigate trade-related risks.',
    stage: 'Functional Prototype Under Development',
    link: '/products/tradeshield',
    tags: ['Document Diff Intelligence', 'Supplier Verification', 'Dark Fleet AIS', 'Graph Analysis']
  },
  {
    name: 'PORTVAULT OS',
    category: 'Maritime Cargo & Revenue Protection',
    description: 'An enterprise maritime operating system bridging terminal cargo release operations, multimodal chain-of-custody verification, and statutory port revenue protection with zero-paper clearance.',
    stage: 'Technology Prototype',
    link: '/products/portvault',
    tags: ['HMAC-SHA256 Passes', 'Salted PIN Handover', 'Terminal Digital Twin', 'SQLAlchemy 2.0']
  },
  {
    name: 'CalabarPass',
    category: 'Digital Tourism Marketplace & Escrow',
    description: 'A digital tourism marketplace built to connect travelers with hotels, attractions, experiences, and local tourism services with escrow-backed checkout protection.',
    stage: 'MVP / Pre-Commercial Pilot Under Development',
    link: '/products/calabarpass',
    externalUrl: 'https://calabarpass.vercel.app',
    tags: ['Tourism Escrow', 'Dual-Key PIN Check-In', 'Accredited Merchant Directory', 'Paystack']
  },
  {
    name: 'Routena',
    category: 'Dynamic Mobility & Ride Pricing',
    description: 'A mobility and ride-pricing platform concept designed around pricing fairness, transport intelligence, and better rider-driver economics in fuel-volatile economies.',
    stage: 'Concept Prototype',
    link: '/products/routena',
    tags: ['Fuel-Indexed Pricing', 'Offline Keystore', 'Driver Safety KYC', 'Municipal Corridors']
  },
  {
    name: 'AetherGuard',
    category: 'Defensive Cybersecurity Initiative',
    description: 'A security-focused product initiative within the Akanno Tech Labs portfolio exploring automated threat modeling, credential integrity verification, and zero-trust perimeter defense.',
    stage: 'Product Initiative / Security R&D',
    link: '/capabilities',
    tags: ['Zero-Trust Architecture', 'Cryptographic Proofs', 'Threat Modeling', 'Telemetry Security']
  }
];

export default function FounderPage() {
  return (
    <div className="pt-28 pb-24 bg-white min-h-screen text-foreground relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16 relative z-10">
        
        {/* Breadcrumb / Top Tag */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-foreground-muted">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            <span>/</span>
            <span className="text-primary font-semibold">Founder Profile</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-20 rounded-3xl bg-background-secondary border border-border-light p-8 sm:p-12 lg:p-16 shadow-subtle relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-accent/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            {/* Founder Photograph Column */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
              <div className="relative group w-full max-w-sm">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-primary via-cyan-accent to-emerald-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
                <div className="relative rounded-2xl overflow-hidden bg-white border border-border-light shadow-xl aspect-[3/4] w-full">
                  <img
                    src="/assets/david_gini_akanno.jpg"
                    alt="David Gini Akanno - Founder of Akanno Tech Labs Limited"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent p-4 text-white text-left">
                    <p className="font-display font-bold text-lg leading-tight">David Gini Akanno</p>
                    <p className="text-xs font-mono text-cyan-accent">Founder &amp; Software Developer</p>
                    <p className="text-[11px] text-foreground-light/80 mt-0.5">Akanno Tech Labs Limited &bull; Calabar, Nigeria</p>
                  </div>
                </div>
              </div>

              {/* Verified Attribution Note */}
              <div className="mt-4 p-3 rounded-xl bg-white border border-border-light text-[11px] text-foreground-muted flex items-start gap-2 max-w-sm">
                <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Verified Identity:</strong> Academic portrait of David Gini Akanno, University of Calabar. AfSNET 2026 conference presentation photograph available in enterprise media package.
                </span>
              </div>
            </div>

            {/* Founder Bio Column */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                  <Sparkles size={13} />
                  <span>Founder Profile &bull; Executive Leadership</span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-navy mt-4 mb-2">
                  David Gini Akanno
                </h1>

                <p className="text-lg font-medium text-primary">
                  Founder &amp; Software Developer
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-foreground-muted py-2 border-y border-border-light">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={15} className="text-primary" />
                    <span>Calabar, Cross River State, Nigeria</span>
                  </div>
                  <span>&bull;</span>
                  <div className="flex items-center gap-1.5">
                    <Mail size={15} className="text-primary" />
                    <a href="mailto:davidakanno56@gmail.com" className="text-navy hover:underline">
                      davidakanno56@gmail.com
                    </a>
                  </div>
                  <span>&bull;</span>
                  <div className="flex items-center gap-1.5">
                    <Shield size={15} className="text-emerald-600" />
                    <span>Cybersecurity &amp; Applied Software</span>
                  </div>
                </div>

                {/* Core Bio Paragraphs */}
                <div className="space-y-4 text-foreground-muted leading-relaxed text-base pt-2">
                  <p>
                    David Gini Akanno is the Founder of <strong>Akanno Tech Labs Limited</strong>, a Nigerian technology company focused on building practical software products across enterprise software, security, intelligent systems, and digital platforms.
                  </p>
                  <p>
                    With a background in software development and cybersecurity, he is building products designed to solve real operational problems in African and global markets. His work focuses on combining technical execution with product thinking to create scalable solutions that are useful, modern, and commercially viable.
                  </p>
                  <p>
                    He is especially interested in building software at the intersection of intelligent automation, risk management, digital infrastructure, and applied AI.
                  </p>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <a
                    href="mailto:davidakanno56@gmail.com?subject=Inquiry%20for%20David%20Gini%20Akanno%20-%20Akanno%20Tech%20Labs"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm shadow-sm hover:bg-primary-hover hover:shadow-glow-blue/30 transition-all"
                  >
                    <Mail size={16} />
                    <span>Contact Founder Directly</span>
                  </a>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-border-light text-navy font-semibold text-sm hover:bg-background-secondary transition-colors"
                  >
                    <span>About Akanno Tech Labs</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Personal Vision Statement Banner */}
        <ScrollReveal>
          <div className="mb-20 rounded-3xl bg-gradient-to-br from-navy via-navy to-navy-surface p-8 sm:p-12 text-white shadow-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-accent/10 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-3xl mx-auto text-center space-y-4 relative z-10">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-accent font-semibold block">
                Personal Vision Statement
              </span>
              <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-white/95">
                “I’m building technology products that solve real problems, create economic value, and show that globally relevant innovation can be built from Africa.”
              </blockquote>
              <div className="pt-4 flex items-center justify-center gap-3">
                <div className="w-10 h-0.5 bg-cyan-accent rounded-full" />
                <span className="text-sm font-display font-medium text-foreground-light">
                  David Gini Akanno &bull; Founder &amp; Software Developer
                </span>
                <div className="w-10 h-0.5 bg-cyan-accent rounded-full" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Section: What I've Been Building */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <ScrollReveal>
              <span className="inline-block px-3.5 py-1 mb-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
                Portfolio of Systems
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-navy">
                What I’ve Been Building
              </h2>
              <p className="text-sm sm:text-base text-foreground-muted mt-3">
                Products and platforms developed under Akanno Tech Labs Limited addressing real operational, commercial, and security challenges.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOUNDER_PRODUCTS.map((prod, idx) => (
              <ScrollReveal key={prod.name} delay={idx * 0.08}>
                <div className="rounded-3xl p-7 bg-white border border-border-light shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-background-secondary text-primary border border-border-light">
                        {prod.category}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">
                        {prod.stage}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-navy group-hover:text-primary transition-colors mb-2.5">
                      {prod.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed mb-5">
                      {prod.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {prod.tags.map(t => (
                        <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-background-secondary text-foreground-subtle border border-border-light/60">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border-light flex items-center justify-between">
                    <Link
                      to={prod.link}
                      className="text-xs font-semibold text-primary inline-flex items-center gap-1.5 hover:gap-2 transition-all"
                    >
                      <span>Explore Architecture</span>
                      <ArrowRight size={13} />
                    </Link>

                    {prod.externalUrl && (
                      <a
                        href={prod.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-foreground-muted hover:text-navy inline-flex items-center gap-1 transition-colors"
                      >
                        <span>Live Prototype</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Section: Technical Background & Engineering Approach */}
        <div className="mb-20 rounded-3xl bg-background-secondary border border-border-light p-8 sm:p-12 shadow-subtle">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary block mb-2">
                Technical Philosophy
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy">
                How I Approach Software Engineering
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="p-6 rounded-2xl bg-white border border-border-light shadow-2xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Shield size={20} />
                </div>
                <h3 className="font-display font-bold text-navy text-base">Defensive Architecture</h3>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  Drawing from a cybersecurity foundation, every system is designed around zero-trust integrity, HMAC cryptographic signatures, and deterministic audit trails from day one.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-border-light shadow-2xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-accent/15 text-cyan-700 flex items-center justify-center">
                  <Cpu size={20} />
                </div>
                <h3 className="font-display font-bold text-navy text-base">Applied Intelligence</h3>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  Applied AI should solve concrete bottlenecks: cross-document fraud detection, transponder telemetry analysis, and dynamic risk scoring rather than generic chat gimmicks.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-border-light shadow-2xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center">
                  <Globe size={20} />
                </div>
                <h3 className="font-display font-bold text-navy text-base">African Market Resilience</h3>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  Software engineered for Africa must tolerate intermittent connectivity, fuel volatility, and multi-party payment delays—yielding products that are battle-tested anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-10 sm:p-12 rounded-3xl bg-navy text-white text-center max-w-4xl mx-auto shadow-card">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
            Connect with David Gini Akanno
          </h2>
          <p className="text-foreground-light text-sm sm:text-base max-w-xl mx-auto mb-8">
            Available for technical discussions, investment reviews, and enterprise platform demonstrations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:davidakanno56@gmail.com"
              className="px-8 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold text-sm inline-flex items-center gap-2 shadow-glow-blue transition-all"
            >
              <Mail size={16} />
              <span>davidakanno56@gmail.com</span>
            </a>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm inline-flex items-center gap-2 transition-colors border border-white/20"
            >
              <span>Submit Business Inquiry</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
