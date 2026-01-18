"use client"

import { useState, useEffect, useRef } from "react"
import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, GraduationCap, Briefcase, DollarSign, Globe } from "lucide-react"

// Animated counter component
function AnimatedScholarship() {
  const [count, setCount] = useState(10)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const milestones = [10, 20, 30, 40, 50, 40, 30, 20, 10] // Up and down cycle
    let milestoneIndex = 0
    let currentValue = 10
    let targetValue = milestones[0]
    
    const animateToTarget = () => {
      const stepDuration = 30 // ms per step for smooth animation
      const pauseDuration = 800 // pause at each milestone
      
      const animationInterval = setInterval(() => {
        if (currentValue < targetValue) {
          // Going up
          currentValue += 1
          setCount(currentValue)
        } else if (currentValue > targetValue) {
          // Going down
          currentValue -= 1
          setCount(currentValue)
        } else {
          // Reached target, pause then move to next milestone
          clearInterval(animationInterval)
          
          setTimeout(() => {
            milestoneIndex = (milestoneIndex + 1) % milestones.length
            targetValue = milestones[milestoneIndex]
            animateToTarget()
          }, pauseDuration)
        }
      }, stepDuration)
      
      return animationInterval
    }

    const interval = animateToTarget()
    
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isVisible])

  return (
    <div ref={ref} className="relative">
      <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="flex h-full items-center justify-center">
          <div className="text-center">
            <div className="mb-4 text-6xl font-bold text-primary md:text-7xl transition-all duration-500">
              <span className="inline-block">${count}K+</span>
            </div>
            <p className="text-lg text-muted-foreground">Average scholarship value secured</p>
            {isVisible && (
              <div className="mt-4 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      count >= (i + 1) * 10 ? 'bg-primary scale-125' : 'bg-primary/30'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-primary/20 animate-ping" />
      <div className="absolute -bottom-4 -left-4 h-6 w-6 rounded-full bg-accent/20 animate-ping animation-delay-300" />
    </div>
  )
}

const destinations = [
  {
    country: "United States",
    code: "usa",
    flag: "https://flagcdn.com/w320/us.png",
    universities: "500+",
    highlights: ["Ivy League universities", "World-class research facilities", "OPT work opportunities"],
    popularCourses: ["Computer Science", "Business", "Engineering", "Medicine"],
  },
  {
    country: "United Kingdom",
    code: "uk",
    flag: "https://flagcdn.com/w320/gb.png",
    universities: "150+",
    highlights: ["Historic institutions", "1-year Masters programs", "Graduate visa route"],
    popularCourses: ["Finance", "Law", "Arts", "Medicine"],
  },
  {
    country: "Canada",
    code: "canada",
    flag: "https://flagcdn.com/w320/ca.png",
    universities: "100+",
    highlights: ["Affordable tuition", "PR pathway", "Safe environment"],
    popularCourses: ["IT", "Healthcare", "Business", "Engineering"],
  },
  {
    country: "Australia",
    code: "australia",
    flag: "https://flagcdn.com/w320/au.png",
    universities: "40+",
    highlights: ["High quality of life", "Post-study work visa", "Research excellence"],
    popularCourses: ["Nursing", "Engineering", "Accounting", "IT"],
  },
  {
    country: "Ireland",
    code: "ireland",
    flag: "https://flagcdn.com/w320/ie.png",
    universities: "30+",
    highlights: ["English-speaking", "Tech hub of Europe", "Stay back options"],
    popularCourses: ["Technology", "Pharma", "Business", "Data Science"],
  },
  {
    country: "Sweden",
    code: "sweden",
    flag: "https://flagcdn.com/w320/se.png",
    universities: "50+",
    highlights: ["Innovation hub", "English programs", "High quality of life"],
    popularCourses: ["Engineering", "Design", "Business", "Sustainability"],
  },
  {
    country: "Finland",
    code: "finland",
    flag: "https://flagcdn.com/w320/fi.png",
    universities: "40+",
    highlights: ["Best education system", "Affordable tuition", "Safe country"],
    popularCourses: ["IT", "Education", "Health Sciences", "Design"],
  },
  {
    country: "Latvia",
    code: "latvia",
    flag: "https://flagcdn.com/w320/lv.png",
    universities: "30+",
    highlights: ["Affordable education", "EU degree", "Schengen access"],
    popularCourses: ["Medicine", "IT", "Business", "Engineering"],
  },
  {
    country: "Belgium",
    code: "belgium",
    flag: "https://flagcdn.com/w320/be.png",
    universities: "25+",
    highlights: ["Heart of Europe", "Affordable tuition", "Multilingual environment"],
    popularCourses: ["Engineering", "Law", "Medicine", "Business"],
  },
  {
    country: "Cyprus",
    code: "cyprus",
    flag: "https://flagcdn.com/w320/cy.png",
    universities: "15+",
    highlights: ["Mediterranean climate", "English programs", "EU member state"],
    popularCourses: ["Medicine", "Business", "Hospitality", "IT"],
  },
  {
    country: "Denmark",
    code: "denmark",
    flag: "https://flagcdn.com/w320/dk.png",
    universities: "20+",
    highlights: ["Innovative education", "Work-life balance", "High quality of life"],
    popularCourses: ["Engineering", "Design", "Business", "IT"],
  },
  {
    country: "Hungary",
    code: "hungary",
    flag: "https://flagcdn.com/w320/hu.png",
    universities: "30+",
    highlights: ["Affordable tuition", "Quality medical programs", "Rich culture"],
    popularCourses: ["Medicine", "Dentistry", "Engineering", "Business"],
  },
]

const benefits = [
  {
    icon: GraduationCap,
    title: "World-Class Education",
    description: "Access to globally recognized universities and cutting-edge academic programs.",
  },
  {
    icon: Globe,
    title: "Global Exposure",
    description: "Experience diverse cultures, build international networks, and broaden your worldview.",
  },
  {
    icon: Briefcase,
    title: "Career Opportunities",
    description: "Enhanced employability with international experience and global job market access.",
  },
  {
    icon: DollarSign,
    title: "Scholarship Options",
    description: "Numerous scholarships and financial aid opportunities for international students.",
  },
]

export default function StudyAbroadPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        subtitle="Study Abroad"
        title="Your Gateway to Global Education"
        description="Discover world-class universities across top study destinations. We guide you through every step of your international education journey."
      />

      {/* Why Study Abroad */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Why Study Abroad
            </span>
            <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Transform Your Future
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group rounded-2xl border border-border/50 bg-card p-6 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 inline-flex rounded-xl bg-primary/10 p-3 transition-transform duration-300 group-hover:scale-110">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="bg-gradient-to-b from-background via-secondary/30 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Popular Destinations
            </span>
            <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Choose Your Destination
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Explore top study destinations with world-class universities and excellent career prospects.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {destinations.map((dest) => (
              <Link
                key={dest.code}
                href={`/study-abroad/${dest.code}`}
                className="group overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Flag */}
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={dest.flag || "/placeholder.svg"}
                    alt={`${dest.country} flag`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">{dest.country}</h3>
                    <span className="rounded-full bg-primary/90 px-2 py-0.5 text-xs font-medium text-primary-foreground">
                      {dest.universities}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="mb-3">
                    <p className="mb-1 text-xs font-medium uppercase text-muted-foreground">Highlights</p>
                    <ul className="space-y-1">
                      {dest.highlights.slice(0, 2).map((highlight) => (
                        <li key={highlight} className="text-sm text-foreground">
                          • {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {dest.popularCourses.slice(0, 3).map((course) => (
                      <span
                        key={course}
                        className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
                      >
                        {course}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                Financial Support
              </span>
              <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
                Scholarship Opportunities
              </h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                We help you explore and apply for scholarships that can significantly reduce your education costs. From
                merit-based awards to need-based grants, there are numerous opportunities available.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Government scholarships from host countries",
                  "University-specific merit awards",
                  "Research assistantships and fellowships",
                  "Need-based financial aid programs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 text-base font-semibold text-primary transition-colors hover:text-accent"
              >
                Get Scholarship Guidance
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <AnimatedScholarship />
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  )
}
