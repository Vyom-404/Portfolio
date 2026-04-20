import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollStory(scopeRef) {
  useEffect(() => {
    if (!scopeRef.current) return

    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 70, filter: 'blur(12px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1,
            delay: index * 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 82%',
            },
          },
        )
      })

      gsap.to('[data-float-card]', {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: '[data-float-card]',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, scopeRef)

    return () => ctx.revert()
  }, [scopeRef])
}
