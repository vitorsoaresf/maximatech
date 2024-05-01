import { ProductService } from "@services/Products";
import { useQuery } from "@libs/reactQuery";
import { useState } from "@libs/react";

export const useProduct = () => {
  const [countPage, setCountPage] = useState({ rangeMin: 0, rangeMax: 6 });

  const handlePagination = (rangeMin: number, rangeMax: number) => {
    setCountPage({ rangeMin, rangeMax });
  };

  const laodProductsPage = async () => {
    const response = await ProductService.laodProducts();

    if (response.ok) {
      return response.json();
    }
    throw new Error();
  };

  const productList = useQuery({
    queryKey: ["products"],
    queryFn: laodProductsPage,
    initialData: [],
  });

  return { productList, countPage, handlePagination };
};
