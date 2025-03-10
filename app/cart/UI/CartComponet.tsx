// src/app/cart/page.tsx
"use client";
import React, { useState } from "react";
import { useCart } from "../../ShopingCartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CartItem from "./CartItem";
import OrderSummary from "../../checkout/UI/OrderSummary";
import EmptyCart from "../../checkout/UI/EmptyCart";

export default function CartPage() {
  const { cartItems, getTotalItems } = useCart();
  const router = useRouter();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleProceedToCheckout = () => {
    setIsCheckingOut(true);
    router.push("/checkout");
  };
  console.log(cartItems);
  //   if (cartItems.length === 0) {
  //     return <EmptyCart />;
  //   }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Shopping Cart</h1>
                <span className="text-amber-700 font-medium">
                  {getTotalItems()} {getTotalItems() === 1 ? "item" : "items"}
                </span>
              </div>

              <div className="border-t border-gray-200 pt-4">
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>

              <div className="mt-8 flex justify-between">
                <Link
                  href="/shop"
                  className="flex items-center text-amber-700 hover:text-amber-800 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <OrderSummary
              onCheckout={handleProceedToCheckout}
              isProcessing={isCheckingOut}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
