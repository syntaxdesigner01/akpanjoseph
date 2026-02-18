"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Timeline, { Experience } from "./Timeline";

/* ── Sub-component: CountUp Animation ── */
function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      });
      return controls.stop;
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

const experiences: Experience[] = [
  // ... (rest of the experiences array remains the same)
  {
    year: "Feb 2025 – Sep 2025",
    title: "Frontend Engineer ",
    company: "9th Marketplace",
    type: "Remote",
    summary:
      "Built core e-commerce features for a multi-vendor marketplace serving customers across Africa. Developed the product catalog, cart, and checkout flows with Next.js and TypeScript, and managed global state with Redux Toolkit. Created a reusable Tailwind component library and optimised performance for low-bandwidth regions, improving Core Web Vitals scores.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
    side: "right",
  },
  {
    year: "Jan 2024 – Aug 2024",
    title: "Frontend Engineer",
    company: "Chain Coop",
    type: "Remote",
    summary:
      "Architected and launched a CMS that cut content publishing time by 60%. Built a library of 20+ reusable React components now shared across 3 internal products. Improved mobile responsiveness platform-wide, boosting mobile traffic by 35%, while collaborating asynchronously with a team spread across 4 time zones.",
    tech: ["React", "JavaScript", "HTML5", "CSS3"],
    side: "left",
  },
  {
    year: "Sep 2023 – Mar 2024",
    title: "Frontend Engineer",
    company: "Hackpiy Blockchain Solution",
    type: "Hybrid",
    summary:
      "Maintained production Next.js applications serving 5,000+ monthly active users. Implemented WCAG 2.1 AA accessibility standards, raising audit scores from 72% to 94%. Introduced a code review process that reduced production bugs by 40% and refactored the legacy codebase to TypeScript for improved type safety.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    side: "right",
  },
  {
    year: "Aug 2022 – Nov 2022",
    title: "Frontend Developer (Intern)",
    company: "Uppist Software Engineering",
    type: "On-site",
    summary:
      "Delivered 4 client projects using React.js under senior engineer mentorship. Improved rendering performance with React.memo and useCallback, and contributed 50+ commits to the team codebase through regular code reviews.",
    tech: ["React", "JavaScript", "HTML5", "CSS3"],
    side: "left",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Label */}
        <div className="flex justify-center mb-10">
          <span className="border border-gray-900 text-gray-900 text-xs font-bold px-8 py-2.5 tracking-[0.2em] uppercase">
            About Me
          </span>
        </div>

        {/* Professional Summary */}
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 mb-16">
          <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-3">
            Professional Summary
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Frontend Engineer with{" "}
            <span className="font-bold text-gray-900">3+ years</span> building
            production web applications using React, Next.js, and TypeScript.
            Proven track record shipping features to real users, optimizing
            performance, and maintaining scalable codebases in remote-first
            teams. Strong focus on{" "}
            <span className="font-bold text-gray-900">
              component architecture
            </span>
            ,{" "}
            <span className="font-bold text-gray-900">
              accessibility standards
            </span>
            , and{" "}
            <span className="font-bold text-gray-900">
              cross-browser compatibility
            </span>
            .
          </p>
        </div>

        {/* Stats */}
        <div className="flex  justify-center items-center md:gap-8 gap-12 mb-20">
          <div className="text-center">
            <span className="block md:text-4xl text-xl font-black text-orange-500">
              <CountUp value={3} suffix="+" />
            </span>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-1 block">
              Years
            </span>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-100" />
          <div className="text-center">
            <span className="block md:text-4xl font-black text-orange-500">
              <CountUp value={4} />
            </span>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-1 block">
              Companies
            </span>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-100" />
          <div className="text-center">
            <span className="block md:text-4xl font-black text-orange-500">
              <CountUp value={5} suffix="K+" />
            </span>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-1 block">
              Users Served
            </span>
          </div>
        </div>

        {/* Section Label — Experience */}
        <div className="flex justify-center mb-14">
          <span className="border border-gray-900 text-gray-900 text-xs font-bold px-8 py-2.5 tracking-[0.2em] uppercase">
            Professional Experience
          </span>
        </div>

        {/* Timeline Component */}
        <Timeline experiences={experiences} />

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 relative max-w-2xl mx-auto"
        >
          <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-gray-900 to-black rounded-3xl -rotate-1 opacity-10" />
          <div className="relative bg-gray-900 text-white rounded-3xl p-8 md:p-10 overflow-hidden shadow-xl border border-white/5">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <span className="text-orange-500 mb-4 opacity-50">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 10L7.5 20H15V30H5V20L10 10H12.5ZM27.5 10L22.5 20H30V30H20V20L25 10H27.5Z"
                    fill="currentColor"
                  />
                </svg>
              </span>

              <blockquote className="text-sm md:text-base font-medium leading-relaxed text-gray-100 mb-6 italic max-w-lg">
                "My mission is to deliver technical excellence through{" "}
                <span className="text-orange-400">clean, scalable code</span>{" "}
                while maintaining a relentless focus on the{" "}
                <span className="text-orange-400">user experience</span>. I
                bridge the gap between complex logic and intuitive design to
                build products that truly matter."
              </blockquote>

              <div className="flex flex-col items-center">
                <div className="h-px w-8 bg-orange-500/30 mb-3" />
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500">
                  Akpan Joseph
                </p>
                <p className="text-[9px] text-gray-500 mt-1 uppercase tracking-widest font-semibold">
                  Frontend Engineer
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
