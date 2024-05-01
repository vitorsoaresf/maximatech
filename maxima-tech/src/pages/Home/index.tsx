import { FlexComponent } from "@libs/chakra";
import { useProduct } from "./hooks";
import { CardProduct } from "@components";
import { IProduct } from "@interfaces/components";
import { ButtonsFilterStyled, HomeStyled, ProductListStyled } from "./styles";
import { buttonList } from "./constants";
import { ButtonFilterProduct } from "@components";

export const Home = () => {
  const { productList } = useProduct();

  return (
    <FlexComponent {...HomeStyled}>
      <FlexComponent as="ul" {...ButtonsFilterStyled}>
        {buttonList.map((button) => (
          <ButtonFilterProduct
            key={crypto.randomUUID()}
            label={button}
            onClick={() => console.log("haha")}
          />
        ))}
      </FlexComponent>
      <FlexComponent as="ul" {...ProductListStyled}>
        {productList.data.map((item: IProduct) => (
          <CardProduct key={crypto.randomUUID()} product={item} />
        ))}
      </FlexComponent>
    </FlexComponent>
  );
};
