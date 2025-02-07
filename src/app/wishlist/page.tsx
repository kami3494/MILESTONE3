// src/app/wishlist/page.tsx
"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
  

const WishlistPage = () => {
  interface WishlistItem {
    _id: string;
    productImage: string;
    productName: string;
  }

  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const userId = "user123"; // Replace with actual user ID
        const query = `*[_type == "wishlist" && userId == "${userId}"]`;
        const result = await client.fetch(query);
        setWishlistItems(result);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };

    fetchWishlist();
  }, []);

  const handleRemoveFromWishlist = async (id: string) => {
    try {
      await fetch(`/api/wishlist?id=${id}`, { method: "DELETE" });
      setWishlistItems((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error removing item from wishlist:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Wishlist</h1>
        {wishlistItems.length === 0 ? (
          <p className="text-gray-600">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <div key={item._id} className="wishlist-item">
                <Image
                  src={item.productImage}
                  alt={item.productName}
                  width={500}
                  height={500}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-800">{item.productName}</h2>
                <button
                  onClick={() => handleRemoveFromWishlist(item._id)}
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Remove from Wishlist
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;