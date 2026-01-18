"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const destinations = [
  {
    country: "United States",
    code: "usa",
    flag: "https://flagcdn.com/w320/us.png",
    universities: "500+",
    description: "Home to Ivy League and world-renowned research universities",
  },
  {
    country: "United Kingdom",
    code: "uk",
    flag: "https://flagcdn.com/w320/gb.png",
    universities: "150+",
    description: "Experience centuries of academic excellence and rich culture",
  },
  {
    country: "Australia",
    code: "australia",
    flag: "https://flagcdn.com/w320/au.png",
    universities: "40+",
    description: "World-class institutions in vibrant, multicultural cities",
  },
  {
    country: "Canada",
    code: "canada",
    flag: "https://flagcdn.com/w320/ca.png",
    universities: "100+",
    description: "Quality education with excellent post-study work opportunities",
  },
  {
    country: "Ireland",
    code: "ireland",
    flag: "https://flagcdn.com/w320/ie.png",
    universities: "30+",
    description: "Gateway to Europe with English-taught programs",
  },
  {
    country: "Sweden",
    code: "sweden",
    flag: "https://flagcdn.com/w320/se.png",
    universities: "35+",
    description: "Innovation hub with world-leading research universities",
  },
  {
    country: "Finland",
    code: "finland",
    flag: "https://flagcdn.com/w320/fi.png",
    universities: "25+",
    description: "Top-ranked education system with cutting-edge research",
  },
  {
    country: "Latvia",
    code: "latvia",
    flag: "https://flagcdn.com/w320/lv.png",
    universities: "20+",
    description: "Affordable European education with diverse programs",
  },
]

// Duplicate for seamless infinite scroll
const duplicatedDestinations = [...destinations, ...destinations]

export function DestinationsSection() {
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
    <section className="bg-gradient-to-b from-background via-secondary/30 to-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Study Destinations
          </span>
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
            Explore Global Opportunities
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Discover top study destinations with world-class universities and diverse cultural experiences.
          </p>
        </div>

        {/* Carousel with smooth auto-scroll */}
        <div
          ref={scrollRef}
          className="scrollbar-hide -mx-4 flex gap-6 overflow-x-auto px-4"
        >
          {duplicatedDestinations.map((dest, index) => (
            <Link
              key={`${dest.code}-${index}`}
              href={`/study-abroad/${dest.code}`}
              className="group relative min-w-[280px] flex-shrink-0 overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 md:min-w-[300px]"
            >
              {/* Flag image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={dest.flag || "/placeholder.svg"}
                  alt={`${dest.country} flag`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-foreground">{dest.country}</h3>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {dest.universities} Unis
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{dest.description}</p>

                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Explore <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
