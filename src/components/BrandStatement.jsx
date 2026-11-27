import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { IMAGES } from '../data/content'
import Reveal from './ui/Reveal'
import SmartImage from './ui/SmartImage'

export default function BrandStatement() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-8%', '8%'])

  return (
    <section
      ref={ref}
      aria-label="Brand statement"
      className="relative flex min-h-[80vh] items-center overflow-hidden bg-ink py-32"
    >
      <motion.div style={{ y }} className="absolute -inset-y-[10%] inset-x-0">
        <SmartImage
          src={IMAGES.statement.src}
          alt={IMAGES.statement.alt}
          position={IMAGES.statement.position}
          className="h-full w-full"
          imgClassName="grayscale-[60%]"
        />
      </motion.div>
      <div aria-hidden="true" className="absolute inset-0 bg-ink/80" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0b0b0b_85%)]"
      />
      <div aria-hidden="true" className="grain absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <div aria-hidden="true" className="mx-auto flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold/60 sm:w-20" />
            <span className="h-1.5 w-1.5 rotate-45 border border-gold" />
            <span className="h-px w-12 bg-gold/60 sm:w-20" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <blockquote className="mt-12">
            <p className="font-serif text-3xl font-light uppercase leading-[1.2] tracking-[0.05em] text-ivory sm:text-5xl lg:text-[3.75rem]">
              Style is not about following trends.
              <span className="mt-2 block italic text-gold sm:mt-4">
                It&rsquo;s about defining your own.
              </span>
            </p>
          </blockquote>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-12 text-[0.6875rem] font-medium uppercase tracking-[0.5em] text-mute">
            — Benzer
          </p>
        </Reveal>
      </div>
    </section>
  )
}
