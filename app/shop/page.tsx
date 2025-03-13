import Shop from "./UI/Shop";
import { getProducts } from "../data/queries";
import { Suspense } from "react";
export default async function ShopPage() {
  const products = await getProducts();
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Shop fetchedProducts={products} />
      </Suspense>
    </div>
  );
}
