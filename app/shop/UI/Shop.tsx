"use client";
import { useSearchParams } from "next/navigation";
import ProductList from "./ProductList";
import { useFilter } from "@/app/hooks/useFilter";
export default function ShopPage({
  fetchedProducts,
}: {
  fetchedProducts: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    region: string;
    roastLevel: string;
  }[];
}) {
  const searchParams = useSearchParams();
  console.log(fetchedProducts);
  // const category = searchParams.get("category") || "all";
  // const region = searchParams.get("region") || "all";
  // const roastLevel = searchParams.get("roastLevel") || "all";
  // const searchedValue = searchParams.get("search") || "";
  // const sortOption = searchParams.get("sort") || "featured";

  // console.log("fetchedProducts", fetchedProducts);
  // const filteredProducts = useFilter(fetchedProducts, {
  //   category,
  //   region,
  //   roastLevel,
  //   searchedValue,
  //   sortOption,
  // });

  return <ProductList products={fetchedProducts} />;
}
