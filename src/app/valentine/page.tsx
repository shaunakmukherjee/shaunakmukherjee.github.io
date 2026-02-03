"use client"

import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type Photo = { src: string; caption: string }

export default function ValentinePage() {
  const [step, setStep] = useState<"gate" | "main">("gate")
  const [slide, setSlide] = useState(0)

  // Add your own photos in /public/valentine/
  // Example file paths: /valentine/1.jpg, /valentine/2.jpg ...
  const photos: Photo[] = useMemo(
    () => [
      { src: "/valentine/1.jpeg", caption: "Random but cute photo" },
      { src: "/valentine/2.jpeg", caption: "Promise to make everyday as special for u as this" },
      { src: "/valentine/3.jpeg", caption: "MY IRL DISNEY PRINCESS" },
    ],
    []
  )

  const next = () => setSlide((s) => (s + 1) % photos.length)
  const prev = () => setSlide((s) => (s - 1 + photos.length) % photos.length)

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Cinematic background */}
     {/* Soft romantic gradient background */}
<div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-rose-200/40 via-fuchsia-300/25 to-amber-200/30" />

{/* Cinematic vignette */}
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.25),rgba(0,0,0,0.55))]" />

{/* Soft bokeh highlights */}
<div className="pointer-events-none absolute inset-0 opacity-70 blur-3xl"
  style={{
    background:
      "radial-gradient(circle at 20% 25%, rgba(236,72,153,0.28), transparent 35%)," +
      "radial-gradient(circle at 75% 30%, rgba(244,114,182,0.22), transparent 40%)," +
      "radial-gradient(circle at 50% 85%, rgba(251,191,36,0.16), transparent 45%)"
  }}
