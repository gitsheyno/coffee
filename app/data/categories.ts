// src/data/categories.js
// types.ts
export type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
};

export const categories = [
  {
    id: "coffee",
    name: "Coffee",
    description: "Freshly roasted coffee beans.",
    image: "https://source.unsplash.com/random/800x600/?coffee",
  },
  {
    id: "equipment",
    name: "Equipment",
    description: "High-quality brewing equipment.",
    image: "https://source.unsplash.com/random/800x600/?coffee-equipment",
  },
  {
    id: "merchandise",
    name: "Merchandise",
    description: "Branded merchandise and accessories.",
    image: "https://source.unsplash.com/random/800x600/?coffee-merchandise",
  },
];
export const products: Product[] = [
  {
    id: "1",
    name: "Espresso",
    description: "A strong and rich shot of coffee.",
    price: 2.99,
    image: "/images/products/espresso.jpg",
    categoryId: "coffee",
  },
  {
    id: "2",
    name: "Latte",
    description: "Smooth espresso with steamed milk.",
    price: 3.99,
    image: "/images/products/latte.jpg",
    categoryId: "coffee",
  },
  {
    id: "3",
    name: "Croissant",
    description: "Flaky and buttery French pastry.",
    price: 2.49,
    image: "/images/products/croissant.jpg",
    categoryId: "pastries",
  },
  {
    id: "4",
    name: "Matcha Tea",
    description: "Japanese green tea with a vibrant taste.",
    price: 4.49,
    image: "/images/products/matcha.jpg",
    categoryId: "tea",
  },
];
