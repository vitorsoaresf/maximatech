import { ProductService } from "@services/Products";
import { useQuery } from "@libs/reactQuery";
import { useState } from "@libs/react";
import { IProduct } from "@interfaces/components";
import { CATEGORY_LIST, ELEMENT_PER_PAGE } from "@constants/Products";

export const useProduct = () => {
  const [countPage, setCountPage] = useState({ rangeMin: 0, rangeMax: 6 });
  const [orderSelected, setOrderSelected] = useState<string>("");
  const [categorySelected, setCategorySelected] = useState<string>(
    CATEGORY_LIST[0]
  );
  const listProducts: Array<IProduct> =
    JSON.parse(localStorage.getItem("@MaximaTech:products") as any) ?? [];

  const handlePagination = (rangeMin: number, rangeMax: number) => {
    setCountPage({ rangeMin, rangeMax });
  };

  const handleCategory = (category: string) => {
    setCategorySelected(category);
  };

  const handleOrder = (order: string) => {
    setOrderSelected(order);
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
  });

  const filterProductsByCategory = (products: Array<IProduct>) => {
    return products.filter((item: IProduct) =>
      item.category.includes(categorySelected)
    );
  };

  const verifyIfComponentHasAlreadyBeenAdded = (product: IProduct) => {
    return listProducts.some((item) => item.id === product.id);
  };

  const saveLocalStorage = (products: Array<IProduct>) => {
    localStorage.setItem("@MaximaTech:products", JSON.stringify(products));
  };

  const addProductCart = (product: IProduct) => {
    if (!verifyIfComponentHasAlreadyBeenAdded(product)) {
      listProducts.push(product);
      saveLocalStorage(listProducts);
    }
  };

  const removeProductCart = (product: IProduct) => {
    listProducts.splice(
      listProducts.findIndex((item) => item.id === product.id),
      1
    );
    saveLocalStorage(listProducts);
  };

  const filterProductsByOrder = (products: Array<IProduct>) => {
    const copyArray = structuredClone(products);
    let result: any = [];

    if (orderSelected === "name") {
      result = copyArray.sort((current: any, next: any) =>
        current[orderSelected] < next[orderSelected]
          ? -1
          : current[orderSelected] > next[orderSelected]
          ? 1
          : 0
      );
    } else if (orderSelected === "price") {
      result = copyArray.sort(
        (current: any, next: any) =>
          current[orderSelected] - next[orderSelected]
      );
    } else {
      result = copyArray;
    }

    return result;
  };

  const productsFiltered = filterProductsByCategory(productList.data);
  const products = filterProductsByOrder(productsFiltered);

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
    handleOrder,
    orderSelected,
    addProductCart,
    removeProductCart,
  };
};