import { Experience } from "./Timeline";

interface ExperienceCardProps {
  exp: Experience;
  align: "left" | "right";
}

export default function ExperienceCard({ exp, align }: ExperienceCardProps) {
  return (
    <div
      className={`bg-gray-50 border border-gray-100 rounded-xl p-5 w-full max-w-sm hover:shadow-lg transition-all duration-300 ${
        align === "right" ? "md:text-right" : "text-left"
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
          align === "right" ? "md:justify-end" : "justify-start"
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
