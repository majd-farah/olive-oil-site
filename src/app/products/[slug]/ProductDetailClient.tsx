'use client';

import { motion } from "framer-motion";
import { Product } from "@/data/products";

interface ProductDetailClientProps {
  product: Product;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  viewport: { once: true, margin: "-100px" },
};

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6 font-serif text-gray-800">
      <motion.div 
        className="grid md:grid-cols-2 gap-12 items-center"
        {...fadeInUp}
      >
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-auto rounded shadow"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2 } }}
          viewport={{ once: true, margin: "-100px" }}
        />
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3 } }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h1 className="text-4xl font-semibold mb-4">{product.name}</h1>
          <p className="text-gray-500 italic mb-2">{product.subtitle}</p>
          <p className="text-lg text-gray-600 mb-4">{product.region}</p>
          <p className="text-2xl font-bold mb-6">{product.price}</p>
          <motion.a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#b3a16c] text-black px-6 py-2 hover:bg-[#d8c48c] transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Buy on Amazon
          </motion.a>
          <p className="mt-6 text-base leading-relaxed">{product.description}</p>
        </motion.div>
      </motion.div>
    </div>
  );
} 