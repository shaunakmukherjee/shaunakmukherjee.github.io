import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarRange,
  CheckCircle2,
  CircleDashed,
  Compass,
  Gem,
  LineChart,
  LockKeyhole,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  TimerReset,
  Waypoints,
  type LucideIcon,
} from "lucide-react";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-raise-manrope",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-raise-cormorant",
});

export const metadata: Metadata = {
  title: "RAISE READY ACCELERATOR",
  description:
    "RAISE READY ACCELERATOR helps aspiring entrepreneurs reduce uncertainty before risking their career, time, or savings.",
};

type IconCard = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const riskVectors: IconCard[] = [
  {
    icon: ShieldCheck,
    title: "Validate before you resign",
    body: "Pressure-test whether your idea solves a real customer problem before you invest major time, savings, or reputation.",
  },
  {
    icon: LineChart,
    title: "Model the actual exposure",
    body: "Get a realistic view of time to market, early expenses, raise readiness, and the milestones that matter first.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Build while keeping optionality",
    body: "Design a path that lets you explore entrepreneurship without being pushed into a premature leap from your current role.",
  },
  {
    icon: MessagesSquare,
    title: "Replace opinions with evidence",
    body: "Use customer discovery, market validation, and expert feedback instead of online noise, conflicting advice, and guesswork.",
  },
];

const toolkitSteps: IconCard[] = [
  {
    icon: Compass,
    title: "Readiness diagnosis",
    body: "Clarify whether entrepreneurship fits your goals, season of life, risk tolerance, and professional assets.",
  },
  {
    icon: Waypoints,
    title: "Decision architecture",
    body: "Map the customer, the problem, the likely path to traction, and the next 90 days before larger commitments are made.",
  },
  {
    icon: LockKeyhole,
    title: "Transition de-risking",
    body: "Identify what must be proven while you still have the safety of your day job, and what should wait until later.",
  },
];

const proofPoints = [
  "1-2 week turnaround",
  "2 live Zoom sessions",
  "20+ page business report and roadmap",
  "Customer discovery and raise-readiness focus",
];

const faqs = [
  {
    question: "Who is this built for?",
    answer:
      "High-intent corporate employees, consultants, and experienced professionals who are asking whether they should become an entrepreneur or stay in their day job.",
  },
  {
    question: "What do I leave with?",
    answer:
      "A clearer decision, an evaluation of your idea, a better understanding of your customer, and a realistic 90-day action plan.",
  },
  {
    question: "How fast can this move?",
    answer:
      "The original program materials state results can be delivered in 1-2 weeks, giving you clarity quickly instead of months of drift.",
  },
];

