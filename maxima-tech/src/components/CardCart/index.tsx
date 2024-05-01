import { IProduct } from "@interfaces/components";
import {
  FlexComponent,
  HeadingComponent,
  ImageComponent,
  TextComponent,
} from "@libs/chakra";
import { CardImageStyle } from "./styles";

interface ICardCart {
  product: IProduct;
}

export const CardCart = ({ product }: ICardCart) => {
  return (
    <FlexComponent as="li">
      <FlexComponent>
        <ImageComponent
          src={product.image}
          alt={product.description}
          {...CardImageStyle}
        />
        <FlexComponent>
          <HeadingComponent>{product.name}</HeadingComponent>
          <TextComponent>{product.description}</TextComponent>
        </FlexComponent>
      </FlexComponent>
    </FlexComponent>
  );
};
