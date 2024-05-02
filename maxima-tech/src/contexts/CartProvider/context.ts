import { ICartContext } from "@interfaces/context/CartProvider";
import { createContext, useContext } from "react";

export const CartContext = createContext({} as ICartContext);
export const useCartContext = () => useContext(CartContext);
