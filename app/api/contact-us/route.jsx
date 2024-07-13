

// pages/api/customers.js

import { connectDB } from "@dbConfig/dbConfig";
import Contact from "@models/contactUs";
import { NextResponse } from "next/server";

connectDB();
export async function POST(req) {
    try {
       const reqBody = await req.json();
      const { firstName,lastName,email,companyName,phoneNumber,inquiryReason,businessType } = reqBody;
  
       const newContact = new Contact({
        firstName,
        lastName,
        email,
        companyName,
        
        phoneNumber,
        inquiryReason,
        businessType
      });
  
       const savedContact = await newContact.save();
  
       return NextResponse.json(savedContact, { message: 'We have received your request' }, { status: 201 });
    } catch (error) {
       console.error("Error creating contact:", error);
      return NextResponse.error("Internal Server Error", { status: 500 });
    }
  }