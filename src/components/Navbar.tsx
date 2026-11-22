import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'About', href: '/about' },
  { label: 'Founder', href: '/founder' },
  { label: 'Contact', href: '/contact' },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-subtle border-b border-border-light py-3'
            : 'bg-white/85 backdrop-blur-sm border-b border-border-light/60 py-4'
          }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8 lg:px-16">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 select-none group"
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-cyan-accent flex items-center justify-center p-0.5 shadow-sm group-hover:shadow-glow-blue/40 transition-shadow">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <img
                  src="/assets/atl_logo_transparent.png"
                  alt="Akanno Tech Labs"
                  className="h-7 w-auto object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base sm:text-lg font-bold tracking-tight text-navy group-hover:text-primary transition-colors">
                Akanno Tech Labs
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-foreground-subtle hidden sm:inline-block">
                Limited &bull; RC 9986069
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <NavLink
                  to={href}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${isActive
                      ? 'text-primary bg-primary/10 font-semibold'
                      : 'text-foreground-muted hover:text-navy hover:bg-black/[0.03]'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right Action (desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-medium border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Sovereign Systems
            </span>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover hover:shadow-glow-blue/40 transition-all duration-200"
            >
              <span>Get In Touch</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Hamburger (mobile & tablet) */}
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
            className="relative z-50 lg:hidden p-2 -mr-2 text-navy hover:bg-black/5 rounded-lg transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={24} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-navy/60 backdrop-blur-sm lg:hidden"
            />

            {/* Slide-in panel */}
            <motion.div
              key="panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-40 w-4/5 max-w-sm bg-white p-6 pt-24 shadow-2xl flex flex-col justify-between lg:hidden border-l border-border-light"
            >
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground-subtle mb-3">
                    Corporate Directory
                  </p>
                  <ul className="space-y-1">
                    {NAV_LINKS.map(({ label, href }) => (
                      <li key={href}>
                        <NavLink
                          to={href}
                          onClick={closeMenu}
                          className={({ isActive }) =>
                            `flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive
                              ? 'bg-primary/10 text-primary font-bold'
                              : 'text-foreground hover:bg-background-secondary'
                            }`
                          }
                        >
                          <span>{label}</span>
                          <ArrowRight size={14} className="opacity-40" />
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-background-secondary border border-border-light text-xs text-foreground-muted space-y-1">
                  <p className="font-semibold text-navy">Akanno Tech Labs Limited</p>
                  <p className="font-mono text-[11px]">CAC RC: 9986069</p>
                  <p>Calabar, Cross River State, Nigeria</p>
                </div>
              </div>

              <div className="pt-6 border-t border-border-light space-y-3">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary text-white font-semibold text-sm shadow-sm hover:bg-primary-hover transition-colors"
                >
                  <span>Initiate Inquiry</span>
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="mailto:davidakanno56@gmail.com"
                  className="w-full flex items-center justify-center py-2.5 text-xs font-medium text-foreground-muted hover:text-navy transition-colors"
                >
                  davidakanno56@gmail.com
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
