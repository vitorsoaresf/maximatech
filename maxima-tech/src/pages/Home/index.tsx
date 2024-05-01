import { FlexComponent } from "@libs/chakra";
import { useProduct } from "./hooks";
import { CardProduct } from "@components";
import { IProduct } from "@interfaces/components";
import { HomeStyled } from "./styles";

export const Home = () => {
  const { productList } = useProduct();

  return (
    <FlexComponent as="ul" {...HomeStyled}>
      {productList.data.map((item: IProduct) => (
        <CardProduct product={item} />
      ))}
    </FlexComponent>
  );
};
