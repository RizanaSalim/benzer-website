export default function Wordmark({ className = '', href = '#home' }) {
  return (
    <a
      href={href}
      aria-label="BENZER — back to top"
      className={`font-serif text-2xl font-medium tracking-[0.42em] text-ivory transition-colors duration-500 hover:text-gold ${className}`}
    >
      BENZER
    </a>
  )
}
