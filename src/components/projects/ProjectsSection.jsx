import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionWrapper from '../layout/SectionWrapper'
import ProjectCard from './ProjectCard'
import { projects } from '../../data/projects'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectsSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('[data-project-card]')
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0.25,
            y: 90,
            scale: 0.92,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 78%',
              end: 'top 45%',
              scrub: 0.8,
            },
          },
        )

        if (index !== cards.length - 1) {
          gsap.to(card, {
            yPercent: -8,
            scrollTrigger: {
              trigger: card,
              start: 'bottom 55%',
              end: 'bottom top',
              scrub: 1,
            },
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <SectionWrapper
      id="projects"
      eyebrow="Featured Builds"
      title="Projects arrive like chapters — one moment, one problem, one solution at a time."
      subtitle="Instead of dumping cards on a page, the work appears as a guided reveal — as if the portfolio itself is presenting the ideas with me."
      className="relative"
    >
      <div ref={sectionRef} className="space-y-6 sm:space-y-8 md:space-y-10">
        {projects.map((project, index) => (
          <div key={project.id} data-reveal>
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
