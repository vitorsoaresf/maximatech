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
  padding: "0 20px",
  flexDirection: "column",
};

export const ImageProductStyled: StyleComponents = {
  maxWidth: "514px",
  width: "100%",
};

export const ContainerInfoStyled: StyleComponents = {
  flexDirection: "column",
  justifyContent: "space-between",
  maxHeight: "100%",
  padding: "0 20px",
};

export const DetailsStyled: StyleComponents = {
  flexDirection: "column",
  width: "100%",
  justifyContent: "start",
  maxHeight: "514px",
  maxWidth: "501px",
  padding: "20px 0",
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

export const DescriptionContentStyled: StyleComponents = {
  wordBreak: "break-word",
  overflowY: "scroll",
};

export const BreadcrunberStyled: StyleComponents = {
  padding: "10px",
};
