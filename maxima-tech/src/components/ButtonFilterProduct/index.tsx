import { ButtonComponent } from "@libs/chakra";
import { ButtonStyled } from "./styles";
import { theme } from "@styles";

interface IButtonFilter {
  label: string;
  onClick: () => void;
}

export const ButtonFilterProduct = ({ label, onClick }: IButtonFilter) => {
  return (
    <ButtonComponent
      onClick={onClick}
      _hover={{ backgroundColor: theme.palette.blue["550"] }}
      {...ButtonStyled}
    >
      {label}
    </ButtonComponent>
  );
};
