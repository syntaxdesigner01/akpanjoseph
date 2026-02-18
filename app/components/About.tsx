export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="flex justify-center mb-14">
          <span className="border border-gray-900 text-gray-900 text-xs font-bold px-8 py-2.5 tracking-[0.2em] uppercase">
            About Me
          </span>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          <div className="space-y-2">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-orange-500">10+</span>
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Years
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              I've been crafting digital experiences, building web applications
              and helping businesses grow through technology and design.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-orange-500">14</span>
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Projects
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Completed across various industries — from startups to enterprise,
              delivering clean, performant, and accessible interfaces.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 mb-10" />

        {/* Contact Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-gray-400 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>+234 801 234 5678</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-gray-400 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Lagos, Nigeria</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-gray-400 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            <span>jacobjones.dev</span>
          </div>
        </div>

        {/* Quote Block */}
        <div className="bg-gray-900 text-white rounded-xl px-8 py-8 relative overflow-hidden">
          <div className="absolute top-4 left-6 text-5xl text-gray-600 font-serif leading-none">
            "
          </div>
          <p className="text-sm leading-relaxed text-gray-300 pl-6 relative z-10 max-w-2xl">
            I believe great software is built at the intersection of clean code
            and thoughtful design. Every pixel matters, every interaction counts
            — and I'm here to make sure yours are exceptional.
          </p>
        </div>
      </div>
    </section>
  );
}
