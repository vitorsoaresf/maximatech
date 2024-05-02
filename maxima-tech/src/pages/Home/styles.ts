import { StyleComponents } from "@interfaces/components";
import { theme } from "@styles";

export const ContainerImageMainStyled: StyleComponents = {
  marginBottom: "67px",
};

export const ImageMainStyled: StyleComponents = {
  width: "100%",
  objectFit: "cover",
};

export const HomeStyled: StyleComponents = {
  padding: ["20px 20px", "20px 45px"],
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "200px",
};

export const ButtonsFilterStyled: StyleComponents = {
  display: "flex",
  flexDirection: ["column", "column", "column", "row"],
  justifyContent: ["center", "center", "center", "center", "space-between"],
  alignItems: "center",
  width: "100%",
  gap: "25px",
  marginBottom: theme.spacing.xxxl,
};

export const OrderElementsStyled: StyleComponents = {
  justifyContent: "space-between",
  width: "100%",
  marginBottom: theme.spacing.xxl,
  fontSize: theme.typography.fontSize.xl,
};

export const SelectElementsStyled: StyleComponents = {
  maxWidth: ["200px", "200px", "311.38px"],
  maxHeight: "50px",
};

export const ProductListStyled: StyleComponents = {
  justifyContent: ["center", "center", "center", "space-between", "start"],
  alignItems: "start",
  flexWrap: "wrap",
  gap: "20px",
  marginBottom: "40px",
};

export const PagingContainerStyled: StyleComponents = {
  gap: "12px",
};
