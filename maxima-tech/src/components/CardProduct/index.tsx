import { IProduct } from "@interfaces/components";
import {
  CardBodyComponent,
  CardComponent,
  FlexComponent,
  HeadingComponent,
  ImageComponent,
  StackComponent,
  TextComponent,
} from "@libs/chakra";
import {
  CardStyled,
  DescriptionCardStyled,
  DiscountPercentageCardStyled,
  ImageStyled,
  PriceCardStyled,
  TitleCardStyled,
} from "./styles";

interface ICardProduct {
  product: IProduct;
}

export const CardProduct = ({ product }: ICardProduct) => {
  return (
    <CardComponent as="li" maxW="sm" {...CardStyled}>
      <CardBodyComponent>
        <ImageComponent
          src={product.image}
          alt={product.description}
          {...ImageStyled}
        />
        <StackComponent {...DescriptionCardStyled}>
          <HeadingComponent {...TitleCardStyled}>
            {product.name}
          </HeadingComponent>

          <FlexComponent {...PriceCardStyled}>
            <TextComponent
              textDecoration={product.promotional_price && "line-through"}
            >
              ${product.price}
            </TextComponent>
            {product.promotional_price && (
              <TextComponent>${product.promotional_price}</TextComponent>
            )}
          </FlexComponent>
        </StackComponent>
        {product.discount_percentage && (
          <FlexComponent {...DiscountPercentageCardStyled}>
            <TextComponent>${product.discount_percentage} OFF</TextComponent>
          </FlexComponent>
        )}
      </CardBodyComponent>
    </CardComponent>
  );
};
