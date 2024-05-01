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
  DescriptionProductStyled,
  DetailsProductStyled,
  RemoveProductStyled,
  SelectQuantityStyled,
} from "./styles";
import ImgTrash from "@assets/img/trash.svg";
import { useProduct } from "@hooks/useProducts";
import { theme } from "@styles";
import { Icon } from "@assets/icons";

interface ICardCart {
  product: IProduct;
}

export const CardCart = ({ product }: ICardCart) => {
  const { updateQuantityProduct, removeProductCart } = useProduct();

  return (
    <FlexComponent as="li" {...CardStyled}>
      <FlexComponent {...ContainerCardStyled}>
        <FlexComponent {...ContainerImageStyled}>
          <ImageComponent
            src={product.image}
            alt={product.description}
            {...CardImageStyled}
          />
        </FlexComponent>
        <FlexComponent {...CardDescriptionStyled}>
          <HeadingComponent {...DetailsProductStyled}>
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

          <FlexComponent>
            <SelectComponent
              onChange={(e: any) =>
                updateQuantityProduct(product, e.target.value)
              }
              defaultValue="1"
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
          </FlexComponent>
        </FlexComponent>
      </FlexComponent>
    </FlexComponent>
  );
};
