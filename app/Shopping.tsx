"use client";
// pages/shop.tsx
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Mock data for the coffee products
// const allProducts = [
//   {
//     id: 1,
//     name: "Ethiopian Yirgacheffe",
//     description: "Floral notes with a bright acidity and citrus undertones",
//     price: 14.9,
//     image:
//       "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
//     category: "Espresso",
//     region: "Africa",
//     roastLevel: "Light",
//   },
//   {
//     id: 2,
//     name: "Colombian Supremo",
//     description: "Sweet with notes of caramel, nuts and a touch of citrus",
//     price: 13.5,
//     image:
//       "https://images.unsplash.com/photo-1474369527123-5d70cf17fd3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",

//     category: "Espresso",
//     region: "South America",
//     roastLevel: "Medium",
//   },
//   {
//     id: 3,
//     name: "Guatemala Antigua",
//     description: "Medium-bodied with chocolate and spice notes",
//     price: 15.9,
//     image:
//       "https://images.unsplash.com/photo-1474369527123-5d70cf17fd3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",

//     category: "Filter",
//     region: "Central America",
//     roastLevel: "Medium",
//   },
//   {
//     id: 4,
//     name: "Costa Rica Tarrazu",
//     description: "Bright, clean with notes of honey and citrus",
//     price: 16.5,
//     image:
//       "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
//     category: "Espresso",
//     region: "Central America",
//     roastLevel: "Medium-Light",
//   },
//   {
//     id: 5,
//     name: "Kenya AA",
//     description: "Bold with wine-like acidity and blackcurrant notes",
//     price: 17.9,
//     image:
//       "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
//     category: "Filter",
//     region: "Africa",
//     roastLevel: "Medium",
//   },
//   {
//     id: 6,
//     name: "Brazil Santos",
//     description: "Low acidity with nutty, chocolate flavors",
//     price: 12.9,
//     image:
//       "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
//     category: "Espresso",
//     region: "South America",
//     roastLevel: "Medium-Dark",
//   },
//   {
//     id: 7,
//     name: "Sumatra Mandheling",
//     description: "Earthy with herbal notes and a full body",
//     price: 15.5,
//     image:
//       "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
//     category: "Espresso",
//     region: "Asia",
//     roastLevel: "Dark",
//   },
//   {
//     id: 8,
//     name: "Rwanda Nyungwe",
//     description: "Bright with notes of berries and citrus",
//     price: 16.9,
//     image:
//       "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
//     category: "Filter",
//     region: "Africa",
//     roastLevel: "Light",
//   },
//   {
//     id: 9,
//     name: "Honduras El Paraiso",
//     description: "Sweet with caramel, chocolate and apple notes",
//     price: 14.5,
//     image:
//       "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
//     category: "Filter",
//     region: "Central America",
//     roastLevel: "Medium",
//   },
//   {
//     id: 10,
//     name: "Peru Cajamarca",
//     description: "Well-balanced with notes of nuts, chocolate and stone fruits",
//     price: 13.9,
//     image:
//       "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
//     category: "Espresso",
//     region: "South America",
//     roastLevel: "Medium",
//   },
//   {
//     id: 11,
//     name: "Tanzania Kilimanjaro",
//     description: "Fruity with blackberry and peach notes",
//     price: 16.5,
//     image:
//       "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
//     category: "Filter",
//     region: "Africa",
//     roastLevel: "Light",
//   },
//   {
//     id: 12,
//     name: "Mexico Chiapas",
//     description: "Sweet with notes of chocolate, nuts and a hint of spice",
//     price: 13.5,
//     image:
//       "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
//     category: "Espresso",
//     region: "Central America",
//     roastLevel: "Medium-Dark",
//   },
// ];
const allProducts = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    description: "Floral notes with a bright acidity and citrus undertones",
    price: 14.9,
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    category: "Espresso",
    region: "Africa",
    roastLevel: "Light",
  },
  {
    id: 2,
    name: "Colombian Supremo",
    description: "Sweet with notes of caramel, nuts and a touch of citrus",
    price: 13.5,
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    category: "Espresso",
    region: "South America",
    roastLevel: "Medium",
  },
  {
    id: 3,
    name: "Guatemala Antigua",
    description: "Medium-bodied with chocolate and spice notes",
    price: 15.9,
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    category: "Filter",
    region: "Central America",
    roastLevel: "Medium",
  },
  {
    id: 4,
    name: "Costa Rica Tarrazu",
    description: "Bright, clean with notes of honey and citrus",
    price: 16.5,
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    category: "Espresso",
    region: "Central America",
    roastLevel: "Medium-Light",
  },
  {
    id: 5,
    name: "Kenya AA",
    description: "Bold with wine-like acidity and blackcurrant notes",
    price: 17.9,
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    category: "Filter",
    region: "Africa",
    roastLevel: "Medium",
  },
  {
    id: 6,
    name: "Brazil Santos",
    description: "Low acidity with nutty, chocolate flavors",
    price: 12.9,
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    category: "Espresso",
    region: "South America",
    roastLevel: "Medium-Dark",
  },
  {
    id: 7,
    name: "Sumatra Mandheling",
    description: "Earthy with herbal notes and a full body",
    price: 15.5,
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    category: "Espresso",
    region: "Asia",
    roastLevel: "Dark",
  },
  {
    id: 8,
    name: "Rwanda Nyungwe",
    description: "Bright with notes of berries and citrus",
    price: 16.9,
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    category: "Filter",
    region: "Africa",
    roastLevel: "Light",
  },
  {
    id: 9,
    name: "Honduras El Paraiso",
    description: "Sweet with caramel, chocolate and apple notes",
    price: 14.5,
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    category: "Filter",
    region: "Central America",
    roastLevel: "Medium",
  },
  {
    id: 10,
    name: "Peru Cajamarca",
    description: "Well-balanced with notes of nuts, chocolate and stone fruits",
    price: 13.9,
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    category: "Espresso",
    region: "South America",
    roastLevel: "Medium",
  },
  {
    id: 11,
    name: "Tanzania Kilimanjaro",
    description: "Fruity with blackberry and peach notes",
    price: 16.5,
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    category: "Filter",
    region: "Africa",
    roastLevel: "Light",
  },
  {
    id: 12,
    name: "Mexico Chiapas",
    description: "Sweet with notes of chocolate, nuts and a hint of spice",
    price: 13.5,
    image:
      "https://images.unsplash.com/photo-1503249023995-51fe47424c12?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    category: "Espresso",
    region: "Central America",
    roastLevel: "Medium-Dark",
  },
];

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

