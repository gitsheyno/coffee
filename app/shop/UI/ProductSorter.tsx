"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function ProductSorter() {
  const [sortOption, setSortOption] = useState("featured");
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleSortChange = (option: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("sort", option);
    setSortOption(option);
    router.push(`?${newSearchParams.toString()}`);
  };

  return (
    <div className="flex items-center">
      <label className="text-gray-600 mr-2">Sort by:</label>
      <select
        className="p-2 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
        value={sortOption}
        onChange={(e) => handleSortChange(e.target.value)}
      >
        <option value="featured">Featured</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="name">Name: A to Z</option>
      </select>
    </div>
  );
}
