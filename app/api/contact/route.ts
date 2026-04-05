import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  const { name, phone, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: `"Netkat Website" <${process.env.SMTP_USER}>`,
    to: "hello@netkat.com.au",
    replyTo: email,
    subject: `New enquiry from ${name}`,
    text: `Name: ${name}\nPhone: ${phone || "Not provided"}\nEmail: ${email}\n\n${message}`,
    html: `
      <h2>New enquiry from Netkat website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <hr />
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  })

  return NextResponse.json({ success: true })
}
