"use client";
import React, { useState } from "react";
import { FaRegHeart, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { LucideShoppingCart } from "lucide-react";
import { RiDashboardLine } from "react-icons/ri";
import { UserButton, useAuth } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import SearchBar from "./searchbar";

const Navbar = () => {
  // const router = useRouter(); // Removed unused variable
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user } = useUser();
  const auth = useAuth();
  const userId = user?.id || auth.userId;

  return (
    <nav className="w-full bg-white shadow-sm">
      {/* Desktop Menu */}
      <div className="hidden lg:flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <h3 className="font-Montserrat font-semibold text-3xl">Bandage</h3>
        <div> 
          <SearchBar/>
        </div>

        {/* Other Navigation Links */}
        <ul className="flex items-center gap-6">
          <li><Link href="/" className="text-[18px] font-semibold hover:text-blue-500 transition">Home</Link></li>
          <li><Link href="/Shop" className="text-[18px] font-semibold hover:text-blue-500 transition">Shop</Link></li>
          <li><Link href="/About" className="text-[18px] font-semibold hover:text-blue-500 transition">About</Link></li>
          <li><Link href="/Pages" className="text-[18px] font-semibold hover:text-blue-500 transition">Pages</Link></li>
          <li><Link href="/Pricing" className="text-[18px] font-semibold hover:text-blue-500 transition">Pricing</Link></li>
          <li><Link href="/Contact" className="text-[18px] font-semibold hover:text-blue-500 transition">Contact</Link></li>
        </ul>

        {/* User Actions */}
        <div className="flex items-center gap-4">
          {!userId ? (
            <>
              <Link href="/sign-in" className="flex items-center gap-2 text-blue-500 hover:text-blue-600">
                Login
              </Link>
              <span>/</span>
              <Link href="/sign-up" className="flex items-center gap-2 text-blue-500 hover:text-blue-600">
                Register
              </Link>
            </>
          ) : (
            <UserButton />
          )}
        </div>

        <div className="flex items-center gap-4">
          <a href="/cart" className="text-gray-700 hover:text-blue-500 transition-colors">
            <LucideShoppingCart />
          </a>
          <Link href={'/wishlist'} className="text-[22px] text-gray-700 hover:text-blue-500 transition-colors"><FaRegHeart /> </Link>
          <Link href={'/Dashboard'} className="text-[24px] text-gray-700 hover:text-blue-500 transition-colors"><RiDashboardLine /> </Link>
        </div>
      </div>

  {/* Mobile Menu */}
<div className="lg:hidden flex flex-col px-4 py-3 w-full">
  {/* First Row: Logo and Sidebar Toggle Button */}
  <div className="flex justify-between items-center w-full">
    <h3 className="font-Montserrat font-semibold text-xl">Bandage</h3>

    {/* Sidebar Toggle Button */}
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="p-2 focus:outline-none"
    >
      <div className="w-6 h-0.5 bg-gray-900 mb-1.5" />
      <div className="w-6 h-0.5 bg-gray-900 mb-1.5" />
      <div className="w-6 h-0.5 bg-gray-900" />
    </button>
  </div>

  {/* Second Row: SearchBar and Icons */}
  <div className="flex justify-between items-center mt-4 w-full">
    {/* SearchBar */}
    <div className="mx-[-15px] flex-1 max-w-full">
      <SearchBar /> {/* Ensure SearchBar component is responsive */}
    </div>

    {/* Icons */}
    <div className="flex items-center gap-2 justify-end">
      <a href="/cart" className="text-gray-700 hover:text-blue-500 transition-colors">
        <LucideShoppingCart />
      </a>
      <Link href={'/wishlist'} className="text-[22px] text-gray-700 hover:text-blue-500 transition-colors">
        <FaRegHeart />
      </Link>
      <Link href={'/Dashboard'} className="text-[24px] text-gray-700 hover:text-blue-500 transition-colors">
        <RiDashboardLine />
      </Link>
    </div>
  </div>
</div>

{/* Sidebar */}
{isMenuOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
    <div className="absolute right-0 top-0 h-full w-64 bg-white p-6">
      <button
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-4 right-4"
      >
        <FaTimes className="text-xl" />
      </button>
      <ul className="mt-8 space-y-4">
        <li>
          <Link href="/" className="text-[16px] font-semibold hover:text-blue-500 transition">Home</Link>
        </li>
        <li>
          <Link href="/Shop" className="text-[16px] font-semibold hover:text-blue-500 transition">Shop</Link>
        </li>
        <li>
          <Link href="/About" className="text-[16px] font-semibold hover:text-blue-500 transition">About</Link>
        </li>
        <li>
          <Link href="/Pages" className="text-[16px] font-semibold hover:text-blue-500 transition">Pages</Link>
        </li>
        <li>
          <Link href="/Pricing" className="text-[16px] font-semibold hover:text-blue-500 transition">Pricing</Link>
        </li>
        <li>
          <Link href="/Contact" className="text-[16px] font-semibold hover:text-blue-500 transition">Contact</Link>
        </li>
      </ul>

      {/* User Actions */}
      <div className="flex items-center gap-4">
        {!userId ? (
          <>
            <Link href="/sign-in" className="flex items-center gap-2 text-blue-500 hover:text-blue-600">Login</Link>
            <span>/</span>
            <Link href="/sign-up" className="flex items-center gap-2 text-blue-500 hover:text-blue-600">Register</Link>
          </>
        ) : (
          <UserButton />
        )}
      </div>
    </div>
  </div>
)}


    </nav>
  );
};

export default Navbar;
