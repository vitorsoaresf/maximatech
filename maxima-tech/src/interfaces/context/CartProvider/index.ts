import { ECart } from "@contexts/CartProvider/types";
import { IProduct } from "@interfaces/components";
import { Dispatch } from "react";

export interface ICartState {
  list: Array<IProduct>;
}

export interface IICartAction {
  type: ECart;
  payload?: any;
}

export interface ICartContext {
  cartState: ICartState;
  cartDispatch: Dispatch<IICartAction>;
}
