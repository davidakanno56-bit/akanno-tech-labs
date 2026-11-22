import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Ship, ShieldAlert, CheckCircle2, AlertTriangle, ArrowRight, RefreshCw, KeyRound, Radio } from 'lucide-react';
import { Link } from 'react-router-dom';

type DemoTab = 'skygrid' | 'portvault' | 'tradeshield';

export default function InteractiveShowcase() {
  const [activeTab, setActiveTab] = useState<DemoTab>('skygrid');

  // SkyGrid Interactive State
  const [flightCorridor, setFlightCorridor] = useState('DNMM-DNAA'); // Lagos to Abuja
  const [weatherCondition, setWeatherCondition] = useState<'nominal' | 'convective' | 'microburst'>('convective');

  // PortVault Interactive State
  const [pinInput, setPinInput] = useState('849201');
  const [pinStatus, setPinStatus] = useState<'idle' | 'verifying' | 'verified' | 'failed'>('idle');

  // TradeShield Interactive State
  const [activeDiffDoc, setActiveDiffDoc] = useState<'invoice' | 'bol'>('bol');

  // PortVault Handover PIN test
  const handleVerifyPin = () => {
    setPinStatus('verifying');
    setTimeout(() => {
      if (pinInput === '849201') {
        setPinStatus('verified');
      } else {
        setPinStatus('failed');
      }
    }, 600);
  };

  const getRiskScore = () => {
    if (weatherCondition === 'nominal') return { score: 18, tier: 'LOW RISK', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' };
    if (weatherCondition === 'convective') return { score: 64, tier: 'MODERATE ADVISORY', color: 'text-amber-600 bg-amber-50 border-amber-200' };
    return { score: 89, tier: 'CRITICAL DIVERSION REQUIRED', color: 'text-red-600 bg-red-50 border-red-200' };
  };

  const risk = getRiskScore();

  return (
    <section className="py-24 bg-background-secondary border-y border-border-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 mb-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
            Interactive Architecture
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
            Applied Engineering Demonstrations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-foreground-muted">
            Explore live prototype simulations showcasing the core cryptographic, telemetry, and document intelligence algorithms engineered by Akanno Tech Labs.
          </p>
        </div>

        {/* Demo Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          <button
            onClick={() => setActiveTab('skygrid')}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'skygrid'
                ? 'bg-navy text-white shadow-md'
                : 'bg-white text-navy border border-border-light hover:bg-background-subtle'
            }`}
          >
            <Plane size={16} className={activeTab === 'skygrid' ? 'text-cyan-accent' : 'text-primary'} />
            <span>SkyGrid: Airspace Hazard Scoring</span>
          </button>

          <button
            onClick={() => setActiveTab('portvault')}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'portvault'
                ? 'bg-navy text-white shadow-md'
                : 'bg-white text-navy border border-border-light hover:bg-background-subtle'
            }`}
          >
            <Ship size={16} className={activeTab === 'portvault' ? 'text-cyan-accent' : 'text-primary'} />
            <span>PORTVAULT: Custody Handover PIN</span>
          </button>

          <button
            onClick={() => setActiveTab('tradeshield')}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'tradeshield'
                ? 'bg-navy text-white shadow-md'
                : 'bg-white text-navy border border-border-light hover:bg-background-subtle'
            }`}
          >
            <ShieldAlert size={16} className={activeTab === 'tradeshield' ? 'text-cyan-accent' : 'text-primary'} />
            <span>TradeShield: Cross-Doc Discrepancy Diff</span>
          </button>
        </div>

        {/* Interactive Workspace Box */}
        <div className="bg-white rounded-3xl border border-border-light shadow-card overflow-hidden">
          {/* Transparency / Demo Mode Notice */}
          <div className="px-6 py-2.5 bg-background-secondary border-b border-border-light flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-foreground-muted">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span>Interactive Concept Simulation &bull; Synthetic Test Data</span>
            </div>
            <span className="text-[11px] text-foreground-subtle hidden sm:inline">
              Engineered by Akanno Tech Labs for Architectural Evaluation
            </span>
          </div>

          <AnimatePresence mode="wait">
            {/* ─── SkyGrid Simulator ─── */}
            {activeTab === 'skygrid' && (
              <motion.div
                key="skygrid-demo"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-10"
              >
                <div className="flex flex-col lg:flex-row items-start justify-between gap-8 pb-8 border-b border-border-light">
                  <div>
                    <span className="text-xs font-mono font-semibold text-primary uppercase tracking-wider block mb-1">
                      Aviation Hazard Telemetry Prototype
                    </span>
                    <h3 className="font-display text-2xl font-bold text-navy">
                      SkyGrid Real-Time Corridor Index Calculator
                    </h3>
                    <p className="text-sm text-foreground-muted mt-1 max-w-xl">
                      Simulates flight corridor transponder ingestion cross-referenced with tropical convective storm polygon layers.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://skygrid-intelligence.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary-hover shadow-sm transition-colors"
                    >
                      <span>Open Live Web Platform</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
                  {/* Controls */}
                  <div className="lg:col-span-5 space-y-5 bg-background-secondary p-6 rounded-2xl border border-border-light">
                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase text-foreground-muted mb-2">
                        Simulated Airspace Corridor
                      </label>
                      <select
                        value={flightCorridor}
                        onChange={(e) => setFlightCorridor(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-border-light text-navy text-sm font-medium focus:border-primary focus:outline-none"
                      >
                        <option value="DNMM-DNAA">Lagos (LOS / DNMM) &rarr; Abuja (ABV / DNAA)</option>
                        <option value="DNPO-DNMM">Port Harcourt (PHC / DNPO) &rarr; Lagos (LOS)</option>
                        <option value="DGAA-DNMM">Accra (ACC / DGAA) &rarr; Lagos (LOS / DNMM)</option>
                        <option value="DNAA-DNKN">Abuja (ABV / DNAA) &rarr; Kano (KAN / DNKN)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase text-foreground-muted mb-2">
                        Equatorial Weather Radar State
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {(['nominal', 'convective', 'microburst'] as const).map((mode) => (
                          <button
                            key={mode}
                            onClick={() => setWeatherCondition(mode)}
                            className={`py-2 text-xs font-semibold rounded-lg capitalize border transition-all ${
                              weatherCondition === mode
                                ? 'bg-navy text-white border-navy'
                                : 'bg-white text-foreground-muted border-border-light hover:bg-background-subtle'
                            }`}
                          >
                            {mode}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-border-light text-xs space-y-1.5 font-mono text-foreground-muted">
                      <div className="flex justify-between">
                        <span>ADS-B Mode-S Ingest:</span>
                        <span className="text-emerald-600 font-bold">120 Hz ACTIVE</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Spatial Polygon Index:</span>
                        <span className="text-navy font-bold">R-Tree Quad</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sampling Latency:</span>
                        <span className="text-navy font-bold">84 ms</span>
                      </div>
                    </div>
                  </div>

                  {/* Telemetry Output Display */}
                  <div className="lg:col-span-7 bg-navy text-white p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono text-cyan-accent flex items-center gap-2">
                          <Radio size={14} className="animate-pulse" />
                          COMPUTED HAZARD TELEMETRY
                        </span>
                        <span className={`text-xs font-bold font-mono px-3 py-1 rounded-full border ${risk.color}`}>
                          {risk.tier}
                        </span>
                      </div>

                      <div className="flex items-baseline gap-4 mb-6">
                        <span className="text-5xl sm:text-6xl font-display font-bold text-white">
                          {risk.score}
                        </span>
                        <span className="text-sm font-mono text-foreground-light">
                          / 100 Comprehensive Risk Index
                        </span>
                      </div>

                      <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden mb-6">
                        <div
                          className={`h-full transition-all duration-500 ${
                            risk.score < 30 ? 'bg-emerald-500' : risk.score < 75 ? 'bg-amber-400' : 'bg-red-500'
                          }`}
                          style={{ width: `${risk.score}%` }}
                        />
                      </div>

                      <p className="text-xs text-foreground-light leading-relaxed mb-4 font-mono">
                        {weatherCondition === 'nominal' &&
                          'Air corridor unobstructed. Vector clearance nominal. Approach visual range > 10 km. No convective cells intersecting route.'}
                        {weatherCondition === 'convective' &&
                          'Tropical cumulonimbus cluster detected between FL220 and FL340. 15-nautical-mile westward tactical vector offset advised.'}
                        {weatherCondition === 'microburst' &&
                          'Severe low-level wind shear and microburst turbulence detected over arrival threshold. Auto-dispatch diversion advisory triggered.'}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-foreground-light/60 font-mono">
                      <span>Corridor: {flightCorridor}</span>
                      <span>Dispatch Archive: SEALED</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ─── PORTVAULT Simulator ─── */}
            {activeTab === 'portvault' && (
              <motion.div
                key="portvault-demo"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-10"
              >
                <div className="flex flex-col lg:flex-row items-start justify-between gap-8 pb-8 border-b border-border-light">
                  <div>
                    <span className="text-xs font-mono font-semibold text-primary uppercase tracking-wider block mb-1">
                      Maritime Chain-of-Custody Operating System
                    </span>
                    <h3 className="font-display text-2xl font-bold text-navy">
                      PORTVAULT CargoChain Salted PIN Verification Terminal
                    </h3>
                    <p className="text-sm text-foreground-muted mt-1 max-w-xl">
                      Zero-plaintext custody transfer handshake eliminating cargo diversion and paper release order fraud at seaport gates.
                    </p>
                  </div>
                  <Link
                    to="/products/portvault"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary-hover shadow-sm transition-colors"
                  >
                    <span>View PortVault Blueprint</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
                  {/* Gate Terminal Simulator */}
                  <div className="lg:col-span-6 bg-background-secondary p-6 sm:p-8 rounded-2xl border border-border-light space-y-6">
                    <div>
                      <span className="text-xs font-mono uppercase text-foreground-subtle block mb-1">
                        Active Terminal Consignment
                      </span>
                      <p className="font-bold text-navy text-lg font-display">
                        Container #MSKU-902184-7
                      </p>
                      <p className="text-xs text-foreground-muted">
                        Declared: 28.4 MT Industrial Machinery &bull; Apapa Container Terminal Lane 04
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase text-navy mb-2 flex items-center justify-between">
                        <span>One-Time Custody PIN (Demo Code: 849201)</span>
                        <KeyRound size={14} className="text-primary" />
                      </label>
                      <div className="flex gap-3">
                        <input
                          type="text"
                          maxLength={6}
                          value={pinInput}
                          onChange={(e) => {
                            setPinInput(e.target.value);
                            setPinStatus('idle');
                          }}
                          className="flex-1 font-mono tracking-widest text-center text-lg font-bold py-3 rounded-xl bg-white border border-border-light text-navy focus:border-primary focus:outline-none"
                        />
                        <button
                          onClick={handleVerifyPin}
                          disabled={pinStatus === 'verifying'}
                          className="px-6 py-3 rounded-xl bg-navy text-white text-xs font-bold hover:bg-navy-surface transition-colors cursor-pointer"
                        >
                          {pinStatus === 'verifying' ? 'Verifying...' : 'Validate Handover'}
                        </button>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setPinInput('849201');
                          setPinStatus('idle');
                        }}
                        className="text-xs px-3 py-1.5 rounded-lg bg-white border border-border-light text-foreground-muted hover:text-navy"
                      >
                        Insert Valid PIN (849201)
                      </button>
                      <button
                        onClick={() => {
                          setPinInput('000000');
                          setPinStatus('idle');
                        }}
                        className="text-xs px-3 py-1.5 rounded-lg bg-white border border-border-light text-foreground-muted hover:text-navy"
                      >
                        Insert Forged PIN (000000)
                      </button>
                    </div>
                  </div>

                  {/* Verification Response */}
                  <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-border-light shadow-2xs flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono text-foreground-subtle uppercase block mb-3">
                        Cryptographic Verification Ledger Output
                      </span>

                      {pinStatus === 'idle' && (
                        <div className="p-6 rounded-xl bg-background-subtle border border-border-light text-center text-foreground-muted text-xs font-mono">
                          Awaiting biometric driver credential and 6-digit one-time secret PIN input at terminal gate barrier.
                        </div>
                      )}

                      {pinStatus === 'verifying' && (
                        <div className="p-6 rounded-xl bg-blue-50 border border-blue-200 text-center text-blue-900 text-xs font-mono flex items-center justify-center gap-2">
                          <RefreshCw size={16} className="animate-spin text-primary" />
                          <span>Computing salted SHA-256 digest against distributed ledger...</span>
                        </div>
                      )}

                      {pinStatus === 'verified' && (
                        <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3 font-mono text-xs">
                          <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                            <CheckCircle2 size={18} />
                            <span>HANDOVER AUTHORIZED &bull; BARRIER RAISED</span>
                          </div>
                          <p>
                            Hash match confirmed: Salted HMAC digest verified. Gate clearance event written to tamper-proof audit trail.
                          </p>
                          <p className="text-[11px] text-emerald-800/80">
                            Demurrage reconciled: &#8358;0.00 outstanding &bull; Driver ID: DRV-LOS-2026-88
                          </p>
                        </div>
                      )}

                      {pinStatus === 'failed' && (
                        <div className="p-6 rounded-xl bg-red-50 border border-red-200 text-red-900 space-y-3 font-mono text-xs">
                          <div className="flex items-center gap-2 text-red-700 font-bold text-sm">
                            <AlertTriangle size={18} />
                            <span>CLEARANCE DENIED &bull; SECURITY EXCEPTION</span>
                          </div>
                          <p>
                            Cryptographic mismatch: PIN secret does not match authorized cargo consignee keystore. Gate locked.
                          </p>
                          <p className="text-[11px] text-red-800/80">
                            Sentinel Exception #SEC-992 logged for Port Police Terminal Desk.
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 mt-6 border-t border-border-light text-[11px] font-mono text-foreground-subtle flex justify-between">
                      <span>Rate Limit: Max 3 attempts / 15m</span>
                      <span>TTL: 30 minutes</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ─── TradeShield Simulator ─── */}
            {activeTab === 'tradeshield' && (
              <motion.div
                key="tradeshield-demo"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-10"
              >
                <div className="flex flex-col lg:flex-row items-start justify-between gap-8 pb-8 border-b border-border-light">
                  <div>
                    <span className="text-xs font-mono font-semibold text-primary uppercase tracking-wider block mb-1">
                      Evidence-First Trade Risk Investigation Platform
                    </span>
                    <h3 className="font-display text-2xl font-bold text-navy">
                      TradeShield Cross-Document Discrepancy Studio
                    </h3>
                    <p className="text-sm text-foreground-muted mt-1 max-w-xl">
                      Deterministic verification cross-comparing Commercial Invoices, Bills of Lading, and Letters of Credit to prevent multi-million dollar supplier fraud.
                    </p>
                  </div>
                  <Link
                    to="/products/tradeshield"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary-hover shadow-sm transition-colors"
                  >
                    <span>View TradeShield Specs</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
                  {/* Document Switcher */}
                  <div className="lg:col-span-6 bg-background-secondary p-6 rounded-2xl border border-border-light space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-semibold uppercase text-navy">
                        Document Intelligence OCR Preview
                      </span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setActiveDiffDoc('bol')}
                          className={`px-3 py-1 text-xs rounded-lg font-mono font-medium border ${
                            activeDiffDoc === 'bol'
                              ? 'bg-navy text-white border-navy'
                              : 'bg-white text-foreground-muted border-border-light'
                          }`}
                        >
                          Bill of Lading
                        </button>
                        <button
                          onClick={() => setActiveDiffDoc('invoice')}
                          className={`px-3 py-1 text-xs rounded-lg font-mono font-medium border ${
                            activeDiffDoc === 'invoice'
                              ? 'bg-navy text-white border-navy'
                              : 'bg-white text-foreground-muted border-border-light'
                          }`}
                        >
                          Commercial Invoice
                        </button>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-border-light font-mono text-xs space-y-2 text-foreground-muted">
                      {activeDiffDoc === 'bol' ? (
                        <>
                          <div className="text-navy font-bold pb-1 border-b border-border-light">
                            DOCUMENT: BOL-2026-AE-NG-082 (Clean On Board)
                          </div>
                          <div>Shipper: Global Agri-Commodities DMCC (Dubai, UAE)</div>
                          <div>Consignee: West African Grain Silos Ltd (Lagos, Nigeria)</div>
                          <div>Port of Loading: Jebel Ali Port, UAE (AEJEA)</div>
                          <div>Port of Discharge: Tin Can Island Port, Lagos (NGAPP)</div>
                          <div>Declared Weight: 42,000.00 Metric Tons Wheat</div>
                          <div className="text-amber-700 bg-amber-50 p-2 rounded">
                            Flagged Notice: Vessel AIS Transponder silent 72 hrs south of Gulf of Aden.
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="text-navy font-bold pb-1 border-b border-border-light">
                            DOCUMENT: INV-99320 (Commercial Invoice)
                          </div>
                          <div>Beneficiary: Global Agri-Trading Offshore LLC (Seychelles)</div>
                          <div>Invoice Amount: $14,280,000.00 USD</div>
                          <div>Routing Bank: Standard Commercial Bank of Dubai</div>
                          <div>IBAN Beneficiary: AE44 0330 0000 1289 9002 441</div>
                          <div className="text-red-700 bg-red-50 p-2 rounded">
                            Discrepancy: Beneficiary corporate name differs from Bill of Lading Shipper.
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Findings Output */}
                  <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-border-light shadow-2xs space-y-4">
                    <span className="text-xs font-mono text-cyan-700 font-semibold uppercase block">
                      Deterministic Variance Analysis (Dubai &ndash; Lagos Corridor)
                    </span>

                    <div className="space-y-3">
                      <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs">
                        <div className="flex items-center gap-2 font-bold text-red-900 mb-1">
                          <AlertTriangle size={14} className="text-red-600" />
                          <span>Beneficiary Mismatch (High Divergence Risk)</span>
                        </div>
                        <p className="text-red-950/80 leading-relaxed font-sans">
                          Invoice payee entity is registered in Seychelles, while Bill of Lading shipper is in Dubai. Wire diversion risk flagged prior to payment authorization.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs">
                        <div className="flex items-center gap-2 font-bold text-amber-900 mb-1">
                          <AlertTriangle size={14} className="text-amber-600" />
                          <span>Dark Fleet AIS Gap Anomaly</span>
                        </div>
                        <p className="text-amber-950/80 leading-relaxed font-sans">
                          Carrying vessel transponder was disabled for 72 hours along regional transit waters. Sanctioned transshipment verification required.
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-border-light flex items-center justify-between text-xs text-foreground-muted font-mono">
                      <span>Status: Human Review Gate Active</span>
                      <span className="text-navy font-bold">SAR Dossier: Generated</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
