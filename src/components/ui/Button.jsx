import { ArrowRight } from 'lucide-react'

const base =
  'group inline-flex items-center justify-center gap-3 px-8 py-4 text-[0.6875rem] font-medium uppercase tracking-[0.3em] transition-all duration-500 ease-luxe focus-visible:outline-offset-4'

const variants = {
  primary:
    'bg-ivory text-ink hover:bg-gold hover:text-ink border border-ivory hover:border-gold',
  outline:
    'border border-ivory/40 text-ivory hover:border-gold hover:text-gold bg-transparent',
  gold: 'border border-gold text-gold hover:bg-gold hover:text-ink bg-transparent',
}

/**
 * Brand button. Renders an <a> when `href` is provided, otherwise a <button>.
 */
export default function Button({
  children,
  href,
  variant = 'primary',
  arrow = false,
  className = '',
  ...rest
}) {
  const classes = `${base} ${variants[variant]} ${className}`
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          size={14}
          strokeWidth={1.5}
          className="transition-transform duration-500 ease-luxe group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  )
}
