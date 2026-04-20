import { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { Send } from 'lucide-react'
import { db } from '../../lib/firebase'

export default function ChatbotContactForm({ onClose }) {
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
        source: 'chatbot',
        createdAt: serverTimestamp(),
      })

      setStatus('Message sent successfully!')
      setFormData({
        name: '',
        email: '',
        message: '',
      })

      // Auto-close after 2 seconds
      setTimeout(() => {
        onClose?.()
      }, 2000)
    } catch (error) {
      console.error('Error saving message:', error)
      setStatus('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Contact Form</p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white outline-none placeholder:text-slate-500 transition focus:bg-white/10 focus:border-primary"
            disabled={loading}
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white outline-none placeholder:text-slate-500 transition focus:bg-white/10 focus:border-primary"
            disabled={loading}
          />
        </div>

        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            rows={3}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white outline-none placeholder:text-slate-500 transition focus:bg-white/10 focus:border-primary resize-none"
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
        >
          <Send className="h-3 w-3" />
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {status && (
          <p className={`text-xs text-center ${status.includes('successfully') ? 'text-green-400' : 'text-orange-400'}`}>
            {status}
          </p>
        )}
      </form>
    </div>
  )
}
