// api/single-blog/[id].jsx

import { connectDB } from "@dbConfig/dbConfig";
import Blog from "@models/blogSchema";
import { NextResponse } from "next/server";

connectDB();

export async function GET(req,{params}) {
  try {
    const { id } = params;

    const blog = await Blog.findById({_id:id}).populate("author", "username");

    if (!blog) {
      console.log("Blog not found");
      return NextResponse.error("Blog not found", { status: 404 });
    }

    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
}
