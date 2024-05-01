import {
  ContainerFooterStyled,
  ContainerHeadingStyled,
  ContainerItemListStyled,
  ContainerListStyled,
  ContainerTitleInitialCharacterStyled,
  ContainerTitleWordStyled,
} from "./styles";
import {
  FlexComponent,
  HeadingComponent,
  ListItemComponent,
  TextComponent,
  UnorderedListComponent,
} from "@libs/chakra";
import { Link, useNavigate } from "@libs/reactRouterDom";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <FlexComponent
      as="footer"
      onClick={() => navigate("/")}
      {...ContainerFooterStyled}
    >
      <HeadingComponent as="h1" {...ContainerHeadingStyled}>
        <TextComponent {...ContainerTitleInitialCharacterStyled}>
          e
        </TextComponent>
        <TextComponent {...ContainerTitleWordStyled}>commerce</TextComponent>
      </HeadingComponent>
      <UnorderedListComponent {...ContainerListStyled}>
        <ListItemComponent {...ContainerItemListStyled}>
          <Link to="/">Home</Link>
        </ListItemComponent>
        <ListItemComponent {...ContainerItemListStyled}>
          <Link to="/">Tênis</Link>
        </ListItemComponent>
        <ListItemComponent {...ContainerItemListStyled}>
          <Link to="/">Camisetas</Link>
        </ListItemComponent>
        <ListItemComponent {...ContainerItemListStyled}>
          <Link to="/">Calças</Link>
        </ListItemComponent>
      </UnorderedListComponent>
    </FlexComponent>
  );
};
