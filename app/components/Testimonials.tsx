"use client";

import { motion } from "framer-motion";
import TestimonialCard, { Testimonial } from "./TestimonialCard";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO, TechStart",
    avatar: "https://picsum.photos/seed/person1/100/100",
    text: "Akpan delivered an outstanding product. His attention to detail and ability to translate our vision into a functional interface exceeded all expectations. Highly recommend!",
  },
  {
    id: 2,
    name: "David Okafor",
    role: "Product Manager, Finova",
    avatar: "https://picsum.photos/seed/person2/100/100",
    text: "Working with Akpan was a pleasure. He's not just a developer — he's a problem solver. The dashboard he built for us has become the backbone of our operations.",
  },
  {
    id: 3,
    name: "Amara Nwosu",
    role: "Founder, Creato",
    avatar: "https://picsum.photos/seed/person3/100/100",
    text: "Exceptional work, delivered on time. Akpan's code is clean, well-documented, and the UI he designed is simply beautiful. We'll definitely work together again.",
  },
  {
    id: 4,
    name: "Tunde Adeyemi",
    role: "CTO, Buildify",
    avatar: "https://picsum.photos/seed/person4/100/100",
    text: "One of the most talented front-end engineers I've worked with. He brings both technical depth and design sensibility to every project. A true professional.",
  },
  {
    id: 5,
    name: "Emily Chen",
    role: "Marketing Director",
    avatar: "https://picsum.photos/seed/person5/100/100",
    text: "The web application Akpan built for our campaign was incredibly performant. Our conversion rates increased by 40% after the launch. Simply brilliant work.",
  },
];

export default function Testimonials() {
  // Double the list for seamless infinite marquee
  const items = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
            Trusted by Industry{" "}
            <span className="text-orange-500">Leaders.</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            I've had the privilege of working with amazing people and companies
            to build digital experiences that make an impact.
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee Wrapper */}
      <div className="relative flex overflow-hidden">
        {/* Row 1: Left to Right */}
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 50,
              ease: "linear",
            },
          }}
          className="flex flex-none gap-6 px-3 mb-4"
        >
          {items.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
          ))}
        </motion.div>

        {/* Gradient Fades for edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
