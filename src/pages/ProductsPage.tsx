import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ExternalLink, Filter } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import ProductModal from '../components/ProductModal';
import ScrollReveal from '../components/ScrollReveal';
import type { Product } from '../types';

const statusBadgeStyles: Record<string, string> = {
  emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  blue: 'bg-blue-50 text-blue-700 border-blue-200',
  cyan: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  amber: 'bg-amber-50 text-amber-700 border-amber-200',
  indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200',
};

const statusDotStyles: Record<string, string> = {
  emerald: 'bg-emerald-500',
  blue: 'bg-blue-500',
  cyan: 'bg-cyan-500',
  amber: 'bg-amber-500',
  indigo: 'bg-indigo-500',
};

const CATEGORIES = [
  'All Products',
  'Aviation Risk Intelligence',
  'Trade-Risk Technology & AI',
  'Maritime Software & Revenue Protection',
  'Digital Infrastructure & Mobility',
  'Enterprise Software & Escrow Clearing',
] as const;

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All Products');

  const filteredProducts =
    activeCategory === 'All Products'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28 pb-24 bg-white min-h-screen text-foreground relative">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16 mb-12 relative z-10">
        <ScrollReveal>
          <span className="inline-block px-3.5 py-1 mb-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
            Venture Portfolio
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy mb-6">
            Sovereign Digital Products
          </h1>
          <p className="text-base sm:text-lg text-foreground-muted max-w-3xl leading-relaxed">
            Akanno Tech Labs Limited builds and validates specialized platforms designed to operate in high-friction, critical infrastructure environments across Africa. Each product is engineered with verified source architectures, strict security controls, and transparent development milestones.
          </p>
        </ScrollReveal>
      </div>

      {/* Category Filter Tabs */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16 mb-12">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-1.5 text-xs font-mono text-foreground-subtle mr-2 shrink-0">
            <Filter size={14} className="text-primary" />
            <span>FILTER:</span>
          </div>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-navy text-white shadow-sm'
                  : 'bg-background-secondary border border-border-light text-foreground-muted hover:text-navy hover:bg-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product List */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16 relative z-10">
        <div className="space-y-16">
          {filteredProducts.map((product) => (
            <ScrollReveal key={product.id} delay={0.08}>
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-border-light shadow-subtle hover:shadow-card-hover hover:border-primary/30 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Visual Preview */}
                  <div className="lg:col-span-5 order-2 lg:order-1">
                    <div className="rounded-2xl overflow-hidden border border-border-light bg-background-secondary relative group shadow-md">
                      <img
                        src={product.primaryImage}
                        alt={product.name}
                        className="w-full h-64 sm:h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />

                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase bg-white/95 text-navy shadow-sm border border-border-light">
                          {product.category}
                        </span>
                      </div>

                      {product.website && (
                        <div className="absolute bottom-4 right-4">
                          <a
                            href={product.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary text-white shadow-md hover:bg-primary-hover transition-colors"
                          >
                            <span>Live Deployment</span>
                            <ExternalLink size={12} />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-between">
                    <div>
                      {/* Development Stage Badge */}
                      <div className="mb-3">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                            statusBadgeStyles[product.statusColor] ?? statusBadgeStyles.blue
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                              statusDotStyles[product.statusColor] ?? statusDotStyles.blue
                            }`}
                          />
                          {product.status}
                        </span>
                      </div>

                      <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-2">
                        {product.name}
                      </h2>
                      <p className="text-base text-primary font-semibold mb-4">
                        {product.tagline}
                      </p>
                      <p className="text-sm sm:text-base text-foreground-muted leading-relaxed mb-6">
                        {product.description}
                      </p>

                      {/* Problem Statement Pill */}
                      <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 mb-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1 font-mono">
                          Target Core Friction
                        </p>
                        <p className="text-xs sm:text-sm text-amber-950/80 italic leading-relaxed">
                          "{product.problemSolved}"
                        </p>
                      </div>

                      {/* Key Architectural Highlights */}
                      <div className="space-y-2 mb-6">
                        {product.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                            <span className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {product.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-background-secondary border border-border-light text-navy font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-4 pt-5 border-t border-border-light">
                      <Link
                        to={`/products/${product.id}`}
                        className="px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-semibold inline-flex items-center gap-2 shadow-sm transition-all"
                      >
                        <span>Full Specification &amp; Architecture</span>
                        <ArrowRight size={16} />
                      </Link>

                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="px-5 py-3 rounded-xl border border-border-light hover:border-navy hover:text-navy text-foreground-muted text-sm font-semibold transition-all cursor-pointer bg-background-secondary"
                      >
                        Quick Blueprint Modal
                      </button>

                      {product.website && (
                        <a
                          href={product.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-3 text-xs sm:text-sm text-primary hover:text-primary-dark inline-flex items-center gap-1.5 font-semibold transition-colors ml-auto"
                        >
                          <span>Open Live Platform</span>
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Quick Blueprint Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
