import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, services, projectDetails } = body;

    // Validate required fields
    if (!name || !email || !phone || !services || !projectDetails) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error("Missing SMTP credentials in environment variables");
      return NextResponse.json(
        { error: "Email service not configured. Please contact the administrator." },
        { status: 500 }
      );
    }

    // Create transporter for Gmail
    // Note: For Gmail, you MUST use an App Password, not your regular password
    // Generate App Password: https://myaccount.google.com/apppasswords
    // Make sure 2-Step Verification is enabled first
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD, // Use App Password here
      },
      tls: {
        rejectUnauthorized: false, // For Gmail, this helps with certificate issues
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `New Consultation Request: ${services}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ea580c;">New Consultation Request</h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>Services Interested In:</strong> ${services}</p>
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #374151;">Project Details:</h3>
            <p style="white-space: pre-wrap; background-color: #f9fafb; padding: 15px; border-radius: 8px;">${projectDetails}</p>
          </div>
        </div>
      `,
      text: `
New Consultation Request

Name: ${name}
${company ? `Company: ${company}` : ""}
Email: ${email}
Phone: ${phone}
Services Interested In: ${services}

Project Details:
${projectDetails}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
