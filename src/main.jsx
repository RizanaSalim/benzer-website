import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root.jsx'
import { getCurrentConcept } from './routes'

const concept = getCurrentConcept()
// Set before first paint so Concept 02 never flashes Concept 01's dark background.
document.documentElement.dataset.concept = concept
if (concept === 'two') {
  document.title = 'BENZER — Modern Heritage'
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#F5F0E7')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root concept={concept} />
  </StrictMode>,
)
