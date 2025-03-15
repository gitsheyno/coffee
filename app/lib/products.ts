// lib/products.ts
import { db } from "./db";

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  region: string;
  roast_level: string;
  created_at?: string;
  updated_at?: string;
};

// Fetch all products
export async function getAllProducts(): Promise<Product[]> {
  const { rows } = await db.execute("SELECT * FROM products ORDER BY id");

  return rows.map((row) => ({
    id: row.id as number,
    name: row.name as string,
    description: row.description as string,
    price: Number(row.price),
    image: row.image as string,
    category: row.category as string,
    region: row.region as string,
    roast_level: row.roast_level as string,
    created_at: row.created_at as string | undefined,
    updated_at: row.updated_at as string | undefined,
  }));
}

// Fetch a product by ID
export async function getProductById(id: number): Promise<Product | null> {
  const { rows } = await db.execute({
    sql: "SELECT * FROM products WHERE id = ?",
    args: [id],
  });

  if (rows.length === 0) {
    return null;
  }

  const row = rows[0];
  return {
    id: row.id as number,
    name: row.name as string,
    description: row.description as string,
    price: Number(row.price),
    image: row.image as string,
    category: row.category as string,
    region: row.region as string,
    roast_level: row.roast_level as string,
    created_at: row.created_at as string | undefined,
    updated_at: row.updated_at as string | undefined,
  };
}

// Fetch products by category
export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  const { rows } = await db.execute({
    sql: "SELECT * FROM products WHERE category = ? ORDER BY id",
    args: [category],
  });

  return rows.map((row) => ({
    id: row.id as number,
    name: row.name as string,
    description: row.description as string,
    price: Number(row.price),
    image: row.image as string,
    category: row.category as string,
    region: row.region as string,
    roast_level: row.roast_level as string,
    created_at: row.created_at as string | undefined,
    updated_at: row.updated_at as string | undefined,
  }));
}

// Fetch products by region
export async function getProductsByRegion(region: string): Promise<Product[]> {
  const { rows } = await db.execute({
    sql: "SELECT * FROM products WHERE region = ? ORDER BY id",
    args: [region],
  });

  return rows.map((row) => ({
    id: row.id as number,
    name: row.name as string,
    description: row.description as string,
    price: Number(row.price),
    image: row.image as string,
    category: row.category as string,
    region: row.region as string,
    roast_level: row.roast_level as string,
    created_at: row.created_at as string | undefined,
    updated_at: row.updated_at as string | undefined,
  }));
}

// Fetch products by roast level
export async function getProductsByRoastLevel(
  roastLevel: string
): Promise<Product[]> {
  const { rows } = await db.execute({
    sql: "SELECT * FROM products WHERE roast_level = ? ORDER BY id",
    args: [roastLevel],
  });

  return rows.map((row) => ({
    id: row.id as number,
    name: row.name as string,
    description: row.description as string,
    price: Number(row.price),
    image: row.image as string,
    category: row.category as string,
    region: row.region as string,
    roast_level: row.roast_level as string,
    created_at: row.created_at as string | undefined,
    updated_at: row.updated_at as string | undefined,
  }));
}

// Search products by name or description
export async function searchProducts(query: string): Promise<Product[]> {
  const { rows } = await db.execute({
    sql: "SELECT * FROM products WHERE name LIKE ? OR description LIKE ? ORDER BY id",
    args: [`%${query}%`, `%${query}%`],
  });

  return rows.map((row) => ({
    id: row.id as number,
    name: row.name as string,
    description: row.description as string,
    price: Number(row.price),
    image: row.image as string,
    category: row.category as string,
    region: row.region as string,
    roast_level: row.roast_level as string,
    created_at: row.created_at as string | undefined,
    updated_at: row.updated_at as string | undefined,
  }));
}
