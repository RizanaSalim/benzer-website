export default function AnnouncementBar() {
  return (
    <div
      role="region"
      aria-label="Announcement"
      className="relative z-50 border-b border-gold/15 bg-ink"
    >
      <p className="mx-auto flex h-9 max-w-7xl items-center justify-center gap-4 px-6 text-center text-[0.625rem] font-medium uppercase tracking-[0.42em] text-gold sm:text-[0.6875rem]">
        <span aria-hidden="true" className="hidden h-px w-8 bg-gold/40 sm:block" />
        <a href="#new-arrivals" className="transition-colors duration-500 hover:text-ivory">
          Discover the New Season Collection
        </a>
        <span aria-hidden="true" className="hidden h-px w-8 bg-gold/40 sm:block" />
      </p>
    </div>
  )
}
