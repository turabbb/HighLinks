import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { WhatsAppButton } from "@/components/whatsapp-button"

const _inter = Inter({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HighLinks | Study Abroad Consultants in Pakistan",
  description:
    "Your trusted partner for overseas education. Expert guidance for studying in USA, UK, Canada, Australia & Europe. Free consultation available.",
  keywords:
    "study abroad consultants, overseas education, student visa, study in USA, study in UK, study in Canada, study in Australia",
  generator: 'v0.app',
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  themeColor: "#1e3a8a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
