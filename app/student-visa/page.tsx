import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
import Link from "next/link"
import {
  FileText,
  CheckCircle2,
  Clock,
  Shield,
  ArrowRight,
  FileCheck,
  Building,
  Wallet,
  Stethoscope,
  Users,
} from "lucide-react"

const visaTypes = [
  {
    country: "USA",
    type: "F-1 Visa",
    duration: "Duration of study",
    processing: "3-5 months",
    flag: "🇺🇸",
  },
  {
    country: "UK",
    type: "Student Visa (Tier 4)",
    duration: "Course length + extra time",
    processing: "3-4 weeks",
    flag: "🇬🇧",
  },
  {
    country: "Canada",
    type: "Study Permit",
    duration: "Course length + 90 days",
    processing: "8-12 weeks",
    flag: "🇨🇦",
  },
  {
    country: "Australia",
    type: "Subclass 500",
    duration: "Up to 5 years",
    processing: "4-8 weeks",
    flag: "🇦🇺",
  },
  {
    country: "Germany",
    type: "Student Visa",
    duration: "Course length",
    processing: "6-12 weeks",
    flag: "🇩🇪",
  },
  {
    country: "Ireland",
    type: "Study Visa",
    duration: "Course length",
    processing: "4-8 weeks",
    flag: "🇮🇪",
  },
]

const timeline = [
  {
    step: 1,
    title: "Document Collection",
    description: "Gather all required documents including academic transcripts, test scores, and financial statements.",
    duration: "2-4 weeks",
  },
  {
    step: 2,
    title: "Application Preparation",
    description: "Complete visa application forms with our expert guidance to ensure accuracy.",
    duration: "1-2 weeks",
  },
  {
    step: 3,
    title: "Financial Documentation",
    description: "Prepare bank statements, sponsorship letters, and proof of funds.",
    duration: "1-2 weeks",
  },
  {
    step: 4,
    title: "Application Submission",
    description: "Submit your visa application at the embassy or visa application center.",
    duration: "1 day",
  },
  {
    step: 5,
    title: "Interview Preparation",
    description: "Mock interviews and coaching to help you confidently face the visa officer.",
    duration: "1-2 weeks",
  },
  {
    step: 6,
    title: "Visa Decision",
    description: "Receive your visa decision and prepare for your journey abroad.",
    duration: "2-12 weeks",
  },
]

const documents = [
  { icon: FileText, title: "Valid Passport", description: "With at least 6 months validity" },
  { icon: FileCheck, title: "Admission Letter", description: "From your university" },
  { icon: Wallet, title: "Financial Proof", description: "Bank statements, sponsorship" },
  { icon: Building, title: "Academic Records", description: "Transcripts and certificates" },
  { icon: Stethoscope, title: "Medical Certificate", description: "Health examination report" },
  { icon: Users, title: "Language Scores", description: "IELTS, TOEFL, or equivalent" },
]

export default function StudentVisaPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        subtitle="Student Visa"
        title="Expert Visa Guidance"
        description="Navigate the visa application process with confidence. Our 98% success rate speaks for our expertise and dedication."
      />

      {/* Success Stats */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 rounded-2xl border border-border/50 bg-gradient-to-r from-primary/5 via-background to-accent/5 p-8 md:grid-cols-4">
            {[
              { value: "98%", label: "Visa Success Rate" },
              { value: "10K+", label: "Visas Processed" },
              { value: "15+", label: "Years Experience" },
              { value: "24/7", label: "Support Available" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary md:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Types */}
      <section className="bg-gradient-to-b from-background via-secondary/30 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Visa Types
            </span>
            <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Student Visa Categories
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Each country has specific visa requirements. We help you navigate the process for your chosen destination.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visaTypes.map((visa) => (
              <div
                key={visa.country}
                className="group rounded-xl border border-border/50 bg-card p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-3xl">{visa.flag}</span>
                  <div>
                    <h3 className="font-semibold text-foreground">{visa.country}</h3>
                    <p className="text-sm text-primary">{visa.type}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Duration</p>
                    <p className="font-medium text-foreground">{visa.duration}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Processing</p>
                    <p className="font-medium text-foreground">{visa.processing}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Visa Process
            </span>
            <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Step-by-Step Timeline
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Our structured approach ensures nothing is missed in your visa application journey.
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-border md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={item.step}
                  className={`relative flex items-start gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Step circle */}
                  <div className="absolute left-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground md:left-1/2 md:-translate-x-1/2">
                    {item.step}
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-16 w-full rounded-xl border border-border/50 bg-card p-5 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto"}`}
                  >
                    <div className={`mb-1 flex items-center gap-2 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-xs font-medium text-primary">{item.duration}</span>
                    </div>
                    <h3 className="mb-1 font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="bg-gradient-to-b from-background via-secondary/30 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Documentation
            </span>
            <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Required Documents
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              While requirements vary by country, these are the common documents needed for student visas.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {documents.map((doc) => (
              <div
                key={doc.title}
                className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
              >
                <div className="flex-shrink-0 rounded-lg bg-primary/10 p-2">
                  <doc.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{doc.title}</h3>
                  <p className="text-sm text-muted-foreground">{doc.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25"
            >
              Get Document Checklist
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl border border-border/50 bg-card p-8 md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                  Success Stories
                </span>
                <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
                  Our Students Succeed
                </h2>
                <p className="mt-4 text-pretty text-lg text-muted-foreground">
                  With proper guidance and preparation, visa approval becomes much more achievable. Our track record
                  proves it.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    "98% visa approval rate across all destinations",
                    "Personalized interview coaching for every student",
                    "Complete documentation review before submission",
                    "Continuous support until visa approval",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 p-6 text-center">
                  <Shield className="mx-auto mb-2 h-8 w-8 text-primary" />
                  <div className="text-2xl font-bold text-foreground">10,000+</div>
                  <p className="text-sm text-muted-foreground">Successful Visas</p>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 p-6 text-center">
                  <Users className="mx-auto mb-2 h-8 w-8 text-primary" />
                  <div className="text-2xl font-bold text-foreground">50+</div>
                  <p className="text-sm text-muted-foreground">Expert Counselors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  )
}
