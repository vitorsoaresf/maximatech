import { Dispatch } from "react";
import { IICartAction } from "@interfaces/context/CartProvider";
import { ECart } from "./types";
import { IProduct } from "@interfaces/components";

export const setCartList = (
  dispatch: Dispatch<IICartAction>,
  payload: Array<IProduct>
) => {
  dispatch({ type: ECart.SET_CART, payload: payload });
};
