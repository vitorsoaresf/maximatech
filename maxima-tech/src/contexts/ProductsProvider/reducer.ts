import {
  IProductState,
  IIProductAction,
} from "@interfaces/context/ProductProvider";
import { EProducts } from "./types";

export const reducer = (state: IProductState, action: IIProductAction) => {
  switch (action.type) {
    case EProducts.SET_PRODUCTS:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return { ...state };
  }
};
