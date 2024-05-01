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
  FadeInBoxStyled,
  ImageStyled,
  PriceCardStyled,
  TitleCardStyled,
} from "./styles";
import { IconNewTab } from "@assets/icons/NewTab";
import { useCardProduct } from "./hooks";

interface ICardProduct {
  product: IProduct;
}

export const CardProduct = ({ product }: ICardProduct) => {
  const { redirectRouteDetailsProduct } = useCardProduct();

  return (
    <CardComponent
      as="li"
      maxW="sm"
      {...CardStyled}
      onClick={() => redirectRouteDetailsProduct(product)}
    >
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
        <FlexComponent
          {...FadeInBoxStyled}
          _hover={{ opacity: 0.7 }}
          style={{
            transition: ".5s ease",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {<IconNewTab width="50px" height="50px" />}
        </FlexComponent>
      </CardBodyComponent>
    </CardComponent>
  );
};
