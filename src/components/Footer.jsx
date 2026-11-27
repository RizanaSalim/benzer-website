import { ArrowUp } from 'lucide-react'
import { COLLECTIONS, NAV_LINKS } from '../data/content'
import Wordmark from './ui/Wordmark'
import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  XIcon,
  YoutubeIcon,
} from './SocialIcons'

const SOCIALS = [
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'X', Icon: XIcon },
  { label: 'Pinterest', Icon: PinterestIcon },
  { label: 'YouTube', Icon: YoutubeIcon },
]

const CLIENT_CARE = ['Size Guide', 'Shipping & Returns', 'Care Instructions', 'FAQs']

function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className="text-[0.625rem] font-medium uppercase tracking-[0.35em] text-gold">{title}</h3>
      <ul className="mt-6 space-y-3.5">{children}</ul>
    </div>
  )
}

const linkClass =
  'text-sm text-ivory/65 transition-colors duration-500 hover:text-ivory'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ivory/10 bg-ink">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-20 lg:px-10 lg:pt-24">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Wordmark className="text-3xl" />
            <p className="eyebrow mt-5">The Art of Modern Menswear</p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-mute">
              Premium contemporary menswear for the modern Indian man.
            </p>

            <ul className="mt-8 flex gap-2" aria-label="Social media (placeholders)">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    aria-label={`${social.label} (placeholder)`}
                    className="inline-flex h-10 w-10 items-center justify-center border border-ivory/15 text-ivory/70 transition-all duration-500 hover:border-gold hover:text-gold"
                  >
                    <social.Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8 lg:pl-10">
            <FooterColumn title="Quick Links">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </FooterColumn>

            <FooterColumn title="Collections">
              {COLLECTIONS.map((c) => (
                <li key={c.id}>
                  <a href="#collections" className={linkClass}>
                    {c.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#new-arrivals" className={linkClass}>
                  New Arrivals
                </a>
              </li>
            </FooterColumn>

            <FooterColumn title="Client Care">
              {CLIENT_CARE.map((item) => (
                <li key={item}>
                  <span className="text-sm text-ivory/40">{item}</span>
                </li>
              ))}
            </FooterColumn>
          </div>
        </div>

        <div className="mt-20 flex flex-col-reverse items-start justify-between gap-6 border-t border-ivory/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs tracking-wide text-mute">
            &copy; {year} BENZER. All rights reserved. · Demo website for presentation purposes.
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-3 text-[0.625rem] uppercase tracking-[0.35em] text-ivory/70 transition-colors duration-500 hover:text-gold"
          >
            Back to top
            <span className="inline-flex h-8 w-8 items-center justify-center border border-ivory/15 transition-colors duration-500 group-hover:border-gold">
              <ArrowUp size={12} strokeWidth={1.5} aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
