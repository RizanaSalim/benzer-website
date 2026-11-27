import { Suspense, lazy } from 'react'
import App from './App.jsx'

// Concept 02 is code-split so Concept 01 ships exactly as before.
const ConceptTwo = lazy(() => import('./concept-two/ConceptTwo.jsx'))

/** Picks the design concept for the current path. */
export default function Root({ concept }) {
  if (concept === 'two') {
    return (
      <Suspense fallback={<div className="min-h-screen bg-cream" />}>
        <ConceptTwo />
      </Suspense>
    )
  }
  return <App />
}
