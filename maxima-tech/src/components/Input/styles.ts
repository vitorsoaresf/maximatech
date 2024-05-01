import { StyleComponents } from "@interfaces/components";
import { theme } from "@styles";

export const ContainerInputStyled: StyleComponents = {
  display: "flex",
  flexDirection: "column",
};

export const ContainerGroupInput: StyleComponents = {
  display: "flex",
  alignItems: "center",
};

export const ContainerIconInputStyled: StyleComponents = {
  color: theme.palette.gray["300"],
};

export const ContainerErrorMessageStyled: StyleComponents = {
  color: theme.palette.red["300"],
  fontSize: theme.typography.fontSize["sm"],
};
