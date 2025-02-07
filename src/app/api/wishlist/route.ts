// src/app/api/wishlist/route.ts
import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, productId, productName, productImage } = body;

    if (!userId || !productId || !productName || !productImage) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const wishlistItem = {
      _type: "wishlist",
      userId,
      productId,
      productName,
      productImage,
      addedAt: new Date().toISOString(),
    };

    const result = await client.create(wishlistItem);
    return NextResponse.json({ message: "Item added to wishlist", wishlistId: result._id }, { status: 200 });
  } catch (error) {
    console.error("Wishlist Error:", error);
    return NextResponse.json({ error: "Failed to add item to wishlist" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const wishlistId = searchParams.get("id");

    if (!wishlistId) {
      return NextResponse.json({ error: "Missing wishlist ID" }, { status: 400 });
    }

    await client.delete(wishlistId);
    return NextResponse.json({ message: "Item removed from wishlist" }, { status: 200 });
  } catch (error) {
    console.error("Wishlist Delete Error:", error);
    return NextResponse.json({ error: "Failed to remove item from wishlist" }, { status: 500 });
  }
}