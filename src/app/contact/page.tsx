'use client';

import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-800 font-serif">
      {/* Hero */}
      <motion.section
        className="relative h-[50vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url("/background1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        {...fadeIn}
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center px-6 max-w-2xl mx-auto">
          <h1 className="text-5xl mb-4">Contact Us</h1>
          <p className="text-lg text-white/90 italic">
            We'd love to hear from you — whether it's a question, suggestion, or story.
          </p>
        </div>
      </motion.section>

      {/* Contact Info & Form */}
      <motion.section className="max-w-3xl mx-auto py-20 px-6" {...fadeIn}>
        <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>
        <p className="text-lg mb-8 leading-relaxed">
          You can reach us anytime by email or through the form below. Our small team usually responds within 1–2 business days.
        </p>

        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
          <form className="grid grid-cols-1 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b3a16c]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b3a16c]"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b3a16c]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#b3a16c] text-black font-medium px-6 py-2 rounded-md hover:bg-[#cdb47c] transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-10 text-sm text-gray-600">
          Or email us directly at:{" "}
          <a href="mailto:support@joudoliveoil.com" className="text-[#b3a16c] underline">
            support@joudoliveoil.com
          </a>
        </div>
      </motion.section>
    </main>
  );
}
