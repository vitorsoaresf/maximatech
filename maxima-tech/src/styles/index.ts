import { extendTheme } from "@chakra-ui/react";
import { borders } from "./border";
import { spacings } from "./spacing";
import { sizes } from "./size";
import { shadows } from "./shadows";
import { zIndices } from "./z-index";
import { palettes } from "./palettes";
import { typography } from "./typography";

export const theme = extendTheme({
  border: borders,
  palette: palettes,
  shadow: shadows,
  spacing: spacings,
  zIndex: zIndices,
  size: sizes,
  typography: typography,
});
