import { useState } from 'react'

const navLinks = [
  { href: '#over', label: 'Over' },
  { href: '#diensten', label: 'Diensten' },
  { href: '#werkgebied', label: 'Werkgebied' },
  { href: '#info', label: 'Info' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#E8530A]">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 no-underline" onClick={close}>
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

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="text-stone-900/75 hover:text-stone-900 transition-colors">
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-stone-900 text-white rounded-full px-5 py-2.5 text-sm font-medium hover:bg-stone-800 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Mobile: hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-2 -mr-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Menu sluiten' : 'Menu openen'}
          aria-expanded={menuOpen}
        >
          <span className={`block h-0.5 w-6 bg-stone-900 transition-transform duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-stone-900 transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-stone-900 transition-transform duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#E8530A] border-t border-stone-900/10 px-6 pb-4">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={close}
              className="block py-3 text-stone-900/80 hover:text-stone-900 font-medium border-b border-stone-900/10 transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={close}
            className="mt-4 block text-center bg-stone-900 text-white rounded-full px-5 py-3 text-sm font-medium"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  )
}
