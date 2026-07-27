// Pure-CSS infinite ticker — no client JS needed, so it stays a server component.

type Props = {
  items: string[]
  /** Seconds for one full loop. Lower is faster. */
  duration?: number
  reverse?: boolean
  className?: string
}

export default function Marquee({
  items,
  duration = 38,
  reverse = false,
  className = "",
}: Props) {
  if (items.length === 0) return null

  return (
    <div className={`marquee-mask relative w-full overflow-hidden ${className}`}>
      <div
        className="marquee-track flex w-max items-center gap-3 sm:gap-4"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {/* rendered twice so the -50% translate loops seamlessly */}
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center gap-3 sm:gap-4"
          >
            {items.map((item) => (
              <li
                key={`${copy}-${item}`}
                className="flex shrink-0 items-center gap-3 whitespace-nowrap text-xs font-medium tracking-wide text-white/45 sm:text-sm"
              >
                <span className="h-1 w-1 shrink-0 rounded-full bg-cyan-400/50" />
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
