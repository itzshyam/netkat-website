import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <main
      className="min-h-screen text-foreground"
      style={{ background: "linear-gradient(135deg, #f5f4f2 0%, #ede8e3 40%, #eef0ee 100%)" }}
    >
      <nav
        className="flex items-center justify-between px-6 md:px-12 py-5"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}
      >
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg overflow-hidden">
            <img src="/android-chrome-192x192.png" alt="Netkat logo" className="h-full w-full object-cover" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[28px] font-semibold tracking-tight text-foreground">Netkat</span>
            <span className="text-[22px] font-mono text-muted-foreground uppercase tracking-wider">Consulting</span>
          </div>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-mono font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
      </nav>

      <div className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-foreground mb-6">
          About <span style={{ color: "#16a34a" }}>Netkat.</span>
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground mb-6">
          Netkat Consulting is a specialist IT consultancy serving Australian businesses. We focus on delivering senior-level technology strategy and implementation — without the overhead of a large agency.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground mb-6">
          With over 10 years of industry experience, we work across eCommerce, wholesale and distribution, professional services, and growing SMBs. Every engagement is scoped, structured, and outcome-based.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          We believe in building technology that fits your business — not the other way around.
        </p>

        <div className="mt-12">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-mono font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "#16a34a" }}
          >
            Get in touch
          </Link>
        </div>
      </div>
    </main>
  )
}
