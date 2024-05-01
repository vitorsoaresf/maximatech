import { StyleComponents } from "@interfaces/components";
import { theme } from "@styles";

export const HomeStyled: StyleComponents = {
  padding: "20px 20px",
  // justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
};

export const ButtonsFilterStyled: StyleComponents = {
  display: "flex",
  flexDirection: ["column", "row"],
  justifyContent: "center",
  flexWrap: "wrap",
  width: "100%",
  gap: "25px",
  marginBottom: theme.spacing.xxxl,
};

export const ProductListStyled: StyleComponents = {
  justifyContent: "center",
  flexWrap: "wrap",
  gap: theme.spacing.md,
};
