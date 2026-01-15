"use client"

import Image from "next/image"
import { motion } from "framer-motion"

type Props = {
  title: string
  description: string
  outcome: string
  stack: string[]
  image: string
  link: string
}

export default function ProjectCard({
  title,
  description,
  outcome,
  stack,
  image,
  link,
}: Props) {
  return (
    <motion.a
      href={link}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-white/20"
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        {stack.includes("Mobile App") && (
  <span className="mt-2 inline-block rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-300">
    Mobile App
  </span>
)}

        <p className="mt-3 text-white/70">{description}</p>

        <p className="mt-4 text-sm text-white/50">{outcome}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}
