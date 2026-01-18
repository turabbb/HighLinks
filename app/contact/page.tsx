"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { Footer } from "@/components/footer"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  Calendar,
  User,
  GraduationCap,
  ChevronDown,
} from "lucide-react"
import { cn } from "@/lib/utils"

const office = {
  city: "Lahore",
  address: "2nd Floor, Plaza #38, Block K, Ghazi Road, DHA Phase 1, Lahore",
  phone: "+92 329 4474104",
  email: "info@highlinkspk.com",
  hours: "Mon-Sat: 9:00 AM - 6:00 PM",
}

const faqs = [
  {
    question: "Is the initial consultation free?",
    answer:
      "Yes, your first consultation is completely free. We will assess your profile, discuss your goals, and recommend the best study destinations and programs for you.",
  },
  {
    question: "How long does the visa process take?",
    answer:
      "Visa processing times vary by country, typically ranging from 2-12 weeks. We will guide you through the entire process to ensure timely submission.",
  },
  {
    question: "Do you guarantee visa approval?",
    answer:
      "While we cannot guarantee visa approval as the final decision rests with embassies, our 98% success rate reflects our thorough preparation and expertise.",
  },
  {
    question: "What documents do I need to bring for the first meeting?",
    answer:
      "Bring your academic transcripts, passport, any English language test scores (if available), and a brief idea of your preferred study destination and field.",
  },
]

