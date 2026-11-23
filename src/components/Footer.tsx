import { Link } from 'react-router-dom';
import { Mail, MapPin, ShieldCheck, FileCheck, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'About Company', href: '/about' },
  { label: 'Founder & CEO', href: '/founder' },
  { label: 'Contact & Inquiries', href: '/contact' },
] as const;

const PRODUCT_LINKS = [
  { label: 'SkyGrid Intelligence', href: '/products/skygrid', badge: 'Aviation Risk' },
  { label: 'TradeShield AI', href: '/products/tradeshield', badge: 'Trade Risk' },
  { label: 'PORTVAULT OS', href: '/products/portvault', badge: 'Maritime OS' },
  { label: 'Routena', href: '/products/routena', badge: 'Mobility' },
  { label: 'CalabarPass', href: '/products/calabarpass', badge: 'Tourism Escrow' },
] as const;

export default function Footer() {
  return (
    <footer className="relative bg-navy text-white pt-20 pb-10 border-t border-navy-surface">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Mission column */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" className="flex items-center gap-3 select-none inline-block">
              <div className="h-11 w-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center p-1 shadow-sm">
                <img
                  src="/assets/atl_emblem_transparent.png"
                  alt="Akanno Tech Labs"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div>
                <span className="font-display text-lg font-bold tracking-tight text-white block">
                  Akanno Tech Labs Limited
                </span>
                <span className="text-[11px] font-mono text-cyan-accent block">
                  CAC RC: 9986069 &bull; Inc. Nov 4, 2026
                </span>
              </div>
            </Link>

            <p className="text-sm text-foreground-light leading-relaxed max-w-md">
              Akanno Tech Labs Limited is a Nigerian technology company developing enterprise software, AI-powered intelligence platforms, cybersecurity solutions and digital infrastructure. Our mission is to build innovative software that addresses complex operational and commercial challenges.
            </p>

            <div className="pt-2 space-y-2 text-xs font-mono text-foreground-light/90">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-cyan-accent shrink-0" />
                <span>Operating Base: Calabar, Cross River State, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-cyan-accent shrink-0" />
                <a
                  href="mailto:davidakanno56@gmail.com"
                  className="hover:text-white transition-colors underline decoration-white/20"
                >
                  davidakanno56@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
                <span>Founder: David Gini Akanno &bull; Founder &amp; Software Developer</span>
              </div>
            </div>
          </div>

          {/* Venture Prototypes */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-accent font-mono">
              Systems & Prototypes
            </h4>
            <ul className="space-y-2.5">
              {PRODUCT_LINKS.map(({ label, href, badge }) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="group flex items-center justify-between text-sm text-foreground-light hover:text-white transition-colors"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{label}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-cyan-accent">
                      {badge}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation & Corporate */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-accent font-mono">
              Corporate Directory
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-sm text-foreground-light hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{label}</span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary-hover shadow-glow-blue/20 transition-all"
              >
                Direct Business Enquiry
              </Link>
            </div>
          </div>
        </div>

        {/* Corporate Legal & Compliance Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-foreground-light/70">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-center md:text-left">
            <span>&copy; 2026 Akanno Tech Labs Limited. All rights reserved.</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="inline-flex items-center gap-1 text-white/90">
              <FileCheck size={13} className="text-cyan-accent" />
              Corporate Affairs Commission (CAC) Registered: RC 9986069
            </span>
          </div>
          <div className="flex items-center gap-4 text-foreground-light/60 text-[11px] font-mono">
            <span>Nigeria &bull; Sovereign & Enterprise Scale</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
