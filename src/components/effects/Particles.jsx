const dots = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${(i * 13) % 100}%`,
  top: `${(i * 19) % 100}%`,
  size: 2 + (i % 4),
  duration: 6 + (i % 5),
  delay: (i % 7) * 0.3,
}))

export default function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((dot) => (
        <span
          key={dot.id}
          className="absolute rounded-full bg-white/40"
          style={{
            left: dot.left,
            top: dot.top,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            animation: `float ${dot.duration}s ease-in-out ${dot.delay}s infinite`,
            opacity: 0.4,
          }}
        />
      ))}
    </div>
  )
}
