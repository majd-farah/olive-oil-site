'use client';

import { useState } from 'react';
import { products as originalProducts, Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';

function getTagOptions(products: Product[]) {
  const tagSet = new Set(products.map(p => p.tag?.label).filter(Boolean));
  return Array.from(tagSet) as string[];
}

export default function AllProductsPage() {
  const [filterTag, setFilterTag] = useState('All');

  const tagOptions = getTagOptions(originalProducts);

  const filteredProducts = originalProducts.filter(product =>
    filterTag === 'All' ? true : product.tag?.label === filterTag
  );

  const handleReset = () => {
    setFilterTag('All');
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 font-serif bg-white min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-semibold text-gray-900 mb-2">All Products</h1>
          <p className="text-sm text-gray-600">{filteredProducts.length} matching products</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {/* Filter by tag */}
          <div className="flex items-center gap-2">
            <label htmlFor="tag" className="text-sm text-gray-700">
              Filter by:
            </label>
            <select
              id="tag"
              value={filterTag}
              onChange={(e) => setFilterTag(e.target.value)}
              className="px-3 py-2 border border-gray-300 bg-white text-sm text-gray-800"
            >
              <option value="All">All Types</option>
              {tagOptions.map((tag) => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>

          {/* Reset */}
          {filterTag !== 'All' && (
            <button
              onClick={handleReset}
              className="text-sm underline text-gray-600 hover:text-black transition"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Product grid with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filterTag}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
