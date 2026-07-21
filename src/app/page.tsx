import ProjectCard from "@/components/ProjectCard"
import AnimatedStats from "@/components/AnimatedStats"
import { projects } from "@/data/projects"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="relative overflow-hidden px-6">
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[980px] -translate-x-1/2 bg-gradient-to-br from-cyan-400/20 via-pink-400/8 to-transparent blur-3xl" />

     {/* TOOL CALLOUTS - MOBILE OPTIMIZED */}
<div className="relative mx-auto max-w-5xl space-y-2 pt-12 sm:pt-16 mt-8">
  {/* Scoply */}
  <div className="rounded-xl border border-cyan-400/30 bg-gradient-to-r from-cyan-950/40 via-slate-900/60 to-cyan-950/40 p-3 backdrop-blur-sm sm:rounded-2xl sm:p-4">
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 text-sm sm:h-8 sm:w-8 sm:text-lg">⚡</span>
        <div>
          <p className="text-[10px] text-white/50 sm:text-sm">beta-access</p>
          <span className="text-xs font-medium text-cyan-300 sm:text-sm">Scoply</span>
          <p className="hidden text-xs text-white/70 sm:block sm:text-sm">AI that flags scope creep in client calls. Protect your velocity and margins.</p>
        </div>
      </div>
      <a
        href="https://scoply-v2.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 rounded-lg bg-cyan-500/20 px-3 py-1.5 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-500/30 hover:text-cyan-200 sm:rounded-xl sm:px-5 sm:py-2.5 sm:text-sm"
      >
        <span className="sm:inline">👉 Try for Free →</span>
    
      </a>
    </div>
    {/* Mobile-only description */}
    <p className="mt-1.5 text-[11px] text-white/60 sm:hidden">AI that flags scope creep in client calls.</p>
  </div>

  {/* RepoDrift */}
  <div className="rounded-xl border border-indigo-400/20 bg-gradient-to-r from-indigo-950/30 via-slate-900/50 to-indigo-950/30 p-3 backdrop-blur-sm transition hover:border-indigo-400/40 sm:rounded-2xl sm:p-4">
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 text-sm sm:h-8 sm:w-8 sm:text-lg">🔍</span>
        <div>
          <p className="text-[10px] text-white/50 sm:text-sm">open-source</p>
          <span className="text-xs font-medium text-indigo-300 sm:text-sm">RepoDrift</span>
          <p className="hidden text-xs text-white/70 sm:block sm:text-sm">Zero-config CLI, Git repository health analyzer</p>
        </div>
      </div>
      <div className="flex items-center gap-1.5 sm:gap-3">
       
        <a
          href="https://github.com/shaunakmukherjee/repo-drift"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-lg bg-indigo-500/15 px-3 py-1.5 text-xs font-medium text-indigo-300 transition hover:bg-indigo-500/25 hover:text-indigo-200 sm:rounded-xl sm:px-5 sm:py-2.5 sm:text-sm"
        >
          <span className="sm:inline">⭐ Star on GitHub→</span>
         
        </a>
      </div>
    </div>
    {/* Mobile-only description */}
    <p className="mt-1.5 text-[11px] text-white/60 sm:hidden">Zero-config Git health analyzer</p>
  </div>
