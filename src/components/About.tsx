import { useContent } from '../lib/content-context'

export function About() {
  const CONTENT = useContent()
  return (
    <section id="over" className="bg-stone-50 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: '#E8530A' }}>
          Over mij
        </span>
        <h2
          className="mt-4 text-3xl md:text-4xl font-bold text-stone-900"
          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
        >
          {CONTENT.name}
        </h2>

        {CONTENT.bio.slice(1).map((paragraph, i) => (
          <p key={i} className="mt-6 text-stone-600 leading-relaxed">
            {paragraph}
          </p>
        ))}

        {/* Kernwaarden */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONTENT.values.map((value, i) => (
            <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-stone-100">
              <div className="w-6 h-0.5 mb-4 rounded-full" style={{ backgroundColor: '#E8530A' }} />
              <h3 className="text-base font-bold text-stone-900">{value.title}</h3>
              <p className="mt-2 text-stone-600 leading-relaxed text-sm">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Credentials */}
        <div className="mt-16">
          <h3
            className="text-lg font-semibold text-stone-900 mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
          >
            Opleidingen & registraties
          </h3>
          <ul className="space-y-3">
            {CONTENT.credentials.map((cred, i) => (
              <li key={i} className="flex items-start gap-3 text-stone-600">
                <span className="font-bold mt-0.5 flex-shrink-0" style={{ color: '#E8530A' }}>&#10003;</span>
                <span>{cred}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Werkervaring */}
        <div className="mt-16">
          <h3
            className="text-lg font-semibold text-stone-900 mb-6"
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
          >
            Werkervaring
          </h3>
          <div className="space-y-0 border-l-2 border-stone-200 pl-6">
            {CONTENT.experience.map((exp, i) => (
              <div key={i} className="pb-6 last:pb-0">
                <p className="font-bold text-stone-900">{exp.org}</p>
                <p className="text-stone-500 mt-1">{exp.role} &middot; {exp.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
