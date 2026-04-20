import { useRef } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/layout/Navbar'
import AvatarScene from '../components/avatar/AvatarScene'
import SpeechBubble from '../components/avatar/SpeechBubble'
import BackgroundOrbs from '../components/effects/BackgroundOrbs'
import Particles from '../components/effects/Particles'
import IntroSection from '../components/intro/IntroSection'
import ProjectsSection from '../components/projects/ProjectsSection'
import TechStackSection from '../components/tech/TechStackSection'
import ContactSection from '../components/contact/ContactSection'
import { useScrollStory } from '../hooks/useScrollStory'

export default function Home() {
  const pageRef = useRef(null)
  useScrollStory(pageRef)

  return (
    <div ref={pageRef} className="relative min-h-screen overflow-x-hidden bg-hero-gradient text-text story-grid">
      <Navbar />

      <main>
        <section id="hero" className="relative min-h-screen overflow-hidden px-4 pb-8 sm:pb-12 md:pb-16 pt-20 sm:pt-24 md:pt-28 lg:pt-32 md:px-8">
          <BackgroundOrbs />
          <Particles />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,16,32,0)_0%,rgba(11,16,32,0.18)_48%,rgba(11,16,32,0.86)_100%)]" />

          <div className="relative mx-auto grid min-h-[84vh] max-w-7xl items-center gap-6 sm:gap-8 md:gap-10 md:grid-cols-[1fr_1.1fr]">
            <div className="z-10 max-w-xl">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-5 text-xs uppercase tracking-[0.45em] text-primary"
              >
                Cinematic Developer Portfolio
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.45 }}
                className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight"
              >
                A student creator’s universe built with motion, code, and intent.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.65 }}
                className="mt-6 max-w-lg text-sm sm:text-base leading-7 sm:leading-8 text-muted md:text-lg"
              >
                This portfolio is designed like a story instead of a template — playful, cinematic, youthful, and modern.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.85 }}
                className="mt-8 sm:mt-10 flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4"
              >
                <a href="#projects" className="rounded-full bg-text px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-bg whitespace-nowrap">
                  View Projects
                </a>
                <a href="#contact" className="rounded-full border border-white/10 bg-white/10 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-text whitespace-nowrap">
                  Connect With Me
                </a>
              </motion.div>
            </div>

            <div className="relative h-[400px] sm:h-[520px] md:h-[720px]">
              <div className="absolute inset-0 rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-sm" />
              <AvatarScene gesture="wave" />
              <SpeechBubble />
            </div>
          </div>
        </section>

        <IntroSection />
        <ProjectsSection />
        <TechStackSection />
        <ContactSection />
      </main>
    </div>
  )
}
