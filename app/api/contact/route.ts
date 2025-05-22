import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = body

    // Debug logging for environment variables
    console.log('Environment check:', {
      hasEmailUser: !!process.env.EMAIL_USER,
      hasEmailPass: !!process.env.EMAIL_PASS
    })

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Email configuration is missing')
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: true
      }
    })

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      text: `
New Contact Message:
------------------
From: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      replyTo: email,
    }

    // Log before sending
    console.log('Attempting to send email...')
    
    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', info.messageId)

    return NextResponse.json({ 
      success: true, 
      message: "Email sent successfully",
      messageId: info.messageId 
    })
  } catch (error) {
    console.error("Email send error:", error)
    return NextResponse.json(
      { 
        error: "Failed to send email", 
        detail: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
}