/>

      {/* Film grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"180\" height=\"180\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"180\" height=\"180\" filter=\"url(%23n)\" opacity=\"0.4\"/></svg>')",
        }}
      />

      <Hearts />

      <div className="relative mx-auto flex min-h-screen max-w-4xl flex-col px-6 py-16 text-[#fff7fb]">

        <AnimatePresence mode="wait">
          {step === "gate" ? (
            <motion.section
              key="gate"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="my-auto"
            >
              <p className="text-sm tracking-widest text-white/60">
                A TINY CINEMATIC EXPERIENCE
              </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">
  Hi my love. I made you a{" "}
  <span className="bg-gradient-to-r from-pink-300 via-rose-200 to-amber-200 bg-clip-text text-transparent">
    leetul website
  </span>
  .
</h1>


              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
                It’s a little cheesy, a little silly, but 100% from the heart.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <div className="relative">
  <div className="absolute -inset-1 rounded-2xl bg-pink-500/30 blur-xl animate-pulse" />
  <button
    onClick={() => setStep("main")}
    className="relative rounded-2xl bg-pink-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-pink-500/25 transition hover:translate-y-[-1px] hover:shadow-pink-500/40"
  >
    Enter 💘
  </button>
</div>


                <a
                  href="#letter"
                  onClick={(e) => {
                    e.preventDefault()
                    setStep("main")
                    setTimeout(() => {
                      document.getElementById("letter")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }, 50)
                  }}
                  className="rounded-2xl border border-white/15 bg-white/5 px-7 py-3.5 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
                >
                  Skip to the mushy part
                </a>
              </div>

              <p className="mt-8 text-sm text-white/50">
                PS: there’s a tiny “quiz”. Please don’t fail it.
              </p>
            </motion.section>
          ) : (
            <motion.section
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-20"
            >
              {/* Header */}
              <section className="pt-6">
                <p className="text-sm tracking-widest text-white/60">
                  FOR MY VALENTINE
                </p>

                <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
                  You + me = my favourite storyline.
                </h2>

                <p className="mt-4 max-w-2xl text-lg text-white/70">
        Just imagine this is something very romantic (heheheheh)
                        </p>
              </section>

              {/* Photo “cinematic” carousel */}
              <section className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="relative overflow-hidden rounded-2xl">
                  <motion.img
                    key={photos[slide]?.src}
                    src={photos[slide]?.src}
                    alt={photos[slide]?.caption}
                    initial={{ opacity: 0.0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1.0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="h-[880px] w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-sm text-white/70">Random Memory {slide + 1} / {photos.length}</p>
                   <p className="mt-1 text-xl font-semibold drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)]">
  {photos[slide]?.caption}
</p>

                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <button
                    onClick={prev}
                    className="rounded-2xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10"
                  >
                    ← Back
                  </button>

                  <div className="flex gap-2">
                    {photos.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setSlide(i)}
                        className={`h-2.5 w-2.5 rounded-full transition ${
                          i === slide ? "bg-pink-400" : "bg-white/20 hover:bg-white/30"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={next}
                    className="rounded-2xl bg-pink-500 px-5 py-2.5 text-sm font-semibold text-white shadow shadow-pink-500/20 transition hover:translate-y-[-1px]"
                  >
                    Next →
                  </button>
                </div>

                <p className="mt-4 text-sm text-white/50">
                  (Add your photos to <span className="text-white/70">/public/valentine/</span> and update captions in code.)
                </p>
              </section>

              {/* Cute + funny mini-quiz */}
              <section className="grid gap-6 sm:grid-cols-2">
                <Card title="Quick quiz (very serious)">
                  <p className="text-white/70">
                    Question: Who is the beshtesht bby in the whole supergalaxy?
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <button
                      onClick={() => alert("Correct. Outstanding judgement. ✅")}
                      className="rounded-2xl bg-white/10 px-5 py-2.5 font-medium text-white/90 transition hover:bg-white/15"
                    >
                      You
                    </button>
                    <button
                      onClick={() => alert("Also correct because you picked it. ✅")}
                      className="rounded-2xl bg-white/10 px-5 py-2.5 font-medium text-white/90 transition hover:bg-white/15"
                    >
                      Still you
                    </button>
                    <button
                      onClick={() => alert("Nice try 😤 (but yes, you). ✅")}
                      className="rounded-2xl bg-white/10 px-5 py-2.5 font-medium text-white/90 transition hover:bg-white/15"
                    >
                      Definitely you
                    </button>
                  </div>
                </Card>

                <Card title="My promise">
                  <ul className="space-y-2 text-white/70">
                    <li>• I’ll keep being obsessed w you. Cuz u beautiful inside n out.</li>
                    <li>• I’ll make you laugh (even when I’m annoying).</li>
                    <li>• I’ll keep building a life for us that feels like home - and moneh ofc.</li>
                  </ul>
                </Card>
              </section>

              {/* Heartfelt letter */}
              <section
                id="letter"
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
              >
                <p className="text-sm tracking-widest text-white/60">
                  THE MUSHY PART
                </p>
                <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                  A tiny letter, for you
                </h3>

                <div className="mt-6 space-y-4 text-lg leading-relaxed text-white/70">
                  <p>
                    Hey baby, happy Valentine’s.
                  </p>
                  <p>
                    I’m grateful for you in ways I struggle to put into words.
                    You make life feel lighter, warmer, and somehow more *possible*. You inspire me to be a better man.
                  </p>
                  <p>
                    You’re my favourite person to talk to, to build with, to dream with.
                    Aaaand to do absolutely nothing with.
                  </p>
                  <p className="text-white/80 font-medium">
                   Awuvuuuuuuu. *howls*
                  </p>
                  <p className="text-white/50">
                    — Shaun
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="https://calendly.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl bg-pink-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-pink-500/25 transition hover:translate-y-[-1px]"
                    onClick={(e) => {
                      // Optional: you probably don't need calendly here 🙂
                      e.preventDefault()
                      alert("Now go hug me. That’s the booking link. 💞")
                    }}
                  >
                    Book a hug (limited slots)
                  </a>

                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }}
                    className="rounded-2xl border border-white/15 bg-white/5 px-7 py-3.5 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
                  >
                    Replay the trailer 🎬
                  </a>
                </div>
              </section>

              {/* Footer */}
              <footer className="pb-10 text-center text-sm text-white/45">
                Made with love, mild drama, and strong opinions.
              </footer>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}

function Card({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
  <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-lg shadow-pink-500/10">

      <h4 className="text-xl font-semibold">{title}</h4>
      <div className="mt-3">{children}</div>
    </div>
  )
}

function Hearts() {
  // lightweight floating hearts in the background
  const hearts = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: 10 + Math.random() * 18,
        delay: Math.random() * 2,
        duration: 6 + Math.random() * 6,
        opacity: 0.10 + Math.random() * 0.18,
      })),
    []
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          initial={{ y: 200, opacity: 0 }}
animate={{ y: -900, x: [0, 12, -8, 10, 0], opacity: h.opacity }}
          transition={{
  duration: h.duration,
  delay: h.delay,
  repeat: Infinity,
  repeatType: "loop",
  ease: "linear",
}}

          style={{
            position: "absolute",
            left: h.left,
            bottom: -60,
            width: h.size,
            height: h.size,
          }}
         className="text-rose-400"

        >
          ❤️
        </motion.div>
      ))}
    </div>
  )
}
