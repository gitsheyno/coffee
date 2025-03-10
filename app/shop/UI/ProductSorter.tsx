"use client";
import React from "react";

interface ProductSorterProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ProductSorter({ value, onChange }: ProductSorterProps) {
  return (
    <div className="flex items-center">
      <label className="text-gray-600 mr-2">Sort by:</label>
      <select
        className="p-2 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="featured">Featured</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="name">Name: A to Z</option>
      </select>
    </div>
  );
}
