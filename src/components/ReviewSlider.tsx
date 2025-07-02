'use client';

import { Review } from "@/data/reviews";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

interface ReviewSliderProps {
  reviews: Review[];
}

export default function ReviewSlider({ reviews }: ReviewSliderProps) {
  return (
    <section className="bg-[#2e463f] text-white py-24 font-serif">
      <div className="max-w-3xl mx-auto text-center relative px-4">
        <div className="w-10/12 mx-auto lg:w-full relative">
          {/* Custom Prev Button */}
          <button
            className="swiper-button-prev-custom absolute -left-10 top-1/2 -translate-y-1/2 z-10 bg-transparent border border-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/10 transition"
            aria-label="Previous"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M15 18l-6-6 6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Custom Next Button */}
          <button
            className="swiper-button-next-custom absolute -right-10 top-1/2 -translate-y-1/2 z-10 bg-transparent border border-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/10 transition"
            aria-label="Next"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 6l6 6-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            spaceBetween={30}
            slidesPerView={1}
            className="pb-12"
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="text-center w-11/12 mx-auto lg:w-full max-w-2xl">
                  <div className="mb-6 text-yellow-400 text-2xl">★★★★★</div>
                  <h3 className="text-2xl italic mb-4">"{review.quote}"</h3>
                  <p className="text-lg text-white/90 mb-6">{review.body}</p>
                  <p className="text-sm italic text-white/70">
                    – {review.author}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
