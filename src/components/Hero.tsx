import { ArrowRight, ShieldCheck, Cpu, Terminal, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-background-secondary to-white pt-28 pb-20">
      {/* ── Background Architectural Grid & Subtle Accents ── */}
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"
      />

      {/* Elegant restrained glow orbs */}
      <div
        aria-hidden
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-primary/10 via-cyan-accent/10 to-primary/5 blur-3xl rounded-full pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-20 right-10 w-[400px] h-[400px] bg-primary/[0.04] blur-3xl rounded-full pointer-events-none"
      />

      {/* ── Main Hero Content ── */}
      <div className="relative z-10 mx-auto max-w-5xl px-5 md:px-8 lg:px-16 text-center">
        {/* Registration & Positioning Tag */}
        <ScrollReveal delay={0}>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary shadow-xs mb-8">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span>Akanno Tech Labs Limited &bull; CAC RC 9986069</span>
          </div>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={0.1}>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-navy leading-[1.08] mb-6">
            Engineering Resilient <br className="hidden sm:inline" />
            <span className="text-gradient-electric">Digital Infrastructure</span> &amp; Intelligence Platforms
          </h1>
        </ScrollReveal>

        {/* Subtitle / Company Positioning */}
        <ScrollReveal delay={0.2}>
          <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl text-foreground-muted leading-relaxed mb-10 font-sans">
            Akanno Tech Labs Limited is a Nigerian technology company developing enterprise software, AI-powered intelligence platforms, cybersecurity solutions and digital infrastructure. Our mission is to build innovative software that addresses complex operational and commercial challenges.
          </p>
        </ScrollReveal>

        {/* Primary Call to Actions */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover hover:shadow-glow-blue/30 transition-all w-full sm:w-auto"
            >
              <span>Explore Venture Prototypes</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/solutions"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border-light bg-white px-8 py-4 text-sm font-semibold text-navy hover:bg-background-secondary hover:border-primary/30 transition-all w-full sm:w-auto shadow-2xs"
            >
              <span>Enterprise Solutions</span>
              <ArrowUpRight size={16} className="text-foreground-subtle" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Credibility & Core Metrics Banner */}
        <ScrollReveal delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-border-light shadow-subtle text-left max-w-4xl mx-auto">
            <div className="p-3 border-r border-border-light/60 last:border-r-0">
              <div className="flex items-center gap-2 text-xs font-mono font-medium text-foreground-subtle mb-1">
                <Cpu size={14} className="text-primary" />
                <span>ACTIVE PLATFORMS</span>
              </div>
              <p className="text-xl sm:text-2xl font-bold font-display text-navy">5 Systems</p>
              <p className="text-[11px] text-foreground-muted">Aviation, Trade, Maritime, Mobility</p>
            </div>

            <div className="p-3 border-r border-border-light/60 last:border-r-0">
              <div className="flex items-center gap-2 text-xs font-mono font-medium text-foreground-subtle mb-1">
                <ShieldCheck size={14} className="text-emerald-600" />
                <span>SECURITY ARCHITECTURE</span>
              </div>
              <p className="text-xl sm:text-2xl font-bold font-display text-navy">Zero-Trust</p>
              <p className="text-[11px] text-foreground-muted">HMAC-SHA256 &amp; Salted Handshake</p>
            </div>

            <div className="p-3 border-r border-border-light/60 last:border-r-0">
              <div className="flex items-center gap-2 text-xs font-mono font-medium text-foreground-subtle mb-1">
                <Terminal size={14} className="text-cyan-600" />
                <span>FOUNDER-LED</span>
              </div>
              <p className="text-xl sm:text-2xl font-bold font-display text-navy">David Gini Akanno</p>
              <p className="text-[11px] text-foreground-muted">Certified SOC Analyst &amp; Researcher</p>
            </div>

            <div className="p-3">
              <div className="flex items-center gap-2 text-xs font-mono font-medium text-foreground-subtle mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>JURISDICTION</span>
              </div>
              <p className="text-xl sm:text-2xl font-bold font-display text-navy">Nigeria to Global</p>
              <p className="text-[11px] text-foreground-muted">RC 9986069 &bull; Lagos HQ</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
