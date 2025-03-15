// src/components/shop/ProductList.tsx
"use client";
import React from "react";
import { Product } from "../types/index";
import ProductCard from "./ProductCard";
import ProductSorter from "./ProductSorter";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 font-medium">
          Showing {products.length}
          {products.length === 1 ? "product" : "products"}
        </p>
        <ProductSorter />
      </div>

      {products.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mx-auto text-gray-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-lg text-gray-600 mb-2">
            No products match your criteria.
          </p>
          <p className="text-gray-500 mb-4">
            Try adjusting your filters or search term.
          </p>
          <button
            className="px-6 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition duration-300"
            onClick={() => (window.location.href = "/shop")}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[650px] overflow-y-auto pr-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
