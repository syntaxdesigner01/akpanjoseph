"use client";

import { useRef, useEffect, useState, useCallback } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO, TechStart",
    avatar: "https://picsum.photos/seed/person1/100/100",
    text: "Jacob delivered an outstanding product. His attention to detail and ability to translate our vision into a beautiful, functional interface exceeded all expectations. Highly recommend!",
  },
  {
    id: 2,
    name: "David Okafor",
    role: "Product Manager, Finova",
    avatar: "https://picsum.photos/seed/person2/100/100",
    text: "Working with Jacob was a pleasure. He's not just a developer — he's a problem solver. The dashboard he built for us has become the backbone of our operations.",
  },
  {
    id: 3,
    name: "Amara Nwosu",
    role: "Founder, Creato",
    avatar: "https://picsum.photos/seed/person3/100/100",
    text: "Exceptional work, delivered on time and on budget. Jacob's code is clean, well-documented, and the UI he designed is simply beautiful. We'll definitely work together again.",
  },
  {
    id: 4,
    name: "Tunde Adeyemi",
    role: "CTO, Buildify",
    avatar: "https://picsum.photos/seed/person4/100/100",
    text: "Joseph is one of the most talented front-end developers I've worked with. He brings both technical depth and design sensibility to every project. A true professional.",
  },
];

// Triple the list so we always have cards before AND after the visible window
const ITEMS = [...testimonials, ...testimonials, ...testimonials];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Returns the pixel width of one card (including gap)
  const cardWidth = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return 0;
    const card = el.querySelector<HTMLElement>("[data-card]");
    if (!card) return 0;
    const gap = 20; // gap-5 = 1.25rem = 20px
    return card.offsetWidth + gap;
  }, []);

  // Jump to the middle copy instantly (no animation) so we never hit the end
  const resetToMiddle = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cw = cardWidth();
    // Middle copy starts at index = testimonials.length
    el.scrollLeft = cw * testimonials.length;
  }, [cardWidth]);

  // Advance one card with smooth scroll
  const advance = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cw = cardWidth();
    const maxScroll = el.scrollWidth - el.clientWidth;

    // If we're near the end of the second copy, silently jump back to middle start
    if (el.scrollLeft + cw >= cw * testimonials.length * 2) {
      el.scrollLeft = cw * testimonials.length;
      return;
    }

    el.scrollBy({ left: cw, behavior: "smooth" });
  }, [cardWidth]);

  // Manual arrow scroll
  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cw = cardWidth();
    el.scrollBy({ left: direction === "right" ? cw : -cw, behavior: "smooth" });
  };

  // Start / stop the auto-advance timer
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(advance, 3000);
  }, [advance]);

  const stopTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  // Initialise: jump to middle copy so we can scroll left too
  useEffect(() => {
    resetToMiddle();
  }, [resetToMiddle]);

  // Auto-play
  useEffect(() => {
    if (!isPaused) startTimer();
    else stopTimer();
    return stopTimer;
  }, [isPaused, startTimer, stopTimer]);

  return (
    <section id="testimonials" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
              Reviews
            </p>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              What They Say
            </h2>
          </div>

          {/* Nav Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                scroll("left");
                startTimer();
              }}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-200"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => {
                scroll("right");
                startTimer();
              }}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-200"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Slider — bleeds past container so 3rd card peeks */}
      <div className="pl-6 md:pl-[max(1.5rem,calc((100vw-72rem)/2))]">
        <div
          ref={scrollRef}
          data-slider
          className="flex gap-5 overflow-x-hidden pb-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => {
            setIsPaused(false);
            startTimer();
          }}
        >
          {ITEMS.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              data-card
              /* 2 full cards + 10% of 3rd visible */
              className="flex-none w-[80vw] sm:w-[45vw] lg:w-[38vw] bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col gap-4 select-none"
            >
              {/* Quote icon */}
              <div className="text-4xl text-gray-200 font-serif leading-none">
                "
              </div>

              {/* Text */}
              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-gray-50">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover bg-gray-100"
                />
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Right spacer */}
          <div className="flex-none w-6 md:w-[max(1.5rem,calc((100vw-72rem)/2))]" />
        </div>
      </div>
    </section>
  );
}
