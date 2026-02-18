const experiences = [
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
    <section id="about" className="py-24 px-6 bg-white">
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
        <div className="flex justify-center gap-12 mb-20">
          <div className="text-center">
            <span className="block text-4xl font-black text-orange-500">
              3+
            </span>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-1 block">
              Years
            </span>
          </div>
          <div className="w-px bg-gray-100" />
          <div className="text-center">
            <span className="block text-4xl font-black text-orange-500">4</span>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-1 block">
              Companies
            </span>
          </div>
          <div className="w-px bg-gray-100" />
          <div className="text-center">
            <span className="block text-4xl font-black text-orange-500">
              5K+
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

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="relative grid grid-cols-2 gap-0 items-start"
              >
                {exp.side === "left" ? (
                  <>
                    {/* Left card */}
                    <div className="pr-10 flex justify-end">
                      <ExperienceCard exp={exp} align="right" />
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-5 w-3.5 h-3.5 rounded-full bg-orange-500 border-2 border-white shadow z-10" />

                    {/* Right empty */}
                    <div />
                  </>
                ) : (
                  <>
                    {/* Left empty */}
                    <div />

                    {/* Center dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-5 w-3.5 h-3.5 rounded-full bg-gray-900 border-2 border-white shadow z-10" />

                    {/* Right card */}
                    <div className="pl-10 flex justify-start">
                      <ExperienceCard exp={exp} align="left" />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-20 bg-gray-900 text-white rounded-xl px-8 py-8 relative overflow-hidden">
          <div className="absolute top-4 left-6 text-5xl text-gray-700 font-serif leading-none">
            "
          </div>
          <p className="text-sm leading-relaxed text-gray-300 pl-6 relative z-10 max-w-2xl">
            I believe great software is built at the intersection of clean code
            and thoughtful design. Every pixel matters, every interaction counts
            — and I&apos;m here to make sure yours are exceptional.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Sub-component: Experience Card ── */
type Exp = (typeof experiences)[number];

function ExperienceCard({ exp, align }: { exp: Exp; align: "left" | "right" }) {
  return (
    <div
      className={`bg-gray-50 border border-gray-100 rounded-xl p-5 w-full max-w-sm hover:shadow-md transition-shadow duration-200 ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      {/* Date */}
      <span className="text-xs font-bold text-orange-500 tracking-widest uppercase">
        {exp.year}
      </span>

      {/* Title */}
      <h3 className="text-sm font-black text-gray-900 mt-1">{exp.title}</h3>

      {/* Company + type */}
      <p className="text-xs text-gray-400 font-medium mb-3">
        {exp.company} · {exp.type}
      </p>

      {/* Summary paragraph */}
      <p className="text-xs text-gray-500 leading-relaxed mb-4">
        {exp.summary}
      </p>

      {/* Tech tags */}
      <div
        className={`flex flex-wrap gap-1.5 ${
          align === "right" ? "justify-end" : "justify-start"
        }`}
      >
        {exp.tech.map((t) => (
          <span
            key={t}
            className="text-[10px] font-semibold bg-white border border-gray-200 text-gray-600 px-2 py-0.5 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
