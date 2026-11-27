import { COLLECTIONS, NAV_LINKS } from '../../data/content'
import { FacebookIcon, InstagramIcon, PinterestIcon, XIcon, YoutubeIcon } from '../../components/SocialIcons'

const SOCIALS = [
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'X', Icon: XIcon },
  { label: 'Pinterest', Icon: PinterestIcon },
  { label: 'YouTube', Icon: YoutubeIcon },
]
const CLIENT_CARE = ['Size Guide', 'Shipping & Returns', 'Care Instructions', 'FAQs']

function Column({ title, children }) {
  return (
    <div>
      <h3 className="font-display text-sm italic text-brass">{title}</h3>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  )
}

const link = 'h-link font-grotesk text-sm font-light text-cream/75 hover:text-cream'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="overflow-hidden bg-espresso text-cream">
      <div className="mx-auto max-w-[1440px] px-5 pt-20 sm:px-8 lg:px-12">
        <div className="grid gap-14 border-b border-cream/15 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-display text-2xl tracking-[0.34em]">BENZER</p>
            <p className="mt-4 font-grotesk text-[0.6875rem] uppercase tracking-[0.35em] text-brass">
              The Art of Modern Menswear
            </p>
            <p className="mt-6 max-w-xs font-grotesk text-sm font-light leading-relaxed text-cream/65">
              Premium contemporary menswear for the modern Indian man.
            </p>
            <ul className="mt-8 flex gap-5" aria-label="Social media (placeholders)">
              {SOCIALS.map(({ label, Icon }) => (
                <li key={label}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    aria-label={`${label} (placeholder)`}
                    className="inline-flex text-cream/60 transition-colors duration-500 hover:text-brass"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7 lg:col-start-6">
            <Column title="Quick Links">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={link}>{l.label}</a>
                </li>
              ))}
            </Column>
            <Column title="Collections">
              {COLLECTIONS.map((c) => (
                <li key={c.id}>
                  <a href="#collections" className={link}>{c.title}</a>
                </li>
              ))}
              <li>
                <a href="#new-arrivals" className={link}>New Arrivals</a>
              </li>
            </Column>
            <Column title="Client Care">
              {CLIENT_CARE.map((item) => (
                <li key={item} className="font-grotesk text-sm font-light text-cream/40">{item}</li>
              ))}
            </Column>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 py-8 font-grotesk text-xs text-cream/55 sm:flex-row sm:items-center">
          <p>&copy; {year} BENZER. All rights reserved. · Demo website for presentation purposes.</p>
          <a href="#home" className="h-link uppercase tracking-[0.3em] text-cream/75 hover:text-cream">
            Back to top ↑
          </a>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="-mb-[0.18em] select-none text-center font-display text-[24vw] leading-none tracking-[0.04em] text-cream/[0.06]"
      >
        BENZER
      </p>
    </footer>
  )
}
