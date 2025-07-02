'use client';

import ProductSlider from "../components/ProductSlider";
import ReviewSlider from "@/components/ReviewSlider";
import { reviews } from "../data/reviews";
import { products } from "../data/products";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  viewport: { once: true, margin: "-100px" },
};

export default function HomePage() {
  return (
    <>
      <div className="relative">
        {/* Hero Section */}
        <motion.section
          className="relative h-[85vh] flex items-center justify-center text-white font-serif"
          style={{
            backgroundImage: 'url("/background1.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
          }}
          {...fadeInUp}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />

          {/* Hero content */}
          <div className="relative z-20 text-center px-6 max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-6xl tracking-wide leading-snug mb-6 text-white">
              Welcome to <span className="text-[#b3a16c] italic">Joud</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/90 italic mb-10">
              Hand-harvested, cold-pressed, and steeped in tradition. <br />
              Discover the richness of authentic extra virgin olive oil.
            </p>
            <a
              href="/about"
              className="inline-block border border-white px-10 py-3 text-lg tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-200"
            >
              About Us
            </a>
          </div>
        </motion.section>

        {/* Featured Products */}
        <motion.section className="py-24 px-4 bg-white" {...fadeInUp}>
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center justify-center px-0">
            {/* Left Panel */}
            <div className="lg:w-[340px] w-full mb-8 lg:mb-0 flex flex-col items-center lg:items-start">
              <h2 className="font-serif text-5xl font-semibold text-gray-900 mb-2">
                Featured Products
              </h2>
              <p className="italic text-lg text-gray-500 mb-8">
                from the Middle East
              </p>
              <a
                href="/products"
                className="hidden lg:inline-block bg-gray-900 text-white px-12 py-3 text-lg font-semibold tracking-widest hover:bg-gray-700 transition"
              >
                SHOP ALL
              </a>
            </div>

            {/* Product Slider */}
            <div className="lg:w-2/3 w-full relative">
              <ProductSlider products={products} />
            </div>
          </div>

          {/* Mobile Shop All */}
          <div className="mt-12 lg:hidden flex justify-center">
            <a
              href="/collections/all"
              className="bg-gray-900 text-white px-12 py-3 text-lg font-semibold tracking-widest hover:bg-gray-700 transition"
            >
              SHOP ALL
            </a>
          </div>
        </motion.section>
      </div>

      {/* Educational Section */}
      <motion.section className="bg-white py-24 px-0" {...fadeInUp}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 grid-rows-2 gap-0 items-stretch font-serif text-gray-900">
          {/* Image Top Left */}
          <div className="min-h-[320px] h-full w-full">
            <img
              src="/olives.jpg"
              alt="Harvesting olives"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Text Top Right */}
          <div className="flex flex-col justify-center items-start h-full w-full bg-white p-12">
            <h2 className="text-4xl font-semibold mb-4">
              Learn About Olive Oil
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              Just like wine, there are hundreds of olive varieties, each with
              its own unique taste and character. High-quality extra virgin
              olive oils are fruity, pleasantly bitter due to the freshness of
              the olives, and pungent because of the abundance of nutrients.
            </p>
            <a
              href="/learn"
              className="inline-block bg-gray-900 text-white px-6 py-3 tracking-wide uppercase text-sm font-medium hover:bg-gray-700 transition self-start"
            >
              Learn More
            </a>
          </div>
          {/* Text Bottom Left */}
          <div className="flex flex-col justify-center items-start h-full w-full bg-white p-12 order-2 md:order-3">
            <h2 className="text-4xl font-semibold mb-4">
              Award Winning Olive Oils
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              Our producers truly are the best in the world, and each year their
              products compete in the most prestigious competitions. Customers
              make the best judges—and they make these top-quality oils best
              sellers every year.
            </p>
            <a
              href="/awards"
              className="inline-block bg-gray-900 text-white px-6 py-3 tracking-wide uppercase text-sm font-medium hover:bg-gray-700 transition self-start"
            >
              Learn More
            </a>
          </div>
          {/* Image Bottom Right */}
          <div className="min-h-[320px] h-full w-full order-3 md:order-4">
            <img
              src="/olivetree.jpg"
              alt="Award winning olive oil bottle"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Our Story + Testimonials */}
      <motion.section className="max-w-7xl mx-auto" {...fadeInUp}>
        <div
          className="relative bg-cover bg-center bg-no-repeat text-white font-serif"
          style={{ backgroundImage: 'url("/olivetree.jpg")' }}
        >
          {/* Blurred overlay */}
          <div className="absolute inset-0 z-10 bg-black/40 backdrop-blur-sm" />
          <div className="relative z-20 text-center px-6 py-40 max-w-4xl mx-auto">
            <p className="uppercase text-sm tracking-widest text-[#b3a16c] mb-2">
              Our Story
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              We Are The Bridge
            </h2>
            <p className="italic text-xl mb-8 text-yellow-100">
              between you and the world's best olive oil producers
            </p>
            <a
              href="/about"
              className="inline-block bg-[#b3a16c] hover:bg-[#dbba7c] text-black font-medium px-8 py-3 tracking-wide uppercase text-sm transition"
            >
              Learn More
            </a>
          </div>
        </div>
        <ReviewSlider reviews={reviews} />
      </motion.section>
    </>
  );
}
