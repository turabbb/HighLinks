"use client"

import { use } from "react"
import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { GraduationCap, MapPin, DollarSign, Clock, Globe, CheckCircle2, ArrowRight } from "lucide-react"

// Country data with universities
const countryData: Record<string, {
  name: string
  flag: string
  flagUrl: string
  description: string
  highlights: string[]
  requirements: string[]
  universities: {
    name: string
    location: string
    ranking: string
    tuition: string
    programs: string[]
    description: string
  }[]
}> = {
  usa: {
    name: "United States",
    flag: "🇺🇸",
    flagUrl: "https://flagcdn.com/w320/us.png",
    description: "Home to world-renowned universities and diverse opportunities. The US offers cutting-edge research facilities, flexible curricula, and excellent career prospects with OPT work opportunities.",
    highlights: [
      "Ivy League & top-ranked universities",
      "OPT work visa up to 3 years for STEM",
      "Diverse campus life & cultures",
      "Cutting-edge research facilities",
      "Strong industry connections",
    ],
    requirements: [
      "Valid passport",
      "IELTS 6.5+ or TOEFL 80+",
      "SAT/ACT for undergraduate",
      "GRE/GMAT for graduate programs",
      "Statement of Purpose",
      "Letters of Recommendation",
      "Bank Statement (financial proof)",
    ],
    universities: [
      {
        name: "Harvard University",
        location: "Cambridge, Massachusetts",
        ranking: "#1 in USA",
        tuition: "$54,000/year",
        programs: ["Business", "Law", "Medicine", "Engineering", "Computer Science"],
        description: "The oldest institution of higher learning in the United States, renowned for excellence across all disciplines.",
      },
      {
        name: "MIT",
        location: "Cambridge, Massachusetts",
        ranking: "#2 in USA",
        tuition: "$57,000/year",
        programs: ["Engineering", "Computer Science", "Physics", "Mathematics", "AI/ML"],
        description: "World leader in science, technology, and innovation with strong industry partnerships.",
      },
      {
        name: "Stanford University",
        location: "Stanford, California",
        ranking: "#3 in USA",
        tuition: "$56,000/year",
        programs: ["Computer Science", "Business", "Engineering", "Medicine", "Law"],
        description: "Silicon Valley's academic powerhouse, known for entrepreneurship and innovation.",
      },
      {
        name: "UC Berkeley",
        location: "Berkeley, California",
        ranking: "#4 Public University",
        tuition: "$44,000/year",
        programs: ["Engineering", "Business", "Computer Science", "Data Science", "Environmental Science"],
        description: "Top public university with exceptional research programs and diverse student body.",
      },
      {
        name: "Columbia University",
        location: "New York City, New York",
        ranking: "#12 in USA",
        tuition: "$63,000/year",
        programs: ["Journalism", "Business", "Law", "Arts", "International Relations"],
        description: "Ivy League institution in the heart of NYC, offering unparalleled networking opportunities.",
      },
    ],
  },
  uk: {
    name: "United Kingdom",
    flag: "🇬🇧",
    flagUrl: "https://flagcdn.com/w320/gb.png",
    description: "Renowned for academic excellence and rich cultural heritage. UK offers shorter program durations, excellent post-study work opportunities, and globally recognized qualifications.",
    highlights: [
      "1-year Master's programs",
      "2-year Graduate Route visa",
      "Historic & prestigious universities",
      "Globally recognized degrees",
      "Multicultural environment",
    ],
    requirements: [
      "Valid passport",
      "IELTS 6.0+ (varies by program)",
      "Academic transcripts",
      "Personal Statement",
      "Letters of Recommendation",
      "TB test certificate",
      "Financial proof (£1,334/month living costs)",
    ],
    universities: [
      {
        name: "University of Oxford",
        location: "Oxford, England",
        ranking: "#1 in UK",
        tuition: "£28,000-45,000/year",
        programs: ["PPE", "Medicine", "Law", "Engineering", "Humanities"],
        description: "The oldest university in the English-speaking world, synonymous with academic excellence.",
      },
      {
        name: "University of Cambridge",
        location: "Cambridge, England",
        ranking: "#2 in UK",
        tuition: "£24,000-63,000/year",
        programs: ["Natural Sciences", "Engineering", "Mathematics", "Economics", "Computer Science"],
        description: "World-leading research university with a collegiate system and rich history.",
      },
      {
        name: "Imperial College London",
        location: "London, England",
        ranking: "#3 in UK",
        tuition: "£35,000-50,000/year",
        programs: ["Engineering", "Medicine", "Business", "Computing", "Science"],
        description: "Focused on science, engineering, medicine and business in the heart of London.",
      },
      {
        name: "UCL",
        location: "London, England",
        ranking: "#4 in UK",
        tuition: "£26,000-40,000/year",
        programs: ["Architecture", "Law", "Psychology", "Engineering", "Arts"],
        description: "London's leading multidisciplinary university with a global perspective.",
      },
      {
        name: "University of Edinburgh",
        location: "Edinburgh, Scotland",
        ranking: "#5 in UK",
        tuition: "£23,000-35,000/year",
        programs: ["Medicine", "AI", "Law", "Business", "Veterinary Science"],
        description: "Scotland's premier university in a beautiful historic city.",
      },
    ],
  },
  canada: {
    name: "Canada",
    flag: "🇨🇦",
    flagUrl: "https://flagcdn.com/w320/ca.png",
    description: "Known for high quality of life, affordable education, and excellent immigration pathways. Canada offers post-graduation work permits and clear paths to permanent residency.",
    highlights: [
      "Affordable tuition fees",
      "3-year PGWP work permit",
      "Clear PR pathway",
      "Safe & welcoming country",
      "Bilingual environment (English/French)",
    ],
    requirements: [
      "Valid passport",
      "IELTS 6.0+ or equivalent",
      "Academic transcripts",
      "Statement of Purpose",
      "Proof of funds (CAD $20,635 + tuition)",
      "Medical examination",
      "Police clearance certificate",
    ],
    universities: [
      {
        name: "University of Toronto",
        location: "Toronto, Ontario",
        ranking: "#1 in Canada",
        tuition: "CAD $45,000-60,000/year",
        programs: ["Engineering", "Computer Science", "Business", "Medicine", "Law"],
        description: "Canada's leading research university with a diverse global community.",
      },
      {
        name: "McGill University",
        location: "Montreal, Quebec",
        ranking: "#2 in Canada",
        tuition: "CAD $20,000-50,000/year",
        programs: ["Medicine", "Law", "Engineering", "Music", "Sciences"],
        description: "One of Canada's oldest universities, known for research excellence.",
      },
      {
        name: "University of British Columbia",
        location: "Vancouver, BC",
        ranking: "#3 in Canada",
        tuition: "CAD $40,000-55,000/year",
        programs: ["Forestry", "Engineering", "Business", "Computer Science", "Film"],
        description: "Beautiful campus with strong programs and industry connections.",
      },
      {
        name: "University of Waterloo",
        location: "Waterloo, Ontario",
        ranking: "#4 in Canada",
        tuition: "CAD $35,000-50,000/year",
        programs: ["Computer Science", "Engineering", "Mathematics", "Co-op Programs", "Quantum Computing"],
        description: "Known for world's largest co-operative education program.",
      },
      {
        name: "University of Alberta",
        location: "Edmonton, Alberta",
        ranking: "#5 in Canada",
        tuition: "CAD $30,000-40,000/year",
        programs: ["Engineering", "AI/ML", "Business", "Health Sciences", "Energy"],
        description: "Top research university with strong AI and engineering programs.",
      },
    ],
  },
  australia: {
    name: "Australia",
    flag: "🇦🇺",
    flagUrl: "https://flagcdn.com/w320/au.png",
    description: "Offers world-class education with excellent quality of life. Australia provides post-study work visas, diverse landscapes, and a welcoming multicultural society.",
    highlights: [
      "2-4 year post-study work visa",
      "High quality of life",
      "Work rights while studying",
      "Research excellence",
      "Beautiful environment",
    ],
    requirements: [
      "Valid passport",
      "IELTS 6.0-7.0 (varies by program)",
      "Academic transcripts",
      "Genuine Temporary Entrant (GTE)",
      "Financial proof (AUD $21,041/year)",
      "Health insurance (OSHC)",
      "Medical & character checks",
    ],
    universities: [
      {
        name: "University of Melbourne",
        location: "Melbourne, Victoria",
        ranking: "#1 in Australia",
        tuition: "AUD $40,000-50,000/year",
        programs: ["Medicine", "Law", "Engineering", "Arts", "Business"],
        description: "Australia's leading research university in a vibrant cultural city.",
      },
      {
        name: "University of Sydney",
        location: "Sydney, NSW",
        ranking: "#2 in Australia",
        tuition: "AUD $45,000-55,000/year",
        programs: ["Health Sciences", "Law", "Architecture", "Engineering", "Business"],
        description: "Historic university in Australia's largest city with global reputation.",
      },
      {
        name: "UNSW Sydney",
        location: "Sydney, NSW",
        ranking: "#3 in Australia",
        tuition: "AUD $40,000-50,000/year",
        programs: ["Engineering", "Computer Science", "Business", "Design", "Law"],
        description: "Strong industry connections and excellent graduate employment.",
      },
      {
        name: "Australian National University",
        location: "Canberra, ACT",
        ranking: "#4 in Australia",
        tuition: "AUD $45,000-50,000/year",
        programs: ["Politics", "International Relations", "Science", "Law", "Asian Studies"],
        description: "National university with strong policy and research focus.",
      },
      {
        name: "Monash University",
        location: "Melbourne, Victoria",
        ranking: "#5 in Australia",
        tuition: "AUD $35,000-45,000/year",
        programs: ["Pharmacy", "Engineering", "Business", "IT", "Medicine"],
        description: "Large research university with multiple campuses globally.",
      },
    ],
  },
  ireland: {
    name: "Ireland",
    flag: "🇮🇪",
    flagUrl: "https://flagcdn.com/w320/ie.png",
    description: "English-speaking European country with strong tech industry presence. Ireland offers stay-back options, no IELTS requirement for some programs, and access to EU job market.",
    highlights: [
      "2-year stay-back visa",
      "English-speaking country",
      "Tech hub of Europe (Google, Facebook, Apple HQ)",
      "Access to EU opportunities",
      "Friendly & safe environment",
    ],
    requirements: [
      "Valid passport",
      "IELTS 6.0+ or MOI letter",
      "Academic transcripts",
      "Personal Statement",
      "€10,000 financial proof",
      "Health insurance",
      "No IELTS required for some programs",
    ],
    universities: [
      {
        name: "Trinity College Dublin",
        location: "Dublin",
        ranking: "#1 in Ireland",
        tuition: "€20,000-25,000/year",
        programs: ["Computer Science", "Business", "Law", "Medicine", "Engineering"],
        description: "Ireland's oldest and most prestigious university, founded in 1592.",
      },
      {
        name: "University College Dublin",
        location: "Dublin",
        ranking: "#2 in Ireland",
        tuition: "€18,000-25,000/year",
        programs: ["Business", "Engineering", "Computer Science", "Agriculture", "Veterinary"],
        description: "Ireland's largest university with strong international reputation.",
      },
      {
        name: "National University of Ireland, Galway",
        location: "Galway",
        ranking: "#3 in Ireland",
        tuition: "€15,000-22,000/year",
        programs: ["Medicine", "Engineering", "Arts", "Science", "Business"],
        description: "Beautiful west coast location with excellent research facilities.",
      },
      {
        name: "University College Cork",
        location: "Cork",
        ranking: "#4 in Ireland",
        tuition: "€16,000-23,000/year",
        programs: ["Food Science", "Pharmacy", "Law", "Business", "Medicine"],
        description: "Strong research university in Ireland's second largest city.",
      },
      {
        name: "Dublin City University",
        location: "Dublin",
        ranking: "#5 in Ireland",
        tuition: "€14,000-18,000/year",
        programs: ["Communications", "Engineering", "Business", "Computing", "Education"],
        description: "Modern university with strong industry links and internship programs.",
      },
    ],
  },
  sweden: {
    name: "Sweden",
    flag: "🇸🇪",
    flagUrl: "https://flagcdn.com/w320/se.png",
    description: "Known for innovation, sustainability, and high quality of life. Sweden offers many English-taught programs, scholarships, and a balanced lifestyle.",
    highlights: [
      "Many programs taught in English",
      "Innovation & research focus",
      "High quality of life",
      "Work permit during studies",
      "Generous scholarships available",
    ],
    requirements: [
      "Valid passport",
      "IELTS 6.5+ or equivalent",
      "Academic transcripts",
      "CV and motivation letter",
      "Proof of funds (SEK 9,450/month)",
      "Health insurance",
      "Residence permit application",
    ],
    universities: [
      {
        name: "Karolinska Institute",
        location: "Stockholm",
        ranking: "#1 in Sweden",
        tuition: "SEK 190,000-220,000/year",
        programs: ["Medicine", "Public Health", "Biomedicine", "Nursing", "Dentistry"],
        description: "One of the world's leading medical universities.",
      },
      {
        name: "KTH Royal Institute of Technology",
        location: "Stockholm",
        ranking: "#2 in Sweden",
        tuition: "SEK 150,000-175,000/year",
        programs: ["Engineering", "Architecture", "Computer Science", "Sustainability", "ICT"],
        description: "Sweden's largest technical university with strong industry ties.",
      },
      {
        name: "Lund University",
        location: "Lund",
        ranking: "#3 in Sweden",
        tuition: "SEK 130,000-180,000/year",
        programs: ["Engineering", "Law", "Medicine", "Economics", "Fine Arts"],
        description: "Comprehensive research university with excellent facilities.",
      },
      {
        name: "Uppsala University",
        location: "Uppsala",
        ranking: "#4 in Sweden",
        tuition: "SEK 120,000-150,000/year",
        programs: ["Medicine", "Law", "Sciences", "Humanities", "Peace Studies"],
        description: "Scandinavia's oldest university with rich academic tradition.",
      },
      {
        name: "Chalmers University of Technology",
        location: "Gothenburg",
        ranking: "#5 in Sweden",
        tuition: "SEK 140,000-160,000/year",
        programs: ["Engineering", "Architecture", "Shipping", "Automotive", "Sustainability"],
        description: "Leading technical university with strong automotive industry connections.",
      },
    ],
  },
  finland: {
    name: "Finland",
    flag: "🇫🇮",
    flagUrl: "https://flagcdn.com/w320/fi.png",
    description: "Home to one of the world's best education systems. Finland offers affordable education, work opportunities, and a high standard of living.",
    highlights: [
      "World-class education system",
      "Affordable tuition fees",
      "Work rights during studies",
      "Safe & clean environment",
      "Innovative learning methods",
    ],
    requirements: [
      "Valid passport",
      "IELTS 6.0+ or equivalent",
      "Academic transcripts",
      "Motivation letter",
      "Proof of funds (€6,720/year)",
      "Health insurance",
      "Residence permit",
    ],
    universities: [
      {
        name: "University of Helsinki",
        location: "Helsinki",
        ranking: "#1 in Finland",
        tuition: "€13,000-18,000/year",
        programs: ["Life Sciences", "Law", "Education", "Medicine", "Social Sciences"],
        description: "Finland's oldest and largest university, known for research excellence.",
      },
      {
        name: "Aalto University",
        location: "Espoo/Helsinki",
        ranking: "#2 in Finland",
        tuition: "€12,000-15,000/year",
        programs: ["Design", "Business", "Engineering", "Architecture", "Arts"],
        description: "Innovative university combining technology, business, and arts.",
      },
      {
        name: "University of Turku",
        location: "Turku",
        ranking: "#3 in Finland",
        tuition: "€10,000-14,000/year",
        programs: ["Medicine", "Law", "Education", "Biosciences", "Economics"],
        description: "Strong research university in Finland's oldest city.",
      },
      {
        name: "Tampere University",
        location: "Tampere",
        ranking: "#4 in Finland",
        tuition: "€10,000-12,000/year",
        programs: ["Health Technology", "Social Sciences", "Engineering", "Communication", "Business"],
        description: "Multidisciplinary university with focus on societal challenges.",
      },
      {
        name: "University of Oulu",
        location: "Oulu",
        ranking: "#5 in Finland",
        tuition: "€10,000-15,000/year",
        programs: ["IT", "Wireless Communications", "Health Sciences", "Education", "Engineering"],
        description: "Northern university known for ICT and health technology research.",
      },
    ],
  },
  latvia: {
    name: "Latvia",
    flag: "🇱🇻",
    flagUrl: "https://flagcdn.com/w320/lv.png",
    description: "Affordable European education with EU recognition. Latvia offers quality programs in English, lower living costs, and Schengen area access.",
    highlights: [
      "Affordable tuition & living costs",
      "EU-recognized degrees",
      "Schengen visa access",
      "English-taught programs",
      "Safe European country",
    ],
    requirements: [
      "Valid passport",
      "IELTS 5.5-6.0 or equivalent",
      "Academic transcripts",
      "Motivation letter",
      "Proof of funds (€5,000-7,000/year)",
      "Health insurance",
      "Residence permit",
    ],
    universities: [
      {
        name: "University of Latvia",
        location: "Riga",
        ranking: "#1 in Latvia",
        tuition: "€2,500-8,000/year",
        programs: ["Medicine", "Law", "Business", "IT", "Natural Sciences"],
        description: "Latvia's largest and leading comprehensive university.",
      },
      {
        name: "Riga Technical University",
        location: "Riga",
        ranking: "#2 in Latvia",
        tuition: "€3,000-8,000/year",
        programs: ["Engineering", "Architecture", "IT", "Transport", "Power Engineering"],
        description: "Latvia's oldest technical university with strong engineering programs.",
      },
      {
        name: "Riga Stradins University",
        location: "Riga",
        ranking: "#3 in Latvia",
        tuition: "€8,000-14,000/year",
        programs: ["Medicine", "Dentistry", "Pharmacy", "Nursing", "Public Health"],
        description: "Leading medical university in the Baltic region.",
      },
      {
        name: "Latvia University of Life Sciences",
        location: "Jelgava",
        ranking: "#4 in Latvia",
        tuition: "€2,000-5,000/year",
        programs: ["Agriculture", "Veterinary", "Food Technology", "Engineering", "Forestry"],
        description: "Specialized in life sciences and agriculture.",
      },
      {
        name: "Turiba University",
        location: "Riga",
        ranking: "#5 in Latvia",
        tuition: "€2,500-4,000/year",
        programs: ["Business", "Law", "Tourism", "Communications", "Security"],
        description: "Modern private university focused on business and law.",
      },
    ],
  },
}

