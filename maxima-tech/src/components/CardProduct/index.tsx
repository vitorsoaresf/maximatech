import { IProduct } from "@interfaces/components";
import {
  CardBodyComponent,
  CardComponent,
  DividerComponent,
  HeadingComponent,
  ImageComponent,
  StackComponent,
  TextComponent,
} from "@libs/chakra";

interface ICardProduct {
  product: IProduct;
}

export const CardProduct = ({ product }: ICardProduct) => {
  return (
    <CardComponent as="li" maxW="sm">
      <CardBodyComponent>
        <ImageComponent
          src={product.image}
          alt={product.description}
          borderRadius="lg"
        />
        <StackComponent mt="6" spacing="3">
          <HeadingComponent size="md">{product.name}</HeadingComponent>
          <TextComponent color="blue.600" fontSize="2xl">
            ${product.price}
          </TextComponent>
          {product.promotional_price && (
            <TextComponent color="blue.600" fontSize="2xl">
              ${product.promotional_price}
            </TextComponent>
          )}
        </StackComponent>
      </CardBodyComponent>
      <DividerComponent />
    </CardComponent>
  );
};
