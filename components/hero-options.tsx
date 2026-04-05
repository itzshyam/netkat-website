"use client"

import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import ContactForm from "./contact-form"

// Clinical Paper: light base, margin green, frosted glass cards.
export function HeroClinical() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      className="theme-clinical text-foreground relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f5f4f2 0%, #ede8e3 40%, #eef0ee 100%)" }}
    >
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(134,197,143,0.22) 0%, transparent 70%)" }} />
      <div className="absolute top-1/3 -right-24 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(186,196,218,0.28) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(209,200,190,0.30) 0%, transparent 70%)" }} />
      <div className="absolute bottom-[80px] -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(134,197,143,0.22) 0%, transparent 70%)" }} />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <nav className="relative flex items-center justify-between px-4 md:px-12 py-4 md:py-5"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}
      >
        <div className="flex items-center gap-2 md:gap-3">
          <div className="h-9 w-9 md:h-10 md:w-10 rounded-lg overflow-hidden shrink-0">
            <img src="/android-chrome-192x192.png" alt="Netkat logo" className="h-full w-full object-cover" />
          </div>
          <div className="flex items-baseline gap-1.5 md:gap-2">
            <span className="text-[20px] md:text-[28px] font-semibold tracking-tight text-foreground">Netkat</span>
            <span className="text-[14px] md:text-[22px] font-mono text-muted-foreground uppercase tracking-wider">Consulting</span>
          </div>
        </div>
        <button
          onClick={scrollToContact}
          className="px-3 py-2 md:px-6 md:py-3 rounded-lg text-xs md:text-base font-mono font-semibold text-white transition-opacity hover:opacity-90 whitespace-nowrap"
          style={{ background: "#16a34a" }}
        >
          Start Assessment
        </button>
      </nav>

      {/* Hero */}
      <div className="relative px-4 md:px-12 lg:px-20 py-10 md:py-24">
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-12">

          <div className="flex flex-col gap-6 flex-1 min-w-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.08] text-foreground">
              The Logic Layer for
              <br />
              <span style={{ color: "#16a34a" }}>Australian Business.</span>
            </h1>

            <p className="text-base leading-relaxed max-w-lg text-muted-foreground">
              Senior-level technology consulting for Australian businesses. Fixed engagements, clear deliverables, and ongoing support without the agency overhead.
            </p>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-mono font-semibold text-white transition-opacity hover:opacity-90 w-fit"
              style={{ background: "#16a34a" }}
            >
              Book Assessment <ArrowRight className="h-4 w-4" />
            </button>

            <div className="flex gap-0 w-full max-w-lg">
              {[
                { val: "10+", label: "Years industry\nexperience" },
                { val: "100%", label: "Outcome\nbased" },
                { val: "24/7", label: "Critical\nsupport" },
              ].map((s) => (
                <div key={s.label} className="flex-1">
                  <p className="text-xl font-semibold text-foreground">{s.val}</p>
                  <p className="text-xs font-mono text-muted-foreground mt-1 leading-snug whitespace-pre-line">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col flex-1 min-w-0 gap-3 lg:justify-end">
            <div
              className="p-5 rounded-2xl backdrop-blur-xl shadow-lg"
              style={{
                background: "rgba(255,255,255,0.52)",
                border: "1px solid rgba(255,255,255,0.75)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
              }}
            >
              <div className="mb-4 text-center">
                <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Verticals we serve</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "eCommerce Brands",
                  "Wholesale & Distribution",
                  "SMB & Startups",
                  "Professional Services",
                ].map((industry) => (
                  <div
                    key={industry}
                    className="p-3 rounded-xl flex items-center min-h-[3.5rem] bg-muted/50"
                    style={{
                      boxShadow: "0 0 0 1px rgba(22, 163, 74, 0.32), 0 4px 18px -6px rgba(22, 163, 74, 0.22)",
                    }}
                  >
                    <p className="text-base leading-relaxed font-medium text-foreground">{industry}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="p-5 md:p-6 rounded-2xl backdrop-blur-xl"
              style={{
                background: "rgba(255,255,255,0.45)",
                border: "1px solid rgba(255,255,255,0.70)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.85)",
              }}
            >
              <div className="text-center mb-4">
                <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider">How we work</span>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "Scoped, not open-ended",
                    body: "Every engagement starts with a defined scope, clear deliverables, and transparent terms. No scope creep, no surprise invoices.",
                  },
                  {
                    title: "Tailored to your business",
                    body: "We design solutions around your specific needs, existing systems, and where you're headed, instead of a generic template that almost fits.",
                  },
                  {
                    title: "Support model",
                    body: "Where it makes sense, we offer lean ongoing support, including monitoring, maintenance, and iterations.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 items-start">
                    <CheckCircle2
                      className="h-5 w-5 shrink-0 mt-0.5"
                      stroke="#16a34a"
                      color="#16a34a"
                    />
                    <div className="text-base min-w-0 leading-relaxed">
                      <span className="font-medium text-foreground">{item.title}</span>
                      <span className="block mt-1 text-muted-foreground">{item.body}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div
        id="contact"
        className="relative px-4 md:px-12 lg:px-20 py-10 md:py-24"
        style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}
      >
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-2">
            Get in <span style={{ color: "#16a34a" }}>touch.</span>
          </h2>
          <p className="text-base text-muted-foreground mb-8">
            Tell us about your business and we'll get back to you shortly.
          </p>
          <ContactForm />
        </div>
      </div>

      {/* Footer */}
      <div
        className="relative px-6 md:px-12 lg:px-20 py-8"
        style={{ background: "#dbd6cf", borderTop: "1px solid rgba(0,0,0,0.08)" }}
      >
        <div className="flex flex-col items-center gap-1">
          <Link
            href="/about"
            className="text-sm font-mono text-foreground uppercase tracking-wider hover:opacity-70 transition-opacity"
          >
            About Us
          </Link>
          <a href="mailto:hello@netkat.com.au" className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors">
            hello@netkat.com.au
          </a>
        </div>
      </div>
    </section>
  )
}
