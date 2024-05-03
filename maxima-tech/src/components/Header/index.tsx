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

export const Header = () => {
  const navigate = useNavigate();
  const { cartState } = useCart();
  const { filteByrTerm } = useProduct();

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
          actionBtRightPosition={Icon["search"]}
          width={["310px", "310px", "310px", "350px"]}
          data-test="input-search-product"
        />

        <ListItemComponent {...ContainerItemListStyled}>
          <Link to="/gallery" style={{ width: "max-content" }}>
            <ImageComponent src={UserImg} loading="lazy" />
          </Link>
          <Link
            to="/cart"
            data-test="icon-cart-redirect"
            style={{ width: "max-content" }}
          >
            <ImageComponent src={BagImg} loading="lazy" />
          </Link>
          {cartState.list?.length > 0 && (
            <TextComponent
              transform="translate3d(-22px, 10px, 10px)"
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
