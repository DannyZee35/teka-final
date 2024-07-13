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
    const { email, message, subject } = reqBody;

    // Check if subject is provided
    if (!subject) {
      return NextResponse.json({ error: "Subject is required", status: 400 });
    }

    // Send email using Nodemailer
    const info = await transporter.sendMail({
      from: "pashacorleonne@gmail.com", // Update with your sender email
      to: email,
      subject: subject,
      text: message,
    });

    console.log("Message sent: %s", info.messageId);

    return NextResponse.json({ message: "Email sent successfully", status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
