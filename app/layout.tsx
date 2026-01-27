import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { WelcomePopup } from "@/components/welcome-popup"

const _inter = Inter({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Highlinks | Study Abroad Consultants in Pakistan",
    template: "%s | Highlinks",
  },
  description:
    "Your trusted partner for overseas education. Expert guidance for studying in USA, UK, Canada, Australia & Europe. Free consultation available.",
  keywords:
    "study abroad consultants, overseas education, student visa, study in USA, study in UK, study in Canada, study in Australia",
  generator: 'v0.app',
  applicationName: "Highlinks",
  icons: {
    icon: [
      { url: "/logo.jpeg", type: "image/jpeg" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/logo.jpeg",
    shortcut: "/logo.jpeg",
  },
  openGraph: {
    type: "website",
    siteName: "Highlinks",
    title: "Highlinks | Study Abroad Consultants in Pakistan",
    description: "Your trusted partner for overseas education. Expert guidance for studying in USA, UK, Canada, Australia & Europe.",
    images: [
      {
        url: "/logo.jpeg",
        width: 512,
        height: 512,
        alt: "Highlinks Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Highlinks | Study Abroad Consultants in Pakistan",
    description: "Your trusted partner for overseas education.",
    images: ["/logo.jpeg"],
  },
  manifest: "/manifest.json",
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
        <WelcomePopup />
      </body>
    </html>
  )
}
