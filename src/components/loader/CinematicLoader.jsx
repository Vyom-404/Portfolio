import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import BackgroundOrbs from '../effects/BackgroundOrbs'
import Particles from '../effects/Particles'

export default function CinematicLoader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const rootRef = useRef(null)

  useEffect(() => {
    const loader = rootRef.current
    let value = 0

    const progressTimer = window.setInterval(() => {
      value += Math.floor(Math.random() * 9) + 4
      if (value >= 100) {
        value = 100
        window.clearInterval(progressTimer)
      }
      setProgress(value)
    }, 90)

    const finishTimer = window.setTimeout(() => {
      const tl = gsap.timeline({
        onComplete: onComplete,
      })
      tl.to(loader, {
        yPercent: -100,
        opacity: 0,
        duration: 1.15,
        ease: 'power4.inOut',
      })
    }, 2300)

    return () => {
      clearInterval(progressTimer)
      clearTimeout(finishTimer)
    }
  }, [onComplete])

  return (
    <div ref={rootRef} className="fixed inset-0 z-[60] overflow-hidden bg-hero-gradient noise-overlay">
      <BackgroundOrbs />
      <Particles />

      <div className="relative flex h-full flex-col items-center justify-center px-4 sm:px-6 text-center">
        <p className="mb-3 sm:mb-4 text-xs uppercase tracking-[0.4em] sm:tracking-[0.5em] text-primary text-center">Loading Experience</p>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text">Vyom Gupta</h1>
        <p className="mt-3 sm:mt-5 max-w-xl text-xs sm:text-sm leading-6 sm:leading-7 text-muted md:text-base">
          Building with code, curiosity, and ambition.
        </p>

        <div className="mt-10 sm:mt-14 w-full max-w-md px-4">
          <div className="mb-2 sm:mb-3 flex items-center justify-between text-xs uppercase tracking-[0.32em] sm:tracking-[0.35em] text-muted">
            <span className="text-xs sm:text-sm">Story Engine</span>
            <span className="text-xs sm:text-sm">{progress}%</span>
          </div>
          <div className="h-1.5 sm:h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="shimmer-bar h-full rounded-full animate-shimmer"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
