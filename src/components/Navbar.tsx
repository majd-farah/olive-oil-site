'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { products } from "../data/products";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredProducts.length > 0) {
      window.location.href = filteredProducts[0].href;
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowSearchResults(e.target.value.length > 0);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white text-gray-800 border-b border-gray-300 shadow-sm font-serif">
      <nav className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex flex-col lg:flex-row lg:items-center space-y-6 lg:space-y-0">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start lg:w-1/3">
            <Link href="/" className="text-3xl font-bold tracking-wide text-[#5a5938]">
              <img src="/logo.png" alt="Joud Olive Oil Logo" className="h-17 w-auto" />
            </Link>
          </div>

          {/* Centered Navigation Links */}
          <div className="flex justify-center lg:w-1/3">
            <div className="hidden md:flex space-x-10 text-lg tracking-wider">
              <Link href="/" className="hover:text-[#857a51] transition-colors">Home</Link>
              <Link href="/products" className="hover:text-[#857a51] transition-colors">Products</Link>
              <Link href="/about" className="hover:text-[#857a51] transition-colors">About</Link>
              <Link href="/contact" className="hover:text-[#857a51] transition-colors">Contact</Link>
            </div>
          </div>

          {/* Search Bar with Results Dropdown */}
          <div className="flex justify-center lg:justify-end lg:w-1/3 pr-6 pt-0" ref={searchRef}>
            <div className="relative -m-7 w-full lg:w-64 md:-m-0">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  onFocus={() => searchQuery.length > 0 && setShowSearchResults(true)}
                  className="w-full px-4 py-2 border border-gray-400 text-sm text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#5a5938] transition"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-[#5a5938] -mt-2 md:-mt-0"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>

              {/* Search Results Dropdown */}
              {showSearchResults && searchQuery.length > 0 && (
                <motion.div 
                  className="absolute top-full left-0 right-0 bg-white border border-gray-400 shadow-lg max-h-96 overflow-y-auto z-50"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                      <motion.div
                        key={product.slug}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.2, 
                          delay: index * 0.05,
                          ease: "easeOut"
                        }}
                      >
                        <Link
                          href={product.href}
                          className="flex items-center p-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                          onClick={() => {
                            setShowSearchResults(false);
                            setSearchQuery("");
                          }}
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded mr-3"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-gray-900 truncate">
                              {product.name}
                            </div>
                            <div className="text-xs text-gray-500 truncate">
                              {product.subtitle}
                            </div>
                            <div className="text-sm font-semibold text-[#5a5938]">
                              {product.price}
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))
                  ) : (
                    <motion.div 
                      className="p-3 text-sm text-gray-500 text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      No products found
                    </motion.div>
                  )}
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute top-5 right-5">
            <button className="text-gray-700 hover:text-[#857a51] transition-colors" onClick={toggleMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? "auto" : 0 
          }}
          transition={{ 
            duration: 0.3, 
            ease: "easeInOut" 
          }}
          className="overflow-hidden"
        >
          <motion.div 
            className="flex flex-col space-y-4 pt-4"
            initial={{ y: -20 }}
            animate={{ y: isMenuOpen ? 0 : -20 }}
            transition={{ 
              duration: 0.3, 
              ease: "easeInOut",
              delay: isMenuOpen ? 0.1 : 0 
            }}
          >
            {["Home", "Products", "About", "Contact"].map((label, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMenuOpen ? 1 : 0, 
                  x: isMenuOpen ? 0 : -20 
                }}
                transition={{ 
                  duration: 0.3, 
                  ease: "easeInOut",
                  delay: isMenuOpen ? 0.1 + index * 0.1 : 0 
                }}
                className={label === "Contact" ? "pb-3" : ""}
              >
                <Link
                  href={`/${label === "Home" ? "" : label.toLowerCase()}`}
                  className="hover:text-[#857a51] transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </nav>
    </header>
  );
}
