"use client";

import { motion } from "framer-motion";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  text: string;
  companyLogo?: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex-none w-[320px] md:w-[400px] h-full bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-colors duration-500" />

      {/* Quote Icon */}
      <div className="mb-6">
        <svg
          width="32"
          height="24"
          viewBox="0 0 32 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-orange-500/20 group-hover:text-orange-500/40 transition-colors duration-500"
        >
          <path
            d="M0 24V11.124L3.624 0H9.552L6.144 11.124H9.552V24H0ZM16 24V11.124L19.624 0H25.552L22.144 11.124H25.552V24H16Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 relative z-10 italic">
        "{testimonial.text}"
      </blockquote>

      {/* Author & Footer */}
      <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50 relative z-10">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover bg-gray-100 shadow-sm group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-white" />
          </div>
          <div>
            <h4 className="text-sm font-black text-gray-900 leading-tight">
              {testimonial.name}
            </h4>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">
              {testimonial.role}
            </p>
          </div>
        </div>

        {/* Dynamic Star Rating */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-3 h-3 text-orange-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}
