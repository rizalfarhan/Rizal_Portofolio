import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = body

    // Add more detailed error logging
    console.log('Request body:', { name, email, subject, messageLength: message?.length })

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // use SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Verify SMTP connection configuration
    try {
      await transporter.verify()
      console.log('SMTP connection verified')
    } catch (error) {
      console.error('SMTP verification failed:', error)
      throw error
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `${subject}`,
      text: `
        Name: ${name}

        ${message}
      `,
      replyTo: email,
    }

    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent:', info.messageId)

    return NextResponse.json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("Email send error:", error)
    return NextResponse.json(
      { error: "Internal Server Error", detail: String(error) },
      { status: 500 }
    )
  }
}
