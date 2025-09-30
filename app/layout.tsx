import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { AnimationProvider } from "@/context/animation-context"
import "./globals.css"

export const metadata: Metadata = {
  title: "DigiMAXX - AI-Powered Marketing Solutions",
  description:
    "Innovative AI-driven strategies to make your brand ubiquitous, stay ahead of the competition and drive unprecedented growth.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
          `
        }} />
      </head>
      <body>
        <AnimationProvider>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </AnimationProvider>
        <Analytics />
      </body>
    </html>
  )
}