import { ProductService } from "@services/Products";
import { useQuery } from "@libs/reactQuery";
import { useState } from "@libs/react";
import { IProduct } from "@interfaces/components";
import { CATEGORY_LIST, ELEMENT_PER_PAGE } from "./constants";

export const useProduct = () => {
  const [countPage, setCountPage] = useState({ rangeMin: 0, rangeMax: 6 });
  const [categorySelected, setCategorySelected] = useState<string>(
    CATEGORY_LIST[0]
  );

  const handlePagination = (rangeMin: number, rangeMax: number) => {
    setCountPage({ rangeMin, rangeMax });
  };

  const handleCategory = (category: string) => {
    setCategorySelected(category);
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

  const products = productList.data.filter((item: IProduct) =>
    item.category.includes(categorySelected)
  );

  const quantityProducts = Number(
    (products.length / ELEMENT_PER_PAGE).toFixed()
  );

  return {
    products,
    countPage,
    handlePagination,
    handleCategory,
    categorySelected,
    quantityProducts,
  };
};
