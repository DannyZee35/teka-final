 
import { connectDB } from "@dbConfig/dbConfig";
import Newsletter from "@models/newsletterSchema";
import { NextResponse } from "next/server";

connectDB();
export async function GET() {
  try {
    const emails = await Newsletter.find({});
 
    return NextResponse.json(emails, { status: 200 });
  } catch (error) {
    console.error("Error fetching emails", error);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
}
