import { IProduct } from "@interfaces/components";
import { useNavigate } from "react-router-dom";

export const useCardProduct = () => {
  const navigate = useNavigate();

  const redirectRouteDetailsProduct = (product: IProduct) => {
    navigate(`detailsproduct/${product.id}`);
  };

  return { redirectRouteDetailsProduct };
};
