// app/actions/product-actions.ts
"use server";

import {
  getAllProducts,
  getProductById,
  getProductsByCategory,
  getProductsByRegion,
  getProductsByRoastLevel,
  searchProducts,
  type Product,
} from "../lib/products";

export async function fetchAllProducts(): Promise<{ products: Product[] }> {
  try {
    const products = await getAllProducts();
    return { products };
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw new Error("Failed to fetch products");
  }
}

export async function fetchProductById(
  id: number
): Promise<{ product: Product | null }> {
  try {
    const product = await getProductById(id);
    return { product };
  } catch (error) {
    console.error(`Failed to fetch product with ID ${id}:`, error);
    throw new Error(`Failed to fetch product with ID ${id}`);
  }
}

export async function fetchProductsByCategory(
  category: string
): Promise<{ products: Product[] }> {
  try {
    const products = await getProductsByCategory(category);
    return { products };
  } catch (error) {
    console.error(`Failed to fetch products in category ${category}:`, error);
    throw new Error(`Failed to fetch products in category ${category}`);
  }
}

export async function fetchProductsByRegion(
  region: string
): Promise<{ products: Product[] }> {
  try {
    const products = await getProductsByRegion(region);
    return { products };
  } catch (error) {
    console.error(`Failed to fetch products from region ${region}:`, error);
    throw new Error(`Failed to fetch products from region ${region}`);
  }
}

export async function fetchProductsByRoastLevel(
  roastLevel: string
): Promise<{ products: Product[] }> {
  try {
    const products = await getProductsByRoastLevel(roastLevel);
    return { products };
  } catch (error) {
    console.error(
      `Failed to fetch products with roast level ${roastLevel}:`,
      error
    );
    throw new Error(`Failed to fetch products with roast level ${roastLevel}`);
  }
}

export async function searchProductsAction(
  query: string
): Promise<{ products: Product[] }> {
  try {
    const products = await searchProducts(query);
    return { products };
  } catch (error) {
    console.error(`Failed to search products with query "${query}":`, error);
    throw new Error(`Failed to search products`);
  }
}
