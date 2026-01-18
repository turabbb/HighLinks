"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
import Image from "next/image"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = ["All", "Events", "News", "Webinars", "University Visits"]

const newsItems = [
  {
    id: 1,
    title: "Study Fair 2024: Meet Top UK Universities",
    date: "March 15, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Pearl Continental, Lahore",
    category: "Events",
    image: "/education-fair-with-university-booths.jpg",
    excerpt:
      "Join us for an exclusive opportunity to meet representatives from 20+ UK universities including Oxford, Cambridge, and Imperial College.",
    featured: true,
  },
  {
    id: 2,
    title: "Canada Immigration Updates for Students",
    date: "March 10, 2024",
    category: "News",
    image: "/canada-flag-with-students.jpg",
    excerpt:
      "Important changes to student visa requirements and post-graduation work permits. Learn how these updates affect your study plans.",
    featured: true,
  },
  {
    id: 3,
    title: "Scholarship Webinar: Fund Your Education",
    date: "March 5, 2024",
    time: "7:00 PM - 8:30 PM",
    location: "Online (Zoom)",
    category: "Webinars",
    image: "/online-webinar-scholarship-presentation.jpg",
    excerpt:
      "Learn about scholarship opportunities worth over $50,000 for Pakistani students. Register now to secure your spot.",
    featured: false,
  },
  {
    id: 4,
    title: "University of Melbourne Visit",
    date: "March 20, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "HighLinks Office, Lahore",
    category: "University Visits",
    image: "/university-campus-melbourne.jpg",
    excerpt:
      "Meet the admissions team from University of Melbourne. Get insights on programs, scholarships, and life in Australia.",
    featured: false,
  },
  {
    id: 5,
    title: "Germany: Tuition-Free Education Seminar",
    date: "March 25, 2024",
    time: "3:00 PM - 5:00 PM",
    location: "HighLinks Office, Karachi",
    category: "Events",
    image: "/german-university-campus.jpg",
    excerpt:
      "Discover how to study in Germany for free. Learn about language requirements, blocked accounts, and visa procedures.",
    featured: false,
  },
  {
    id: 6,
    title: "Australia Student Visa Changes 2024",
    date: "February 28, 2024",
    category: "News",
    image: "/australian-visa-document.jpg",
    excerpt:
      "New financial requirements and genuine student criteria explained. Essential information for all Australia-bound students.",
    featured: false,
  },
  {
    id: 7,
    title: "IELTS Preparation Workshop",
    date: "April 1, 2024",
    time: "10:00 AM - 1:00 PM",
    location: "Online (Zoom)",
    category: "Webinars",
    image: "/ielts-test-preparation.jpg",
    excerpt:
      "Free IELTS preparation workshop with tips and strategies to achieve your target band score. Limited seats available.",
    featured: false,
  },
  {
    id: 8,
    title: "University of Toronto Information Session",
    date: "April 5, 2024",
    time: "4:00 PM - 6:00 PM",
    location: "HighLinks Office, Islamabad",
    category: "University Visits",
    image: "/university-of-toronto-campus.jpg",
    excerpt:
      "Exclusive session with University of Toronto representatives. Learn about programs, admissions, and Canadian student life.",
    featured: false,
  },
]

export default function NewsEventsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredNews =
    activeCategory === "All" ? newsItems : newsItems.filter((item) => item.category === activeCategory)

  const featuredNews = newsItems.filter((item) => item.featured)

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        subtitle="News & Events"
        title="Stay Updated"
        description="Keep up with the latest study abroad news, upcoming events, university visits, and educational opportunities."
      />

      {/* Featured Section */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 font-serif text-2xl font-bold text-foreground">Featured</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredNews.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {item.date}
                    </span>
                    {item.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {item.location}
                      </span>
                    )}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-muted-foreground">{item.excerpt}</p>
                  <button className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-accent">
                    Read More <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All News & Events */}
      <section className="bg-gradient-to-b from-background via-secondary/30 to-background py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground hover:bg-secondary",
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredNews.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3">
                    <span className="rounded-full bg-primary/90 px-2 py-0.5 text-xs font-medium text-primary-foreground">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {item.date}
                    </span>
                    {item.time && (
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {item.time}
                      </span>
                    )}
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="mb-3 text-sm text-muted-foreground line-clamp-2">{item.excerpt}</p>
                  {item.location && (
                    <p className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {item.location}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="rounded-xl border border-border bg-card px-8 py-3 font-semibold text-foreground transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
              Load More
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-background to-accent/10 p-8 text-center md:p-12">
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">Never Miss an Update</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Subscribe to our newsletter for the latest news, events, and study abroad tips delivered to your inbox.
            </p>
            <form className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  )
}
