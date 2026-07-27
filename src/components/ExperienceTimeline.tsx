"use client"

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion"
import { useRef } from "react"

export type Role = {
  title: string
  period: string
  body: string
  /** Tailwind background class for the timeline node. */
  dot: string
}

/**
 * Experience timeline whose spine draws itself downward as the section scrolls
 * through the viewport, with each role easing in from the left.
 */
export default function ExperienceTimeline({ roles }: { roles: Role[] }) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 55%"],
  })
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div ref={ref} className="relative mt-10 space-y-10 sm:space-y-12">
      {/* static rail */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 top-0 w-px bg-white/10"
      />
      {/* progress rail that fills on scroll */}
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-0 top-0 w-px origin-top bg-gradient-to-b from-cyan-400 via-indigo-400 to-pink-400"
        style={reduce ? { scaleY: 1 } : { scaleY }}
      />

      {roles.map((role, index) => (
        <motion.div
          key={role.title}
          initial={reduce ? undefined : { opacity: 0, x: -18 }}
          whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="group relative pl-6 sm:pl-8"
        >
          <motion.span
            aria-hidden
            className={`absolute -left-[5px] top-2 h-[11px] w-[11px] rounded-full ring-4 ring-[hsl(var(--bg))] ${role.dot}`}
            initial={reduce ? undefined : { scale: 0 }}
            whileInView={reduce ? undefined : { scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              type: "spring",
              stiffness: 420,
              damping: 18,
              delay: 0.12,
            }}
          />
          <h3 className="text-lg font-bold text-white transition-colors group-hover:text-cyan-200 sm:text-xl">
            {role.title}
          </h3>
          <p className="mt-1 text-xs text-white/50 sm:text-sm">{role.period}</p>
          <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
            {role.body}
          </p>
          {index === 0 && (
            <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-2.5 py-1 text-[11px] font-medium text-cyan-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse-ring" />
              Current
            </span>
          )}
        </motion.div>
      ))}
    </div>
  )
}
