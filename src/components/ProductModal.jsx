import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { formatINR } from '../data/content'
import SmartImage from './ui/SmartImage'

/** Lightweight "View Details" preview. Demo only — no purchasing. */
export default function ProductModal({ product, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!product) return
    const prevOverflow = document.body.style.overflow
    const prevFocus = document.activeElement
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
      prevFocus?.focus?.()
    }
  }, [product, onClose])

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          key="product-modal"
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute inset-0 bg-ink/85 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative grid max-h-[90vh] w-full max-w-4xl overflow-y-auto border border-ivory/10 bg-charcoal md:grid-cols-2"
          >
            <SmartImage
              src={product.image}
              alt={product.alt}
              position={product.position}
              className="aspect-[4/5] w-full md:aspect-auto md:h-full"
            />

            <div className="flex flex-col p-8 sm:p-10">
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close product details"
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center bg-ink/60 text-ivory transition-colors duration-500 hover:text-gold"
              >
                <X size={18} strokeWidth={1.25} />
              </button>

              <p className="eyebrow">{product.category}</p>
              <h3
                id="product-modal-title"
                className="mt-4 font-serif text-3xl font-light leading-tight text-ivory sm:text-4xl"
              >
                {product.name}
              </h3>
              <p className="mt-4 text-lg tracking-wider text-ivory/85">{formatINR(product.price)}</p>
              <span aria-hidden="true" className="mt-8 block h-px w-12 bg-gold/70" />
              <p className="mt-8 text-sm leading-[1.9] text-ivory/70">
                A considered piece from the BENZER {product.category} — cut with precision,
                finished with restraint, and designed to carry you from the boardroom to the
                evening with quiet confidence.
              </p>

              <div className="mt-auto pt-10">
                <p className="border border-gold/25 px-5 py-4 text-xs leading-relaxed text-mute">
                  <span className="text-gold">Preview only.</span> This is an illustrative demo
                  product. Pricing is indicative and online purchasing is not available.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
