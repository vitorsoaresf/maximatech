import { ChakraProvider } from "@libs/chakra.ts";
import { theme } from "@styles/index";

export const AppProvider = ({ children }: any) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);
