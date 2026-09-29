import ProjectCard from "@/components/ProjectCard"
import AnimatedStats from "@/components/AnimatedStats"
import Footer from "@/components/Footer"
import ExperienceTimeline, { type Role } from "@/components/ExperienceTimeline"
import Aurora from "@/components/motion/Aurora"
import MagneticLink from "@/components/motion/MagneticLink"
import SectionHeading from "@/components/motion/SectionHeading"
import AnimatedHeading from "@/components/motion/AnimatedHeading"
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal"
import { projects } from "@/data/projects"

const CALENDLY =
  "https://calendly.com/shaunmukherjee-proton/tech-meeting-with-shaun"

const engagementLevels = [
  {
    level: "Level 1",
    title: "Technical Clarity",
    kicker: null,
    body:
      "A focused engagement that turns an idea or early product into a clear, investor-ready plan: scope, architecture, risks, and what to build first.",
    fit: "Best for: Pre-seed founders who want to avoid expensive mistakes.",
  },
  {
    level: "Level 2",
    title: "Fractional CTO",
    kicker: null,
    body:
      "Ongoing senior technical leadership, around 5–10 hours a week. I own the roadmap and architecture decisions, review what ships, and help with hiring and fundraising.",
    fit:
      "Best for: Startups that need senior judgement before they can justify a full-time CTO.",
  },
  {
    level: "Level 3",
    title: "Production Build",
    kicker: null,
    body:
      "End-to-end design and delivery of production AI systems, from prototype to something real users and investors can rely on.",
    fit: "Best for: Funded teams ready to scale their core product.",
  },
  {
    level: "Level 4",
    title: "For Investors: Technical Due Diligence",
    kicker: null,
    body:
      "Before you fund or join an AI venture, I assess what's actually been built: whether the technology is real, defensible and scalable, and what the risks are. Clear written findings, no jargon.",
    fit:
      "Best for: Angels, family offices and HNWIs evaluating tech or AI investments.",
  },
]

const testimonials = [
  {
    quote: (
      <>
        “Consistently demonstrated strong competency, thoughtful
        problem-solving, and a deep sense of ownership...{" "}
        <strong className="font-semibold text-white">
          He doesn’t operate like a transactional contractor. He thinks like a
          builder.
        </strong>{" "}
        He asks all the right questions, anticipates challenges, and considers
        long-term sustainability...”
      </>
    ),
    name: "Lou",
    role: "Founder, SoulSource",
    source: "",
  },
  {
    quote: (
      <>
        “
        <strong className="font-semibold text-white">
          Shaun conducted a thorough evaluation of our product and clearly
          communicated areas that required improvement.
        </strong>{" "}
        He worked closely with us every step of the way... His professionalism,
        technical expertise, and outstanding attitude set him apart.”
      </>
    ),
    name: "Kamdi",
    role: "Founder, KedAI",
    source: "",
  },
]

const roles: Role[] = [
  {
    title: "VP Engineering & Fractional Tech Lead — Footura AI (part-time)",
    period: "Apr 2024 — Present",
    body: "Architected and scaled AI coaching platform for both web and mobile using React Native, Swift/Kotlin, Next.js, NestJS, and LLMs. Reduced latency by 30% and increased engagement by 40%.",
    dot: "bg-cyan-400",
  },
  {
    title: "Founder & AI Engineer — AkShaun ",
    period: "Aug 2023 — Present",
    body: "Built a real-time xG/xA sports performance system and LLM RAG stack with LangChain and Pinecone.",
    dot: "bg-pink-400",
  },
  {
    title: "Full Stack Engineer — DeskNow",
    period: "Jan 2022 — Jan 2024",
    body: "Led rewrite to DeskNow 2.0 using React/Next.js and NestJS, resulting in a 50% speed increase.",
    dot: "bg-slate-500",
  },
  {
    title: "Co-Founder and Lead Engineer — Yooni",
    period: "Sep 2017 — Jun 2019",
    body: "Wrote full code for University Visits/Yooni platform on Django/TS/Python - 1000+ users, incubated and raised pre-seed funding.",
    dot: "bg-slate-500",
  },
]

const education = [
  {
    school: "Johns Hopkins University",
    degree: "M.S. in Computer Science",
    degreeClass: "text-cyan-400",
    focus: "Machine Learning, Algorithms, & Entrepreneurship",
  },
  {
    school: "West Bengal University of Technology",
    degree: "B.Tech in Computer Science",
    degreeClass: "text-pink-400",
    focus: "Research focused on Telecom and IEEE publications",
  },
]

