import { IProductContext } from "@interfaces/context/ProductProvider";
import { createContext, useContext } from "react";

export const ProductContext = createContext({} as IProductContext);
export const useProductContext = () => useContext(ProductContext);
