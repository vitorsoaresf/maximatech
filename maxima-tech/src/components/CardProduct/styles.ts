import { StyleComponents } from "@interfaces/components";
import { theme } from "@styles";

export const CardStyled: StyleComponents = {
  width: ["300px", "413.46px"],
  cursor: "pointer",
};

export const ImageStyled: StyleComponents = {
  width: "100%",
  height: "441.38px",
  objectFit: "cover",
};

export const DescriptionCardStyled: StyleComponents = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
};

export const TitleCardStyled: StyleComponents = {
  fontSize: theme.typography.fontSize.xxl,
  fontWeight: theme.typography.fontWeights.medium,
};

export const PriceCardStyled: StyleComponents = {
  display: "flex",
  gap: "12px",
  fontSize: theme.typography.fontSize.lg,
};

export const DiscountPercentageCardStyled: StyleComponents = {
  position: "absolute",
  top: "20px",
  right: "20px",
  width: ["100px", "189.93px"],
  background: "red",
  display: "flex",
  justifyContent: "center",
  fontSize: "16px",
  color: "white",
  fontWeight: theme.typography.fontWeights.medium,
  fontFamily: theme.typography.fonts.montserrat,
};

export const FadeInBoxStyled: StyleComponents = {
  opacity: 0,
  display: "flex",
  background: "white",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
};
