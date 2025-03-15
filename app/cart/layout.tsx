"use client";
import React from "react";
import { CartProvider } from "../ShopingCartContext";
export default function layout({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
