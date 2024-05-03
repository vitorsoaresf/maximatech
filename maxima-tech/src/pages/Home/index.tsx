import {
  FlexComponent,
  HeadingComponent,
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
  ContainerNotFoundProducts,
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
import { useEffect, useState } from "@libs/react";
import ImgViewProducts from "@assets/img/eyes.svg";

export const Home = () => {
  const [pageSelected, setPageSelected] = useState(0);
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

    if (productState.category || productState.order) {
      filterProductsByCategory(productState.category);
    } else {
      setProductListFiltered(productDispatch, productList.data);
    }
  }, [productList.data]);

  return (
    <>
      <FlexComponent {...ContainerImageMainStyled}>
        <ImageComponent
          src={ImgMain}
          alt="ecommerce de produtos"
          loading="lazy"
          {...ImageMainStyled}
        />
      </FlexComponent>

      <FlexComponent {...HomeStyled}>
        <FlexComponent as="ul" {...ButtonsFilterStyled}>
          {CATEGORY_LIST.map((category) => (
            <ButtonFilterProduct
              key={crypto.randomUUID()}
              label={category || "Todas as categorias"}
              onClick={() => {
                filterProductsByCategory(category);
              }}
              active={category === productState.category}
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

        <FlexComponent as="ul" data-test="list-products" {...ProductListStyled}>
          {productState.listFiltered.length > 0 ? (
            productState.listFiltered
              .slice(countPage.rangeMin, countPage.rangeMax)
              .map((item: IProduct) => (
                <CardProduct key={crypto.randomUUID()} product={item} />
              ))
          ) : (
            <FlexComponent {...ContainerNotFoundProducts}>
              <HeadingComponent data-test="not-found-products">
                Não foi possível encontrar nenhum produto.
              </HeadingComponent>
              <ImageComponent
                src={ImgViewProducts}
                alt="Não há produtos para serem visualizados"
                loading="lazy"
              />
            </FlexComponent>
          )}
        </FlexComponent>

        {quantityProducts > 0 && (
          <FlexComponent {...PagingContainerStyled}>
            {new Array(quantityProducts).fill("").map((_, index: number) => (
              <Paging
                key={crypto.randomUUID()}
                label={"" + (index + 1)}
                active={pageSelected === index + 1}
                onClick={() => {
                  setPageSelected(index + 1);
                  handlePagination(
                    (index + 1) * ELEMENT_PER_PAGE - ELEMENT_PER_PAGE,
                    (index + 1) * ELEMENT_PER_PAGE
                  );
                }}
              />
            ))}
            <Paging
              key={crypto.randomUUID()}
              label=">"
              onClick={() => {
                setPageSelected(quantityProducts);

                handlePagination(
                  quantityProducts +
                    productState.listFiltered.length -
                    ELEMENT_PER_PAGE,
                  quantityProducts + productState.listFiltered.length
                );
              }}
            />
          </FlexComponent>
        )}
      </FlexComponent>
    </>
  );
};
