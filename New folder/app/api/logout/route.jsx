import { connectDB } from "@dbConfig/dbConfig";
import { NextResponse } from "next/server";




connectDB()

export async function GET(request) {

    const response = NextResponse.json({
        message:"Logout Successfully",
        success:true
    })

    response.cookies.set("token","",{
        httpOnly:true,
        expires: new Date(0)
    })
 
    return response;
}