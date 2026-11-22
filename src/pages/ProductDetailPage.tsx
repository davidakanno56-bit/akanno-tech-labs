import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ShieldCheck, Cpu, Database, CheckCircle2, AlertTriangle, Layers, Terminal } from 'lucide-react';
import { PRODUCTS } from '../data/products';

const statusBadgeStyles: Record<string, string> = {
  emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  blue: 'bg-blue-50 text-blue-700 border-blue-200',
  cyan: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  amber: 'bg-amber-50 text-amber-700 border-amber-200',
  indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200',
};

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="pt-36 pb-24 min-h-[70vh] bg-white text-navy text-center flex flex-col items-center justify-center px-4">
        <h2 className="text-3xl font-display font-bold mb-4">Platform Blueprint Not Found</h2>
        <p className="text-foreground-muted mb-8 max-w-md">The requested platform architecture does not exist in our systems repository.</p>
        <Link
          to="/products"
          className="px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-semibold inline-flex items-center gap-2 shadow-sm"
        >
          <ArrowLeft size={16} />
          <span>Return to All Products</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 bg-white min-h-screen text-foreground relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16 relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground-muted hover:text-navy transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Products Directory</span>
          </Link>
        </div>

        {/* Product Hero Header */}
        <div className="mb-12 pb-10 border-b border-border-light">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-mono font-semibold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
              {product.category}
            </span>
            <span
              className={`text-xs px-3 py-1 rounded-full font-semibold border ${statusBadgeStyles[product.statusColor] ?? statusBadgeStyles.blue
                }`}
            >
              {product.status}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy mb-4">
            {product.name}
          </h1>
          <p className="text-xl sm:text-2xl text-primary font-semibold mb-6 max-w-3xl">
            {product.tagline}
          </p>
          <p className="text-base sm:text-lg text-foreground-muted leading-relaxed max-w-4xl mb-6">
            {product.description}
          </p>

          {/* Quick links & actions */}
          <div className="flex flex-wrap items-center gap-4">
            {product.website && (
              <a
                href={product.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-hover shadow-sm transition-colors"
              >
                <span>Access Live Deployment</span>
                <ExternalLink size={15} />
              </a>
            )}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border-light bg-background-secondary text-navy hover:bg-white text-sm font-semibold transition-colors"
            >
              <span>Request Institutional Briefing</span>
            </Link>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mb-16">
          <h3 className="font-display text-xl font-bold text-navy mb-6 flex items-center gap-2">
            <Layers size={20} className="text-primary" />
            <span>Platform Screenshots &amp; Architectural Blueprints</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.gallery.map((img, idx) => (
              <div key={idx} className="rounded-3xl overflow-hidden border border-border-light bg-background-secondary shadow-subtle group">
                <img
                  src={img}
                  alt={`${product.name} blueprint ${idx + 1}`}
                  className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Deep Dive Specification Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          {/* Left Column: Problem & Architecture */}
          <div className="lg:col-span-7 space-y-8">
            {/* The Problem Solved */}
            <div className="rounded-3xl p-8 bg-amber-50/60 border border-amber-200/80">
              <h3 className="font-display text-xl font-bold text-amber-950 mb-3 flex items-center gap-2">
                <AlertTriangle size={20} className="text-amber-600" />
                <span>Problem Domain &amp; Operational Friction</span>
              </h3>
              <p className="text-sm sm:text-base text-amber-950/80 leading-relaxed font-sans">
                {product.problemSolved}
              </p>
            </div>

            {/* Step-by-Step Architecture Pipeline */}
            <div className="rounded-3xl p-8 bg-background-secondary border border-border-light shadow-2xs">
              <h3 className="font-display text-xl font-bold text-navy mb-6 flex items-center gap-2">
                <Cpu size={20} className="text-primary" />
                <span>Technical Architecture Pipeline</span>
              </h3>
              <div className="space-y-4">
                {product.technicalArchitecture.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-border-light shadow-2xs">
                    <span className="flex items-center justify-center w-7 h-7 rounded-xl bg-primary/10 text-primary font-mono text-xs font-bold shrink-0">
                      0{idx + 1}
                    </span>
                    <p className="text-sm text-foreground-muted leading-relaxed pt-0.5">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Features & Stage */}
          <div className="lg:col-span-5 space-y-8">
            {/* Key Platform Capabilities */}
            <div className="rounded-3xl p-8 bg-white border border-border-light shadow-subtle">
              <h3 className="font-display text-xl font-bold text-navy mb-6 flex items-center gap-2">
                <ShieldCheck size={20} className="text-emerald-600" />
                <span>Hardened Specifications</span>
              </h3>
              <div className="space-y-3">
                {product.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Operational Stage Details */}
            <div className="rounded-3xl p-8 bg-blue-50/50 border border-blue-200/80">
              <h3 className="font-display text-xl font-bold text-blue-950 mb-3 flex items-center gap-2">
                <Database size={20} className="text-primary" />
                <span>Development &amp; Evaluation Stage</span>
              </h3>
              <p className="text-sm text-blue-950/80 leading-relaxed mb-6 font-sans">
                {product.stageDetails}
              </p>

              {product.website && (
                <a
                  href={product.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink size={16} />
                </a>
              )}
            </div>

            {/* Technologies */}
            <div className="rounded-3xl p-8 bg-background-secondary border border-border-light">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-navy mb-3 flex items-center gap-2">
                <Terminal size={14} className="text-primary" />
                <span>Core Architectural Stack</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white border border-border-light text-navy font-medium shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
