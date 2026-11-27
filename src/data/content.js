// Central content & image configuration for the BENZER landing page.
// All products and prices are illustrative demo content only.

/*
 * Images are served locally from `public/images/`.
 * Recommended sources (JPG, sRGB, ~80% quality):
 *   hero.jpg             landscape, ≥ 2400px wide   (full-bleed, subject in upper-centre)
 *   brand-story.jpg      portrait 4:5, ≥ 1400px tall
 *   formal-edit.jpg      portrait 3:4, ≥ 1600px tall (tall feature tile)
 *   everyday-luxury.jpg  3:4 or 4:5, ≥ 1200px      (shown portrait on mobile, landscape on tablet)
 *   occasion-wear.jpg    3:4 or 4:5, ≥ 1200px      (also used, darkened, behind the brand statement)
 *   product-1…4.jpg      portrait 3:4, ≥ 1200px tall (product-1 also used as the brand-story detail inset)
 * `position` is the CSS object-position used when the image is cropped.
 * If a file is missing or fails to load, SmartImage shows the branded fallback panel.
 */
const local = (file) => `${import.meta.env.BASE_URL}images/${file}`

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'New Arrivals', href: '#new-arrivals' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const IMAGES = {
  hero: {
    src: local('hero.jpg'),
    alt: 'Model in a sophisticated dark tailored outfit',
    position: 'center 25%',
  },
  story: {
    src: local('brand-story.jpg'),
    alt: 'Editorial portrait of a man in contemporary formalwear',
    position: 'center 20%',
  },
  storyDetail: {
    src: local('product-1.jpg'),
    alt: 'Detail of a premium tailored blazer',
    position: 'center 35%',
  },
  statement: {
    src: local('occasion-wear.jpg'),
    alt: '', // decorative background
    position: 'center 35%',
  },
}

export const COLLECTIONS = [
  {
    id: 'formal',
    index: '01',
    title: 'Formal Edit',
    description: 'Tailored suits, formal shirts and refined silhouettes.',
    cta: 'Explore Formal',
    image: local('formal-edit.jpg'),
    position: 'center 25%',
    alt: 'Man in a tailored dark suit with a crisp formal shirt',
  },
  {
    id: 'casual',
    index: '02',
    title: 'Everyday Luxury',
    description: 'Premium casual shirts, trousers and elevated essentials.',
    cta: 'Explore Casual',
    image: local('everyday-luxury.jpg'),
    position: 'center 30%',
    alt: 'Man in elevated casual menswear in neutral tones',
  },
  {
    id: 'occasion',
    index: '03',
    title: 'Occasion Wear',
    description: 'Statement outfits for celebrations and special occasions.',
    cta: 'Explore Occasion',
    image: local('occasion-wear.jpg'),
    position: 'center 30%',
    alt: 'Man in a sophisticated evening and occasion outfit',
  },
]

export const PRODUCTS = [
  {
    id: 'executive-blazer',
    name: 'The Executive Blazer',
    category: 'Formal Edit',
    price: 8999,
    tag: 'New',
    image: local('product-1.jpg'),
    position: 'center 30%',
    alt: 'Premium tailored executive blazer',
  },
  {
    id: 'oxford-shirt',
    name: 'Signature Oxford Shirt',
    category: 'Everyday Luxury',
    price: 2499,
    image: local('product-2.jpg'),
    position: 'center 30%',
    alt: 'Crisp signature Oxford shirt',
  },
  {
    id: 'tailored-trousers',
    name: 'Essential Tailored Trousers',
    category: 'Everyday Luxury',
    price: 3499,
    image: local('product-3.jpg'),
    position: '75% center', // crops out the dark strip on the image's left edge
    alt: 'Essential tailored trousers',
  },
  {
    id: 'evening-ensemble',
    name: 'The Evening Ensemble',
    category: 'Occasion Wear',
    price: 6999,
    tag: 'Limited',
    image: local('product-4.jpg'),
    position: 'center 25%',
    alt: 'Man in a refined evening ensemble',
  },
]

export const formatINR = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
