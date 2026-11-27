import ConceptSwitcher from '../components/ConceptSwitcher'
import AnnouncementBar from './components/AnnouncementBar'
import BrandStatement from './components/BrandStatement'
import BrandStory from './components/BrandStory'
import Collections from './components/Collections'
import FeaturedProducts from './components/FeaturedProducts'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'

/** Concept 02 — Modern Heritage. Served at /concept-two. */
export default function ConceptTwo() {
  return (
    <div className="bg-cream font-grotesk text-espresso">
      <a
        href="#main"
        className="sr-only z-[70] bg-espresso px-4 py-2 text-xs uppercase tracking-[0.2em] text-cream focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <AnnouncementBar />
      <Navbar />
      <main id="main">
        <Hero />
        <BrandStory />
        <Collections />
        <FeaturedProducts />
        <BrandStatement />
        <Newsletter />
      </main>
      <Footer />
      <ConceptSwitcher current="two" />
    </div>
  )
}
