'use client';

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const toggleSearch = () => {
    setIsSearchExpanded(!isSearchExpanded);
    if (isSearchExpanded) {
      setSearchQuery("");
    }
  };

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

          {/* Search Bar (classic style) */}
          <div className="flex justify-center lg:justify-end lg:w-1/3 pr-6">
            <form onSubmit={handleSearch} className="relative w-64">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-400 text-sm text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#5a5938] transition"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-[#5a5938]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute top-5 right-5">
            <button className="text-gray-700 hover:text-[#857a51] transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <div className="md:hidden mt-6 pt-4 border-t border-gray-200 font-serif text-base tracking-wide">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="hover:text-[#857a51] transition-colors">Home</Link>
            <Link href="/products" className="hover:text-[#857a51] transition-colors">Products</Link>
            <Link href="/contact" className="hover:text-[#857a51] transition-colors">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
