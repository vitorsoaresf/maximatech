import { ChakraProvider } from "@libs/chakra.ts";
import { ReactQueryProvider } from "@libs/reactQuery";
import { theme } from "@styles";

export const AppProvider = ({ children }: any) => (
  <ReactQueryProvider>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  </ReactQueryProvider>
);
