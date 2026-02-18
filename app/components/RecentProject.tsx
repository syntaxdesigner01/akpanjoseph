const tags = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "REST API",
];

export default function RecentProject() {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
            Featured
          </p>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">
            Recent Project
          </h2>
        </div>

        {/* Project Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
          {/* Image Side */}
          <div className="relative bg-gray-900 overflow-hidden min-h-[280px]">
            <img
              src="https://picsum.photos/seed/dashboard/800/500"
              alt="Project Preview"
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-r from-purple-900/40 to-transparent" />
          </div>

          {/* Info Side */}
          <div className="bg-white p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                  Web App
                </p>
                <h3 className="text-2xl font-black text-gray-900">
                  SaaS Dashboard
                </h3>
              </div>

              <p className="text-sm text-gray-500 leading-relaxed">
                A comprehensive analytics dashboard for a SaaS platform.
                Features real-time data visualization, user management, billing
                integration, and a fully responsive design system built from
                scratch.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 pt-6">
              <a
                href="#"
                className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-orange-600 transition-colors"
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
