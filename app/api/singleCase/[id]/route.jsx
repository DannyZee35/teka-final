// api/single-blog/[id].jsx

import { connectDB } from "@dbConfig/dbConfig";
import Case from "@models/caseStudySchema";
import { NextResponse } from "next/server";

connectDB();

export async function GET(req,{params}) {
  try {
    const { id } = params;

    const singleCase = await Case.findById({_id:id}).populate("author", "username");

    if (!singleCase) {
      console.log("Case Study not found");
      return NextResponse.error("Case Study not found", { status: 404 });
    }

    return NextResponse.json(singleCase, { status: 200 });
  } catch (error) {
    console.error("Error fetching Case Study:", error);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
}
