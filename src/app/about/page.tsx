'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800 font-serif">
      {/* Hero */}
      <motion.section
        className="relative h-[60vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url("/background1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        {...fadeInUp}
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-5xl lg:text-6xl tracking-wide mb-4">
            About <span className="text-[#b3a16c] italic">Joud</span>
          </h1>
          <p className="text-xl italic text-white/90">
            From our roots to your table — the story of Joud Olive Oil.
          </p>
        </div>
      </motion.section>

      {/* Content */}
      <motion.section className="max-w-4xl mx-auto py-20 px-6" {...fadeInUp}>
        <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
        <p className="text-lg leading-relaxed mb-10">
          At <strong>Joud Olive Oil</strong>, our mission is to bring you the finest extra virgin olive oil from the heart of the Mediterranean. We partner with small-scale producers who harvest by hand and press their olives with care — preserving tradition and purity.
        </p>

        <h2 className="text-3xl font-semibold mb-6">What We Believe</h2>
        <p className="text-lg leading-relaxed mb-10">
          We believe that olive oil should be more than just an ingredient — it should be an experience. That's why every bottle we offer reflects a deep connection to the land, the people, and the time-honored methods that make truly great oil.
        </p>

        <h2 className="text-3xl font-semibold mb-6">Why Joud?</h2>
        <p className="text-lg leading-relaxed">
          The name <em>Joud</em> comes from Arabic, meaning generosity and excellence — values we strive to embody in every part of what we do. When you choose Joud, you're choosing heritage, craftsmanship, and unmatched quality.
        </p>
      </motion.section>
    </main>
  );
}
