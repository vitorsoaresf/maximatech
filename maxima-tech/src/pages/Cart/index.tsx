import {
  BreadcrumbComponent,
  BreadcrumbItemComponent,
  BreadcrumbLinkComponent,
  ButtonComponent,
  DividerComponent,
  FlexComponent,
  HeadingComponent,
  ImageComponent,
  TextComponent,
} from "@libs/chakra";
import {
  BreadcrunberStyled,
  ContainerProductsStyled,
  ContainerAmountStyled,
  ContainerProductStyled,
  ContainerTitleStyled,
  ContainerValueStyled,
  ContainerTotalStyled,
  ContainerButtonBuyProductsStyled,
  ContainerButtonClearCartStyled,
  ContainerImageWithoutStyled,
} from "./styles";
import { BreadcrumbItem } from "@chakra-ui/react";
import { CardCart } from "@components";
import { useRedirect } from "@hooks/useRedirect";
import { useCart } from "@hooks/useCart";
import { theme } from "@styles";
import WithoutProducts from "@assets/img/without_products.svg";

export const Cart = () => {
  const { redirectPage } = useRedirect();
  const {
    cartState,
    amountPriceBuySubtotal,
    amountTotal,
    finalizePurchase,
    clearCart,
    hasProducts,
  } = useCart();

  return (
    <FlexComponent as="section" {...ContainerProductStyled}>
      <FlexComponent {...ContainerProductsStyled}>
        <BreadcrumbComponent {...BreadcrunberStyled}>
          <BreadcrumbItemComponent onClick={() => redirectPage("")}>
            <BreadcrumbLinkComponent>Home</BreadcrumbLinkComponent>
          </BreadcrumbItemComponent>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLinkComponent>Carrinho</BreadcrumbLinkComponent>
          </BreadcrumbItem>
        </BreadcrumbComponent>

        {hasProducts && (
          <>
            <HeadingComponent>Carrinho</HeadingComponent>
            <TextComponent>
              Total ({cartState.list?.length} produtos){" "}
              <strong>R$ {amountPriceBuySubtotal},00</strong>
            </TextComponent>
          </>
        )}

        {hasProducts ? (
          cartState.list.map((item) => (
            <CardCart key={crypto.randomUUID()} product={item} />
          ))
        ) : (
          <ImageComponent
            src={WithoutProducts}
            alt="Não há produtos no carrinho"
            loading="lazy"
            {...ContainerImageWithoutStyled}
          />
        )}
      </FlexComponent>

      <FlexComponent {...ContainerAmountStyled}>
        <HeadingComponent {...ContainerTitleStyled}>RESUMO</HeadingComponent>

        <FlexComponent {...ContainerValueStyled}>
          <TextComponent>Subtotal de produtos</TextComponent>
          <TextComponent data-test="subtotal-products">
            R$ {amountPriceBuySubtotal ?? 0},00
          </TextComponent>
        </FlexComponent>

        <FlexComponent {...ContainerValueStyled}>
          <TextComponent>Entrega</TextComponent>
          <TextComponent data-test="delivery-price">
            {hasProducts ? "R$ 40,00" : "R$ 0,00"}
          </TextComponent>
        </FlexComponent>

        <DividerComponent marginBottom="12px" />
        <FlexComponent {...ContainerTotalStyled}>
          <TextComponent>Total </TextComponent>
          <TextComponent data-test="total-price">
            R$ {amountTotal ?? 0},00
          </TextComponent>
        </FlexComponent>

        <ButtonComponent
          onClick={finalizePurchase}
          data-test="bt-finalize-buy"
          isDisabled={!hasProducts}
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
          onClick={clearCart}
          data-test="bt-clear-cart"
          isDisabled={!hasProducts}
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
