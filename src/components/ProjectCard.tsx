"use client"

import Image from "next/image"
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion"
import type { PointerEvent } from "react"

type Props = {
  title: string
  description: string
  outcome: string
  stack: string[]
  image: string
  link: string
  /** Stagger index, used to offset the scroll-in animation. */
  index?: number
}

const getTechBadgeColor = (tech: string): string => {
  // AI/ML stack
  if (['RAG', 'Vector Search', 'Embeddings', 'Vector Database', 'LLMs', 'AI Image Generation', 'Claude API', 'AI Agent', 'AI Coaching', 'Multi-Agent Pipelines', 'Speech-to-Text'].includes(tech)) {
    return 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
  }
  // Frontend
  if (['React', 'Next.js', 'TypeScript', 'Tailwind'].includes(tech)) {
    return 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
  }
  // Backend
  if (['Python', 'FastAPI', 'Supabase', 'RLS'].includes(tech)) {
    return 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
  }
  // Mobile
  if (tech === 'Mobile App') {
    return 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
  }
  // Other
  return 'bg-white/10 text-white/80 border border-white/20'
}

const SPRING = { stiffness: 220, damping: 22, mass: 0.4 }
const MAX_TILT = 7

export default function ProjectCard({
  title,
  description,
  outcome,
  stack,
  image,
  link,
  index = 0,
}: Props) {
  const reduce = useReducedMotion()
  const isLive = Boolean(link) && link !== "#"

  // `useSpring(number, …)` is the imperative form — a MotionValue source would
  // make these passive followers that ignore .set().
  const rotateX = useSpring(0, SPRING)
  const rotateY = useSpring(0, SPRING)
  const spotX = useMotionValue(50)
  const spotY = useMotionValue(50)
  const spotlight = useMotionTemplate`radial-gradient(340px circle at ${spotX}% ${spotY}%, rgba(56,189,248,0.14), transparent 65%)`

  const handleMove = (event: PointerEvent<HTMLElement>) => {
    if (reduce || event.pointerType !== "mouse") return
    const rect = event.currentTarget.getBoundingClientRect()
    const relX = (event.clientX - rect.left) / rect.width
    const relY = (event.clientY - rect.top) / rect.height
    spotX.set(relX * 100)
    spotY.set(relY * 100)
    rotateY.set((relX - 0.5) * MAX_TILT * 2)
    rotateX.set((0.5 - relY) * MAX_TILT * 2)
  }

  const reset = () => {
    rotateX.set(0)
    rotateY.set(0)
    spotX.set(50)
    spotY.set(50)
  }

  // An anchor without an href is inert and non-focusable, which is what we
  // want for the cards whose project isn't publicly linkable.
  const linkProps = isLive
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : {}

  return (
    <motion.div
      className="[perspective:1200px]"
      initial={reduce ? undefined : { opacity: 0, y: 34 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: Math.min(index, 3) * 0.08,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      <motion.a
        {...linkProps}
        onPointerMove={handleMove}
        onPointerLeave={reset}
        whileHover={reduce ? undefined : { y: -7 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        style={
          reduce
            ? undefined
            : { rotateX, rotateY, transformStyle: "preserve-3d" }
        }
        className="group relative block h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-colors hover:border-cyan-400/30"
      >
        {/* pointer-tracking spotlight */}
        {!reduce && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: spotlight }}
          />
        )}

        {/* Image */}
        <div className="relative h-44 w-full overflow-hidden sm:h-48">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.07]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
          {/* shine sweep on hover */}
          <span className="sheen absolute inset-0" />
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="text-lg font-semibold transition-colors group-hover:text-cyan-200 sm:text-xl">
              {title}
            </h3>
            {stack.includes("Mobile App") && (
              <span className="inline-block rounded-full bg-indigo-500/20 px-2.5 py-0.5 text-[11px] font-medium text-indigo-300">
                Mobile App
              </span>
            )}
          </div>

          <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
            {description}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-white/50">{outcome}</p>

          <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
            {stack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={reduce ? undefined : { opacity: 0, scale: 0.86 }}
                whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.32, delay: 0.1 + i * 0.045 }}
                whileHover={reduce ? undefined : { scale: 1.07 }}
                className={`rounded-full px-2.5 py-1 text-[11px] font-medium sm:px-3 sm:text-xs ${getTechBadgeColor(tech)}`}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {isLive && (
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400/70 transition-colors group-hover:text-cyan-300">
              View project
              <span
                aria-hidden
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          )}
        </div>
      </motion.a>
    </motion.div>
  )
}
