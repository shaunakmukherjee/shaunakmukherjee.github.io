"use client"

import { motion, useScroll, useSpring } from "framer-motion"

/**
 * Thin reading-progress bar pinned under the navbar. Spring-smoothed so it
 * glides rather than snapping frame-to-frame on fast scrolls.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  })

  return (
    <motion.div
      aria-hidden
      className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400"
      style={{ scaleX }}
    />
  )
}
