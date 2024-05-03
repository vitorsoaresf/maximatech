import BagImg from "@assets/img/shopping_img.svg";
import UserImg from "@assets/img/user.svg";
import {
  ContainerHeaderStyled,
  ContainerHeadingStyled,
  ContainerItemListStyled,
  ContainerListStyled,
  ContainerTitleInitialCharacterStyled,
  ContainerTitleWordStyled,
  QuantityProductsCartStyled,
} from "./styles";
import {
  FlexComponent,
  HeadingComponent,
  ImageComponent,
  ListItemComponent,
  TextComponent,
  UnorderedListComponent,
} from "@libs/chakra";
import { Link, useNavigate } from "@libs/reactRouterDom";
import { Input } from "@components";
import { Icon } from "@assets/icons";
import { useCart } from "@hooks/useCart";
import { useProduct } from "@hooks/useProducts";
import { useEffect } from "@libs/react";
import { useProductContext } from "@contexts/ProductsProvider/context";

export const Header = () => {
  const navigate = useNavigate();
  const { cartState, loadProductsCart } = useCart();
  const { filteByrTerm } = useProduct();
  const { productState } = useProductContext();

  useEffect(() => {
    loadProductsCart();
  }, []);

  return (
    <FlexComponent as="nav" {...ContainerHeaderStyled}>
      <HeadingComponent
        as="h1"
        data-test="ecommerce"
        onClick={() => navigate("/")}
        {...ContainerHeadingStyled}
      >
        <TextComponent {...ContainerTitleInitialCharacterStyled}>
          e
        </TextComponent>
        <TextComponent {...ContainerTitleWordStyled}>commerce</TextComponent>
      </HeadingComponent>
      <UnorderedListComponent {...ContainerListStyled}>
        <Input
          placeholder="Quero comprar algo específico..."
          onChange={(e) => filteByrTerm(e.target.value)}
          value={productState.term}
          actionBtRightPosition={Icon["search"]}
          width={["310px", "310px", "310px", "350px"]}
          data-test="input-search-product"
        />

        <ListItemComponent {...ContainerItemListStyled}>
          <Link to="/" style={{ width: "max-content" }}>
            <ImageComponent src={UserImg} loading="lazy" />
          </Link>
          <Link
            to="/cart"
            data-test="icon-cart-redirect"
            style={{ width: "max-content", padding: "8px" }}
          >
            <ImageComponent src={BagImg} loading="lazy" />
          </Link>
          {cartState.list?.length > 0 && (
            <TextComponent
              transform="translate3d(-30px, 12px, 12px)"
              {...QuantityProductsCartStyled}
            >
              {cartState.list.length}
            </TextComponent>
          )}
        </ListItemComponent>
      </UnorderedListComponent>
    </FlexComponent>
  );
};
