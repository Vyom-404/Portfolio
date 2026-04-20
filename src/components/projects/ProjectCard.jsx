import { ArrowUpRight, Github } from 'lucide-react'

export default function ProjectCard({ project, index }) {
  return (
    <article
      className="glass-panel relative min-h-[380px] sm:min-h-[430px] overflow-hidden rounded-[24px] sm:rounded-[28px] md:rounded-[32px] p-5 sm:p-6 md:p-8 lg:p-10 shadow-glass"
      data-project-card
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
      <div className="relative flex h-full flex-col justify-between gap-6 sm:gap-7 md:gap-8 lg:gap-10">
        <div>
          <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary">
            <span>Project {String(index + 1).padStart(2, '0')}</span>
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-text">{project.title}</h3>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-text/90">{project.short}</p>
          <p className="mt-3 sm:mt-5 max-w-2xl text-sm sm:text-base leading-6 sm:leading-7 text-muted">{project.problem}</p>
        </div>

        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-text"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-text transition hover:bg-white/15"
            >
              <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">GitHub</span>
              <span className="sm:hidden">Code</span>
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-text px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-bg transition hover:translate-y-[-2px]"
            >
              <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Live Demo</span>
              <span className="sm:hidden">Live</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
