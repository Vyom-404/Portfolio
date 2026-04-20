import { useEffect } from 'react'

export function useParallax(ref, strength = 18) {
  useEffect(() => {
    if (!ref.current) return

    const element = ref.current

    const handleMove = (event) => {
      const { innerWidth, innerHeight } = window
      const x = (event.clientX / innerWidth - 0.5) * strength
      const y = (event.clientY / innerHeight - 0.5) * strength
      element.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [ref, strength])
}
