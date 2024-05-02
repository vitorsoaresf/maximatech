import { ChakraProvider } from "@libs/chakra.ts";
import { ReactQueryProvider } from "@libs/reactQuery";
import { theme } from "@styles";
import { CartProvider } from "./CartProvider";

export const AppProvider = ({ children }: any) => (
  <ReactQueryProvider>
    <CartProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CartProvider>
  </ReactQueryProvider>
);
