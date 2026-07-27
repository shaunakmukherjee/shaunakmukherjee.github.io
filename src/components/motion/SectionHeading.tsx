import AnimatedHeading from "@/components/motion/AnimatedHeading"
import { Reveal } from "@/components/motion/Reveal"

type Props = {
  /** Small uppercase kicker above the title. */
  eyebrow?: string
  title: string
  /** Words in `title` rendered in the accent gradient. */
  highlight?: string[]
  subtitle?: string
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  className = "",
}: Props) {
  return (
    <div className={className}>
      {eyebrow && (
        <Reveal direction="none" amount={0.6}>
          <p className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
            <span
              aria-hidden
              className="h-px w-6 bg-gradient-to-r from-cyan-400/80 to-transparent"
            />
            {eyebrow}
          </p>
        </Reveal>
      )}

      <AnimatedHeading
        as="h2"
        text={title}
        highlight={highlight}
        amount={0.4}
        className={`text-2xl font-semibold tracking-tight sm:text-3xl ${eyebrow ? "mt-3" : ""}`}
      />

      {subtitle && (
        <Reveal delay={0.12} amount={0.4}>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/60 sm:text-base">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
