import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, CornerDownLeft, Shield } from 'lucide-react';
import { soundFx } from '../utils/audioFx';
import { useNavigate } from 'react-router-dom';

interface OutputLine {
  text: string;
  type: 'system' | 'command' | 'output' | 'success' | 'warn';
}

interface SovereignTerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SovereignTerminalModal({ isOpen, onClose }: SovereignTerminalModalProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<OutputLine[]>([
    { text: 'ATL QUANTUM SHELL v48.2.1 [SOVEREIGN EDITION // 2048]', type: 'system' },
    { text: 'Type "help" to inspect sovereign modules, or "products" to query active prototypes.', type: 'system' },
  ]);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      soundFx.playBoot();
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    soundFx.playClick();
    const newHistory: OutputLine[] = [...history, { text: `> ${input}`, type: 'command' }];

    switch (cmd) {
      case 'help':
        newHistory.push(
          { text: 'AVAILABLE SOVEREIGN COMMANDS:', type: 'system' },
          { text: '  status       - Query 2048 orbital mesh & Calabar datacenter latency', type: 'output' },
          { text: '  products     - List 5 sovereign products and architecture links', type: 'output' },
          { text: '  tradeshield  - Launch TradeShield AI live fraud investigation portal', type: 'output' },
          { text: '  skygrid      - Inspect SkyGrid aviation telemetry platform', type: 'output' },
          { text: '  founder      - Display David Gini Akanno verified credentials', type: 'output' },
          { text: '  clear        - Clear terminal history', type: 'output' },
          { text: '  exit         - Terminate session and return to UI', type: 'output' }
        );
        break;

      case 'status':
        newHistory.push(
          { text: '[2048 QUANTUM TELEMETRY STATUS]', type: 'system' },
          { text: '  CALABAR PRIMARY ENCLAVE: ONLINE (99.999% uptime, 0.8ms latency)', type: 'success' },
          { text: '  LAGOS CARGO GATE RELAY: ACTIVE // HMAC-SHA256 SECURED', type: 'success' },
          { text: '  ORBITAL ADS-B INGESTION: 1,482 CORRIDORS TRACKED', type: 'output' },
          { text: '  DARK FLEET AIS INTERCEPT: 318 ACTIVE SIGNALS', type: 'warn' },
          { text: '  CORPORATE REGISTRY: RC 9986069 [NIGERIA CAC VERIFIED]', type: 'success' }
        );
        break;

      case 'products':
        newHistory.push(
          { text: 'SOVEREIGN PRODUCT SUITE [2048 HORIZON]:', type: 'system' },
          { text: '  1. SkyGrid Intelligence  - Aviation Risk Telemetry (FastAPI + WebGL)', type: 'output' },
          { text: '  2. TradeShield AI        - Cross-Border Trade Risk & Document Diff Studio', type: 'output' },
          { text: '  3. PORTVAULT OS          - Terminal Cargo & Revenue Protection', type: 'output' },
          { text: '  4. Routena               - Dynamic Mobility & Fuel-Indexed Pricing', type: 'output' },
          { text: '  5. CalabarPass           - Tourism Discovery & Escrow Marketplace', type: 'output' }
        );
        break;

      case 'tradeshield':
        newHistory.push(
          { text: 'LAUNCHING TRADESHIELD AI PORTAL...', type: 'success' },
          { text: 'Opening external secure gateway: https://tradeshield-ai-4qr.pages.dev/login', type: 'output' }
        );
        setTimeout(() => {
          window.open('https://tradeshield-ai-4qr.pages.dev/login', '_blank');
        }, 600);
        break;

      case 'skygrid':
        newHistory.push(
          { text: 'NAVIGATING TO SKYGRID INTELLIGENCE...', type: 'success' }
        );
        setTimeout(() => {
          onClose();
          navigate('/products/skygrid');
        }, 500);
        break;

      case 'founder':
        newHistory.push(
          { text: 'FOUNDER & CEO CREDENTIALS:', type: 'system' },
          { text: '  Name: David Gini Akanno', type: 'output' },
          { text: '  Role: Founder, Software Developer & Technology Entrepreneur', type: 'output' },
          { text: '  Base: Calabar, Cross River State, Nigeria', type: 'output' },
          { text: '  Corporate Entity: Akanno Tech Labs Limited (RC 9986069)', type: 'success' }
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        newHistory.push({
          text: `Command not recognized: "${cmd}". Type "help" for valid commands.`,
          type: 'warn',
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-deep/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full max-w-3xl rounded-2xl bg-navy border border-cyan-accent/40 shadow-[0_0_50px_rgba(6,182,212,0.25)] flex flex-col h-[520px] overflow-hidden text-white font-mono text-xs"
        >
          {/* Window Header */}
          <div className="px-4 py-3 bg-navy-deep border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-foreground-light flex items-center gap-1.5 text-[11px]">
                <TerminalIcon size={12} className="text-cyan-accent" />
                atl-sovereign-kernel-2048 // bash
              </span>
            </div>
            <div className="flex items-center gap-2 text-foreground-light">
              <span className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                <Shield size={10} /> ENCRYPTED
              </span>
              <button
                onClick={onClose}
                className="p-1 rounded hover:bg-white/10 text-foreground-light hover:text-white transition-colors"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          {/* Terminal Output Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-1.5 select-text">
            {history.map((line, idx) => (
              <div
                key={idx}
                className={`leading-relaxed ${
                  line.type === 'command'
                    ? 'text-cyan-accent font-bold'
                    : line.type === 'success'
                    ? 'text-emerald-400'
                    : line.type === 'warn'
                    ? 'text-amber-400'
                    : line.type === 'system'
                    ? 'text-foreground-light border-b border-white/5 pb-1'
                    : 'text-slate-200'
                }`}
              >
                {line.text}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Command Prompt Input */}
          <form onSubmit={handleCommand} className="p-3 bg-navy-deep border-t border-white/10 flex items-center gap-2">
            <span className="text-cyan-accent font-bold">&gt;</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                soundFx.playTerminalKey();
              }}
              placeholder="type 'help', 'status', 'tradeshield', 'products'..."
              className="flex-1 bg-transparent text-white focus:outline-none placeholder-foreground-light/40 font-mono text-xs"
            />
            <button
              type="submit"
              className="px-2.5 py-1 rounded bg-cyan-accent/20 text-cyan-accent hover:bg-cyan-accent/30 text-[10px] font-bold uppercase transition-colors"
            >
              <CornerDownLeft size={12} />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
