"use client";

import { AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import ProjectCard, { Project } from "./ProjectCard";
import ProjectControls from "./ProjectControls";
import ProjectDots from "./ProjectDots";

const projects: Project[] = [
  {
    id: 1,
    category: "Chrome Extension",
    title: "PIPI Tabs",
    description:
      "A productivity extension for advanced tab and session management featuring an intelligent reminder system. It includes tab grouping, session saving, and a custom alarm system with missed-alarm detection, snoozing, and a dedicated notification window.",
    image: "/pipi.png",
    tags: ["JavaScript", "Chrome API", "HTML5", "CSS3", "Productivity"],
    live: "https://syntaxdesigner01.github.io/pipi-tabs/",
    github: "https://github.com/syntaxdesigner01/pipi-tabs",
  },
  {
    id: 2,
    category: "Mentorship Platform",
    title: "Codetivite",
    description:
      "A developer mentorship platform connecting aspiring engineers with industry professionals. Serving over 500 beta users, the platform features a responsive frontend, global state management, and optimized performance with 95+ Lighthouse scores.",
    image: "/codetivite.png",
    tags: [
      "Next.js 14",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
    ],
    live: "https://www.codetivite.org/",
    github: "#",
  },
  {
    id: 3,
    category: "Corporate Platform",
    title: "Vigortech",
    description:
      "A corporate website for a technology consulting firm showcasing services and managing contact inquiries. It utilizes modular components, full mobile responsiveness, and optimized lazy loading for high-performance delivery.",
    image: "/vigortech.png",
    tags: ["Nextjs", "Typescript", "Tailwind CSS", "Mobile Responsive"],
    live: "https://vigortech.vercel.app/",
    github: "#",
  },
];

export default function RecentProject() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  const nextProject = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const prevProject = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  const goToProject = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  useEffect(() => {
    const timer = setInterval(nextProject, 30000);
    return () => clearInterval(timer);
  }, [nextProject]);

  return (
    <section id="projects" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">
              Recent Projects<span className="text-orange-500">.</span>
            </h2>
          </div>

          {/* Controls Sub-component */}
          <ProjectControls onPrev={prevProject} onNext={nextProject} />
        </div>

        {/* Project Slider Container */}
        <div className="relative min-h-[500px] lg:min-h-[420px]">
          <AnimatePresence mode="wait" custom={direction}>
            <ProjectCard
              key={index}
              project={projects[index]}
              direction={direction}
            />
          </AnimatePresence>
        </div>

        {/* Dots Sub-component */}
        <ProjectDots
          count={projects.length}
          currentIndex={index}
          onDotClick={goToProject}
        />
      </div>
    </section>
  );
}
