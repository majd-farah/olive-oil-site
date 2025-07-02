'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#ffffff] text-gray-900 pt-16 pb-8 font-serif">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column: Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Company</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link href="/about" className="hover:text-gray-900 transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-gray-900 transition">Contact</Link></li>
            <li><Link href="/faq" className="hover:text-gray-900 transition">FAQ</Link></li>
          </ul>
        </div>

        {/* Column: Shop */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Shop</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link href="/products" className="hover:text-gray-900 transition">All Products</Link></li>
            <li><Link href="/collections/all" className="hover:text-gray-900 transition">Collections</Link></li>
            <li><Link href="/awards" className="hover:text-gray-900 transition">Award Winners</Link></li>
          </ul>
        </div>

        {/* Column: Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link href="/privacy-policy" className="hover:text-gray-900 transition">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-gray-900 transition">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Column: Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Stay In Touch</h3>
          <p className="text-sm text-gray-700 mb-4">Get updates on seasonal harvests and exclusive offers.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 w-full bg-white text-gray-800 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b3a16c]"
            />
            <button
              type="submit"
              className="bg-[#b3a16c] hover:bg-[#dbba7c] text-black font-medium px-4 py-2 uppercase text-sm tracking-wide transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-300 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Joud Olive Oil. All rights reserved.
      </div>
    </footer>
  );
}
