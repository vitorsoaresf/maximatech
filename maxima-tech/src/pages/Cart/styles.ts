import { StyleComponents } from "@interfaces/components";
import { theme } from "@styles";

export const ContainerProductStyled: StyleComponents = {
  padding: "0 100px",
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

export const ContainerInfoStyled: StyleComponents = {
  flexDirection: "column",
  justifyContent: "space-between",
  maxHeight: "100%",
};

export const BreadcrunberStyled: StyleComponents = {
  padding: "10px",
};
