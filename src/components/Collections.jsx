import { ArrowUpRight } from 'lucide-react'
import { COLLECTIONS } from '../data/content'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import SmartImage from './ui/SmartImage'

function CollectionTile({ item, className = '' }) {
  return (
    <a
      href="#new-arrivals"
      aria-label={`${item.title} — ${item.cta}`}
      className={`group relative block h-full overflow-hidden bg-charcoal ${className}`}
    >
      <SmartImage
        src={item.image}
        alt={item.alt}
        position={item.position}
        className="absolute inset-0 h-full w-full"
        imgClassName="scale-100 transition-transform duration-[1600ms] ease-luxe group-hover:scale-[1.06]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(11,11,11,0.92)_0%,rgba(11,11,11,0.35)_45%,rgba(11,11,11,0.05)_100%)] transition-opacity duration-700 group-hover:opacity-90"
      />
      <span
        aria-hidden="true"
        className="absolute inset-4 border border-ivory/0 transition-colors duration-700 group-hover:border-gold/30"
      />

      <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10">
        <p className="font-sans text-[0.625rem] tracking-[0.4em] text-gold">{item.index}</p>
        <h3 className="mt-3 font-serif text-3xl font-light uppercase tracking-[0.08em] text-ivory lg:text-4xl">
          {item.title}
        </h3>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/70">{item.description}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-[0.6875rem] font-medium uppercase tracking-[0.3em] text-ivory transition-colors duration-500 group-hover:text-gold">
          {item.cta}
          <ArrowUpRight
            size={14}
            strokeWidth={1.5}
            aria-hidden="true"
            className="transition-transform duration-500 ease-luxe group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </a>
  )
}

export default function Collections() {
  const [first, ...rest] = COLLECTIONS

  return (
    <section
      id="collections"
      aria-labelledby="collections-heading"
      className="bg-charcoal py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          id="collections-heading"
          eyebrow="Season Edit"
          title="The Collections"
          text="Curated expressions of contemporary menswear."
        />

        <div className="mt-16 grid gap-4 sm:mt-20 md:grid-cols-2 md:grid-rows-2 md:gap-5 lg:h-[780px]">
          <Reveal className="h-[520px] md:row-span-2 md:h-[640px] lg:h-full">
            <CollectionTile item={first} />
          </Reveal>
          {rest.map((item, i) => (
            <Reveal
              key={item.id}
              delay={0.12 * (i + 1)}
              className="h-[420px] md:h-[310px] lg:h-full"
            >
              <CollectionTile item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
