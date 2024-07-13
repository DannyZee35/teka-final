import { connectDB } from "@dbConfig/dbConfig";
import Newsletter from "@models/newsletterSchema";
import { NextResponse } from "next/server";

// Connect to the database
connectDB();

export async function GET(req, { params }) {
  try {
    const { id } = params; // Extract email ID from request parameters

    // Find the email by ID
    const email = await Newsletter.findById(id);

    if (!email) {
      return NextResponse.json({ success: false, error: "Email not found." }, { status: 404 });
    }

    return NextResponse.json(email, { status: 200 });
  } catch (error) {
    console.error("Error fetching email:", error);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
}
