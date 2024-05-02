import {
  FlexComponent,
  ImageComponent,
  SelectComponent,
  TextComponent,
} from "@libs/chakra";
import { useProduct } from "@hooks/useProducts";
import { CardProduct, Paging } from "@components";
import { IProduct } from "@interfaces/components";
import {
  ButtonsFilterStyled,
  ContainerImageMainStyled,
  HomeStyled,
  ImageMainStyled,
  OrderElementsStyled,
  PagingContainerStyled,
  ProductListStyled,
  SelectElementsStyled,
} from "./styles";
import {
  ELEMENT_PER_PAGE,
  CATEGORY_LIST,
  ORDER_LIST,
} from "@constants/Products";
import { ButtonFilterProduct } from "@components";
import ImgMain from "@assets/img/cover.svg";
import { useProductContext } from "@contexts/ProductsProvider/context";
import {
  setProductList,
  setProductListFiltered,
} from "@contexts/ProductsProvider/actions";
import { useEffect } from "@libs/react";
import ImgViewProducts from "@assets/img/eyes.svg";

export const Home = () => {
  const { productState, productDispatch } = useProductContext();

  const {
    productList,
    countPage,
    handlePagination,
    quantityProducts,
    filterProductsByCategory,
    filterProductsByOrder,
  } = useProduct();

  useEffect(() => {
    setProductList(productDispatch, productList.data);
    setProductListFiltered(productDispatch, productList.data);
  }, [productList.data]);

  return (
    <>
      <FlexComponent {...ContainerImageMainStyled}>
        <ImageComponent
          src={ImgMain}
          alt="ecommerce de produtos"
          {...ImageMainStyled}
        />
      </FlexComponent>
      <FlexComponent {...HomeStyled}>
        <FlexComponent as="ul" {...ButtonsFilterStyled}>
          {CATEGORY_LIST.map((category) => (
            <ButtonFilterProduct
              key={crypto.randomUUID()}
              label={category || "Todas as categorias"}
              onClick={() => filterProductsByCategory(category)}
            />
          ))}
        </FlexComponent>
        <FlexComponent {...OrderElementsStyled}>
          <TextComponent>
            {productState.listFiltered.length} Produtos
          </TextComponent>
          <SelectComponent
            placeholder="(Todos)"
            onChange={(e: any) => filterProductsByOrder(e.target.value)}
            value={productState.order}
            {...SelectElementsStyled}
          >
            {ORDER_LIST.map((item: any) => (
              <option key={crypto.randomUUID()} value={item.value}>
                {item.label}
              </option>
            ))}
          </SelectComponent>
        </FlexComponent>
        <FlexComponent as="ul" {...ProductListStyled}>
          {productState.listFiltered.length > 0 ? (
            productState.listFiltered
              .slice(countPage.rangeMin, countPage.rangeMax)
              .map((item: IProduct) => (
                <CardProduct key={crypto.randomUUID()} product={item} />
              ))
          ) : (
            <ImageComponent
              src={ImgViewProducts}
              alt="Não há produtos para serem visualizados"
            />
          )}
        </FlexComponent>
        {quantityProducts > 0 && (
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
                  quantityProducts +
                    productState.listFiltered.length -
                    ELEMENT_PER_PAGE,
                  quantityProducts + productState.listFiltered.length
                )
              }
            />
          </FlexComponent>
        )}
      </FlexComponent>
    </>
  );
};
