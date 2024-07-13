
import { connectDB } from "@dbConfig/dbConfig";
import Blog from "@models/blogSchema";
import { NextResponse } from "next/server";

connectDB();
export async function GET() {
  try {
    const blogs = await Blog.find({}).populate("author", "username");
 
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
}
