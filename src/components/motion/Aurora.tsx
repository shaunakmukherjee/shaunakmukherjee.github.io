"use client"

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"

/**
 * Ambient drifting gradient field behind the hero. Purely decorative:
 * pointer-events are off and it parallaxes slowly out of view on scroll.
 */
export default function Aurora() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 900], [0, 220])
  const opacity = useTransform(scrollY, [0, 700], [1, 0.25])

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 -top-40 z-0 h-[680px] overflow-hidden"
      style={reduce ? undefined : { y, opacity }}
    >
      <div className="aurora-blob absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[110px] sm:h-[520px] sm:w-[980px]" />
      <div
        className="aurora-blob absolute left-[12%] top-24 h-[300px] w-[420px] rounded-full bg-indigo-500/14 blur-[100px]"
        style={{ animationDelay: "-6s", animationDuration: "22s" }}
      />
      <div
        className="aurora-blob absolute right-[8%] top-10 h-[280px] w-[380px] rounded-full bg-pink-500/12 blur-[100px]"
        style={{ animationDelay: "-12s", animationDuration: "26s" }}
      />
      {/* faint grid to give the glow something to sit against */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(60%_50%_at_50%_35%,#000,transparent)]" />
    </motion.div>
  )
}
