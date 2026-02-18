"use client";

import TimelineItem from "./TimelineItem";

export interface Experience {
  year: string;
  title: string;
  company: string;
  type: string;
  summary: string;
  tech: string[];
  side: "left" | "right";
}

interface TimelineProps {
  experiences: Experience[];
}

export default function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="relative">
      {/* Center vertical line - Hidden on small screens, shown on md+ */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden md:block" />

      {/* Vertical line for mobile - Shown on left side */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 md:hidden" />

      <div className="flex flex-col gap-12 md:gap-10">
        {experiences.map((exp, i) => (
          <TimelineItem key={i} exp={exp} index={i} />
        ))}
      </div>
    </div>
  );
}
