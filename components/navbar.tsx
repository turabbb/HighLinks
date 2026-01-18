"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "./logo"

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Study Abroad", href: "/study-abroad" },
  { name: "Student Visa", href: "/student-visa" },
  { name: "News & Events", href: "/news-events" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top contact bar */}
      <div className="fixed top-0 left-0 right-0 z-50 hidden md:block">
        <div className="mx-auto max-w-7xl px-4 pt-3">
          <div className="flex justify-end gap-6 text-sm">
            <a
              href="tel:+923294474104"
              className="flex items-center gap-2 text-foreground/70 transition-colors hover:text-primary"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>+92 329 4474104</span>
            </a>
            <a
              href="mailto:info@highlinkspk.com"
              className="flex items-center gap-2 text-foreground/70 transition-colors hover:text-primary"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>info@highlinkspk.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={cn(
          "fixed left-1/2 z-40 mx-auto w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 transition-all duration-500 md:top-10",
          isScrolled ? "top-3" : "top-10 md:top-14",
          isScrolled
            ? "rounded-2xl border border-border/50 bg-card/95 shadow-lg shadow-primary/5 backdrop-blur-xl"
            : "rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md",
        )}
      >
        <nav className="flex items-center justify-between px-4 py-3 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300",
                  isScrolled
                    ? "text-foreground/80 hover:bg-secondary hover:text-foreground"
                    : "text-foreground/90 hover:bg-white/20 hover:text-foreground",
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className={cn(
              "hidden rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 md:block",
              "bg-gradient-to-r from-primary to-accent text-primary-foreground",
              "hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5",
            )}
          >
            Free Consultation
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "rounded-lg p-2 transition-colors md:hidden",
              isScrolled ? "hover:bg-secondary" : "hover:bg-white/20",
            )}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 md:hidden",
            isMobileMenuOpen ? "max-h-96 border-t border-border/30" : "max-h-0",
          )}
        >
          <div className="space-y-1 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 border-t border-border/30 pt-4">
              <a href="tel:+923294474104" className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                +92 329 4474104
              </a>
            </div>
            <Link
              href="/contact"
              className="mt-3 block rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
