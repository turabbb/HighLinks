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
        tuition: "approximately $54,000/year",
        programs: ["Business", "Law", "Medicine", "Engineering", "Computer Science"],
        description: "The oldest institution of higher learning in the United States, renowned for excellence across all disciplines.",
      },
      {
        name: "MIT",
        location: "Cambridge, Massachusetts",
        ranking: "#2 in USA",
        tuition: "approximately $57,000/year",
        programs: ["Engineering", "Computer Science", "Physics", "Mathematics", "AI/ML"],
        description: "World leader in science, technology, and innovation with strong industry partnerships.",
      },
      {
        name: "Stanford University",
        location: "Stanford, California",
        ranking: "#3 in USA",
        tuition: "approximately $56,000/year",
        programs: ["Computer Science", "Business", "Engineering", "Medicine", "Law"],
        description: "Silicon Valley's academic powerhouse, known for entrepreneurship and innovation.",
      },
      {
        name: "UC Berkeley",
        location: "Berkeley, California",
        ranking: "#4 Public University",
        tuition: "approximately $44,000/year",
        programs: ["Engineering", "Business", "Computer Science", "Data Science", "Environmental Science"],
        description: "Top public university with exceptional research programs and diverse student body.",
      },
      {
        name: "Columbia University",
        location: "New York City, New York",
        ranking: "#12 in USA",
        tuition: "approximately $63,000/year",
        programs: ["Journalism", "Business", "Law", "Arts", "International Relations"],
        description: "Ivy League institution in the heart of NYC, offering unparalleled networking opportunities.",
      },
      {
        name: "University of Michigan",
        location: "Ann Arbor, Michigan",
        ranking: "#21 in USA",
        tuition: "approximately $52,000/year",
        programs: ["Engineering", "Business", "Medicine", "Law", "Public Policy"],
        description: "One of the best public universities with excellent research facilities.",
      },
      {
        name: "New York University",
        location: "New York City, New York",
        ranking: "#25 in USA",
        tuition: "approximately $58,000/year",
        programs: ["Business", "Film", "Arts", "Law", "Media Studies"],
        description: "Located in the heart of Manhattan with global campus network.",
      },
      {
        name: "University of Southern California",
        location: "Los Angeles, California",
        ranking: "#27 in USA",
        tuition: "approximately $61,000/year",
        programs: ["Film", "Engineering", "Business", "Communications", "Computer Science"],
        description: "Leading private research university in the heart of Los Angeles.",
      },
      {
        name: "Boston University",
        location: "Boston, Massachusetts",
        ranking: "#41 in USA",
        tuition: "approximately $59,000/year",
        programs: ["Communications", "Business", "Engineering", "Law", "Health Sciences"],
        description: "Large private research university with strong professional programs.",
      },
      {
        name: "Arizona State University",
        location: "Tempe, Arizona",
        ranking: "#1 Innovation",
        tuition: "approximately $31,000/year",
        programs: ["Engineering", "Business", "Computer Science", "Sustainability", "Design"],
        description: "America's most innovative university with diverse program offerings.",
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
        name: "University of Hertfordshire",
        location: "Hatfield, England",
        ranking: "Top Modern University",
        tuition: "approximately £14,750/year",
        programs: ["Business", "Engineering", "Computer Science", "Health Sciences", "Creative Arts"],
        description: "Business-facing university with excellent industry connections and employability focus.",
      },
      {
        name: "Coventry University",
        location: "Coventry, England",
        ranking: "Top 50 in UK (Guardian)",
        tuition: "approximately £15,000/year",
        programs: ["Engineering", "Business", "Computing", "Health", "Design"],
        description: "Modern university known for industry-relevant courses and student satisfaction.",
      },
      {
        name: "University of Sunderland",
        location: "Sunderland, England",
        ranking: "Top Modern University",
        tuition: "approximately £13,500/year",
        programs: ["Business", "Computing", "Media", "Tourism", "Engineering"],
        description: "Affordable tuition with strong student support services and career guidance.",
      },
      {
        name: "Birmingham City University",
        location: "Birmingham, England",
        ranking: "Top 100 in UK",
        tuition: "approximately £14,500/year",
        programs: ["Business", "Engineering", "Media", "Law", "Health Sciences"],
        description: "Located in UK's second-largest city with excellent employment opportunities.",
      },
      {
        name: "De Montfort University",
        location: "Leicester, England",
        ranking: "Top Modern University",
        tuition: "approximately £14,750/year",
        programs: ["Business", "Computing", "Engineering", "Art & Design", "Law"],
        description: "Career-focused university with strong links to major employers.",
      },
      {
        name: "University of Bedfordshire",
        location: "Luton, England",
        ranking: "Modern University",
        tuition: "approximately £13,500/year",
        programs: ["Business", "Computing", "Media", "Sports", "Tourism"],
        description: "Affordable option near London with diverse student community.",
      },
      {
        name: "University of Greenwich",
        location: "London, England",
        ranking: "London University",
        tuition: "approximately £15,100/year",
        programs: ["Business", "Computing", "Engineering", "Architecture", "Education"],
        description: "Beautiful London campus with strong professional programs.",
      },
      {
        name: "University of East London",
        location: "London, England",
        ranking: "London University",
        tuition: "approximately £14,080/year",
        programs: ["Business", "Computing", "Health", "Education", "Psychology"],
        description: "Diverse London university with excellent career support.",
      },
      {
        name: "Middlesex University",
        location: "London, England",
        ranking: "London University",
        tuition: "approximately £15,100/year",
        programs: ["Business", "Art & Design", "Computing", "Law", "Health"],
        description: "Practice-based learning in North London with global campuses.",
      },
      {
        name: "University of Northampton",
        location: "Northampton, England",
        ranking: "Top for Employability",
        tuition: "approximately £14,500/year",
        programs: ["Business", "Computing", "Health", "Education", "Leather Technology"],
        description: "Award-winning careers service with high graduate employment rates.",
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
        tuition: "approximately CAD $45,000-60,000/year",
        programs: ["Engineering", "Computer Science", "Business", "Medicine", "Law"],
        description: "Canada's leading research university with a diverse global community.",
      },
      {
        name: "McGill University",
        location: "Montreal, Quebec",
        ranking: "#2 in Canada",
        tuition: "approximately CAD $20,000-50,000/year",
        programs: ["Medicine", "Law", "Engineering", "Music", "Sciences"],
        description: "One of Canada's oldest universities, known for research excellence.",
      },
      {
        name: "University of British Columbia",
        location: "Vancouver, BC",
        ranking: "#3 in Canada",
        tuition: "approximately CAD $40,000-55,000/year",
        programs: ["Forestry", "Engineering", "Business", "Computer Science", "Film"],
        description: "Beautiful campus with strong programs and industry connections.",
      },
      {
        name: "University of Waterloo",
        location: "Waterloo, Ontario",
        ranking: "#4 in Canada",
        tuition: "approximately CAD $35,000-50,000/year",
        programs: ["Computer Science", "Engineering", "Mathematics", "Co-op Programs", "Quantum Computing"],
        description: "Known for world's largest co-operative education program.",
      },
      {
        name: "University of Alberta",
        location: "Edmonton, Alberta",
        ranking: "#5 in Canada",
        tuition: "approximately CAD $30,000-40,000/year",
        programs: ["Engineering", "AI/ML", "Business", "Health Sciences", "Energy"],
        description: "Top research university with strong AI and engineering programs.",
      },
      {
        name: "Western University",
        location: "London, Ontario",
        ranking: "#7 in Canada",
        tuition: "approximately CAD $35,000-45,000/year",
        programs: ["Business", "Medicine", "Engineering", "Law", "Science"],
        description: "Beautiful campus with strong student experience and career outcomes.",
      },
      {
        name: "University of Calgary",
        location: "Calgary, Alberta",
        ranking: "#8 in Canada",
        tuition: "approximately CAD $25,000-35,000/year",
        programs: ["Engineering", "Business", "Medicine", "Environmental Science", "Energy"],
        description: "Strong energy sector connections with excellent research facilities.",
      },
      {
        name: "Simon Fraser University",
        location: "Burnaby, BC",
        ranking: "#9 in Canada",
        tuition: "approximately CAD $30,000-40,000/year",
        programs: ["Computing Science", "Business", "Communications", "Criminology", "Environmental Science"],
        description: "Innovative university with strong co-op and research programs.",
      },
      {
        name: "University of Ottawa",
        location: "Ottawa, Ontario",
        ranking: "#10 in Canada",
        tuition: "approximately CAD $28,000-38,000/year",
        programs: ["Law", "Medicine", "Engineering", "Political Science", "Languages"],
        description: "Bilingual university in Canada's capital with government connections.",
      },
      {
        name: "York University",
        location: "Toronto, Ontario",
        ranking: "#11 in Canada",
        tuition: "approximately CAD $25,000-35,000/year",
        programs: ["Business", "Law", "Fine Arts", "Psychology", "Computer Science"],
        description: "Large diverse university with strong professional programs.",
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
        tuition: "approximately AUD $40,000-50,000/year",
        programs: ["Medicine", "Law", "Engineering", "Arts", "Business"],
        description: "Australia's leading research university in a vibrant cultural city.",
      },
      {
        name: "University of Sydney",
        location: "Sydney, NSW",
        ranking: "#2 in Australia",
        tuition: "approximately AUD $45,000-55,000/year",
        programs: ["Health Sciences", "Law", "Architecture", "Engineering", "Business"],
        description: "Historic university in Australia's largest city with global reputation.",
      },
      {
        name: "UNSW Sydney",
        location: "Sydney, NSW",
        ranking: "#3 in Australia",
        tuition: "approximately AUD $40,000-50,000/year",
        programs: ["Engineering", "Computer Science", "Business", "Design", "Law"],
        description: "Strong industry connections and excellent graduate employment.",
      },
      {
        name: "Australian National University",
        location: "Canberra, ACT",
        ranking: "#4 in Australia",
        tuition: "approximately AUD $45,000-50,000/year",
        programs: ["Politics", "International Relations", "Science", "Law", "Asian Studies"],
        description: "National university with strong policy and research focus.",
      },
      {
        name: "Monash University",
        location: "Melbourne, Victoria",
        ranking: "#5 in Australia",
        tuition: "approximately AUD $35,000-45,000/year",
        programs: ["Pharmacy", "Engineering", "Business", "IT", "Medicine"],
        description: "Large research university with multiple campuses globally.",
      },
      {
        name: "University of Queensland",
        location: "Brisbane, Queensland",
        ranking: "#6 in Australia",
        tuition: "approximately AUD $38,000-48,000/year",
        programs: ["Science", "Engineering", "Business", "Health Sciences", "Agriculture"],
        description: "Leading research-intensive university with beautiful campus.",
      },
      {
        name: "University of Western Australia",
        location: "Perth, WA",
        ranking: "#7 in Australia",
        tuition: "approximately AUD $35,000-45,000/year",
        programs: ["Mining Engineering", "Agriculture", "Medicine", "Law", "Business"],
        description: "Premier university in Western Australia with strong mining connections.",
      },
      {
        name: "University of Adelaide",
        location: "Adelaide, SA",
        ranking: "#8 in Australia",
        tuition: "approximately AUD $35,000-45,000/year",
        programs: ["Wine & Food", "Health Sciences", "Engineering", "Law", "Arts"],
        description: "Member of Group of Eight with strong research programs.",
      },
      {
        name: "RMIT University",
        location: "Melbourne, Victoria",
        ranking: "Top Technology University",
        tuition: "approximately AUD $32,000-42,000/year",
        programs: ["Design", "Engineering", "Business", "IT", "Architecture"],
        description: "Leading technology and design university with industry focus.",
      },
      {
        name: "University of Technology Sydney",
        location: "Sydney, NSW",
        ranking: "Top Young University",
        tuition: "approximately AUD $35,000-45,000/year",
        programs: ["Design", "Engineering", "IT", "Business", "Communications"],
        description: "Innovative university with strong industry partnerships.",
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
        tuition: "approximately €20,000-25,000/year",
        programs: ["Computer Science", "Business", "Law", "Medicine", "Engineering"],
        description: "Ireland's oldest and most prestigious university, founded in 1592.",
      },
      {
        name: "University College Dublin",
        location: "Dublin",
        ranking: "#2 in Ireland",
        tuition: "approximately €18,000-25,000/year",
        programs: ["Business", "Engineering", "Computer Science", "Agriculture", "Veterinary"],
        description: "Ireland's largest university with strong international reputation.",
      },
      {
        name: "National University of Ireland, Galway",
        location: "Galway",
        ranking: "#3 in Ireland",
        tuition: "approximately €15,000-22,000/year",
        programs: ["Medicine", "Engineering", "Arts", "Science", "Business"],
        description: "Beautiful west coast location with excellent research facilities.",
      },
      {
        name: "University College Cork",
        location: "Cork",
        ranking: "#4 in Ireland",
        tuition: "approximately €16,000-23,000/year",
        programs: ["Food Science", "Pharmacy", "Law", "Business", "Medicine"],
        description: "Strong research university in Ireland's second largest city.",
      },
      {
        name: "Dublin City University",
        location: "Dublin",
        ranking: "#5 in Ireland",
        tuition: "approximately €14,000-18,000/year",
        programs: ["Communications", "Engineering", "Business", "Computing", "Education"],
        description: "Modern university with strong industry links and internship programs.",
      },
      {
        name: "University of Limerick",
        location: "Limerick",
        ranking: "#6 in Ireland",
        tuition: "approximately €13,000-17,000/year",
        programs: ["Engineering", "Business", "Education", "Health Sciences", "Sports"],
        description: "Campus university with excellent facilities and co-op programs.",
      },
      {
        name: "Maynooth University",
        location: "Maynooth",
        ranking: "#7 in Ireland",
        tuition: "approximately €13,000-16,000/year",
        programs: ["Science", "Arts", "Engineering", "Law", "Education"],
        description: "Growing university with strong research programs near Dublin.",
      },
      {
        name: "Technological University Dublin",
        location: "Dublin",
        ranking: "#8 in Ireland",
        tuition: "approximately €12,000-15,000/year",
        programs: ["Engineering", "Business", "Computing", "Hospitality", "Design"],
        description: "Ireland's first technological university with industry focus.",
      },
      {
        name: "Griffith College Dublin",
        location: "Dublin",
        ranking: "Top Private College",
        tuition: "approximately €10,000-14,000/year",
        programs: ["Business", "Computing", "Law", "Journalism", "Design"],
        description: "Leading private college with flexible entry requirements.",
      },
      {
        name: "National College of Ireland",
        location: "Dublin",
        ranking: "Business Focused",
        tuition: "approximately €11,000-15,000/year",
        programs: ["Business", "Computing", "HR", "Finance", "Psychology"],
        description: "City-center college with strong business and computing programs.",
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
        tuition: "approximately SEK 190,000-220,000/year",
        programs: ["Medicine", "Public Health", "Biomedicine", "Nursing", "Dentistry"],
        description: "One of the world's leading medical universities.",
      },
      {
        name: "KTH Royal Institute of Technology",
        location: "Stockholm",
        ranking: "#2 in Sweden",
        tuition: "approximately SEK 150,000-175,000/year",
        programs: ["Engineering", "Architecture", "Computer Science", "Sustainability", "ICT"],
        description: "Sweden's largest technical university with strong industry ties.",
      },
      {
        name: "Lund University",
        location: "Lund",
        ranking: "#3 in Sweden",
        tuition: "approximately SEK 130,000-180,000/year",
        programs: ["Engineering", "Law", "Medicine", "Economics", "Fine Arts"],
        description: "Comprehensive research university with excellent facilities.",
      },
      {
        name: "Uppsala University",
        location: "Uppsala",
        ranking: "#4 in Sweden",
        tuition: "approximately SEK 120,000-150,000/year",
        programs: ["Medicine", "Law", "Sciences", "Humanities", "Peace Studies"],
        description: "Scandinavia's oldest university with rich academic tradition.",
      },
      {
        name: "Chalmers University of Technology",
        location: "Gothenburg",
        ranking: "#5 in Sweden",
        tuition: "approximately SEK 140,000-160,000/year",
        programs: ["Engineering", "Architecture", "Shipping", "Automotive", "Sustainability"],
        description: "Leading technical university with strong automotive industry connections.",
      },
      {
        name: "Stockholm University",
        location: "Stockholm",
        ranking: "#6 in Sweden",
        tuition: "approximately SEK 90,000-140,000/year",
        programs: ["Natural Sciences", "Humanities", "Social Sciences", "Law", "Business"],
        description: "Large public university with diverse program offerings.",
      },
      {
        name: "University of Gothenburg",
        location: "Gothenburg",
        ranking: "#7 in Sweden",
        tuition: "approximately SEK 100,000-150,000/year",
        programs: ["Medicine", "Arts", "Social Sciences", "Education", "Business"],
        description: "Comprehensive university in Sweden's second-largest city.",
      },
      {
        name: "Linköping University",
        location: "Linköping",
        ranking: "#8 in Sweden",
        tuition: "approximately SEK 120,000-150,000/year",
        programs: ["Engineering", "Medicine", "Education", "Arts", "Technology"],
        description: "Innovative university known for interdisciplinary education.",
      },
      {
        name: "Umeå University",
        location: "Umeå",
        ranking: "#9 in Sweden",
        tuition: "approximately SEK 100,000-130,000/year",
        programs: ["Medicine", "Design", "Ecology", "Social Work", "Technology"],
        description: "Northern Sweden's largest university with strong research focus.",
      },
      {
        name: "Jönköping University",
        location: "Jönköping",
        ranking: "Top for Business",
        tuition: "approximately SEK 80,000-120,000/year",
        programs: ["Business", "Engineering", "Education", "Health Sciences", "Media"],
        description: "International university with strong business school.",
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
        tuition: "approximately €13,000-18,000/year",
        programs: ["Life Sciences", "Law", "Education", "Medicine", "Social Sciences"],
        description: "Finland's oldest and largest university, known for research excellence.",
      },
      {
        name: "Aalto University",
        location: "Espoo/Helsinki",
        ranking: "#2 in Finland",
        tuition: "approximately €12,000-15,000/year",
        programs: ["Design", "Business", "Engineering", "Architecture", "Arts"],
        description: "Innovative university combining technology, business, and arts.",
      },
      {
        name: "University of Turku",
        location: "Turku",
        ranking: "#3 in Finland",
        tuition: "approximately €10,000-14,000/year",
        programs: ["Medicine", "Law", "Education", "Biosciences", "Economics"],
        description: "Strong research university in Finland's oldest city.",
      },
      {
        name: "Tampere University",
        location: "Tampere",
        ranking: "#4 in Finland",
        tuition: "approximately €10,000-12,000/year",
        programs: ["Health Technology", "Social Sciences", "Engineering", "Communication", "Business"],
        description: "Multidisciplinary university with focus on societal challenges.",
      },
      {
        name: "University of Oulu",
        location: "Oulu",
        ranking: "#5 in Finland",
        tuition: "approximately €10,000-15,000/year",
        programs: ["IT", "Wireless Communications", "Health Sciences", "Education", "Engineering"],
        description: "Northern university known for ICT and health technology research.",
      },
      {
        name: "University of Eastern Finland",
        location: "Joensuu/Kuopio",
        ranking: "#6 in Finland",
        tuition: "approximately €8,000-12,000/year",
        programs: ["Forestry", "Health Sciences", "Education", "Environmental Science", "Photonics"],
        description: "Multi-campus university with strong environmental focus.",
      },
      {
        name: "University of Jyväskylä",
        location: "Jyväskylä",
        ranking: "#7 in Finland",
        tuition: "approximately €9,000-13,000/year",
        programs: ["Education", "Sports", "Psychology", "IT", "Business"],
        description: "Known for education research and sports sciences.",
      },
      {
        name: "LUT University",
        location: "Lappeenranta/Lahti",
        ranking: "#8 in Finland",
        tuition: "approximately €10,000-14,000/year",
        programs: ["Clean Energy", "Business", "Technology", "Sustainability", "Industrial Engineering"],
        description: "Sustainability-focused university with industry connections.",
      },
      {
        name: "Hanken School of Economics",
        location: "Helsinki/Vaasa",
        ranking: "Top Business School",
        tuition: "approximately €12,500-15,000/year",
        programs: ["Business", "Economics", "Finance", "Marketing", "Management"],
        description: "Triple-crowned business school with international focus.",
      },
      {
        name: "University of Vaasa",
        location: "Vaasa",
        ranking: "Top for Energy",
        tuition: "approximately €8,000-12,000/year",
        programs: ["Energy Technology", "Business", "Languages", "Public Administration", "Finance"],
        description: "Specialized in energy and business research.",
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
        tuition: "approximately €2,500-8,000/year",
        programs: ["Medicine", "Law", "Business", "IT", "Natural Sciences"],
        description: "Latvia's largest and leading comprehensive university.",
      },
      {
        name: "Riga Technical University",
        location: "Riga",
        ranking: "#2 in Latvia",
        tuition: "approximately €3,000-8,000/year",
        programs: ["Engineering", "Architecture", "IT", "Transport", "Power Engineering"],
        description: "Latvia's oldest technical university with strong engineering programs.",
      },
      {
        name: "Riga Stradins University",
        location: "Riga",
        ranking: "#3 in Latvia",
        tuition: "approximately €8,000-14,000/year",
        programs: ["Medicine", "Dentistry", "Pharmacy", "Nursing", "Public Health"],
        description: "Leading medical university in the Baltic region.",
      },
      {
        name: "Latvia University of Life Sciences",
        location: "Jelgava",
        ranking: "#4 in Latvia",
        tuition: "approximately €2,000-5,000/year",
        programs: ["Agriculture", "Veterinary", "Food Technology", "Engineering", "Forestry"],
        description: "Specialized in life sciences and agriculture.",
      },
      {
        name: "Turiba University",
        location: "Riga",
        ranking: "#5 in Latvia",
        tuition: "approximately €2,500-4,000/year",
        programs: ["Business", "Law", "Tourism", "Communications", "Security"],
        description: "Modern private university focused on business and law.",
      },
      {
        name: "Transport and Telecommunication Institute",
        location: "Riga",
        ranking: "#6 in Latvia",
        tuition: "approximately €2,800-5,000/year",
        programs: ["Aviation", "Transport", "IT", "Electronics", "Logistics"],
        description: "Specialized in transport, aviation, and telecommunications.",
      },
      {
        name: "RISEBA University",
        location: "Riga",
        ranking: "Top Business School",
        tuition: "approximately €3,500-6,000/year",
        programs: ["Business", "Architecture", "Media", "Design", "Communication"],
        description: "Private university with strong creative and business programs.",
      },
      {
        name: "Baltic International Academy",
        location: "Riga",
        ranking: "Multilingual University",
        tuition: "approximately €2,000-4,500/year",
        programs: ["Law", "Business", "Languages", "Psychology", "Political Science"],
        description: "Multilingual education with diverse international community.",
      },
      {
        name: "Daugavpils University",
        location: "Daugavpils",
        ranking: "Regional University",
        tuition: "approximately €1,800-4,000/year",
        programs: ["Education", "Sciences", "Arts", "Social Sciences", "Music"],
        description: "Regional university with affordable tuition and personal attention.",
      },
      {
        name: "Art Academy of Latvia",
        location: "Riga",
        ranking: "Top Arts University",
        tuition: "approximately €3,000-5,000/year",
        programs: ["Fine Arts", "Design", "Visual Communications", "Art History", "Restoration"],
        description: "Premier arts institution in the Baltic region.",
      },
    ],
  },
  belgium: {
    name: "Belgium",
    flag: "🇧🇪",
    flagUrl: "https://flagcdn.com/w320/be.png",
    description: "Heart of Europe with world-class universities and multilingual environment. Belgium offers affordable education, central European location, and strong research opportunities.",
    highlights: [
      "Central European location",
      "Affordable tuition fees",
      "Multilingual environment",
      "Strong research universities",
      "EU capital (Brussels)",
    ],
    requirements: [
      "Valid passport",
      "IELTS 6.0+ or equivalent",
      "Academic transcripts",
      "Motivation letter",
      "Proof of funds (€7,000-10,000/year)",
      "Health insurance",
      "Student visa (Type D)",
    ],
    universities: [
      {
        name: "KU Leuven",
        location: "Leuven",
        ranking: "#1 in Belgium",
        tuition: "approximately €1,000-6,000/year",
        programs: ["Engineering", "Medicine", "Law", "Business", "Sciences"],
        description: "Top-ranked European research university with historic campus.",
      },
      {
        name: "Ghent University",
        location: "Ghent",
        ranking: "#2 in Belgium",
        tuition: "approximately €1,000-6,000/year",
        programs: ["Veterinary", "Bio-Engineering", "Law", "Arts", "Medicine"],
        description: "Comprehensive research university with excellent facilities.",
      },
      {
        name: "Université Catholique de Louvain",
        location: "Louvain-la-Neuve",
        ranking: "#3 in Belgium",
        tuition: "approximately €800-5,000/year",
        programs: ["Engineering", "Philosophy", "Law", "Economics", "Medicine"],
        description: "Leading French-speaking university with strong research.",
      },
      {
        name: "Vrije Universiteit Brussel",
        location: "Brussels",
        ranking: "#4 in Belgium",
        tuition: "approximately €1,000-5,500/year",
        programs: ["Engineering", "Sciences", "Law", "Social Sciences", "Medicine"],
        description: "English-friendly university in the heart of Brussels.",
      },
      {
        name: "University of Antwerp",
        location: "Antwerp",
        ranking: "#5 in Belgium",
        tuition: "approximately €900-5,500/year",
        programs: ["Business", "Medicine", "Sciences", "Design", "Languages"],
        description: "Young dynamic university in Belgium's second-largest city.",
      },
      {
        name: "Université Libre de Bruxelles",
        location: "Brussels",
        ranking: "#6 in Belgium",
        tuition: "approximately €800-5,000/year",
        programs: ["Political Science", "Law", "Engineering", "Medicine", "Philosophy"],
        description: "International university with strong humanities programs.",
      },
      {
        name: "University of Liège",
        location: "Liège",
        ranking: "#7 in Belgium",
        tuition: "approximately €800-4,500/year",
        programs: ["Veterinary", "Engineering", "Sciences", "Law", "HEC Management"],
        description: "Research-intensive university with diverse programs.",
      },
      {
        name: "Hasselt University",
        location: "Hasselt",
        ranking: "#8 in Belgium",
        tuition: "approximately €900-5,000/year",
        programs: ["Business", "Law", "Medicine", "Sciences", "Architecture"],
        description: "Modern university with innovative teaching methods.",
      },
      {
        name: "Thomas More University of Applied Sciences",
        location: "Mechelen",
        ranking: "Top Applied Sciences",
        tuition: "approximately €3,000-6,000/year",
        programs: ["Business", "IT", "Engineering", "Health Care", "Design"],
        description: "Practice-oriented education with strong industry connections.",
      },
      {
        name: "Vesalius College",
        location: "Brussels",
        ranking: "Top International College",
        tuition: "approximately €8,000-12,000/year",
        programs: ["Business", "Communications", "International Affairs", "Art History", "Political Science"],
        description: "American-style liberal arts education in Brussels.",
      },
    ],
  },
  cyprus: {
    name: "Cyprus",
    flag: "🇨🇾",
    flagUrl: "https://flagcdn.com/w320/cy.png",
    description: "Mediterranean island nation offering affordable European education with English-taught programs. Cyprus provides a safe environment, warm climate, and EU membership benefits.",
    highlights: [
      "Affordable tuition & living",
      "English-taught programs",
      "Mediterranean climate",
      "Safe & welcoming",
      "EU member state",
    ],
    requirements: [
      "Valid passport",
      "IELTS 5.5-6.0 or equivalent",
      "Academic transcripts",
      "Motivation letter",
      "Proof of funds (€7,000/year)",
      "Health insurance",
      "Student visa",
    ],
    universities: [
      {
        name: "University of Cyprus",
        location: "Nicosia",
        ranking: "#1 in Cyprus",
        tuition: "approximately €3,500-7,000/year",
        programs: ["Engineering", "Business", "Sciences", "Law", "Architecture"],
        description: "Cyprus' leading public research university.",
      },
      {
        name: "Cyprus University of Technology",
        location: "Limassol",
        ranking: "#2 in Cyprus",
        tuition: "approximately €3,400-6,800/year",
        programs: ["Engineering", "Health Sciences", "Agriculture", "Fine Arts", "Management"],
        description: "Modern technological university with practical focus.",
      },
      {
        name: "University of Nicosia",
        location: "Nicosia",
        ranking: "#3 in Cyprus",
        tuition: "approximately €8,000-12,000/year",
        programs: ["Medicine", "Business", "Law", "Architecture", "Computer Science"],
        description: "Largest private university with diverse international programs.",
      },
      {
        name: "European University Cyprus",
        location: "Nicosia",
        ranking: "#4 in Cyprus",
        tuition: "approximately €7,000-11,000/year",
        programs: ["Medicine", "Dentistry", "Business", "Law", "Education"],
        description: "Medical school with modern facilities and clinical training.",
      },
      {
        name: "Frederick University",
        location: "Nicosia/Limassol",
        ranking: "#5 in Cyprus",
        tuition: "approximately €6,000-10,000/year",
        programs: ["Engineering", "Architecture", "Business", "Health Sciences", "Education"],
        description: "Multi-campus university with professional programs.",
      },
      {
        name: "Neapolis University Pafos",
        location: "Pafos",
        ranking: "#6 in Cyprus",
        tuition: "approximately €7,500-11,000/year",
        programs: ["Architecture", "Business", "Law", "IT", "Real Estate"],
        description: "Modern university in historic coastal city.",
      },
      {
        name: "UCLan Cyprus",
        location: "Larnaca",
        ranking: "UK-Affiliated",
        tuition: "approximately €8,000-12,000/year",
        programs: ["Law", "Business", "Psychology", "Computing", "Sports"],
        description: "British university campus offering UK degrees.",
      },
      {
        name: "American University of Cyprus",
        location: "Larnaca",
        ranking: "American Style",
        tuition: "approximately €6,000-9,000/year",
        programs: ["Business", "Hospitality", "IT", "Psychology", "Marketing"],
        description: "American-style education with flexible curriculum.",
      },
      {
        name: "CDA College",
        location: "Nicosia/Limassol",
        ranking: "Top College",
        tuition: "approximately €5,000-8,000/year",
        programs: ["Business", "IT", "Tourism", "Fashion", "Graphic Design"],
        description: "Practical career-focused programs with industry links.",
      },
      {
        name: "Cyprus International University",
        location: "Nicosia (North)",
        ranking: "International Campus",
        tuition: "approximately €3,000-6,000/year",
        programs: ["Engineering", "Business", "Architecture", "Tourism", "Health"],
        description: "Affordable international programs with diverse student body.",
      },
    ],
  },
  denmark: {
    name: "Denmark",
    flag: "🇩🇰",
    flagUrl: "https://flagcdn.com/w320/dk.png",
    description: "Nordic country known for innovation, design, and high quality of life. Denmark offers excellent research opportunities, work-life balance, and sustainable living.",
    highlights: [
      "World-class research",
      "Work-life balance focus",
      "Innovative & sustainable",
      "English widely spoken",
      "Safe & clean environment",
    ],
    requirements: [
      "Valid passport",
      "IELTS 6.5+ or equivalent",
      "Academic transcripts",
      "Motivation letter",
      "Proof of funds (DKK 6,397/month)",
      "Health insurance",
      "Residence permit",
    ],
    universities: [
      {
        name: "University of Copenhagen",
        location: "Copenhagen",
        ranking: "#1 in Denmark",
        tuition: "approximately DKK 90,000-145,000/year",
        programs: ["Medicine", "Science", "Humanities", "Law", "Health Sciences"],
        description: "Scandinavia's largest university with world-class research.",
      },
      {
        name: "Technical University of Denmark (DTU)",
        location: "Lyngby",
        ranking: "#2 in Denmark",
        tuition: "approximately DKK 75,000-120,000/year",
        programs: ["Engineering", "IT", "Biotechnology", "Energy", "Environment"],
        description: "Leading technical university with strong industry ties.",
      },
      {
        name: "Aarhus University",
        location: "Aarhus",
        ranking: "#3 in Denmark",
        tuition: "approximately DKK 70,000-110,000/year",
        programs: ["Business", "Engineering", "Arts", "Health", "Science"],
        description: "Second-largest Danish university with excellent research.",
      },
      {
        name: "Aalborg University",
        location: "Aalborg",
        ranking: "#4 in Denmark",
        tuition: "approximately DKK 60,000-100,000/year",
        programs: ["Engineering", "Social Sciences", "IT", "Architecture", "Health"],
        description: "Known for problem-based learning and engineering.",
      },
      {
        name: "Copenhagen Business School",
        location: "Copenhagen",
        ranking: "Top Business School",
        tuition: "approximately DKK 80,000-130,000/year",
        programs: ["Business", "Economics", "IT Management", "Law", "Languages"],
        description: "One of Europe's largest business schools.",
      },
      {
        name: "University of Southern Denmark",
        location: "Odense",
        ranking: "#5 in Denmark",
        tuition: "approximately DKK 55,000-95,000/year",
        programs: ["Engineering", "Health Sciences", "Business", "Humanities", "Science"],
        description: "Multi-campus university with diverse programs.",
      },
      {
        name: "Roskilde University",
        location: "Roskilde",
        ranking: "#6 in Denmark",
        tuition: "approximately DKK 50,000-85,000/year",
        programs: ["Social Sciences", "Humanities", "Natural Sciences", "Technology", "Communication"],
        description: "Known for interdisciplinary and group-based learning.",
      },
      {
        name: "IT University of Copenhagen",
        location: "Copenhagen",
        ranking: "Top IT University",
        tuition: "approximately DKK 85,000-105,000/year",
        programs: ["Software Development", "Data Science", "Digital Design", "Games", "Business IT"],
        description: "Denmark's specialized IT university.",
      },
      {
        name: "Royal Danish Academy",
        location: "Copenhagen",
        ranking: "Top Arts Academy",
        tuition: "approximately DKK 60,000-90,000/year",
        programs: ["Architecture", "Design", "Conservation", "Visual Arts", "Crafts"],
        description: "Leading academy for architecture and design.",
      },
      {
        name: "VIA University College",
        location: "Multiple Campuses",
        ranking: "Top Applied Sciences",
        tuition: "approximately DKK 55,000-80,000/year",
        programs: ["Engineering", "Business", "Health", "Education", "Design"],
        description: "Largest university college with practical programs.",
      },
    ],
  },
  hungary: {
    name: "Hungary",
    flag: "🇭🇺",
    flagUrl: "https://flagcdn.com/w320/hu.png",
    description: "Central European country offering affordable European education with rich cultural heritage. Hungary provides quality medical and engineering programs in English.",
    highlights: [
      "Very affordable tuition",
      "Quality medical programs",
      "EU-recognized degrees",
      "Rich cultural heritage",
      "Central European location",
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
        name: "Semmelweis University",
        location: "Budapest",
        ranking: "#1 in Hungary (Medical)",
        tuition: "approximately €16,000-18,000/year",
        programs: ["Medicine", "Dentistry", "Pharmacy", "Health Sciences", "Psychology"],
        description: "Hungary's oldest and most prestigious medical university.",
      },
      {
        name: "Eötvös Loránd University (ELTE)",
        location: "Budapest",
        ranking: "#1 in Hungary (Overall)",
        tuition: "approximately €5,000-10,000/year",
        programs: ["Law", "Sciences", "Humanities", "Education", "IT"],
        description: "Hungary's largest and oldest university.",
      },
      {
        name: "Budapest University of Technology",
        location: "Budapest",
        ranking: "#2 in Hungary",
        tuition: "approximately €6,000-12,000/year",
        programs: ["Engineering", "Architecture", "IT", "Economics", "Sciences"],
        description: "Leading technical university in Central Europe.",
      },
      {
        name: "University of Debrecen",
        location: "Debrecen",
        ranking: "#3 in Hungary",
        tuition: "approximately €7,000-14,000/year",
        programs: ["Medicine", "Dentistry", "Engineering", "Science", "Agriculture"],
        description: "Major research university with strong medical school.",
      },
      {
        name: "University of Szeged",
        location: "Szeged",
        ranking: "#4 in Hungary",
        tuition: "approximately €6,000-13,000/year",
        programs: ["Medicine", "Law", "Science", "Arts", "Pharmacy"],
        description: "Southern Hungary's largest comprehensive university.",
      },
      {
        name: "University of Pécs",
        location: "Pécs",
        ranking: "#5 in Hungary",
        tuition: "approximately €6,500-14,000/year",
        programs: ["Medicine", "Law", "Business", "Engineering", "Arts"],
        description: "One of Hungary's oldest universities with diverse programs.",
      },
      {
        name: "Corvinus University",
        location: "Budapest",
        ranking: "Top Business School",
        tuition: "approximately €5,000-9,000/year",
        programs: ["Business", "Economics", "Social Sciences", "Public Administration", "Horticulture"],
        description: "Hungary's leading business and economics university.",
      },
      {
        name: "Central European University",
        location: "Vienna/Budapest",
        ranking: "Top Graduate University",
        tuition: "approximately €12,000-18,000/year",
        programs: ["Political Science", "Law", "Business", "Environmental Science", "Public Policy"],
        description: "International graduate university with global reputation.",
      },
      {
        name: "University of Miskolc",
        location: "Miskolc",
        ranking: "#6 in Hungary",
        tuition: "approximately €4,500-8,000/year",
        programs: ["Engineering", "Law", "Economics", "Materials Science", "Health"],
        description: "Northern Hungary's leading technical university.",
      },
      {
        name: "McDaniel College Budapest",
        location: "Budapest",
        ranking: "US-Affiliated",
        tuition: "approximately €9,000-13,000/year",
        programs: ["Business", "Communications", "Psychology", "Political Science", "Art History"],
        description: "American liberal arts education in Budapest.",
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
