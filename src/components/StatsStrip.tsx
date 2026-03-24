const stats = [
  { value: '13+', label: 'jaar ervaring' },
  { value: 'CGT', label: 'geregistreerd werker' },
  { value: 'GGZ · LVB', label: 'forensisch' },
  { value: 'Friesland', label: '& Groningen' },
]

export function StatsStrip() {
  return (
    <div className="bg-white border-b border-stone-100 py-6 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {stats.map((stat) => (
          <div key={stat.value} className="text-center">
            <div
              className="text-lg font-bold text-stone-900"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
            >
              {stat.value}
            </div>
            <div className="text-xs text-stone-500 mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
