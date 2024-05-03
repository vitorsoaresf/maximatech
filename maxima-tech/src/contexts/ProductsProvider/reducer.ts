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
    case EProducts.SET_PRODUCTS_FILTERED:
      return {
        ...state,
        listFiltered: action.payload,
      };
    case EProducts.SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case EProducts.SET_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    case EProducts.SET_TERM:
      return {
        ...state,
        term: action.payload,
      };
    default:
      return { ...state };
  }
};
