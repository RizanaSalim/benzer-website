export default function AnnouncementBar() {
  return (
    <div role="region" aria-label="Announcement" className="bg-espresso">
      <p className="mx-auto flex h-9 max-w-[1440px] items-center justify-center gap-3 px-6 font-grotesk text-[0.625rem] uppercase tracking-[0.35em] text-cream/85 sm:text-[0.6875rem]">
        <span aria-hidden="true" className="text-brass">✦</span>
        <a href="#new-arrivals" className="h-link">
          Discover the New Season Collection
        </a>
        <span aria-hidden="true" className="text-brass">✦</span>
      </p>
    </div>
  )
}
