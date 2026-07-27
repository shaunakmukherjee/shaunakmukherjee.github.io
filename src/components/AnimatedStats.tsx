"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { stats } from "@/data/stats"

function formatValue(
  value: number,
  prefix: string,
  suffix: string,
  decimals: number,
) {
  return `${prefix}${value.toFixed(decimals)}${suffix}`
}

export default function AnimatedStats() {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.3 })
  const [playCount, setPlayCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      setPlayCount((count) => count + 1)
    }
  }, [isInView])

  return (
    <section ref={ref} className="mx-auto mt-16 max-w-5xl sm:mt-20">
      <motion.div
        initial={reduce ? undefined : { opacity: 0, y: 26 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur sm:p-8"
      >
        {/* slow ambient wash behind the figures */}
        <div
          aria-hidden
          className="aurora-blob pointer-events-none absolute -top-24 left-1/3 h-56 w-72 rounded-full bg-cyan-500/10 blur-3xl"
        />

        <div className="relative grid gap-3 sm:grid-cols-3 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              animate={
                reduce
                  ? undefined
                  : isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 18 }
              }
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={reduce ? undefined : { y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40 p-5 text-center transition-colors hover:border-cyan-400/25 sm:p-6"
            >
              <div className="text-3xl font-semibold tabular-nums tracking-tight text-white sm:text-4xl">
                {isInView ? (
                  <CountUp
                    key={playCount}
                    target={stat.target}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                    delay={0.15 + index * 0.12}
                    instant={Boolean(reduce)}
                  />
                ) : (
                  formatValue(0, stat.prefix, stat.suffix, stat.decimals ?? 0)
                )}
              </div>

              {/* underline that draws itself once the figure lands */}
              <motion.span
                aria-hidden
                className="mx-auto mt-3 block h-px w-10 origin-center bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"
                initial={reduce ? undefined : { scaleX: 0 }}
                animate={
                  reduce ? undefined : { scaleX: isInView ? 1 : 0 }
                }
                transition={{ duration: 0.5, delay: 0.5 + index * 0.12 }}
              />

              <p className="mt-3 text-xs leading-relaxed text-white/60 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function CountUp({
  target,
  prefix,
  suffix,
  decimals,
  delay = 0,
  instant = false,
}: {
  target: number
  prefix: string
  suffix: string
  decimals: number
  delay?: number
  instant?: boolean
}) {
  const [value, setValue] = useState(instant ? target : 0)

  useEffect(() => {
    if (instant) {
      setValue(target)
      return
    }

    const duration = 1200
    let frame = 0
    let startTime: number | undefined

    const step = (now: number) => {
      if (startTime === undefined) startTime = now
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(target * eased)

      if (progress < 1) {
        frame = window.requestAnimationFrame(step)
      }
    }

    setValue(0)
    const timeout = window.setTimeout(() => {
      frame = window.requestAnimationFrame(step)
    }, delay * 1000)

    return () => {
      window.clearTimeout(timeout)
      window.cancelAnimationFrame(frame)
    }
  }, [target, delay, instant])

  return <span>{formatValue(value, prefix, suffix, decimals)}</span>
}
