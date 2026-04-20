import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import Home from './pages/Home'
import CinematicLoader from './components/loader/CinematicLoader'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      smoothTouch: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    gsap.ticker.lagSmoothing(0)

    return () => lenis.destroy()
  }, [])

  return (
    <>
      {loading && <CinematicLoader onComplete={() => setLoading(false)} />}
      <Home />
    </>
  )
}
