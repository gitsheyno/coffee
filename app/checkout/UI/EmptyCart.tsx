// src/components/cart/EmptyCart.tsx
"use client";
import React from "react";
import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-8 max-w-lg mx-auto text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 text-gray-400 mx-auto mb-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any coffee to your cart yet.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-amber-700 text-white px-6 py-3 rounded-md hover:bg-amber-800 transition duration-300 font-medium"
          >
            Browse Our Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