export default function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country: countrySlug } = use(params)
  const country = countryData[countrySlug]

  if (!country) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        subtitle={`Study in ${country.name}`}
        title={`${country.flag} ${country.name}`}
        description={country.description}
      />

      {/* Highlights & Requirements */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Highlights */}
            <div className="rounded-2xl border border-border/50 bg-card p-8">
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-4 font-serif text-2xl font-bold text-foreground">Why Study in {country.name}?</h3>
              <ul className="space-y-3">
                {country.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="rounded-2xl border border-border/50 bg-card p-8">
              <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3">
                <GraduationCap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-4 font-serif text-2xl font-bold text-foreground">Admission Requirements</h3>
              <ul className="space-y-3">
                {country.requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3 text-muted-foreground">
                    <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="bg-gradient-to-b from-background via-secondary/30 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Top Universities
            </span>
            <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Partner Universities in {country.name}
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Explore top-ranked universities and find the perfect fit for your academic journey.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {country.universities.map((uni) => (
              <div
                key={uni.name}
                className="group rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                    <GraduationCap className="h-7 w-7 text-primary" />
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {uni.ranking}
                  </span>
                </div>

                <h3 className="mb-1 font-serif text-xl font-bold text-foreground">{uni.name}</h3>
                <p className="mb-3 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {uni.location}
                </p>

                <p className="mb-4 text-sm text-muted-foreground">{uni.description}</p>

                <div className="mb-4">
                  <p className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                    <DollarSign className="h-4 w-4 text-primary" />
                    Tuition: {uni.tuition}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {uni.programs.slice(0, 4).map((program) => (
                    <span
                      key={program}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
                    >
                      {program}
                    </span>
                  ))}
                  {uni.programs.length > 4 && (
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
                      +{uni.programs.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              How We Help
            </span>
            <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Our Application Process
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              { step: "01", title: "Free Consultation", desc: "Discuss your goals and get personalized guidance" },
              { step: "02", title: "University Selection", desc: "Shortlist universities based on your profile" },
              { step: "03", title: "Application Support", desc: "Complete documentation and application submission" },
              { step: "04", title: "Visa Assistance", desc: "End-to-end visa processing and interview prep" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-2xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-accent py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl">
            Ready to Study in {country.name}?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            Book a free consultation with our experts and start your journey today.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-primary transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            Get Free Consultation
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
