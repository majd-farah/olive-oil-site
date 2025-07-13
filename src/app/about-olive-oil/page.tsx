'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  viewport: { once: true, margin: '-100px' },
};

export default function AboutOliveOilPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-white font-serif mb-12"
        style={{
          backgroundImage: 'url("/about-olive-oil.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <motion.div
          className="relative z-20 text-center px-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">About Olive Oil</h1>
          <p className="text-lg lg:text-xl text-white/90 italic">
            Discover the history, health benefits, and secrets of the Mediterranean's liquid gold.
          </p>
        </motion.div>
      </section>

      <main className="max-w-3xl mx-auto py-5 px-6 font-serif text-gray-900">
        <h1 className="text-4xl font-bold mb-6 text-center lg:hidden">About Olive Oil</h1>

        {[
          {
            title: 'A Rich History',
            text: `Olive oil has been a staple of Mediterranean culture for thousands of years. Revered by ancient civilizations, it was used not only as food, but also for medicine, cosmetics, and even in religious rituals. Today, olive oil remains a symbol of health, tradition, and culinary excellence around the world.`,
          },
          {
            title: 'How Olive Oil is Made',
            text: `Olive oil is produced by harvesting olives at their peak ripeness, then crushing and pressing them to extract the oil. The best quality, extra virgin olive oil, is made using only mechanical means—without heat or chemicals—to preserve the natural flavors and nutrients.`,
          },
          {
            title: 'Health Benefits',
            text: `Rich in monounsaturated fats, antioxidants, and anti-inflammatory compounds, olive oil supports heart health and reduces the risk of chronic diseases. It's a core part of the Mediterranean diet—one of the healthiest in the world.`,
          },
        ].map((section, i) => (
          <motion.section
            key={i}
            className="mb-10 bg-white p-6 border border-gray-200 rounded-lg shadow-md"
            {...fadeInUp}
          >
            <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{section.text}</p>
          </motion.section>
        ))}

        {/* Tips section */}
        <motion.section className="mb-10" {...fadeInUp}>
          <div className="bg-yellow-50 border-l-4 border-[#b3a16c] p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-3 text-[#5a5938]">Tips for Enjoying Olive Oil</h2>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
              <li>Use extra virgin olive oil for salads, dipping, and finishing dishes to enjoy its full flavor.</li>
              <li>Store it in a cool, dark place and use within a year of opening.</li>
              <li>Look for labels like "cold-pressed" and "extra virgin" for quality assurance.</li>
              <li>Try it in marinades, baking, or even drizzled over desserts for a gourmet twist.</li>
            </ul>
          </div>
        </motion.section>

        {/* Fun Fact */}
        <motion.section className="mb-10" {...fadeInUp}>
          <blockquote className="italic text-lg border-l-4 pl-4 border-[#b3a16c] text-gray-600 bg-gray-50 p-4 rounded">
            "Some olive trees are over 1,000 years old — and still producing olives to this day."
          </blockquote>
          <p className="mt-4 text-lg text-gray-700">
            The flavor of olive oil varies based on olive variety, soil, harvest time, and region—making each bottle a unique expression of its origin.
          </p>
        </motion.section>

        {/* Call to Action */}
        <motion.div className="text-center mt-16" {...fadeInUp}>
          <h3 className="text-2xl font-semibold mb-4">Ready to try authentic olive oil?</h3>
          <Link
            href="/products"
            className="inline-block bg-[#b3a16c] text-black font-medium px-6 py-3 rounded-md hover:bg-[#cdb47c] transition"
          >
            Browse Our Products
          </Link>
        </motion.div>
      </main>
    </>
  );
}
