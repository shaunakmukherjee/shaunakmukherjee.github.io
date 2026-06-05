import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/data/projects"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="relative overflow-hidden px-6">
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[980px] -translate-x-1/2 bg-gradient-to-br from-cyan-400/20 via-pink-400/8 to-transparent blur-3xl" />

      {/* HERO */}
      <section className="relative mx-auto flex min-h-screen max-w-5xl flex-col justify-center pt-20">
        <div className="mb-6 inline-flex items-center gap-3">
          <span className="inline-block rounded-full bg-white/6 px-3 py-1 text-sm font-medium text-white/80">AI Engineer • Product Builder</span>
          <span className="text-sm text-white/50">Available for advisory & fractional leadership</span>
        </div>

        <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
          I help<span className="animate-gradient"> founders</span> build and ship
          <span className="animate-gradient"> AI powered products</span>
          <br className="hidden sm:block" /> that users love and investors understand.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
          Senior AI & Full-Stack engineer focused on production-ready
          architectures, efficient LLM and RAG systems, and delightful user flows.
          I partner with early-stage founders to convert ideas into fundable
          products with measurable traction.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
           <a
            href="https://calendly.com/shaunmukherjee-proton/30min"
            className="rounded-xl animate-gradient px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:translate-y-[-1px] hover:shadow-indigo-500/40"
          >
            Book a Consultation
          </a>

          <a
            href="mailto:shaunmukherjee@proton.me"
            className="rounded-xl border border-white/12 px-6 py-3 font-medium text-white/90 transition hover:bg-white/6 hover:border-white/30"
          >
            Email me
          </a>

          <a
            href="#projects"
            className="rounded-xl border border-white/12 px-6 py-3 font-medium text-white/90 transition hover:bg-white/6 hover:border-white/30"
          >
            View projects
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

     {/* EXPERIENCE SECTION */}
      <section className="mx-auto mt-32 max-w-5xl">
        <h2 className="text-3xl font-semibold">Experience</h2>
        <div className="mt-10 space-y-12">
          {/* Footura */}
          <div className="relative border-l border-white/10 pl-8">
            <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-cyan-400" />
            <h3 className="text-xl font-bold text-white">VP Engineering & AI Tech Lead — Footura AI</h3>
            <p className="text-sm text-white/50">Mar 2024 — Present</p>
            <p className="mt-3 text-white/70">
              Architected and scaled AI coaching platform using Next.js, NestJS, and LLMs. 
              Reduced latency by 30% and increased engagement by 40%.
            </p>
          </div>

          {/* AkShaun */}
          <div className="relative border-l border-white/10 pl-8">
            <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-pink-400" />
            <h3 className="text-xl font-bold text-white">Founder & ML Engineer — AkShaun Inc.</h3>
            <p className="text-sm text-white/50">Aug 2023 — Present</p>
            <p className="mt-3 text-white/70">
              Built a real-time xG/xA sports performance system and LLM RAG stack with LangChain and Pinecone.
            </p>
          </div>

          {/* DeskNow */}
          <div className="relative border-l border-white/10 pl-8">
            <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-gray-500" />
            <h3 className="text-xl font-bold text-white">Full Stack Engineer — DeskNow</h3>
            <p className="text-sm text-white/50">Jan 2022 — Dec 2023</p>
            <p className="mt-3 text-white/70">
              Led rewrite to DeskNow 2.0 using React/Next.js and NestJS, resulting in a 50% speed increase.
            </p>
          </div>

          {/* DeskNow */}
          <div className="relative border-l border-white/10 pl-8">
            <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-gray-500" />
            <h3 className="text-xl font-bold text-white">Co-Founder and Lead Engineer - Yooni</h3>
            <p className="text-sm text-white/50">Mar 2017 — August 2019</p>
            <p className="mt-3 text-white/70">
              Wrote full code for University Visits/Yooni platform on Django/TS/Python - 1000+ users, incubated and raised pre-seed funding.
            </p>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="mx-auto mt-32 max-w-5xl">
        <h2 className="text-3xl font-semibold">Education</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-bold text-white">Johns Hopkins University</h3>
            <p className="text-cyan-400">M.S. in Computer Science</p>
            <p className="mt-2 text-sm text-white/60">Machine Learning, Algorithms, & Entrepreneurship</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-bold text-white">West Bengal University of Technology</h3>
            <p className="text-pink-400">B.Tech in Computer Science</p>
            <p className="mt-2 text-sm text-white/60">Research focused on Telecom and IEEE publications</p>
          </div>
        </div>
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
