import { fetchAllProducts } from "@/app/actions/product-actions";
import Shop from "./Shop";
import { Suspense } from "react";
import Spinner from "@/app/UIComponents/Loader";
export default async function ProductsWrapper() {
  const { products } = await fetchAllProducts();
  return (
    <Suspense fallback={<Spinner />}>
      <Shop fetchedProducts={products} />
    </Suspense>
  );
}
