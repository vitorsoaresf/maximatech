import { FlexComponent, TextComponent } from "@libs/chakra";
import { useProduct } from "./hooks";
import { CardProduct, Paging } from "@components";
import { IProduct } from "@interfaces/components";
import {
  ButtonsFilterStyled,
  HomeStyled,
  PagingContainerStyled,
  ProductListStyled,
} from "./styles";
import { ELEMENT_PER_PAGE, BUTTON_LIST } from "./constants";
import { ButtonFilterProduct } from "@components";

export const Home = () => {
  const { productList, countPage, handlePagination } = useProduct();
  const quantityProducts = Number(
    (productList.data.length / ELEMENT_PER_PAGE).toFixed()
  );

  return (
    <FlexComponent {...HomeStyled}>
      <FlexComponent as="ul" {...ButtonsFilterStyled}>
        {BUTTON_LIST.map((button) => (
          <ButtonFilterProduct
            key={crypto.randomUUID()}
            label={button}
            onClick={() => console.log("haha")}
          />
        ))}
      </FlexComponent>
      <FlexComponent as="ul" {...ProductListStyled}>
        {productList.data
          .slice(countPage.rangeMin, countPage.rangeMax)
          .map((item: IProduct) => (
            <CardProduct key={crypto.randomUUID()} product={item} />
          ))}
      </FlexComponent>
      {quantityProducts && (
        <FlexComponent {...PagingContainerStyled}>
          {new Array(quantityProducts).fill("").map((_, index: number) => (
            <Paging
              key={crypto.randomUUID()}
              label={"" + (index + 1)}
              onClick={() =>
                handlePagination(
                  (index + 1) * ELEMENT_PER_PAGE - ELEMENT_PER_PAGE,
                  (index + 1) * ELEMENT_PER_PAGE
                )
              }
            />
          ))}
          <Paging
            key={crypto.randomUUID()}
            label=">"
            onClick={() =>
              handlePagination(
                quantityProducts + productList.data.length - ELEMENT_PER_PAGE,
                quantityProducts + productList.data.length
              )
            }
          />
        </FlexComponent>
      )}
    </FlexComponent>
  );
};
