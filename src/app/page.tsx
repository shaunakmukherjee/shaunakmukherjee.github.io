import Footer from "@/components/Footer"
import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/data/projects"


export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6">
      {/* background glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[800px] -translate-x-1/2 bg-gradient-to-br from-indigo-500/30 via-purple-500/10 to-transparent blur-3xl" />

<section className="relative mx-auto flex min-h-screen max-w-5xl flex-col justify-center pt-24">
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
          I build{" "}
          <span className="text-[hsl(var(--accent))]">
            production-ready AI
          </span>{" "}
          and modern web/mobile products.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
          Tech Lead - AI & full-stack engineering specialising in
          real-world ML systems, scalable platforms and kickass apps.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="mailto:you@email.com"
            className="rounded-xl bg-[hsl(var(--accent))] px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:translate-y-[-1px] hover:shadow-indigo-500/40"
          >
            Work with me
          </a>

          <a
            href="#projects"
            className="rounded-xl border border-white/20 px-7 py-3.5 font-medium text-white/90 transition hover:bg-white/10"
          >
            View projects
          </a>
        </div>
      </section>

      
<section
  id="projects"
  className="mx-auto mt-20 max-w-5xl px-6"
>
  <h2 className="text-3xl font-semibold">
    Selected projects
  </h2>

  <div className="mt-10 grid gap-6 sm:grid-cols-2">
    {projects.map((project) => (
      <ProjectCard key={project.title} {...project} />
    ))}
  </div>
</section>

<Footer />
    </main>
  )
}
