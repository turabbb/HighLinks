"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight, Loader2 } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

interface NewsArticle {
  title: string
  date: string
  image: string
  category: string
  excerpt: string
  url: string
}

// Fallback news data in case API fails
const fallbackNews: NewsArticle[] = [
  {
    title: "Study Fair 2026: Meet Top UK Universities",
    date: "March 15, 2026",
    image: "/education-fair-with-university-booths.jpg",
    category: "Event",
    excerpt: "Join us for an exclusive opportunity to meet representatives from 20+ UK universities.",
    url: "/news-events",
  },
  {
    title: "Canada Immigration Updates for Students",
    date: "March 10, 2026",
    image: "/canada-flag-with-students.jpg",
    category: "News",
    excerpt: "Important changes to student visa requirements and post-graduation work permits.",
    url: "/news-events",
  },
  {
    title: "Scholarship Webinar: Fund Your Education",
    date: "March 5, 2026",
    image: "/online-webinar-scholarship-presentation.jpg",
    category: "Webinar",
    excerpt: "Learn about scholarship opportunities worth over $50,000 for Pakistani students.",
    url: "/news-events",
  },
]

export function NewsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })
  const [news, setNews] = useState<NewsArticle[]>(fallbackNews)
  const [isLoading, setIsLoading] = useState(true)
  const [isLive, setIsLive] = useState(false)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('/api/news', {
          cache: 'no-store'
        })
        
        if (!response.ok) {
          throw new Error('API response not ok')
        }
        
        const data = await response.json()
        console.log('News API response:', data)
        
        if (data.success && data.articles && data.articles.length > 0) {
          setNews(data.articles.slice(0, 3))
          setIsLive(true)
        }
      } catch (error) {
        console.error('Error fetching news:', error)
        // Keep fallback news on error
      } finally {
        setIsLoading(false)
      }
    }

    fetchNews()
  }, [])

  return (
    <section ref={ref} className="bg-gradient-to-b from-background via-secondary/30 to-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                Latest Updates
              </span>
              {isLive && (
                <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                  Live
                </span>
              )}
            </div>
            <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">News & Events</h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Stay informed about upcoming events, study fairs, and important education news.
            </p>
          </div>

          <Link
            href="/news-events"
            className="group inline-flex items-center gap-2 text-base font-semibold text-primary transition-colors hover:text-accent"
          >
            View All News
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Loading state */}
        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}

        {/* News grid */}
        {!isLoading && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {news.map((item, index) => (
              <a
                key={`${item.title}-${index}`}
                href={item.url}
                target={item.url.startsWith('http') ? '_blank' : '_self'}
                rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={cn(
                  "group overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5",
                  isInView ? "animate-fade-in-up opacity-100" : "opacity-0",
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-secondary">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = '/placeholder.svg'
                    }}
                  />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </div>
                  <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{item.excerpt}</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
