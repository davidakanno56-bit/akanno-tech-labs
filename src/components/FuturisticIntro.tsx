import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ShieldCheck, Terminal, FastForward } from 'lucide-react';
import { soundFx } from '../utils/audioFx';

export default function FuturisticIntro() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !sessionStorage.getItem('atl_intro_seen_2048');
  });
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING QUANTUM KERNEL v48.2...');

  const handleComplete = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('atl_intro_seen_2048', 'true');
    }
    soundFx.playClick();
    setVisible(false);
  };

  useEffect(() => {
    if (!visible) return;

    soundFx.playBoot();

    const statuses = [
      'INITIALIZING QUANTUM KERNEL v48.2...',
      'CALABAR_NODE // SYNCHRONIZING SECURE ENCLAVE...',
      'CONNECTING ORBITAL TELEMETRY MESH...',
      'ATL SOVEREIGN PROTOCOLS LOADED.',
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 18) + 12;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            handleComplete();
          }, 350);
          return 100;
        }
        const stepIndex = Math.min(Math.floor((next / 100) * statuses.length), statuses.length - 1);
        if (stepIndex !== currentStep) {
          currentStep = stepIndex;
          setStatusText(statuses[stepIndex]);
          soundFx.playHover();
        }
        return next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [visible]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.03, filter: 'blur(10px)' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep text-white overflow-hidden select-none"
      >
        {/* Futuristic cybernetic grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d40d_1px,transparent_1px),linear-gradient(to_bottom,#06b6d40d_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-cyan-accent/10 via-transparent to-navy-deep pointer-events-none" />

        {/* Ambient pulse orb */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] pointer-events-none animate-pulse-slow" />

        <div className="relative z-10 w-full max-w-lg mx-6 p-8 rounded-3xl bg-navy/90 border border-cyan-accent/30 shadow-[0_0_60px_rgba(6,182,212,0.25)] backdrop-blur-2xl">
          {/* Top telemetry header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10 text-xs font-mono">
            <div className="flex items-center gap-2 text-cyan-accent">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-accent" />
              </span>
              <span className="font-bold tracking-wider">ATL SOVEREIGN OS // 2048</span>
            </div>
            <span className="text-foreground-light font-mono text-[11px]">CALABAR PRIMARY ENCLAVE</span>
          </div>

          {/* Central Logo & Pulse Icon */}
          <div className="py-8 flex flex-col items-center text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
              className="w-20 h-20 rounded-2xl border border-cyan-accent/50 p-2 flex items-center justify-center bg-cyan-accent/10 shadow-[0_0_30px_rgba(6,182,212,0.3)] mb-5"
            >
              <Cpu size={36} className="text-cyan-accent" />
            </motion.div>

            <h1 className="font-display text-2xl font-bold tracking-tight text-white mb-1">
              AKANNO TECH LABS
            </h1>
            <p className="text-xs font-mono text-cyan-accent/80 tracking-widest uppercase">
              Sovereign Intelligence &amp; Deep-Tech Architecture
            </p>
          </div>

          {/* Progress Bar & Status */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-foreground-light flex items-center gap-1.5">
                <Terminal size={12} className="text-cyan-accent" />
                {statusText}
              </span>
              <span className="font-bold text-cyan-accent">{Math.min(100, progress)}%</span>
            </div>

            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/15">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-cyan-accent to-emerald-400 rounded-full shadow-[0_0_12px_rgba(6,182,212,0.8)]"
                style={{ width: `${Math.min(100, progress)}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>

            <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-foreground-light/60">
              <span className="flex items-center gap-1">
                <ShieldCheck size={11} className="text-emerald-400" />
                RC 9986069 &bull; QUANTUM SECURED
              </span>
              <span>HORIZON 2048</span>
            </div>
          </div>

          {/* Skip Button */}
          <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
            <button
              onClick={handleComplete}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-foreground-light hover:text-white transition-colors border border-white/15"
            >
              <span>ENTER NOW</span>
              <FastForward size={13} />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
