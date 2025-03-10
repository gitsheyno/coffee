// src/components/cart/CartItem.tsx
"use client";
import React from "react";
import Image from "next/image";
import { useCart } from "../../ShopingCartContext";
import { Product } from "../../shop/types/index";

interface CartItemProps {
  item: Product & { quantity: number };
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex flex-col sm:flex-row items-center py-4 border-b border-gray-200">
      <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 mb-4 sm:mb-0">
        <Image
          src={item.image}
          alt={item.name}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-1 flex-col sm:flex-row sm:items-center sm:justify-between ml-0 sm:ml-6">
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
          <p className="mt-1 text-sm text-gray-500">
            {item.region} • {item.roastLevel}
          </p>
          <p className="mt-1 text-sm text-gray-500">{item.category}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center mt-4 sm:mt-0">
          <div className="flex items-center border border-gray-300 rounded-md">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="px-3 py-1 text-gray-600 hover:text-gray-800"
            >
              -
            </button>
            <span className="px-3 py-1 border-x border-gray-300">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="px-3 py-1 text-gray-600 hover:text-gray-800"
            >
              +
            </button>
          </div>

          <div className="mt-4 sm:mt-0 sm:ml-6 text-center">
            <p className="text-lg font-semibold text-amber-700">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-sm text-red-500 hover:text-red-700 transition mt-1"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
