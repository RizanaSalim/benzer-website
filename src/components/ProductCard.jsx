import { Eye } from 'lucide-react'
import { formatINR } from '../data/content'
import SmartImage from './ui/SmartImage'

export default function ProductCard({ product, onView }) {
  return (
    <article className="group flex flex-col">
      <div className="relative overflow-hidden">
        <SmartImage
          src={product.image}
          alt={product.alt}
          position={product.position}
          className="aspect-[3/4] w-full"
          imgClassName="transition-transform duration-[1400ms] ease-luxe group-hover:scale-[1.05]"
        />

        {product.tag && (
          <span className="absolute left-4 top-4 bg-ink/80 px-3 py-1.5 text-[0.5625rem] font-medium uppercase tracking-[0.3em] text-gold backdrop-blur-sm">
            {product.tag}
          </span>
        )}

        {/* Hover action (always visible on touch / small screens) */}
        <div className="absolute inset-x-0 bottom-0 p-4 transition-all duration-500 ease-luxe lg:translate-y-full lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100">
          <button
            type="button"
            onClick={() => onView(product)}
            aria-label={`View details for ${product.name}`}
            className="flex w-full items-center justify-center gap-2.5 bg-ivory/95 py-3.5 text-[0.625rem] font-medium uppercase tracking-[0.3em] text-ink backdrop-blur-sm transition-colors duration-500 hover:bg-gold"
          >
            <Eye size={14} strokeWidth={1.5} aria-hidden="true" />
            View Details
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        <p className="text-[0.625rem] font-medium uppercase tracking-[0.32em] text-mute">
          {product.category}
        </p>
        <h3 className="mt-2.5 font-serif text-xl leading-snug text-ivory transition-colors duration-500 group-hover:text-gold sm:text-2xl">
          {product.name}
        </h3>
        <p className="mt-2 text-sm tracking-wider text-ivory/80">{formatINR(product.price)}</p>
      </div>
    </article>
  )
}