export default function RaiseReadyPage() {
  return (
    <main
      className={`${manrope.variable} ${cormorant.variable} relative overflow-hidden bg-[#060b0f] text-white`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.14),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.08]" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-8 sm:px-8 lg:px-10">
        <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/65 backdrop-blur">
          RAISE READY ACCELERATOR
        </div>

        <div className="mt-8 flex items-center justify-between gap-4 border-y border-white/10 py-4 text-sm text-white/55">
          <span className="flex items-center gap-2">
            <Gem className="h-4 w-4 text-emerald-300" />
            Selective accelerator for high-intent operators
          </span>
          <nav className="hidden items-center gap-6 md:flex">
            <a className="transition hover:text-white" href="#program">
              Program
            </a>
            <a className="transition hover:text-white" href="#fit">
              Fit
            </a>
            <a className="transition hover:text-white" href="#faq">
              FAQ
            </a>
          </nav>
        </div>

        <div className="grid flex-1 items-center gap-14 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-medium text-emerald-200 shadow-[0_0_40px_rgba(16,185,129,0.12)]">
              <Sparkles className="h-4 w-4" />
              The Entrepreneur Readiness Program™ by Randy Shawn Fisher
            </div>

            <h1 className="mt-8 max-w-4xl font-[family-name:var(--font-raise-cormorant)] text-5xl leading-none tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Discover Whether Entrepreneurship Is Right for You:
              <span className="block text-white/72">
                Before You Risk Your Career, Time, or Savings.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
              Thinking about starting a business? Perhaps you&apos;ve had an idea
              for years. Maybe you&apos;re tired of working for someone else. Or
              you&apos;re wondering if you could turn your skills, experience, or
              passion into a successful business.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/58">
              Before you invest thousands of dollars or leave a secure job, you
              deserve answers. That&apos;s exactly what The Entrepreneur Readiness
              Program™ is designed to provide.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {proofPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/72 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>

            <form
              action="https://calendly.com/randyfisher/free-clarity-call"
              className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.4)] backdrop-blur-xl"
              method="get"
              target="_blank"
            >
              <div className="flex flex-col gap-3 md:flex-row">
                <label className="sr-only" htmlFor="raise-ready-email">
                  Email address
                </label>
                <input
                  className="h-14 flex-1 rounded-2xl border border-white/10 bg-[#0d1419] px-5 text-base text-white outline-none transition placeholder:text-white/35 focus:border-emerald-300/60 focus:ring-2 focus:ring-emerald-300/20"
                  id="raise-ready-email"
                  name="email"
                  placeholder="Enter your work email for a private readiness review"
                  required
                  type="email"
                />
                <button
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-300 px-6 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(45,212,191,0.25)]"
                  type="submit"
                >
                  Book a Complimentary 15 minute Discovery Session
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-3 px-2 text-xs text-white/45">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" />
                  Complimentary 15-minute discovery session
                </span>
                <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:block" />
                <span>Know before you leap and de-risk your decision</span>
              </div>
            </form>
          </div>

          <aside className="relative">
            <div className="absolute inset-x-10 top-8 h-40 rounded-full bg-emerald-300/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b1116]/90 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                    Readiness Snapshot
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                    De-risk the decision before you make the leap.
                  </h2>
                </div>
                <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 p-3 text-emerald-200">
                  <CircleDashed className="h-5 w-5 animate-spin [animation-duration:10s]" />
                </div>
              </div>

              <div className="mt-8 grid gap-4">
                {[
                  "Is entrepreneurship right for me?",
                  "Is my idea solving a real problem?",
                  "Can I start while keeping my current job?",
                  "What should I prove over the next 90 days?",
                ].map((question, index) => (
                  <div
                    key={question}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 transition duration-300 hover:border-emerald-300/30 hover:bg-white/[0.05]"
                  >
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.28em] text-white/35">
                        Signal {index + 1}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/78">
                        {question}
                      </p>
                    </div>
                    <BadgeCheck className="h-5 w-5 shrink-0 text-emerald-300" />
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.05] to-white/[0.02] p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                  Outcome
                </p>
                <p className="mt-3 text-base leading-7 text-white/72">
                  Sometimes the answer is yes. Sometimes it is not yet. Sometimes
                  the idea needs to improve first. Every outcome is progress when
                  the decision is based on evidence instead of emotion.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="program" className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.32em] text-emerald-200/80">
              Structural Risk Removal
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-raise-cormorant)] text-4xl leading-tight tracking-[-0.03em] text-white sm:text-5xl">
              A decision system for professionals who want clarity before they
              commit to entrepreneurship.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/58">
              If you are mid- to senior career, there&apos;s a lot at stake. It&apos;s
              not just the success of the business, but the valuable investment
              of your time, expertise, and money.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {riskVectors.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="group rounded-[28px] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-white/[0.05]"
              >
                <div className="inline-flex rounded-2xl border border-white/10 bg-[#0f161c] p-3 text-emerald-200 transition duration-300 group-hover:border-emerald-300/30 group-hover:bg-emerald-300/10">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/58">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="fit" className="relative border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/80">
              Our Approach
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-raise-cormorant)] text-4xl leading-tight tracking-[-0.03em] text-white sm:text-5xl">
              We believe the best businesses are built on expertise and
              evidence, not excitement.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/58">
              Instead of spending months building something and hoping customers
              appear, you learn what you should build, where the market is, and
              what the path to success can look like.
            </p>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center gap-3 text-white">
                <CalendarRange className="h-5 w-5 text-cyan-200" />
                <span className="text-lg font-semibold">
                  Delivery cadence from the original program
                </span>
              </div>
              <div className="mt-6 space-y-4">
                {[
                  "Zoom Session 1 for intake, entrepreneurial context, and opportunity framing",
                  "Business report, capital raise toolkit, and roadmap for moving forward",
                  "Zoom Session 2 for presentation, discussion, and next-step decisions",
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-7 text-white/62">
                    <TimerReset className="mt-1 h-4 w-4 shrink-0 text-cyan-200" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            {toolkitSteps.map(({ icon: Icon, title, body }, index) => (
              <article
                key={title}
                className="rounded-[28px] border border-white/10 bg-[#0b1116] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.24)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="inline-flex rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.28em] text-white/35">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/58">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.78fr]">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-emerald-200/80">
                Client Signal
              </p>
              <blockquote className="mt-6 font-[family-name:var(--font-raise-cormorant)] text-3xl leading-tight tracking-[-0.02em] text-white sm:text-4xl">
                "Since I've worked with Randy, I have gained so much insight into
                how organizations like mine can bridge the gap between my vision
                and activities and speaking the language of funders who want to
                make a difference."
              </blockquote>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/58">
                The program features a practical and applied approach to help
                founders develop investor relationships that lead to traction and
                success, while reducing uncertainty before bigger commitments are
                made.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-300/10 text-emerald-200">
                  A
                </div>
                <div>
                  <p className="font-semibold text-white">Alimatu Dimonekene MBE</p>
                  <p className="text-sm text-white/48">
                    A Girl At A Time, FORWARD UK
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-[#0b1116] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/80">
                What You Gain
              </p>
              <div className="mt-6 space-y-4">
                {[
                  "A clearer understanding of whether entrepreneurship is right for you",
                  "An evaluation of your business idea",
                  "A better understanding of your customers",
                  "A realistic roadmap and your next 90-day action plan",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" />
                    <span className="text-sm leading-7 text-white/68">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="relative border-y border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-emerald-200/80">
                FAQ
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-raise-cormorant)] text-4xl leading-tight tracking-[-0.03em] text-white sm:text-5xl">
                The questions ambitious professionals ask before they move.
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map(({ question, answer }) => (
                <article
                  key={question}
                  className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6"
                >
                  <h3 className="text-lg font-semibold tracking-tight text-white">
                    {question}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/58">{answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,rgba(16,185,129,0.16),rgba(14,165,233,0.1),rgba(255,255,255,0.03))] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.3)] sm:p-10">
          <p className="text-xs uppercase tracking-[0.32em] text-slate-200/72">
            Ready to Find Out What's Possible?
          </p>
          <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="font-[family-name:var(--font-raise-cormorant)] text-4xl leading-tight tracking-[-0.03em] text-white sm:text-5xl">
                Stop wondering. Start discovering.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/72">
                The Entrepreneur Readiness Program™ helps you reduce uncertainty
                before making one of the biggest decisions of your professional
                life.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
                href="https://calendly.com/randyfisher/free-clarity-call"
                rel="noreferrer"
                target="_blank"
              >
                Book Your Complimentary Discovery Session Today
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-6 py-4 text-sm font-medium text-white/88 transition hover:bg-white/[0.06]"
                href="https://www.raisereadyaccelerator.com/entrepreneurs.html"
                rel="noreferrer"
                target="_blank"
              >
                View program details
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
