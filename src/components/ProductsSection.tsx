import { useState } from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../data/products';
import type { Product } from '../types';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section
      id="products"
      className="relative py-24 sm:py-32 bg-navy-deep overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-40" />

      {/* Decorative glow blobs */}
      <div className="pointer-events-none absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-accent/[0.05] blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── Heading ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 mb-4 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary-light border border-primary/20">
            Products
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Our Products
          </h2>
          <p className="mt-4 text-base sm:text-lg text-foreground-light leading-relaxed">
            Enterprise platforms solving real-world infrastructure challenges across Africa
          </p>
        </motion.div>

        {/* ─── Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onSelect={setSelectedProduct}
            />
          ))}
        </div>
      </div>

      {/* ─── Modal ─── */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
