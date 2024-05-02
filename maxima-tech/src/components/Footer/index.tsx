import { useProduct } from "@hooks/useProducts";
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
  const { filterProductsByCategory } = useProduct();

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
        <ListItemComponent
          onClick={() => filterProductsByCategory("Tênis")}
          {...ContainerItemListStyled}
        >
          <Link to="/">Tênis</Link>
        </ListItemComponent>
        <ListItemComponent
          onClick={() => filterProductsByCategory("Camisetas")}
          {...ContainerItemListStyled}
        >
          <Link to="/">Camisetas</Link>
        </ListItemComponent>
        <ListItemComponent
          onClick={() => filterProductsByCategory("Calças")}
          {...ContainerItemListStyled}
        >
          <Link to="/">Calças</Link>
        </ListItemComponent>
      </UnorderedListComponent>
    </FlexComponent>
  );
};
