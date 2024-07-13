import User from "@models/userModel";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import { connectDB } from "@dbConfig/dbConfig";

connectDB();

export async function POST(request) {
  const reqBody = await request.json();
  const { email, password } = reqBody;

  const user = await User.findOne({ email });

  if (!user) {
    return NextResponse.json({
      error: "User does not exist",
      status: 400,
    });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return NextResponse.json({
      error: "Invalid password",
      status: 401,
    });
  }

  const tokenData = {
    id: user._id,
    email: user.email,
  };

  const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, {
    expiresIn: "1d",
  });

  const response = NextResponse.json({
    message: "Logged In Successfully",
    success: true,
  });

  response.cookies.set("token", token, {
    httpOnly: true,
  });

  return response;
}
