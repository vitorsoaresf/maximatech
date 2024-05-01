import { ProductService } from "@services/Products";
import { useQuery } from "@libs/reactQuery";
import { useParams } from "react-router-dom";

export const useProductDetails = () => {
  const { id: idProduct } = useParams();

  console.log(idProduct);

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

  const product = productDetails.data;

  return {
    product,
  };
};
