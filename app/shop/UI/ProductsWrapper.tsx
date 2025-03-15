import { fetchAllProducts } from "@/app/actions/product-actions";
import Shop from "./Shop";
export default async function ProductsWrapper() {
  const { products } = await fetchAllProducts();
  return <Shop fetchedProducts={products} />;
}
