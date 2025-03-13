import { type Product } from "./categories";
import { allProducts } from "../shop/data";
export const getProducts = async (): Promise<
  {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    region: string;
    roastLevel: string;
  }[]
> => {
  return await allProducts;
};
