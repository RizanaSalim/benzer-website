import { useId } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import useNewsletterForm from '../../hooks/useNewsletterForm'
import Reveal from '../../components/ui/Reveal'

/** Frontend-only demo: validates the email and shows a confirmation. Nothing is sent or stored. */
export default function Newsletter() {
  const inputId = useId()
  const errorId = useId()
  const { email, error, submitted, onChange, onSubmit, reset } = useNewsletterForm()

  return (
    <section id="contact" aria-labelledby="h2-newsletter-heading" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:items-end lg:px-12">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="h-eyebrow">The Benzer Letter</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="h2-newsletter-heading" className="mt-6 font-display text-5xl leading-none text-espresso sm:text-7xl">
              Stay in <em>the Loop</em>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-8 max-w-md font-grotesk text-[0.95rem] font-light leading-relaxed text-espresso/75">
              Be the first to discover new collections, exclusive edits and the latest from BENZER.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="lg:col-span-5 lg:col-start-8">
          <AnimatePresence mode="wait" initial={false}>
            {submitted ? (
              <motion.div
                key="success"
                role="status"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="border-t border-espresso/20 pt-8"
              >
                <p className="font-display text-3xl italic text-espresso">Thank you.</p>
                <p className="mt-3 font-grotesk text-sm font-light text-espresso/75">
                  You&rsquo;re on the list — we&rsquo;ll be in touch with the latest from BENZER.
                </p>
                <p className="mt-4 font-grotesk text-[0.625rem] uppercase tracking-[0.25em] text-espresso/50">
                  Demo only · no data was sent or stored
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="h-link-static mt-6 font-grotesk text-[0.625rem] uppercase tracking-[0.3em] text-brass-deep"
                >
                  Use another email
                </button>
              </motion.div>
            ) : (
              <motion.form key="form" noValidate onSubmit={onSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <label htmlFor={inputId} className="h-eyebrow block">
                  Email Address
                </label>
                <div
                  className={`mt-4 flex items-center border-b transition-colors duration-500 focus-within:border-espresso ${
                    error ? 'border-red-700/60' : 'border-espresso/30'
                  }`}
                >
                  <input
                    id={inputId}
                    type="email"
                    autoComplete="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={onChange}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? errorId : undefined}
                    className="min-w-0 flex-1 bg-transparent py-4 font-display text-xl text-espresso placeholder:text-espresso/35 focus:outline-none sm:text-2xl"
                  />
                  <button
                    type="submit"
                    className="group ml-4 inline-flex items-center gap-3 py-4 font-grotesk text-[0.6875rem] font-medium uppercase tracking-[0.3em] text-espresso transition-colors duration-500 hover:text-brass-deep"
                  >
                    Subscribe
                    <span aria-hidden="true" className="transition-transform duration-500 ease-luxe group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
                <p id={errorId} role="alert" className={`mt-3 min-h-5 font-grotesk text-xs text-red-800 ${error ? '' : 'invisible'}`}>
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
