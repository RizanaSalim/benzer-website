import Reveal from './Reveal'

/** Eyebrow + serif title + optional supporting text. */
export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = 'center',
  id,
  className = '',
}) {
  const alignment =
    align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex max-w-2xl flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          id={id}
          className="mt-5 font-serif text-4xl font-light uppercase leading-[1.05] tracking-[0.06em] text-ivory sm:text-5xl lg:text-6xl"
        >
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.16}>
        <span
          aria-hidden="true"
          className={`mt-7 block h-px w-16 bg-gold/70 ${align === 'center' ? 'mx-auto' : ''}`}
        />
      </Reveal>
      {text && (
        <Reveal delay={0.22}>
          <p className="mt-7 text-sm leading-relaxed tracking-wide text-mute sm:text-base">
            {text}
          </p>
        </Reveal>
      )}
    </div>
  )
}
