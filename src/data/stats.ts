export type StatItem = {
  /** Caption under the figure. */
  label: string
  target: number
  prefix: string
  /** Unit that sits tight against the figure, e.g. "M" or "k". */
  suffix: string
  /** Decimal places held steady while the number counts up. */
  decimals?: number
}

export const stats: StatItem[] = [
  {
    target: 5,
    prefix: "",
    suffix: "",
    decimals: 0,
    label: "Startups launched",
  },
  {
    target: 17.5,
    prefix: "$",
    suffix: "M",
    decimals: 1,
    label: "Raised in post-money cap",
  },
  {
    target: 200,
    prefix: "$",
    suffix: "k",
    decimals: 0,
    label: "Saved in engineering costs",
  },
]
