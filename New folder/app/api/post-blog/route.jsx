import { connectDB } from "@dbConfig/dbConfig";
import mongoose from "mongoose";
import User from "@models/userModel";
import Blog from "@models/blogSchema";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { getDataFromToken } from "@utils/getDataFromToken";
import { writeFile } from 'fs/promises';
import { join } from 'path';

// Connect to the database
connectDB();

const UserModel = mongoose.models.users || User;

export async function POST(req) {
  try {
    const data = await req.formData();

    const title = data.get('title');
    const content = data.get('content');
    const imageFile = data.get('image'); // Change to the name attribute of your file input field

    if (!imageFile) {
      return NextResponse.json({ success: false, error: "No image found." });
    }

    const userID = await getDataFromToken(req);
    const user = await UserModel.findOne({ _id: userID }).select("-password");

    const bytes = await imageFile.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Generate a unique filename for the image using blog ID and original filename
    const blogID = new mongoose.Types.ObjectId(); // Generate a new ObjectID for the blog
    const filename = `${blogID}-${imageFile.name}`;

    // Save the image in the public/images directory with the unique filename
    const imagePath = join(process.cwd(), 'public/images', filename);
    await writeFile(imagePath, buffer);

    console.log(`Image saved at ${imagePath}`);

    if (!user) {
      return NextResponse.json({
        error: "User not found",
        status: 400,
      });
    }

    // Save the relative path to the image in the database
    const relativeImagePath = join('/images', filename);

    // Create a new blog post with the relative image path
    const newBlog = new Blog({
      title,
      content,
      author: userID,
      imageUrl: relativeImagePath,
      createdAt: new Date(),
    });

    const savedBlog = await newBlog.save();

    // Populate the author field with username
    const populatedBlog = await Blog.findById(savedBlog._id).populate('author', 'username');

    console.log("New blog post created:", populatedBlog);

    return NextResponse.json(populatedBlog, { message:"Blog created successfully",status: 200 });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
}
