export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-stone-200">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo: wordmark + spiraal */}
        <a href="#hero" className="flex items-center gap-2 no-underline">
          <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50 10 C72 10, 90 28, 90 50 C90 72, 72 90, 50 90 C28 90, 10 72, 10 50 C10 36, 20 24, 34 18"
              stroke="#E8530A" strokeWidth="12" strokeLinecap="round" fill="none"
            />
            <path
              d="M50 28 C63 28, 72 37, 72 50 C72 63, 63 72, 50 72 C37 72, 28 63, 28 50 C28 43, 32 37, 38 33"
              stroke="#E8530A" strokeWidth="9" strokeLinecap="round" fill="none"
            />
          </svg>
          <div className="leading-tight">
            <div
              className="font-bold text-stone-900 lowercase tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: '1rem' }}
            >
              dijkstra
            </div>
            <div className="text-stone-400 text-xs tracking-wide">zorg &amp; begeleiding</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#over" className="text-stone-600 hover:text-stone-900 transition-colors">Over</a>
          <a href="#diensten" className="text-stone-600 hover:text-stone-900 transition-colors">Diensten</a>
          <a href="#werkgebied" className="text-stone-600 hover:text-stone-900 transition-colors">Werkgebied</a>
          <a href="#info" className="text-stone-600 hover:text-stone-900 transition-colors">Info</a>
          <a
            href="#contact"
            className="text-white rounded-full px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#E8530A' }}
          >
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="md:hidden text-white rounded-full px-5 py-2.5 text-sm font-medium"
          style={{ backgroundColor: '#E8530A' }}
        >
          Contact
        </a>
      </div>
    </header>
  )
}
