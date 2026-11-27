import { IMAGES } from '../../data/content'
import Reveal from '../../components/ui/Reveal'
import SmartImage from '../../components/ui/SmartImage'

export default function BrandStatement() {
  return (
    <section aria-label="Brand statement" className="relative overflow-hidden bg-espresso py-24 text-cream sm:py-32">
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12">
        <Reveal className="mx-auto w-[70%] max-w-sm lg:col-span-4 lg:w-full">
          <div className="relative">
            <SmartImage
              tone="light"
              src={IMAGES.statement.src}
              alt="Man in an embroidered ivory bandhgala"
              position="48% center"
              className="h-arch aspect-[3/4] w-full"
              imgClassName="sepia-[0.15]"
            />
            <span aria-hidden="true" className="h-arch pointer-events-none absolute -inset-3 border border-brass/50" />
          </div>
        </Reveal>

        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal>
            <div aria-hidden="true" className="flex items-center gap-4 text-brass">
              <span className="h-px w-14 bg-brass/70" />
              <span className="text-xs">✦</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="mt-10">
              <p className="font-display text-4xl leading-[1.12] sm:text-5xl xl:text-[4rem]">
                Style is not about following trends.{' '}
                <em className="text-brass">It&rsquo;s about defining your own.</em>
              </p>
              <footer className="mt-10 font-grotesk text-[0.6875rem] uppercase tracking-[0.45em] text-cream/60">
                — The House of Benzer
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
