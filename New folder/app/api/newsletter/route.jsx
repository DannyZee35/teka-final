 
import { connectDB } from "@dbConfig/dbConfig";

import Newsletter from "@models/newsletterSchema";
import { NextResponse } from "next/server";

 connectDB();

export async function POST(req) {
  try {
    const reqBody= await req.json();
    const { email } = reqBody;

     const existingSubscriber = await Newsletter.findOne({ email });
     if (existingSubscriber) {
        return NextResponse.json({
          error: "Email address already subscribed",
          status: 400,
        });
      }

     const newSubscriber = new Newsletter({ email });
    await newSubscriber.save();

    return NextResponse.json({ message: 'Email address subscribed successfully' }, { status: 201 });
  } catch (error) {
    console.error("Error subscribing email:", error);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
}
