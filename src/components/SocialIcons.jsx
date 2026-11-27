// Minimal monoline social icons (lucide-react v1 no longer ships brand icons).
const common = {
  width: 16,
  height: 16,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const InstagramIcon = () => (
  <svg {...common}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
)

export const FacebookIcon = () => (
  <svg {...common}>
    <path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V10H6.5v3.5H9V21h3.5v-7.5H15l.5-3.5h-3V7a1 1 0 0 1 1-1H15z" />
  </svg>
)

export const XIcon = () => (
  <svg {...common}>
    <path d="M4 4l16 16M20 4L4 20" />
  </svg>
)

export const YoutubeIcon = () => (
  <svg {...common}>
    <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
    <path d="M10 9.5v5l4.5-2.5z" />
  </svg>
)

export const PinterestIcon = () => (
  <svg {...common}>
    <circle cx="12" cy="12" r="9" />
    <path d="M10.5 20l1.8-7.5M11 13.5c.5 1 1.5 1.5 2.5 1.5 2 0 3.5-1.8 3.5-4.2C17 8.2 14.8 6.5 12 6.5c-3 0-5 2-5 4.5 0 1 .4 2 1 2.5" />
  </svg>
)
