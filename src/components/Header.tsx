export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#E8530A]">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo: wordmark + spiraal */}
        <a href="#hero" className="flex items-center gap-2 no-underline">
          <img src="/dijkstra-logo-mark.svg" className="h-9 w-auto" alt="" />
          <div className="leading-tight">
            <div
              className="font-bold text-stone-900 lowercase tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: '1rem' }}
            >
              dijkstra
            </div>
            <div className="text-stone-900/60 text-xs tracking-wide">zorg &amp; begeleiding</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#over" className="text-stone-900/75 hover:text-stone-900 transition-colors">Over</a>
          <a href="#diensten" className="text-stone-900/75 hover:text-stone-900 transition-colors">Diensten</a>
          <a href="#werkgebied" className="text-stone-900/75 hover:text-stone-900 transition-colors">Werkgebied</a>
          <a href="#info" className="text-stone-900/75 hover:text-stone-900 transition-colors">Info</a>
          <a
            href="#contact"
            className="bg-stone-900 text-white rounded-full px-5 py-2.5 text-sm font-medium hover:bg-stone-800 transition-colors"
          >
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="md:hidden bg-stone-900 text-white rounded-full px-5 py-2.5 text-sm font-medium"
        >
          Contact
        </a>
      </div>
    </header>
  )
}
