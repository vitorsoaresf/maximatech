import { EProducts } from "@contexts/ProductsProvider/types";
import { IProduct } from "@interfaces/components";
import { Dispatch } from "react";

export interface IProductState {
  list: Array<IProduct>;
  listFiltered: Array<IProduct>;
  category: string;
  order: string;
  term: string;
}

export interface IIProductAction {
  type: EProducts;
  payload?: any;
}

export interface IProductContext {
  productState: IProductState;
  productDispatch: Dispatch<IIProductAction>;
}
