import { ICartState, IICartAction } from "@interfaces/context/CartProvider";
import { ECart } from "./types";

export const reducer = (state: ICartState, action: IICartAction) => {
  switch (action.type) {
    case ECart.SET_CART:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return { ...state };
  }
};
