import { ButtonComponent } from "@libs/chakra";
import { PagingStyled } from "./styles";
import { theme } from "@styles";

interface IPaging {
  label: string;
  onClick: () => void;
  active?: boolean;
}

export const Paging = ({ label, onClick, active = false }: IPaging) => {
  return (
    <ButtonComponent
      onClick={onClick}
      {...(active && {
        backgroundColor: theme.palette.black,
        color: theme.palette.white,
      })}
      _hover={{
        backgroundColor: theme.palette.black,
        color: theme.palette.white,
      }}
      {...PagingStyled}
    >
      {label}
    </ButtonComponent>
  );
};
