import { COLLECTIONS } from '../../data/content'
import Reveal from '../../components/ui/Reveal'
import SmartImage from '../../components/ui/SmartImage'

/** Landscape crops suit the source photography; focus points per collection. */
const FOCUS = { formal: '45% 30%', casual: '55% 25%', occasion: '45% 30%' }

function CollectionRow({ item, reverse }) {
  return (
    <article className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
      <Reveal className={`lg:col-span-7 ${reverse ? 'lg:order-2 lg:col-start-6' : ''}`}>
        <a href="#new-arrivals" tabIndex={-1} aria-hidden="true" className="block overflow-hidden">
          <SmartImage
            tone="light"
            src={item.image}
            alt=""
            position={FOCUS[item.id] ?? item.position}
            className="aspect-[3/2] w-full"
            imgClassName="sepia-[0.18] transition-[transform,filter] duration-[1600ms] ease-luxe group-hover:scale-[1.04] group-hover:sepia-0"
          />
        </a>
      </Reveal>

      <Reveal
        delay={0.12}
        className={`lg:col-span-4 ${reverse ? 'lg:order-1 lg:col-start-1 lg:text-right' : 'lg:col-start-9'}`}
      >
        <p className="font-display text-6xl italic leading-none text-brass/70 sm:text-7xl">{item.index}</p>
        <h3 className="mt-5 font-display text-3xl text-espresso sm:text-4xl">{item.title}</h3>
        <span
          aria-hidden="true"
          className={`mt-6 block h-px w-12 bg-brass transition-all duration-700 ease-luxe group-hover:w-20 ${
            reverse ? 'lg:ml-auto' : ''
          }`}
        />
        <p className="mt-6 font-grotesk text-[0.95rem] font-light leading-relaxed text-espresso/75">
          {item.description}
        </p>
        <a
          href="#new-arrivals"
          aria-label={`${item.cta} — ${item.title}`}
          className="h-link-static mt-8 inline-block font-grotesk text-[0.6875rem] uppercase tracking-[0.3em] text-espresso"
        >
          {item.cta} →
        </a>
        <p className="sr-only">{item.alt}</p>
      </Reveal>
    </article>
  )
}

export default function Collections() {
  return (
    <section id="collections" aria-labelledby="h2-collections-heading" className="h-paper py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 border-b border-espresso/15 pb-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="h-eyebrow">Chapter II — The Season Edit</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                id="h2-collections-heading"
                className="mt-6 font-display text-5xl leading-none text-espresso sm:text-7xl xl:text-8xl"
              >
                The <em>Collections</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16} className="lg:col-span-4 lg:col-start-9">
            <p className="font-display text-xl italic leading-snug text-espresso/80 sm:text-2xl">
              Curated expressions of contemporary menswear.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-28">
          {COLLECTIONS.map((item, i) => (
            <CollectionRow key={item.id} item={item} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
