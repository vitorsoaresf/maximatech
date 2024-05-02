import { StyleComponents } from "@interfaces/components";
import { theme } from "@styles";

export const ContainerProductStyled: StyleComponents = {
  justifyContent: "center",
  alignItems: ["center", "center", "center", "unset"],
  flexDirection: ["column", "column", "column", "row"],
  gap: "150px",
  marginTop: theme.spacing.xxl,
  marginBottom: "200px",
};

export const ContainerImage: StyleComponents = {
  flexDirection: "column",
};

export const BreadcrunberStyled: StyleComponents = {
  padding: "10px",
};

export const ContainerAmountValueStyled: StyleComponents = {
  flexDirection: "column",
  justifyContent: "space-between",
  maxHeight: "100%",
};
