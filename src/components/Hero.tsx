import type { CSSProperties } from 'react'
import { useContent } from '../lib/content-context'
import { urlFor } from '../lib/sanity'

const fadeIn = (delay: number): CSSProperties => ({
  opacity: 0,
  animation: 'fadeInUp 0.6s ease forwards',
  animationDelay: `${delay}s`,
})

export function Hero() {
  const CONTENT = useContent()
  return (
    <section id="hero" className="bg-[#2C2218] pt-36 pb-28 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_200px] gap-12 items-start">
        {/* Tekst */}
        <div>
          <span
            className="text-xs uppercase tracking-widest text-stone-500"
            style={fadeIn(0.1)}
          >
            {CONTENT.business}
          </span>

          <h1
            className="mt-4 text-5xl md:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", ...fadeIn(0.2) }}
          >
            {CONTENT.name}
          </h1>

          <p className="mt-4 text-base font-semibold" style={{ color: '#E8530A', ...fadeIn(0.3) }}>
            {CONTENT.role}
          </p>

          <p className="mt-6 text-stone-400 leading-relaxed" style={fadeIn(0.4)}>
            {CONTENT.bio[0]}
          </p>

          <a
            href="#contact"
            className="mt-10 inline-block text-white rounded-full px-8 py-4 font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#E8530A', ...fadeIn(0.5) }}
          >
            Neem contact op
          </a>

          {/* Vertrouwensstrip */}
          <div
            className="mt-8 pt-8 border-t border-stone-800 flex flex-wrap gap-x-6 gap-y-2"
            style={fadeIn(0.6)}
          >
            {CONTENT.credentials.map((cred, i) => (
              <span key={i} className="text-xs text-stone-500 flex items-center gap-1.5">
                <span style={{ color: '#E8530A' }}>✓</span>
                {cred}
              </span>
            ))}
          </div>
        </div>

        {/* Foto */}
        <div
          className="hidden md:block aspect-square w-full rounded-2xl overflow-hidden"
          style={fadeIn(0.3)}
        >
          {(CONTENT as any).photo ? (
            <img
              src={urlFor((CONTENT as any).photo).width(400).height(400).fit('crop').url()}
              alt={`Foto van ${CONTENT.name}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-stone-800 flex flex-col items-center justify-center gap-3">
              <svg
                width="40"
                height="40"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ animation: 'slowSpin 20s linear infinite' }}
              >
                <path
                  d="M50 10 C72 10, 90 28, 90 50 C90 72, 72 90, 50 90 C28 90, 10 72, 10 50 C10 36, 20 24, 34 18"
                  stroke="#E8530A" strokeWidth="12" strokeLinecap="round" fill="none" opacity="0.4"
                />
                <path
                  d="M50 28 C63 28, 72 37, 72 50 C72 63, 63 72, 50 72 C37 72, 28 63, 28 50 C28 43, 32 37, 38 33"
                  stroke="#E8530A" strokeWidth="9" strokeLinecap="round" fill="none" opacity="0.4"
                />
              </svg>
              <span className="text-stone-600 text-xs">foto Jeroen</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
