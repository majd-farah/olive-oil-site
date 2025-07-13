'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  viewport: { once: true, margin: '-100px' },
};

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800 font-serif">
      {/* Hero Section */}
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
            Where old-world flavor meets modern simplicity.
          </p>
        </div>
      </motion.section>

      {/* Content Section */}
      <motion.section className="max-w-4xl mx-auto py-20 px-6" {...fadeInUp}>
        <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
        <p className="text-lg leading-relaxed mb-10">
          <strong>Joud</strong> was born from a simple idea: to bring the soul of the Levant to every kitchen. What began with small-batch extra virgin olive oil has grown into a collection of curated goods—handpicked pickles, wild herbs, and other pantry essentials—each one a celebration of tradition, taste, and time.
        </p>

        <h2 className="text-3xl font-semibold mb-6">Craft Over Mass</h2>
        <p className="text-lg leading-relaxed mb-10">
          We work with producers who care—farmers, artisans, and preservers of heritage. From pickled eggplants aged in clay jars to olives cold-pressed within hours of harvest, everything we offer is made in small quantities with big intention. No shortcuts. No fillers. Just good food made the right way.
        </p>

        <h2 className="text-3xl font-semibold mb-6">The Meaning of Joud</h2>
        <p className="text-lg leading-relaxed mb-10">
          In Arabic, <em>Joud</em> means both generosity and excellence. It’s a word passed down in families, shared around tables, and felt in every hospitable gesture. We chose this name because it reflects not just what we offer, but how we offer it—with care, honesty, and pride.
        </p>

        <h2 className="text-3xl font-semibold mb-6">What Guides Us</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-10">
          <li><strong>Integrity over trends.</strong> If it isn’t rooted in culture or craft, it doesn’t belong on our shelves.</li>
          <li><strong>Flavor through time.</strong> Many of our goods take weeks—or even months—to mature. That’s how it should be.</li>
          <li><strong>Heritage matters.</strong> We don’t just source ingredients. We tell stories, preserve methods, and honor the people behind the jars.</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-6">From Our Pantry to Yours</h2>
        <p className="text-lg leading-relaxed">
          Whether you're spreading labneh, layering pickles on a sandwich, or finishing a dish with golden olive oil, we’re here to help you eat better—with flavor that’s rich in both taste and tradition.
        </p>
      </motion.section>
    </main>
  );
}
