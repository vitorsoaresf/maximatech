import { StyleComponents } from "@interfaces/components";
import { theme } from "@styles";

export const CotainerMainStyled: StyleComponents = {
  flexDirection: "column",
  background: theme.palette.blue["600"],
  minHeight: "100vh",
  fontFamily: theme.typography.fonts.poppins,
};
