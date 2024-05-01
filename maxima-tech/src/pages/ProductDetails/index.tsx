import {
  ButtonComponent,
  FlexComponent,
  HeadingComponent,
  ImageComponent,
  TextComponent,
} from "@libs/chakra";
import { useProductDetails } from "./hooks";
import {
  ContainerImage,
  ContainerInfoStyled,
  ContainerProductStyled,
  DescriptionStyled,
  DetailsStyled,
  ImageProductStyled,
  NameStyled,
  PriceStyled,
} from "./styles";

export const ProductDetails = () => {
  const { product } = useProductDetails();

  return (
    <FlexComponent as="section" {...ContainerProductStyled}>
      <FlexComponent {...ContainerImage}>
        <ImageComponent
          src={product.image}
          alt={product.description}
          {...ImageProductStyled}
        />
      </FlexComponent>

      <FlexComponent {...ContainerInfoStyled}>
        <FlexComponent {...DetailsStyled}>
          <HeadingComponent {...NameStyled}>{product.name}</HeadingComponent>
          <HeadingComponent {...PriceStyled}>
            R$ {product.price}
          </HeadingComponent>

          <HeadingComponent {...DescriptionStyled}>Descrição</HeadingComponent>
          <TextComponent>{product.description}</TextComponent>
        </FlexComponent>
        <ButtonComponent>ADICIONAR AO CARRINHO</ButtonComponent>
      </FlexComponent>
    </FlexComponent>
  );
};
