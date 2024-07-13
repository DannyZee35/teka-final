import { connectDB } from "@dbConfig/dbConfig";
import Customer from "@models/customerSchema";
import { NextResponse } from "next/server";

connectDB();

export async function POST(req) {
  try {
    const reqBody = await req.json();
    console.log("Received request body:", reqBody);

    const {
      firstName,
      lastName,
      email,
      companyName,
      annualSales,
      amazonBudget,
      amazonAdvertisement,
      businessModel,
      region,
    } = reqBody;

    const newCustomer = new Customer({
      firstName,
      lastName,
      email,
      companyName,
      annualSales,
      amazonBudget,
      amazonAdvertisement,
      businessModel,
      region,
    });

    console.log("New customer before save:", newCustomer.toObject());

    const savedCustomer = await newCustomer.save();
    console.log("Saved customer:", savedCustomer);

    return NextResponse.json(savedCustomer, {
      message: 'We have received your request',
      status: 201,
    });
  } catch (error) {
    console.error("Error creating customer:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
