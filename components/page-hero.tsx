"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

interface PageHeroProps {
  title: string
  subtitle: string
  description?: string
}

export function PageHero({ title, subtitle, description }: PageHeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.3 })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-secondary/50 via-background to-background pt-32 pb-20"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.9_0.02_240/0.3)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.9_0.02_240/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-primary/10 to-accent/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-accent/10 to-primary/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div
          className={cn(
            "mx-auto max-w-3xl text-center transition-all duration-700",
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            {subtitle}
          </span>
          <h1 className="text-balance font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && <p className="mt-6 text-pretty text-lg text-muted-foreground md:text-xl">{description}</p>}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 80L60 73.3C120 66.7 240 53.3 360 46.7C480 40 600 40 720 43.3C840 46.7 960 53.3 1080 56.7C1200 60 1320 60 1380 60L1440 60V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V80Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  )
}
