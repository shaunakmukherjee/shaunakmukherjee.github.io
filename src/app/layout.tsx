import Navbar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  metadataBase: new URL("https://shaunakmukherjee.github.io"),
  title: "Shaun — AI Engineer & Full-Stack Builder",
  description:
    "I build production-ready AI systems, mobile apps, and modern web platforms.",
  openGraph: {
    title: "Shaun — AI Engineer & Full-Stack Builder",
    description:
      "Production-ready AI systems, RAG pipelines, mobile apps, and modern web products.",
    url: "https://shaunakmukherjee.github.io",
    siteName: "Shaun Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Shaun — AI Engineer & Full-Stack Builder",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaun — AI Engineer & Full-Stack Builder",
    description:
      "Production-ready AI systems, RAG pipelines, mobile apps, and modern web products.",
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
