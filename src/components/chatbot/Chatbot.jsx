import { useEffect, useState, useRef } from 'react'
import { X, Send } from 'lucide-react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../lib/firebase'
import { chatbotReplies, presetQuestions, forwardingQuestions } from '../../data/chatbotReplies'
import ChatbotContactForm from './ChatbotContactForm'
import AvatarMini from '../avatar/AvatarMini'

function normalizeText(text) {
  return text.toLowerCase().trim().replace(/[?.!,]/g, '')
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [showPrompt, setShowPrompt] = useState(false)

  const messagesEndRef = useRef(null)
  const scrollContainerRef = useRef(null)
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true)

  useEffect(() => {
    if (isOpen && !hasOpenedOnce) {
      setHasOpenedOnce(true)
      setIsTyping(true)
      setShouldAutoScroll(true)

      setTimeout(() => {
        setMessages([
          {
            sender: 'bot',
            text: "Hi, I'm Vyom. Ask me something or choose a quick question below.",
          },
        ])
        setIsTyping(false)
      }, 1000)
    }
  }, [isOpen, hasOpenedOnce])

  useEffect(() => {
    if (shouldAutoScroll && messagesEndRef.current) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 0)
    }
  }, [messages, isTyping, shouldAutoScroll, showContactForm])

  useEffect(() => {
    let showTimeout
    let hideTimeout
    let initialTimeout

    const scheduleBubble = () => {
      const nextDelay = Math.floor(Math.random() * 5000) + 10000

      showTimeout = setTimeout(() => {
        setShowPrompt(true)

        hideTimeout = setTimeout(() => {
          setShowPrompt(false)
          scheduleBubble()
        }, 3000)
      }, nextDelay)
    }

    initialTimeout = setTimeout(() => {
      setShowPrompt(true)

      hideTimeout = setTimeout(() => {
        setShowPrompt(false)
        scheduleBubble()
      }, 3000)
    }, 4000)

    return () => {
      clearTimeout(initialTimeout)
      clearTimeout(showTimeout)
      clearTimeout(hideTimeout)
    }
  }, [])

  const handleScroll = () => {
    if (!scrollContainerRef.current) return

    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current
    const isNearBottom = scrollHeight - scrollTop - clientHeight < 100
    setShouldAutoScroll(isNearBottom)
  }

  const findPresetMatch = (userInput) => {
    const normalizedInput = normalizeText(userInput)

    const matchedQuestion = presetQuestions.find(
      (question) => normalizeText(question) === normalizedInput
    )

    if (!matchedQuestion) return null

    return {
      question: matchedQuestion,
      reply: chatbotReplies[matchedQuestion],
    }
  }

  const sendBotReply = async (questionText) => {
    const userMessage = { sender: 'user', text: questionText }

    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)
    setShouldAutoScroll(true)

    const reply =
      chatbotReplies[questionText] ||
      "I don't have a preset answer for that yet. You can ask through the contact form."

    setTimeout(async () => {
      setMessages((prev) => [...prev, { sender: 'bot', text: reply }])
      setIsTyping(false)

      if (forwardingQuestions.includes(questionText)) {
        setShowContactForm(true)

        try {
          await addDoc(collection(db, 'chat_queries'), {
            query: questionText,
            source: 'chatbot',
            createdAt: serverTimestamp(),
          })
        } catch (error) {
          console.error('Error saving chatbot query:', error)
        }
      } else {
        setShowContactForm(false)
      }
    }, 1200)
  }

  const handlePresetClick = async (question) => {
    if (loading || isTyping) return
    setLoading(true)
    await sendBotReply(question)
    setLoading(false)
  }

  const handleCustomSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim() || loading || isTyping) return

    const userInput = input.trim()
    setInput('')
    setLoading(true)

    const userMessage = { sender: 'user', text: userInput }
    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)
    setShouldAutoScroll(true)

    const presetMatch = findPresetMatch(userInput)

    setTimeout(async () => {
      if (presetMatch) {
        setMessages((prev) => [...prev, { sender: 'bot', text: presetMatch.reply }])

        if (forwardingQuestions.includes(presetMatch.question)) {
          setShowContactForm(true)

          try {
            await addDoc(collection(db, 'chat_queries'), {
              query: presetMatch.question,
              source: 'chatbot',
              createdAt: serverTimestamp(),
            })
          } catch (error) {
            console.error('Error saving chatbot query:', error)
          }
        } else {
          setShowContactForm(false)
        }
      } else {
        const lower = normalizeText(userInput)

        const shouldForward =
          lower.includes('project') ||
          lower.includes('collaborate') ||
          lower.includes('hire') ||
          lower.includes('internship') ||
          lower.includes('work with you') ||
          lower.includes('contact')

        if (shouldForward) {
          setShowContactForm(false)

          setMessages((prev) => [
            ...prev,
            { sender: 'bot', text: 'Your query has been sent to Vyom.' },
          ])

          try {
            await addDoc(collection(db, 'chat_queries'), {
              query: userInput,
              source: 'chatbot',
              createdAt: serverTimestamp(),
            })
          } catch (error) {
            console.error('Error saving chatbot query:', error)
          }
        } else {
          setMessages((prev) => [
            ...prev,
            {
              sender: 'bot',
              text: "I don't have a direct answer for that. Please fill the form below and Vyom will get back to you.",
            },
          ])
          setShowContactForm(true)
        }
      }

      setIsTyping(false)
      setLoading(false)
    }, 1200)
  }

  return (
    <>
      <style>{`
        .chatbot-scroll {
          scroll-behavior: smooth;
        }

        .chatbot-scroll::-webkit-scrollbar {
          width: 6px;
        }

        .chatbot-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }

        .chatbot-scroll::-webkit-scrollbar-thumb {
          background: rgba(124, 140, 255, 0.4);
          border-radius: 10px;
        }

        .chatbot-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(124, 140, 255, 0.6);
        }
      `}</style>

      {showPrompt && !isOpen && (
        <div className="fixed bottom-24 right-6 z-[9999] animate-bounce">
          <div className="relative rounded-2xl border border-white/10 bg-[#0f172a]/95 px-4 py-2 text-sm text-white shadow-xl backdrop-blur-xl">
            Ask me anything!
            <div className="absolute -bottom-2 right-5 h-4 w-4 rotate-45 border-r border-b border-white/10 bg-[#0f172a]/95" />
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl transition hover:scale-105"
        aria-label="Open chatbot"
      >
        {isOpen ? <X className="h-6 w-6" /> : <AvatarMini />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[9999] w-[380px] md:w-[420px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-3xl border border-white/10 bg-[#0f172a]/95 shadow-2xl backdrop-blur-xl">
          <div className="border-b border-white/10 px-5 py-4">
            <h3 className="text-base font-semibold text-white">Chat with Vyom's Bot</h3>
          </div>

          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            onWheel={(e) => e.stopPropagation()}
            data-lenis-prevent
            className="chatbot-scroll max-h-[460px] space-y-3 overflow-y-auto px-4 py-4"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                  msg.sender === 'bot'
                    ? 'bg-white/10 text-slate-100'
                    : 'ml-auto bg-primary text-white'
                }`}
              >
                {msg.text}
              </div>
            ))}

            {isTyping && (
              <div className="max-w-[85%] rounded-2xl bg-white/10 px-4 py-3 text-sm text-slate-100">
                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-300 [animation-delay:-0.3s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-300 [animation-delay:-0.15s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-300" />
                </div>
              </div>
            )}

            {showContactForm && (
              <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-4">
                <ChatbotContactForm onClose={() => setShowContactForm(false)} />
              </div>
            )}

            <div className="pt-2">
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                Quick Questions
              </p>
              <div className="flex flex-wrap gap-2">
                {presetQuestions.map((question) => (
                  <button
                    key={question}
                    onClick={() => handlePresetClick(question)}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200 transition hover:bg-white/10"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleCustomSubmit} className="border-t border-white/10 p-3">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
              />
              <button
                type="submit"
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white transition hover:scale-105"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}