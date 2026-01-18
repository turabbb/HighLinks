"use client"

import { useRef, useEffect } from "react"
import { GraduationCap, Calendar } from "lucide-react"

const successStories = [
  {
    name: "Muhammad Ali Raza",
    university: "Harvard University",
    country: "USA",
    flag: "🇺🇸",
    program: "MBA",
    year: "2024",
    scholarship: "$80,000 Scholarship",
    story:
      "Coming from a small town in Punjab, I never imagined I'd be walking the halls of Harvard. HighLinks believed in me when I didn't believe in myself. Their guidance on my application essays and interview prep was invaluable. Today, I'm pursuing my MBA with a substantial scholarship!",
    beforeAfter: "From Lahore Grammar School to Harvard Business School",
  },
  {
    name: "Ayesha Malik",
    university: "University of Oxford",
    country: "UK",
    flag: "🇬🇧",
    program: "MSc Computer Science",
    year: "2024",
    scholarship: "Rhodes Scholar",
    story:
      "As a woman in tech from Pakistan, I faced many challenges. HighLinks helped me articulate my unique story and navigate the complex Rhodes Scholarship process. Their mock interviews and feedback sessions prepared me for every question. I'm now a proud Rhodes Scholar!",
    beforeAfter: "From LUMS to Oxford as a Rhodes Scholar",
  },
  {
    name: "Hassan Ahmed",
    university: "University of Toronto",
    country: "Canada",
    flag: "🇨🇦",
    program: "Engineering",
    year: "2023",
    scholarship: "Full Tuition Waiver",
    story:
      "The visa process for Canada seemed overwhelming until HighLinks stepped in. They guided me through every document, every form, and even helped me prepare for my interview. Within 3 weeks, I had my visa. Now I'm thriving in Toronto with a full scholarship!",
    beforeAfter: "From NED University to UofT Engineering",
  },
  {
    name: "Fatima Zahra",
    university: "University of Melbourne",
    country: "Australia",
    flag: "🇦🇺",
    program: "Medicine",
    year: "2024",
    scholarship: "Merit Scholarship",
    story:
      "Getting into medical school abroad seemed impossible. HighLinks not only helped me find programs that matched my profile but also guided me through the MCAT preparation and medical school interviews. Their holistic approach made all the difference!",
    beforeAfter: "From Aga Khan to Melbourne Medical School",
  },
  {
    name: "Omar Farooq",
    university: "TU Munich",
    country: "Germany",
    flag: "🇩🇪",
    program: "Mechanical Engineering",
    year: "2023",
    scholarship: "DAAD Scholar",
    story:
      "Studying in Germany tuition-free while receiving a DAAD stipend was a dream come true. HighLinks helped me understand the German university system, prepare my application portfolio, and even provided German language resources. Danke, HighLinks!",
    beforeAfter: "From NUST to TU Munich with DAAD funding",
  },
]

// Duplicate for seamless infinite scroll
const duplicatedStories = [...successStories, ...successStories]

export function SuccessStoriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.3

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
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Success Stories
          </span>
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Dreams Turned Reality
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Real students, real journeys, real success. See how we've helped transform lives through international
            education.
          </p>
        </div>

        {/* Success stories carousel - smooth auto-scroll */}
        <div
          ref={scrollRef}
          className="scrollbar-hide -mx-4 flex gap-5 overflow-x-auto px-4"
          style={{ scrollBehavior: 'auto' }}
        >
          {duplicatedStories.map((story, index) => (
            <div
              key={`${story.name}-${index}`}
              className="min-w-[280px] max-w-[280px] flex-shrink-0 rounded-xl border border-border/50 bg-card p-4 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Header with country flag and scholarship */}
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  {story.flag} {story.country}
                </span>
                <span className="text-xs font-semibold text-accent">{story.scholarship}</span>
              </div>

              {/* Student name and initials avatar */}
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-primary-foreground">
                  {story.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{story.name}</h3>
                  <p className="text-xs text-muted-foreground">{story.university}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-3 flex flex-wrap gap-1">
                <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-xs">
                  <GraduationCap className="h-3 w-3 text-primary" />
                  {story.program}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-xs">
                  <Calendar className="h-3 w-3 text-primary" />
                  {story.year}
                </span>
              </div>

              {/* Story - shortened */}
              <p className="text-xs leading-relaxed text-muted-foreground line-clamp-3">{story.story}</p>

              {/* Verified badge */}
              <div className="mt-3 flex items-center gap-1.5 border-t border-border pt-3">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                <span className="text-xs font-medium text-muted-foreground">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
