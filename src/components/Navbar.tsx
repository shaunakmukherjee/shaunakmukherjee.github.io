// src/components/Navbar.tsx
"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { motion, useReducedMotion } from "framer-motion"
import ScrollProgress from "@/components/motion/ScrollProgress"

const LINKS = [
  { href: "#projects", label: "Work", always: true },
  { href: "#howiwork", label: "How I Work", always: false },
  { href: "#retrospectives", label: "Retrospectives", always: false },
]

export default function Navbar() {
  const reduce = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (pathname?.startsWith("/raiseready")) {
    return null
  }

  return (
    <motion.header
      initial={reduce ? undefined : { y: -72, opacity: 0 }}
      animate={reduce ? undefined : { y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`sticky top-0 z-50 w-full transition-[background-color,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/55 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-5 sm:h-[68px] sm:gap-6 sm:px-6">
        {/* Left — wordmark */}
        <a
          href="#"
          className="group flex shrink-0 items-center gap-2 font-semibold tracking-tight text-white/95"
        >
          <span className="relative inline-flex h-2 w-2 shrink-0 items-center justify-center">
            <span className="absolute inline-block h-2 w-2 rounded-full bg-[hsl(var(--accent))] animate-pulse-ring" />
          </span>
          <span className="text-sm sm:text-base">
            <span className="sm:hidden">Shaun M.</span>
            <span className="hidden sm:inline">Shaun Mukherjee</span>
          </span>
        </a>

        {/* Right — nav + CTA, single row at every width */}
        <div className="flex shrink-0 items-center gap-4 sm:gap-6">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative text-sm text-white/70 transition-colors hover:text-white ${
                link.always ? "inline-block" : "hidden md:inline-block"
              }`}
            >
              {link.label}
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-cyan-400 to-pink-400 transition-transform duration-300 group-hover:scale-x-100"
              />
            </a>
          ))}

          {/* Primary CTA */}
          <motion.a
            href="https://calendly.com/shaunmukherjee-proton/tech-meeting-with-shaun"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduce ? undefined : { y: -1, scale: 1.03 }}
            whileTap={reduce ? undefined : { scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 24 }}
            className="shrink-0 rounded-xl bg-white px-3.5 py-2 text-xs font-semibold text-slate-950 shadow-md shadow-black/20 transition-colors hover:bg-cyan-100 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Book a Call
          </motion.a>
        </div>
      </nav>

      <ScrollProgress />
    </motion.header>
  )
}
