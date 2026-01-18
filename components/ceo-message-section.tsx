"use client"

import { useRef } from "react"
import { Quote } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

export function CeoMessageSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.3 })

  return (
    <section ref={ref} className="bg-gradient-to-b from-background via-secondary/30 to-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "relative mx-auto max-w-4xl rounded-2xl border border-border/50 bg-card p-8 shadow-sm transition-all duration-700 md:p-12",
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
        >
          {/* Decorative quote icon */}
          <div className="absolute -top-6 left-8 rounded-full bg-gradient-to-br from-primary to-accent p-4 shadow-lg shadow-primary/25">
            <Quote className="h-6 w-6 text-primary-foreground" />
          </div>

          {/* Content */}
          <div className="mt-4">
            <span className="mb-6 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              A Message from the CEO
            </span>

            <blockquote className="font-serif text-xl leading-relaxed text-foreground md:text-2xl">
              <span className="text-muted-foreground">"</span>
              At HighLinks, our mission has always been simple — to guide students toward opportunities that truly shape
              their future. Every journey is personal, and our team is committed to supporting you at every step. We do
              not just process applications; we build futures.
              <span className="text-muted-foreground">"</span>
            </blockquote>

            <div className="mt-8 border-t border-border pt-6">
              <p className="font-semibold text-foreground">Adnan Farooq</p>
              <p className="text-sm text-muted-foreground">Founder & CEO, HighLinks</p>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute -bottom-px -right-px h-32 w-32 rounded-br-2xl bg-gradient-to-tl from-primary/5 to-transparent" />
        </div>
      </div>
    </section>
  )
}