const goodFit = [
  "A founder building something ambitious with AI who needs senior technical judgement",
  "A non-technical founder who needs someone to own the technology side",
  "An investor or HNWI who wants an independent view on a tech or AI venture",
  "A startup preparing for fundraising or technical due diligence",
]

const badFit = [
  "You're looking for the cheapest developer available",
  "You already have a large in-house engineering team",
  "You need a simple website or brochure site",
]

const SECTION = "relative mx-auto mt-24 max-w-5xl scroll-mt-24 sm:mt-32"
const CARD =
  "group glow-border relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:border-white/20 sm:p-6"

export default function Home() {
  return (
    <main className="relative overflow-hidden px-5 sm:px-6">
      <Aurora />

      {/* HERO */}
      <section className="relative z-10 mx-auto flex min-h-[88vh] max-w-5xl flex-col justify-center pb-16 pt-12 sm:min-h-screen sm:pt-16">
        {/* Availability badges */}
        <Reveal
          direction="down"
          distance={16}
          amount={0.4}
          className="mb-6 flex flex-wrap items-center gap-2 sm:gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-white/80 sm:text-sm">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-ring" />
            </span>
            Available for fractional CTO and advisory work
          </span>
        </Reveal>

        <h1 className="max-w-4xl text-3xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
          <AnimatedHeading
            as="span"
            text="Senior technical leadership for founders, and the people who back them."
            amount={0.2}
            className="block"
          />
        </h1>

        <Reveal delay={0.2} amount={0.2}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:mt-6 sm:text-lg">
            I help founders turn AI ideas into products that work and raise
            money, and help investors understand what they&apos;re really
            funding. Seven years across AI, startups and production engineering.
            MS Computer Science, Johns Hopkins.
          </p>
        </Reveal>

        {/* CTAs — stacked and full width on mobile, wrapped row from sm up */}
        <Stagger
          delay={0.3}
          stagger={0.07}
          amount={0.2}
          className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
        >
          <StaggerItem className="w-full sm:w-auto">
            <MagneticLink
              href={CALENDLY}
              variant="primary"
              external
              fullWidthOnMobile
            >
              Book a Discovery Call
            </MagneticLink>
          </StaggerItem>

          <StaggerItem className="w-full sm:w-auto">
            <MagneticLink href="mailto:shaunmukherjee@proton.me" fullWidthOnMobile>
              Email me
            </MagneticLink>
          </StaggerItem>

          <StaggerItem className="w-full sm:w-auto">
            <MagneticLink href="#projects" fullWidthOnMobile>
              See my work
            </MagneticLink>
          </StaggerItem>
        </Stagger>

        <Reveal delay={0.5} amount={0.2} className="mt-12 sm:mt-14">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35">
            Shipped with
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/55 sm:text-base">
            Hands-on with LLMs, RAG, AI agents, Python, Next.js and mobile,
            from prototype to production.
          </p>
        </Reveal>

        {/* Scroll cue */}
        <div
          aria-hidden
          className="mt-10 hidden justify-center sm:flex"
        >
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/15 p-1">
            <span className="h-1.5 w-1 rounded-full bg-white/60 animate-scroll-cue" />
          </span>
        </div>
      </section>

     

      {/* HOW I WORK */}
      <section className={SECTION} id="howiwork">
        <SectionHeading
          title="How I work with you"
          highlight={["work", "with", "you"]}
          subtitle="Start small, get clarity fast, and scale the engagement only when it's earning its keep."
        />

        <Stagger className="mt-10 grid gap-4 sm:gap-6" stagger={0.1}>
          {engagementLevels.map((item, index) => (
            <StaggerItem key={item.level} interactive className={CARD}>
              <div className="flex items-start gap-4">
                <span
                  aria-hidden
                  className="mt-0.5 hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/10 text-sm font-semibold text-cyan-300 sm:flex"
                >
                  {`0${index + 1}`}
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300/70 sm:hidden">
                    {item.level}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold sm:mt-0 sm:text-xl">
                    <span className="hidden sm:inline">{item.level}: </span>
                    {item.title}
                  </h3>
                  {item.kicker && (
                    <p className="mt-2 text-sm font-medium text-cyan-300">
                      {item.kicker}
                    </p>
                  )}
                  <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                    {item.body}
                  </p>
                  <p className="mt-3 text-sm text-white/55">{item.fit}</p>
                </div>
              </div>
            </StaggerItem>
          ))}

          <StaggerItem className="glow-border relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-5 backdrop-blur sm:p-6">
            <p className="text-sm leading-relaxed text-white/70 sm:text-base">
              Most founders start with Technical Clarity and continue only if
              it&apos;s clearly worth it.
            </p>
            <MagneticLink
              href={CALENDLY}
              variant="primary"
              external
              className="mt-5"
              fullWidthOnMobile
            >
              Book a Discovery Call
            </MagneticLink>
          </StaggerItem>
        </Stagger>

        <Reveal className="mt-6 sm:mt-10" amount={0.15}>
          <div className={CARD}>
            <h3 className="text-lg font-semibold sm:text-xl">
              Why I can move fast
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
              I&apos;ve automated the repetitive parts of my work (research,
              templating, first drafts) so my time goes where it matters:
              decisions, architecture, and the conversations that move your
              company forward. You get the speed of a small team with a senior
              person accountable for every call.
            </p>
          </div>
        </Reveal>
      </section>

      {/* PROJECTS */}
      <section className={SECTION} id="projects">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected work"
          highlight={["work"]}
          subtitle="Products I've built or led, from first idea to real users."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              index={index}
              title={project.title}
              description={project.description}
              outcome={project.outcome || ''}
              stack={project.stack}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={SECTION} id="testimonials">
        <SectionHeading
          title="What founders say"
          highlight={["founders", "say"]}
          subtitle="From founders I've worked with directly."
        />

        <Stagger className="mt-10 grid gap-4 sm:gap-6 lg:grid-cols-2">
          {testimonials.map((item) => (
            <StaggerItem key={item.name} interactive className={CARD}>
              <span
                aria-hidden
                className="pointer-events-none absolute -top-4 right-4 font-serif text-7xl leading-none text-white/[0.07] transition-colors duration-500 group-hover:text-cyan-400/10"
              >
                ”
              </span>
              <p className="relative text-base leading-relaxed text-white/75 sm:text-lg">
                {item.quote}
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-sm text-cyan-300/80">{item.role}</p>
                <p className="mt-1 text-sm text-white/50">{item.source}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* EXPERIENCE */}
      <section className={SECTION} id="experience">
        <SectionHeading
          eyebrow="Track record"
          title="Experience"
          highlight={["Experience"]}
        />
        <ExperienceTimeline roles={roles} />
      </section>

      {/* EDUCATION */}
      <section className={SECTION} id="education">
        <SectionHeading
          eyebrow="Foundations"
          title="Education"
          highlight={["Education"]}
        />

        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
          {education.map((item) => (
            <StaggerItem key={item.school} interactive className={CARD}>
              <h3 className="text-base font-bold text-white sm:text-lg">
                {item.school}
              </h3>
              <p className={`mt-1 text-sm sm:text-base ${item.degreeClass}`}>
                {item.degree}
              </p>
              <p className="mt-2 text-sm text-white/60">{item.focus}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* WHO IT'S FOR */}
      <section className={SECTION} id="fit">
        <SectionHeading
          eyebrow="Qualification"
          title="Who It's For"
          highlight={["For"]}
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-8">
          <Reveal direction="right" amount={0.15}>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-white sm:text-xl">
              <span
                aria-hidden
                className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-xs text-emerald-400"
              >
                ✓
              </span>
              Good fit if you’re:
            </h3>
            <Stagger className="mt-4 space-y-2.5" stagger={0.07}>
              {goodFit.map((line) => (
                <StaggerItem
                  key={line}
                  direction="right"
                  distance={14}
                  className="flex gap-3 text-sm leading-relaxed text-white/70 sm:text-base"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400/70"
                  />
                  <span>{line}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>

          <Reveal direction="left" amount={0.15}>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-white sm:text-xl">
              <span
                aria-hidden
                className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-500/15 text-xs text-rose-400"
              >
                ✕
              </span>
              Probably not a fit if:
            </h3>
            <Stagger className="mt-4 space-y-2.5" stagger={0.07}>
              {badFit.map((line) => (
                <StaggerItem
                  key={line}
                  direction="left"
                  distance={14}
                  className="flex gap-3 text-sm leading-relaxed text-white/70 sm:text-base"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-400/60"
                  />
                  <span>{line}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}

/**
 *
      <section className="mx-auto mt-32 max-w-5xl px-4 sm:px-6" id="product-playbook">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40 p-8 shadow-2xl shadow-indigo-950/40 backdrop-blur sm:p-12">

          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-pink-500/10 blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400 border border-cyan-400/20">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              AkShaun's Digital Toolkit
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Plan Your Startup Before You Spend $20k Building It
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
              Stop guessing what to build first. Learn how to turn your idea into a roadmap developers can build, investors understand, and you can confidently budget for—without hiring a full-time CTO.
            </p>
          </div>


          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch relative z-10">

            <div className="flex flex-col justify-between rounded-2xl border border-white/5 bg-slate-950/60 p-6 sm:p-8 backdrop-blur-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">Here's what you'll be able to do</p>
                <ul className="space-y-5 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-bold">✓</span>
                    <div>
                      <strong className="text-white block font-medium">Know exactly what to build first</strong>
                      <span className="text-slate-400 text-xs">Turn scattered ideas into a roadmap that reduces wasted development time, prevents expensive rebuilds, and gives developers a clear plan from day 1.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-pink-500/10 text-pink-400 text-xs font-bold">✓</span>
                    <div>
                      <strong className="text-white block font-medium">Explain your product like a CTO </strong>
                      <span className="text-slate-400 text-xs">Professional architecture diagrams you can confidently share with developers, investors, and co-founders—even if you aren't technical.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-indigo-500/10 text-indigo-400 text-xs font-bold">✓</span>
                    <div>
                      <strong className="text-white block font-medium">Avoid overpriced developer quotes</strong>
                      <span className="text-slate-400 text-xs">Learn how experienced CTOs scope projects, estimate realistic budgets, and structure milestones so you don't overpay or lose control of your MVP.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/60 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold">FREE</span>
                  <span className="text-sm font-semibold text-emerald-400">Starter Resource</span>
                </div>
                <h3 className="text-xl font-semibold text-white">See What a Real CTO Roadmap Looks Like</h3>
                <p className="mt-2 text-slate-300">
                  Download the actual roadmap used with an AI agency.
                </p>
                <a
                  href="https://akshaun.gumroad.com/l/roadmap-which-got-me-hired"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-950/50 px-6 py-3 font-semibold text-emerald-400 hover:bg-emerald-900/50 transition"
                >
                  Download Free Sample →
                </a>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-3 items-center text-xs text-slate-400">
                <span>Perfect if you're:</span>
                <span className="bg-slate-900 px-2 py-1 rounded border border-white/5 text-white">Planning your MVP</span>
                <span className="bg-slate-900 px-2 py-1 rounded border border-white/5 text-white">Stuck at &lt;$3k MRR</span>
                <span className="bg-slate-900 px-2 py-1 rounded border border-white/5 text-white">Preparing for investors</span>
              </div>
            </div>


            <div className="flex flex-col gap-4">

              <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-950/60 p-6 text-center lg:text-left">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">MVP Roadmapping Kit</span>
                  <div className="mt-2 flex items-baseline justify-center lg:justify-start gap-2">
                    <span className="text-3xl font-extrabold text-white tracking-tight">$29</span>
                  </div>
                  <p className="mt-2 text-xs text-slate-400">
                   Everything you need to define your MVP before thinking about distribution / dev work.
                  </p>
                </div>
                <a
                  href="https://akshaun.gumroad.com/subscribe"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-xl shadow-cyan-500/10 transition hover:opacity-95 hover:scale-[1.01] active:scale-[0.99]"
                >
                 Start Planning My MVP
                </a>
              </div>

              <div className="flex flex-col justify-between rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-slate-950 to-cyan-950/20 p-6 text-center lg:text-left">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Founder CTO Toolkit</span>
                  <div className="mt-2 flex items-baseline justify-center lg:justify-start gap-2">
                    <span className="text-3xl font-extrabold text-white tracking-tight">$69</span>
                  </div>
                  <p className="mt-2 text-xs text-slate-300">
                   Everything you'd work through with a fractional CTO before spending $$ on development.
                  <p className="mt-3 text-xs text-cyan-300/80">Proof-first approach: I build public demos and architecture examples regularly. Many founders book calls after seeing a relevant pattern applied to their space.</p>
                  </p>
                </div>
                <a
                  href="https://akshaun.gumroad.com/subscribe"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-xl shadow-cyan-500/10 transition hover:opacity-95 hover:scale-[1.01] active:scale-[0.99]"
                >
                 Get the COMPLETE Toolkit
                </a>
              </div>


              <p className="text-[10px] text-center text-slate-400">
                Secure checkout via Gumroad · Most startups waste thousands building the wrong MVP first. This toolkit helps you avoid becoming one of them.
              </p>
            </div>

          </div>
          </div>
      </section>
 *
 *
 *
*/
