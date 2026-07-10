export type StatItem = {
  label: string | null | undefined
  target: number
  prefix: string
  suffix: string
}

export const stats: StatItem[] = [
  { target: 5, label : '1', prefix: "", suffix: " startups launched" },
  { target: 17.5, label : '2', prefix: "$", suffix: " million raised in post-money cap" },
  { target: 200, label : '3', prefix: "$", suffix: "k saved in engineering costs" },
]
