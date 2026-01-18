import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
import {
  GraduationCap,
  FileCheck,
  Plane,
  Building,
  Users,
  HeadphonesIcon,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: GraduationCap,
    title: "University Admissions",
    description:
      "Expert guidance for applications to top universities worldwide. We help you choose the right program, prepare compelling applications, and navigate the admission process with confidence.",
    features: [
      "Personalized university shortlisting",
      "Application essay review and editing",
      "Interview preparation and coaching",
      "Application deadline management",
    ],
  },
  {
    icon: FileCheck,
    title: "Visa Assistance",
    description:
      "Complete visa documentation support with a 98% success rate. Our experienced team ensures your visa application is thorough, accurate, and submitted on time.",
    features: [
      "Document checklist preparation",
      "Application form assistance",
      "Financial documentation guidance",
      "Mock visa interview sessions",
    ],
  },
  {
    icon: Plane,
    title: "Pre-Departure Support",
    description:
      "Comprehensive preparation for your journey abroad. From accommodation to travel arrangements, we ensure you are fully prepared for your new academic life.",
    features: [
      "Accommodation assistance",
      "Travel booking guidance",
      "Orientation sessions",
      "Packing and preparation tips",
    ],
  },
  {
    icon: Building,
    title: "Scholarship Guidance",
    description:
      "Access to exclusive scholarships and financial aid opportunities. We help deserving students find funding to make their education dreams affordable.",
    features: [
      "Scholarship database access",
      "Application strategy planning",
      "Essay writing support",
      "Financial planning advice",
    ],
  },
  {
    icon: Users,
    title: "Career Counseling",
    description:
      "Strategic career planning and course selection aligned with your professional goals. Our counselors help you choose programs that lead to successful careers.",
    features: [
      "Career aptitude assessment",
      "Industry trend analysis",
      "Course and specialization advice",
      "Post-study career planning",
    ],
  },
  {
    icon: HeadphonesIcon,
    title: "Post-Arrival Support",
    description:
      "Continued assistance after you land in your destination country. We help you settle into your new environment and academic life smoothly.",
    features: [
      "Airport pickup coordination",
      "Bank account setup guidance",
      "Local orientation support",
      "Emergency assistance line",
    ],
  },
]

const process = [
  {
    step: "01",
    title: "Free Consultation",
    description: "Meet with our counselors to discuss your goals, preferences, and eligibility.",
  },
  {
    step: "02",
    title: "Profile Evaluation",
    description: "We assess your academic background and recommend suitable universities and programs.",
  },
  {
    step: "03",
    title: "Application Preparation",
    description: "Our team helps you prepare compelling applications with all required documents.",
  },
  {
    step: "04",
    title: "Visa Processing",
    description: "We guide you through the visa application process with our proven strategies.",
  },
  {
    step: "05",
    title: "Pre-Departure Prep",
    description: "Get ready for your journey with our comprehensive orientation and support.",
  },
  {
    step: "06",
    title: "Arrival & Beyond",
    description: "Receive continued support even after you arrive at your destination.",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        subtitle="Our Services"
        title="Comprehensive Support for Your Journey"
        description="From initial counseling to post-arrival support, we provide end-to-end assistance to help you achieve your international education goals."
      />

      {/* Services Grid */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-border/50 bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 p-4 transition-all duration-300 group-hover:scale-110 group-hover:from-primary/15 group-hover:to-accent/15">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mb-4 text-muted-foreground">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gradient-to-b from-background via-secondary/30 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Our Process
            </span>
            <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Your Journey With Us
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              A streamlined, transparent process designed to make your study abroad journey smooth and stress-free.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {process.map((item, index) => (
              <div
                key={item.step}
                className="group relative rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
              >
                <span className="mb-4 inline-block font-serif text-4xl font-bold text-primary/20 transition-colors group-hover:text-primary/40">
                  {item.step}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>

                {/* Connector line */}
                {index < process.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-0.5 w-6 bg-border lg:block" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25"
            >
              Start Your Journey
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  )
}
