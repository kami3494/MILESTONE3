// src/app/api/order/route.ts
import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client"; // Import your Sanity client

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { customerName, customerEmail, customerAddress } = body;

    if (!customerName || !customerEmail || !customerAddress) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const orderData = {
      _type: "order",
      customerName,
      customerEmail,
      customerAddress,
      orderDate: new Date().toISOString(),
      status: "pending",
    };

    const result = await client.create(orderData);
    return NextResponse.json({ message: "Order created successfully", sanityOrderId: result._id }, { status: 200 });
  } catch (error) {
    console.error("Order Processing Error:", error);
    return NextResponse.json({ error: "Failed to process order" }, { status: 500 });
  }
}