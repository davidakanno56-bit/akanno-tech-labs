import { MapPin, Mail, ArrowRight, Shield, Globe, Cpu, CheckCircle2, Sparkles, ExternalLink, Code2, Server, Database, Container, Terminal, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const FOUNDER_PRODUCTS = [
  {
    name: 'SkyGrid Intelligence',
    category: 'Aviation Risk Intelligence',
    description: 'Aviation hazard intelligence, interactive airspace visualization and risk-analysis software providing real-time flight corridor tracking and predictive risk scoring.',
    stage: 'Prototype / Evaluation',
    link: '/products/skygrid',
    externalUrl: 'https://skygrid-intelligence.vercel.app/',
    image: '/assets/skygrid_hero.png',
    tags: ['ADS-B Telemetry', 'Aviation Safety', 'Spatial Risk Scoring', 'FastAPI', 'React']
  },
  {
    name: 'TradeShield AI',
    category: 'Trade Risk & Fraud Investigation',
    description: 'AI-assisted supplier fraud and trade-risk investigation, including document comparison, dark fleet maritime tracking, and structured reporting.',
    stage: 'Functional prototype under development',
    link: '/products/tradeshield',
    externalUrl: 'https://tradeshield-ai-4qr.pages.dev/login',
    image: '/assets/tradeshield_executive_overview_dashboard_1.png',
    tags: ['Document Diff Intelligence', 'Supplier Verification', 'Dark Fleet AIS', 'FastAPI']
  },
  {
    name: 'PORTVAULT OS',
    category: 'Maritime Cargo & Revenue Protection',
    description: 'Maritime chain-of-custody and revenue-assurance technology designed for port operations, cargo gate clearance, and multimodal tracking.',
    stage: 'Technology prototype',
    link: '/products/portvault',
    image: '/assets/portvault_maritime_command.png',
    tags: ['HMAC-SHA256 Passes', 'Salted PIN Handover', 'Terminal Digital Twin', 'SQLAlchemy 2.0']
  },
  {
    name: 'Routena',
    category: 'Dynamic Mobility & Ride Pricing',
    description: 'Mobility platform exploring fuel-aware pricing, rider-driver fairness and digital ride operations in fuel-volatile economies.',
    stage: 'Prototype',
    link: '/products/routena',
    image: '/assets/routena_routena_landing_page.png',
    tags: ['Fuel-Indexed Pricing', 'Offline Keystore', 'Driver Safety KYC', 'Municipal Corridors']
  },
  {
    name: 'CalabarPass',
    category: 'Digital Tourism Marketplace & Escrow',
    description: 'Tourism marketplace technology focused on digital discovery, bookings and merchant experiences with escrow-backed checkout protection.',
    stage: 'Pre-commercial development',
    link: '/products/calabarpass',
    externalUrl: 'https://calabarpass.vercel.app',
    image: '/assets/calabarpass_architecture.png',
    tags: ['Tourism Escrow', 'Dual-Key PIN Check-In', 'Accredited Merchant Directory', 'Paystack']
  },
  {
    name: 'AetherGuard',
    category: 'Cybersecurity & Defensive Engineering',
    description: 'A security-focused product initiative within the Akanno Tech Labs portfolio exploring automated threat surface modeling, credential integrity auditing, and zero-trust perimeter defense.',
    stage: 'Product Initiative / Security R&D',
    link: '/capabilities',
    image: '/assets/portvault_maritime_command.png',
    tags: ['Zero-Trust Architecture', 'Cryptographic Proofs', 'Threat Modeling', 'Telemetry Security']
  }
];

const TECHNICAL_SKILLS = [
  { name: 'Python', role: 'Primary Backend & Data Science', icon: Code2 },
  { name: 'FastAPI', role: 'High-Throughput Asynchronous APIs', icon: Server },
  { name: 'React', role: 'Modern Component Systems & SPAs', icon: Layers },
  { name: 'TypeScript', role: 'Type-Safe Architecture & Contract Enforcement', icon: Code2 },
  { name: 'PostgreSQL', role: 'Relational Schemas & Spatial Indexing', icon: Database },
  { name: 'Docker', role: 'Containerization & Reproducible Environments', icon: Container },
  { name: 'Linux', role: 'System Administration & Server Hardening', icon: Terminal },
  { name: 'Cybersecurity', role: 'Threat Modeling & Defensive Security', icon: Shield },
  { name: 'Security Monitoring', role: 'SIEM Protocols & Telemetry Analysis', icon: Shield },
  { name: 'AI Integration', role: 'Document Diffing & Deterministic Heuristics', icon: Cpu },
  { name: 'Backend Architecture', role: 'Distributed Services & Escrow State Machines', icon: Server },
  { name: 'Cloud Deployment', role: 'CI/CD Pipelines, Edge Hosting & Observability', icon: Globe }
];

export default function FounderPage() {
  return (
    <div className="pt-28 pb-24 bg-white min-h-screen text-foreground relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-foreground-muted">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            <span>/</span>
            <span className="text-primary font-semibold">Founder &amp; CEO</span>
          </div>
        </div>

        {/* ─── Hero Section: Founder & CEO Profile ─── */}
        <div className="mb-20 rounded-3xl bg-background-secondary border border-border-light p-6 sm:p-10 lg:p-12 shadow-subtle relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-accent/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Main CEO Hero Photo Column (45-50% width on desktop, prominent first on mobile) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-md lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden bg-white border border-cyan-500/30 shadow-[0_4px_30px_rgba(6,182,212,0.12)] group">
                  {/* Futuristic Corner HUD Accents */}
                  <div className="absolute top-2 left-2 z-20 font-mono text-[9px] text-cyan-accent bg-navy/80 px-2 py-0.5 rounded border border-cyan-accent/30 tracking-wider">
                    ATL // BIOMETRIC 2048
                  </div>
                  <div className="absolute bottom-2 right-2 z-20 font-mono text-[9px] text-emerald-400 bg-navy/80 px-2 py-0.5 rounded border border-emerald-500/30 tracking-wider">
                    CALABAR ENCLAVE
                  </div>
                  <div className="aspect-[4/5] w-full relative overflow-hidden bg-slate-100">
                    <img
                      src="/images/founder/david-gini-akanno-executive-crop-v2.png"
                      alt="David Gini Akanno - Founder &amp; CEO of Akanno Tech Labs Limited"
                      className="w-full h-full object-cover object-top hover:scale-[1.01] transition-transform duration-500"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Attribution / Verification Bar Underneath */}
                <div className="mt-3.5 px-4 py-2.5 rounded-xl bg-white/80 border border-border-light text-[11px] text-foreground-muted flex items-center justify-between shadow-2xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                    <span className="font-medium text-navy">Verified Corporate Portrait</span>
                  </div>
                  <span className="font-mono text-[10px] text-foreground-subtle">Calabar, Nigeria</span>
                </div>
              </div>
            </div>

            {/* Founder Biography Column */}
            <div className="lg:col-span-7">
              <ScrollReveal className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                  <Sparkles size={13} />
                  <span>Executive Leadership &bull; RC 9986069</span>
                </div>

                <div className="mt-3">
                  <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy">
                    David Gini Akanno
                  </h1>

                  <p className="font-display text-lg sm:text-xl font-bold text-primary mt-1">
                    Founder &amp; CEO — Akanno Tech Labs Limited
                  </p>

                  <p className="text-xs sm:text-sm font-mono text-foreground-muted mt-1">
                    Software Developer | Cybersecurity Enthusiast | Technology Entrepreneur
                  </p>
                </div>

                {/* Location & Contact Bar */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-foreground-muted py-2.5 border-y border-border-light">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-primary shrink-0" />
                    <span>Calabar, Cross River State, Nigeria</span>
                  </div>
                  <span>&bull;</span>
                  <div className="flex items-center gap-1.5">
                    <Mail size={14} className="text-primary shrink-0" />
                    <a href="mailto:davidakanno56@gmail.com" className="text-navy hover:underline">
                      davidakanno56@gmail.com
                    </a>
                  </div>
                  <span>&bull;</span>
                  <div className="flex items-center gap-1.5">
                    <Shield size={14} className="text-emerald-600 shrink-0" />
                    <span>Defensive Security Focus</span>
                  </div>
                </div>

                {/* Canonical Biography */}
                <div className="space-y-3.5 text-foreground-muted leading-relaxed text-sm sm:text-base pt-1">
                  <p>
                    David Gini Akanno is a Nigerian technology entrepreneur, software developer and founder of <strong>Akanno Tech Labs Limited</strong>, a technology company established in November 2026.
                  </p>
                  <p>
                    Based in Calabar, Cross River State, David focuses on building software that addresses complex challenges across aviation intelligence, cybersecurity, international trade, maritime operations and digital infrastructure.
                  </p>
                  <p>
                    His work combines Python backend engineering, modern frontend development, AI-assisted systems and security-focused design.
                  </p>
                  <p>
                    Through Akanno Tech Labs Limited, he is developing multiple technology platforms, working to turn independently built prototypes into commercially viable products with applications in African and international markets.
                  </p>
                  <p>
                    He believes that ambitious, globally relevant technology can be developed in Africa through disciplined engineering, continuous learning and practical problem-solving.
                  </p>
                </div>

                {/* Action CTAs */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <a
                    href="mailto:davidakanno56@gmail.com?subject=Executive%20Inquiry%20for%20David%20Gini%20Akanno%20-%20Akanno%20Tech%20Labs"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm shadow-sm hover:bg-primary-hover hover:shadow-glow-blue/30 transition-all"
                  >
                    <Mail size={15} />
                    <span>Contact Founder Directly</span>
                  </a>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-border-light text-navy font-semibold text-sm hover:bg-background-secondary transition-colors"
                  >
                    <span>Explore Our Products</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* ─── Vision Statement Banner ─── */}
        <ScrollReveal>
          <div className="mb-20 rounded-3xl bg-gradient-to-br from-navy via-navy to-navy-surface p-8 sm:p-14 text-white shadow-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-accent/10 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-3xl mx-auto text-center space-y-5 relative z-10">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-accent font-semibold block">
                Founder's Vision
              </span>
              <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-white/95">
                “I'm building technology products that solve real problems, create economic value and demonstrate that globally relevant innovation can emerge from Africa.”
              </blockquote>
              <div className="pt-2 flex items-center justify-center gap-3">
                <div className="w-10 h-0.5 bg-cyan-accent rounded-full" />
                <span className="text-sm font-display font-medium text-foreground-light">
                  David Gini Akanno &bull; Founder &amp; CEO
                </span>
                <div className="w-10 h-0.5 bg-cyan-accent rounded-full" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ─── What I've Been Building: Engineering Ideas Into Real Products ─── */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <ScrollReveal>
              <span className="inline-block px-3.5 py-1 mb-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
                Product History &amp; Innovation
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy">
                Engineering Ideas Into Real Products
              </h2>
              <p className="text-base sm:text-lg text-foreground-muted mt-3">
                Platforms and prototype systems engineered under Akanno Tech Labs Limited addressing real operational, commercial, and security challenges with factual development transparency.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {FOUNDER_PRODUCTS.map((prod) => (
              <div key={prod.name} className="rounded-3xl p-7 bg-white border border-border-light shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between h-full group">
                <div>
                  {/* Stage & Category Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-background-secondary text-primary border border-border-light">
                      {prod.category}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 font-medium">
                      {prod.stage}
                    </span>
                  </div>

                  {/* Product Name */}
                  <h3 className="font-display text-xl font-bold text-navy group-hover:text-primary transition-colors mb-2.5">
                    {prod.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed mb-5">
                    {prod.description}
                  </p>

                  {/* Architecture Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {prod.tags.map(t => (
                      <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-background-secondary text-foreground-subtle border border-border-light/60">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
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
            ))}
          </div>
        </div>

        {/* ─── Conference & Professional Engagement Section ─── */}
        <div className="mb-24 rounded-3xl bg-background-secondary border border-border-light p-8 sm:p-12 lg:p-16 shadow-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Conference Photo */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group w-full max-w-sm rounded-2xl overflow-hidden border border-border-light bg-white shadow-lg aspect-[3/4]">
                <img
                  src="/images/founder/afSNET-founder-event-2.jpg"
                  alt="David Gini Akanno at the 6th African Sub-Sovereign Governments Network Investment Conference (AfSNET)"
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent p-4 text-white">
                  <p className="text-xs font-mono text-cyan-accent font-semibold">AfSNET Investment Conference</p>
                  <p className="text-[11px] text-white/90">Calabar, Nigeria &bull; November 2026</p>
                </div>
              </div>
              <p className="mt-3 text-center text-xs text-foreground-muted italic max-w-xs">
                "David Gini Akanno at the 6th African Sub-Sovereign Governments Network Investment Conference (AfSNET), Calabar, Nigeria — November 2026."
              </p>
            </div>

            {/* Conference Editorial Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">
                  <Globe size={13} />
                  <span>Ecosystem Engagement</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-navy">
                  Engaging With Africa's Innovation Ecosystem
                </h2>

                <div className="space-y-4 text-foreground-muted leading-relaxed text-sm sm:text-base">
                  <p>
                    Participating in high-level sub-sovereign trade and investment forums provides critical insights into the real structural challenges facing African commerce, regional logistics, and public-private capital deployment.
                  </p>
                  <p>
                    At the <strong>6th African Sub-Sovereign Governments Network (AfSNET) Investment Conference</strong> held in Calabar in November 2026, David Gini Akanno engaged with fellow stakeholders, exploring discussions surrounding technology adoption, investment mobilization, and African economic development.
                  </p>
                  <p>
                    These engagements directly inform Akanno Tech Labs' engineering direction: identifying where paper-based clearance creates trade friction, where volatility necessitates dynamic pricing models, and how digital sovereignty can be achieved through disciplined, locally grounded software engineering.
                  </p>
                </div>

                {/* Honest Disclosure Note */}
                <div className="p-4 rounded-2xl bg-white border border-border-light text-xs text-foreground-muted space-y-1">
                  <p className="font-semibold text-navy">Factual Ecosystem Transparency</p>
                  <p>
                    AfSNET participation reflects professional event attendance and regional ecosystem engagement. Akanno Tech Labs Limited does not claim formal corporate endorsement, commercial partnership, or equity funding from Afreximbank or conference host entities.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* ─── Founder's Technical Background & Practical Skills ─── */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <ScrollReveal>
              <span className="inline-block px-3.5 py-1 mb-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
                Engineering Competencies
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-navy">
                Founder's Technical Background
              </h2>
              <p className="text-sm sm:text-base text-foreground-muted mt-2">
                Core technologies and engineering domains practiced across Akanno Tech Labs platforms.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {TECHNICAL_SKILLS.map((skill) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name} className="p-5 rounded-2xl bg-white border border-border-light shadow-2xs hover:shadow-subtle hover:border-primary/30 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-background-secondary text-primary group-hover:bg-primary group-hover:text-white transition-colors flex items-center justify-center mb-3.5">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display font-bold text-navy text-base group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-foreground-muted mt-1 leading-snug">
                    {skill.role}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── Secondary Editorial Portrait & Approach ─── */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-background-secondary border border-border-light shadow-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-56 sm:w-64 rounded-2xl overflow-hidden border border-border-light bg-white shadow-md aspect-[4/5]">
                <img
                  src="/images/founder/afSNET-founder-portrait-1.jpg"
                  alt="David Gini Akanno - Editorial Portrait"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary block">
                Disciplined Engineering Approach
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy">
                Bridging Deep Research With Real Execution
              </h2>
              <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
                "Writing clean, typed, testable code is the highest form of respect an engineer can offer to users and investors. At Akanno Tech Labs, we do not build wrappers or superficial prototypes. We construct mathematical foundations, strict input-validation boundaries, and resilient asynchronous pipelines that solve real operational bottlenecks."
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-foreground-subtle">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-border-light">
                  <CheckCircle2 size={13} className="text-emerald-600" />
                  <span>Zero Speculative Claims</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-border-light">
                  <CheckCircle2 size={13} className="text-emerald-600" />
                  <span>Typed, Modular Architectures</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-border-light">
                  <CheckCircle2 size={13} className="text-emerald-600" />
                  <span>Africa-to-Global Ambition</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Final Call-To-Action Banner ─── */}
        <div className="p-10 sm:p-14 rounded-3xl bg-navy text-white text-center max-w-4xl mx-auto shadow-card">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Connect with David Gini Akanno
          </h2>
          <p className="text-foreground-light text-sm sm:text-base max-w-xl mx-auto mb-8">
            Whether for institutional code inspection, partnership inquiries, or product demonstrations, direct communication is welcomed.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/products"
              className="px-8 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold text-sm inline-flex items-center gap-2 shadow-glow-blue transition-all"
            >
              <span>Explore Our Products</span>
              <ArrowRight size={15} />
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm inline-flex items-center gap-2 transition-colors border border-white/20"
            >
              <Mail size={15} />
              <span>Contact the Founder</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
