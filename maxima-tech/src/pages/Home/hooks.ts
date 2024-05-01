import { ProductService } from "@services/Products";
import { useQuery } from "@libs/reactQuery";

export const useProduct = () => {
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

  return { productList };
};
