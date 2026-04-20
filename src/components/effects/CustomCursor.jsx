import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Check if device is touch-enabled
    const checkTouchDevice = () => {
      const isMobile = window.matchMedia('(hover: none) and (pointer: coarse)').matches
      setIsTouchDevice(isMobile)
    }

    checkTouchDevice()

    // Return early if it's a touch device
    if (isTouchDevice) return

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => {
      setIsHovering(true)
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    const handleMouseDown = () => {
      setIsClicking(true)
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    // Add hover detection for interactive elements
    const handleHoverElements = () => {
      const interactiveElements = document.querySelectorAll(
        'button, a, [role="button"], input, textarea, select'
      )

      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter)
        el.addEventListener('mouseleave', handleMouseLeave)
      })

      return () => {
        interactiveElements.forEach((el) => {
          el.removeEventListener('mouseenter', handleMouseEnter)
          el.removeEventListener('mouseleave', handleMouseLeave)
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    // Initial hover detection
    handleHoverElements()

    // Re-check hover elements periodically for dynamically added elements
    const interval = setInterval(handleHoverElements, 1000)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      clearInterval(interval)
    }
  }, [isTouchDevice])

  // Don't render on touch devices
  if (isTouchDevice) return null

  return (
    <>
      {/* Outer glow circle */}
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed z-[9999]"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        {/* Outer ring */}
        <motion.div
          className="absolute w-8 h-8 border-2 border-primary rounded-full"
          style={{
            left: '-16px',
            top: '-16px',
          }}
          animate={{
            scale: isHovering ? 1.5 : 1,
            opacity: isHovering ? 0.8 : 0.6,
          }}
          transition={{ duration: 0.2 }}
        />

        {/* Glow effect */}
        <motion.div
          className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-primary to-warm blur-lg"
          style={{
            left: '-16px',
            top: '-16px',
          }}
          animate={{
            scale: isHovering ? 1.8 : 1.2,
            opacity: isHovering ? 0.4 : 0.2,
          }}
          transition={{ duration: 0.2 }}
        />

        {/* Center dot */}
        <motion.div
          className="absolute w-2 h-2 bg-primary rounded-full"
          style={{
            left: '-4px',
            top: '-4px',
          }}
          animate={{
            scale: isClicking ? 0.7 : 1,
          }}
          transition={{ duration: 0.1 }}
        />

        {/* Click pulse */}
        {isClicking && (
          <motion.div
            className="absolute w-8 h-8 border-2 border-primary rounded-full"
            style={{
              left: '-16px',
              top: '-16px',
            }}
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        )}
      </motion.div>

      {/* Hide default cursor only on desktop */}
      {!isTouchDevice && (
        <style>{`
          * {
            cursor: none !important;
          }
          input, textarea, select {
            cursor: text !important;
          }
        `}</style>
      )}
    </>
  )
}
