// Minimal path-based routing (no router dependency needed for two pages).
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

export const ROUTES = {
  one: `${BASE}/`,
  two: `${BASE}/concept-two`,
}

export const CONCEPTS = [
  { id: 'one', number: '01', name: 'Dark Luxury', href: ROUTES.one },
  { id: 'two', number: '02', name: 'Modern Heritage', href: ROUTES.two },
]

export function getCurrentConcept() {
  const path = window.location.pathname.replace(/\/+$/, '')
  return path === ROUTES.two ? 'two' : 'one'
}
