import { StyleComponents } from "@interfaces/components";
import { theme } from "@styles";

export const CardStyled: StyleComponents = {
  margin: "16px 0",
  fontFamily: theme.typography.fonts.saira,
};

export const ContainerCardStyled: StyleComponents = {
  flexDirection: ["column", "column", "row"],
};

export const ContainerImageStyled: StyleComponents = {
  width: "256px",
  height: "211px",
  margin: ["0 auto", "0 auto", "0"],
};

export const CardImageStyled: StyleComponents = {
  width: "100%",
  borderRadius: theme.border.radius.md,
};

export const CardDescriptionStyled: StyleComponents = {
  flexDirection: "column",
  marginLeft: ["0", "0", theme.spacing.xl],
  marginTop: [theme.spacing.xl, theme.spacing.xl, "0"],
  width: ["300px", "300px", "300px", "250px", "429px"],
};

const FontSairaStyled = {
  fontFamily: theme.typography.fonts.saira,
};

export const DetailsProductStyled: StyleComponents = {
  fontSize: theme.typography.fontSize.xxl,
  fontWeight: theme.typography.fontWeights.normal,
  marginBottom: "12px",
  display: "flex",
  justifyContent: "space-between",
  ...FontSairaStyled,
};

export const RemoveProductStyled: StyleComponents = {
  cursor: "pointer",
  borderRadius: theme.border.radius.md,
  color: theme.palette.red["550"],
  padding: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
};

export const DescriptionProductStyled: StyleComponents = {
  fontSize: theme.typography.fontSize.sm,
  marginBottom: theme.spacing.xl,
  display: "flex",
};

export const SelectQuantityStyled: StyleComponents = {
  maxWidth: "70px",
  maxHeight: "40px",
};

export const ContainerPriceQuantityStyled: StyleComponents = {
  justifyContent: "space-between",
  alignItems: "flex-end",
};

export const ContainerPriceStyled: StyleComponents = {
  flexDirection: "column",
  fontWeight: theme.typography.fontWeights.semibold,
};
