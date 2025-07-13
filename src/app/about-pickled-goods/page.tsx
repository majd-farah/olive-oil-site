'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  viewport: { once: true, margin: '-100px' },
};

export default function AboutPickledGoodsPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-white font-serif mb-12"
        style={{
          backgroundImage: 'url("/pickles-background.jpg")',
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
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">About Arab Pickles</h1>
          <p className="text-lg lg:text-xl text-white/90 italic">
            Discover the vibrant world of Arab pickles—history, culture, and how to enjoy these tangy treasures.
          </p>
        </motion.div>
      </section>

      <main className="max-w-3xl mx-auto py-5 px-6 font-serif text-gray-900">
        <h1 className="text-4xl font-bold mb-6 text-center lg:hidden">About Arab Pickles</h1>

        {/* History, How They're Made, Health Benefits */}
        {[
          {
            title: 'A Staple of Arab Tables',
            text: `Pickles, or "mukhalal" in Arabic, are an essential part of Arab cuisine. From Lebanon and Syria to Egypt and Palestine, pickled vegetables are served with nearly every meal. Their bright flavors and satisfying crunch provide a perfect contrast to grilled meats, rice dishes, and mezze spreads. Passed down through generations, the art of pickling is a cherished tradition in Arab homes and markets.`,
          },
          {
            title: 'How Arab Pickles Are Made',
            text: `Arab pickles are made by submerging fresh vegetables—like cucumbers, turnips, carrots, wild cucumbers, and eggplants—in a brine of water, salt, vinegar, and sometimes garlic or spices. Many families have their own secret blends. Some pickles are quick-brined, while others are naturally fermented, developing complex flavors unique to the region and household.`,
          },
          {
            title: 'Health Benefits',
            text: `Arab pickles are low in calories and, when naturally fermented, can be a source of probiotics that support gut health. They add variety, color, and nutrition to the table, and their tangy taste can help balance rich or spicy foods. Enjoy them in moderation, as traditional recipes can be high in salt.`,
          },
        ].map((section, i) => (
          <motion.section
            key={i}
            className="mb-10"
            {...fadeInUp}
          >
            <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{section.text}</p>
          </motion.section>
        ))}

        {/* Tips section */}
        <motion.section className="mb-10" {...fadeInUp}>
          <div className="bg-[#f9f6ef] border-l-4 border-[#b3a16c] p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-3 text-[#5a5938]">Tips for Enjoying Our Pickles</h2>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
              <li>Serve pickles alongside grilled meats, falafel, shawarma, or sandwiches for a burst of flavor.</li>
              <li>Add pickled turnips or cucumbers to wraps and mezze platters for color and crunch.</li>
              <li>Use pickle brine to add tang to dressings, marinades, or even cocktails.</li>
              <li>Try a variety: wild cucumbers, eggplants stuffed with walnuts and garlic, carrots, cauliflower, and more.</li>
            </ul>
          </div>
        </motion.section>

        {/* Fun Fact */}
        <motion.section className="mb-10" {...fadeInUp}>
          <blockquote className="italic text-lg border-l-4 pl-4 border-[#b3a16c] text-gray-600 bg-[#f9f6ef] p-4 rounded">
            "In the Arab world, pickles are more than a side—they are a symbol of hospitality and tradition."
          </blockquote>
          <p className="mt-4 text-lg text-gray-700">
            From bustling souks to family kitchens, pickling is a beloved craft. Every region and family has its own favorite vegetables and spice blends, making Arab pickles a delicious expression of local culture.
          </p>
        </motion.section>

        {/* Call to Action */}
        <motion.div className="text-center mt-16" {...fadeInUp}>
          <h3 className="text-2xl font-semibold mb-4">Ready to taste authentic Arab pickles?</h3>
          <Link
            href="/products"
            className="inline-block bg-[#b3a16c] text-black font-medium px-6 py-3 hover:bg-[#cdb47c] transition"
          >
            Browse Our Pickled Goods
          </Link>
        </motion.div>
      </main>
    </>
  );
}
