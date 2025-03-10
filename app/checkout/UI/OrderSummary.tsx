// src/components/cart/OrderSummary.tsx
"use client";
import React from "react";
import { useCart } from "../../ShopingCartContext";

interface OrderSummaryProps {
  onCheckout: () => void;
  isProcessing: boolean;
}

export default function OrderSummary({
  onCheckout,
  isProcessing,
}: OrderSummaryProps) {
  const { getTotalPrice } = useCart();

  const subtotal = getTotalPrice();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08; // 8% tax rate
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 sticky top-4">
      <h2 className="text-xl font-bold mb-6">Order Summary</h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          {shipping === 0 ? (
            <span className="text-green-600 font-medium">FREE</span>
          ) : (
            <span className="font-medium">${shipping.toFixed(2)}</span>
          )}
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Tax (8%)</span>
          <span className="font-medium">${tax.toFixed(2)}</span>
        </div>

        <div className="border-t border-gray-200 pt-4 mt-4">
          <div className="flex justify-between">
            <span className="text-lg font-bold">Total</span>
            <span className="text-lg text-amber-700 font-bold">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>

        {shipping > 0 && (
          <p className="text-xs text-gray-500 mt-2">
            Add ${(50 - subtotal).toFixed(2)} more to get free shipping
          </p>
        )}

        <button
          onClick={onCheckout}
          disabled={isProcessing}
          className={`w-full py-3 mt-4 rounded-md font-medium flex items-center justify-center ${
            isProcessing
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-amber-700 hover:bg-amber-800 text-white"
          } transition duration-300`}
        >
          {isProcessing ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </>
          ) : (
            "Proceed to Checkout"
          )}
        </button>
      </div>
    </div>
  );
}
