import { ProductService } from "@services/Products";
import { useQuery } from "@libs/reactQuery";
import { useNavigate, useParams } from "@libs/reactRouterDom";

import { IProduct } from "@interfaces/components";

export const useProductDetails = () => {
  const { id: idProduct } = useParams();
  const navigation = useNavigate();

  const loadProductDetail = async () => {
    const response = await ProductService.loadSpecificProducts(
      idProduct ?? "0"
    );

    if (response.ok) {
      return response.json();
    }
    throw new Error();
  };

  const redirectPage = (path: string) => {
    navigation(`/${path}`);
  };

  const productDetails = useQuery({
    queryKey: ["productDetails"],
    queryFn: loadProductDetail,
    initialData: [],
  });

  const product: IProduct = productDetails.data;

  return {
    product,
    redirectPage,
  };
};
