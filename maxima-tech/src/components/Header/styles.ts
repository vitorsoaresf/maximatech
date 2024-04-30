import { ListProps } from "@chakra-ui/react";
import { StyleComponents } from "@interfaces/components";
import { theme } from "@styles/index";

export const ContainerHeaderStyled: StyleComponents = {
  padding: "20px 20px",
  backgroundColor: theme.palette.gray["100"],
  display: "flex",
  flexDirection: "column",
  fontFamily: theme.typography.fonts.body,
  justifyContent: "space-between",
  // color: theme.palette.white,
};

export const ContainerListStyled: StyleComponents | ListProps = {
  display: "flex",
  justifyContent: "end",
  textDecoration: "none",
  listStyleType: "none",
  width: "100%",
  alignItems: "center",
  gap: "20px",
  margin: 0,
};

export const styledHover = {
  _hover: { textDecor: "underline" },
};

export const ContainerItemListStyled: StyleComponents = {
  ...styledHover,
  fontWeight: "bold",
};
