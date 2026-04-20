import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import BackgroundOrbs from '../effects/BackgroundOrbs'
import Particles from '../effects/Particles'
import Loader3D from './Loader3D'

export default function CinematicLoader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    const loader = rootRef.current
    let value = 0

    const progressTimer = window.setInterval(() => {
      value += Math.floor(Math.random() * 11) + 3
      if (value >= 100) {
        value = 100
        window.clearInterval(progressTimer)
        setIsComplete(true)
      }
      setProgress(value)
    }, 80)

    const finishTimer = window.setTimeout(() => {
      const tl = gsap.timeline({
        onComplete: onComplete,
      })
      tl.to(loader, {
        yPercent: -100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.inOut',
      })
    }, 2500)

    return () => {
      clearInterval(progressTimer)
      clearTimeout(finishTimer)
    }
  }, [onComplete])

  return (
    <div ref={rootRef} className="fixed inset-0 z-[60] overflow-hidden bg-hero-gradient">
      <BackgroundOrbs />
      <Particles />

      {/* 3D Canvas Background */}
      <div className="absolute inset-0 opacity-40">
        <Loader3D progress={progress} />
      </div>

      {/* Content Overlay */}
      <div className="relative flex h-full flex-col items-center justify-center px-4 sm:px-6 text-center">
        {/* Top Text */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8 text-xs uppercase tracking-[0.4em] sm:tracking-[0.5em] text-primary text-center"
        >
          Loading Experience
        </motion.p>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 sm:mb-6"
        >
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-text">
            Vyom Gupta
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-lg text-xs sm:text-sm leading-6 sm:leading-7 text-muted md:text-base"
        >
          Building with code, curiosity, and ambition.
        </motion.p>

        {/* Progress Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 sm:mt-16 w-full max-w-md px-4"
        >
          {/* Status Text */}
          <div className="mb-4 sm:mb-5 flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.32em] sm:tracking-[0.35em] text-muted text-xs sm:text-sm">
              Story Engine
            </span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-primary font-semibold text-xs sm:text-sm"
            >
              {progress}%
            </motion.span>
          </div>

          {/* Progress Bar */}
          <div className="h-2 sm:h-2.5 overflow-hidden rounded-full bg-white/10 backdrop-blur-sm border border-white/5">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary via-warm to-primary shimmer-bar"
              style={{ width: `${progress}%` }}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
            />
          </div>

          {/* Completion Message */}
          {isComplete && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-xs uppercase tracking-[0.2em] text-primary/70"
            >
              Ready to explore
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  )
}

