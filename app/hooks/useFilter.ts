import { useMemo } from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  region: string;
  roastLevel: string;
};

type Filters = {
  category?: string;
  region?: string;
  roastLevel?: string;
  searchedValue?: string;
};

export const useFilter = (data: Product[], filters: Filters) => {
  return useMemo(() => {
    return data
      .filter((product) => {
        return Object.entries(filters).every(([key, value]) => {
          if (!value || value === "all" || key === "searchedValue") return true;
          return (
            (product[key as keyof Product] as string).toLowerCase() ===
            value.toLowerCase()
          );
        });
      })
      .filter((product) => {
        if (!filters.searchedValue) return true;
        return product.name
          .toLowerCase()
          .includes(filters.searchedValue.toLowerCase());
      });
  }, [data, filters]);
};
