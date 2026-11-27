import { IMAGES } from '../data/content'
import Button from './ui/Button'
import Reveal from './ui/Reveal'
import SmartImage from './ui/SmartImage'

const PILLARS = [
  { label: 'Tailoring', text: 'Precise cuts, considered proportions.' },
  { label: 'Fabric', text: 'Selected for drape, comfort and longevity.' },
  { label: 'Character', text: 'Designed for the man who leads.' },
]

export default function BrandStory() {
  return (
    <section
      id="about"
      aria-labelledby="story-heading"
      className="relative bg-ink py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        {/* Imagery */}
        <Reveal className="relative lg:col-span-6">
          <div className="relative">
            <SmartImage
              src={IMAGES.story.src}
              alt={IMAGES.story.alt}
              position={IMAGES.story.position}
              className="aspect-[4/5] w-full sm:w-[85%]"
            />
            <div className="absolute -bottom-10 right-0 hidden w-[42%] border-[10px] border-ink sm:block">
              <SmartImage
                src={IMAGES.storyDetail.src}
                alt={IMAGES.storyDetail.alt}
                position={IMAGES.storyDetail.position}
                className="aspect-[3/4] w-full"
              />
            </div>
            <span
              aria-hidden="true"
              className="absolute -left-3 -top-3 hidden h-24 w-24 border-l border-t border-gold/50 sm:block"
            />
          </div>
        </Reveal>

        {/* Copy */}
        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal>
            <p className="eyebrow">Our Story</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              id="story-heading"
              className="mt-6 font-serif text-4xl font-light uppercase leading-[1.05] tracking-[0.05em] text-ivory sm:text-5xl lg:text-6xl"
            >
              Beyond the <em className="text-gold">Ordinary.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <span aria-hidden="true" className="mt-8 block h-px w-16 bg-gold/70" />
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-8 text-base leading-[1.9] text-ivory/75">
              At BENZER, style is more than what you wear. It is an expression of individuality,
              confidence and character. We bring together timeless sophistication and
              contemporary design to redefine modern menswear.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <dl className="mt-12 grid grid-cols-1 gap-8 border-t border-ivory/10 pt-10 sm:grid-cols-3">
              {PILLARS.map((p) => (
                <div key={p.label}>
                  <dt className="font-serif text-xl text-ivory">{p.label}</dt>
                  <dd className="mt-2 text-xs leading-relaxed tracking-wide text-mute">{p.text}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.38}>
            <Button href="#collections" variant="gold" arrow className="mt-12">
              Discover the Collections
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