export default function Shop() {
  const [products, setProducts] = useState(allProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [selectedRoastLevel, setSelectedRoastLevel] =
    useState("All Roast Levels");
  const [sortOption, setSortOption] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  // Filter products based on search, category, region, and roast level
  useEffect(() => {
    let filteredProducts = allProducts;

    // Filter by search term
    if (searchTerm) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (activeCategory !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category.toLowerCase() === activeCategory
      );
    }

    // Filter by region
    if (selectedRegion !== "All Regions") {
      filteredProducts = filteredProducts.filter(
        (product) => product.region === selectedRegion
      );
    }

    // Filter by roast level
    if (selectedRoastLevel !== "All Roast Levels") {
      filteredProducts = filteredProducts.filter(
        (product) => product.roastLevel === selectedRoastLevel
      );
    }

    // Sort products
    if (sortOption === "price-low") {
      filteredProducts = [...filteredProducts].sort(
        (a, b) => a.price - b.price
      );
    } else if (sortOption === "price-high") {
      filteredProducts = [...filteredProducts].sort(
        (a, b) => b.price - a.price
      );
    } else if (sortOption === "name") {
      filteredProducts = [...filteredProducts].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    setProducts(filteredProducts);
  }, [
    searchTerm,
    activeCategory,
    selectedRegion,
    selectedRoastLevel,
    sortOption,
  ]);

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm("");
    setActiveCategory("all");
    setSelectedRegion("All Regions");
    setSelectedRoastLevel("All Roast Levels");
    setSortOption("featured");
  };

  // Toggle filters visibility for mobile
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Head>
        <title>Shop Coffee | The Barn Coffee Roasters</title>
        <meta
          name="description"
          content="Shop for specialty coffee beans at The Barn"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Shop Content */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-6">
              <button
                onClick={toggleFilters}
                className="w-full flex items-center justify-center gap-2 bg-amber-700 text-white py-3 px-4 rounded-md transition duration-300 hover:bg-amber-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                    clipRule="evenodd"
                  />
                </svg>
                {showFilters ? "Hide Filters" : "Show Filters"}
              </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar / Filters */}
              <div
                className={`lg:w-1/4 ${
                  showFilters ? "block" : "hidden lg:block"
                }`}
              >
                <div className="sticky top-4 bg-white rounded-lg shadow-md p-6 border border-gray-100">
                  <div className="mb-6">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search coffee..."
                        className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
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
                            onClick={() => setActiveCategory(category.id)}
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
                        onChange={(e) => setSelectedRegion(e.target.value)}
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
                        onChange={(e) => setSelectedRoastLevel(e.target.value)}
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
                </div>
              </div>

              {/* Product Grid */}
              <div className="lg:w-3/4">
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <p className="text-gray-600 font-medium">
                    Showing {products.length}{" "}
                    {products.length === 1 ? "product" : "products"}
                  </p>
                  <div className="flex items-center">
                    <label className="text-gray-600 mr-2">Sort by:</label>
                    <select
                      className="p-2 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value)}
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="name">Name: A to Z</option>
                    </select>
                  </div>
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
                      onClick={resetFilters}
                    >
                      Reset Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                      <div
                        key={product.id}
                        className="group bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition duration-300"
                      >
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
                              <h3 className="text-lg font-semibold">
                                {product.name}
                              </h3>
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
                            <button className="flex-1 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition duration-300 flex items-center justify-center gap-1">
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
                            <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-300">
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
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
