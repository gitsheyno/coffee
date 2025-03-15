import Spinner from "@/app/UIComponents/Loader";
import { Suspense } from "react";
import ProductsWrapper from "./UI/ProductsWrapper";
export default async function ShopPage() {
  return (
    <div className="">
      <Suspense fallback={<Spinner />}>
        <ProductsWrapper />
      </Suspense>
    </div>
  );
}
