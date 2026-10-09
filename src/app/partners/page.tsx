import type { Metadata } from "next"
import Image from "next/image"
import Aurora from "@/components/motion/Aurora"

export const metadata: Metadata = {
  title: "Shaun Mukherjee | Partnership overview",
  description:
    "Case studies and a simple first engagement for studio partners and clients.",
  robots: { index: false, follow: false },
}

const PORTFOLIO = "https://shaunakmukherjee.github.io"
const LINKEDIN = "https://www.linkedin.com/in/akshaun"
const CALENDLY =
  "https://calendly.com/shaunmukherjee-proton/tech-meeting-with-shaun"

const CARD =
  "glow-border relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:p-6"

type CaseImage = { src: string; alt: string; contain?: boolean }

const cases: {
  name: string
  label: string
  href: string | null
  had: string
  built: string
  outcome: string
  images: CaseImage[]
}[] = [
  {
    name: "Scoply",
    label: "Own product",
    href: "https://scoply-v2.vercel.app/",
    had: "Freelancers and agencies leaking unpaid work from client calls.",
    built:
      "An AI revenue-defense console that reads call transcripts against the statement of work, flags out-of-scope requests, estimates the revenue leaking out, and drafts the change-order message.",
    outcome:
      "About 100 people on the waitlist. Ranked #1 on BuildHop days after soft launch.",
    images: [{ src: "/projects/scoply-2.png", alt: "Scoply product screen" }],
  },
  {
    name: "Dexter AI",
    label: "Contract",
    href: "https://www.dexterai.org/",
    had: "A streaming copilot that needed live integrations into the tools streamers already use.",
    built:
      "Designed the architecture and built the Twitch, Gmail and Discord integrations end to end.",
    outcome: "Production systems now carrying real user traffic.",
    images: [{ src: "/projects/dexter-pic.png", alt: "Dexter AI product" }],
  },
  {
    name: "yourLume / Lume Learn",
    label: "Product lead",
    href: "https://lume.ked-ai.com/",
    had: "An education product that needed a site, an app, and an assistant students would actually use.",
    built:
      "Led the design of the site and the app. Built Ayaan, the educative OS assistant, end to end, including the full voice loop: orb interface, hands-free turn-taking, speech-end detection, and two teaching modes.",
    outcome: "Latency came down. Adoption roughly doubled to tripled.",
    images: [{ src: "/projects/lume-3.png", alt: "Lume Learn product screen" }],
  },
  {
    name: "Football analytics",
    label: "Scoped delivery",
    href: null,
    had: "Clubs that needed expected-goals metrics they could use in practice.",
    built:
      "Designed expected-goals calculation metrics for Premier League clubs, then delivered as scoped work for Ligue 2 and Bundesliga 2 clubs, in collaboration with engineers from Opta and FBRef.",
    outcome:
      "Premier League metric design, then delivery for Ligue 2 and Bundesliga 2 clubs.",
    images: [
      {
        src: "/projects/sports-analytics/PrgC.jpg",
        alt: "Progressive carries against non-penalty expected goals plus assists",
        contain: true,
      },
      {
        src: "/projects/sports-analytics/xDA.jpg",
        alt: "Expected defensive actions for Premier League defenders",
        contain: true,
      },
    ],
  },
]

function Heading({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/60 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

export default function PartnersPage() {
  return (
    <main className="print-page relative overflow-hidden px-5 sm:px-6">
      <div data-print-hide>
        <Aurora />
      </div>

      <article className="relative z-10 mx-auto max-w-3xl pb-16 pt-12 sm:pb-24 sm:pt-16">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
          For partners
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
          Shaun Mukherjee
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          Johns Hopkins CS. About eight years shipping AI into production.
          Fractional CTO and senior AI engineer.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <a
            href={PORTFOLIO}
            className="text-cyan-300/90 underline-offset-4 hover:text-cyan-200 hover:underline"
          >
            Portfolio
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300/90 underline-offset-4 hover:text-cyan-200 hover:underline"
          >
            LinkedIn
          </a>
        </div>

        <section className="mt-16 sm:mt-20">
          <Heading title="What I do" />
          <p className="mt-5 text-sm leading-relaxed text-white/70 sm:text-base">
            I set the technical direction and I also build — a layer above a
            normal development team. That includes agent orchestration,
            production systems, reliability at scale, and LLM and RAG
            architecture. Companies bring me in once they have real users, but
            the system is not yet reliable enough to grow.
          </p>
        </section>

        <section className="mt-16 sm:mt-20">
          <Heading
            title="Case studies"
            subtitle="Live products where I can show them. Named outcomes on every piece."
          />

          <div className="mt-10 space-y-5">
            {cases.map((item) => (
              <div key={item.name} className={`${CARD} print-avoid-break`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold sm:text-xl">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-cyan-200"
                      >
                        {item.name}
                      </a>
                    ) : (
                      item.name
                    )}
                  </h3>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300/70">
                    {item.label}
                  </span>
                </div>

                <dl className="mt-4 space-y-3 text-sm leading-relaxed sm:text-base">
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                      Had
                    </dt>
                    <dd className="mt-1 text-white/70">{item.had}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                      Built
                    </dt>
                    <dd className="mt-1 text-white/70">{item.built}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300/70">
                      Outcome
                    </dt>
                    <dd className="mt-1 text-white/80">{item.outcome}</dd>
                  </div>
                </dl>

                <div
                  className={`mt-5 grid gap-3 ${
                    item.images.length > 1 ? "sm:grid-cols-2" : "grid-cols-1"
                  }`}
                >
                  {item.images.map((image) => (
                    <div
                      key={image.src}
                      className="relative h-40 overflow-hidden rounded-xl border border-white/10 bg-black/40 sm:h-48"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className={
                          image.contain
                            ? "object-contain bg-white p-2"
                            : "object-cover object-top"
                        }
                      />
                    </div>
                  ))}
                </div>

                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400/80 hover:text-cyan-300"
                  >
                    Open the product
                    <span aria-hidden>→</span>
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 sm:mt-20">
          <Heading
            title="How we work"
            subtitle="One client first. Shared-stakes work only after that has earned it."
          />
          <div className={`${CARD} mt-8 print-avoid-break`}>
            <ol className="space-y-5 text-sm leading-relaxed text-white/70 sm:text-base">
              <li>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300/70">
                  First piece
                </p>
                <p className="mt-2">
                  One scoped, paid engagement. One client. One system.
                </p>
              </li>
              <li>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300/70">
                  Then
                </p>
                <p className="mt-2">
                  Shared-stakes work on an SME-facing offer we build together.
                  What that offer is, and how it is priced, we decide after the
                  first piece — not here.
                </p>
              </li>
            </ol>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-white/55 sm:text-base">
            A partner&apos;s existing ventures are untouched. This sits
            alongside them.
          </p>
        </section>

        <p className="mt-12 max-w-2xl text-sm leading-relaxed text-white/45 sm:mt-16">
          Taking on scoped engagements now. If you have a system that isn&apos;t
          holding together, the fastest way to start is a{" "}
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/55 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white/75 hover:decoration-white/40"
          >
            30-minute call
          </a>.
        </p>
      </article>
    </main>
  )
}
