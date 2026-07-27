"use client"

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion"
import type { PointerEvent, ReactNode } from "react"

type Props = {
  href: string
  children: ReactNode
  className?: string
  /** `primary` gets the animated gradient fill, `ghost` the hairline border. */
  variant?: "primary" | "ghost"
  external?: boolean
  /** How far the label drifts toward the cursor, in px. */
  strength?: number
  fullWidthOnMobile?: boolean
}

const BASE =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl font-semibold transition-colors"

const VARIANTS = {
  primary:
    "animate-gradient-bg px-6 py-3.5 text-slate-950 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/35 sm:px-7",
  ghost:
    "border border-white/12 px-6 py-3 font-medium text-white/90 hover:border-white/30 hover:bg-white/[0.07]",
}

/**
 * Call-to-action link that leans toward the cursor, lifts on hover and shows a
 * spotlight that tracks the pointer. Falls back to a plain link for
 * reduced-motion visitors and behaves as a normal tap target on touch.
 */
export default function MagneticLink({
  href,
  children,
  className = "",
  variant = "ghost",
  external = false,
  strength = 5,
  fullWidthOnMobile = false,
}: Props) {
  const reduce = useReducedMotion()

  // `useSpring(number, …)` gives an imperatively-driven spring; passing a
  // MotionValue instead would make it a passive follower that ignores .set().
  const x = useSpring(0, { stiffness: 260, damping: 22 })
  const y = useSpring(0, { stiffness: 260, damping: 22 })
  const spotX = useMotionValue(50)
  const spotY = useMotionValue(50)
  const spotlight = useMotionTemplate`radial-gradient(140px circle at ${spotX}% ${spotY}%, rgba(255,255,255,0.22), transparent 70%)`

  const handleMove = (event: PointerEvent<HTMLAnchorElement>) => {
    if (reduce || event.pointerType !== "mouse") return
    const rect = event.currentTarget.getBoundingClientRect()
    const relX = (event.clientX - rect.left) / rect.width
    const relY = (event.clientY - rect.top) / rect.height
    spotX.set(relX * 100)
    spotY.set(relY * 100)
    x.set((relX - 0.5) * strength * 2)
    y.set((relY - 0.5) * strength * 2)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
    spotX.set(50)
    spotY.set(50)
  }

  const width = fullWidthOnMobile ? "w-full sm:w-auto" : ""

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      whileHover={reduce ? undefined : { y: -2, scale: 1.015 }}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 380, damping: 25 }}
      className={`${BASE} ${VARIANTS[variant]} ${width} ${className}`}
    >
      {/* pointer-tracking spotlight */}
      {!reduce && (
        <motion.span
          aria-hidden
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlight }}
        />
      )}
      <motion.span
        className="relative z-10 inline-flex items-center gap-2"
        style={reduce ? undefined : { x, y }}
      >
        {children}
        <span
          aria-hidden
          className="inline-block transition-transform duration-300 will-change-transform group-hover:translate-x-1"
        >
          →
        </span>
      </motion.span>
    </motion.a>
  )
}
