import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { NAV_LINKS } from '../data/content'
import Wordmark from './ui/Wordmark'

const iconBtn =
  'inline-flex h-10 w-10 items-center justify-center text-ivory/85 transition-colors duration-500 hover:text-gold'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock scroll & close on Escape while the mobile menu is open
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-700 ease-luxe ${
        solid
          ? 'border-b border-ivory/10 bg-ink/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-700 ease-luxe lg:px-10 ${
          scrolled ? 'h-16' : 'h-20'
        }`}
      >
        {/* Mobile: menu toggle */}
        <button
          type="button"
          className={`${iconBtn} -ml-2 lg:hidden`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} strokeWidth={1.25} /> : <Menu size={20} strokeWidth={1.25} />}
        </button>

        <Wordmark className="lg:mr-auto" />

        {/* Desktop links */}
        <ul className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-underline text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-ivory/80 transition-colors duration-500 hover:text-ivory"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 lg:ml-10">
          <button type="button" className={`${iconBtn} hidden sm:inline-flex`} aria-label="Search">
            <Search size={18} strokeWidth={1.25} />
          </button>
          <button type="button" className={`${iconBtn} relative -mr-2`} aria-label="Shopping bag, 0 items">
            <ShoppingBag size={18} strokeWidth={1.25} />
            <span
              aria-hidden="true"
              className="absolute right-1.5 top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gold text-[0.5rem] font-semibold text-ink"
            >
              0
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100dvh - 4rem)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-ivory/10 bg-ink lg:hidden"
          >
            <ul className="flex flex-col px-6 pt-10">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-ivory/10"
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-5 font-serif text-3xl font-light uppercase tracking-[0.08em] text-ivory transition-colors duration-500 hover:text-gold"
                  >
                    {link.label}
                    <span className="font-sans text-[0.625rem] tracking-[0.3em] text-mute">
                      0{i + 1}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="eyebrow px-6 pt-10"
            >
              The Art of Modern Menswear
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
