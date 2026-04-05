"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus("sent")
        setForm({ name: "", phone: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#16a34a]/40 transition"

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Jane Smith"
            className={inputClass}
            style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.1)" }}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Phone</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+61 4xx xxx xxx"
            className={inputClass}
            style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.1)" }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Email</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="jane@company.com.au"
          className={inputClass}
          style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.1)" }}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us about your business and what you're looking to solve..."
          className={inputClass}
          style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.1)", resize: "vertical" }}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-mono font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60 w-full md:w-fit"
        style={{ background: "#16a34a" }}
      >
        {status === "sending" ? "Sending..." : "Send Message"} <ArrowRight className="h-4 w-4" />
      </button>
      {status === "sent" && (
        <p className="text-sm font-mono text-[#16a34a]">Message sent! We'll be in touch shortly.</p>
      )}
      {status === "error" && (
        <p className="text-sm font-mono text-red-500">Something went wrong. Please try again or email us directly.</p>
      )}
    </form>
  )
}
