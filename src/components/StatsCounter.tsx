import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatsCounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export default function StatsCounter({
  value,
  suffix = '',
  label,
  duration = 2,
}: StatsCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const step = Math.ceil(value / (duration * 60)); // ~60fps
    const interval = setInterval(() => {
      start += step;
      if (start >= value) {
        setDisplay(value);
        clearInterval(interval);
      } else {
        setDisplay(start);
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex flex-col items-center gap-2 px-4"
    >
      <span className="text-4xl md:text-5xl font-display font-bold text-gradient-electric">
        {display}
        {suffix}
      </span>
      <span className="text-sm md:text-base font-sans text-foreground-muted tracking-wide uppercase">
        {label}
      </span>
    </motion.div>
  );
}
