// src/components/Navbar.tsx
"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (pathname?.startsWith("/raiseready")) {
    return null
  }

  return (
    <header
      className={`relative z-50 w-full transition-all md:fixed md:top-0 ${
        scrolled
          ? "md:backdrop-blur-xl md:bg-black/40 md:border-b md:border-white/10"
          : "md:bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:gap-6 sm:px-6">
        {/* Left */}
        <a
          href="#"
          className="font-semibold tracking-tight text-white/95 flex items-center gap-2 w-full sm:w-auto"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-[hsl(var(--accent))] shadow-[0_0_8px_rgba(16,185,129,0.25)]" />
          Shaun Mukherjee
        </a>

        {/* Right */}
        <div className="flex w-full flex-wrap items-center justify-end gap-3 sm:w-auto sm:gap-6">
          <a
            href="#projects"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Projects
          </a>
          <a
            href="#product-playbook"
            className="w-full rounded-xl border border-slate-200 bg-white/50 px-5 py-2.5 text-center text-sm font-semibold text-slate-700 backdrop-blur-sm transition-all duration-200 hover:border-slate-300 hover:bg-white hover:text-slate-900 hover:shadow-sm dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-900 dark:hover:text-white sm:w-auto"
          >
            Get My Playbook
          </a>

          {/* Primary CTA: Book a Call */}
          <a
            href="https://calendly.com/shaunmukherjee-proton/founding-cto-discovery-call"
            className="w-full rounded-xl bg-slate-900 px-5 py-2.5 text-center text-sm font-semibold text-white shadow-md shadow-slate-900/10 transition-all duration-200 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200 sm:w-auto"
          >
            Book a Call
          </a>
        </div>
      </nav>
    </header>
  )
}
