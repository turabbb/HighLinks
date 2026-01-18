"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const partners = [
  {
    name: "StudyReach",
    description: "Global student recruitment platform by AECC Global",
    logo: "/studyreach.png",
  },
  {
    name: "Shorelight",
    description: "University pathway programs",
    logo: "/shorelight.png",
  },
  {
    name: "Global University Systems",
    description: "International education network",
    logo: "/gus.png",
  },
  {
    name: "ApplyBoard",
    description: "AI-powered international recruitment",
    logo: "/applyboard.png",
  },
  {
    name: "KC Overseas",
    description: "Education consulting services",
    logo: "/kcoverseas.png",
  },
  {
    name: "Crizac",
    description: "Student placement solutions",
    logo: "/crizac.png",
  },
  {
    name: "ED Chimp",
    description: "Digital education platform",
    logo: "/edchimp.png",
  },
  {
    name: "UniPartner",
    description: "University partnership network",
    logo: "/unipartner.png",
  },
  {
    name: "Oxford International",
    description: "30+ years in education, 500K+ students served",
    logo: "/oxfordInternationGroup.png",
  },
]

export function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    const handleMouseEnter = () => cancelAnimationFrame(animationId)
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll)
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section className="bg-secondary/50 py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Trusted Partners
          </span>
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">Our Global Network</h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            We work with leading education platforms and institutions worldwide to bring you the best opportunities.
          </p>
        </div>

        {/* Partners carousel - infinite scroll */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-secondary/50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-secondary/50 to-transparent" />

          <div ref={scrollRef} className="scrollbar-hide flex gap-6 overflow-x-hidden">
            {/* Duplicate partners for infinite scroll effect */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="group flex min-w-[280px] flex-shrink-0 flex-col items-center rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Logo image */}
                <div className="mb-4 flex h-20 w-40 items-center justify-center rounded-xl bg-white p-3 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={140}
                    height={60}
                    className="h-auto max-h-14 w-auto max-w-full object-contain"
                  />
                </div>
                <h3 className="mb-1 text-center font-semibold text-foreground">{partner.name}</h3>
                <p className="text-center text-sm text-muted-foreground">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { value: "1,500+", label: "Partner Universities" },
            { value: "150,000+", label: "Study Programs" },
            { value: "180+", label: "Countries Covered" },
            { value: "95%", label: "Success Rate" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-primary md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
