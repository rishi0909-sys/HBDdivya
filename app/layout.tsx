import type { Metadata } from "next"
import type React from "react"
import { Playpen_Sans, Raleway } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _playpen = Playpen_Sans({ subsets: ["latin"], weight: ["400", "700", "800"] })
const _raleway = Raleway({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Happy Birthday Divya 💖",
  description: "A special birthday celebration for Divya",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
