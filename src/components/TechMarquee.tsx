import type { CSSProperties } from "react"
import {
  siClaude,
  siElectron,
  siFastapi,
  siKotlin,
  siLangchain,
  siNestjs,
  siNextdotjs,
  siPython,
  siReact,
  siSupabase,
  siSwift,
  siTailwindcss,
  siTypescript,
} from "simple-icons"

type Item = {
  name: string
  icon?: { hex: string; path: string }
}

const ITEMS: Item[] = [
  { name: "Claude", icon: siClaude },
  { name: "OpenAI" },
  { name: "LangChain", icon: siLangchain },
  { name: "Pinecone" },
  { name: "Python", icon: siPython },
  { name: "FastAPI", icon: siFastapi },
  { name: "TypeScript", icon: siTypescript },
  { name: "Next.js", icon: siNextdotjs },
  { name: "React", icon: siReact },
  { name: "React Native" },
  { name: "Swift", icon: siSwift },
  { name: "Kotlin", icon: siKotlin },
  { name: "NestJS", icon: siNestjs },
  { name: "Supabase", icon: siSupabase },
  { name: "Tailwind CSS", icon: siTailwindcss },
  { name: "Electron", icon: siElectron },
]

function brandHover(hex: string) {
  const n = Number.parseInt(hex, 16)
  const r = (n >> 16) & 255
  const g = (n >> 8) & 255
  const b = n & 255
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance < 0.18 ? "#ffffff" : `#${hex}`
}

function Row({ hidden }: { hidden: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-2 sm:gap-3"
    >
      {ITEMS.map((item) => (
        <li key={`${hidden ? "dup" : "main"}-${item.name}`}>
          <span
            className="tech-chip group/chip inline-flex h-9 shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 text-xs font-medium tracking-wide text-white/45 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.07] hover:text-[var(--brand)] sm:h-10 sm:px-3.5 sm:text-sm"
            style={
              item.icon
                ? ({ "--brand": brandHover(item.icon.hex) } as CSSProperties)
                : undefined
            }
          >
            {item.icon ? (
              <svg
                role="img"
                aria-hidden
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5 shrink-0 fill-current sm:h-4 sm:w-4"
              >
                <path d={item.icon.path} />
              </svg>
            ) : null}
            {item.name}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default function TechMarquee({ className = "" }: { className?: string }) {
  return (
    <div
      className={`tech-marquee marquee-mask relative w-full overflow-hidden ${className}`}
    >
      <div className="tech-marquee-track marquee-track flex w-max items-center gap-2 sm:gap-3">
        <Row hidden={false} />
        <Row hidden />
      </div>
    </div>
  )
}
