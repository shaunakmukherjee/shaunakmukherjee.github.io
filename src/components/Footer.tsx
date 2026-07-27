// src/components/Footer.tsx
import { Reveal } from "@/components/motion/Reveal"

const links = [
  { href: "#projects", label: "Work" },
  { href: "#howiwork", label: "How I Work" },
  { href: "#retrospectives", label: "Retrospectives" },
  { href: "mailto:shaunmukherjee@proton.me", label: "Email" },
]

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/10 sm:mt-32">
      <div
        aria-hidden
        className="aurora-blob pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <Reveal
        className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 py-10 text-center sm:py-12"
        amount={0.3}
      >
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm text-white/55 transition-colors hover:text-white"
            >
              {link.label}
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-cyan-400 to-pink-400 transition-transform duration-300 group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>

        <p className="text-xs text-white/45 sm:text-sm">
          © Shaunak Mukherjee, {new Date().getFullYear()} — Built in a
          mini-sprint, with care.
        </p>
      </Reveal>
    </footer>
  )
}
