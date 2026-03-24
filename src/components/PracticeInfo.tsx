import { useState } from 'react'

const items = [
  {
    title: 'Aanmelding',
    content:
      'Neem contact op via telefoon of e-mail. Na een kort kennismakingsgesprek bespreken we of samenwerking passend is.',
  },
  {
    title: 'Verhindering & no-show',
    content:
      'Bij verhindering graag 24 uur van tevoren afzeggen. Bij kortere annulering kan het gereserveerde uur in rekening worden gebracht.',
  },
  {
    title: 'Geheimhouding',
    content:
      'Ik hanteer beroepsgeheimhouding. Informatie wordt alleen met uw schriftelijke toestemming gedeeld met derden.',
  },
  {
    title: 'Registraties & KVK',
    content:
      'Dijkstra Zorg en Begeleiding is ingeschreven bij de Kamer van Koophandel. Registraties: Geregistreerd Cognitief Gedragstherapeutisch Werker \u00b7 Post-HBO Autisme \u00b7 SPH (Stenden).',
  },
]

export function PracticeInfo() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="praktijk" className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p
          className="text-xs uppercase tracking-widest font-semibold"
          style={{ color: '#E8530A' }}
        >
          Praktisch
        </p>
        <h2
          className="mt-4 text-3xl md:text-4xl font-bold text-stone-900"
          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
        >
          Praktijkinformatie
        </h2>
        <p className="mt-6 text-stone-600 leading-relaxed">
          Duidelijkheid vooraf geeft rust. Hieronder vindt u de praktische
          informatie over aanmelding, afspraken en vertrouwelijkheid.
        </p>

        <div className="mt-12 flex flex-col gap-5">
          {items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className="border border-stone-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-stone-50 transition-colors"
                >
                  <span
                    className="font-semibold text-stone-900"
                    style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
                  >
                    {item.title}
                  </span>
                  <span className="text-stone-400 text-xl leading-none">
                    {isOpen ? '\u2212' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-stone-600 leading-relaxed">
                    {item.content}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
