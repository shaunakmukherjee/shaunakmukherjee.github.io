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
      className={`fixed top-0 z-50 w-full transition-all ${
        scrolled
          ? "backdrop-blur-xl bg-black/40 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Left */}
        <a
          href="#"
          className="font-semibold tracking-tight text-white/95 flex items-center gap-2"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-[hsl(var(--accent))] shadow-[0_0_8px_rgba(16,185,129,0.25)]" />
          Shaun Mukherjee
        </a>

        {/* Right */}
        <div className="flex items-center gap-6">
          <a
            href="#projects"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Projects
          </a>

          <a
  href="https://calendly.com/shaunmukherjee-proton/founding-cto-discovery-call"
  className="rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:translate-y-[-1px] hover:shadow-cyan-500/40"
>
  Hire Me as Your Founding CTO
</a>
        </div>
      </nav>
    </header>
  )
}
