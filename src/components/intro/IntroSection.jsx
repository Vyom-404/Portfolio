import { motion } from 'framer-motion'
import SectionWrapper from '../layout/SectionWrapper'

const chips = ['student', 'builder', 'problem solver', 'curious learner']

export default function IntroSection() {
  return (
    <SectionWrapper
      id="intro"
      eyebrow="Story Begins"
      title="I build interfaces that feel alive, polished, and full of intention."
      subtitle="I’m Vyom Gupta, a student developer exploring software, design, and interactive storytelling with equal curiosity."
    >
      <div className="grid gap-6 sm:gap-7 md:gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <motion.div
          data-reveal
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="glass-panel relative overflow-hidden rounded-[24px] sm:rounded-[28px] md:rounded-[32px] p-5 sm:p-6 md:p-8 shadow-glass"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-warm/10" />
          <div className="relative">
            <p className="text-base sm:text-lg leading-7 sm:leading-8 text-text md:text-xl">
              I enjoy turning ideas into clean, modern, motion-rich experiences. My work lives at the intersection of{' '}
              <span className="text-gradient font-semibold">logic, design, and storytelling</span>.
            </p>
            <p className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base leading-6 sm:leading-7 text-muted">
              Whether I’m solving programming problems, shaping a UI, or building something from scratch, I love making products that feel intentional instead of ordinary.
            </p>
          </div>
        </motion.div>

        <div data-float-card className="grid gap-3 sm:gap-4 md:gap-4">
          {chips.map((chip, index) => (
            <motion.div
              key={chip}
              data-reveal
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(124, 140, 255, 0.4)' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="glass-panel rounded-[18px] sm:rounded-[20px] md:rounded-[24px] px-4 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm uppercase tracking-[0.24em] sm:tracking-[0.28em] text-muted shadow-soft cursor-pointer"
              style={{ transform: `translateX(${index % 2 === 0 ? '0px' : '16px'})` }}
            >
              {chip}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
