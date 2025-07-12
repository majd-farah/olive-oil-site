'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#ffffff] text-gray-900 pt-16 pb-8 font-serif">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
        {/* Column: Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Company</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link href="/about" className="hover:text-gray-900 transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-gray-900 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Column: Shop */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Shop</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link href="/products" className="hover:text-gray-900 transition">All Products</Link></li>
          </ul>
        </div>

        {/* Column: Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link href="/legal/privacy-policy" className="hover:text-gray-900 transition">Privacy Policy</Link></li>
            <li><Link href="/legal/terms" className="hover:text-gray-900 transition">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-300 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Joud Olive Oil. All rights reserved.
      </div>
    </footer>
  );
}
