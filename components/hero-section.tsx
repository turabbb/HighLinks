"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Plane, Sparkles } from "lucide-react"

export function HeroSection() {
  const globeRef = useRef<HTMLDivElement>(null)
  const [planePosition, setPlanePosition] = useState({ x: 50, y: 50, rotation: 45 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!globeRef.current) return
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 20
      const y = (clientY / innerHeight - 0.5) * 20
      globeRef.current.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Animate plane with random floating motion in the center of the globe
  useEffect(() => {
    let targetX = 50
    let targetY = 50
    let currentX = 50
    let currentY = 50
    let animationId: number

    const generateNewTarget = () => {
      // Keep plane in center area (30% to 70% of globe)
      targetX = 30 + Math.random() * 40
      targetY = 30 + Math.random() * 40
    }

    const animate = () => {
      // Smooth interpolation towards target
      currentX += (targetX - currentX) * 0.02
      currentY += (targetY - currentY) * 0.02

      // Calculate rotation based on movement direction
      const dx = targetX - currentX
      const dy = targetY - currentY
      const rotation = Math.atan2(dy, dx) * (180 / Math.PI) + 90

      setPlanePosition({ x: currentX, y: currentY, rotation })

      // Generate new target when close to current target
      if (Math.abs(targetX - currentX) < 1 && Math.abs(targetY - currentY) < 1) {
        generateNewTarget()
      }

      animationId = requestAnimationFrame(animate)
    }

    generateNewTarget()
    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-secondary via-background to-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid pattern - darker */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.85_0.03_240/0.4)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.85_0.03_240/0.4)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Gradient orbs - more prominent */}
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/15 to-accent/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[700px] w-[700px] rounded-full bg-gradient-to-tl from-accent/15 to-primary/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto flex min-h-screen items-center px-4 pt-32 pb-20">
        <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left content */}
          <div className="flex flex-col justify-center">
            <div className="animate-fade-in-up">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary shadow-lg shadow-primary/10">
                <Sparkles className="h-4 w-4" />
                Trusted by 1,000+ Students
              </span>
            </div>

            <h1 className="animate-fade-in-up text-balance font-serif text-4xl font-bold leading-tight tracking-tight text-foreground [animation-delay:100ms] md:text-5xl lg:text-6xl">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">HighLinks</span>
            </h1>

            <p className="mt-6 animate-fade-in-up text-pretty text-lg leading-relaxed text-muted-foreground [animation-delay:200ms] md:text-xl">
              We help students achieve international education goals through expert guidance, trusted partnerships, and
              a transparent process.
            </p>

            <div className="mt-8 flex animate-fade-in-up flex-col gap-4 [animation-delay:300ms] sm:flex-row">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book a Free Consultation
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-accent to-primary transition-transform duration-500 group-hover:translate-x-0" />
              </Link>
              <Link
                href="/study-abroad"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-border bg-card px-8 py-4 text-base font-semibold text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
              >
                Explore Destinations
              </Link>
            </div>

            <p className="mt-6 animate-fade-in-up text-sm text-muted-foreground [animation-delay:400ms]">
              <span className="font-medium text-foreground">Your Future, Our Concern</span> — Guiding dreams since 2022
            </p>
          </div>

          {/* Right visual */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div ref={globeRef} className="relative transition-transform duration-300 ease-out">
              {/* Main globe illustration */}
              <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px]">
                {/* Outer ring */}
                <div className="absolute inset-0 animate-spin rounded-full border-2 border-dashed border-primary/30 [animation-duration:30s]" />

                {/* Globe - enhanced colors */}
                <div className="absolute inset-4 overflow-hidden rounded-full bg-gradient-to-br from-primary/25 via-accent/15 to-primary/10 shadow-2xl shadow-primary/25">
                  {/* Globe lines */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/15" />
                  <div className="absolute inset-[15%] rounded-full border border-primary/15" />
                  <div className="absolute inset-[30%] rounded-full border border-primary/15" />

                  {/* Horizontal lines */}
                  <div className="absolute left-0 right-0 top-1/4 h-px bg-primary/15" />
                  <div className="absolute left-0 right-0 top-1/2 h-px bg-primary/20" />
                  <div className="absolute left-0 right-0 top-3/4 h-px bg-primary/15" />

                  {/* Vertical line */}
                  <div className="absolute bottom-0 left-1/2 top-0 w-px bg-primary/15" />

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/15 to-transparent" />
                </div>

                {/* Floating destination cards - all 12 countries, evenly distributed */}
                {/* Top row */}
                <div className="animate-float absolute -left-2 top-4 rounded-lg border border-border bg-card/95 px-2 py-1.5 shadow-lg backdrop-blur-sm [animation-delay:0s]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base">🇺🇸</span>
                    <span className="text-[10px] font-medium">USA</span>
                  </div>
                </div>

                <div className="animate-float absolute left-1/4 -top-2 rounded-lg border border-border bg-card/95 px-2 py-1.5 shadow-lg backdrop-blur-sm [animation-delay:0.3s]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base">🇬🇧</span>
                    <span className="text-[10px] font-medium">UK</span>
                  </div>
                </div>

                <div className="animate-float absolute right-1/4 -top-2 rounded-lg border border-border bg-card/95 px-2 py-1.5 shadow-lg backdrop-blur-sm [animation-delay:0.6s]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base">🇨🇦</span>
                    <span className="text-[10px] font-medium">Canada</span>
                  </div>
                </div>

                <div className="animate-float absolute -right-2 top-4 rounded-lg border border-border bg-card/95 px-2 py-1.5 shadow-lg backdrop-blur-sm [animation-delay:0.9s]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base">🇦🇺</span>
                    <span className="text-[10px] font-medium">Australia</span>
                  </div>
                </div>

                {/* Middle row */}
                <div className="animate-float absolute -left-6 top-1/3 rounded-lg border border-border bg-card/95 px-2 py-1.5 shadow-lg backdrop-blur-sm [animation-delay:1.2s]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base">🇮🇪</span>
                    <span className="text-[10px] font-medium">Ireland</span>
                  </div>
                </div>

                <div className="animate-float absolute -right-6 top-1/3 rounded-lg border border-border bg-card/95 px-2 py-1.5 shadow-lg backdrop-blur-sm [animation-delay:1.5s]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base">🇧🇪</span>
                    <span className="text-[10px] font-medium">Belgium</span>
                  </div>
                </div>

                <div className="animate-float absolute -left-6 top-1/2 rounded-lg border border-border bg-card/95 px-2 py-1.5 shadow-lg backdrop-blur-sm [animation-delay:1.8s]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base">🇨🇾</span>
                    <span className="text-[10px] font-medium">Cyprus</span>
                  </div>
                </div>

                <div className="animate-float absolute -right-6 top-1/2 rounded-lg border border-border bg-card/95 px-2 py-1.5 shadow-lg backdrop-blur-sm [animation-delay:2.1s]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base">🇩🇰</span>
                    <span className="text-[10px] font-medium">Denmark</span>
                  </div>
                </div>

                {/* Bottom row */}
                <div className="animate-float absolute -left-6 bottom-1/3 rounded-lg border border-border bg-card/95 px-2 py-1.5 shadow-lg backdrop-blur-sm [animation-delay:2.4s]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base">🇭🇺</span>
                    <span className="text-[10px] font-medium">Hungary</span>
                  </div>
                </div>

                <div className="animate-float absolute -right-6 bottom-1/3 rounded-lg border border-border bg-card/95 px-2 py-1.5 shadow-lg backdrop-blur-sm [animation-delay:2.7s]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base">🇱🇻</span>
                    <span className="text-[10px] font-medium">Latvia</span>
                  </div>
                </div>

                <div className="animate-float absolute left-1/4 -bottom-2 rounded-lg border border-border bg-card/95 px-2 py-1.5 shadow-lg backdrop-blur-sm [animation-delay:3s]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base">🇸🇪</span>
                    <span className="text-[10px] font-medium">Sweden</span>
                  </div>
                </div>

                <div className="animate-float absolute right-1/4 -bottom-2 rounded-lg border border-border bg-card/95 px-2 py-1.5 shadow-lg backdrop-blur-sm [animation-delay:3.3s]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base">🇫🇮</span>
                    <span className="text-[10px] font-medium">Finland</span>
                  </div>
                </div>

                {/* Animated plane - floating randomly in center */}
                <div 
                  className="absolute transition-all duration-1000 ease-out"
                  style={{
                    left: `${planePosition.x}%`,
                    top: `${planePosition.y}%`,
                    transform: `translate(-50%, -50%) rotate(${planePosition.rotation}deg)`,
                  }}
                >
                  <Plane className="h-8 w-8 text-accent drop-shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  )
}
