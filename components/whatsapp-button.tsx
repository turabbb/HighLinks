"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

// WhatsApp SVG Icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const whatsappNumbers = [
  { number: "923294474104", label: "+92 329 4474104" },
  { number: "923274400236", label: "+92 327 4400236" },
]

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [showOptions, setShowOptions] = useState(false)

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => setIsVisible(true), 1500)

    // Show tooltip after 5 seconds
    const tooltipTimer = setTimeout(() => setShowTooltip(true), 5000)

    return () => {
      clearTimeout(timer)
      clearTimeout(tooltipTimer)
    }
  }, [])

  const message = encodeURIComponent("Hi! I'm interested in learning more about studying abroad. Can you help me?")

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-500",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0",
      )}
    >
      {/* Tooltip */}
      {showTooltip && !showOptions && (
        <div className="absolute bottom-full right-0 mb-3 animate-fade-in-up">
          <div className="relative rounded-2xl bg-foreground px-4 py-3 shadow-2xl">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -right-2 -top-2 rounded-full bg-card p-1.5 shadow-md transition-transform hover:scale-110"
            >
              <X className="h-3 w-3 text-muted-foreground" />
            </button>
            <p className="whitespace-nowrap text-sm font-medium text-background">Need help? Chat with us!</p>
            {/* Arrow */}
            <div className="absolute -bottom-2 right-8 h-4 w-4 rotate-45 bg-foreground" />
          </div>
        </div>
      )}

      {/* WhatsApp Options Popup */}
      {showOptions && (
        <div className="absolute bottom-full right-0 mb-3 animate-fade-in-up">
          <div className="relative rounded-2xl bg-card border border-border p-3 shadow-2xl min-w-[200px]">
            <button
              onClick={() => setShowOptions(false)}
              className="absolute -right-2 -top-2 rounded-full bg-card border border-border p-1.5 shadow-md transition-transform hover:scale-110"
            >
              <X className="h-3 w-3 text-muted-foreground" />
            </button>
            <p className="text-xs font-medium text-muted-foreground mb-2">Choose a number to chat:</p>
            <div className="space-y-2">
              {whatsappNumbers.map((wa) => (
                <a
                  key={wa.number}
                  href={`https://wa.me/${wa.number}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-[#25D366] px-3 py-2 text-white text-sm font-medium transition-all hover:bg-[#20BD5A]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {wa.label}
                </a>
              ))}
            </div>
            {/* Arrow */}
            <div className="absolute -bottom-2 right-8 h-4 w-4 rotate-45 bg-card border-b border-r border-border" />
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={() => {
          setShowOptions(!showOptions)
          setShowTooltip(false)
        }}
        className={cn(
          "group relative flex items-center justify-center bg-[#25D366] text-white shadow-2xl transition-all duration-500",
          "hover:scale-110 hover:shadow-[0_0_40px_rgba(37,211,102,0.6)]",
          "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] before:transition-transform before:duration-700 hover:before:translate-x-[200%]",
          "h-14 w-14 rounded-full"
        )}
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse ring effect */}
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-30" />
        <span className="absolute inset-0 rounded-full animate-pulse bg-[#25D366] opacity-20" />
        
        {/* Icon */}
        <span className="relative z-10">
          <WhatsAppIcon className="h-7 w-7" />
        </span>
      </button>
    </div>
  )
}
