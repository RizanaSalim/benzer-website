import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { IMAGES } from '../data/content'
import Button from './ui/Button'
import SmartImage from './ui/SmartImage'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '12%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, reduce ? 1.04 : 1.12])

  const rise = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 36 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1.2, delay, ease },
        }

  return (
    <section
      id="home"
      ref={ref}
      aria-labelledby="hero-heading"
      className="relative -mt-20 flex min-h-[640px] items-end overflow-hidden bg-ink h-[100svh]"
    >
      {/* Background photograph */}
      <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0">
        <SmartImage
          src={IMAGES.hero.src}
          alt={IMAGES.hero.alt}
          loading="eager"
          fetchPriority="high"
          position={IMAGES.hero.position}
          className="h-full w-full"
        />
      </motion.div>

      {/* Overlays for legibility */}
      <div aria-hidden="true" className="absolute inset-0 bg-ink/45" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,#0b0b0b_0%,rgba(11,11,11,0.75)_30%,rgba(11,11,11,0.15)_65%,rgba(11,11,11,0.55)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,11,11,0.7)_0%,transparent_60%)]"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 sm:pb-24 lg:px-10 lg:pb-28">
        <motion.p {...rise(0.2)} className="eyebrow flex items-center gap-4">
          <span aria-hidden="true" className="h-px w-10 bg-gold" />
          The Art of Modern Menswear
        </motion.p>

        <h1
          id="hero-heading"
          className="mt-7 max-w-4xl font-serif text-[2.6rem] font-light uppercase leading-[0.98] tracking-[0.03em] text-ivory sm:text-6xl md:text-7xl lg:text-[5.75rem]"
        >
          <motion.span {...rise(0.35)} className="block">
            Defined by Style.
          </motion.span>
          <motion.span {...rise(0.5)} className="block italic text-ivory/90">
            Built for <span className="text-gold">Distinction.</span>
          </motion.span>
        </h1>

        <motion.p
          {...rise(0.7)}
          className="mt-8 max-w-md text-sm leading-relaxed tracking-wide text-ivory/75 sm:text-base"
        >
          Contemporary menswear crafted for those who appreciate timeless elegance and modern
          expression.
        </motion.p>

        <motion.div {...rise(0.85)} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="#collections" arrow>
            Explore Collection
          </Button>
          <Button href="#about" variant="outline">
            Discover Benzer
          </Button>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to brand story"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 right-6 z-10 hidden flex-col items-center gap-4 text-mute transition-colors duration-500 hover:text-gold md:flex lg:right-10"
      >
        <span className="text-[0.625rem] uppercase tracking-[0.4em] [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="relative h-16 w-px overflow-hidden bg-ivory/15">
          <motion.span
            className="absolute left-0 top-0 h-1/2 w-px bg-gold"
            animate={reduce ? {} : { y: ['-100%', '200%'] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.a>
    </section>
  )
}
