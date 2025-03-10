import ShopLayout from "./UI/Shoplayout";
import { CartProvider } from "../ShopingCartContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <ShopLayout>{children}</ShopLayout>
    </CartProvider>
  );
}

// src/types/product.ts
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  region: string;
  roastLevel: string;
}
