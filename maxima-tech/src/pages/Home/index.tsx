import { FlexComponent } from "@libs/chakra";
import { useProduct } from "./hooks";
import { CardProduct, Paging } from "@components";
import { IProduct } from "@interfaces/components";
import {
  ButtonsFilterStyled,
  HomeStyled,
  PagingContainerStyled,
  ProductListStyled,
} from "./styles";
import { ELEMENT_PER_PAGE, CATEGORY_LIST } from "./constants";
import { ButtonFilterProduct } from "@components";

export const Home = () => {
  const {
    products,
    countPage,
    handlePagination,
    handleCategory,
    quantityProducts,
  } = useProduct();

  return (
    <FlexComponent {...HomeStyled}>
      <FlexComponent as="ul" {...ButtonsFilterStyled}>
        {CATEGORY_LIST.map((category) => (
          <ButtonFilterProduct
            key={crypto.randomUUID()}
            label={category || "Todas as categorias"}
            onClick={() => handleCategory(category)}
          />
        ))}
      </FlexComponent>
      <FlexComponent as="ul" {...ProductListStyled}>
        {products
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
                quantityProducts + products.length - ELEMENT_PER_PAGE,
                quantityProducts + products.length
              )
            }
          />
        </FlexComponent>
      )}
    </FlexComponent>
  );
};
