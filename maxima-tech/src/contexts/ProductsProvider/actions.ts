import { Dispatch } from "react";
import { IIProductAction } from "@interfaces/context/ProductProvider";
import { EProducts } from "./types";
import { IProduct } from "@interfaces/components";

export const setProductList = (
  dispatch: Dispatch<IIProductAction>,
  payload: Array<IProduct>
) => {
  dispatch({ type: EProducts.SET_PRODUCTS, payload: payload });
};

export const setProductListFiltered = (
  dispatch: Dispatch<IIProductAction>,
  payload: Array<IProduct>
) => {
  dispatch({ type: EProducts.SET_PRODUCTS_FILTERED, payload: payload });
};

export const setCategory = (
  dispatch: Dispatch<IIProductAction>,
  payload: string
) => {
  dispatch({ type: EProducts.SET_CATEGORY, payload: payload });
};

export const setOrder = (
  dispatch: Dispatch<IIProductAction>,
  payload: string
) => {
  dispatch({ type: EProducts.SET_ORDER, payload: payload });
};

export const setTerm = (
  dispatch: Dispatch<IIProductAction>,
  payload: string
) => {
  dispatch({ type: EProducts.SET_TERM, payload: payload });
};
