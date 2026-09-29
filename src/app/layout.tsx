import Navbar from '@/components/Navbar'
// @ts-ignore: Next.js supports global CSS imports in the app directory
import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  metadataBase: new URL("https://shaunakmukherjee.github.io"),
  title:
    "Shaun Mukherjee | Fractional CTO & AI Architect for Founders and Investors",
  description:
    "Senior technical leadership for founders and investors: AI product strategy, technical due diligence, and production builds, without a full-time hire.",
  verification: {
    other: {
      'msvalidate.01': ['06AF66FADC8DBE65F9B264C90D3D37FE'],
    },
  },
    openGraph: {
    title:
      "Shaun Mukherjee | Fractional CTO & AI Architect for Founders and Investors",
    description:
      "Senior technical leadership for founders and investors: AI product strategy, technical due diligence, and production builds, without a full-time hire.",
    url: "https://shaunakmukherjee.github.io",
    siteName: "Shaun's Portfolio",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Shaun Mukherjee, Fractional CTO & AI Architect",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Shaun Mukherjee | Fractional CTO & AI Architect for Founders and Investors",
    description:
      "Senior technical leadership for founders and investors: AI product strategy, technical due diligence, and production builds, without a full-time hire.",
    images: ["/og.jpg"],
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
        <Script
            src="https://cloud.umami.is/script.js" 
            data-website-id="3e8748e1-9315-4cde-b85a-15f384f9886b"
            strategy="afterInteractive"
          />
      </body>
    </html>
  )
}
