import {
  BreadcrumbComponent,
  BreadcrumbItemComponent,
  BreadcrumbLinkComponent,
  FlexComponent,
} from "@libs/chakra";
import {
  BreadcrunberStyled,
  ContainerImage,
  ContainerInfoStyled,
  ContainerProductStyled,
} from "./styles";
import { BreadcrumbItem } from "@chakra-ui/react";
import { CardCart } from "@components";
import { useRedirect } from "@hooks/useRedirect";
import { useCart } from "@hooks/useCart";

export const Cart = () => {
  const { redirectPage } = useRedirect();
  const { cartState } = useCart();

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

      <FlexComponent {...ContainerInfoStyled}></FlexComponent>
    </FlexComponent>
  );
};
