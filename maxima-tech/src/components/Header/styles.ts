import { ListProps } from "@chakra-ui/react";
import { StyleComponents } from "@interfaces/components";
import { theme } from "@styles";

export const ContainerHeaderStyled: StyleComponents = {
  padding: "20px 20px",
  backgroundColor: theme.palette.gray["100"],
  display: "flex",
  flexDirection: ["column", "column", "row"],
  fontFamily: theme.typography.fonts.body,
  justifyContent: ["center", "center", "space-between"],
  alignItems: "center",
};

export const ContainerHeadingStyled: StyleComponents = {
  fontSize: theme.typography.fontSize.xxxxl,
  textAlign: "left",
  fontFamily: "Sonsie One , Verdana,Arial, Helvetica, sans-serif",
  display: "flex",
  marginRight: theme.spacing.lg,
};

export const ContainerTitleInitialCharacterStyled: StyleComponents = {
  color: theme.palette.blue["550"],
};

export const ContainerTitleWordStyled: StyleComponents = {
  color: theme.palette.red["550"],
};

export const ContainerListStyled: StyleComponents | ListProps = {
  display: "flex",
  justifyContent: ["center", "center", "end"],
  textDecoration: "none",
  listStyleType: "none",
  width: "100%",
  alignItems: "center",
  gap: "20px",
  margin: 0,
  flexWrap: "wrap",
};

export const styledHover = {
  _hover: { textDecor: "underline" },
};

export const ContainerItemListStyled: StyleComponents = {
  ...styledHover,
  fontWeight: "bold",
  display: "flex",
  gap: "16px",
};
