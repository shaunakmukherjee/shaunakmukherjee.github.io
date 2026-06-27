import Navbar from '@/components/Navbar'
// @ts-ignore: Next.js supports global CSS imports in the app directory
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  metadataBase: new URL("https://shaunakmukherjee.github.io"),
  title: "Shaun — Principal AI Architect & Engineer",
  description:
    "Architecting high-throughput microservices, production-grade AI infrastructure, and resilient agentic workflows for premium enterprise platforms.",
  openGraph: {
    title: "Shaun — Principal AI Engineer and Builder",
    description:
      "Architecting high-throughput microservices, production-grade AI infrastructure, and resilient agentic workflows for premium enterprise platforms.",
    url: "https://shaunakmukherjee.github.io",
    siteName: "Shaun's Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Shaun — Principal AI Engineer and Builder",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaun — Principal AI Architect & Engineer",
    description:
      "Architecting high-throughput microservices, production-grade AI infrastructure, and resilient agentic workflows for premium enterprise platforms.",
    images: ["/og.png"],
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
