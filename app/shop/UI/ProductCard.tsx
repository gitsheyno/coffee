// src/components/shop/ProductCard.tsx
"use client";
import React from "react";
import Image from "next/image";
import { Product } from "../../shop/types/index";
import { useCart } from "../../ShopingCartContext";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    console.log("Add to cart:", product);
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    addToCart(product);
    router.push("/cart");
  };

  return (
    <div className="group bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition duration-300">
      <div className="relative h-64 overflow-hidden">
        <div className="w-full h-full relative">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="transform group-hover:scale-105 transition duration-500"
          />
        </div>
        <div className="absolute top-3 right-3 bg-white text-gray-800 px-3 py-1 text-sm font-medium rounded-full shadow-sm">
          {product.category}
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              <span>{product.region}</span>
              <span className="text-gray-300">•</span>
              <span>{product.roastLevel}</span>
            </p>
          </div>
          <span className="text-lg font-semibold text-amber-700">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <p className="text-gray-600 mt-2 text-sm line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4 flex space-x-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition duration-300 flex items-center justify-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
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
            className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
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
