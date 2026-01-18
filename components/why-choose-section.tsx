"use client"

import { useRef } from "react"
import { Shield, Users, Award, Clock, HeadphonesIcon, Sparkles } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const reasons = [
  {
    icon: Shield,
    title: "Trusted & Transparent",
    description: "No hidden fees or surprises. We believe in clear communication and honest guidance throughout.",
  },
  {
    icon: Users,
    title: "Personalized Approach",
    description: "Every student is unique. We tailor our services to match your specific goals and circumstances.",
  },
  {
    icon: Award,
    title: "Expert Counselors",
    description: "Our team includes certified education consultants with international experience and expertise.",
  },
  {
    icon: Clock,
    title: "End-to-End Support",
    description: "From initial counseling to visa approval and beyond, we handle every aspect of your journey.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Assistance",
    description: "Questions don't follow office hours. Our support team is available whenever you need guidance.",
  },
  {
    icon: Sparkles,
    title: "Proven Track Record",
    description: "With 10,000+ successful placements and 98% visa success rate, our results speak for themselves.",
  },
]

export function WhyChooseSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section ref={ref} className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Why HighLinks
            </span>
            <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Your Success Is Our Priority
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              For over 15 years, we have been helping students turn their international education dreams into reality.
              Here is what sets us apart.
            </p>

            {/* Visual element */}
            <div className="mt-8 hidden lg:block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-48 w-48">
                    {/* Animated rings */}
                    <div className="absolute inset-0 animate-ping rounded-full border-2 border-primary/20 [animation-duration:3s]" />
                    <div className="absolute inset-4 animate-ping rounded-full border-2 border-primary/30 [animation-delay:0.5s] [animation-duration:3s]" />
                    <div className="absolute inset-8 animate-ping rounded-full border-2 border-primary/40 [animation-delay:1s] [animation-duration:3s]" />

                    {/* Center icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-gradient-to-br from-primary to-accent p-6 shadow-lg shadow-primary/25">
                        <Award className="h-12 w-12 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className={cn(
                  "group rounded-xl border border-border/50 bg-card p-5 transition-all duration-500 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5",
                  isInView ? "animate-fade-in-up opacity-100" : "opacity-0",
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/15">
                  <reason.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-1 font-semibold text-foreground">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
