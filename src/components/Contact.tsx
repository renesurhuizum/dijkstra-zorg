import { useState } from 'react'
import { useContent } from '../lib/content-context'

export function Contact() {
  const CONTENT = useContent()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [org, setOrg] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contactaanvraag — ${name}`)
    const body = encodeURIComponent(
      `Naam: ${name}\nE-mail: ${email}${org ? `\nOrganisatie: ${org}` : ''}\n\n${message}`
    )
    window.location.href = `mailto:${CONTENT.email}?subject=${subject}&body=${body}`
  }

  const inputClass =
    'w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-3.5 text-white text-sm placeholder:text-stone-500 focus:outline-none focus:border-[#E8530A] transition-colors'

  return (
    <section id="contact" className="bg-[#1C1917] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: '#E8530A' }}
        >
          Bereikbaar
        </p>
        <h2
          className="mt-4 text-3xl md:text-4xl font-bold text-white"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Contact
        </h2>
        <p className="mt-6 text-stone-400 leading-relaxed mb-12">
          Heeft u een hulpvraag of wilt u weten of samenwerking mogelijk is?
          Neem gerust contact op. Ik reageer doorgaans binnen een werkdag.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Links: contactgegevens */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-600 mb-2">
                Telefoon
              </p>
              <a
                href="tel:0630320582"
                className="text-base font-semibold text-stone-200 hover:text-white transition-colors"
              >
                {CONTENT.phone}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-600 mb-2">
                E-mail
              </p>
              <a
                href={`mailto:${CONTENT.email}`}
                className="text-base font-semibold text-stone-200 hover:text-white transition-colors"
              >
                {CONTENT.email}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-600 mb-2">
                Reactietijd
              </p>
              <p className="text-base font-semibold text-stone-200">
                Doorgaans binnen een werkdag
              </p>
            </div>
          </div>

          {/* Rechts: formulier */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Naam *"
              className={inputClass}
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail *"
              className={inputClass}
            />
            <input
              type="text"
              value={org}
              onChange={(e) => setOrg(e.target.value)}
              placeholder="Organisatie (optioneel)"
              className={inputClass}
            />
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              placeholder="Uw bericht *"
              className={`${inputClass} resize-none`}
            />
            <button
              type="submit"
              className="w-full py-4 rounded-full font-semibold text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#E8530A' }}
            >
              Verstuur bericht
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
