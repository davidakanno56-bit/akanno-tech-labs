import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Cpu, Globe, Lock } from 'lucide-react';
import StatsCounter from './StatsCounter';

const STATS = [
  { value: 4, suffix: '', label: 'Products', icon: Cpu },
  { value: 5, suffix: '', label: 'Core Capabilities', icon: Shield },
  { value: 54, suffix: '+', label: 'African Markets', icon: Globe },
  { value: 100, suffix: '%', label: 'Security-First', icon: Lock },
];

/* ─── Decorative hex grid visual ───────────────────────────────── */
function HexVisual() {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      {/* Outer glow ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-4 rounded-full border border-primary/20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-12 rounded-full border border-cyan-accent/20"
      />

      {/* Centre emblem */}
      <div
        className="absolute inset-0 m-auto w-40 h-40 md:w-48 md:h-48
                   rounded-2xl bg-gradient-to-br from-primary via-primary-dark to-navy
                   shadow-glow-blue flex items-center justify-center"
      >
        <span className="text-5xl md:text-6xl font-display font-bold text-white tracking-tight select-none">
          ATL
        </span>
      </div>

      {/* Floating dots */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-cyan-accent/60"
          style={{
            top: `${20 + Math.sin((i * Math.PI) / 3) * 38}%`,
            left: `${50 + Math.cos((i * Math.PI) / 3) * 42}%`,
          }}
          animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

/* ─── About Section ────────────────────────────────────────────── */

export default function AboutSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden bg-navy"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-transparent to-navy-deep/80 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Split layout ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cyan-accent mb-3">
              Who We Are
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Engineering Africa's
              <br />
              <span className="text-gradient-electric">Digital Sovereignty</span>
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed font-sans">
              <p>
                <strong className="text-white">Akanno Tech Labs Limited</strong>{' '}
                is an applied software engineering firm headquartered in Nigeria,
                building sovereign digital infrastructure for African markets.
              </p>
              <p>
                Founded by{' '}
                <strong className="text-white">David Gini Akanno</strong> — a
                software developer with a background in cybersecurity, software
                development, and startup product building — the company operates at the intersection of
                enterprise software, cybersecurity, and applied artificial intelligence.
              </p>
            </div>

            {/* Mission statement */}
            <motion.blockquote
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 pl-5 border-l-2 border-cyan-accent"
            >
              <p className="text-lg md:text-xl font-display font-medium text-white italic">
                "We don't build wrappers. We engineer platforms that survive
                real-world African infrastructure conditions."
              </p>
            </motion.blockquote>
          </motion.div>

          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="hidden lg:block"
          >
            <HexVisual />
          </motion.div>
        </div>

        {/* ── Stats row ────────────────────────────────────────── */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 32 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-panel-dark rounded-2xl p-8 md:p-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <StatsCounter
                key={s.label}
                value={s.value}
                suffix={s.suffix}
                label={s.label}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
