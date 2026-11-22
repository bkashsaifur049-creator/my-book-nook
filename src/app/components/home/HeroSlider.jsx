
"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    subtitle: "WELCOME TO BOOKNOOK",
    title: "Discover Your Next Favorite Book",
    description:
      "Explore thousands of stories, learn something new, and enjoy reading with BookNook.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
  },
  {
    subtitle: "READ MORE, LEARN MORE",
    title: "Every Book Opens a New World",
    description:
      "Find inspiring books and discover amazing stories from different authors.",
    image:
      "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6",
  },
  {
    subtitle: "YOUR LITTLE LIBRARY",
    title: "Borrow Books, Enjoy Reading",
    description:
      "Choose your favorite books and enjoy a wonderful reading experience.",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
];

export default function HeroSlider() {
  return (
    <section className="px-4 py-8 md:px-8 lg:px-12">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="overflow-hidden rounded-2xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative flex min-h-[420px] items-center bg-cover bg-center px-8 py-16 md:min-h-[500px] md:px-16"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.25)), url(${slide.image})`,
              }}
            >
              <div className="max-w-2xl text-white">
                <p className="mb-4 text-sm font-bold tracking-[3px] text-amber-400">
                  {slide.subtitle}
                </p>

                <h1 className="mb-5 text-4xl font-bold leading-tight md:text-6xl">
                  {slide.title}
                </h1>

                <p className="mb-8 max-w-xl text-base leading-7 text-gray-200 md:text-lg">
                  {slide.description}
                </p>

                <Link
                  href="/books"
                  className="inline-block rounded-lg bg-amber-500 px-7 py-3 font-semibold text-gray-900 transition hover:bg-amber-400"
                >
                  Browse Books
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
