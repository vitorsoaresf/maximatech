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
