'use client';

import { useState, useEffect } from 'react';
import { products as originalProducts, Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';

const sortOptions = [
  { label: 'Name (A–Z)', value: 'name-asc' },
  { label: 'Name (Z–A)', value: 'name-desc' },
  { label: 'Price (Low–High)', value: 'price-asc' },
  { label: 'Price (High–Low)', value: 'price-desc' },
  { label: 'Rating (High–Low)', value: 'rating-desc' },
];

function sortProducts(products: Product[], sortBy: string): Product[] {
  return [...products].sort((a, b) => {
    switch (sortBy) {
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      case 'price-asc':
        return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
      case 'price-desc':
        return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
      case 'rating-desc':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });
}

function getTagOptions(products: Product[]) {
  const tagSet = new Set(products.map(p => p.tag?.label).filter(Boolean));
  return Array.from(tagSet) as string[];
}

export default function AllProductsPage() {
  const [sortBy, setSortBy] = useState('name-asc');
  const [filterTag, setFilterTag] = useState('All');

  const tagOptions = getTagOptions(originalProducts);

  const filtered = originalProducts.filter(product =>
    filterTag === 'All' ? true : product.tag?.label === filterTag
  );

  const sortedProducts = sortProducts(filtered, sortBy);

  const handleReset = () => {
    setSortBy('name-asc');
    setFilterTag('All');
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 font-serif bg-white min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-semibold text-gray-900 mb-2">All Products</h1>
          <p className="text-sm text-gray-600">{sortedProducts.length} matching products</p>
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

          {/* Sort by */}
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm text-gray-700">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 bg-white text-sm text-gray-800"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Reset */}
          {(filterTag !== 'All' || sortBy !== 'name-asc') && (
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
          key={`${filterTag}-${sortBy}`} // triggers re-render
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sortedProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
