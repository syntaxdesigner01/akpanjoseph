import Image from "next/image";

const floatingIcons = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "JavaScript",
    style: {
      top: "12%",
      left: "6%",
      width: 18,
      animationDuration: "4s",
      animationDelay: "0s",
    },
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    alt: "TypeScript",
    style: {
      top: "55%",
      left: "2%",
      width: 15,
      animationDuration: "5s",
      animationDelay: "1.2s",
    },
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "React",
    style: {
      top: "20%",
      left: "42%",
      width: 16,
      animationDuration: "6s",
      animationDelay: "0.5s",
    },
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    alt: "Next.js",
    style: {
      top: "72%",
      left: "38%",
      width: 14,
      animationDuration: "4.5s",
      animationDelay: "2s",
    },
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    alt: "Tailwind CSS",
    style: {
      top: "8%",
      left: "28%",
      width: 16,
      animationDuration: "5.5s",
      animationDelay: "0.8s",
    },
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "JavaScript",
    style: {
      top: "80%",
      left: "14%",
      width: 14,
      animationDuration: "6.5s",
      animationDelay: "1.8s",
    },
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "React",
    style: {
      top: "38%",
      left: "88%",
      width: 15,
      animationDuration: "5s",
      animationDelay: "3s",
    },
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    alt: "TypeScript",
    style: {
      top: "5%",
      left: "72%",
      width: 15,
      animationDuration: "4.8s",
      animationDelay: "1.5s",
    },
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 pb-10 px-6 flex items-center bg-white overflow-hidden">
      {/* ── Floating tech icons ── */}
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33%       { transform: translateY(-10px) rotate(3deg); }
          66%       { transform: translateY(6px) rotate(-2deg); }
        }
        .float-icon {
          position: absolute;
          animation-name: floatY;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          opacity: 0.75;
          filter: drop-shadow(0 2px 6px rgba(0,0,0,0.12));
          z-index: 20;
          pointer-events: none;
          user-select: none;
        }
      `}</style>
      {floatingIcons.map((icon, i) => (
        <img
          key={i}
          src={icon.src}
          alt={icon.alt}
          className="float-icon"
          style={{
            ...icon.style,
            animationDuration: icon.style.animationDuration,
            animationDelay: icon.style.animationDelay,
          }}
        />
      ))}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* ── LEFT: Text ── */}
        <div className="space-y-7">
          {/* Headline */}
          <h1 className="leading-none tracking-tight text-gray-900">
            <span className="block text-5xl md:text-6xl lg:text-7xl font-light uppercase">
              My Name
            </span>
            <span className="block text-6xl md:text-7xl lg:text-8xl font-black uppercase">
              Is Akpan
            </span>
            <span className="block text-6xl md:text-7xl lg:text-8xl font-black uppercase">
              Joseph...
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-800">
            <span className="font-bold">Front-end developer</span> based in{" "}
            <span className="font-bold italic">Nigeria</span>
          </p>

          {/* CTA */}
          <div>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-gray-900 text-white text-sm font-semibold px-7 py-4 rounded-sm hover:bg-gray-700 transition-colors duration-200"
            >
              Let&apos;s talk with me
              <span className="inline-flex items-center justify-center w-6 h-6 bg-orange-500 rounded-sm text-white text-xs font-bold">
                ↗
              </span>
            </a>
          </div>

          {/* Contact row */}
          <div className="flex flex-wrap items-center gap-8 pt-2 font-bold">
            <a
              href="tel:+2348105586051"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {/* Phone icon */}
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              (+234) 810 558 6051
            </a>

            <a
              href="mailto:akpanjoseph2021@gmail.com"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {/* Email icon */}
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              akpanjoseph2021gmail.com
            </a>
          </div>
        </div>

        {/* ── RIGHT: Image + Shapes ── */}
        <div className="relative flex items-center justify-center min-h-[480px]">
          {/* ── Colorful blob backgrounds ── */}
          <div className="absolute w-72 h-72 bg-purple-400 rounded-full opacity-30 blur-3xl -top-8 -right-8 animate-pulse" />
          <div className="absolute w-56 h-56 bg-orange-400 rounded-full opacity-30 blur-3xl bottom-0 right-8 animate-pulse delay-700" />
          <div className="absolute w-40 h-40 bg-pink-400 rounded-full opacity-25 blur-2xl top-8 left-8 animate-pulse delay-1000" />

          {/* ── Large purple-to-pink circle ── */}
          <div
            className="absolute rounded-full"
            style={{
              width: 340,
              height: 340,
              background: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
              bottom: 20,
              left: "50%",
              transform: "translateX(-50%)",
              opacity: 0.92,
            }}
          />

          {/* ── Red/coral arc top-right ── */}
          <div
            className="absolute rounded-full"
            style={{
              width: 220,
              height: 220,
              background: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
              top: 10,
              right: 0,
              opacity: 0.88,
            }}
          />

          {/* ── Orange swoosh bottom-right ── */}
          <div
            className="absolute"
            style={{
              width: 130,
              height: 130,
              background: "linear-gradient(135deg, #fb923c 0%, #fbbf24 100%)",
              borderRadius: "50% 0 50% 50%",
              bottom: 30,
              right: 10,
              opacity: 0.85,
              transform: "rotate(30deg)",
            }}
          />

          {/* ── Diagonal purple band ── */}
          <div
            className="absolute"
            style={{
              width: 320,
              height: 90,
              background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
              borderRadius: 60,
              bottom: 120,
              left: "50%",
              transform: "translateX(-50%) rotate(-30deg)",
              opacity: 0.9,
            }}
          />

          {/* ── Sparkle icons ── */}
          <span className="absolute top-10 right-16 text-gray-400 text-xl select-none">
            ✦
          </span>
          <span className="absolute top-1/2 left-4 text-gray-300 text-sm select-none">
            ✦
          </span>

          {/* ── Dot grid ── */}
          <div className="absolute bottom-6 right-2 grid grid-cols-5 gap-1.5 opacity-40">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-gray-500 rounded-full" />
            ))}
          </div>

          {/* ── Profile photo (grayscale, sits on top of shapes) ── */}
          <div
            className="absolute z-10"
            style={{ top: "-15%", left: "-10%", right: "-10%", bottom: 0 }}
          >
            <Image
              src="/me2.png"
              alt="Akpan Joseph - Front-end Developer"
              fill
              unoptimized
              priority
              className="object-contain object-top grayscale"
            />
            {/* Bottom fade-out overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 z-20"
              style={{
                height: "35%",
                background:
                  "linear-gradient(to bottom, transparent 0%, white 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
