import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
import Image from "next/image"
import { Target, Eye, Heart, Award, Users, Globe, CheckCircle2 } from "lucide-react"

const milestones = [
  {
    year: "2009",
    title: "Founded",
    description: "HighLinks established in Lahore with a vision to help students study abroad.",
  },
  { year: "2015", title: "5000+ Students", description: "Milestone of 5000 successful student placements achieved." },
  { year: "2018", title: "Award Winning", description: "Recognized as Best Study Abroad Consultancy in Pakistan." },
  {
    year: "2021",
    title: "Digital First",
    description: "Launched virtual counseling services reaching students nationwide.",
  },
  {
    year: "2024",
    title: "10000+ Students",
    description: "Celebrating 10,000+ successful placements across 50+ countries.",
  },
]

const values = [
  {
    icon: Heart,
    title: "Student First",
    description: "Every decision we make is guided by what is best for our students' futures.",
  },
  {
    icon: CheckCircle2,
    title: "Integrity",
    description: "Transparent processes, honest advice, and no hidden fees or false promises.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in counseling, documentation, and support.",
  },
  {
    icon: Globe,
    title: "Global Vision",
    description: "Connecting Pakistani students with world-class educational opportunities.",
  },
]

const partners = [
  "StudyReach",
  "Shorelight",
  "Global University Systems",
  "ApplyBoard",
  "KC Overseas",
  "Crizac",
  "ED Chimp",
  "UniPartner",
  "Oxford International",
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        subtitle="About Us"
        title="Guiding Dreams Since 2009"
        description="For over 15 years, HighLinks has been helping Pakistani students achieve their international education dreams with expert guidance and unwavering support."
      />

      {/* Mission & Vision */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border/50 bg-card p-8">
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 font-serif text-2xl font-bold text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower Pakistani students with the knowledge, guidance, and support they need to access world-class
                education opportunities abroad. We believe every student deserves a chance to achieve their academic and
                career aspirations, regardless of their background.
              </p>
            </div>

            <div className="rounded-2xl border border-border/50 bg-card p-8">
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 font-serif text-2xl font-bold text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be Pakistan's most trusted and impactful study abroad consultancy, known for our integrity,
                expertise, and the success of our students. We envision a future where every deserving Pakistani student
                can access global education opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-gradient-to-b from-background via-secondary/30 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                Our Story
              </span>
              <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
                From Humble Beginnings to Industry Leadership
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                HighLinks was founded in 2009 by Muhammad Ahmed Khan, who experienced firsthand the challenges of
                navigating the study abroad process. What began as a small consultancy in Lahore has grown into one of
                Pakistan's most respected education consultancies.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Today, with offices in Lahore, Karachi, and Islamabad, and a team of 50+ expert counselors, we have
                helped over 10,000 students achieve their dreams of studying at prestigious universities worldwide.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our philosophy remains unchanged: every student deserves personalized guidance, transparent processes,
                and unwavering support throughout their journey.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-border" />
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="relative flex items-start gap-6 pl-12">
                    <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {milestone.year.slice(2)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{milestone.title}</h4>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Our Values
            </span>
            <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              What We Stand For
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group rounded-xl border border-border/50 bg-card p-6 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 inline-flex rounded-xl bg-primary/10 p-3 transition-transform duration-300 group-hover:scale-110">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-gradient-to-b from-background via-secondary/30 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Our Partners
            </span>
            <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Trusted Recruitment Partners
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              We work with leading global education platforms and recruitment networks to provide the best opportunities for our students.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {partners.map((partner) => (
              <div
                key={partner}
                className="flex items-center justify-center rounded-xl border border-border/50 bg-card p-6 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
              >
                <p className="font-medium text-foreground">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { icon: Users, value: "10,000+", label: "Students Placed" },
              { icon: Globe, value: "50+", label: "Countries" },
              { icon: Award, value: "500+", label: "Partner Universities" },
              { icon: CheckCircle2, value: "98%", label: "Visa Success Rate" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center rounded-xl border border-border/50 bg-card p-8 text-center"
              >
                <stat.icon className="mb-3 h-8 w-8 text-primary" />
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  )
}
