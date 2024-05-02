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
  ButtonComponent,
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

export const Header = () => {
  const navigate = useNavigate();
  const { cartState } = useCart();

  return (
    <FlexComponent as="nav" {...ContainerHeaderStyled}>
      <HeadingComponent
        as="h1"
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
          onChange={(e) => console.log(e.target.value)}
          actionBtRightPosition={
            <ButtonComponent
              bg="transparent"
              _hover={{
                backgroundColor: "transparent",
                color: "blue",
              }}
              // onClick={seePassword}
              // {...ContainerButtonPasswordStyled}
            >
              {Icon["search"]}
            </ButtonComponent>
          }
          width={["310px", "310px", "310px", "350px"]}
        />

        <ListItemComponent {...ContainerItemListStyled}>
          <Link to="/gallery" style={{ width: "max-content" }}>
            {<ImageComponent src={UserImg} />}
          </Link>
          <Link to="/cart" style={{ width: "max-content" }}>
            {<ImageComponent src={BagImg} />}
          </Link>
          {cartState.list.length > 0 && (
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
