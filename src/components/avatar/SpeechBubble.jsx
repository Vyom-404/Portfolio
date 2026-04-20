import { motion } from 'framer-motion'

export default function SpeechBubble() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
      className="glass-panel absolute right-4 top-4 max-w-sm rounded-[28px] p-5 shadow-glass md:right-[8%] md:top-[4%] md:p-6"
    >
      <div className="absolute -left-3 bottom-8 h-6 w-6 rotate-45 border-l border-b border-white/10 bg-white/10" />
      <p className="font-heading text-lg font-semibold text-text md:text-xl">Hi, I’m Vyom Gupta!</p>
      <p className="mt-2 text-sm leading-7 text-muted md:text-base">
        You’ve landed in my world — let me show you what I build.
      </p>
    </motion.div>
  )
}
