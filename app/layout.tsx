import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rizal Farhan Nanda",
  description: "Portfolio of Rizal Farhan Nanda, a UI/UX Designer based in Semarang, Indonesia",
    generator: 'v0.dev',
  icons: {
    icon: "/images/aku1.png",
},
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
