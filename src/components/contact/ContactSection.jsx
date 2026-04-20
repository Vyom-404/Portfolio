import { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { Github, Linkedin, Mail, Send, FileText } from 'lucide-react'
import SectionWrapper from '../layout/SectionWrapper'
import { db } from '../../lib/firebase'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Vyom-404', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vyom-gupta-448bb5321/', icon: Linkedin },
  { label: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=vyomg20082005@gmail.com', icon: Mail },
  { label: 'Resume', href: '#', icon: FileText },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('')

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.')
      return
    }

    try {
      setLoading(true)

      await addDoc(collection(db, 'messages'), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: serverTimestamp(),
      })

      setStatus('Message sent successfully!')
      setFormData({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      console.error('Error saving message:', error)
      setStatus('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <SectionWrapper
      id="contact"
      eyebrow="Final Frame"
      title="Let’s build something meaningful together."
      subtitle="End the story with a warm, calm section that makes reaching out feel natural instead of formal."
      className="pb-28"
    >
      <div className="grid gap-6 sm:gap-7 md:gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <div data-reveal className="glass-panel rounded-[24px] sm:rounded-[28px] md:rounded-[32px] p-5 sm:p-6 md:p-8 shadow-glass">
          <p className="font-heading text-xl sm:text-2xl text-text">Got an idea? Let's connect.</p>
          <p className="mt-3 sm:mt-4 max-w-md text-sm sm:text-base leading-6 sm:leading-7 text-muted">
            Whether it's a project, collaboration, internship opportunity, or just a good idea worth building, I'm always open to meaningful conversations.
          </p>

          <div className="mt-6 sm:mt-8 space-y-2 sm:space-y-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center gap-3 sm:gap-4 rounded-lg sm:rounded-2xl border border-white/10 bg-white/5 px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base text-text transition hover:bg-white/10"
              >
                <span className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-lg sm:rounded-2xl bg-white/10 flex-shrink-0">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} data-reveal className="glass-panel rounded-[24px] sm:rounded-[28px] md:rounded-[32px] p-5 sm:p-6 md:p-8 shadow-glass">
          <div className="grid gap-4 sm:gap-5">
            <label className="grid gap-2 text-xs sm:text-sm text-muted">
              Name
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="rounded-lg sm:rounded-2xl border border-white/10 bg-white/5 px-3 sm:px-4 py-2.5 sm:py-4 text-sm sm:text-base text-text outline-none transition placeholder:text-muted/60 focus:border-primary"
              />
            </label>

            <label className="grid gap-2 text-xs sm:text-sm text-muted">
              Email
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="rounded-lg sm:rounded-2xl border border-white/10 bg-white/5 px-3 sm:px-4 py-2.5 sm:py-4 text-sm sm:text-base text-text outline-none transition placeholder:text-muted/60 focus:border-primary"
              />
            </label>

            <label className="grid gap-2 text-xs sm:text-sm text-muted">
              Message
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me what you want to build..."
                className="rounded-lg sm:rounded-2xl border border-white/10 bg-white/5 px-3 sm:px-4 py-2.5 sm:py-4 text-sm sm:text-base text-text outline-none transition placeholder:text-muted/60 focus:border-primary"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-text px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-bg transition hover:translate-y-[-2px] disabled:cursor-not-allowed disabled:opacity-70"
            >
              <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {status && <p className="text-xs sm:text-sm text-muted">{status}</p>}
          </div>
        </form>
      </div>
    </SectionWrapper>
  )
}