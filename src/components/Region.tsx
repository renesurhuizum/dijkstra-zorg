import { useContent } from '../lib/content-context'

const experienceOrgs = [
  'FPC Dr. S. van Mesdag',
  'Hoeve Boschoord',
  'Trajectum LVB',
  'Traumacentrum Friesland',
]

export function Region() {
  const CONTENT = useContent()
  const { regionDetails } = CONTENT

  return (
    <section id="werkgebied" className="bg-stone-50 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p
          className="text-xs uppercase tracking-widest font-semibold"
          style={{ color: '#E8530A' }}
        >
          Werkgebied
        </p>
        <h2
          className="mt-4 text-3xl md:text-4xl font-bold text-stone-900"
          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
        >
          Werkgebied &amp; Tarieven
        </h2>
        <p className="mt-6 text-stone-600 leading-relaxed">
          Ik ben actief in Friesland en Groningen en omstreken en beschikbaar
          voor opdrachten bij zorginstellingen en particulieren (PGB).
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {regionDetails.areas.map((area) => (
            <span
              key={area}
              className="inline-block border border-stone-300 text-stone-700 px-4 py-2 rounded-full"
            >
              {area}
            </span>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3
              className="text-lg font-semibold text-stone-900 mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
            >
              Beschikbaarheid
            </h3>
            <p className="text-stone-600 leading-relaxed">
              Ik werk voor zorginstellingen in de regio {CONTENT.region} en ben
              daarnaast beschikbaar voor particuliere begeleiding via PGB.
              Neem contact op om de mogelijkheden te bespreken.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl p-8">
            <h3
              className="text-lg font-semibold text-stone-900 mb-3"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
            >
              Tarieven
            </h3>
            <p className="text-stone-900 font-medium mb-3">
              Uurtarief ZZP op aanvraag
            </p>
            <p className="text-stone-500 leading-relaxed">
              Neem contact op voor een offerte op maat.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-stone-400 mb-5">
            Ervaring bij o.a.
          </p>
          <div className="flex flex-wrap gap-2">
            {experienceOrgs.map((org) => (
              <span
                key={org}
                className="inline-block text-sm px-4 py-2 rounded-full"
                style={{ backgroundColor: '#FEF0E7', color: '#8B2500' }}
              >
                {org}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
