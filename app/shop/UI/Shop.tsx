"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductList from "./ProductList";
import { Product } from "../types/index";

// Import product data
import { allProducts } from "../data/index";

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>(allProducts);
  const [sortOption, setSortOption] = useState("featured");
  const searchParams = useSearchParams();

  // Filter and sort products based on URL parameters
  useEffect(() => {
    let filteredProducts = allProducts;
    const searchTerm = searchParams.get("search") || "";
    const category = searchParams.get("category") || "all";
    const region = searchParams.get("region") || "All Regions";
    const roastLevel = searchParams.get("roastLevel") || "All Roast Levels";
    const sort = searchParams.get("sort") || "featured";

    // Filter by search term
    if (searchTerm) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (category !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category.toLowerCase() === category
      );
    }

    // Filter by region
    if (region !== "All Regions") {
      filteredProducts = filteredProducts.filter(
        (product) => product.region === region
      );
    }

    // Filter by roast level
    if (roastLevel !== "All Roast Levels") {
      filteredProducts = filteredProducts.filter(
        (product) => product.roastLevel === roastLevel
      );
    }

    // Set sort option
    setSortOption(sort);

    // Sort products
    if (sort === "price-low") {
      filteredProducts = [...filteredProducts].sort(
        (a, b) => a.price - b.price
      );
    } else if (sort === "price-high") {
      filteredProducts = [...filteredProducts].sort(
        (a, b) => b.price - a.price
      );
    } else if (sort === "name") {
      filteredProducts = [...filteredProducts].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    setProducts(filteredProducts);
  }, [searchParams]);

  // Handle sort change
  const handleSortChange = (option: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("sort", option);
    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?${newSearchParams.toString()}`
    );
    setSortOption(option);
  };

  return (
    <ProductList
      products={products}
      sortOption={sortOption}
      onSortChange={handleSortChange}
    />
  );
}
