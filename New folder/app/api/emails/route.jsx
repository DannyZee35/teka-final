import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Initialize Nodemailer transporter with Brevo SMTP configuration
const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com', // Brevo SMTP server address
    port: 587, // Port for TLS (587 is commonly used)
    secure: false, // false for TLS - as a boolean not string
    auth: {
        user: '7482ef001@smtp-brevo.com', // Your Brevo username
        pass: process.env.SMTP_API // Your Brevo password
    }
});

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const { emails, message, subject } = reqBody;

    // Check if subject is provided
    if (!subject) {
      return NextResponse.json({ error: "Subject is required", status: 400 });
    }

    // Check if emails array is provided and not empty
    if (!emails || emails.length === 0) {
      return NextResponse.json({ error: "No recipients defined", status: 400 });
    }

    // Send email to all users using Nodemailer
    const emailPromises = emails.map(email => {
      return transporter.sendMail({
        from: "pashacorleonne@gmail.com", // Update with your sender email
        to: email,
        subject: subject,
        text: message,
      });
    });

    // Wait for all emails to be sent
    await Promise.all(emailPromises);

    return NextResponse.json({ message: "Bulk emails sent successfully", status: 200 });
  } catch (error) {
    console.error("Error sending bulk emails:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
