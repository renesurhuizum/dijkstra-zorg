import { useState } from 'react'
import { useContent } from '../lib/content-context'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined

export function Contact() {
  const CONTENT = useContent()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [org, setOrg] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!FORMSPREE_ID) {
      // Fallback: open mail client als Formspree niet geconfigureerd is
      const subject = encodeURIComponent(`Contactaanvraag — ${name}`)
      const body = encodeURIComponent(
        `Naam: ${name}\nE-mail: ${email}${org ? `\nOrganisatie: ${org}` : ''}\n\n${message}`
      )
      window.location.href = `mailto:${CONTENT.email}?subject=${subject}&body=${body}`
      return
    }

    setStatus('submitting')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, org, message }),
      })
      if (res.ok) {
        setStatus('success')
        setName(''); setEmail(''); setOrg(''); setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-3.5 text-white text-sm placeholder:text-stone-500 focus:outline-none focus:border-[#E8530A] transition-colors'

  return (
    <section id="contact" className="bg-[#1C1917] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#E8530A]">
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
          {/* Contactgegevens */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-600 mb-2">Telefoon</p>
              <a href="tel:0630320582" className="text-base font-semibold text-stone-200 hover:text-white transition-colors">
                {CONTENT.phone}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-600 mb-2">E-mail</p>
              <a href={`mailto:${CONTENT.email}`} className="text-base font-semibold text-stone-200 hover:text-white transition-colors">
                {CONTENT.email}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-600 mb-2">Reactietijd</p>
              <p className="text-base font-semibold text-stone-200">Doorgaans binnen een werkdag</p>
            </div>
          </div>

          {/* Formulier */}
          {status === 'success' ? (
            <div className="flex flex-col items-start justify-center gap-4 py-8">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">Bericht verzonden!</h3>
              <p className="text-stone-400 text-sm">Bedankt voor uw bericht. Ik neem zo snel mogelijk contact met u op.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-2 text-sm text-[#E8530A] hover:underline"
              >
                Nieuw bericht sturen
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Naam *"
                className={inputClass}
                disabled={status === 'submitting'}
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail *"
                className={inputClass}
                disabled={status === 'submitting'}
              />
              <input
                type="text"
                value={org}
                onChange={(e) => setOrg(e.target.value)}
                placeholder="Organisatie (optioneel)"
                className={inputClass}
                disabled={status === 'submitting'}
              />
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                placeholder="Uw bericht *"
                className={`${inputClass} resize-none`}
                disabled={status === 'submitting'}
              />
              {status === 'error' && (
                <p className="text-red-400 text-sm">
                  Er ging iets mis. Probeer het opnieuw of stuur een e-mail naar{' '}
                  <a href={`mailto:${CONTENT.email}`} className="underline">{CONTENT.email}</a>.
                </p>
              )}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 rounded-full font-semibold text-white bg-[#E8530A] hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Versturen…' : 'Verstuur bericht'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
