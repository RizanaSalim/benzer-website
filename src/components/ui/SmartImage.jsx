import { useState } from 'react'

/**
 * Image with a graceful, on-brand fallback.
 * Fades in once loaded; if the source is missing or fails to load, renders
 * a dark textured panel with the BENZER monogram instead of a broken image.
 */
export default function SmartImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  position = 'center',
  loading = 'lazy',
  fetchPriority,
  tone = 'dark', // 'dark' (Concept 01) | 'light' (Concept 02)
}) {
  const [status, setStatus] = useState('loading')
  const surface =
    tone === 'light'
      ? 'bg-[radial-gradient(ellipse_at_30%_20%,#fffcf7_0%,#efe7da_55%,#e4d9c8_100%)]'
      : 'bg-[radial-gradient(ellipse_at_30%_20%,#262320_0%,#141414_55%,#0b0b0b_100%)]'
  const monogram = tone === 'light' ? 'font-display text-brass/40' : 'font-serif text-gold/25'

  return (
    <div
      className={`relative overflow-hidden ${tone === 'light' ? 'bg-cream' : 'bg-charcoal'} ${className}`}
    >
      {/* Fallback / loading surface */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 flex items-center justify-center ${surface} transition-opacity duration-700 ${
          status === 'loaded' ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <span className={`${monogram} text-5xl tracking-[0.3em] select-none`}>B</span>
      </div>

      {status !== 'error' && (
        <img
          src={src}
          alt={alt}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding="async"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          style={{ objectPosition: position }}
          className={`h-full w-full object-cover transition-opacity duration-1000 ${
            status === 'loaded' ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
      )}

      {status === 'error' && <span className="sr-only">{alt}</span>}
    </div>
  )
}
