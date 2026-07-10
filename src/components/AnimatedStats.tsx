"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { stats } from "@/data/stats"

function formatValue(value: number, prefix: string, suffix: string) {
  const rounded = Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1)
  return `${prefix}${rounded}${suffix}`
}

export default function AnimatedStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.3 })
  const [playCount, setPlayCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      setPlayCount((count) => count + 1)
    }
  }, [isInView])

  return (
    <section ref={ref} className="mx-auto mt-20 max-w-5xl">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="rounded-2xl border border-white/10 bg-slate-950/40 p-6 text-center"
            >
              <div className="text-3xl font-semibold text-white sm:text-4xl">
                {isInView ? (
                  <CountUp
                    key={playCount}
                    target={stat.target}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    delay={0.15 + index * 0.12}
                  />
                ) : (
                  "0"
                )}
              </div>
              <p className="mt-2 text-sm text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CountUp({
  target,
  prefix,
  suffix,
  delay = 0,
}: {
  target: number
  prefix: string
  suffix: string
  delay?: number
}) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const duration = 1200
    let frame: number
    let startTime: number

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
  }, [target, delay])

  return <span>{formatValue(value, prefix, suffix)}</span>
}
