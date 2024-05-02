import { useReducer } from "react";
import { reducer } from "./reducer";
import { INITIAL_STATE } from "./state";
import { CartContext } from "./context";

export const CartProvider = ({ children }: any) => {
  const [cartState, cartDispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};
