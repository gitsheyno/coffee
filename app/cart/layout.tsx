"use client";
import React from "react";
import { CartProvider } from "../ShopingCartContext";
export default function layout({ children }) {
  return <CartProvider>{children}</CartProvider>;
}
