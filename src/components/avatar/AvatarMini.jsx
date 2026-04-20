import { useEffect, useState } from 'react'

export default function AvatarMini() {
  const [blink, setBlink] = useState(false)

  useEffect(() => {
    const runBlink = () => {
      const delay = Math.random() * 2500 + 1800
      const timer = setTimeout(() => {
        setBlink(true)
        setTimeout(() => setBlink(false), 140)
        runBlink()
      }, delay)

      return timer
    }

    const timer = runBlink()

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#0f172a] shadow-lg ring-2 ring-white/10 transition duration-300 hover:-translate-y-0.5 hover:scale-110">
      <div className="absolute inset-0 bg-gradient-to-br from-[#7C8CFF]/20 via-[#A46DFF]/10 to-[#FFC38B]/20" />

      <div className="absolute bottom-0 h-5 w-7 rounded-t-[999px] bg-[#7C8CFF] transition-transform duration-300 group-hover:translate-y-[-1px]" />

      <div className="absolute top-[7px] h-4 w-4 rounded-full bg-[#FFD6A5]" />

      <div className="absolute top-[4px] h-2.5 w-5 rounded-full bg-[#111827]" />

      <div className="absolute top-[13px] flex items-center justify-center gap-1">
        <span
          className={`w-1 rounded-full bg-[#111827] transition-all duration-100 ${
            blink ? 'h-[1px]' : 'h-1'
          }`}
        />
        <span
          className={`w-1 rounded-full bg-[#111827] transition-all duration-100 ${
            blink ? 'h-[1px]' : 'h-1'
          }`}
        />
      </div>

      <div className="absolute top-[17px] h-[2px] w-2 rounded-full bg-[#111827]" />

      <div className="pointer-events-none absolute inset-0 rounded-full opacity-0 blur-md transition duration-300 group-hover:opacity-100 bg-[#7C8CFF]/30" />
    </div>
  )
}