import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <main
      className="theme-clinical min-h-screen text-foreground relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f5f4f2 0%, #ede8e3 40%, #eef0ee 100%)" }}
    >
      {/* Background blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(134,197,143,0.22) 0%, transparent 70%)" }} />
      <div className="absolute top-1/3 -right-24 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(186,196,218,0.28) 0%, transparent 70%)" }} />
      <div className="absolute bottom-[80px] -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(134,197,143,0.22) 0%, transparent 70%)" }} />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Nav */}
      <nav
        className="relative flex items-center justify-between px-4 md:px-12 py-4 md:py-5"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}
      >
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg overflow-hidden shrink-0">
            <img src="/android-chrome-192x192.png" alt="Netkat logo" className="h-full w-full object-cover" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-[22px] md:text-[28px] font-semibold tracking-tight text-foreground">Netkat</span>
            <span className="text-[16px] md:text-[22px] font-mono text-muted-foreground uppercase tracking-wider">Consulting</span>
          </div>
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-mono font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
      </nav>

      {/* Content */}
      <div className="relative px-4 md:px-12 lg:px-20 py-10 md:py-24">

        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-foreground">
            About <span style={{ color: "#16a34a" }}>Netkat.</span>
          </h1>
        </div>

        {/* Who We Are */}
        <div className="max-w-3xl mx-auto mb-16">
          <span className="text-sm font-mono font-bold text-muted-foreground uppercase tracking-wider block text-center">Who We Are</span>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Netkat Consulting was born out of a simple conversation. A friend mentioned they were manually reconciling supplier stock every morning — checking spreadsheets, updating systems one by one, just to start the day. It was taking hours. To them it was just part of the job. To Shyam, it was a problem with a straightforward fix.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            That moment stuck. How many businesses are running on workarounds they have just accepted as normal? Netkat exists to answer that question.
          </p>
        </div>

        {/* Divider */}
        <div className="max-w-3xl mx-auto mb-16" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }} />

        {/* Our Mission */}
        <div className="max-w-3xl mx-auto mb-16">
          <span className="text-sm font-mono font-bold text-muted-foreground uppercase tracking-wider block text-center">Our Mission</span>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            To help businesses realise potential they did not even know they had — through technology built around them, not around us.
          </p>
        </div>

        {/* Divider */}
        <div className="max-w-3xl mx-auto mb-16" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }} />

        {/* Meet the Team */}
        <div className="max-w-3xl mx-auto mb-16">
          <span className="text-sm font-mono font-bold text-muted-foreground uppercase tracking-wider block text-center">Meet the Team</span>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Shyam */}
            <div
              className="p-6 rounded-2xl backdrop-blur-xl flex flex-col gap-4"
              style={{
                background: "rgba(255,255,255,0.52)",
                border: "1px solid rgba(255,255,255,0.75)",
                boxShadow: "0 0 0 1px rgba(22,163,74,0.25), 0 8px 32px rgba(22,163,74,0.12), inset 0 1px 0 rgba(255,255,255,0.9)",
              }}
            >
              <div>
                <p className="text-base font-semibold text-foreground">Shyam</p>
                <p className="text-xs font-mono text-foreground mt-0.5">Founder & Principal Consultant</p>
              </div>
              <div className="flex justify-center">
                <div className="w-48 h-56 rounded-[50%] overflow-hidden flex-shrink-0 relative"
                  style={{ boxShadow: "0 0 0 3px rgba(22,163,74,0.3)" }}>
                  <img src="/shyam.jpg" alt="Shyam" className="absolute w-full" style={{ top: "-10%", height: "110%" , objectFit: "cover", objectPosition: "50% 10%" }} />
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Shyam brings over 12 years of experience across financial services, retail, investment management, and large-scale corporate environments in both Australia and the United States. He has worked across some of the most complex technology environments in the country. That background gives him a clear understanding of what well-built systems look like in practice and how to bring that same standard to businesses that need it without the enterprise price tag.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                He works directly with every Netkat client from scoping through to delivery.
              </p>
            </div>

            {/* Keerti */}
            <div
              className="p-6 rounded-2xl backdrop-blur-xl flex flex-col gap-4"
              style={{
                background: "rgba(255,255,255,0.52)",
                border: "1px solid rgba(255,255,255,0.75)",
                boxShadow: "0 0 0 1px rgba(22,163,74,0.25), 0 8px 32px rgba(22,163,74,0.12), inset 0 1px 0 rgba(255,255,255,0.9)",
              }}
            >
              <div>
                <p className="text-base font-semibold text-foreground">Keerti</p>
                <p className="text-xs font-mono text-foreground mt-0.5">Co-founder & Technical Architect</p>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Keerti is the one who actually builds what Netkat promises. With over 10 years across telecommunications, enterprise IT and managed services, she understands how technology works at both the infrastructure and application layer. She designs the frameworks, builds the integrations and makes sure what gets delivered actually holds up.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Every solution goes through both of them. Shyam brings the client context and systems thinking, Keerti brings the architecture and build. Between the two, nothing gets handed over half-finished.
              </p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-mono font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "#16a34a" }}
          >
            Get in touch
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div
        className="relative px-6 md:px-12 lg:px-20 py-8 mt-8"
        style={{ background: "#dbd6cf", borderTop: "1px solid rgba(0,0,0,0.08)" }}
      >
        <div className="flex flex-col items-center gap-1">
          <Link href="/about" className="text-sm font-mono text-foreground uppercase tracking-wider hover:opacity-70 transition-opacity">
            About Us
          </Link>
          <a href="mailto:hello@netkat.com.au" className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors">
            hello@netkat.com.au
          </a>
        </div>
      </div>
    </main>
  )
}
