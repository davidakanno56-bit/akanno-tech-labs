import { useState, useCallback, useEffect } from 'react';
import type { Variants } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Layers,
  Lightbulb,
  Cpu,
  AlertTriangle,
  Info,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const statusBadgeStyles: Record<string, string> = {
  emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  blue: 'bg-blue-50 text-blue-700 border-blue-200',
  cyan: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  amber: 'bg-amber-50 text-amber-700 border-amber-200',
  indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200',
};

const overlay: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const panel: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, damping: 28, stiffness: 300 },
  },
  exit: { opacity: 0, y: 20, scale: 0.98, transition: { duration: 0.2 } },
};

/** Inner modal content keyed to product.id so state automatically resets cleanly */
function ModalContent({ product, onClose }: { product: Product; onClose: () => void }) {
  const [activeImg, setActiveImg] = useState(0);

  // Keyboard navigation
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setActiveImg((i) => Math.min(i + 1, product.gallery.length - 1));
      if (e.key === 'ArrowLeft') setActiveImg((i) => Math.max(i - 1, 0));
    },
    [onClose, product.gallery.length],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  return (
    <motion.div
      variants={panel}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative z-10 w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-border-light my-auto"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close modal"
        className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 backdrop-blur-md border border-border-light text-navy hover:text-primary hover:bg-white shadow-md transition-colors"
      >
        <X size={18} />
      </button>

      {/* Gallery Visual */}
      <div className="relative aspect-[16/9] bg-background-secondary border-b border-border-light">
        <AnimatePresence mode="wait">
          <motion.img
            key={product.gallery[activeImg]}
            src={product.gallery[activeImg]}
            alt={`${product.name} visual ${activeImg + 1}`}
            className="w-full h-full object-cover object-top"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />
        </AnimatePresence>

        {/* Navigation arrows */}
        {product.gallery.length > 1 && (
          <>
            <button
              onClick={() => setActiveImg((i) => Math.max(i - 1, 0))}
              disabled={activeImg === 0}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 backdrop-blur-md text-navy hover:text-primary shadow-md disabled:opacity-30 transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setActiveImg((i) => Math.min(i + 1, product.gallery.length - 1))}
              disabled={activeImg === product.gallery.length - 1}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 backdrop-blur-md text-navy hover:text-primary shadow-md disabled:opacity-30 transition"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Dots */}
        {product.gallery.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {product.gallery.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImg(idx)}
                aria-label={`Go to image ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-200 ${
                  idx === activeImg ? 'bg-primary w-6' : 'bg-white/80 w-2 hover:bg-white'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content Body */}
      <div className="p-6 sm:p-10 space-y-8 max-h-[60vh] overflow-y-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-6 border-b border-border-light">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
                {product.category}
              </span>
              <span className="text-border-light">&bull;</span>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                  statusBadgeStyles[product.statusColor] ?? statusBadgeStyles.blue
                }`}
              >
                {product.status}
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy tracking-tight">
              {product.name}
            </h2>
            <p className="mt-1 text-sm sm:text-base font-medium text-foreground-muted">
              {product.tagline}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {product.website && (
              <a
                href={product.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-primary text-white hover:bg-primary-hover shadow-sm transition-colors"
              >
                <ExternalLink size={14} />
                <span>Open Live Platform</span>
              </a>
            )}
            <Link
              to={`/products/${product.id}`}
              onClick={onClose}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-background-secondary border border-border-light text-navy hover:text-primary transition-colors"
            >
              <span>Full Details</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Description */}
        <p className="text-foreground leading-relaxed text-sm sm:text-base">
          {product.description}
        </p>

        {/* 4 Detail blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Problem Statement */}
          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/70 space-y-2">
            <div className="flex items-center gap-2 font-display font-bold text-sm text-amber-900">
              <AlertTriangle size={16} className="text-amber-600" />
              <span>Problem Domain</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-950/80 leading-relaxed">
              {product.problemSolved}
            </p>
          </div>

          {/* Development Stage Transparency */}
          <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200/70 space-y-2">
            <div className="flex items-center gap-2 font-display font-bold text-sm text-blue-900">
              <Info size={16} className="text-blue-600" />
              <span>Development Stage Transparency</span>
            </div>
            <p className="text-xs sm:text-sm text-blue-950/80 leading-relaxed">
              {product.stageDetails}
            </p>
          </div>

          {/* Key Specifications */}
          <div className="p-5 rounded-2xl bg-background-secondary border border-border-light space-y-3">
            <div className="flex items-center gap-2 font-display font-bold text-sm text-navy">
              <Lightbulb size={16} className="text-primary" />
              <span>Hardened Specifications</span>
            </div>
            <ul className="space-y-1.5">
              {product.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-foreground-muted leading-relaxed">
                  <Layers size={13} className="mt-0.5 shrink-0 text-primary" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Pipeline */}
          <div className="p-5 rounded-2xl bg-background-secondary border border-border-light space-y-3">
            <div className="flex items-center gap-2 font-display font-bold text-sm text-navy">
              <Cpu size={16} className="text-cyan-600" />
              <span>Technical Architecture Steps</span>
            </div>
            <ol className="space-y-2">
              {product.technicalArchitecture.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-foreground-muted leading-relaxed">
                  <span className="shrink-0 flex items-center justify-center w-4 h-4 rounded-full bg-primary/10 text-[10px] font-bold text-primary font-mono">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  // Lock body scroll
  useEffect(() => {
    if (product) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [product]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          key="product-modal-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto py-6 px-4"
          variants={overlay}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-navy/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Inner Content keyed by product id to prevent setState in effect */}
          <ModalContent key={product.id} product={product} onClose={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
