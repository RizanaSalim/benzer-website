import { useCallback, useState } from 'react'
import { PRODUCTS } from '../data/content'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function FeaturedProducts() {
  const [active, setActive] = useState(null)
  const close = useCallback(() => setActive(null), [])

  return (
    <section
      id="new-arrivals"
      aria-labelledby="products-heading"
      className="bg-ink py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <SectionHeading
            id="products-heading"
            eyebrow="New Arrivals"
            title="Curated for Distinction"
            align="left"
          />
          <Reveal delay={0.2}>
            <p className="max-w-xs text-sm leading-relaxed text-mute md:text-right">
              Signature pieces from the new season — selected for the modern wardrobe.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-14 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.id} delay={0.1 * i}>
              <ProductCard product={product} onView={setActive} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-16 text-center text-[0.625rem] uppercase tracking-[0.3em] text-mute/70">
            Illustrative demo products · Prices indicative · Online purchasing not available
          </p>
        </Reveal>
      </div>

      <ProductModal product={active} onClose={close} />
    </section>
  )
}
