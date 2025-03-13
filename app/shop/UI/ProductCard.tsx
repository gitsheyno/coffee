"use client";
import React from "react";
import Image from "next/image";
import { Product } from "../../shop/types/index";
import { useCart } from "../../ShopingCartContext";
import { toast } from "react-hot-toast";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    console.log("Add to cart:", product);
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 max-w-xs">
      {/* Product Image Container - more compact */}
      <div className="relative h-52 overflow-hidden">
        <div className="w-full h-full relative">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        {/* Smaller category badge */}
        <div className="absolute top-2 right-2 bg-white/90 text-gray-800 px-2 py-0.5 text-xs font-medium rounded-full shadow-sm">
          {product.category}
        </div>
      </div>

      {/* Product Details with tighter spacing */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <div>
            <h3 className="text-base font-medium text-gray-900 group-hover:text-amber-700 transition-colors duration-300">
              {product.name}
            </h3>
            <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
              <span>{product.region}</span>
              <span className="text-gray-300">•</span>
              <span>{product.roastLevel}</span>
            </p>
          </div>
          <span className="text-base font-medium text-amber-700">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {/* Shorter description */}
        {/* <p className="text-gray-600 mt-1.5 text-xs line-clamp-2">
          {product.description}
        </p> */}

        {/* More compact action buttons */}
        <div className="mt-3 flex space-x-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 py-1.5 bg-amber-700 text-white text-sm rounded-md hover:bg-amber-800 transition duration-300 flex items-center justify-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to Cart
          </button>
          <Link
            href="/cart"
            className="p-1.5 border border-gray-200 rounded-md hover:bg-gray-50 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-500 group-hover:text-amber-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
