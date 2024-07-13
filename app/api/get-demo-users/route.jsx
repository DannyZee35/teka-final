
import { connectDB } from "@dbConfig/dbConfig";
import Customer from "@models/customerSchema";
import { NextResponse } from "next/server";

connectDB();
export async function GET() {
  try {
    const customers = await Customer.find({})
 
    return NextResponse.json(customers, { status: 200 });
  } catch (error) {
    console.error("Error fetching customers:", error);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
}