function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    studyLevel: "",
    budget: "",
    startDate: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Consultation Request from ${formData.name}`)
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Preferred Destination: ${formData.destination || 'Not specified'}\n` +
        `Study Level: ${formData.studyLevel || 'Not specified'}\n` +
        `Budget: ${formData.budget || 'Not specified'}\n` +
        `Start Date: ${formData.startDate || 'Not specified'}\n` +
        `Message: ${formData.message || 'No message'}`
      )
      
      // Open mail client
      window.location.href = `mailto:info@highlinkspk.com?subject=${subject}&body=${body}`
      
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-6 rounded-full bg-primary/10 p-6 animate-scale-in">
          <CheckCircle2 className="h-12 w-12 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">Thank You!</h3>
        <p className="mt-3 max-w-sm text-muted-foreground">
          We have received your inquiry. Our expert counselor will contact you within 24 hours.
        </p>
        <div className="mt-6 flex items-center gap-2 rounded-full bg-primary/5 px-4 py-2 text-sm text-primary">
          <Clock className="h-4 w-4" />
          Expected response: Within 24 hours
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div className="space-y-4">
        <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
          <User className="h-4 w-4" />
          Personal Information
        </h3>

        <div className="relative">
          <label
            htmlFor="name"
            className={cn(
              "absolute left-4 transition-all duration-200 pointer-events-none",
              focusedField === "name" || formData.name
                ? "-top-2.5 text-xs bg-card px-1 text-primary"
                : "top-4 text-muted-foreground",
            )}
          >
            Full Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
            className="w-full rounded-xl border-2 border-border bg-card px-4 py-4 text-foreground transition-all duration-300 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="relative">
            <label
              htmlFor="email"
              className={cn(
                "absolute left-4 transition-all duration-200 pointer-events-none",
                focusedField === "email" || formData.email
                  ? "-top-2.5 text-xs bg-card px-1 text-primary"
                  : "top-4 text-muted-foreground",
              )}
            >
              Email Address <span className="text-destructive">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              className="w-full rounded-xl border-2 border-border bg-card px-4 py-4 text-foreground transition-all duration-300 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="phone"
              className={cn(
                "absolute left-4 transition-all duration-200 pointer-events-none",
                focusedField === "phone" || formData.phone
                  ? "-top-2.5 text-xs bg-card px-1 text-primary"
                  : "top-4 text-muted-foreground",
              )}
            >
              Phone Number <span className="text-destructive">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              onFocus={() => setFocusedField("phone")}
              onBlur={() => setFocusedField(null)}
              className="w-full rounded-xl border-2 border-border bg-card px-4 py-4 text-foreground transition-all duration-300 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
            />
          </div>
        </div>
      </div>

      {/* Study Preferences */}
      <div className="space-y-4 pt-4">
        <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
          <GraduationCap className="h-4 w-4" />
          Study Preferences
        </h3>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="relative">
            <select
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full appearance-none rounded-xl border-2 border-border bg-card px-4 py-4 text-foreground transition-all duration-300 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
            >
              <option value="">Preferred Destination</option>
              <option value="usa">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="canada">Canada</option>
              <option value="australia">Australia</option>
              <option value="germany">Germany</option>
              <option value="ireland">Ireland</option>
              <option value="other">Other / Not Sure</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          </div>

          <div className="relative">
            <select
              id="studyLevel"
              name="studyLevel"
              value={formData.studyLevel}
              onChange={handleChange}
              className="w-full appearance-none rounded-xl border-2 border-border bg-card px-4 py-4 text-foreground transition-all duration-300 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
            >
              <option value="">Study Level</option>
              <option value="bachelor">Bachelor's Degree</option>
              <option value="master">Master's Degree</option>
              <option value="phd">PhD / Doctorate</option>
              <option value="diploma">Diploma / Certificate</option>
              <option value="language">Language Course</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="relative">
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full appearance-none rounded-xl border-2 border-border bg-card px-4 py-4 text-foreground transition-all duration-300 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
            >
              <option value="">Budget Range (USD/Year)</option>
              <option value="10k-20k">$10,000 - $20,000</option>
              <option value="20k-35k">$20,000 - $35,000</option>
              <option value="35k-50k">$35,000 - $50,000</option>
              <option value="50k+">$50,000+</option>
              <option value="scholarship">Need Scholarship</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          </div>

          <div className="relative">
            <select
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full appearance-none rounded-xl border-2 border-border bg-card px-4 py-4 text-foreground transition-all duration-300 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
            >
              <option value="">Preferred Start Date</option>
              <option value="fall2025">Fall 2025</option>
              <option value="spring2026">Spring 2026</option>
              <option value="fall2026">Fall 2026</option>
              <option value="flexible">Flexible</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="relative pt-4">
        <label
          htmlFor="message"
          className={cn(
            "absolute left-4 transition-all duration-200 pointer-events-none",
            focusedField === "message" || formData.message
              ? "-top-2.5 text-xs bg-card px-1 text-primary"
              : "top-4 text-muted-foreground",
          )}
        >
          Tell us about your goals (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocusedField("message")}
          onBlur={() => setFocusedField(null)}
          className="w-full resize-none rounded-xl border-2 border-border bg-card px-4 py-4 text-foreground transition-all duration-300 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-5 font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {isSubmitting ? 'Submitting...' : 'Book Free Consultation'}
          <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </span>
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-accent to-primary transition-transform duration-500 group-hover:translate-x-0" />
      </button>

      <p className="text-center text-xs text-muted-foreground">
        By submitting, you agree to our privacy policy. We never share your information.
      </p>
    </form>
  )
}

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        subtitle="Contact Us"
        title="Let's Start Your Journey"
        description="Book a free consultation with our expert counselors. We are here to answer your questions and guide you toward your dream university."
      />

      {/* Contact Form & Info */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-3xl border border-border/50 bg-card p-8 shadow-xl md:p-10">
              <div className="mb-8">
                <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                  Free Consultation
                </span>
                <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">Book Your Session</h2>
                <p className="mt-2 text-muted-foreground">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>

              <ConsultationForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-lg">
                <h3 className="mb-4 font-semibold text-foreground">Quick Contact</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+923294474104"
                    className="flex items-center gap-4 rounded-xl bg-primary/5 p-4 transition-all duration-300 hover:bg-primary/10 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call Us</p>
                      <p className="font-medium text-foreground">+92 329 4474104</p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@highlinkspk.com"
                    className="flex items-center gap-4 rounded-xl bg-primary/5 p-4 transition-all duration-300 hover:bg-primary/10 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email Us</p>
                      <p className="font-medium text-foreground">info@highlinkspk.com</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/923294474104"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl bg-[#25D366]/10 p-4 transition-all duration-300 hover:bg-[#25D366]/20 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="rounded-lg bg-[#25D366]/20 p-3">
                      <MessageSquare className="h-5 w-5 text-[#25D366]" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <p className="font-medium text-foreground">Chat with us instantly</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Office Hours</h3>
                    <p className="text-sm text-muted-foreground">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Book Appointment */}
              <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Prefer an In-Person Meeting?</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Visit any of our offices for a face-to-face consultation. Walk-ins welcome, appointments
                      preferred.
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Guarantee */}
              <div className="flex items-center gap-4 rounded-xl bg-secondary/50 p-4">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium text-foreground">24-Hour Response Guarantee</p>
                  <p className="text-sm text-muted-foreground">We respond to all inquiries within one business day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="bg-gradient-to-b from-background via-secondary/30 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Our Office
            </span>
            <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">Visit Us</h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Come visit our office in Lahore for a face-to-face consultation.
            </p>
          </div>

          {/* Office Info + Map Side by Side */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Office Card - Left Side */}
            <div
              className="flex flex-col justify-center rounded-2xl border border-border/50 bg-card p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-xl"
            >
              <h3 className="mb-6 text-2xl font-semibold text-foreground">{office.city}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground">{office.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <a
                      href={`tel:${office.phone.replace(/\s/g, '')}`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {office.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a
                      href={`mailto:${office.email}`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Office Hours</p>
                    <p className="text-muted-foreground">{office.hours}</p>
                  </div>
                </div>
              </div>
              
              {/* Get Directions Button */}
              <a
                href="https://maps.app.goo.gl/3hcGWPavx2KkfrXcA"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
              >
                <MapPin className="h-5 w-5" />
                Get Directions
              </a>
            </div>

            {/* Google Map - Right Side */}
            <div className="h-[400px] overflow-hidden rounded-2xl border border-border/50 bg-card lg:h-auto lg:min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.940926630942!2d74.38756061168787!3d31.470811149480678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919070061acb041%3A0xc342df01c833cfaf!2sHighlinks%20Consultants!5e0!3m2!1sen!2s!4v1768757126525!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
                title="HighLinks Office Location - DHA Phase 1, Lahore"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Enhanced with accordion */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">FAQs</span>
            <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">Common Questions</h2>
          </div>

          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-300 hover:border-primary/20"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300",
                      openFaq === index && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    openFaq === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
