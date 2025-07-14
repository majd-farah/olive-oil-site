'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  viewport: { once: true },
};

const images = [
  '/hero-background1.jpg',
]; // Add as many images as you'd like

export default function HeroSwiper() {
  return (
    <section className="relative h-[85vh] font-serif">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="h-full"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${src})` }}
            />
            <div className="absolute inset-0 bg-black/50 z-10 backdrop-blur-xs" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay Content */}
      <motion.div
        className="absolute inset-0 z-20 flex items-center justify-center text-white px-6 text-center"
        {...fadeInUp}
      >
        <div className="max-w-3xl mx-auto">
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
      </motion.div>
    </section>
  );
}
