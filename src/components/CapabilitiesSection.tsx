import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Cpu,
  Cloud,
  ShoppingCart,
  Brain,
  Check,
  ChevronDown,
} from 'lucide-react';
import { CAPABILITIES } from '../data/capabilities';
import type { Capability } from '../types';

const ICONS: Record<string, React.ElementType> = {
  'enterprise-software': Cpu,
  'cybersecurity': Shield,
  'ai-automation': Brain,
  'cloud-infrastructure': Cloud,
  'digital-commerce': ShoppingCart,
};

/* ─── Accordion Item ───────────────────────────────────────────── */

function CapabilityItem({
  capability,
  index,
  isOpen,
  onToggle,
}: {
  capability: Capability;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = ICONS[capability.id] ?? Cpu;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="group"
    >
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 md:gap-6 p-5 md:p-6 rounded-2xl
                   glass-panel-light shadow-subtle hover:shadow-card-hover
                   transition-all duration-300 text-left cursor-pointer"
        aria-expanded={isOpen}
      >
        {/* Icon */}
        <div
          className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl
                     bg-gradient-to-br from-primary to-cyan-accent
                     flex items-center justify-center shadow-glow-blue/30
                     group-hover:shadow-glow-cyan transition-shadow duration-300"
        >
          <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={1.6} />
        </div>

        {/* Title + badge */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="text-lg md:text-xl font-display font-semibold text-foreground">
              {capability.title}
            </h3>
            <span
              className="inline-flex items-center rounded-full px-2.5 py-0.5
                         text-[11px] font-semibold tracking-wide uppercase
                         bg-primary/10 text-primary"
            >
              {capability.badge}
            </span>
          </div>
          <p className="text-sm text-foreground-muted line-clamp-2">
            {capability.summary}
          </p>
        </div>

        {/* Chevron */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-foreground-subtle" />
        </motion.div>
      </button>

      {/* Expanded panel */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pt-2 pb-6 md:pl-[5.5rem]">
              {/* Description */}
              <p className="text-foreground-muted leading-relaxed mb-5">
                {capability.description}
              </p>

              {/* Technologies */}
              <div className="mb-5">
                <span className="block text-xs uppercase tracking-widest text-foreground-subtle mb-2 font-semibold">
                  Technologies
                </span>
                <div className="flex flex-wrap gap-2">
                  {capability.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block rounded-full px-3 py-1 text-xs font-medium
                                 bg-background-subtle text-foreground-muted border border-border-light
                                 hover:bg-primary/10 hover:text-primary hover:border-primary/30
                                 hover:shadow-[0_0_12px_rgba(37,99,235,0.15)]
                                 transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <span className="block text-xs uppercase tracking-widest text-foreground-subtle mb-2 font-semibold">
                  Key Deliverables
                </span>
                <ul className="space-y-2">
                  {capability.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-foreground-muted">
                      <Check
                        className="w-4 h-4 mt-0.5 flex-shrink-0 text-cyan-accent"
                        strokeWidth={2.5}
                      />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Section ──────────────────────────────────────────────────── */

export default function CapabilitiesSection() {
  const [openId, setOpenId] = useState<string | null>(CAPABILITIES[0]?.id ?? null);

  return (
    <section
      id="capabilities"
      className="relative py-24 md:py-32 overflow-hidden bg-background"
    >
      {/* Background grid + gradient fade */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Engineering Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gradient-primary mb-4">
            What We Build
          </h2>
          <p className="max-w-2xl mx-auto text-foreground-muted leading-relaxed">
            Five core engineering disciplines, each battle-tested against
            real-world African infrastructure conditions — from unreliable
            networks to complex regulatory landscapes.
          </p>
        </motion.div>

        {/* Accordion list */}
        <div className="flex flex-col gap-4">
          {CAPABILITIES.map((cap, i) => (
            <CapabilityItem
              key={cap.id}
              capability={cap}
              index={i}
              isOpen={openId === cap.id}
              onToggle={() => setOpenId(openId === cap.id ? null : cap.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
