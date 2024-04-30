import BagImg from "@assets/img/shopping_img.svg";
import UserImg from "@assets/img/user.svg";
import {
  ContainerHeaderStyled,
  ContainerItemListStyled,
  ContainerListStyled,
} from "./styles";
import {
  ButtonComponent,
  FlexComponent,
  ImageComponent,
  ListItemComponent,
  UnorderedListComponent,
} from "@libs/chakra";
import { Link } from "@libs/reactRouterDom";
import { Input } from "@components";
import { Icon } from "@assets/icons";

export const Header = () => {
  return (
    <FlexComponent as="nav" {...ContainerHeaderStyled}>
      <UnorderedListComponent {...ContainerListStyled}>
        <Input
          placeholder="Quero comprar algo específico..."
          onChange={(e) => console.log(e.target.value)}
          actionBtRightPosition={
            <ButtonComponent
              bg="transparent"
              // onClick={seePassword}
              // {...ContainerButtonPasswordStyled}
            >
              {Icon["search"]}
            </ButtonComponent>
          }
          minWidth="350px"
        />
        <ListItemComponent {...ContainerItemListStyled}>
          <Link to="/gallery">{<ImageComponent src={UserImg} />}</Link>
        </ListItemComponent>
        <ListItemComponent {...ContainerItemListStyled}>
          <Link to="/cart">{<ImageComponent src={BagImg} />}</Link>
        </ListItemComponent>
      </UnorderedListComponent>
    </FlexComponent>
  );
};
