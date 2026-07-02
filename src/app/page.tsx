import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/data/projects"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="relative overflow-hidden px-6">
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[980px] -translate-x-1/2 bg-gradient-to-br from-cyan-400/20 via-pink-400/8 to-transparent blur-3xl" />

      {/* RISK & SCOPE RADAR CALLOUT - TOP OF PAGE */}
      <div className="relative mx-auto max-w-5xl pt-16">
        <div className="rounded-2xl border border-cyan-400/30 bg-gradient-to-r from-cyan-950/40 via-slate-900/60 to-cyan-950/40 p-4 backdrop-blur-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 text-lg">⚡</span>
              <div>
                <span className="text-sm font-medium text-cyan-300">Beta Access</span>
                <p className="text-sm text-white/70">scope-shield v2</p>
              </div>
            </div>
            <a
              href="https://scope-shield-v2.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/20 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/30 hover:text-cyan-200"
            >
              👉 Try for Free
              <span className="text-cyan-400">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative mx-auto flex min-h-screen max-w-5xl flex-col justify-center pt-12">
        <div className="mb-6 inline-flex items-center gap-3">
          <span className="inline-block rounded-full bg-white/6 px-3 py-1 text-sm font-medium text-white/80">Launch your AI startup with a Founding CTO. Not just another engineer.</span>
          <span className="text-sm text-white/50">Available for advisory & fractional leadership</span>
        </div>

        <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
          I partner with <span className="animate-gradient">select founders</span> to architect
          <span className="animate-gradient"> AI products</span>
          <br className="hidden sm:block" /> that users love and investors understand.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
          Senior AI & Full-Stack engineer focused on production-ready
          architectures, efficient LLM and RAG systems, and delightful user flows.
          I engineer resilient, multi-tenant AI systems, agentic workflow architectures, and deep data pipelines. 
          Partnering as an elite technical asset for select venture-backed startups and premium engineering teams, 
          I clear critical roadmap blocks, audit infrastructure, and scale ideas into production-ready digital capital.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
           <a
            href="https://calendly.com/shaunmukherjee-proton/15min"
            className="rounded-xl animate-gradient px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:translate-y-[-1px] hover:shadow-indigo-500/40"
          >
            Book a Discovery Call
          </a>

          <a
            href="mailto:shaunmukherjee@proton.me"
            className="rounded-xl border border-white/12 px-6 py-3 font-medium text-white/90 transition hover:bg-white/6 hover:border-white/30"
          >
            Initiate Enquiry
          </a>

          <a
            href="#projects"
            className="rounded-xl border border-white/12 px-6 py-3 font-medium text-white/90 transition hover:bg-white/6 hover:border-white/30"
          >
            Review Architectural Portfolio
          </a>

           <a
            href="#retrospectives"
            className="rounded-xl border border-white/12 px-6 py-3 font-medium text-white/90 transition hover:bg-white/6 hover:border-white/30"
          >
           Review Engineering Retrospectives
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
              🚀 MVP Planning & Hands-On Development
            </h3>
            <p className="mt-3 text-white/70">
              Turn ideas into scoped, buildable MVPs.
              Partnering exclusively as an elite technical extension for venture-backed startups and premium enterprises.
              I handle architecture, stack selection,
              and hands-on delivery to get to market fast.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold">
              🧠 AI Architecture & Product Roadmap
            </h3>
            <p className="mt-3 text-white/70">
             Transitioning complex technical concepts from zero to a robust production roadmap. I drive system 
        design, decouple data access layers, eliminate performance bottlenecks, and establish highly optimized, 
        cloud-native boilerplate foundations that scale linearly
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20">
      <h3 className="text-xl font-semibold text-white flex items-center gap-2">
        <span>🏗️</span> Production-Grade AI Orchestration
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-white/70">
        Moving pipelines past basic stateless wrappers into production-ready system. Designing deterministic 
        RAG pipelines, semantic indexing schemas, persistent multi-tenant context memory tracking, and isolated multi-step 
        agentic workflows that never compromise synchronous application runtime.
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

      {/* ENGINEERING RETROSPECTIVES SECTION */}
      <section className="mx-auto mt-32 max-w-5xl" id="retrospectives">
        <h2 className="text-3xl font-semibold">
          Engineering Retrospectives
        </h2>
        <p className="mt-4 max-w-2xl text-white/60">
          Technical deep-dives, architectural decisions, and lessons learned from production systems.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

           <a 
            href="https://www.indiehackers.com/post/from-fractional-cto-to-micro-saas-how-15-unbilled-hours-inspired-an-ai-shield-and-what-the-data-says-about-v2-2e2502281a" 
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30 hover:bg-white/10"
          >
            <span className="text-2xl">⚡</span>
            <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-cyan-300">From Fractional CTO to Micro-SaaS</h3>
            <p className="mt-2 text-sm text-white/60">How 15 unbilled hours inspired an AI Shield</p>
            <span className="mt-3 inline-block text-sm text-cyan-400/60 group-hover:text-cyan-300">Read more →</span>
          </a>

          <a 
            href="#" 
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30 hover:bg-white/10"
          >
            <span className="text-2xl">🏗️</span>
            <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-cyan-300">Tech Debt Mitigation</h3>
            <p className="mt-2 text-sm text-white/60">How we reduced legacy system complexity by 60% while maintaining velocity</p>
            <span className="mt-3 inline-block text-sm text-cyan-400/60 group-hover:text-cyan-300">Read more →</span>
          </a>

         
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
              Architected and scaled AI coaching platform for both web and mobile using React Native, Swift/Kotlin, Next.js, NestJS, and LLMs. 
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
          Who It's For
        </h2>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Good fit if you’re:
            </h3>
            <ul className="mt-4 space-y-2 text-white/70">
                 <li>• A founder building or validating an AI MVP</li>
        <li>• An agency or dev shop battling scope creep and unbilled hours</li>
        <li>• A startup needing senior technical judgement and architecture audits</li>
        <li>• A team applying AI beyond simple chatbots — LLM, RAG, agentic workflows, or GenAI infrastructure</li>
        <li>• Frustrated by tool fragmentation and manual operational drag</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">
              Probably not a fit if:
            </h3>
            <ul className="mt-4 space-y-2 text-white/70">
               <li>• Looking for the cheapest development resource</li>
        <li>• Already have a large, established in-house engineering team</li>
        <li>• Not experiencing pain from scope creep or technical debt</li>
        <li>• Building simple brochureware or static sites</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}