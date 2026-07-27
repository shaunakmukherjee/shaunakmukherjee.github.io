"use client"

import { motion, useReducedMotion, type Transition, type Variants } from "framer-motion"
import type { ReactNode } from "react"

/** Tags these primitives can render as — kept narrow so `motion[tag]` stays typed. */
export type MotionTag =
  | "div"
  | "span"
  | "section"
  | "article"
  | "ul"
  | "li"
  | "p"
  | "h2"
  | "h3"

type Direction = "up" | "down" | "left" | "right" | "none"

const OFFSET = 28

function offsetFor(direction: Direction, distance: number) {
  switch (direction) {
    case "up":
      return { y: distance }
    case "down":
      return { y: -distance }
    case "left":
      return { x: distance }
    case "right":
      return { x: -distance }
    default:
      return {}
  }
}

const EASE: Transition = {
  duration: 0.62,
  ease: [0.21, 0.47, 0.32, 0.98],
}

type RevealProps = {
  children: ReactNode
  className?: string
  /** Direction the element travels *from*. */
  direction?: Direction
  distance?: number
  delay?: number
  /** Fraction of the element that must be visible before it animates. */
  amount?: number
  blur?: boolean
  as?: MotionTag
  id?: string
}

/**
 * Fades + slides its children in the first time they scroll into view.
 * Collapses to a plain element when the visitor prefers reduced motion.
 */
export function Reveal({
  children,
  className,
  direction = "up",
  distance = OFFSET,
  delay = 0,
  amount = 0.25,
  blur = true,
  as = "div",
  id,
}: RevealProps) {
  const reduce = useReducedMotion()
  const Tag = motion[as]

  if (reduce) {
    const Plain = as
    return (
      <Plain className={className} id={id}>
        {children}
      </Plain>
    )
  }

  return (
    <Tag
      id={id}
      className={className}
      initial={{
        opacity: 0,
        ...offsetFor(direction, distance),
        ...(blur ? { filter: "blur(6px)" } : {}),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        ...(blur
          ? // drop the filter entirely once settled — a lingering `blur(0px)`
            // still creates a containing block and kills child backdrop-blur
            { filter: "blur(0px)", transitionEnd: { filter: "none" } }
          : {}),
      }}
      viewport={{ once: true, amount }}
      transition={{ ...EASE, delay }}
    >
      {children}
    </Tag>
  )
}

type StaggerProps = {
  children: ReactNode
  className?: string
  /** Gap between each child's start time, in seconds. */
  stagger?: number
  delay?: number
  amount?: number
  as?: MotionTag
  id?: string
}

/**
 * Parent for `StaggerItem` children — drives them through variant propagation
 * so each child eases in a beat after the last.
 */
export function Stagger({
  children,
  className,
  stagger = 0.09,
  delay = 0.05,
  amount = 0.15,
  as = "div",
  id,
}: StaggerProps) {
  const reduce = useReducedMotion()
  const Tag = motion[as]

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : stagger,
        delayChildren: reduce ? 0 : delay,
      },
    },
  }

  return (
    <Tag
      id={id}
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </Tag>
  )
}

type StaggerItemProps = {
  children: ReactNode
  className?: string
  direction?: Direction
  distance?: number
  as?: MotionTag
  /** Adds a lift on hover (pointer devices) and a press-in on tap. */
  interactive?: boolean
}

export function StaggerItem({
  children,
  className,
  direction = "up",
  distance = 22,
  as = "div",
  interactive = false,
}: StaggerItemProps) {
  const reduce = useReducedMotion()
  const Tag = motion[as]

  const item: Variants = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, ...offsetFor(direction, distance) },
        show: { opacity: 1, x: 0, y: 0, transition: EASE },
      }

  return (
    <Tag
      className={className}
      variants={item}
      whileHover={interactive && !reduce ? { y: -5 } : undefined}
      whileTap={interactive && !reduce ? { scale: 0.985 } : undefined}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
    >
      {children}
    </Tag>
  )
}
