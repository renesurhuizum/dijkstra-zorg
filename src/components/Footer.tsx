import { useContent } from '../lib/content-context'

export function Footer() {
  const CONTENT = useContent()
  return (
    <footer className="bg-white border-t border-stone-200 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <p
            className="font-bold text-stone-900"
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
          >
            {CONTENT.business}
          </p>
          <p className="text-stone-500 text-sm">Sociotherapeut &middot; ZZP</p>
        </div>

        <div className="flex items-center gap-6 text-sm text-stone-500">
          <a href="tel:0630320582" className="hover:underline">
            {CONTENT.phone}
          </a>
          <a href={`mailto:${CONTENT.email}`} className="hover:underline">
            {CONTENT.email}
          </a>
        </div>

        <p className="text-stone-400 text-sm text-center md:text-right">
          &copy; 2026 {CONTENT.business} &middot; KVK geregistreerd
        </p>
      </div>
    </footer>
  )
}
