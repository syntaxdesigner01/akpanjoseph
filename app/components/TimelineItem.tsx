"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "./Timeline";

interface TimelineItemProps {
  exp: Experience;
  index: number;
}

export default function TimelineItem({ exp, index }: TimelineItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isLeft = exp.side === "left";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative grid grid-cols-1 md:grid-cols-2 gap-0 items-start"
    >
      {/* Laptop Layout */}
      {isLeft ? (
        <>
          {/* Left card */}
          <div className="pr-0 md:pr-10 flex justify-start md:justify-end order-2 md:order-1 ml-10 md:ml-0">
            <ExperienceCard exp={exp} align="right" />
          </div>

          {/* Center dot */}
          <div
            className="absolute left-4 md:left-1/2 -translate-x-1/2 top-5 z-10 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className={`w-4 h-4 rounded-full border-2 border-white shadow transition-all duration-300 ${isHovered ? "bg-orange-600 scale-125" : "bg-orange-500"}`}
            />

            {/* Year Tooltip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
              className="absolute left-1/2 -translate-x-1/2 -top-8 bg-gray-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap pointer-events-none font-bold"
            >
              {exp.year.split(" – ")[0]}
            </motion.div>
          </div>

          {/* Right empty space on laptop */}
          <div className="hidden md:block order-2" />
        </>
      ) : (
        <>
          {/* Left empty space on laptop */}
          <div className="hidden md:block" />

          {/* Center dot */}
          <div
            className="absolute left-4 md:left-1/2 -translate-x-1/2 top-5 z-10 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className={`w-4 h-4 rounded-full border-2 border-white shadow transition-all duration-300 ${isHovered ? "bg-gray-800 scale-125" : "bg-gray-900"}`}
            />

            {/* Year Tooltip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
              className="absolute left-1/2 -translate-x-1/2 -top-8 bg-gray-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap pointer-events-none font-bold"
            >
              {exp.year.split(" – ")[0]}
            </motion.div>
          </div>

          {/* Right card */}
          <div className="pl-10 flex justify-start order-2">
            <ExperienceCard exp={exp} align="left" />
          </div>
        </>
      )}
    </motion.div>
  );
}
