import { Menu } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

const navItems = [
  { label: 'Story', href: '#intro' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#tech' },
  { label: 'Connect', href: '#contact' },
]

export default function Navbar() {

  const handleScroll = (id) => {
    const section = document.querySelector(id)
    if (!section) return

    gsap.to(window, {
      duration: 1.2,
      ease: 'power3.inOut',
      scrollTo: {
        y: section,
        offsetY: 80,
      },
    })
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-3 py-2 sm:px-4 sm:py-4 md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-3 py-2 sm:px-4 sm:py-3 md:px-6 backdrop-blur-xl">
        
        {/* Logo */}
        <button
          onClick={() => handleScroll('#hero')}
          className="font-heading text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.24em] text-text md:text-base flex-shrink-0"
        >
          VYOM.G
        </button>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-4 sm:gap-5 md:gap-7 md:flex ml-auto">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleScroll(item.href)}
              className="text-xs sm:text-sm text-muted transition hover:text-text whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <button
          onClick={() => handleScroll('#contact')}
          className="hidden rounded-full border border-white/10 bg-white/10 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-text transition hover:bg-white/15 md:block ml-4 lg:ml-6 flex-shrink-0"
        >
          Let’s Talk
        </button>

        {/* Mobile Menu Icon */}
        <button className="md:hidden ml-auto flex-shrink-0" aria-label="Navigation">
          <Menu className="h-4 w-4 sm:h-5 sm:w-5 text-text" />
        </button>

      </div>
    </header>
  )
}