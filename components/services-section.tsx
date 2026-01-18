"use client"

import { useRef } from "react"
import Link from "next/link"
import { GraduationCap, FileCheck, Plane, Building, Users, HeadphonesIcon, ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: GraduationCap,
    title: "University Admissions",
    description: "Expert guidance for applications to top universities worldwide with personalized counseling.",
  },
  {
    icon: FileCheck,
    title: "Visa Assistance",
    description: "Complete visa documentation support with 98% success rate across all destinations.",
  },
  {
    icon: Plane,
    title: "Pre-Departure Support",
    description: "Comprehensive preparation including accommodation, travel, and orientation guidance.",
  },
  {
    icon: Building,
    title: "Scholarship Guidance",
    description: "Access to exclusive scholarships and financial aid opportunities for deserving students.",
  },
  {
    icon: Users,
    title: "Career Counseling",
    description: "Strategic career planning and course selection aligned with your professional goals.",
  },
  {
    icon: HeadphonesIcon,
    title: "Post-Arrival Support",
    description: "Continued assistance after you land, helping you settle into your new academic life.",
  },
]

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section ref={ref} className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Our Services
          </span>
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
            Comprehensive Support for Your Journey
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            From initial counseling to post-arrival support, we are with you at every step of your international
            education journey.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                "group relative rounded-2xl border border-border/50 bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5",
                isInView ? "animate-fade-in-up opacity-100" : "opacity-0",
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 p-3 transition-all duration-300 group-hover:scale-110 group-hover:from-primary/15 group-hover:to-accent/15">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-base font-semibold text-primary transition-colors hover:text-accent"
          >
            View All Services
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
