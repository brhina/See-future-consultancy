import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Bot, MessageSquare, Minimize2, SendHorizontal, Sparkles } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { getAssistantContext, getAssistantReply, getAssistantWelcome } from '../utils/clientAssistantEngine'

function ClientAssistant() {
  const location = useLocation()
  const context = getAssistantContext(location.pathname)
  const [isOpen, setIsOpen] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState(() => [getAssistantWelcome(location.pathname)])
  const [arePromptsVisible, setArePromptsVisible] = useState(true)
  const timeoutRef = useRef(null)
  const endRef = useRef(null)
  const activePrompts = messages.at(-1)?.suggestions?.slice(0, 3) ?? context.prompts

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [isOpen, isTyping, messages])

  useEffect(() => {
    setMessages((current) => (current.length === 1 && current[0].id === 'welcome' ? [getAssistantWelcome(location.pathname)] : current))
  }, [location.pathname])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleSubmit = (value) => {
    const nextValue = value.trim()

    if (!nextValue || isTyping) return

    const userMessage = {
      id: `${Date.now()}-user`,
      role: 'user',
      body: [nextValue]
    }

    setIsOpen(true)
    setInput('')
    setIsTyping(true)
    setMessages((current) => [...current, userMessage])

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = window.setTimeout(() => {
      const reply = getAssistantReply(nextValue, location.pathname)

      setMessages((current) => [
        ...current,
        {
          id: `${Date.now()}-assistant`,
          role: 'assistant',
          ...reply
        }
      ])
      setIsTyping(false)
    }, 320)
  }

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-[60] flex max-w-[calc(100vw-1.5rem)] flex-col items-end sm:bottom-6 sm:right-6">
      {/* <AnimatePresence>
        {!isOpen && (
          <Motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            className="pointer-events-auto mb-3 hidden max-w-xs rounded-3xl border border-blue-100 bg-white/95 p-4 shadow-[0_24px_70px_-32px_rgba(15,23,42,0.45)] backdrop-blur xl:block"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-2xl bg-blue-600 p-2 text-white">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Ask about SEEF Consult</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Services, GIS support, training, contact details, and project fit.
                </p>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence> */}

      <AnimatePresence>
        {isOpen ? (
          <Motion.section
            key="assistant-panel"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="pointer-events-auto flex h-[min(78vh,42rem)] w-[min(100vw-1.5rem,26rem)] flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_32px_90px_-38px_rgba(15,23,42,0.6)]"
            aria-label="SEEF client assistant"
          >
            <div className="relative overflow-hidden border-b border-slate-200 bg-slate-950 px-5 py-4 text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.38),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.22),transparent_30%)]" />

              <div className="relative flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-100">
                    <Bot className="h-3.5 w-3.5" />
                    SEEF Client Assistant
                  </div>
                  {/* <h2 className="mt-3 text-xl font-bold text-white">Fast answers for client questions</h2>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-200">{context.description}</p> */}
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full border border-white/10 bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                  aria-label="Minimize assistant"
                >
                  <Minimize2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] px-4 py-4">
              {messages.map((message) => (
                <article
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[88%] rounded-[1.6rem] px-4 py-3 shadow-sm ${
                      message.role === 'user'
                        ? 'rounded-br-md bg-blue-600 text-white'
                        : 'rounded-bl-md border border-slate-200 bg-white text-slate-900'
                    }`}
                  >
                    {message.role === 'assistant' && message.title && (
                      <p className="text-sm font-semibold text-slate-900">{message.title}</p>
                    )}

                    <div className={`space-y-2 ${message.role === 'assistant' && message.title ? 'mt-2' : ''}`}>
                      {(message.body ?? []).map((paragraph) => (
                        <p
                          key={paragraph}
                          className={`text-sm leading-6 ${
                            message.role === 'user' ? 'text-white/95' : 'text-slate-600'
                          }`}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {message.role === 'assistant' && message.highlights?.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {message.highlights.map((item) => (
                          <span
                            key={item}
                            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    )}

                    {message.role === 'assistant' && message.actions?.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {message.actions.map((action) =>
                          action.to ? (
                            <Link
                              key={`${message.id}-${action.label}`}
                              to={action.to}
                              className="inline-flex items-center rounded-full bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800"
                            >
                              {action.label}
                              <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                            </Link>
                          ) : (
                            <a
                              key={`${message.id}-${action.label}`}
                              href={action.href}
                              className="inline-flex items-center rounded-full bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800"
                            >
                              {action.label}
                              <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                            </a>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </article>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="rounded-[1.6rem] rounded-bl-md border border-slate-200 bg-white px-4 py-3 shadow-sm">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
                      <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400 [animation-delay:120ms]" />
                      <span className="h-2 w-2 animate-pulse rounded-full bg-blue-300 [animation-delay:240ms]" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={endRef} />
            </div>

            <div className="border-t border-slate-200 bg-white px-4 py-4">
              <div className="mb-3 flex items-center justify-between gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-3.5 w-3.5 text-blue-600" />
                  Suggested prompts
                </div>
                <button
                  type="button"
                  onClick={() => setArePromptsVisible((current) => !current)}
                  className="rounded-full px-2 py-1 text-[8px] text-slate-600"
                >
                  {arePromptsVisible ? <ArrowDown size={18}/> : <ArrowUpRight size={18} />}
                </button>
              </div>

              {arePromptsVisible && (
                <div className="mb-2 grid grid-cols-2 gap-1">
                  {activePrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => handleSubmit(prompt)}
                      className="rounded-full border border-blue-100 bg-blue-50 px-2 py-1 text-left text-xs font-medium text-blue-700 transition-colors hover:border-blue-200 hover:bg-blue-100"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}

              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  handleSubmit(input)
                }}
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-1"
              >
                <div className="flex items-end gap-2">
                  <label htmlFor="seef-client-assistant" className="sr-only">
                    Ask a question about SEEF Consult
                  </label>
                  <textarea
                    id="seef-client-assistant"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    rows={1}
                    placeholder="Ask anything about SEEF consult..."
                    className="max-h-28 min-h-[2.75rem] flex-1 resize-none bg-transparent px-2 py-1 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  />

                  <button
                    type="submit"
                    disabled={!input.trim() || isTyping}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white transition-all hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                    aria-label="Send message"
                  >
                    {isTyping ? <Bot className="h-4 w-4" /> : <SendHorizontal className="h-4 w-4" />}
                  </button>
                </div>
              </form>
            </div>
          </Motion.section>
        ) : (
          <Motion.button
            key="assistant-trigger"
            type="button"
            initial={{ opacity: 0, y: 18, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.92 }}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsOpen(true)}
            className="pointer-events-auto inline-flex items-center"
            aria-label="Open SEEF client assistant"
          >
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-slate-900">
              <Bot className="h-8 w-8 text-white" />
            </span>
            {/* <span className="pr-1 text-left">
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">AI Assistant</span>
              <span className="block text-sm font-semibold text-white">Ask about SEEF</span>
            </span> */}
          </Motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ClientAssistant
