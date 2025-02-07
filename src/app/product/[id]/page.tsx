"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";

type Product = {
  _id: string;
  title: string;
  price: string;
  description: string;
  discountPercentage: string;
  imageUrl: string;
};

const ProductDetail = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isInWishlist, setIsInWishlist] = useState(false); // Track wishlist status
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const query = `*[_type == "product" && _id == "${id}"] {
          _id,
          title,
          price,
          discountPercentage,
          description,
          "imageUrl": productImage.asset->url
        }`;
        const url = `https://15hm7ok6.api.sanity.io/v1/data/query/production?query=${encodeURIComponent(query)}`;
        try {
          const response = await axios.get(url);
          if (response.data.result.length > 0) {
            setProduct(response.data.result[0]);
          } else {
            setError("Product not found");
          }
        } catch (err) {
          setError("Failed to fetch product");
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      fetchProduct();
    }
  }, [id]);

  // Add to Cart Functionality
  const handleAddToCart = () => {
    if (!product) return;
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProductIndex = cart.findIndex((item: Product) => item._id === product._id);
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart");
  };

  // Add to Wishlist Functionality
  const handleAddToWishlist = async () => {
    if (!product) return;

    const userId = "user123"; // Replace with actual user ID (e.g., from authentication)
    const wishlistItem = {
      userId,
      productId: product._id,
      productName: product.title,
      productImage: product.imageUrl,
    };

    try {
      const response = await fetch("/api/wishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(wishlistItem),
      });

      if (response.ok) {
        setIsInWishlist(true); // Update wishlist status
        alert("Product added to wishlist");
      } else {
        throw new Error("Failed to add product to wishlist");
      }
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      alert("Failed to add product to wishlist");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return product ? (
    <div className="container mx-auto p-8">
      {/* Product Detail Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Left Side: Product Image */}
        <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
          <Image
            src={product.imageUrl || "/placeholder.png"}
            alt={product.title}
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* Right Side: Product Info */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          {/* Description Heading */}
          <h2 className="text-2xl font-semibold text-gray-700 mt-6">Description</h2>
          <p className="text-lg text-gray-600 mt-2">{product.description}</p>
          {/* Pricing Section */}
          <div className="flex items-center gap-4 mt-6">
            <span className="text-2xl font-semibold text-blue-600">${product.price}</span>
            {product.discountPercentage && (
              <span className="text-md text-red-500 line-through">
                ${(
                  parseFloat(product.price) +
                  parseFloat(product.price) * (parseFloat(product.discountPercentage) / 100)
                ).toFixed(2)}
              </span>
            )}
            {product.discountPercentage && (
              <span className="text-md text-green-600 font-bold">
                - {product.discountPercentage}%
              </span>
            )}
          </div>
          {/* Buttons */}
          <div className="flex flex-col lg:flex-row gap-4 mt-6">
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full lg:w-auto bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Add to Cart
            </button>
            {/* Add to Wishlist Button */}
            <button
              onClick={handleAddToWishlist}
              disabled={isInWishlist}
              className={`w-full lg:w-auto ${
                isInWishlist
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600"
              } text-white py-2 px-6 rounded-lg shadow-lg transition duration-300`}
            >
              {isInWishlist ? "Added to Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ProductDetail;