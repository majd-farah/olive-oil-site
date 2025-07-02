"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "./ProductCard";
import type { Swiper as SwiperType } from "swiper";

interface Product {
  tag: { label: string } | null;
  image: string;
  region: string;
  name: string;
  subtitle: string;
  price: string;
  reviews: number;
  rating: number;
  href: string;
}

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="w-full relative">
      {/* Custom Prev Button */}
      <button
        className="swiper-button-prev-custom absolute -left-7 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 shadow-md w-14 h-14 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
        aria-label="Previous"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Custom Next Button */}
      <button
        className="swiper-button-next-custom absolute -right-7 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 shadow-md w-14 h-14 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
        aria-label="Next"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={24}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        className="h-full w-full"
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {products.map((product, idx) => (
          <SwiperSlide key={idx} className="h-full">
            <div className="h-full">
              <ProductCard {...product} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
