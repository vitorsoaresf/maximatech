import { ButtonComponent } from "@libs/chakra";
import { ButtonStyled } from "./styles";
import { theme } from "@styles";

interface IButtonFilter {
  label: string;
  onClick: () => void;
  active?: boolean;
}

export const ButtonFilterProduct = ({
  label,
  onClick,
  active = false,
}: IButtonFilter) => {
  return (
    <ButtonComponent
      onClick={onClick}
      {...(active && {
        backgroundColor: theme.palette.blue["550"],
        color: theme.palette.white,
      })}
      _hover={{
        backgroundColor: theme.palette.blue["550"],
        color: theme.palette.white,
      }}
      {...ButtonStyled}
    >
      {label}
    </ButtonComponent>
  );
};