</div>

      {/* HERO */}
      <section className="relative mx-auto flex min-h-screen max-w-5xl flex-col justify-center pt-12">
        <div className="mb-6 inline-flex items-center gap-3">
          <span className="inline-block rounded-full bg-white/6 px-3 py-1 text-sm font-medium text-white/80">Book a Discovery Call for elite technical leverage</span>
          <span className="text-sm text-white/50">Available for advisory & fractional leadership</span>
        </div>

        <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">Shaun - Principal AI Architect & Fractional CTO</h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">I partner with select founders to turn AI ideas into production systems that users love and investors fund.<br className="hidden sm:block" /> Clear roadmaps, production-grade architectures (LLM/RAG/agentic), and hands-on delivery without the full-time hire.</p>


        <div className="mt-8 flex flex-wrap items-center gap-4">
           <a
            href="https://calendly.com/shaunmukherjee-proton/tech-meeting-with-shaun"
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

      <AnimatedStats />

      {/* HOW I WORK */}
      <section className="mx-auto mt-32 max-w-5xl" id="howiwork">
        <h2 className="text-3xl font-semibold">How I Work With Founders - Three Clear Levels</h2>
        <p className="mt-4 max-w-3xl text-white/60">I structure engagements so you get clarity fast, ongoing leverage when needed, and full production systems when you're ready.</p>
        <div className="mt-10 grid gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold">Level 1: Technical Clarity Package</h3>
            <p className="mt-2 text-sm font-medium text-cyan-300">Entry point for most founders</p>
            <p className="mt-3 text-white/70">Turn vague ideas into a scoped, investor-ready plan. Includes structured interview, MVP/technical roadmap, architecture audit, risk assessment, and prioritized build guidance.</p>
            <p className="mt-3 text-sm text-white/55">Best for pre-seed / validating founders who want to avoid expensive mistakes.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold">Level 2: Fractional AI Architect Retainer</h3>
            <p className="mt-3 text-white/70">Ongoing technical leadership (5-10 hrs/week). Roadmap ownership, architecture decisions, production reviews, agentic workflow implementation, and velocity protection.</p>
            <p className="mt-3 text-sm text-white/55">Best for startups that need consistent senior judgment without a full-time VP.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20">
            <h3 className="text-xl font-semibold text-white">Level 3: Production AI System Build</h3>
            <p className="mt-3 text-white/70">End-to-end architecture and implementation of production-grade AI systems (multi-agent orchestration, RAG platforms, scalable infrastructure).</p>
            <p className="mt-3 text-sm text-white/55">Best for funded teams ready to move from prototype to reliable production.</p>
          </div>
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-6 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">The ladder compounds</p>
            <p className="mt-3 text-white/70">Most clients start at Level 1, move to Level 2 for leverage, and engage Level 3 when scaling the core product.</p>
            <a href="https://calendly.com/shaunmukherjee-proton/tech-meeting-with-shaun" className="mt-5 inline-flex rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:translate-y-[-1px]">Book a Discovery Call</a>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="text-xl font-semibold">My Leveraged Delivery System</h3>
          <p className="mt-3 text-white/70">I run my practice like a modern one-person company:</p>
          <ul className="mt-4 space-y-2 text-white/65">
            <li>- A personal AI operating system (Claude + structured skills folder) that handles research, drafting, auditing, and templating.</li>
            <li>- Every repeatable process is skill-ified for consistency and speed.</li>
            <li>- This lets me deliver at the level of a small team while maintaining senior judgment on every engagement.</li>
          </ul>
          <p className="mt-4 text-white/70">This is how I provide elite support to multiple founders without compromising quality.</p>
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
            href="https://www.indiehackers.com/post/its-live-i-turned-my-1-900-scope-creep-problem-into-a-product-iacD27k8eoY3SGw0ZKqE" 
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30 hover:bg-white/10"
          >
            <span className="text-2xl">🏗️</span>
            <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-cyan-300">Journey to building Scoply</h3>
            <p className="mt-2 text-sm text-white/60">How feedback from v1 inspired a new product that investors love</p>
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

      {/* TESTIMONIALS */}
      <section className="mx-auto mt-32 max-w-5xl" id="testimonials">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Trusted by founders and operators</h2>
            <p className="mt-4 max-w-2xl text-white/60">
              Verified technical partnership feedback from clients who needed senior product and architecture leadership under pressure.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-lg leading-relaxed text-white/75">
              “Consistently demonstrated strong competency, thoughtful problem-solving, and a deep sense of ownership... <strong className="font-semibold text-white">He doesn’t operate like a transactional contractor. He thinks like a builder.</strong> He asks all the right questions, anticipates challenges, and considers long-term sustainability...”
            </p>
            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="font-semibold text-white">Lou</p>
              <p className="mt-1 text-sm text-cyan-300/80">Founder, SoulSource</p>
              <p className="mt-1 text-sm text-white/50">Verified via Upwork</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-lg leading-relaxed text-white/75">
              “<strong className="font-semibold text-white">Shaun conducted a thorough evaluation of our product and clearly communicated areas that required improvement.</strong> He worked closely with us every step of the way... His professionalism, technical expertise, and outstanding attitude set him apart.”
            </p>
            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="font-semibold text-white">Kamdi</p>
              <p className="mt-1 text-sm text-cyan-300/80">Founder, Kedai</p>
              <p className="mt-1 text-sm text-white/50">Verified via Upwork</p>
            </div>
          </div>
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
                 <li>• A founder wanting technical guidance - in every way</li>
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