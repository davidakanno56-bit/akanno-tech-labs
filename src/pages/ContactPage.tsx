import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, FileCheck, ShieldCheck } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    serviceInterest: 'enterprise-software',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submittedViaMailto, setSubmittedViaMailto] = useState(false);

  const officialEmail = 'davidakanno56@gmail.com';

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(officialEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Construct honest mailto link with pre-filled subject and structured body
    const subject = encodeURIComponent(
      `[Inquiry] ${formData.serviceInterest.toUpperCase()} — ${formData.organization || formData.name}`
    );

    const bodyContent = [
      `Sender Name: ${formData.name}`,
      `Sender Email: ${formData.email}`,
      `Organization: ${formData.organization || 'N/A'}`,
      `Service Interest: ${formData.serviceInterest}`,
      '',
      '--- Project Scope & Inquiry Details ---',
      formData.message,
      '',
      'Transmitted via Akanno Tech Labs Corporate Portal (akannotechlabs.com)',
    ].join('\n');

    const mailtoUrl = `mailto:${officialEmail}?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;

    // Trigger user's mail client
    window.location.href = mailtoUrl;
    setSubmittedViaMailto(true);
  };

  return (
    <div className="pt-28 pb-24 bg-white min-h-screen text-foreground relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <ScrollReveal>
            <span className="inline-block px-3.5 py-1 mb-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
              Direct Inquiries &amp; Consultations
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy mb-4">
              Connect With Engineering
            </h1>
            <p className="text-base sm:text-lg text-foreground-muted max-w-2xl leading-relaxed">
              Engage directly with our principal software engineers and defensive security researchers for enterprise platform partnerships, architectural reviews, or pilot deployments.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Direct Channels & Corporate Identity */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-background-secondary rounded-3xl p-8 border border-border-light shadow-subtle space-y-6">
              <h3 className="font-display text-xl font-bold text-navy">
                Official Channels
              </h3>

              {/* Email channel with direct mailto & copy */}
              <div className="p-4 rounded-2xl bg-white border border-border-light shadow-2xs space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0 mt-0.5">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-semibold text-primary uppercase tracking-wider block">
                        Direct Email Contact
                      </span>
                      <a
                        href={`mailto:${officialEmail}`}
                        className="text-navy font-bold text-sm sm:text-base hover:text-primary transition-colors break-all"
                      >
                        {officialEmail}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmailToClipboard}
                    className="p-2 rounded-lg border border-border-light text-foreground-muted hover:text-navy hover:bg-background-secondary transition-colors cursor-pointer shrink-0"
                    title="Copy email address"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                  </button>
                </div>
                {copiedEmail && (
                  <p className="text-[11px] font-mono text-emerald-600 pl-11">
                    Email copied to clipboard!
                  </p>
                )}
              </div>

              {/* Headquarters */}
              <div className="p-4 rounded-2xl bg-white border border-border-light shadow-2xs flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-primary uppercase tracking-wider block">
                    Engineering Base
                  </span>
                  <p className="text-navy font-bold text-sm sm:text-base">
                    Lagos, Nigeria
                  </p>
                  <span className="text-xs text-foreground-muted">
                    Global &amp; African Remote Engagements
                  </span>
                </div>
              </div>

              {/* Corporate Affairs Info */}
              <div className="p-4 rounded-2xl bg-white border border-border-light shadow-2xs space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-navy">
                  <FileCheck size={16} className="text-emerald-600" />
                  <span>REGULATORY REGISTRATION</span>
                </div>
                <div className="text-xs text-foreground-muted space-y-1">
                  <p><strong className="text-navy">Entity:</strong> Akanno Tech Labs Limited</p>
                  <p><strong className="text-navy">CAC RC Number:</strong> RC 9986069</p>
                  <p><strong className="text-navy">Incorporated:</strong> November 4, 2026</p>
                  <p><strong className="text-navy">Founder:</strong> David Gini Akanno</p>
                </div>
              </div>

              {/* Security Advisory */}
              <div className="p-4 rounded-2xl bg-white border border-border-light shadow-2xs flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-50 text-cyan-700 shrink-0 mt-0.5">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-cyan-800 uppercase tracking-wider block">
                    Defensive Security Desk
                  </span>
                  <p className="text-xs text-foreground-muted leading-relaxed mt-1">
                    For vulnerability disclosures, security audits, and institutional code verification, requests are personally triaged by our security operations lead.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Form with Honest Mailto Engine */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border-light shadow-card">
              <div className="mb-8">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary block mb-1">
                  Business Enquiry Section
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy">
                  Initiate Architectural Consultation
                </h3>
                <p className="text-sm text-foreground-muted mt-2">
                  Complete the inquiry form below. Submitting will honest-route your message directly to our engineering desk at <span className="font-mono font-semibold text-navy">{officialEmail}</span>.
                </p>
              </div>

              {submittedViaMailto ? (
                <div className="py-8 px-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-emerald-950 font-display">
                      Mail Client Dispatched
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-900 mt-1 max-w-md mx-auto leading-relaxed">
                      Your default mail program was triggered with your pre-formatted project inquiry addressed to <strong className="font-mono">{officialEmail}</strong>.
                    </p>
                  </div>
                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <a
                      href={`mailto:${officialEmail}`}
                      className="px-4 py-2 rounded-xl bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800 transition-colors"
                    >
                      Re-open in Mail App
                    </a>
                    <button
                      onClick={() => setSubmittedViaMailto(false)}
                      className="px-4 py-2 rounded-xl border border-emerald-300 text-emerald-900 text-xs font-semibold hover:bg-emerald-100 transition-colors cursor-pointer"
                    >
                      Edit Form Data
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono font-semibold text-navy uppercase tracking-wider mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background-secondary border border-border-light text-navy placeholder-foreground-subtle focus:border-primary focus:bg-white focus:outline-none transition-all text-sm"
                        placeholder="e.g. Adebayo Oladipo"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-semibold text-navy uppercase tracking-wider mb-2">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background-secondary border border-border-light text-navy placeholder-foreground-subtle focus:border-primary focus:bg-white focus:outline-none transition-all text-sm"
                        placeholder="adebayo@enterprise.org"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono font-semibold text-navy uppercase tracking-wider mb-2">
                        Organization / Entity
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background-secondary border border-border-light text-navy placeholder-foreground-subtle focus:border-primary focus:bg-white focus:outline-none transition-all text-sm"
                        placeholder="Company, Agency or Fund"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-semibold text-navy uppercase tracking-wider mb-2">
                        Primary Engagement Domain
                      </label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background-secondary border border-border-light text-navy focus:border-primary focus:bg-white focus:outline-none transition-all text-sm"
                      >
                        <option value="enterprise-software">Enterprise Software Engineering</option>
                        <option value="artificial-intelligence">Artificial Intelligence &amp; Diffing</option>
                        <option value="cybersecurity-engineering">Cybersecurity &amp; Defensive Audit</option>
                        <option value="aviation-intelligence">Aviation Intelligence (SkyGrid)</option>
                        <option value="trade-risk-technology">Trade-Risk Technology (TradeShield)</option>
                        <option value="maritime-software">Maritime Operating System (PORTVAULT)</option>
                        <option value="digital-infrastructure">Digital Infrastructure (Routena / CalabarPass)</option>
                        <option value="investor-review">Investor / Accelerator Briefing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-navy uppercase tracking-wider mb-2">
                      Project Scope &amp; Technical Requirements *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background-secondary border border-border-light text-navy placeholder-foreground-subtle focus:border-primary focus:bg-white focus:outline-none transition-all text-sm resize-none"
                      placeholder="Outline operational scope, expected concurrency, compliance constraints, or pilot goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-sm tracking-wide shadow-sm hover:shadow-glow-blue/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Transmit via Email Client to davidakanno56@gmail.com</span>
                    <Send size={16} />
                  </button>

                  <p className="text-[11px] text-foreground-subtle text-center">
                    Note: Submitting utilizes honest mailto dispatch. If your email application does not launch automatically, you can email <a href={`mailto:${officialEmail}`} className="text-primary font-semibold underline">{officialEmail}</a> directly.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
