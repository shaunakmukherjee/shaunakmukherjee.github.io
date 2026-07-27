"use client"

import { motion, useReducedMotion } from "framer-motion"

type Tool = {
  name: string
  tag: string
  icon: string
  description: string
  /** Trimmed copy so the row never wraps awkwardly on small screens. */
  shortDescription: string
  href: string
  cta: string
  shortCta: string
  /** Pre-composed Tailwind classes keep the accent colours statically analysable. */
  shell: string
  ring: string
  chip: string
  nameColor: string
  button: string
}

const tools: Tool[] = [
  {
    name: "Scoply",
    tag: "beta access",
    icon: "⚡",
    description:
      "AI that flags scope creep in client calls. Protect your velocity and margins.",
    shortDescription: "AI that flags scope creep in client calls.",
    href: "https://scoply-v2.vercel.app/",
    cta: "Try for Free",
    shortCta: "Try free",
    shell:
      "border-cyan-400/30 bg-gradient-to-r from-cyan-950/40 via-slate-900/60 to-cyan-950/40 hover:border-cyan-400/55",
    ring: "bg-cyan-500/20 text-cyan-300",
    chip: "border-cyan-400/25 bg-cyan-400/10 text-cyan-300/90",
    nameColor: "text-cyan-200",
    button:
      "bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/35 hover:text-cyan-100",
  },
  {
    name: "RepoDrift",
    tag: "open source",
    icon: "🔍",
    description: "Zero-config CLI, Git repository health analyzer.",
    shortDescription: "Zero-config Git health analyzer.",
    href: "https://github.com/shaunakmukherjee/repo-drift",
    cta: "Star on GitHub",
    shortCta: "Star",
    shell:
      "border-indigo-400/20 bg-gradient-to-r from-indigo-950/30 via-slate-900/50 to-indigo-950/30 hover:border-indigo-400/45",
    ring: "bg-indigo-500/20 text-indigo-300",
    chip: "border-indigo-400/25 bg-indigo-400/10 text-indigo-300/90",
    nameColor: "text-indigo-200",
    button:
      "bg-indigo-500/15 text-indigo-300 hover:bg-indigo-500/30 hover:text-indigo-100",
  },
]

export default function ToolCallouts() {
  const reduce = useReducedMotion()

  return (
    <div className="relative z-10 mx-auto max-w-5xl space-y-2.5 pt-6 sm:pt-8">
      {tools.map((tool, index) => (
        <motion.div
          key={tool.name}
          initial={reduce ? undefined : { opacity: 0, y: -14 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: 0.15 + index * 0.12,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          whileHover={reduce ? undefined : { y: -2 }}
          className={`sheen relative overflow-hidden rounded-xl border p-3 backdrop-blur-sm transition-colors sm:rounded-2xl sm:p-4 ${tool.shell}`}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
              <motion.span
                aria-hidden
                animate={reduce ? undefined : { y: [0, -3, 0] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.4,
                }}
                className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm sm:h-9 sm:w-9 sm:text-base ${tool.ring}`}
              >
                {tool.icon}
              </motion.span>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span
                    className={`text-sm font-semibold tracking-tight sm:text-base ${tool.nameColor}`}
                  >
                    {tool.name}
                  </span>
                  <span
                    className={`rounded-full border px-1.5 py-px text-[9px] font-medium uppercase tracking-wider sm:text-[10px] ${tool.chip}`}
                  >
                    {tool.tag}
                  </span>
                </div>
                <p className="mt-0.5 hidden text-sm text-white/65 sm:block">
                  {tool.description}
                </p>
              </div>
            </div>

            <motion.a
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduce ? undefined : { scale: 1.04 }}
              whileTap={reduce ? undefined : { scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 24 }}
              className={`group/cta relative z-10 inline-flex shrink-0 items-center gap-1 rounded-lg px-3 py-2 text-xs font-semibold transition-colors sm:rounded-xl sm:px-5 sm:py-2.5 sm:text-sm ${tool.button}`}
            >
              <span className="sm:hidden">{tool.shortCta}</span>
              <span className="hidden sm:inline">{tool.cta}</span>
              <span
                aria-hidden
                className="inline-block transition-transform duration-300 group-hover/cta:translate-x-0.5"
              >
                →
              </span>
            </motion.a>
          </div>

          {/* Mobile-only description, kept out of the flex row so it aligns left */}
          <p className="mt-2 text-[11px] leading-relaxed text-white/60 sm:hidden">
            {tool.shortDescription}
          </p>
        </motion.div>
      ))}
    </div>
  )
}
