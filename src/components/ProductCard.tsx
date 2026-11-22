import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  index: number;
  onSelect?: (product: Product) => void;
}

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

export default function ProductCard({ product, index, onSelect }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="group flex flex-col bg-white rounded-3xl border border-border-light overflow-hidden shadow-subtle hover:shadow-card-hover hover:border-primary/30 transition-all duration-300"
    >
      {/* Visual Image Preview */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-background-secondary border-b border-border-light">
        <img
          src={product.primaryImage}
          alt={product.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Category badge */}
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/90 backdrop-blur-md text-navy shadow-sm border border-border-light">
          {product.category}
        </span>

        {/* Development Status */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border shadow-sm backdrop-blur-md bg-white/95 ${
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

          {product.website && (
            <a
              href={product.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit live site for ${product.name}`}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white text-navy hover:text-primary shadow-sm border border-border-light transition-colors"
            >
              <span>Live Site</span>
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-display text-2xl font-bold text-navy group-hover:text-primary transition-colors tracking-tight mb-2">
            {product.name}
          </h3>
          <p className="text-sm font-semibold text-primary mb-3">
            {product.tagline}
          </p>
          <p className="text-sm text-foreground-muted leading-relaxed mb-6 line-clamp-3">
            {product.description}
          </p>

          {/* Key highlights peek */}
          <div className="space-y-2 mb-6 pt-4 border-t border-border-light/80">
            {product.keyFeatures.slice(0, 2).map((feat, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-foreground-muted leading-snug">
                <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-border-light flex items-center justify-between gap-3">
          <Link
            to={`/products/${product.id}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark transition-colors group/link"
          >
            <span>Architecture & Blueprint</span>
            <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>

          {onSelect && (
            <button
              onClick={() => onSelect(product)}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-border-light text-foreground-muted hover:text-navy hover:bg-background-secondary transition-colors"
            >
              Quick Specs
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
