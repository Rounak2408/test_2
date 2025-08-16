import type React from "react"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
  preload: true,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <head>
        <title>Quick Question</title>
        <meta name="description" content="Just a simple question..." />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
