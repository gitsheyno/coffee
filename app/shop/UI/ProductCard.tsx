"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useCart } from "../../ShopingCartContext";
import { Product } from "../../shop/types/index";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    console.log("Add to cart:", product);
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <Card className="group overflow-hidden hover:shadow-md transition-all duration-300 max-w-xs border-gray-200">
      <div className="relative h-52 overflow-hidden">
        <div className="w-full h-full relative">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={200}
            priority={true}
            style={{ objectFit: "cover" }}
            className="transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <Badge className="absolute top-2 right-2 bg-white/90 text-gray-800 hover:bg-white/90">
          {product.category}
        </Badge>
      </div>

      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-medium text-gray-900 group-hover:text-amber-700 transition-colors duration-300">
              {product.name}
            </h3>
            <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
              <span>{product.region}</span>
              <span className="text-gray-300">•</span>
              <span>{product.roastLevel}</span>
            </p>
          </div>
          <span className="text-base font-medium text-amber-700">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </CardHeader>

      <CardFooter className="p-4 pt-3">
        <div className="flex space-x-2 w-full">
          <Button
            onClick={handleAddToCart}
            className="flex-1 bg-amber-700 hover:bg-amber-800 text-white text-sm h-9"
          >
            <ShoppingCart className="h-3.5 w-3.5 mr-1" />
            Add to Cart
          </Button>

          <Button
            asChild
            variant="outline"
            className="p-0 h-9 w-9 border-gray-200 hover:bg-gray-50"
          >
            <Link href="/cart">
              <Star className="h-4 w-4 text-gray-500 group-hover:text-amber-600" />
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
