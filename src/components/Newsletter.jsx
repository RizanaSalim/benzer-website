import { useId } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import useNewsletterForm from '../hooks/useNewsletterForm'
import Reveal from './ui/Reveal'

/** Frontend-only demo: validates the email and shows a confirmation. Nothing is sent or stored. */
export default function Newsletter() {
  const inputId = useId()
  const errorId = useId()
  const { email, error, submitted, onChange, onSubmit: handleSubmit, reset } = useNewsletterForm()

  return (
    <section
      id="contact"
      aria-labelledby="newsletter-heading"
      className="relative overflow-hidden border-t border-ivory/5 bg-charcoal py-24 sm:py-32"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-serif text-[22vw] leading-none tracking-[0.2em] text-ivory/[0.025]"
      >
        BENZER
      </span>

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <Reveal>
          <p className="eyebrow">The Benzer Letter</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2
            id="newsletter-heading"
            className="mt-5 font-serif text-4xl font-light uppercase tracking-[0.06em] text-ivory sm:text-5xl"
          >
            Stay in the Loop
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-mute sm:text-base">
            Be the first to discover new collections, exclusive edits and the latest from BENZER.
          </p>
        </Reveal>

        <Reveal delay={0.24} className="mt-12">
          <AnimatePresence mode="wait" initial={false}>
            {submitted ? (
              <motion.div
                key="success"
                role="status"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto flex max-w-lg flex-col items-center gap-4 border border-gold/30 px-8 py-8"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold text-gold">
                  <Check size={16} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <p className="font-serif text-2xl text-ivory">Thank you.</p>
                <p className="text-sm text-mute">
                  You&rsquo;re on the list — we&rsquo;ll be in touch with the latest from BENZER.
                </p>
                <p className="text-[0.625rem] uppercase tracking-[0.25em] text-mute/60">
                  Demo only · no data was sent or stored
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="link-underline mt-2 text-[0.625rem] uppercase tracking-[0.3em] text-gold"
                >
                  Use another email
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                noValidate
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mx-auto max-w-lg"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-0">
                  <label htmlFor={inputId} className="sr-only">
                    Email address
                  </label>
                  <input
                    id={inputId}
                    type="email"
                    autoComplete="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={onChange}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? errorId : undefined}
                    className={`min-w-0 flex-1 border bg-ink/60 px-5 py-4 text-sm tracking-wide text-ivory placeholder:text-mute/70 transition-colors duration-500 focus:border-gold focus:outline-none ${
                      error ? 'border-red-400/60' : 'border-ivory/15'
                    }`}
                  />
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-3 border border-gold bg-gold px-8 py-4 text-[0.6875rem] font-medium uppercase tracking-[0.3em] text-ink transition-colors duration-500 hover:bg-transparent hover:text-gold"
                  >
                    Subscribe
                    <ArrowRight
                      size={14}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </button>
                </div>
                <p
                  id={errorId}
                  role="alert"
                  className={`mt-3 min-h-5 text-left text-xs text-red-300/90 ${error ? '' : 'invisible'}`}
                >
                  {error || ' '}
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
