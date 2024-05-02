import { ChakraProvider } from "@libs/chakra.ts";
import { ReactQueryProvider } from "@libs/reactQuery";
import { theme } from "@styles";
import { CartProvider } from "./CartProvider";
import { ProductProvider } from "./ProductsProvider";

export const AppProvider = ({ children }: any) => (
  <ReactQueryProvider>
    <ProductProvider>
      <CartProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </CartProvider>
    </ProductProvider>
  </ReactQueryProvider>
);
