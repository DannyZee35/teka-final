import { connectDB } from "@dbConfig/dbConfig";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { unlink } from 'fs/promises';
import { join } from 'path';
import Blog from "@models/blogSchema";

// Connect to the database
connectDB();

export async function DELETE(req, { params }) {
  try {
    const { id } = params; // Extract blog ID from request parameters

    // Retrieve the blog from the database
    const blog = await Blog.findById(id);
    if (!blog) {
      return NextResponse.json({ success: false, error: "Blog not found." }, { status: 404 });
    }

    // Remove the associated image file from the folder
    const imagePath = join(process.cwd(), 'public', blog.imageUrl);
    await unlink(imagePath);

    // Delete the blog from the database
    await Blog.findByIdAndDelete(id);

    console.log("Blog deleted successfully:", blog);

    return NextResponse.json({ success: true, message: "Blog deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
}
