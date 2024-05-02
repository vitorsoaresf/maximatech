import { ProductService } from "@services/Products";
import { useQuery } from "@libs/reactQuery";
import { useState } from "@libs/react";
import { IProduct } from "@interfaces/components";
import { CATEGORY_LIST, ELEMENT_PER_PAGE } from "@constants/Products";
import { setProductList } from "@contexts/ProductsProvider/actions";
import { useProductContext } from "@contexts/ProductsProvider/context";

export const useProduct = () => {
  const [countPage, setCountPage] = useState({ rangeMin: 0, rangeMax: 6 });
  const { productState, productDispatch } = useProductContext();

  const handlePagination = (rangeMin: number, rangeMax: number) => {
    setCountPage({ rangeMin, rangeMax });
  };

  const loadProductsPage = async () => {
    const response = await ProductService.loadProducts();

    if (response.ok) {
      setProductList(productDispatch, await response.json());
    }
    throw new Error();
  };

  const productList = useQuery({
    queryKey: ["products"],
    queryFn: loadProductsPage,
    initialData: [],
    retry: false,
  });

  const filterProductsByCategory = (category: string) => {
    setProductList(
      productDispatch,
      productState.list.filter((item: IProduct) =>
        item.category.includes(category)
      )
    );
  };

  const filterProductsByOrder = (order: string) => {
    const copyArray = structuredClone(productState.list);
    let result: any = [];

    if (order === "name") {
      result = copyArray.sort((current: any, next: any) =>
        current[order] < next[order] ? -1 : current[order] > next[order] ? 1 : 0
      );
    } else if (order === "price") {
      result = copyArray.sort(
        (current: any, next: any) => current[order] - next[order]
      );
    } else {
      result = copyArray;
    }

    setProductList(productDispatch, result);
  };

  const quantityProducts = Number(
    (productState.list.length / ELEMENT_PER_PAGE).toFixed()
  );

  return {
    productList,
    countPage,
    handlePagination,
    filterProductsByCategory,
    filterProductsByOrder,
    // handleCategory,
    // categorySelected,
    quantityProducts,
    // handleOrder,
    // orderSelected,
  };
};
