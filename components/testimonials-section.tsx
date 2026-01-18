"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Fatima Ali",
    destination: "University of Toronto, Canada",
    image: "/young-pakistani-woman-professional-headshot.jpg",
    quote:
      "HighLinks made my dream of studying in Canada a reality. Their guidance throughout the visa process was exceptional, and they were always available to answer my questions.",
    rating: 5,
  },
  {
    name: "Ahmed Hassan",
    destination: "University of Melbourne, Australia",
    image: "/young-pakistani-man-professional-headshot.jpg",
    quote:
      "I was confused about which country to choose. The counselors at HighLinks helped me understand my options and find the perfect fit. Now I am pursuing my MBA in Australia!",
    rating: 5,
  },
  {
    name: "Sara Khan",
    destination: "University of Oxford, UK",
    image: "/young-south-asian-woman-student-headshot.jpg",
    quote:
      "Getting into Oxford seemed impossible until I worked with HighLinks. Their application strategy and interview preparation made all the difference. Forever grateful!",
    rating: 5,
  },
  {
    name: "Usman Malik",
    destination: "MIT, USA",
    image: "/young-pakistani-man-graduate-headshot.jpg",
    quote:
      "The scholarship guidance from HighLinks helped me secure funding for my studies. Their team went above and beyond to help me achieve my goals.",
    rating: 5,
  },
  {
    name: "Ayesha Tariq",
    destination: "TU Munich, Germany",
    image: "/young-woman-hijab-professional-headshot.jpg",
    quote:
      "Studying in Germany tuition-free seemed too good to be true, but HighLinks helped me navigate the entire process seamlessly. Highly recommended!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollRef.current) return
    const cardWidth = 400
    const gap = 24
    scrollRef.current.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    })
    setActiveIndex(index)
  }, [])

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return
    const cardWidth = 400
    const gap = 24
    const index = Math.round(scrollRef.current.scrollLeft / (cardWidth + gap))
    setActiveIndex(index)
  }, [])

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % testimonials.length
      scrollToIndex(nextIndex)
    }, 5000)

    return () => clearInterval(interval)
  }, [activeIndex, isPaused, scrollToIndex])

  useEffect(() => {
    const ref = scrollRef.current
    if (!ref) return
    ref.addEventListener("scroll", handleScroll)
    return () => ref.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Student Success Stories
          </span>
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
            Hear From Our Students
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Thousands of students have achieved their dreams with our guidance. Here are some of their stories.
          </p>
        </div>

        {/* Testimonials carousel */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="scrollbar-hide -mx-4 flex gap-6 overflow-x-auto px-4 pb-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[350px] flex-shrink-0 rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 md:min-w-[400px]"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 text-muted-foreground">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-secondary">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.destination}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots and arrows */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
            className="rounded-full border border-border bg-card p-2 transition-all duration-300 hover:border-primary hover:text-primary"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  activeIndex === index ? "w-8 bg-primary" : "w-2 bg-border hover:bg-primary/50",
                )}
              />
            ))}
          </div>

          <button
            onClick={() => scrollToIndex(Math.min(testimonials.length - 1, activeIndex + 1))}
            className="rounded-full border border-border bg-card p-2 transition-all duration-300 hover:border-primary hover:text-primary"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
