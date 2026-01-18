"use client"

import { useEffect, useRef, useState } from "react"
import { Award, GraduationCap, Building2, CheckCircle2 } from "lucide-react"

const stats = [
  { icon: Award, value: 15, suffix: "+", label: "Years of Experience" },
  { icon: GraduationCap, value: 1000, suffix: "+", label: "Students Placed" },
  { icon: Building2, value: 500, suffix: "+", label: "Partner Universities" },
  { icon: CheckCircle2, value: 98, suffix: "%", label: "Visa Success Rate" },
]

function useCountUp(end: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, start])

  return count
}

function StatCard({
  icon: Icon,
  value,
  suffix,
  label,
  isVisible,
}: {
  icon: typeof Award
  value: number
  suffix: string
  label: string
  isVisible: boolean
}) {
  const count = useCountUp(value, 2000, isVisible)

  return (
    <div className="group flex flex-col items-center text-center">
      <div className="mb-3 rounded-xl bg-primary/10 p-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/15">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div className="text-3xl font-bold text-foreground md:text-4xl">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

export function TrustIndicators() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-border/50 bg-gradient-to-r from-secondary/50 via-background to-secondary/50 p-8 shadow-sm md:p-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
