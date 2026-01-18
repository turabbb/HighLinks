"use client"

import { useState, useEffect } from "react"
import { X, Sparkles, MessageCircle, Send } from "lucide-react"
import Image from "next/image"

const countries = [
  { name: "United States", flag: "🇺🇸", code: "usa" },
  { name: "United Kingdom", flag: "🇬🇧", code: "uk" },
  { name: "Canada", flag: "🇨🇦", code: "canada" },
  { name: "Australia", flag: "🇦🇺", code: "australia" },
  { name: "Ireland", flag: "🇮🇪", code: "ireland" },
  { name: "Belgium", flag: "🇧🇪", code: "belgium" },
  { name: "Cyprus", flag: "🇨🇾", code: "cyprus" },
  { name: "Denmark", flag: "🇩🇰", code: "denmark" },
  { name: "Hungary", flag: "🇭🇺", code: "hungary" },
  { name: "Sweden", flag: "🇸🇪", code: "sweden" },
  { name: "Finland", flag: "🇫🇮", code: "finland" },
  { name: "Latvia", flag: "🇱🇻", code: "latvia" },
]

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState<"country" | "form" | "success">("country")
  const [selectedCountry, setSelectedCountry] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Check if popup was already shown in this session
    const hasSeenPopup = sessionStorage.getItem("highlinkspk_popup_seen")
    if (!hasSeenPopup) {
      // Show popup after 15 seconds
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 15000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem("highlinkspk_popup_seen", "true")
  }

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country)
    setStep("form")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create mailto link with form data
    const subject = encodeURIComponent(`New Inquiry - ${selectedCountry}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nInterested Country: ${selectedCountry}`
    )
    
    // Open mailto
    window.location.href = `mailto:info@highlinkspk.com?subject=${subject}&body=${body}`
    
    // Small delay to show success state
    setTimeout(() => {
      setIsSubmitting(false)
      setStep("success")
    }, 500)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* Popup content */}
      <div className="relative w-full max-w-md animate-in zoom-in-95 fade-in duration-300">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute right-3 top-3 z-10 rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Decorative header */}
          <div className="relative bg-gradient-to-br from-primary to-accent px-6 py-8 text-center">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,white/10_1px,transparent_1px),linear-gradient(to_bottom,white/10_1px,transparent_1px)] bg-[size:20px_20px]" />
            <div className="relative">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
                <Sparkles className="h-4 w-4" />
                Welcome to HighLinks
              </div>
              <h2 className="font-serif text-2xl font-bold text-white md:text-3xl">
                For Your Future
              </h2>
              <p className="mt-2 text-white/80">
                Let us help you achieve your study abroad dreams
              </p>
            </div>
          </div>

          {/* Content area */}
          <div className="p-6">
            {step === "country" && (
              <div>
                <p className="mb-4 text-center text-muted-foreground">
                  Choose your dream study destination
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {countries.map((country) => (
                    <button
                      key={country.code}
                      onClick={() => handleCountrySelect(country.name)}
                      className="flex items-center gap-3 rounded-xl border border-border p-4 transition-all hover:border-primary hover:bg-primary/5 hover:shadow-md"
                    >
                      <span className="text-3xl">{country.flag}</span>
                      <span className="text-sm font-medium">{country.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === "form" && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-4 flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-2 text-sm">
                  <span className="font-medium text-primary">Selected:</span>
                  <span>{selectedCountry}</span>
                  <button 
                    type="button"
                    onClick={() => setStep("country")}
                    className="ml-auto text-xs text-primary hover:underline"
                  >
                    Change
                  </button>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium">Contact Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Enter your email"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Submit Inquiry
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}

            {step === "success" && (
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Thank You!</h3>
                <p className="mb-6 text-muted-foreground">
                  Your inquiry has been submitted. We'll get back to you soon!
                </p>
                
                <p className="mb-4 text-sm text-muted-foreground">
                  For instant support, connect with us on WhatsApp:
                </p>
                
                <div className="flex flex-col gap-3">
                  <a
                    href="https://wa.me/923294474104"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp: +92 329 4474104
                  </a>
                  <a
                    href="https://wa.me/923274400236"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp: +92 327 4400236
                  </a>
                </div>

                <button
                  onClick={handleClose}
                  className="mt-4 text-sm text-muted-foreground hover:text-foreground hover:underline"
                >
                  Close this popup
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
