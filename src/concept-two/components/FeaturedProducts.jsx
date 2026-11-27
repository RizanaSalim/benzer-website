import { useCallback, useState } from 'react'
import { PRODUCTS, formatINR } from '../../data/content'
import Reveal from '../../components/ui/Reveal'
import SmartImage from '../../components/ui/SmartImage'
import ProductModal from './ProductModal'

function ProductCard({ product, number, onView }) {
  return (
    <article className="group flex flex-col">
      <button
        type="button"
        onClick={() => onView(product)}
        aria-label={`View details for ${product.name}`}
        className="relative block bg-paper p-3 text-left shadow-[0_1px_0_rgba(48,37,31,0.08)] ring-1 ring-espresso/10 transition-all duration-700 ease-luxe hover:-translate-y-1 hover:shadow-[0_30px_50px_-30px_rgba(48,37,31,0.45)] sm:p-4"
      >
        <SmartImage
          tone="light"
          src={product.image}
          alt={product.alt}
          position={product.position}
          className="aspect-[4/5] w-full"
          imgClassName="transition-transform duration-[1400ms] ease-luxe group-hover:scale-[1.04]"
        />
        {product.tag && (
          <span className="absolute right-6 top-6 bg-cream px-2.5 py-1 font-grotesk text-[0.5625rem] uppercase tracking-[0.3em] text-brass-deep sm:right-7 sm:top-7">
            {product.tag}
          </span>
        )}
      </button>

      <div className="mt-6 flex flex-1 flex-col">
        <p className="font-display text-sm italic text-brass-deep">No. {number}</p>
        <h3 className="mt-1.5 font-display text-2xl leading-snug text-espresso">{product.name}</h3>
        <div className="mt-4 flex items-baseline justify-between border-t border-espresso/15 pt-3 font-grotesk">
          <span className="text-[0.625rem] uppercase tracking-[0.28em] text-espresso/60">{product.category}</span>
          <span className="text-sm tracking-wider text-espresso">{formatINR(product.price)}</span>
        </div>
        <button
          type="button"
          onClick={() => onView(product)}
          className="h-link mt-5 self-start font-grotesk text-[0.6875rem] uppercase tracking-[0.3em] text-espresso"
        >
          View Details
        </button>
      </div>
    </article>
  )
}

export default function FeaturedProducts() {
  const [active, setActive] = useState(null)
  const close = useCallback(() => setActive(null), [])

  return (
    <section id="new-arrivals" aria-labelledby="h2-products-heading" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="h-eyebrow">Chapter III — New Arrivals</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="h2-products-heading" className="mt-6 font-display text-5xl leading-none text-espresso sm:text-6xl">
              Curated for <em className="text-brass-deep">Distinction</em>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <div aria-hidden="true" className="mt-8 flex items-center justify-center gap-3 text-brass">
              <span className="h-px w-10 bg-brass/60" />
              <span className="text-xs">✦</span>
              <span className="h-px w-10 bg-brass/60" />
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.id} delay={0.1 * i} className={i % 2 === 1 ? 'lg:mt-16' : ''}>
              <ProductCard product={product} number={String(i + 1).padStart(2, '0')} onView={setActive} />
            </Reveal>
          ))}
        </div>

        <p className="mt-20 text-center font-grotesk text-[0.625rem] uppercase tracking-[0.3em] text-espresso/50">
          Illustrative demo products · Prices indicative · Online purchasing not available
        </p>
      </div>
      <ProductModal product={active} onClose={close} />
    </section>
  )
}
