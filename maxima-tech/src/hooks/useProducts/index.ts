import { ProductService } from "@services/Products";
import { useQuery } from "@libs/reactQuery";
import { useState } from "@libs/react";
import { IProduct } from "@interfaces/components";
import { ELEMENT_PER_PAGE } from "@constants/Products";
import {
  setCategory,
  setOrder,
  setProductListFiltered,
} from "@contexts/ProductsProvider/actions";
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
      return response.json();
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
    setProductListFiltered(
      productDispatch,
      productState.list.filter((item: IProduct) =>
        item.category.includes(category)
      )
    );
    setCategory(productDispatch, category);
    setOrder(productDispatch, "");
  };

  const filterProductsByOrder = (order: string) => {
    const copyArray = structuredClone(productState.listFiltered);
    let result: any = [];
    setOrder(productDispatch, order);

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

    setProductListFiltered(productDispatch, result);
  };

  const filteByrTerm = (term: string) => {
    setProductListFiltered(
      productDispatch,
      productState.list.filter((item: IProduct) =>
        item.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  const quantityProducts = Number(
    (productState.listFiltered.length / ELEMENT_PER_PAGE).toFixed()
  );

  return {
    productList,
    countPage,
    handlePagination,
    filterProductsByCategory,
    filterProductsByOrder,
    filteByrTerm,
    quantityProducts,
  };
};
