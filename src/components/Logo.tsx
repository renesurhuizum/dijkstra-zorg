interface LogoProps {
  size?: number
  className?: string
}

// "Doorbreken van patronen" — circle with a gap, symbolising a new opening
export function Logo({ size = 48, className = '' }: LogoProps) {
  const r = 16
  const cx = 20
  const cy = 20
  const gap = 55 // degrees of gap in the circle
  const start = 90 + gap / 2
  const end = 90 - gap / 2 + 360

  const toRad = (deg: number) => (deg * Math.PI) / 180
  const x1 = cx + r * Math.cos(toRad(start))
  const y1 = cy + r * Math.sin(toRad(start))
  const x2 = cx + r * Math.cos(toRad(end))
  const y2 = cy + r * Math.sin(toRad(end))

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d={`M ${x1} ${y1} A ${r} ${r} 0 1 1 ${x2} ${y2}`}
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
