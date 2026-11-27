import AnnouncementBar from './components/AnnouncementBar'
import BrandStatement from './components/BrandStatement'
import BrandStory from './components/BrandStory'
import Collections from './components/Collections'
import ConceptSwitcher from './components/ConceptSwitcher'
import FeaturedProducts from './components/FeaturedProducts'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'

function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[70] bg-gold px-4 py-2 text-xs uppercase tracking-[0.2em] text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
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
      <ConceptSwitcher current="one" />
    </>
  )
}

export default App
