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
  DescriptionStyled,
  DetailsStyled,
  ImageProductStyled,
  NameStyled,
  PriceStyled,
} from "./styles";
import { BreadcrumbItem } from "@chakra-ui/react";

export const Cart = () => {
  const { product, redirectPage } = useProductDetails();

  return (
    <FlexComponent as="section" {...ContainerProductStyled}>
      <FlexComponent {...ContainerImage}>
        <BreadcrumbComponent {...BreadcrunberStyled}>
          <BreadcrumbItemComponent onClick={() => redirectPage("")}>
            <BreadcrumbLinkComponent>Home</BreadcrumbLinkComponent>
          </BreadcrumbItemComponent>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLinkComponent>Carrinho</BreadcrumbLinkComponent>
          </BreadcrumbItem>
        </BreadcrumbComponent>
        {/* <ImageComponent
          src={product.image}
          alt={product.description}
          {...ImageProductStyled}
        /> */}
        <FlexComponent {...ContainerInfoStyled}>
          <FlexComponent {...DetailsStyled}>
            <HeadingComponent {...NameStyled}>{product.name}</HeadingComponent>
            <HeadingComponent {...PriceStyled}>
              R$ {product.price}
            </HeadingComponent>

            <HeadingComponent {...DescriptionStyled}>
              Descrição
            </HeadingComponent>
            <TextComponent>{product.description}</TextComponent>
          </FlexComponent>
          <ButtonComponent>ADICIONAR AO CARRINHO</ButtonComponent>
        </FlexComponent>
      </FlexComponent>
    </FlexComponent>
  );
};
