import { useContent } from '../lib/content-context'

export function Services() {
  const CONTENT = useContent()
  return (
    <section id="diensten" className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: '#E8530A' }}>
          Wat ik aanbied
        </span>
        <h2
          className="mt-4 text-3xl md:text-4xl font-bold text-stone-900"
          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
        >
          Diensten
        </h2>
        <p className="mt-6 text-stone-600 leading-relaxed">
          Ik ben inzetbaar voor zorginstellingen die een ervaren ZZP'er zoeken, en voor particulieren met een PGB.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {CONTENT.services.map((service, i) => (
            <div
              key={i}
              className="bg-stone-50 rounded-2xl p-6 flex flex-col"
            >
              <span
                className="text-xs font-bold tracking-widest"
                style={{ color: '#E8530A' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <h3
                className="mt-3 text-lg font-bold text-stone-900"
                style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
              >
                {service.title}
              </h3>

              <p className="mt-3 text-stone-600 leading-relaxed text-sm flex-grow">
                {service.description}
              </p>

              <div className="mt-5 pt-5 border-t border-stone-200 space-y-2">
                <p className="text-xs text-stone-500 leading-relaxed">
                  <strong className="text-stone-700 font-semibold">Voor wie: </strong>
                  {service.forWho}
                </p>
                <p className="text-xs text-stone-500 leading-relaxed">
                  <strong className="text-stone-700 font-semibold">Werkwijze: </strong>
                  {service.approach}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
