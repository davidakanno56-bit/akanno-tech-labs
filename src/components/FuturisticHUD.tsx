import { useState, useEffect } from 'react';
import { Terminal, Volume2, VolumeX, Radio } from 'lucide-react';
import { soundFx } from '../utils/audioFx';

interface FuturisticHUDProps {
  onOpenTerminal: () => void;
}

export default function FuturisticHUD({ onOpenTerminal }: FuturisticHUDProps) {
  const [audioOn, setAudioOn] = useState(() => soundFx.isEnabled());
  const [tickerOffset, setTickerOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerOffset((prev) => (prev + 1) % 1000);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleAudioToggle = () => {
    const next = soundFx.toggle();
    setAudioOn(next);
  };

  return (
    <div className="w-full bg-navy border-b border-cyan-accent/20 text-white font-mono text-[11px] overflow-hidden relative z-40 select-none shadow-[0_2px_15px_rgba(4,14,28,0.5)]">
      {/* Subtle scanline line */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(6,182,212,0.08)_50%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between gap-4">
        {/* Left: Live status telemetry */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1.5 text-cyan-accent font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="tracking-wider">ATL 2048 NODE // LIVE</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-foreground-light border-l border-white/10 pl-3">
            <Radio size={12} className="text-cyan-accent animate-pulse" />
            <span>CALABAR ENCLAVE [0.8ms]</span>
          </div>
        </div>

        {/* Center: Live marquee stream */}
        <div className="hidden md:flex items-center overflow-hidden flex-1 mx-4">
          <div
            className="flex items-center gap-8 whitespace-nowrap text-foreground-light/80 text-[10px]"
            style={{ transform: `translateX(-${(tickerOffset % 400)}px)` }}
          >
            <span>&bull; SKYGRID: 1,482 AIR CORRIDORS INDEXED</span>
            <span className="text-cyan-accent">&bull; TRADESHIELD: FRAUD DIFF STUDIO READY</span>
            <span>&bull; PORTVAULT: ZERO-PAPER CARGO GATEWAY ONLINE</span>
            <span className="text-emerald-400">&bull; RC 9986069 &bull; CAC NIGERIA VERIFIED</span>
            <span>&bull; SOVEREIGN INTELLIGENCE CLOUD // HORIZON 2048</span>
            <span>&bull; SKYGRID: 1,482 AIR CORRIDORS INDEXED</span>
            <span className="text-cyan-accent">&bull; TRADESHIELD: FRAUD DIFF STUDIO READY</span>
            <span>&bull; PORTVAULT: ZERO-PAPER CARGO GATEWAY ONLINE</span>
          </div>
        </div>

        {/* Right: Quick Interactive Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => {
              soundFx.playClick();
              onOpenTerminal();
            }}
            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-cyan-accent/15 hover:bg-cyan-accent/25 text-cyan-accent border border-cyan-accent/30 text-[10px] font-bold transition-all hover:scale-[1.02] shadow-[0_0_10px_rgba(6,182,212,0.2)]"
          >
            <Terminal size={11} />
            <span>SOVEREIGN CLI</span>
          </button>

          <button
            onClick={handleAudioToggle}
            className={`p-1 rounded-md border transition-colors ${
              audioOn
                ? 'bg-primary/20 border-primary/40 text-primary-light'
                : 'bg-white/5 border-white/10 text-foreground-light hover:text-white'
            }`}
            title={audioOn ? 'Mute 2048 Sound FX' : 'Enable 2048 Cybernetic Sound FX'}
          >
            {audioOn ? <Volume2 size={12} /> : <VolumeX size={12} />}
          </button>
        </div>
      </div>
    </div>
  );
}
