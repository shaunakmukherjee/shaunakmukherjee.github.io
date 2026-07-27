"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import { Fragment } from "react"

type HeadingTag = "h1" | "h2" | "h3" | "span" | "p"

type Props = {
  text: string
  className?: string
  as?: HeadingTag
  /** Words rendered in the animated accent gradient, matched case-insensitively. */
  highlight?: string[]
  delay?: number
  /** Per-word stagger, in seconds. */
  stagger?: number
  amount?: number
}

const word: Variants = {
  hidden: { opacity: 0, y: "0.6em", rotateX: -55 },
  show: {
    opacity: 1,
    y: "0em",
    rotateX: 0,
    transition: { duration: 0.68, ease: [0.16, 0.84, 0.28, 1] },
  },
}

/**
 * Reveals a heading word by word as it scrolls into view. Each word sits in its
 * own overflow-clipped span so the text appears to rise off a baseline.
 */
export default function AnimatedHeading({
  text,
  className,
  as = "h1",
  highlight = [],
  delay = 0,
  stagger = 0.055,
  amount = 0.5,
}: Props) {
  const reduce = useReducedMotion()
  const words = text.split(" ")
  const accents = new Set(highlight.map((w) => w.toLowerCase()))

  const isAccent = (w: string) =>
    accents.has(w.toLowerCase().replace(/[^a-z0-9&/'’-]/gi, ""))

  if (reduce) {
    const Plain = as
    return (
      <Plain className={className}>
        {words.map((w, i) => (
          <span
            key={`${w}-${i}`}
            className={isAccent(w) ? "animate-gradient" : undefined}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </Plain>
    )
  }

  const Tag = motion[as]

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      style={{ perspective: 800 }}
    >
      {words.map((w, i) => (
        <Fragment key={`${w}-${i}`}>
          {/* clip box so the word appears to rise off its baseline; the extra
              bottom padding keeps descenders from being shaved off */}
          <span className="inline-block overflow-hidden pb-[0.15em] align-bottom">
            <motion.span
              variants={word}
              className={`inline-block ${isAccent(w) ? "animate-gradient" : ""}`}
            >
              {w}
            </motion.span>
          </span>
          {/* real space between clip boxes so the heading still wraps */}
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  )
}
