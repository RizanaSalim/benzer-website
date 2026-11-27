import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Layers, X } from 'lucide-react'
import { CONCEPTS } from '../routes'

const THEMES = {
  one: {
    shell: 'border-gold/30 bg-ink/90 text-ivory',
    toggle: 'border-gold/30 bg-ink/90 text-gold hover:border-gold',
    label: 'text-mute',
    active: 'text-gold',
    idle: 'text-ivory/70 hover:text-ivory',
    rule: 'bg-gold/20',
  },
  two: {
    shell: 'border-espresso/15 bg-paper/95 text-espresso',
    toggle: 'border-espresso/15 bg-paper/95 text-espresso hover:border-espresso/40',
    label: 'text-espresso/50',
    active: 'text-brass-deep',
    idle: 'text-espresso/60 hover:text-espresso',
    rule: 'bg-espresso/10',
  },
}

/** Discreet presentation control for switching between design concepts. */
export default function ConceptSwitcher({ current }) {
  const [open, setOpen] = useState(false)
  const t = THEMES[current]

  return (
    <div className="fixed bottom-4 left-4 z-[55] sm:bottom-6 sm:left-6">
      <AnimatePresence mode="wait" initial={false}>
        {open ? (
          <motion.nav
            key="panel"
            aria-label="Design concepts"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={`w-64 border px-5 py-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)] backdrop-blur-md ${t.shell}`}
          >
            <div className="flex items-center justify-between">
              <p className={`text-[0.5625rem] font-medium uppercase tracking-[0.35em] ${t.label}`}>
                Design Concepts
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close concept switcher"
                className={`-mr-1 inline-flex h-7 w-7 items-center justify-center ${t.idle}`}
              >
                <X size={14} strokeWidth={1.5} />
              </button>
            </div>
            <span aria-hidden="true" className={`mt-3 block h-px w-full ${t.rule}`} />
            <ul className="mt-2">
              {CONCEPTS.map((c) => {
                const isActive = c.id === current
                return (
                  <li key={c.id}>
                    <a
                      href={c.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={`flex items-baseline gap-3 py-2 text-xs tracking-[0.12em] transition-colors duration-300 ${
                        isActive ? t.active : t.idle
                      }`}
                    >
                      <span className="text-[0.625rem] tracking-[0.25em]">{c.number}</span>
                      <span className="uppercase">{c.name}</span>
                      {isActive && <span className="ml-auto text-[0.5625rem] tracking-[0.25em]">●</span>}
                    </a>
                  </li>
                )
              })}
            </ul>
          </motion.nav>
        ) : (
          <motion.button
            key="toggle"
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Switch design concept"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={`inline-flex items-center gap-2.5 border px-4 py-2.5 text-[0.5625rem] font-medium uppercase tracking-[0.3em] backdrop-blur-md transition-colors duration-300 ${t.toggle}`}
          >
            <Layers size={12} strokeWidth={1.5} aria-hidden="true" />
            Concept {CONCEPTS.find((c) => c.id === current)?.number}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
