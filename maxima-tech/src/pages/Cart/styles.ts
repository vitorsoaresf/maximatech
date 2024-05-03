import { StyleComponents } from "@interfaces/components";
import { theme } from "@styles";

export const ContainerProductStyled: StyleComponents = {
  justifyContent: "center",
  alignItems: ["center", "center", "center", "unset"],
  flexDirection: ["column", "column", "column", "row"],
  gap: "150px",
  marginTop: theme.spacing.xxl,
  marginBottom: "200px",
  padding: "0 20px",
};

export const ContainerImageWithoutStyled: StyleComponents = {
  width: "400px",
};

export const ContainerProductsStyled: StyleComponents = {
  flexDirection: "column",
};

export const BreadcrunberStyled: StyleComponents = {};

export const ContainerAmountStyled: StyleComponents = {
  flexDirection: "column",
  maxHeight: "100%",
  minWidth: ["200px", "300px", "300px", "300px", "352px"],
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
  display: "flex",
};

export const ContainerButtonClearCartStyled: StyleComponents = {
  backgroundColor: theme.palette.red["550"],
  color: theme.palette.white,
  display: "flex",
};
