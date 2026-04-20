export default function SectionWrapper({ id, eyebrow, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`relative px-4 py-16 sm:py-20 md:py-24 lg:py-32 md:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || subtitle) && (
          <div data-reveal className="mb-8 sm:mb-10 md:mb-12 max-w-3xl">
            {eyebrow && <p className="mb-3 sm:mb-4 text-xs uppercase tracking-[0.32em] sm:tracking-[0.35em] text-primary">{eyebrow}</p>}
            {title && <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-text">{title}</h2>}
            {subtitle && <p className="mt-3 sm:mt-4 md:mt-5 max-w-2xl text-sm sm:text-base leading-6 sm:leading-7 text-muted md:text-lg">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
