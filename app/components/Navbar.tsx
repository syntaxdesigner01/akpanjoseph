export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
            AK
          </span>
        </div>

        {/* Name */}
        <span className="text-sm font-semibold tracking-widest uppercase text-gray-800">
          Akpan Joseph
        </span>

        {/* Hire Me Button */}
        <a
          href="#contact"
          className="bg-black text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200 tracking-wide"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
