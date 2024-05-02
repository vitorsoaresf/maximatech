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
  ContainerImage,
  ContainerAmountValueStyled,
  ContainerProductStyled,
} from "./styles";
import { BreadcrumbItem } from "@chakra-ui/react";
import { CardCart } from "@components";
import { useRedirect } from "@hooks/useRedirect";
import { useCart } from "@hooks/useCart";

export const Cart = () => {
  const { redirectPage } = useRedirect();
  const { cartState, amountPriceBuySubtotal, amountTotal } = useCart();

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
        {cartState.list.map((item) => (
          <CardCart key={crypto.randomUUID()} product={item} />
        ))}
      </FlexComponent>

      <FlexComponent {...ContainerAmountValueStyled}>
        <HeadingComponent>RESUMO</HeadingComponent>
        <TextComponent>
          Subtotal de produtos R${amountPriceBuySubtotal},00
        </TextComponent>
        <TextComponent>Entrega R$ 40,00</TextComponent>
        <DividerComponent />
        <TextComponent>Total R$ {amountTotal},00</TextComponent>
        <ButtonComponent>FINALIZAR COMPRA</ButtonComponent>
        <ButtonComponent>LIMPAR CARRINHO</ButtonComponent>
      </FlexComponent>
    </FlexComponent>
  );
};
