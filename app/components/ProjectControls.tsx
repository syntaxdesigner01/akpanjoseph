"use client";

interface ProjectControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

export default function ProjectControls({
  onPrev,
  onNext,
}: ProjectControlsProps) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onPrev}
        className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-100 bg-white text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-sm"
        aria-label="Previous project"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={onNext}
        className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-100 bg-white text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-sm"
        aria-label="Next project"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
