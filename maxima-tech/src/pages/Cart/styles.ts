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

export const ContainerImageStyled: StyleComponents = {
  flexDirection: "column",
};

export const BreadcrunberStyled: StyleComponents = {
  padding: "10px",
};

export const ContainerAmountStyled: StyleComponents = {
  flexDirection: "column",
  maxHeight: "100%",
  minWidth: "352px",
};

export const ContainerTitleStyled: StyleComponents = {
  marginBottom: theme.spacing.xll,
  fontSize: theme.typography.fontSize.xxl,
};

export const ContainerValueStyled: StyleComponents = {
  justifyContent: "space-between",
  fontSize: theme.typography.fontSize.lg,
  alignItems: "center",
  display: "flex",
  marginBottom: "12px",
};

export const ContainerTotalStyled: StyleComponents = {
  fontWeight: theme.typography.fontWeights.bold,
  ...ContainerValueStyled,
};

export const ContainerButtonBuyProductsStyled: StyleComponents = {
  backgroundColor: theme.palette.blue["550"],
  color: theme.palette.white,
  marginBottom: theme.spacing.xll,
};

export const ContainerButtonClearCartStyled: StyleComponents = {
  backgroundColor: theme.palette.red["550"],
  color: theme.palette.white,
};
