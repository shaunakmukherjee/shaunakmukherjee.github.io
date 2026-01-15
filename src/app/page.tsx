import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/data/projects"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="relative overflow-hidden px-6">
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[900px] -translate-x-1/2 bg-gradient-to-br from-indigo-500/30 via-purple-500/10 to-transparent blur-3xl" />

      {/* HERO */}
      <section className="relative mx-auto flex min-h-screen max-w-5xl flex-col justify-center pt-24">
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
          I help {" "}
           <span className="text-[hsl(var(--accent))]"> founders
            </span>
           {" "} build and ship {" "}
          <span className="text-[hsl(var(--accent))]">
            AI-powered products
          </span>{" "}
          — from zero to traction.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
          Lead AI and Full-Stack Engineer, 6+ years of experience
          building production-ready AI, web, and mobile products.
          I partner with early-stage teams to design MVPs, make
          the right technical decisions, and turn ideas into
          fundable products.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
           <a
            href="https://calendly.com/shaunmukherjee-proton/30min"
            className="rounded-xl bg-[hsl(var(--accent))] px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:translate-y-[-1px] hover:shadow-indigo-500/40"
          >
            Book a Consultation
          </a>

          <a
            href="mailto:shaunmukherjee@proton.me"
            className="rounded-xl border border-white/20 px-7 py-3.5 font-medium text-white/90 transition hover:bg-white/10"
          >
            Get In Touch
          </a>

           <a
            href="#howiwork"
            className="rounded-xl border border-white/20 px-7 py-3.5 font-medium text-white/90 transition hover:bg-white/10"
          >
            How I work
          </a>
          <a
            href="#projects"
            className="rounded-xl border border-white/20 px-7 py-3.5 font-medium text-white/90 transition hover:bg-white/10"
          >
            View curated projects
          </a>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="mx-auto mt-32 max-w-5xl" id="howiwork">
        <h2 className="text-3xl font-semibold">
          How I work with founders
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold">
              🚀 MVP from zero → one
            </h3>
            <p className="mt-3 text-white/70">
              Turn ideas into scoped, buildable MVPs.
              I handle architecture, stack selection,
              and hands-on delivery to get to market fast.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold">
              🧠 AI strategy & architecture
            </h3>
            <p className="mt-3 text-white/70">
              Design practical AI systems — RAG, agents,
              streaming workflows — grounded in real
              user needs, not demos.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold">
              🛠️ Fractional technical leadership
            </h3>
            <p className="mt-3 text-white/70">
              Act as a senior tech lead or interim VP:
              roadmap decisions, code reviews, system
              design, and early hiring guidance.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold">
              💰 Fundraising & investor readiness
            </h3>
            <p className="mt-3 text-white/70">
              Build products investors understand.
              I have supported pitch decks, technical
              narratives, and early fundraising conversations.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="mx-auto mt-32 max-w-5xl"
      >
        <h2 className="text-3xl font-semibold">
          Selected work
        </h2>

        <p className="mt-4 max-w-2xl text-white/60">
          Products I’ve built or led end-to-end — from
          early concept through production systems
          and real users.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mx-auto mt-32 max-w-5xl">
        <h2 className="text-3xl font-semibold">
          Experience & leadership
        </h2>

        <ul className="mt-6 space-y-4 text-white/70">
          <li>
            <span className="font-medium text-white">
              VP Engineering & AI Tech Lead — Footura
            </span>{" "}
            — Architected and scaled an AI coaching
            platform; reduced latency ~30% and
            increased engagement ~40%. Owned
            infra, AI logic, frontend, and roadmap.
          </li>
          <li>
            Founder & ML Engineer — AkShaun Inc.
            Built production AI systems including
            real-time sports analytics, RAG pipelines,
            and generative models used by external teams.
          </li>
          <li>
            Former co-founder / CTO with experience
            raising pre-seed funding and leading tech
            roadmaps end-to-end.
          </li>
        </ul>
      </section>

      {/* WHO IT'S FOR */}
      <section className="mx-auto mt-32 max-w-5xl">
        <h2 className="text-3xl font-semibold">
          Who I work best with
        </h2>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Good fit if you’re:
            </h3>
            <ul className="mt-4 space-y-2 text-white/70">
              <li>• A founder building or validating an MVP</li>
              <li>• A startup needing senior technical judgement</li>
              <li>• A team applying AI beyond simple chatbots</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">
              Probably not a fit if:
            </h3>
            <ul className="mt-4 space-y-2 text-white/70">
              <li>• You’re looking for the cheapest dev</li>
              <li>• You already have a large in-house team</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
