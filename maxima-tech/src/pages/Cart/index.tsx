import {
  BreadcrumbComponent,
  BreadcrumbItemComponent,
  BreadcrumbLinkComponent,
  ButtonComponent,
  DividerComponent,
  FlexComponent,
  HeadingComponent,
  TextComponent,
} from "@libs/chakra";
import {
  BreadcrunberStyled,
  ContainerImageStyled,
  ContainerAmountStyled,
  ContainerProductStyled,
  ContainerTitleStyled,
  ContainerValueStyled,
  ContainerTotalStyled,
  ContainerButtonBuyProductsStyled,
  ContainerButtonClearCartStyled,
} from "./styles";
import { BreadcrumbItem } from "@chakra-ui/react";
import { CardCart } from "@components";
import { useRedirect } from "@hooks/useRedirect";
import { useCart } from "@hooks/useCart";
import { theme } from "@styles";

export const Cart = () => {
  const { redirectPage } = useRedirect();
  const { cartState, amountPriceBuySubtotal, amountTotal } = useCart();

  return (
    <FlexComponent as="section" {...ContainerProductStyled}>
      <FlexComponent {...ContainerImageStyled}>
        <BreadcrumbComponent {...BreadcrunberStyled}>
          <BreadcrumbItemComponent onClick={() => redirectPage("")}>
            <BreadcrumbLinkComponent>Home</BreadcrumbLinkComponent>
          </BreadcrumbItemComponent>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLinkComponent>Carrinho</BreadcrumbLinkComponent>
          </BreadcrumbItem>
        </BreadcrumbComponent>
        {cartState.list.map((item) => (
          <CardCart key={crypto.randomUUID()} product={item} />
        ))}
      </FlexComponent>

      <FlexComponent {...ContainerAmountStyled}>
        <HeadingComponent {...ContainerTitleStyled}>RESUMO</HeadingComponent>

        <FlexComponent {...ContainerValueStyled}>
          <TextComponent>Subtotal de produtos </TextComponent>
          <TextComponent>R$ {amountPriceBuySubtotal},00</TextComponent>
        </FlexComponent>

        <FlexComponent {...ContainerValueStyled}>
          <TextComponent>Entrega</TextComponent>
          <TextComponent>R$ 40,00</TextComponent>
        </FlexComponent>

        <DividerComponent marginBottom="12px" />
        <FlexComponent {...ContainerTotalStyled}>
          <TextComponent>Total R$</TextComponent>
          <TextComponent>{amountTotal},00</TextComponent>
        </FlexComponent>

        <ButtonComponent
          _hover={{
            backgroundColor: theme.palette.white,
            color: theme.palette.blue["550"],
            border: `1px solid ${theme.palette.blue["550"]}`,
          }}
          {...ContainerButtonBuyProductsStyled}
        >
          FINALIZAR COMPRA
        </ButtonComponent>
        <ButtonComponent
          _hover={{
            backgroundColor: theme.palette.white,
            color: theme.palette.red["550"],
            border: `1px solid ${theme.palette.red["550"]}`,
          }}
          {...ContainerButtonClearCartStyled}
        >
          LIMPAR CARRINHO
        </ButtonComponent>
      </FlexComponent>
    </FlexComponent>
  );
};
