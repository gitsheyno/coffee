import { useMemo } from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  region: string;
  roastLevel?: string;
};

type Filters = {
  category?: string;
  region?: string;
  roastLevel?: string;
  searchedValue?: string;
  sortOption?: string;
};

export const useFilter = (data: Product[], filters: Filters) => {
  return useMemo(() => {
    const filteredData = data
      .filter((product) => {
        return Object.entries(filters).every(([key, value]) => {
          if (
            !value ||
            value === "all" ||
            key === "searchedValue" ||
            key === "sortOption"
          )
            return true;
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
    console.log("check");
    if (filters.sortOption && filters.sortOption !== "featured") {
      return filteredData.slice().sort((a, b) => {
        const priceA = Number(a.price);
        const priceB = Number(b.price);

        if (filters.sortOption === "price-low") {
          return priceA - priceB;
        }
        if (filters.sortOption === "price-high") {
          return priceB - priceA;
        }
        return 0;
      });
    }
    return filteredData;
  }, [data, filters]);
};
