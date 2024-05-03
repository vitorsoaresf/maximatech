import { IProduct } from "@interfaces/components";
import {
  FlexComponent,
  HeadingComponent,
  ImageComponent,
  SelectComponent,
  TextComponent,
} from "@libs/chakra";
import {
  CardDescriptionStyled,
  CardImageStyled,
  CardStyled,
  ContainerCardStyled,
  ContainerImageStyled,
  ContainerPriceQuantityStyled,
  ContainerPriceStyled,
  DescriptionProductStyled,
  DetailsProductStyled,
  RemoveProductStyled,
  SelectQuantityStyled,
} from "./styles";
import { theme } from "@styles";
import { Icon } from "@assets/icons";
import { useCart } from "@hooks/useCart";

interface ICardCart {
  product: IProduct;
}

export const CardCart = ({ product }: ICardCart) => {
  const { updateQuantityProduct, removeProductCart } = useCart();

  return (
    <FlexComponent as="li" {...CardStyled}>
      <FlexComponent {...ContainerCardStyled}>
        <FlexComponent {...ContainerImageStyled}>
          <ImageComponent
            src={product.image}
            alt={product.description}
            loading="lazy"
            {...CardImageStyled}
          />
        </FlexComponent>
        <FlexComponent {...CardDescriptionStyled}>
          <HeadingComponent
            {...DetailsProductStyled}
            data-test="name-product-cart"
          >
            {product.name}
            <TextComponent
              _hover={{
                color: theme.palette.white,
                backgroundColor: theme.palette.red["550"],
              }}
              onClick={() => removeProductCart(product)}
              {...RemoveProductStyled}
            >
              {Icon["trash"]}
            </TextComponent>
          </HeadingComponent>
          <TextComponent {...DescriptionProductStyled}>
            {product.description}
          </TextComponent>

          <FlexComponent {...ContainerPriceQuantityStyled}>
            <SelectComponent
              onChange={(e: any) =>
                updateQuantityProduct(product, e.target.value)
              }
              value={product.quantity}
              data-test="quantity-selector"
              {...SelectQuantityStyled}
            >
              {Array(10)
                .fill(0)
                .map((_, index) => (
                  <option key={crypto.randomUUID()} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
            </SelectComponent>

            <FlexComponent {...ContainerPriceStyled}>
              <TextComponent
                textDecoration={product.promotional_price && "line-through"}
                {...(product.promotional_price && {
                  textDecoration: "line-through",
                  color: theme.palette.red["550"],
                })}
              >
                R$ {(product?.quantity as number) * product.price}
              </TextComponent>

              {product.promotional_price && (
                <TextComponent>
                  R$ {(product?.quantity as number) * product.promotional_price}
                </TextComponent>
              )}
            </FlexComponent>
          </FlexComponent>
        </FlexComponent>
      </FlexComponent>
    </FlexComponent>
  );
};
