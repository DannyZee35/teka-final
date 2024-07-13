
import { connectDB } from "@dbConfig/dbConfig";
import Contact from "@models/contactUs";
import { NextResponse } from "next/server";

connectDB();
export async function GET() {
  try {
    const contacts = await Contact.find({})
 
    return NextResponse.json(contacts, { status: 200 });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
}
