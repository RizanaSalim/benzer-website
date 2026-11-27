import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { IMAGES, NAV_LINKS } from '../../data/content'
import SmartImage from '../../components/ui/SmartImage'

const ease = [0.22, 1, 0.36, 1]

function MenuIcon({ open }) {
  return (
    <span aria-hidden="true" className="relative block h-3 w-6">
      <span
        className={`absolute left-0 block h-px w-6 bg-current transition-all duration-500 ease-luxe ${
          open ? 'top-1.5 rotate-45' : 'top-0'
        }`}
      />
      <span
        className={`absolute left-0 block h-px bg-current transition-all duration-500 ease-luxe ${
          open ? 'top-1.5 w-6 -rotate-45' : 'top-3 w-4'
        }`}
      />
    </span>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-500 ${
        scrolled || open ? 'border-b border-espresso/10 bg-cream/95 backdrop-blur-md' : 'border-b border-espresso/10 bg-cream'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto grid h-[4.5rem] max-w-[1440px] grid-cols-3 items-center px-5 sm:px-8 lg:px-12"
      >
        <div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="heritage-menu"
            className="group -ml-1 inline-flex items-center gap-3 p-1 text-espresso"
          >
            <MenuIcon open={open} />
            <span className="hidden font-grotesk text-[0.6875rem] uppercase tracking-[0.3em] sm:inline">
              {open ? 'Close' : 'Menu'}
            </span>
            <span className="sr-only sm:hidden">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>

        <a
          href="#home"
          onClick={() => setOpen(false)}
          aria-label="BENZER — back to top"
          className="justify-self-center font-display text-xl font-medium tracking-[0.34em] text-espresso transition-colors duration-500 hover:text-brass-deep sm:text-2xl"
        >
          BENZER
        </a>

        <div className="flex items-center justify-end gap-2 sm:gap-6">
          <button
            type="button"
            aria-label="Search"
            className="inline-flex h-9 w-9 items-center justify-center text-espresso transition-colors duration-500 hover:text-brass-deep"
          >
            <Search size={17} strokeWidth={1.25} />
          </button>
          <button
            type="button"
            aria-label="Shopping bag, 0 items"
            className="h-link font-grotesk text-[0.6875rem] uppercase tracking-[0.3em] text-espresso"
          >
            Bag <span className="text-brass-deep">(0)</span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="heritage-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease }}
            className="absolute inset-x-0 top-full h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-espresso/10 bg-cream"
          >
            <div className="mx-auto grid h-full max-w-[1440px] gap-12 px-5 py-10 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-16">
              <div className="lg:col-span-7">
                <p className="h-eyebrow">Contents</p>
                <ul className="mt-8 border-t border-espresso/15">
                  {NAV_LINKS.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.06, duration: 0.6, ease }}
                      className="border-b border-espresso/15"
                    >
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-baseline gap-6 py-5 sm:py-6"
                      >
                        <span className="font-grotesk text-[0.625rem] tracking-[0.3em] text-brass-deep">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="font-display text-4xl text-espresso transition-all duration-500 ease-luxe group-hover:translate-x-2 group-hover:italic sm:text-5xl">
                          {link.label}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.8 }}
                className="hidden lg:col-span-4 lg:col-start-9 lg:block"
              >
                <SmartImage
                  tone="light"
                  src={IMAGES.statement.src}
                  alt=""
                  position="48% center"
                  className="h-arch aspect-[4/5] w-full"
                />
                <p className="mt-5 font-display text-lg italic text-espresso/80">
                  The Art of Modern Menswear
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
