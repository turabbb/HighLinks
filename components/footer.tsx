import Link from "next/link"
import { Logo } from "./logo"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]

const services = [
  { name: "University Admissions", href: "/services" },
  { name: "Visa Assistance", href: "/services" },
  { name: "Scholarship Guidance", href: "/services" },
  { name: "Career Counseling", href: "/services" },
]

const destinations = [
  { name: "Study in USA", href: "/study-abroad/us" },
  { name: "Study in UK", href: "/study-abroad/uk" },
  { name: "Study in Canada", href: "/study-abroad/ca" },
  { name: "Study in Australia", href: "/study-abroad/au" },
]

const socials = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61550343360549&mibextid=ZbWKwL" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/highlinks_consultants/" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/highlinks/" },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@Highlinks1" },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-foreground to-foreground/95 text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo className="h-16 w-16" />
            </div>
            <p className="mb-6 text-background/70">
              Your trusted partner for international education. Guiding dreams since 2022.
            </p>
            <p className="text-lg font-medium text-background/90">Your Future, Our Concern</p>

            {/* Social links */}
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="rounded-lg bg-background/10 p-2.5 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-background">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/70 transition-colors hover:text-background">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-background">Our Services</h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/70 transition-colors hover:text-background">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-background">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+923294474104"
                  className="flex items-start gap-3 text-background/70 transition-colors hover:text-background"
                >
                  <Phone className="mt-0.5 h-5 w-5 flex-shrink-0" />
                  <span>+92 329 4474104</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+923274400236"
                  className="flex items-start gap-3 text-background/70 transition-colors hover:text-background"
                >
                  <Phone className="mt-0.5 h-5 w-5 flex-shrink-0" />
                  <span>+92 327 4400236</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@highlinkspk.com"
                  className="flex items-start gap-3 text-background/70 transition-colors hover:text-background"
                >
                  <Mail className="mt-0.5 h-5 w-5 flex-shrink-0" />
                  <span>info@highlinkspk.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0" />
                <span>
                  2nd Floor, Plaza #38, Block K,
                  <br />
                  Ghazi Road, DHA Phase 1,
                  <br />
                  Lahore, Pakistan
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-background/10 pt-8">
          <div className="flex items-center justify-center">
            <p className="text-sm text-background/60">© 2026 HighLinks. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
