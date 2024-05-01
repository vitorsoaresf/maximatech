import { StyleComponents } from "@interfaces/components";
import { theme } from "@styles";

export const ContainerProductStyled: StyleComponents = {
  padding: "0 100px",
  justifyContent: "center",
  gap: "150px",
};

export const ContainerImage: StyleComponents = {
  //   width: "100%",
};

export const ImageProductStyled: StyleComponents = {
  maxWidth: "514px",
  maxHeight: "514px",
  width: "100%",
  height: "441.38px",
};

export const ContainerInfoStyled: StyleComponents = {
  flexDirection: "column",
  justifyContent: "space-between",
};

export const DetailsStyled: StyleComponents = {
  flexDirection: "column",
  width: "100%",
  justifyContent: "start",
  maxHeight: "514px",
  maxWidth: "501px",
};

const fontStyleMontserrat: StyleComponents = {
  fontFamily: theme.typography.fonts.montserrat,
  fontWeight: theme.typography.fontWeights.bold,
};

const fontStylePoppins: StyleComponents = {
  fontFamily: theme.typography.fonts.poppins,
  fontWeight: theme.typography.fontWeights.bold,
};

export const NameStyled: StyleComponents = {
  fontSize: theme.typography.fontSize.xxxl,
  fontWeight: theme.typography.fontWeights.bold,
  ...fontStylePoppins,
};

export const PriceStyled: StyleComponents = {
  fontSize: theme.typography.fontSize.xxl,
  color: theme.palette.red["550"],
  marginBottom: theme.spacing.xl,
  ...fontStyleMontserrat,
};

export const DescriptionStyled: StyleComponents = {
  fontSize: theme.typography.fontSize.xxxl,
  fontWeight: theme.typography.fontWeights.normal,
  marginBottom: theme.spacing.xl,
};
