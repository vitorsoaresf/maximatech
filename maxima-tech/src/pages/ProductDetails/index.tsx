import { FlexComponent } from "@libs/chakra";
import { useProductDetails } from "./hooks";

export const ProductDetails = () => {
  const { product } = useProductDetails();

  return <FlexComponent>DetailsProduct</FlexComponent>;
};
