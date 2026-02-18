"use client";

interface ProjectDotsProps {
  count: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
}

export default function ProjectDots({
  count,
  currentIndex,
  onDotClick,
}: ProjectDotsProps) {
  return (
    <div className="flex justify-center gap-2 mt-8">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            i === currentIndex ? "w-8 bg-orange-500" : "w-3 bg-gray-200"
          }`}
          aria-label={`Go to project ${i + 1}`}
        />
      ))}
    </div>
  );
}
