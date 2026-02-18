export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-6 px-6 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-gray-400">
          © {year} Akpan Joseph. All rights reserved.
        </p>
        <p className="text-xs text-gray-400">
          Designed &amp; Built by{" "}
          <span className="font-semibold text-gray-600">Akpan Joseph</span>
        </p>
      </div>
    </footer>
  );
}
