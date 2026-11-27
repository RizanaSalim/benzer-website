import { IMAGES } from '../../data/content'
import Reveal from '../../components/ui/Reveal'
import SmartImage from '../../components/ui/SmartImage'

const PILLARS = [
  { numeral: 'I', label: 'Tailoring', text: 'Precise cuts, considered proportions.' },
  { numeral: 'II', label: 'Fabric', text: 'Selected for drape, comfort and longevity.' },
  { numeral: 'III', label: 'Character', text: 'Designed for the man who leads.' },
]

export default function BrandStory() {
  return (
    <section id="about" aria-labelledby="h2-story-heading" className="border-t border-espresso/10 bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12">
        {/* Copy */}
        <div className="lg:col-span-5 lg:pt-10">
          <Reveal>
            <p className="h-eyebrow">Chapter I — Our Story</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              id="h2-story-heading"
              className="mt-6 font-display text-5xl leading-[0.98] text-espresso sm:text-6xl xl:text-7xl"
            >
              Beyond the <em className="text-brass-deep">Ordinary.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="h-dropcap mt-10 max-w-lg font-grotesk text-base font-light leading-[1.9] text-espresso/80">
              At BENZER, style is more than what you wear. It is an expression of individuality,
              confidence and character. We bring together timeless sophistication and contemporary
              design to redefine modern menswear.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <ul className="mt-12 max-w-lg border-t border-espresso/15">
              {PILLARS.map((p) => (
                <li key={p.label} className="grid grid-cols-[3rem_1fr] items-baseline gap-4 border-b border-espresso/15 py-5 sm:grid-cols-[3rem_9rem_1fr]">
                  <span className="font-display text-sm italic text-brass-deep">{p.numeral}.</span>
                  <span className="font-display text-xl text-espresso">{p.label}</span>
                  <span className="col-start-2 font-grotesk text-sm font-light text-espresso/70 sm:col-start-auto">
                    {p.text}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <a
              href="#collections"
              className="h-link-static mt-10 inline-block font-grotesk text-[0.6875rem] uppercase tracking-[0.3em] text-espresso"
            >
              Discover the Collections →
            </a>
          </Reveal>
        </div>

        {/* Imagery: heritage arch + detail plate */}
        <div className="relative lg:col-span-6 lg:col-start-7">
          <Reveal className="relative ml-auto w-[88%] sm:w-[78%]">
            <SmartImage
              tone="light"
              src={IMAGES.story.src}
              alt={IMAGES.story.alt}
              position="52% center"
              className="h-arch aspect-[4/5] w-full"
            />
            <span
              aria-hidden="true"
              className="h-arch pointer-events-none absolute -inset-3 border border-brass/45"
            />
          </Reveal>

          <Reveal delay={0.2} className="absolute -bottom-8 left-0 w-[42%] sm:w-[36%]">
            <div className="bg-paper p-2.5 shadow-[0_30px_60px_-30px_rgba(48,37,31,0.45)] sm:p-3">
              <SmartImage
                tone="light"
                src={IMAGES.storyDetail.src}
                alt={IMAGES.storyDetail.alt}
                position="center"
                className="aspect-square w-full"
              />
              <p className="mt-2.5 text-center font-display text-xs italic text-espresso/70 sm:text-sm">
                The cut, considered.
              </p>
            </div>
          </Reveal>

          <p
            aria-hidden="true"
            className="absolute right-0 top-1/2 hidden translate-x-8 -translate-y-1/2 font-grotesk text-[0.5625rem] uppercase tracking-[0.5em] text-espresso/45 [writing-mode:vertical-rl] xl:block"
          >
            Tailored in the modern Indian spirit
          </p>
        </div>
      </div>
    </section>
  )
}
