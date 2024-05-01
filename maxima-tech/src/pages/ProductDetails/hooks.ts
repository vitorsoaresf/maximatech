import { ProductService } from "@services/Products";
import { useQuery } from "@libs/reactQuery";
import { useParams } from "react-router-dom";
import { IProduct } from "@interfaces/components";

export const useProductDetails = () => {
  const { id: idProduct } = useParams();

  const loadProductDetail = async () => {
    const response = await ProductService.loadSpecificProducts(
      idProduct ?? "0"
    );

    if (response.ok) {
      return response.json();
    }
    throw new Error();
  };

  const productDetails = useQuery({
    queryKey: ["productDetails"],
    queryFn: loadProductDetail,
    initialData: [],
  });

  const product: IProduct = productDetails.data;

  return {
    product,
  };
};
