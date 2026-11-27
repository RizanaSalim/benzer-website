import { motion, useReducedMotion } from 'framer-motion'
import { COLLECTIONS, IMAGES } from '../../data/content'
import SmartImage from '../../components/ui/SmartImage'
import Button from './ui/Button'

const ease = [0.22, 1, 0.36, 1]
const MASTHEAD = 'BENZER'.split('')

/** Magazine-cover hero: issue line, masthead, cover photograph and cover lines. */
export default function Hero() {
  const reduce = useReducedMotion()
  const fade = (delay, y = 24) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y }, animate: { opacity: 1, y: 0 }, transition: { duration: 1.1, delay, ease } }

  return (
    <section id="home" aria-labelledby="h2-hero-heading" className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-5 pt-6 sm:px-8 lg:px-12 lg:pt-8">
        {/* Issue line */}
        <motion.div
          {...fade(0.1, 0)}
          className="flex items-center justify-between border-b border-espresso/15 pb-4 font-grotesk text-[0.5625rem] uppercase tracking-[0.32em] text-espresso/70 sm:text-[0.625rem]"
        >
          <span>Vol. 02 — The Heritage Issue</span>
          <span className="hidden md:inline">Contemporary Indian Menswear</span>
          <span>Autumn / Winter</span>
        </motion.div>

        {/* Masthead */}
        <p
          aria-hidden="true"
          className="flex select-none justify-between pt-4 font-display text-[22vw] font-normal leading-[0.82] text-espresso lg:text-[min(17.5vw,15.5rem)]"
        >
          {MASTHEAD.map((ch, i) => (
            <motion.span
              key={i}
              initial={reduce ? false : { opacity: 0, y: '18%' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.15 + i * 0.07, ease }}
            >
              {ch}
            </motion.span>
          ))}
        </p>
        <motion.p
          {...fade(0.6, 0)}
          className="mt-3 text-center font-grotesk text-[0.5625rem] uppercase tracking-[0.5em] text-brass-deep sm:text-[0.6875rem] lg:text-right"
        >
          The Art of Modern Menswear
        </motion.p>
      </div>

      {/* Cover composition */}
      <div className="mx-auto mt-8 grid max-w-[1440px] gap-10 px-5 pb-20 sm:px-8 lg:mt-12 lg:grid-cols-12 lg:gap-12 lg:px-12 lg:pb-28">
        {/* Cover photograph */}
        <figure className="relative lg:order-2 lg:col-span-8">
          <motion.div {...fade(0.35, 32)} className="relative">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 -right-3 hidden h-full w-full border border-brass/50 sm:block"
            />
            <div className="relative overflow-hidden">
              <SmartImage
                tone="light"
                src={IMAGES.hero.src}
                alt={IMAGES.hero.alt}
                loading="eager"
                fetchPriority="high"
                position="center 30%"
                className="aspect-[4/3] w-full sm:aspect-[16/10]"
              />
            </div>
          </motion.div>
          <figcaption className="mt-4 flex justify-between font-grotesk text-[0.625rem] uppercase tracking-[0.3em] text-espresso/60 sm:mt-6">
            <span>Cover — The Evening Edit</span>
            <span className="hidden sm:inline">Formal · Occasion</span>
          </figcaption>
        </figure>

        {/* Cover lines */}
        <div className="flex flex-col lg:order-1 lg:col-span-4 lg:pt-2">
          <motion.p {...fade(0.7)} className="h-eyebrow">
            The New Season
          </motion.p>
          <motion.h1
            {...fade(0.8)}
            id="h2-hero-heading"
            className="mt-5 font-display text-[2.6rem] leading-[1.02] text-espresso sm:text-6xl lg:text-[3.6rem] xl:text-[4.1rem]"
          >
            Defined by Style. <em className="font-normal text-brass-deep">Built for Distinction.</em>
          </motion.h1>
          <motion.p
            {...fade(0.9)}
            className="mt-6 max-w-md font-grotesk text-[0.95rem] font-light leading-relaxed text-espresso/75"
          >
            Contemporary menswear crafted for those who appreciate timeless elegance and modern
            expression.
          </motion.p>
          <motion.div {...fade(1)} className="mt-9 flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start 2xl:flex-row">
            <Button href="#collections" arrow>
              Explore Collection
            </Button>
            <Button href="#about" variant="outline">
              Discover Benzer
            </Button>
          </motion.div>

          {/* "In this issue" cover lines */}
          <motion.nav {...fade(1.1)} aria-label="In this issue" className="mt-12 lg:mt-auto lg:pt-12">
            <p className="h-eyebrow">In this Issue</p>
            <ol className="mt-4 border-t border-espresso/15">
              {COLLECTIONS.map((c) => (
                <li key={c.id} className="border-b border-espresso/15">
                  <a href="#collections" className="group flex items-baseline gap-4 py-3.5">
                    <span className="font-grotesk text-[0.625rem] tracking-[0.25em] text-brass-deep">
                      {c.index}
                    </span>
                    <span className="font-display text-lg text-espresso transition-all duration-500 group-hover:italic">
                      {c.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className="ml-auto text-espresso/40 transition-transform duration-500 ease-luxe group-hover:translate-x-1 group-hover:text-espresso"
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </motion.nav>
        </div>
      </div>
    </section>
  )
}
