export default function BackgroundOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[8%] top-[8%] h-64 w-64 rounded-full bg-primary/20 blur-3xl animate-drift" />
      <div className="absolute right-[10%] top-[12%] h-80 w-80 rounded-full bg-secondary/15 blur-3xl animate-float" />
      <div className="absolute bottom-[8%] left-[30%] h-72 w-72 rounded-full bg-warm/10 blur-3xl animate-drift" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(7,10,24,0.25)_100%)]" />
    </div>
  )
}
