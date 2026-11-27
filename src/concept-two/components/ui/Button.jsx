import { ArrowRight } from 'lucide-react'

const base =
  'group inline-flex whitespace-nowrap items-center justify-center gap-3 px-8 py-4 font-grotesk text-[0.6875rem] font-medium uppercase tracking-[0.28em] transition-colors duration-500 ease-luxe'

const variants = {
  solid: 'bg-espresso text-cream hover:bg-brass-deep',
  outline: 'border border-espresso/35 text-espresso hover:border-espresso hover:bg-espresso hover:text-cream',
  light: 'border border-cream/40 text-cream hover:bg-cream hover:text-espresso',
}

/** Concept 02 button. Renders <a> when `href` is set, otherwise <button>. */
export default function Button({ children, href, variant = 'solid', arrow = false, className = '', ...rest }) {
  const classes = `${base} ${variants[variant]} ${className}`
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          size={14}
          strokeWidth={1.25}
          aria-hidden="true"
          className="transition-transform duration-500 ease-luxe group-hover:translate-x-1"
        />
      )}
    </>
  )
  return href ? (
    <a href={href} className={classes} {...rest}>
      {content}
    </a>
  ) : (
    <button className={classes} {...rest}>
      {content}
    </button>
  )
}
