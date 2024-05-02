import { useReducer } from "react";
import { reducer } from "./reducer";
import { INITIAL_STATE } from "./state";
import { ProductContext } from "./context";

export const ProductProvider = ({ children }: any) => {
  const [productState, productDispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
