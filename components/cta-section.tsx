"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Phone, X, Copy, Check } from "lucide-react"

export function CtaSection() {
  const [showPhonePopup, setShowPhonePopup] = useState(false)
  const [copied, setCopied] = useState(false)
  const phoneNumber = "+92 329 4474104"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber.replace(/\s/g, ''))
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-accent p-8 md:p-16">
          {/* Background decoration */}
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          {/* Content */}
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-balance font-serif text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
              Ready to Start Your Journey?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-primary-foreground/80">
              Book a free consultation with our expert counselors and take the first step toward your international
              education dream.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Book Free Consultation
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <button
                onClick={() => setShowPhonePopup(true)}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </button>
            </div>

            <p className="mt-6 text-sm text-primary-foreground/70">
              Your Future, Our Concern — Free guidance, no obligations
            </p>
          </div>
        </div>
      </div>

      {/* Phone Number Popup */}
      {showPhonePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setShowPhonePopup(false)}>
          <div 
            className="relative mx-4 w-full max-w-sm rounded-2xl bg-card p-6 shadow-2xl animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPhonePopup(false)}
              className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center">
              <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Call Us Now</h3>
              <p className="mt-2 text-sm text-muted-foreground">Reach out for a free consultation</p>
              
              <div className="mt-6 rounded-xl bg-secondary/50 p-4">
                <p className="text-2xl font-bold text-foreground">{phoneNumber}</p>
              </div>

              <div className="mt-4 flex gap-3">
                <a
                  href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                  className="flex-1 rounded-xl bg-primary py-3 text-center font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                >
                  Call
                </a>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 font-semibold text-foreground transition-all hover:bg-secondary"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-green-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
