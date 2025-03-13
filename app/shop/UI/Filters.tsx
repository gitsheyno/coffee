"use client";
import React, { useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

// Define categories and filters
const categories = [
  { id: "all", name: "All Coffee" },
  { id: "filter", name: "Filter" },
  { id: "espresso", name: "Espresso" },
  { id: "signature", name: "Signature Blends" },
  { id: "decaf", name: "Decaf" },
];

const regions = [
  "All Regions",
  "Africa",
  "Asia",
  "Central America",
  "South America",
];

const roastLevels = [
  "All Roast Levels",
  "Light",
  "Medium-Light",
  "Medium",
  "Medium-Dark",
  "Dark",
];

export default function Filters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );
  const [activeCategory, setActiveCategory] = useState(
    searchParams.get("category") || "all"
  );
  const [selectedRegion, setSelectedRegion] = useState(
    searchParams.get("region") || "All Regions"
  );
  const [selectedRoastLevel, setSelectedRoastLevel] = useState(
    searchParams.get("roastLevel") || "All Roast Levels"
  );

  const updateSearchParams = (params: Record<string, string>) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        newSearchParams.set(key, value);
      } else {
        newSearchParams.delete(key);
      }
    });

    router.push(`${pathname}?${newSearchParams.toString()}`);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    updateSearchParams({ search: value });
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    updateSearchParams({ category: category === "all" ? "" : category });
  };

  // Handle region change
  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedRegion(value);
    updateSearchParams({ region: value === "All Regions" ? "" : value });
  };

  // Handle roast level change
  const handleRoastLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedRoastLevel(value);
    updateSearchParams({
      roastLevel: value === "All Roast Levels" ? "" : value,
    });
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm("");
    setActiveCategory("all");
    setSelectedRegion("All Regions");
    setSelectedRoastLevel("All Roast Levels");
    router.push(pathname);
  };

  return (
    <>
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search coffee..."
            className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200">
          Categories
        </h3>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category.id}>
              <button
                className={`w-full text-left py-2 px-3 rounded-md transition duration-200 ${
                  activeCategory === category.id
                    ? "bg-amber-100 text-amber-800 font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200">
          Filter By
        </h3>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Region
          </label>
          <select
            className="w-full p-3 rounded-md bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            value={selectedRegion}
            onChange={handleRegionChange}
          >
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Roast Level
          </label>
          <select
            className="w-full p-3 rounded-md bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            value={selectedRoastLevel}
            onChange={handleRoastLevelChange}
          >
            {roastLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={resetFilters}
        className="w-full py-2 text-amber-700 bg-amber-50 rounded-md hover:bg-amber-100 transition duration-300 font-medium flex items-center justify-center gap-2"
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
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        Reset Filters
      </button>
    </>
  );
}
