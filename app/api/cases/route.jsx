
import { connectDB } from "@dbConfig/dbConfig";
import Case from "@models/caseStudySchema";
import { NextResponse } from "next/server";

connectDB();
export async function GET() {
  try {
    const cases = await Case.find({}).populate("author", "username");
 
    return NextResponse.json(cases, { status: 200 });
  } catch (error) {
    console.error("Error fetching case studies:", error);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
}
