import { motion, useReducedMotion } from 'framer-motion'

/** Restrained fade-and-rise reveal when an element scrolls into view. */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  as = 'div',
  className = '',
  ...rest
}) {
  const reduce = useReducedMotion()
  const Component = motion[as] ?? motion.div

  return (
    <Component
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  )
}
