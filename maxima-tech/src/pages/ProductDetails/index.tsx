import {
  BreadcrumbComponent,
  BreadcrumbItemComponent,
  BreadcrumbLinkComponent,
  ButtonComponent,
  FlexComponent,
  HeadingComponent,
  ImageComponent,
  TextComponent,
} from "@libs/chakra";
import { useProductDetails } from "./hooks";
import {
  BreadcrunberStyled,
  ContainerImage,
  ContainerInfoStyled,
  ContainerProductStyled,
  DescriptionContentStyled,
  DescriptionStyled,
  DetailsStyled,
  ImageProductStyled,
  NameStyled,
  PriceStyled,
} from "./styles";
import { BreadcrumbItem } from "@chakra-ui/react";
import { useRedirect } from "@hooks/useRedirect";
import { useCart } from "@hooks/useCart";

export const ProductDetails = () => {
  const { product } = useProductDetails();
  const { redirectPage } = useRedirect();
  const { addProductCart } = useCart();

  return (
    <FlexComponent as="section" {...ContainerProductStyled}>
      <FlexComponent {...ContainerImage}>
        <BreadcrumbComponent {...BreadcrunberStyled}>
          <BreadcrumbItemComponent onClick={() => redirectPage("")}>
            <BreadcrumbLinkComponent>Home</BreadcrumbLinkComponent>
          </BreadcrumbItemComponent>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLinkComponent>{product.name}</BreadcrumbLinkComponent>
          </BreadcrumbItem>
        </BreadcrumbComponent>
        <ImageComponent
          src={product.image}
          alt={product.description}
          loading="lazy"
          {...ImageProductStyled}
        />
      </FlexComponent>

      <FlexComponent {...ContainerInfoStyled}>
        <FlexComponent {...DetailsStyled}>
          <HeadingComponent {...NameStyled}>{product.name}</HeadingComponent>
          <HeadingComponent {...PriceStyled}>
            R$
            {product.promotional_price
              ? product.promotional_price
              : product.price}
          </HeadingComponent>

          <HeadingComponent {...DescriptionStyled}>Descrição</HeadingComponent>
          <TextComponent
            {...DescriptionContentStyled}
            css={{
              "&::-webkit-scrollbar": {
                width: "12px",
              },
              "&::-webkit-scrollbar-track": {
                width: "12px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "white",
                borderRadius: "24px",
              },
            }}
          >
            {product.description}
          </TextComponent>
        </FlexComponent>
        <ButtonComponent onClick={() => addProductCart(product)}>
          ADICIONAR AO CARRINHO
        </ButtonComponent>
      </FlexComponent>
    </FlexComponent>
  );
};
